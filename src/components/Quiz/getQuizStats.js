export const getScore = (newScore, QuizId) => {
  if (QuizId === "1") return { unitTest_1_score: newScore.toString() };
  else if (QuizId === "2") return { unitTest_2_score: newScore.toString() };
  else if (QuizId === "3") return { unitTest_3_score: newScore.toString() };
  else if (QuizId === "4") return { finalTest_1_score: newScore.toString() };
};

export const getState = (newScore, QuizId, length) => {
  if (QuizId === "1")
    return {
      unitTest_1: scoreState(newScore, length),
      unitTest_2: testState(newScore),
    };
  else if (QuizId === "2")
    return {
      unitTest_2: scoreState(newScore, length),
      unitTest_3: testState(newScore),
    };
  else if (QuizId === "3")
    return {
      unitTest_3: scoreState(newScore, length),
      finalTest_1: testState(newScore),
    };
  else if (QuizId === "4")
    return {
      finalTest_1: scoreState(newScore, length),
      finalTestChance: FinalTestChance - 1,
    };
};

const scoreState = (score) => {
  if ((score / length) * 100 >= 40) return "2";
  else return "3";
};
const testState = (score) => {
  if (scoreState(score) === "2") return "0";
  else return "1";
};
