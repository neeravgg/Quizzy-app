import React, { useContext } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import TestContext from "../context/TestContext";

const Color = ["from-black to-gray-900"];

export default function Card() {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");
  const {
    UnitTest1,
    UnitTest2,
    UnitTest3,
    FinalTest,
    UnitScore1,
    UnitScore2,
    UnitScore3,
    FinalScore,
  } = useContext(TestContext);

  //percentage calculation
  const unitPercentage = () => {
    let count = 0;
    if (UnitTest1 === "2") count++;
    if (UnitTest2 === "2") count++;
    if (UnitTest3 === "2") count++;
    return (count / 3) * 100;
  };
  const finalPercentage = () => {
    return FinalTest === "4" ? 100 : 0;
  };

  // Grade calculation
  const unitGrade = () => {
    let score = 0;
    let total = 0;

    if (UnitTest1 === "2") {
      score += UnitScore1;
      total += 15;
    }
    if (UnitTest2 === "2") {
      score += UnitScore2;
      total += 15;
    }
    if (UnitTest3 === "2") {
      score += UnitScore3;
      total += 15;
    }

    let grade = (score / total) * 100;
    return gradeCalculate(grade);
  };
  const finalGrade = () => {
    let score = 0;
    if (FinalTest === "2") score += FinalScore;
    let grade = (score / 25) * 100;
    return gradeCalculate(grade);
  };
  const gradeCalculate = (grade) => {
    if (grade >= 40) return "D";
    if (grade >= 55) return "C";
    if (grade >= 65) return "B";
    if (grade >= 75) return "A";
    if (grade >= 85) return "A+";
    return "--";
  };

  const marksMenu = [
    {
      title: "Unit 1",
      marks: UnitScore1,
    },
    {
      title: "Unit 2",
      marks: UnitScore2,
    },
    {
      title: "Unit 3",
      marks: UnitScore3,
    },
    {
      title: "Final test",
      marks: FinalScore,
    },
  ];
  const gradeMenu = [
    {
      title: "Unit Test",
      function: unitGrade(),
    },
    {
      title: "Final Test",
      function: finalGrade(),
    },
  ];
  const progressMenu = [
    {
      title: "Unit Test",
      function: `${unitPercentage()}%`,
    },
    {
      title: "Final Test",
      function: `${finalPercentage()}%`,
    },
  ];

  return (
    <div className={` flex `}>
      <div
        className={`${isLaptop ? " flex-row  " : " flex-col"} ${isTablet &&
          "px-10"} flex  w-full gap-6`}
      >
        {/* Progress */}
        <div className=' flex-1 '>
          <div
            className={`flex flex-col transform h-80 cursor-pointer transition duration-200 ease-in-out px-2  py-4 shadow-md border-2 border-skin-muted  rounded-3xl bg-skin-base  dark:bg-gradient-to-bl ${
              Color[0]
            }  gap-4 dark:theme-dark ${isLaptop && "hover:scale-105"}`}
          >
            {/* title */}
            <div className='flex flex-row justify-center px-4 '>
              <span className=' text-skin-base dark:theme-dark text-3xl font-bold '>
                Progress
              </span>
            </div>
            {/* bars */}
            {progressMenu.map((menu) => (
              <div className='grid grid-rows-8 gap-3 bg-skin-hue dark:bg-skin-gold px-4 py-5 rounded-2xl'>
                <span className=' text-skin-base dark:theme-dark text-xl font-bold '>
                  {menu.title}
                </span>
                <div className='w-full h-6 bg-skin-base dark:theme-dark rounded-full'>
                  <div
                    className='h-6 bg-skin-btn-accent shadow-sm rounded-full dark:bg-skin-gold-hover '
                    style={{ width: menu.function }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marks */}
        <div className=' flex-1 '>
          <div
            className={`flex flex-col transform h-80 cursor-pointer transition duration-200 ease-in-out px-2  py-4 shadow-md border-2 border-skin-muted  rounded-3xl bg-skin-base  dark:bg-gradient-to-bl ${
              Color[0]
            }  gap-4 dark:theme-dark ${isLaptop && "hover:scale-105"}`}
          >
            {/* title */}
            <div className='flex flex-row justify-center px-4 '>
              <span className=' text-skin-base dark:theme-dark text-3xl font-bold '>
                Marks
              </span>
            </div>
            {/* each marks */}
            <div className='grid grid-rows-8 gap-4 bg-skin-hue dark:bg-skin-dull  px-4 py-5 rounded-2xl'>
              {marksMenu.map((menu) => (
                <div className=' shadow-sm  rounded-lg  bg-skin-base dark:theme-dark '>
                  <div className='grid grid-cols-3 grid-flow-row font-raleway'>
                    <span className='h-9 py-1 col-span-2 rounded-lg text-white text-center bg-skin-btn-accent dark:bg-skin-gold-hover  text-xl font-semibold '>
                      {menu.title}
                    </span>
                    <span className='h-9 py-1 text-center text-skin-base text-xl font-semibold '>
                      {menu.marks !== "" ? menu.marks : "--"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grades */}
        <div className=' flex-1 '>
          <div
            className={`flex flex-col  h-80 cursor-pointer transition duration-200 ease-in-out px-2  py-4 shadow-md border-2 border-skin-muted  rounded-3xl bg-skin-base  dark:bg-gradient-to-bl ${
              Color[0]
            }  gap-4 dark:theme-dark ${isLaptop && "hover:scale-105"}`}
          >
            {/* title */}
            <div className='flex flex-row justify-center px-4'>
              <span className=' text-skin-base dark:theme-dark text-3xl font-bold '>
                Grades
              </span>
            </div>
            {/* ranking */}
            <div className=' h-full flex flex-col gap-2   py-3 rounded-2xl'>
              {/* Unit test */}
              {gradeMenu.map((menu) => (
                <div className='flex justify-between gap-3 bg-skin-hue dark:bg-skin-gold px-3  sm:px-10 py-4 rounded-2xl '>
                  <span className='my-auto text-skin-base dark:theme-dark text-xl font-bold '>
                    {menu.title}
                  </span>
                  <span className='w-[4.5rem] h-[4.5rem] flex items-center justify-center bg-skin-btn-accent dark:bg-skin-gold-hover rounded-2xl bg-opacity-90 text-white text-center font-bold text-5xl shadow-md'>
                    {menu.function}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
