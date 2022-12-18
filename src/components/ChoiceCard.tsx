import { ChoiceQuestionOmitCorrect } from "../domains/question";
import { useInput } from "../hooks/useInput";
import { useCheckBox } from "../hooks/useCheckBox";
import classNames from "classnames";
import { CardForm } from "./CardForm";
import { useCallback } from "react";

type Props = {
  question: ChoiceQuestionOmitCorrect;
  type: "radio" | "checkbox";
  disabled?: boolean;
  final?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const ChoiceCardPresenter = ({
  question,
  type,
  disabled,
  final,
  onChange,
  onSubmit,
}: Props) => {
  return (
    <CardForm onSubmit={onSubmit}>
      <div className="mb-16">{question.statement}</div>
      <div id={question.id} className="flex flex-col gap-8">
        {question.answers.map((answer) => (
          <div
            key={`${question.id}/${type}/${answer.id}`}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-white-cream"
          >
            <input
              id={`${question.id}/${type}/${answer.id}`}
              type={type}
              name="answer"
              value={answer.id}
              onChange={onChange}
            />
            <label htmlFor={`${question.id}/${type}/${answer.id}`}>
              {answer.text}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-16">
        <button
          type="submit"
          className={classNames(
            "flex justify-center items-center w-full py-12 rounded-lg text-lg text-white font-bold hover:opacity-80",
            {
              "bg-gray-light": disabled,
              "bg-brand-gradient-cyan": !disabled,
            }
          )}
        >
          {final ? "結果を見る" : "次へ"}
        </button>
      </div>
    </CardForm>
  );
};

export type RadioCardProps = Pick<Props, "final" | "question"> & {
  onAnswered: (answers: string[]) => void;
};

export const RadioCard = ({ final, question, onAnswered }: RadioCardProps) => {
  const { value: answer, onChange, reset } = useInput();

  const onSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    (e) => {
      e.preventDefault();
      onAnswered([answer]);
      reset();
    },
    [answer]
  );

  return (
    <ChoiceCardPresenter
      question={question}
      type="radio"
      disabled={!answer}
      final={final}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export type CheckboxCardProps = Pick<Props, "final" | "question"> & {
  onAnswered: (answers: string[]) => void;
};

export const CheckboxCard = ({
  final,
  question,
  onAnswered,
}: CheckboxCardProps) => {
  const { values: answers, onChange, reset } = useCheckBox();

  const onSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    (e) => {
      e.preventDefault();
      onAnswered(answers);
      reset();
    },
    [answers, onAnswered]
  );

  return (
    <ChoiceCardPresenter
      question={question}
      type="checkbox"
      disabled={answers.length === 0}
      final={final}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
