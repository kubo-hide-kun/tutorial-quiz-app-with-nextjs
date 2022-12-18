import { useCallback, useState } from "react";

export const useCheckBox = () => {
  const [values, setValue] = useState<string[] | null>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setValue((prev) => [...(prev || []), value]);
    } else {
      setValue((prev) => (prev || []).filter((v) => v !== value));
    }
  };

  const reset = useCallback(() => {
    setValue([]);
  }, [setValue]);

  return {
    values,
    reset,
    onChange,
  } as const;
};
