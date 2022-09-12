// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    title: "Cristiano Ronaldo Quiz",
    entity: "Cristiano Ronaldo",
    question: {
      id: 1,
      text: "On September 2015, {{entity}} scored his 500th secior career goal for?",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/220px-Cristiano_Ronaldo_2018.jpg",
      answers: [
        {
          "FourFour Shoot": false,
        },
        {
          Blizzard: false,
        },
        {
          Forbes: true,
        },
        {
          Shoot: false,
        },
      ],
    },
    explanation: {
      text: "{{entity}} played in {{answer}} different leagues:",
      list: [
        {
          text: "Premier league",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/94/Premier_league_text_logo.png",
        },
        {
          text: "Serie",
        },
        {
          text: "La Liga",
        },
        {
          text: "Liga Portugal",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/5a/S%C3%ADmbolo_da_Liga_Portuguesa_de_Futebol_Profissional.png",
        },
      ],
    },
    dyk_title: "Portugal History Fact",
    dyk_text:
      "The Roman conquest of what is now part of Portugal took almost two hundred years and took many lives of young soldiers and the lives of those who were sentenced to a certain death in the slave mines when not sold as slaves to other parts of the empire.",
  });
}
