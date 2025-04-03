import React, { ReactNode } from "react";

type Props = {
  content: ReactNode;
};

export default function IconTile({ content }: Props) {
  return (
    <div className="p-5 rounded-[15px] bg-black  shadow-xl flex items-center justify-center h-[100px] w-[100px]">
      {content}
    </div>
  );
}
