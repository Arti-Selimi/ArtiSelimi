import React, { ReactNode } from "react";

type Props = {
  content: ReactNode;
  className?: string;
};

export default function IconTile({ content, className }: Props) {
  return (
    <div
      className={`p-1 rounded-[15px] bg-expresso shadow-xl flex items-center justify-center h-[70px] w-[70px]  2xl:h-[100px] 2xl:w-[100px] ${className}`}
    >
      {content}
    </div>
  );
}
