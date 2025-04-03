import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJava,
  FaArrowRight,
  FaExpand,
} from "react-icons/fa6";
import Image from "next/image";
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
import Link from "next/link";

export default function BoardMain() {
  return (
    <div className="h-[75vh] w-full flex gap-10 p-10">
      <div className="flex flex-col items-center gap-10 h-full flex-5 bg-secondary p-10 rounded-[15px]">
        <Tile
          content={
            <div>
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
          }
          className="h-full"
        />
      </div>
      <div className="flex flex-col items-center gap-10 h-full flex-5 bg-secondary p-10 rounded-[15px] overflow-auto scrollable">
        <Tile
          className="flex-2"
          content={
            <div className="flex flex-col justify-center items-start w-full h-full">
              <div className="border-b-2 border-primary pb-1 px-2 w-full mb-2 flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-extrabold">Plan-It</h1>
                </div>
                <div className="flex gap-5 items-center">
                  <Link
                    href="https://github.com/Arti-Selimi/PlanIt"
                    target="_blank"
                  >
                    <FiGithub size={25} />
                  </Link>
                  <FaExpand size={25} />
                </div>
              </div>
              <Image
                src={Planit}
                alt="project"
                objectFit="cover"
                className="w-full h-full rounded-[15px]"
              />
              <div className="flex flex-col justify-center items-start w-full h-full">
                <div className="pt-1 px-2 w-full flex justify-between items-center">
                  <div>
                    <h1 className="text-xl font-extrabold">
                      NextJs, TypeScript
                    </h1>
                  </div>
                  <FaArrowRight size={25} className="-rotate-45" />
                </div>
              </div>
            </div>
          }
        />
        <Tile
          className="flex-2"
          content={
            <div className="flex flex-col justify-center items-start w-full h-full">
              <div className="border-b-2 border-primary pb-1 px-2 w-full mb-2 flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-extrabold">Unlimited Wordle</h1>
                </div>
                <div className="flex gap-5 items-center">
                  <Link
                    href="https://github.com/Arti-Selimi/wordle"
                    target="_blank"
                  >
                    <FiGithub size={25} />
                  </Link>
                  <FaExpand size={25} />
                </div>
              </div>
              <Image
                src={Wordle}
                alt="project"
                objectFit="cover"
                className="w-full h-full rounded-[15px]"
              />
              <div className="flex flex-col justify-center items-start w-full h-full">
                <div className="pt-1 px-2 w-full flex justify-between items-center">
                  <div>
                    <h1 className="text-xl font-extrabold">
                      NextJs, TypeScript
                    </h1>
                  </div>
                  <FaArrowRight size={25} className="-rotate-45" />
                </div>
              </div>
            </div>
          }
        />
        <Tile
          className="flex-2"
          content={
            <div className="flex flex-col justify-center items-start w-full h-full">
              <div className="border-b-2 border-primary pb-1 px-2 w-full mb-2 flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-extrabold">Pixel Perfect</h1>
                </div>
                <div className="flex gap-5 items-center">
                  <Link
                    href="https://github.com/Arti-Selimi/Pixel-Perfect"
                    target="_blank"
                  >
                    <FiGithub size={25} />
                  </Link>
                  <FaExpand size={25} />
                </div>
              </div>
              <Image
                src={Pixel}
                alt="project"
                objectFit="cover"
                className="w-full h-full rounded-[15px]"
              />
              <div className="flex flex-col justify-center items-start w-full h-full">
                <div className="pt-1 px-2 w-full flex justify-between items-center">
                  <div>
                    <h1 className="text-xl font-extrabold">
                      NextJs, TypeScript
                    </h1>
                  </div>
                  <FaArrowRight size={25} className="-rotate-45" />
                </div>
              </div>
            </div>
          }
        />
      </div>
      <div
        className="flex flex-col items-center gap-10 h-full bg-secondary py-10 rounded-[15px] scrollable"
        style={{ flex: 1 }}
      >
        <Tile
          content={<FiGithub size={50} />}
          className="flex items-center justify-center h-[100px] w-[100px]"
        />
        <Tile
          content={<FiLinkedin size={50} />}
          className="flex items-center justify-center h-[100px] w-[100px]"
        />
        <Tile
          content={<FiTwitter size={50} />}
          className="flex items-center justify-center h-[100px] w-[100px]"
        />
        <Tile
          content={<FaHtml5 size={50} />}
          className="flex items-center justify-center h-[100px] w-[100px]"
        />
        <Tile
          content={<FaReact size={50} />}
          className="flex items-center justify-center h-[100px] w-[100px]"
        />
        <Tile
          content={<SiNextdotjs size={50} />}
          className="flex items-center justify-center h-[100px] w-[100px]"
        />
        <Tile
          content={<SiTypescript size={50} />}
          className="flex items-center justify-center h-[100px] w-[100px]"
        />
        <Tile
          content={<SiSass size={50} />}
          className="flex items-center justify-center h-[100px] w-[100px]"
        />
        <Tile
          content={<FaNodeJs size={50} />}
          className="flex items-center justify-center h-[100px] w-[100px]"
        />
        <Tile
          content={<SiGraphql size={50} />}
          className="flex items-center justify-center h-[100px] w-[100px]"
        />
        <Tile
          content={<SiMysql size={50} />}
          className="flex items-center justify-center h-[100px] w-[100px]"
        />
        <Tile
          content={<FaJava size={50} />}
          className="flex items-center justify-center h-[100px] w-[100px]"
        />
      </div>
    </div>
  );
}
