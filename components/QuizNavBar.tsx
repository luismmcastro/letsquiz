import Image from "next/image";
import { useContext } from "react";
import QuizContext, { IQuizContext } from "../context/Quiz";
import ArrowLeftIcon from "./icons/ArrowLeft";
import { AnswerState } from "./utils";
import classNames from "classnames";
import { Quiz } from "../sdk/quizes";

const StatusBar = (props: { state: AnswerState }) => {
  return (
    <div
      className={classNames("w-full min-w-fit h-2 rounded-full", {
        "bg-gradient-to-r from-green-100 to-green-50":
          props.state === AnswerState.Correct,
        "bg-red-100": props.state === AnswerState.Wrong,
        "bg-grey-100": props.state === AnswerState.Normal,
      })}
    ></div>
  );
};

function questionState(
  userAnswers: IQuizContext["answers"],
  question: Quiz["question"]
) {
  if (!userAnswers) return AnswerState.Normal;
  for (const userAnswer of userAnswers) {
    for (const answer of question.answers) {
      if (Object.keys(answer).indexOf(userAnswer.option) >= 0) {
        return answer[userAnswer.option]
          ? AnswerState.Correct
          : AnswerState.Wrong;
      }
    }
  }
  return AnswerState.Normal;
}

const QuizNavBar = () => {
  const quiz = useContext(QuizContext);

  return (
    <div className="bg-black px-3 sm:px-0">
      <div className="container mx-auto py-4 flex gap-4 items-center">
        <div className="hidden sm:flex items-center gap-3">
          <Image
            className="rounded-sm"
            width={40}
            height={40}
            src="/sample-cr7.png"
          />
          <div className="text-white w-48 font-serif font-semibold text-sm">
            {quiz.data?.title}
          </div>
        </div>
        <div className="sm:hidden">
          <ArrowLeftIcon className="h-5 w-6 text-white" />
        </div>

        <div className="hidden sm:block h-10 bg-grey-50 w-px"></div>

        <div className="grow rounded-full flex gap-1 border-grey-200 border py-1 px-2">
          <StatusBar
            state={questionState(quiz.answers, quiz.data?.question!)}
          />
          {/* Dummy data just to look better */}
          <StatusBar state={AnswerState.Normal} />
          <StatusBar state={AnswerState.Normal} />
          <StatusBar state={AnswerState.Normal} />
          <StatusBar state={AnswerState.Normal} />
        </div>

        <div className="text-white font-bold text-xs sm:text-lg">04/16</div>
      </div>
    </div>
  );
};

export default QuizNavBar;
