import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { requireAuth } from "../../components/utils/requireAuth";
import TestContext from "../../components/context/TestContext";
import SidebarBehave from "../../components/utils/sidebarBehave";
import { getScore, getState } from "../../components/Quiz/getQuizStats";
import Agree from "../../components/Quiz/agree";
import Score from "../../components/Quiz/score";
import Timer from "../../components/Quiz/timer";
import { UseLeavePageConfirm } from "../../components/Alert/TestAlert";

export default function Quiz({ session }) {
  const Router = useRouter();
  const QuizId = Router.query.quizId;
  const { FinalTestChance, isAgreed,setisAgreed, showScore, setShowScore,FinalScore } = useContext(
    TestContext
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [QuestionState, setQuestionState] = useState([]);
  const [QuestionOptions, setQuestionOptions] = useState([]);

  const duration = () => {
    return QuizId < 4 ? 15 * 60 * 1000 : 25 * 60 * 1000;
  };

  const shuffleArray = () => {
    let arr = [];
    QuestionState.map((question) => {
      let array = question?.options;
      let i = array?.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      arr.push(array);
    });
    return arr;
  };


  useEffect(() => {
    if (QuizId === 4 && FinalTestChance <= 0) 
      Router.push("/");
    else if(QuizId === 4 && (FinalScore/25) *100 >= 40  )
    Router.push("/reward")
  });


  useEffect(() => {
    const form = JSON.parse(localStorage.getItem("formData"));
    if (QuizId !== 4) {
      fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/getQuestion/${form[0]?.class}/${QuizId}`
      )
        .then((res) => res.json())
        .then((data) => {
          setQuestionState(data);
        });
    } else {
      fetch(`${process.env.NEXT_PUBLIC_URL}/api/getFinal/${form[0]?.class}`)
        .then((res) => res.json())
        .then((data) => {
          setQuestionState(data);
        });
    }
  }, [!QuestionState]);
  

  useEffect(() => {
    setQuestionOptions(shuffleArray());
  }, [QuestionState]);

  useEffect(() => {
    setisAgreed(!isAgreed)
  }, [Router.asPath]);
 
  function handleAnswerOption(answer, e) {
    e.preventDefault();
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
  }

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    if (selectedOptions[currentQuestion]) {
      const nextQues = currentQuestion + 1;
      nextQues < QuestionState?.length && setCurrentQuestion(nextQues);
    }
  };

  const handleSubmitButton = async () => {
    
    if (selectedOptions[currentQuestion]) {
      let newScore = 0;
      for (let i = 0; i < QuestionState?.length; i++) {
        QuestionState[i].options.map((answer) => {
          answer.isCorrect && answer.answer === selectedOptions[i]?.answerByUser && newScore++;
        });
      }
      setScore(newScore);
      setShowScore(true);

      await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/updateScore/${session.user.id}`,
        {
          method: "PUT",
          body: JSON.stringify(getScore(newScore, QuizId)),
        }
      );
      await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/updateState/${session.user.id}`,
        {
          method: "PUT",
          body: JSON.stringify(
            getState(newScore, QuizId, QuestionState?.length, FinalTestChance)
          ),
        }
      );
    }
  };
 

  return (
    <SidebarBehave>
      {/* main page */}
      {!isAgreed ? (
        <Agree />
      ) : showScore ? (
        <Score score={score} length={QuestionState?.length} />
      ) : (
        <div
          className={`flex flex-col  w-screen  gap-6 md:gap-10 pb-10 px-1 items-center`}
        >
          {/* title & timer area */}
          <div
            className={`flex flex-col  rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] dark:theme-dark shadow-md py-5 pt-8 items-center justify-center text-center  gap-4  w-full sm:w-11/12 md:w-9/12 `}
          >
            <span
              className={` text-3xl text-skin-base bg-skin-muted border-2 border-skin-base px-3 py-3 w-9/12 rounded-xl shadow-sm  dark:theme-dark font-bold capitalize `}
            >
              {QuizId <= 3 ? `Unit- ${QuizId}` : "Final-Test"}
            </span>

            <Timer submit={() => handleSubmitButton()} duration={duration}  />
          </div>

          {/* quiz area */}
          <div className='flex flex-col w-full md:w-7/12 gap-8 py-4 px-3 sm:px-5 rounded-xl justify-center shadow-sm  bg-skin-base dark:bg-gradient-to-r from-[#222222] to-[#1a1a1a]'>
            {/* question */}
            <div
              className={`flex flex-col items-center rounded-xl border-2 border-skin-base bg-skin-muted dark:theme-dark px-2 sm:px-6 md:px-10 py-2 sm:py-3 md:py-5 text-center`}
            >
              <span className='px-2 py-2 text-sm sm:text-md md:text-lg w-full md:w-4/6 text-skin-muted rounded-xl bg-skin-dull dark:theme-dark '>
                Question {currentQuestion + 1} of {QuestionState?.length}
              </span>
              <div
                className={`mt-4 text-md md:text-xl text-center text-skin-base dark:theme-dark font-bold`}
              >
                {QuestionState[currentQuestion]?.question}
              </div>
            </div>

            {/* options */}
            <div className='flex flex-col justify-center w-full gap-3'>
            {QuestionState?.length > 0 &&
                QuestionOptions[currentQuestion]?.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center w-full py-3 pl-5 border-2 cursor-pointer border-skin-muted rounded-3xl bg-skin-muted dark:theme-dark shadow-sm hover:bg-skin-btn-hover-muted '
                    onClick={(e) => handleAnswerOption(item.answer, e)}
                  >
                    <input
                      type='radio' 
                      name={item.answer}
                      value={item.answer}
                      checked={
                        item.answer ===
                        selectedOptions[currentQuestion]?.answerByUser
                      }
                      onChange={(e) => handleAnswerOption(item.answer, e)}
                      className='w-6 h-6 bg-black'
                    />
                    <span className='ml-6 text-skin-base text-md md:tex-lg font-medium '>
                      {item.answer}
                    </span>
                  </div>
                ))}
            </div>
            <div className='flex justify-between w-full mt-4 text-white px-5 gap-6 '>
              <button
                onClick={handlePrevious}
                className={`${
                  currentQuestion !== 0 ? "" : "opacity-50 cursor-not-allowed"
                } w-[49%] py-3 bg-skin-btn-mt hover:bg-skin-btn-mt-hover rounded-3xl text-xl shadow-md`}
              >
                Previous
              </button>
              <button
                onClick={
                  currentQuestion + 1 === QuestionState?.length
                    ? handleSubmitButton
                    : handleNext
                }
                className={`${
                  selectedOptions[currentQuestion]
                    ? ""
                    : "opacity-50 cursor-not-allowed"
                } w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md`}
              >
                {currentQuestion + 1 === QuestionState?.length
                  ? "Submit"
                  : "Next"}
              </button>
            </div>
          </div>
        </div>
      )}
    </SidebarBehave>
  );
}

export async function getServerSideProps(context) {
  return requireAuth(context, ({ session }) => {
    return {
      props: { session },
    };
  });
}
