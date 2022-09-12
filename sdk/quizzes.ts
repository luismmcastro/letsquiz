export interface Quizz {
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

export async function getQuizz() {
  const res = await fetch("http://localhost:3000/api/quizzes");
  const data: Quizz = await res.json();
  return data;
}

// This could be replaced by template engine in the future
export function dataTextReplace(quizz: Quizz) {
  quizz.question.text = quizz.question.text.replaceAll(
    "{{entity}}",
    quizz.entity
  );
  quizz.explanation.text = quizz.explanation.text.replaceAll(
    "{{entity}}",
    quizz.entity
  );

  let answers = quizz.question.answers.filter((answer) => {
    const key = Object.keys(answer)[0];
    return answer[key];
  })[0];
  const correctAnswer = Object.keys(answers)[0];

  quizz.explanation.text = quizz.explanation.text.replaceAll(
    "{{answer}}",
    correctAnswer
  );

  return quizz;
}
