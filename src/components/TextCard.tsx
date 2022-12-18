import { TextQuestionOmitCorrect } from "../domains/question";
import { useInput } from "../hooks/useInput";
import classNames from "classnames";
import { CardForm } from "./CardForm";
import { useCallback } from "react";

export type TextCardProps = {
  question: TextQuestionOmitCorrect;
  final?: boolean;
  onAnswered: (answers: string[]) => void;
};

export const TextCard = ({ final, question, onAnswered }: TextCardProps) => {
  const { value: answer, onChange, reset } = useInput();

  const onSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    (e) => {
      e.preventDefault();
      onAnswered([answer]);
      reset();
    },
    [answer, onAnswered]
  );

  return (
    <CardForm onSubmit={onSubmit}>
      <div className="mb-16">{question.statement}</div>
      <input
        className="block w-full appearance-none rounded py-8 px-16 leading-tight focus:outline-1 focus:outline-offset-1 border border-gray bg-white"
        onChange={onChange}
      />
      <div className="flex justify-end mt-16">
        <button
          type="submit"
          disabled={!answer}
          className={classNames(
            "flex justify-center items-center w-full py-12 rounded-lg text-lg text-white font-bold hover:opacity-80",
            {
              "bg-gray-light": !answer,
              "bg-brand-gradient-cyan": answer,
            }
          )}
        >
          {final ? "結果を見る" : "次へ"}
        </button>
      </div>
    </CardForm>
  );
};
