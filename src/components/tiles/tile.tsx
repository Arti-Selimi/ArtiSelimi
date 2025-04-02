"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaExpand } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import type { StaticImageData } from "next/image";
import Module from "../module/module";

type Props = {
  name: string;
  imgSrc: string | StaticImageData;
  frameworks: string;
  link: string;
  deploymentUrl: string;
};

export default function Tile({ name, imgSrc, frameworks, link, deploymentUrl }: Props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5 rounded-[15px] bg-black  shadow-xl flex flex-col justify-center items-start w-full h-full">
      <div className="border-b-2 border-primary pb-1 px-2 w-full mb-2 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold">{name}</h1>
        </div>
        <div className="flex gap-5 items-center">
          <Link href={`${link}`} target="_blank">
            <FiGithub size={25} />
          </Link>
          <FaExpand size={25} onClick={() => setIsOpen(true)} />
        </div>
      </div>
      {imgSrc && (
        <Image
          src={imgSrc}
          alt="project"
          width={500}
          height={300}
          className="w-full h-full rounded-[15px]"
        />
      )}
      <div className="flex flex-col justify-center items-start w-full h-full">
        <div className="pt-1 px-2 w-full flex justify-between items-center">
          <div>
            <h1 className="text-xl font-extrabold">{frameworks}</h1>
          </div>
          <FaArrowRight size={25} className="-rotate-45" />
        </div>
      </div>
      {isOpen && <Module link={deploymentUrl} onClose={() => setIsOpen(false)} />}
    </div>
  );
}
