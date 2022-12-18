import { GetServerSideProps } from "next";
import {
  OmitCorrectQuestion,
  QuestionOmitCorrect,
  QuestionType,
  SAMPLE_QUESTION,
} from "../../domains/question";
import { getBasicLayout } from "../../layouts/basic";
import { NextPageWithLayout } from "../_app";
import { CheckboxCard, RadioCard } from "./_ChoiceCard";
import { TextCard } from "./_TextCard";

type Props = {
  question: QuestionOmitCorrect;
  idx: number;
  maxSize: number;
};

const QuestionComponent = ({
  final,
  question,
}: Pick<Props, "question"> & { final: boolean }) => {
  console.log(final);
  switch (question.type) {
    case QuestionType.Choice:
      return <RadioCard question={question} final={final} />;
    case QuestionType.MultipleChoice:
      return <CheckboxCard question={question} final={final} />;
    case QuestionType.Text:
      return <TextCard question={question} final={final} />;
  }
};

const QuestionPage: NextPageWithLayout<Props> = ({
  question,
  idx,
  maxSize,
}) => {
  return (
    <div className="max-w-lg min-h-screen mx-auto px-24 flex flex-col justify-center items-center">
      <h1 className="mb-16 text-gray-light text-2xl">
        Question {idx} / <span className="text-gray">{maxSize}</span>
      </h1>
      <QuestionComponent question={question} final={idx === maxSize} />
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
      idx,
      maxSize: SAMPLE_QUESTION.length,
    },
  };
};
