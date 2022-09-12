import Image from "next/image";
import { useContext } from "react";
import QuizContext from "../context/Quiz";
import LampIcon from "./icons/Lamp";

const Fact = () => {
  const quiz = useContext(QuizContext);

  return (
    <div className="bg-white rounded-xl m-5 sm:m-10">
      <div className="flex justify-end relative -top-8 mr-4 sm:mr-14">
        <LampIcon className="fill-black bg-alert border-solid border-4 border-grey-25 rounded-full p-4 h-16 w-16" />
      </div>
      <div className="px-5 sm:px-10 pb-5 sm:pb-10">
        <div className="-mt-10 sm:-mt-0 font-serif font-bold text-2xl sm:text-3xl">
          {quiz.data?.dyk_title}
        </div>
        <div className="leading-7 mt-2">{quiz.data?.dyk_text}</div>
        <div className="font-semibold text-sm mt-9">Show More</div>
        <div className="h-px bg-grey-75 my-5"></div>
        <div className="text-xs flex items-center gap-1 text-grey-150">
          Powered by <Image width={43} height={14} src="/wikiz-logo.png" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Fact;
