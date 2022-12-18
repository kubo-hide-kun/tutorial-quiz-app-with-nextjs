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

export const extractCorrectAnswer = (questions: Question[]): string[][] => {
  return questions.map((question) => {
    if (question.type === "text") {
      return [question.correctAnswer];
    }
    return question.answers
      .filter((answer) => answer.correct)
      .map((answer) => answer.id);
  });
};

export const isCorrectAnswer = (
  questions: Question[],
  answer: string[][]
): boolean => {
  const correctAnswers = extractCorrectAnswer(questions);
  return correctAnswers.every((correctAnswer, index) => {
    return correctAnswer.every((answerId) => {
      return answer[index].includes(answerId);
    });
  });
};
