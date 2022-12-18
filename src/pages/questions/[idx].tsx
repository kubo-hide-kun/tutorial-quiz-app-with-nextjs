import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";
import {
  OmitCorrectQuestion,
  QuestionOmitCorrect,
  QuestionType,
  SAMPLE_QUESTION,
} from "../../domains/question";
import { useAnswerState } from "../../domains/question/store";
import { getBasicLayout } from "../../layouts/basic";
import { NextPageWithLayout } from "../_app";
import {
  CheckboxCard,
  CheckboxCardProps,
  RadioCard,
  RadioCardProps,
} from "./_ChoiceCard";
import { TextCard, TextCardProps } from "./_TextCard";

type Props = {
  question: QuestionOmitCorrect;
  maxSize: number;
};

const QuestionComponent = ({
  final,
  question,
  onAnswered,
}: Pick<Props, "question"> & {
  final: boolean;
  onAnswered: (answers: string[]) => void;
}) => {
  switch (question.type) {
    case QuestionType.Choice:
      return (
        <RadioCard question={question} final={final} onAnswered={onAnswered} />
      );
    case QuestionType.MultipleChoice:
      return (
        <CheckboxCard
          question={question}
          final={final}
          onAnswered={onAnswered}
        />
      );
    case QuestionType.Text:
      return (
        <TextCard question={question} final={final} onAnswered={onAnswered} />
      );
  }
};

const QuestionPage: NextPageWithLayout<Props> = ({ question, maxSize }) => {
  const router = useRouter();
  const { push } = useAnswerState();

  const idx = Number(router.query.idx);

  const handleAnswered = useCallback(
    (answers: string[]) => {
      try {
        push({
          idx,
          answers,
        });
        router.push(`/questions/${idx + 1}`);
      } catch (e) {
        console.error(e);
      }
    },
    [idx, push]
  );

  return (
    <div className="max-w-lg min-h-screen mx-auto px-24 flex flex-col justify-center items-center">
      <h1 className="mb-16 text-gray-light text-2xl">
        Question {idx} / <span className="text-gray">{maxSize}</span>
      </h1>
      <QuestionComponent
        question={question}
        final={idx === maxSize}
        onAnswered={handleAnswered}
      />
    </div>
  );
};

QuestionPage.getLayout = getBasicLayout;

export default QuestionPage;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  const idx = Number(params?.idx ?? 0);
  const question = SAMPLE_QUESTION[idx - 1];
  if (!question) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      question: OmitCorrectQuestion(question),
      maxSize: SAMPLE_QUESTION.length,
    },
  };
};
