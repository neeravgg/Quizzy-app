export const getScore = (newScore, QuizId) => {
  if (QuizId === "1") return { unitTest_1_score: newScore.toString() };
  else if (QuizId === "2") return { unitTest_2_score: newScore.toString() };
  else if (QuizId === "3") return { unitTest_3_score: newScore.toString() };
  else if (QuizId === "4") return { finalTest_1_score: newScore.toString() };
};

export const getState = (newScore, QuizId, length, FinalTestChance) => {
  if (QuizId === "1")
    return {
      unitTest_1: scoreState(newScore, length),
      unitTest_2: testState(newScore, length),
    };
  else if (QuizId === "2")
    return {
      unitTest_2: scoreState(newScore, length),
      unitTest_3: testState(newScore, length),
    };
  else if (QuizId === "3")
    return {
      unitTest_3: scoreState(newScore, length),
      finalTest_1: testState(newScore, length),
    };
  else if (QuizId === "4")
    return {
      finalTest_1: scoreStateFinal(newScore, length),
      finalTestChance: FinalTestChance - 1,
    };
};

const scoreState = (score, length) => {
  if ((score / length) * 100 > 39) return "2";
  else return "3";
};
const scoreStateFinal = (score, length) => {
  if ((score / length) * 100 > 39) return "4";
  else return "3";
};
const testState = (score, length) => {
  if (scoreState(score, length) === "2") return "0";
  else return "1";
};
