import { NextPage } from "next";
import { useState } from "react";
import Answer from "../components/Answer";
import Fact from "../components/Fact";
import Question from "../components/Question";
import QuizNavBar from "../components/QuizNavBar";
import QuizContext, { IQuizContext } from "../context/Quiz";
import { dataTextReplace, getQuiz, Quiz } from "../sdk/quizes";
import classNames from "classnames";
import NextQuestion from "../components/NextQuestion";

interface QuizPageProps {
  quiz: Quiz;
}

const QuizPage: NextPage<QuizPageProps> = (props) => {
  const [animate, setAnimate] = useState(false);

  const [quizState, setQuizState] = useState<IQuizContext>({
    data: props.quiz,
    answers: [],
    answerQuestion: (id: number, option: string) => {
      setQuizState((value) => {
        return { ...value, answers: [...value.answers!, { id, option }] };
      });
      setTimeout(() => {
        setAnimate(true);
      }, 1000);
    },
    nextQuestion: () => {
      // SIMULATION
      // In this step we should load next question data
      // or keep sliding if we wanted to load
      // every single question on DOM
      setQuizState((value) => {
        return { ...value, answers: [] };
      });
      setAnimate(false);
    },
  });

  return (
    <QuizContext.Provider value={quizState}>
      <div>
        <QuizNavBar />
        <div className="mx-auto sm:mt-7">
          <div className="mx-auto flex justify-start overflow-hidden">
            <div
              className={classNames("shrink-0 w-full sm:px-48 ", {
                "animate-slide": animate,
              })}
            >
              <Question />
            </div>
            <div
              className={classNames("shrink-0 w-full sm:px-48 space-y-12 ", {
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
    </QuizContext.Provider>
  );
};

export async function getServerSideProps() {
  const quiz = dataTextReplace(await getQuiz());
  return { props: { quiz } };
}

export default QuizPage;
