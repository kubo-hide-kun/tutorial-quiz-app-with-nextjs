import { ReactElement } from "react";

export const getBasicLayout = (page: ReactElement) => {
  return (
    <div className="min-h-screen bg-blue-deep">
      {page}
    </div>
  );
};
