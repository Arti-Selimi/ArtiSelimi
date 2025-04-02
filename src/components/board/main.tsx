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

export default function BoardMain() {
  return (
    <div className="h-[75vh] w-full flex gap-10 p-10 text-white">
      <div className="flex flex-col items-center gap-10 h-full flex-5 bg-primary p-10 rounded-[15px]">
        <div className="text-black">
          <div>
            <h1 className="text-4xl">title</h1>
          </div>
          <div>
            <p className="text-3xl">content</p>
            <p className="text-3xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              provident.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 h-full flex-5 bg-primary p-10 rounded-[15px] overflow-auto scrollable">
        <Tile
          className="flex-2"
          name="Plan-It"
          link="https://github.com/Arti-Selimi/PlanIt"
          imgSrc={Planit}
          frameworks="NextJs, TypeScript"
        />
        <Tile
          className="flex-2"
          name="Unlimited-Wordle"
          link="https://github.com/Arti-Selimi/Wordle"
          imgSrc={Wordle}
          frameworks="NextJs, TypeScript"
        />
        <Tile
          className="flex-2"
          name="Pixel-Perfect"
          link="https://github.com/Arti-Selimi/Pixel-Perfect"
          imgSrc={Pixel}
          frameworks="NextJs, TypeScript"
        />
      </div>
      <div
        className="flex flex-col items-center gap-5 h-full bg-primary p-5 rounded-[15px] scrollable"
        style={{ flex: 1 }}
      >
        <div className="bg-accent p-5 flex flex-col gap-10 rounded-[10px]">
          <Tile contentType="icon" content={<FiGithub size={40} />} />
          <Tile contentType="icon" content={<FiLinkedin size={40} />} />
          <Tile contentType="icon" content={<FiTwitter size={40} />} />
        </div>
        <div className="bg-accent-orange p-5 flex flex-col gap-10 rounded-[10px]">
          <Tile contentType="icon" content={<FaHtml5 size={40} />} />
          <Tile contentType="icon" content={<FaReact size={40} />} />
          <Tile contentType="icon" content={<SiNextdotjs size={40} />} />
          <Tile contentType="icon" content={<SiTypescript size={40} />} />
          <Tile contentType="icon" content={<SiSass size={40} />} />
        </div>
        <div className="bg-secondary p-5 flex flex-col gap-10 rounded-[10px]">
          <Tile contentType="icon" content={<FaNodeJs size={40} />} />
          <Tile contentType="icon" content={<SiGraphql size={40} />} />
          <Tile contentType="icon" content={<SiMysql size={40} />} />
          <Tile contentType="icon" content={<FaJava size={40} />} />
        </div>
      </div>
    </div>
  );
}
