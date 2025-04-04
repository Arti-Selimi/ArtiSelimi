import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaJava } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiSass,
  SiGraphql,
  SiMysql,
} from "react-icons/si";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Tile from "../tiles/tile";
import "@/styles/main.scss";
import Pixel from "../../../public/projects/pixel.png";
import Planit from "../../../public/projects/planit.png";
import Wordle from "../../../public/projects/wordle.png";
import IconTile from "../tiles/iconTiles";
import About from "../about/about";

export default function BoardMain() {
  return (
    <div className="h-[80vh] w-full flex gap-10 p-10 text-white">
      <div className="flex flex-col items-center gap-10 h-full flex-5 bg-violet p-10 rounded-[15px]">
        <About />
      </div>
      <div className="flex flex-col items-center gap-10 h-full flex-5 bg-violet p-10 rounded-[15px] overflow-auto scrollable">
        <Tile
          name="Plan-It"
          link="https://github.com/Arti-Selimi/PlanIt"
          imgSrc={Planit}
          frameworks="NextJs, TypeScript"
          deploymentUrl="https://plan-it-management.vercel.app/"
        />
        <Tile
          name="Unlimited-Wordle"
          link="https://github.com/Arti-Selimi/Wordle"
          imgSrc={Wordle}
          frameworks="NextJs, TypeScript"
          deploymentUrl="https://wordle-indol-gamma.vercel.app/"
        />
        <Tile
          name="Pixel-Perfect"
          link="https://github.com/Arti-Selimi/Pixel-Perfect"
          imgSrc={Pixel}
          frameworks="NextJs, TypeScript"
          deploymentUrl="https://pixel-perfect-three.vercel.app/"
        />
      </div>
      <div
        className="flex flex-col items-center gap-5 h-full bg-violet p-5 rounded-[15px] scrollable"
        style={{ flex: 1 }}
      >
        <div className="bg-accent-orange p-5 flex flex-col gap-10 rounded-[10px]">
          <IconTile content={<FaHtml5 size={40} />} />
          <IconTile content={<FaReact size={40} />} />
          <IconTile content={<SiNextdotjs size={40} />} />
          <IconTile content={<SiTypescript size={40} />} />
          <IconTile content={<SiSass size={40} />} />
        </div>
        <div className="bg-brown p-5 flex flex-col gap-10 rounded-[10px]">
          <IconTile content={<FaNodeJs size={40} />} />
          <IconTile content={<SiGraphql size={40} />} />
          <IconTile content={<SiMysql size={40} />} />
          <IconTile content={<FaJava size={40} />} />
        </div>
      </div>
    </div>
  );
}
