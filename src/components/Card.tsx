import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export const Card = ({ children }: Props) => {
  return (
    <div className="w-full m-8 p-24 bg-white rounded-2xl">
      {children}
    </div>
  );
};
