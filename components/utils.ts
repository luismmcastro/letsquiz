import { IQuizContext } from "../context/Quiz";

export enum AnswerState {
  Normal,
  Wrong,
  Correct,
}

export function answerState(
  answer: string,
  isCorrectAnswer: boolean,
  userAnswers: IQuizContext["answers"]
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
