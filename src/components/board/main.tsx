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
import "./main.scss"

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
      <div className="flex flex-col items-center gap-10 h-full flex-5 bg-secondary p-10 rounded-[15px] scrollable">
        <Tile
            className="container"
          content={
            <iframe className="container__iframe h-full w-full" src="https://plan-it-management.vercel.app/" />
          }
        />
        <Tile
            className="container"
          content={
            <iframe className="container__iframe h-full w-full" src="https://pixel-perfect-three.vercel.app/" />
          }
        />
        <Tile
            className="container"
          content={
            <iframe className="container__iframe h-full w-full" src="https://wordle-indol-gamma.vercel.app/" />
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