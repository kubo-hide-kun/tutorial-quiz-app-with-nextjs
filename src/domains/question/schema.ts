export type Answer = {
  id: string;
  text: string;
  correct?: boolean;
};

export const QuestionType = {
  Choice: "choice",
  MultipleChoice: "multiple-choice",
  Text: "text",
} as const;

export type QuestionType = typeof QuestionType[keyof typeof QuestionType];

export type ChoiceQuestion = {
  id: string;
  type: typeof QuestionType.Choice | typeof QuestionType.MultipleChoice;
  statement: string;
  answers: Answer[];
};

export type TextQuestion = {
  id: string;
  type: typeof QuestionType.Text;
  statement: string;
  correctAnswer: string;
};

export type Question = ChoiceQuestion | TextQuestion;

export type ChoiceQuestionOmitCorrect = Omit<ChoiceQuestion, "answers"> & {
  answers: Omit<Answer, "correct">[];
};

export type TextQuestionOmitCorrect = Omit<TextQuestion, "correctAnswer">;

export type QuestionOmitCorrect = ChoiceQuestionOmitCorrect | TextQuestionOmitCorrect;
