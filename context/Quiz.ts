import React from "react";
import { Quiz } from "../sdk/quizes";

export interface IQuizContext {
  data?: Quiz;
  answers?: { id: number; option: string }[];
  answerQuestion: (id: number, option: string) => void;
  nextQuestion: () => void;
}

const QuizContext = React.createContext<IQuizContext>({
  data: undefined,
  answers: undefined,
  answerQuestion: () => {},
  nextQuestion: () => {},
});

export default QuizContext;
