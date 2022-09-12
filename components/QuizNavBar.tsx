import Image from "next/image";
import { useContext } from "react";
import QuizzContext from "../context/Quizz";
import ArrowLeftIcon from "./icons/ArrowLeft";

const QuizNavBar = () => {
  const quizz = useContext(QuizzContext);

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
            {quizz.data?.title}
          </div>
        </div>
        <div className="sm:hidden">
          <ArrowLeftIcon className="h-5 w-6 text-white" />
        </div>

        <div className="hidden sm:block h-10 bg-grey-50 w-px"></div>

        <div className="grow rounded-full flex gap-1 border-grey-200 border py-1 px-2">
          <div className="w-full h-2 rounded-full bg-gradient-to-r from-green-100 to-green-50"></div>
          <div className="w-full h-2 rounded-full bg-gradient-to-r from-green-100 to-green-50"></div>
          <div className="w-full h-2 rounded-full bg-gradient-to-r from-green-100 to-green-50"></div>
          <div className="w-full h-2 rounded-full bg-gradient-to-r from-green-100 to-green-50"></div>
          <div className="w-full h-2 rounded-full bg-gradient-to-r from-green-100 to-green-50"></div>

          <div className="w-full h-2 rounded-full bg-red-100"></div>
          <div className="w-full h-2 rounded-full bg-grey-100"></div>
        </div>

        <div className="text-white font-bold text-xs sm:text-lg">04/16</div>
      </div>
    </div>
  );
};

export default QuizNavBar;
