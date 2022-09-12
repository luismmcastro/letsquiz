import { IQuizzContext } from "../context/Quizz";

export enum AnswerState {
  Normal,
  Wrong,
  Correct,
}

export function answerState(
  answer: string,
  isCorrectAnswer: boolean,
  userAnswers: IQuizzContext["answers"]
) {
  const result = userAnswers?.filter(
    (userAnswer) => userAnswer.option === answer
  );
  if (result && result.length > 0) {
    return isCorrectAnswer ? AnswerState.Correct : AnswerState.Wrong;
  } else {
    return AnswerState.Normal;
  }
}
