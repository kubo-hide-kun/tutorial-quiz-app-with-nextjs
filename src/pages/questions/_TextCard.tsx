import { TextQuestionOmitCorrect } from "../../domains/question";
import { useInput } from "../../hooks/useInput";
import classNames from "classnames";
import { CardForm } from "../../components/CardForm";
import { useCallback } from "react";

type Props = {
  question: TextQuestionOmitCorrect;
  final?: boolean;
};

export const TextCard = ({ final, question }: Props) => {
  const [value, bind] = useInput();

  const onSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    (e) => {
      e.preventDefault();
      console.log(value);
    },
    [value]
  );

  return (
    <CardForm onSubmit={onSubmit}>
      <div className="mb-16">{question.statement}</div>
      <input
        className="block w-full appearance-none rounded py-8 px-16 leading-tight focus:outline-1 focus:outline-offset-1 border border-gray bg-white"
        {...bind}
      />
      <div className="flex justify-end mt-16">
        <button
          type="submit"
          disabled={!value}
          className={classNames(
            "flex justify-center items-center w-full py-12 rounded-lg text-lg text-white font-bold hover:opacity-80",
            {
              "bg-gray-light": !value,
              "bg-brand-gradient-cyan": value,
            }
          )}
        >
          {final ? "結果を見る" : "次へ"}
        </button>
      </div>
    </CardForm>
  );
};
