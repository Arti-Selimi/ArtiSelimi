"use client";

import React, { useState, useRef } from "react";
import { Reorder } from "framer-motion";
import Tile from "@/components/tiles/tile";
import { projectsArr } from "@/components/projectArr/Projects";

export default function Table() {
  const parentRef = useRef<HTMLDivElement | null>(null);

  const [projects, setProjects] = useState(projectsArr);

  return (
  <div
      ref={parentRef}
      className="flex flex-col items-center gap-5 h-[75vh] flex-1 bg-beige py-5 px-2.5 2xl:py-10 2xl:px-5 rounded-[15px] scrollable overflow-y-scroll"
    >
      <Reorder.Group
        axis="y"
        values={projects}
        onReorder={setProjects}
        className="flex flex-col gap-5 w-full"
      >
        {projects.map((project) => (
            console.log("project", project),
          <Tile
            key={project.name}
            parentRef={parentRef}
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
