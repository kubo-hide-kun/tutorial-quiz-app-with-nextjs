import { useCallback, useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState<string | null>(null);

  const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return [
    value,
    {
      onChange,
    },
  ] as const;
};
