import { useState } from "react";

export const useCheckBox = () => {
  const [value, setValue] = useState<string[] | null>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setValue((prev) => [...(prev || []), value]);
    } else {
      setValue((prev) => (prev || []).filter((v) => v !== value));
    }
  };

  return [
    value,
    {
      onChange,
    },
  ] as const;
};
