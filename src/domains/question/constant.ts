import { Question } from "./schema";

export const SAMPLE_QUESTION: Question[] = [
  {
    id: "1",
    type: "choice",
    statement: "2020年度のコン研の方針は何？",
    answers: [
      {
        id: "1-1",
        text: "「理由はないけど行きたい!」と思える場所を作る。",
      },
      {
        id: "1-2",
        text: "「僕たち、実はすごい」と自慢できる環境を作る。",
      },
      {
        id: "1-3",
        text: "「遊ぶように学べる場所」を作る。",
        correct: true,
      },
      {
        id: "1-4",
        text: "流行のアニメをひたすら鑑賞する。",
      },
    ],
  },
  {
    id: "2",
    type: "multiple-choice",
    statement: "リレーショナル型データベースを全て選べ",
    answers: [
      {
        id: "2-1",
        text: "PostgreSQL",
        correct: true,
      },
      {
        id: "2-2",
        text: "MySQL",
        correct: true,
      },
      {
        id: "2-3",
        text: "SQLite",
        correct: true,
      },
      {
        id: "2-4",
        text: "MongoDB",
      },
    ],
  },
  {
    id: "3",
    type: "text",
    statement: "北九州高専の正式名称は何？",
    correctAnswer: "北九州工業高等専門学校",
  },
];
