import React from "react";
import { Quizz } from "../sdk/quizzes";

export interface IQuizzContext {
  data?: Quizz;
  answers?: { id: number; option: string }[];
  answerQuestion: (id: number, option: string) => void;
  nextQuestion: () => void;
}

const QuizzContext = React.createContext<IQuizzContext>({
  data: undefined,
  answers: undefined,
  answerQuestion: () => {},
  nextQuestion: () => {},
});

export default QuizzContext;
