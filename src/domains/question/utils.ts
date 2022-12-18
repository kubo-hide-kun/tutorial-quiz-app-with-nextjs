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

export const getResults = (
  questions: Question[],
  answer: string[][]
): boolean[] => {
  const correctAnswers = extractCorrectAnswer(questions);
  return correctAnswers.map((correctAnswer, index) => {
    return (
      correctAnswer.length === answer[index]?.length &&
      correctAnswer.every((answerId) => {
        return answer[index] && answer[index].includes(answerId);
      })
    );
  });
};
