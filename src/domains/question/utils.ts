import { Question, QuestionOmitCorrect } from "./schema";

export const OmitCorrectQuestion = (
  question: Question
): QuestionOmitCorrect => {
  if (question.type === "text") {
    const { correctAnswer, ...rest } = question;
    return {
      ...rest,
    };
  }
  return {
    ...question,
    answers: question.answers.map((answer) => {
      return {
        ...answer,
        correct: false,
      };
    }),
  };
};
