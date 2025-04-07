"use client";

import React, { useState, useRef } from "react";
import { Reorder } from "framer-motion";
import Tile from "@/components/tiles/tile";
import Pixel from "../../../../public/projects/pixel.png";
import Planit from "../../../../public/projects/planit.png";
import Wordle from "../../../../public/projects/wordle.png";

export default function Table() {
  const parentRef = useRef<HTMLDivElement | null>(null);

  const initialProjects = [
    {
      name: "Plan-It",
      imgSrc: Planit,
      frameworks: "NextJs, TypeScript",
      link: "https://github.com/Arti-Selimi/PlanIt",
      deploymentUrl: "https://plan-it-management.vercel.app/",
    },
    {
      name: "Unlimited-Wordle",
      imgSrc: Wordle,
      frameworks: "NextJs, TypeScript",
      link: "https://github.com/Arti-Selimi/Wordle",
      deploymentUrl: "https://wordle-indol-gamma.vercel.app/",
    },
    {
      name: "Pixel-Perfect",
      imgSrc: Pixel,
      frameworks: "NextJs, TypeScript",
      link: "https://github.com/Arti-Selimi/Pixel-Perfect",
      deploymentUrl: "https://pixel-perfect-three.vercel.app/",
    },
  ];

  const [projects, setProjects] = useState(initialProjects);

  return (
    <div
      ref={parentRef}
      className="flex flex-col items-center gap-5 h-full flex-1 bg-beige py-5 px-2.5 2xl:py-10 2xl:px-5 rounded-[15px] scrollable overflow-y-scroll"
    >
      <Reorder.Group
        axis="y"
        values={projects}
        onReorder={setProjects}
        className="flex flex-col gap-5 w-full"
      >
        {projects.map((project) => (
          <Tile
            parentRef={parentRef}
            key={project.name}
            value={project}
            name={project.name}
            imgSrc={project.imgSrc}
            frameworks={project.frameworks}
            link={project.link}
            deploymentUrl={project.deploymentUrl}
          />
        ))}
      </Reorder.Group>
    </div>
  );
}
