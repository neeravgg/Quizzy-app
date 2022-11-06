import React, { useEffect, useState } from "react";
import TestContext from "./TestContext";
import { useRouter } from "next/router";

const TestProvider = (props) => {
  const [UnitTest1, setUnitTest1] = useState("");
  const [UnitTest2, setUnitTest2] = useState("");
  const [UnitTest3, setUnitTest3] = useState("");
  const [FinalTest, setFinalTest] = useState("");
  const [UnitScore1, setUnitScore1] = useState("");
  const [UnitScore2, setUnitScore2] = useState("");
  const [UnitScore3, setUnitScore3] = useState("");
  const [FinalScore, setFinalScore] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(false);
  const [FinalTestChance, setFinalTestChance] = useState("");
  const [logoutAlert, setlogoutAlert] = useState(false);
  const [isAgreed, setisAgreed] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userId"));
    const isForm = JSON.parse(localStorage.getItem("isForm"));
    if (id !== null && isForm) {
      fetchState();
      fetchScore();
    }
    async function fetchState() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/getState/${id}`
      );
      const data = await res.json();
      setUnitTest1(data[0].unitTest_1);
      setUnitTest2(data[0].unitTest_2);
      setUnitTest3(data[0].unitTest_3);
      setFinalTest(data[0].finalTest_1);
      setFinalTestChance(data[0].finalTestChance);
    }
    async function fetchScore() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/getScore/${id}`
      );
      const data = await res.json();
      setUnitScore1(data[0].unitTest_1_score);
      setUnitScore2(data[0].unitTest_2_score);
      setUnitScore3(data[0].unitTest_3_score);
      setFinalScore(data[0].finalTest_1_score);
    }
  }, [Router.asPath]);

  return (
    <TestContext.Provider
      value={{
        UnitTest1,
        UnitTest2,
        UnitTest3,
        FinalTest,
        UnitScore1,
        UnitScore2,
        UnitScore3,
        FinalScore,
        FinalTestChance,
        logoutAlert,
        setlogoutAlert,
        isAgreed,
        setisAgreed,
        showScore,
        setShowScore,
        timer,
        setTimer,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
