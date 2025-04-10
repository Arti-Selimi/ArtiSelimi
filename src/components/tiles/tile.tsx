"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaExpand } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Reorder } from "framer-motion";
import Module from "../module/module";
import type { Tile } from "@/components/types/types";

export default function Tile({
  parentRef,
  value,
  name,
  imgSrc,
  frameworks,
  link,
  deploymentUrl,
}: Tile) {
  const [isOpen, setIsOpen] = useState(false);
  const [constraints, setConstraints] = useState<{ top: number; bottom: number }>({ top: 0, bottom: 0 });

  useEffect(() => {
    if (parentRef?.current) {
      const tileHeight = parentRef?.current.offsetHeight;
      setConstraints({
        top: -tileHeight,
        bottom: tileHeight
      });
    }
  }, [parentRef]);

  return (
    <Reorder.Item
      value={value}
      layout
      drag="y"
      dragConstraints={constraints}
      whileDrag={{ scale: 1.02 }}
      onDrag={(e, info) => {
        if (!parentRef?.current) return;

        console.log("e", e);
        console.log("info", info);

        const container = parentRef?.current;
        const { y } = info.point;

        const containerRect = container.getBoundingClientRect();

        const topEdge = containerRect.top + 100;
        const bottomEdge = containerRect.bottom - 100;

        if (y < topEdge) {
          container.scrollTop -= 10;
        } else if (y > bottomEdge) {
          container.scrollTop += 10;
        }
      }}
      className="px-5 py-2 rounded-[15px] cursor-pointer bg-expresso shadow-xl flex flex-col justify-center items-start w-full"
    >
      <div className="border-b-2 border-primary pb-1 px-2 w-full mb-2 flex justify-between items-center">
        <h1 className="text-xl font-extrabold">{name}</h1>
        <div className="flex gap-5 items-center">
          <Link href={link} target="_blank">
            <FiGithub className="cursor-pointer hover:scale-110" size={20} />
          </Link>
          <FaExpand
            className="cursor-pointer hover:scale-110"
            size={20}
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <Image
        src={imgSrc}
        alt="project"
        width={500}
        height={300}
        className="w-full h-full rounded-[15px]"
      />

      <div className="flex justify-between items-center pt-1 px-2 w-full">
        <h1 className="text-sm font-extrabold">{frameworks}</h1>
        <Link href={deploymentUrl} target="_blank">
          <FaArrowRight
            className="cursor-pointer hover:scale-110 -rotate-45"
            size={20}
          />
        </Link>
      </div>

      {isOpen && (
        <Module
          open={isOpen}
          link={deploymentUrl}
          onClose={() => setIsOpen(false)}
        />
      )}
    </Reorder.Item>
  );
}
