import { useContext, useEffect, useState } from "react";
import QuizContext from "../context/Quiz";
import PauseIcon from "./icons/Pause";

const NextQuestion = () => {
  const [isPaused, setIsPaused] = useState(false);
  const quiz = useContext(QuizContext);

  useEffect(() => {
    const timer = setTimeout(() => quiz.nextQuestion(), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cursor-pointer relative rounded-full bg-orange-100 h-12 overflow-hidden">
      <div
        className="absolute w-full h-full bg-orange-200 animate-timer-bar-10s"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      ></div>
      <div className="relative px-6 flex items-center h-full">
        <div className="mr-6">
          <PauseIcon
            onClick={() => setIsPaused(true)}
            className="cursor-pointer h-7 w-7 text-white stroke-2"
          />
        </div>
        <div className="bg-white w-px h-full"></div>
        <div
          onClick={() => quiz.nextQuestion()}
          className="cursor-pointer grow font-bold text-white text-center"
        >
          NEXT QUESTION
        </div>
      </div>
    </div>
  );
};

export default NextQuestion;
