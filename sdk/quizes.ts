export interface Quiz {
  title: string;
  entity: string;
  question: {
    id: number;
    text: string;
    image: string;
    answers: [
      {
        [key: string]: boolean;
      }
    ];
  };
  explanation: {
    text: string;
    list: [{ text: string; image: string }];
  };
  dyk_title: string;
  dyk_text: string;
}

export async function getQuiz() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/quizes`);
  const data: Quiz = await res.json();
  return data;
}

// This could be replaced by template engine in the future
export function dataTextReplace(quiz: Quiz) {
  quiz.question.text = quiz.question.text.replaceAll("{{entity}}", quiz.entity);
  quiz.explanation.text = quiz.explanation.text.replaceAll(
    "{{entity}}",
    quiz.entity
  );

  let answers = quiz.question.answers.filter((answer) => {
    const key = Object.keys(answer)[0];
    return answer[key];
  })[0];
  const correctAnswer = Object.keys(answers)[0];

  quiz.explanation.text = quiz.explanation.text.replaceAll(
    "{{answer}}",
    correctAnswer
  );

  return quiz;
}
