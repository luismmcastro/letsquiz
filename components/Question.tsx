import Image from "next/image";
import { useContext, useState } from "react";
import QuizContext from "../context/Quiz";
import CheckIcon from "./icons/Check";
import XMarkIcon from "./icons/XMark";
import classNames from "classnames";
import { answerState, AnswerState } from "./utils";

interface OptionProps {
  name: string;
  state: AnswerState;
  onPressOption: () => void;
}

const Option = (props: OptionProps) => {
  const [animate, setAnimate] = useState(false);

  return (
    <div
      onClick={() => {
        props.onPressOption();
        setAnimate(true);
      }}
      className={classNames(
        "cursor-pointer rounded-full border-solid border-2 p-5 w-full flex items-center justify-between font-semibold leading-8",
        {
          "border-grey-100": props.state === AnswerState.Normal,
          "border-error bg-error text-white": props.state === AnswerState.Wrong,
          "border-success bg-success text-white":
            props.state === AnswerState.Correct,
          "animate-option-pulse": animate,
        }
      )}
    >
      {props.name}
      {props.state === AnswerState.Correct && (
        <CheckIcon className="w-8 h-8 p-1 rounded-full stroke-2 text-success bg-white" />
      )}
      {props.state === AnswerState.Wrong && (
        <XMarkIcon className="w-8 h-8 p-1 rounded-full stroke-2 text-error bg-white" />
      )}
    </div>
  );
};

const Question = () => {
  const quiz = useContext(QuizContext);

  return (
    <div className="shadow-lg sm:rounded-lg overflow-hidden">
      <div className="bg-black p-5 sm:p-10">
        <div className="h-24 w-24 sm:h-52 sm:w-52 block mx-auto rounded border-solid border-4 border-grey-50 overflow-hidden">
          {quiz.data?.question.image && (
            <Image
              className="object-cover"
              layout="responsive"
              height={200}
              width={200}
              src={quiz.data?.question.image}
            />
          )}
        </div>
        <div className="bg-white w-full -mt-12 sm:-mt-28 rounded-lg overflow-hidden">
          <div className="pt-16 sm:pt-40 pb-7 sm:pb-10 px-9 sm:px-28">
            <div className="text-center font-serif font-bold text-3xl">
              {quiz.data?.question.text}
            </div>
          </div>
          <div className="bg-grey-50 w-full">
            <div className="animate-timer-bar h-2 bg-orange-100"></div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 sm:p-10 grid sm:grid-cols-2 gap-5">
        {quiz.data?.question.answers.map((answer, i) => {
          const name = Object.keys(answer)[0];
          const isCorrectAnswer = answer[name];
          return (
            <Option
              key={i}
              name={name}
              state={answerState(name, isCorrectAnswer, quiz.answers)}
              onPressOption={() => {
                quiz.answerQuestion(
                  quiz.data!.question.id,
                  Object.keys(answer)[0]
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Question;
