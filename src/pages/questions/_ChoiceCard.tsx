import { ChoiceQuestionOmitCorrect } from "../../domains/question";
import { useInput } from "../../hooks/useInput";
import { useCheckBox } from "../../hooks/useCheckBox";
import classNames from "classnames";
import { CardForm } from "../../components/CardForm";
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
      <div className="flex flex-col gap-8">
        {question.answers.map((answer) => (
          <div
            key={answer.id}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-white-cream"
          >
            <input
              id={answer.id}
              type={type}
              name="answer"
              value={answer.id}
              onChange={onChange}
            />
            <label htmlFor={answer.id}>{answer.text}</label>
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

export const RadioCard = ({
  final,
  question,
}: Pick<Props, "final" | "question">) => {
  const [value, bind] = useInput();

  const onSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    (e) => {
      e.preventDefault();
      console.log(value);
    },
    [value]
  );

  return (
    <ChoiceCardPresenter
      question={question}
      type="radio"
      disabled={!value}
      final={final}
      onSubmit={onSubmit}
      {...bind}
    />
  );
};

export const CheckboxCard = ({
  final,
  question,
}: Pick<Props, "final" | "question">) => {
  const [values, bind] = useCheckBox();

  const onSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    (e) => {
      e.preventDefault();
      console.log(values);
    },
    [values]
  );

  return (
    <ChoiceCardPresenter
      question={question}
      type="checkbox"
      disabled={values.length === 0}
      final={final}
      onSubmit={onSubmit}
      {...bind}
    />
  );
};
