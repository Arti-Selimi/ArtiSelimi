import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaJava } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiSass,
  SiGraphql,
  SiMysql,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center text-white p-5 bg-expresso rounded-xl gap-5">
        <FaHtml5 size={35} />
        <FaReact size={35} />
        <SiNextdotjs size={35} />
        <SiTypescript size={35} />
        <SiSass size={35} />
        <FaNodeJs size={35} />
        <SiGraphql size={35} />
        <SiMysql size={35} />
        <FaJava size={35} />
    </div>
  );
}
