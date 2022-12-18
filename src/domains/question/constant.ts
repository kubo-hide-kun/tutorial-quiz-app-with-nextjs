import { Question, QuestionType } from "./schema";

export const SAMPLE_QUESTION: Question[] = [
  {
    id: "1",
    type: "choice",
    statement: "What is the capital of France?",
    answers: [
      {
        id: "1",
        text: "Paris",
        correct: true,
      },
      {
        id: "2",
        text: "London",
      },
      {
        id: "3",
        text: "Berlin",
      },
      {
        id: "4",
        text: "Madrid",
      },
    ],
  },
  {
    id: "2",
    type: "multiple-choice",
    statement: "Which one is correct team name in NBA?",
    answers: [
      {
        id: "1",
        text: "New York Bulls",
      },
      {
        id: "2",
        text: "Los Angeles Kings",
      },
      {
        id: "3",
        text: "Golden State Warriros",
        correct: true,
      },
      {
        id: "4",
        text: "Huston Rocket",
      },
    ],
  },
  {
    id: "3",
    type: "text",
    statement: "What is the answer to life, the universe and everything?",
    correctAnswer: "42",
  },
];
