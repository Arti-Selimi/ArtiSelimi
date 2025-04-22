import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaJava } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiSass,
  SiGraphql,
  SiMysql,
} from "react-icons/si";
import "@/styles/main.scss";
import IconTile from "../../tiles/iconTiles";
import About from "../about/about";
import Table from "../animated-components/draggable-table/table";

export default function BoardMain() {
  return (
    <div className="h-[80vh] w-full flex flex-row gap-5 p-5 2xl:p-10 text-white">
      <div className="flex h-full flex-1 bg-beige p-5 2xl:p-10 rounded-[15px] overflow-hidden">
        <About />
      </div>
      <Table />
      <div className="flex flex-col items-center gap-5 h-full bg-beige py-5 px-2.5 2xl:py-10 2xl:px-5 rounded-[15px] scrollable">
        <div className="bg-accent-orange p-3 2xl:p-5 flex flex-col gap-5 rounded-[10px] w-full">
          <IconTile content={<FaHtml5 size={40} />} />
          <IconTile content={<FaReact size={40} />} />
          <IconTile content={<SiNextdotjs size={40} />} />
          <IconTile content={<SiTypescript size={40} />} />
          <IconTile content={<SiSass size={40} />} />
        </div>
        <div className="bg-brown p-3 2xl:p-5 flex flex-col gap-5 rounded-[10px] w-full">
          <IconTile content={<FaNodeJs size={40} />} />
          <IconTile content={<SiGraphql size={40} />} />
          <IconTile content={<SiMysql size={40} />} />
          <IconTile content={<FaJava size={40} />} />
        </div>
      </div>
    </div>
  );
}
