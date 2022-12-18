import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}>;

export const CardForm = ({ children, onSubmit }: Props) => {
  return (
    <form className="w-full m-8 p-24 bg-white rounded-2xl" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
