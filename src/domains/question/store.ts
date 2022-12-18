import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

const answerState = atom<string[][]>({
  key: "answerState",
  default: [],
});

export const useAnswerState = () => {
  const [value, setValue] = useRecoilState(answerState);

  // 配列の末尾に新しい回答を追加する
  const push = useCallback(
    ({ idx, answers }: { idx: number; answers: string[] }) => {
      if (value.length + 1 === idx) {
        setValue((prev) => [...prev, answers]);
      } else {
        setValue([]);
        throw new Error("Invalid index");
      }
    },
    [setValue, value]
  );

  // 配列の末尾の回答を削除する
  const pop = useCallback(() => {
    setValue((prev) => prev.slice(0, -1));
  }, [setValue]);

  const reset = useCallback(() => {
    setValue([]);
  }, [setValue]);

  return {
    value,
    push,
    pop,
    reset,
  };
};
