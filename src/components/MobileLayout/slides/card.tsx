import React from "react";
import Image from "next/image";
import type { Card } from "@/components/types/types";
import Link from "next/link";

export default function Card({
  name,
  frameworks,
  imgSrc,
  link,
  deploymentUrl,
  description,
}: Card) {
  return (
    <div className="keen-slider__slide min-w-[80%] p-4 bg-expresso rounded-xl shadow-[rgb(0_0_10px_10px)] text-white">
      <Image src={imgSrc} alt={name} className="rounded-[4px]" />
      <hr className="w-full border-white/40 my-2" />
      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="text-xl font-extrabold">{name}</h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 text-accent-orange text-2xl">
            {frameworks.map((Framework, index) => {
              return <Framework key={index}/>;
            })}
          </div>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex gap-2">
          <Link
            href={link}
            target="_blank"
            className="p-2 border-accent-orange text-accent-orange border-1 rounded-xl"
          >
            GitHub
          </Link>
          <Link
            href={deploymentUrl}
            target="_blank"
            className="p-2 border-accent-orange text-accent-orange border-1 rounded-xl"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
