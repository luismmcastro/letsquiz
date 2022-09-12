import { NextPage } from "next";
import { useState } from "react";
import Answer from "../../components/Answer";
import Fact from "../../components/Fact";
import Question from "../../components/Question";
import QuizNavBar from "../../components/QuizNavBar";
import QuizzContext, { IQuizzContext } from "../../context/Quizz";
import { dataTextReplace, getQuizz, Quizz } from "../../sdk/quizzes";
import classNames from "classnames";
import NextQuestion from "../../components/NextQuestion";

interface QuizPageProps {
  quizz: Quizz;
}

const QuizPage: NextPage<QuizPageProps> = (props) => {
  const [animate, setAnimate] = useState(false);

  const [quizzState, setQuizzState] = useState<IQuizzContext>({
    data: props.quizz,
    answers: [],
    answerQuestion: (id: number, option: string) => {
      setQuizzState((value) => {
        return { ...value, answers: [...value.answers!, { id, option }] };
      });
      setTimeout(() => {
        setAnimate(true);
      }, 1000);
    },
    nextQuestion: () => {
      // SIMULATION
      // In this step we should load next question data
      // and load it or keep sliding if we wanted to load
      // every single question on DOM
      setQuizzState((value) => {
        return { ...value, answers: [] };
      });
      setAnimate(false);
    },
  });

  return (
    <QuizzContext.Provider value={quizzState}>
      <div>
        <QuizNavBar />
        <div className="mx-auto sm:mt-7">
          <div className="mx-auto flex justify-start">
            <div
              className={classNames("shrink-0 w-full sm:px-48", {
                "animate-slide": animate,
              })}
            >
              <Question />
            </div>
            <div
              className={classNames("shrink-0 w-full sm:px-48 space-y-12", {
                "animate-slide": animate,
              })}
            >
              <Answer />
              <Fact />
              {animate && (
                <div className="w-full px-5 sm:w-80 mx-auto">
                  <NextQuestion />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </QuizzContext.Provider>
  );
};

export async function getServerSideProps() {
  const quizz = dataTextReplace(await getQuizz());
  return { props: { quizz } };
}

export default QuizPage;
