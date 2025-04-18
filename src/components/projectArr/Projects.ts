// src/data/projects.js or .ts
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import { FaReact, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiTypescript } from "react-icons/si";

import Pixel from "public/projects/pixel.png";
import Planit from "public/projects/planit.png";
import Wordle from "public/projects/wordle.png";

export const projectsArr = [
  {
    name: "Plan-It",
    imgSrc: Planit,
    frameworks: [TbBrandNextjs, FaReact, FaSass, SiFirebase],
    link: "https://github.com/Arti-Selimi/PlanIt",
    deploymentUrl: "https://plan-it-management.vercel.app/",
    description: "Task and schedule manager with a clean UI and calendar view.",
  },
  {
    name: "Unlimited-Wordle",
    imgSrc: Wordle,
    frameworks: [FaReact, FaSass, TbApi],
    link: "https://github.com/Arti-Selimi/Wordle",
    deploymentUrl: "https://wordle-indol-gamma.vercel.app/",
    description: "A Wordle clone with unlimited plays and keyboard input.",
  },
  {
    name: "Pixel-Perfect",
    imgSrc: Pixel,
    frameworks: [TbBrandNextjs, FaReact, SiTailwindcss, SiTypescript],
    link: "https://github.com/Arti-Selimi/Pixel-Perfect",
    deploymentUrl: "https://pixel-perfect-three.vercel.app/",
    description: "A showcase website replicating a design with pixel precision.",
  },
];
