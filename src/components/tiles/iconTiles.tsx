import React, { ReactNode } from "react";

type Props = {
  content: ReactNode;
};

export default function IconTile({ content }: Props) {
  return (
    <div className="p-3 sm:p-4 md:p-5 rounded-[15px] bg-expresso shadow-xl flex items-center justify-center h-[70px] w-[70px]  2xl:h-[100px] 2xl:w-[100px]">
      {content}
    </div>
  );
}