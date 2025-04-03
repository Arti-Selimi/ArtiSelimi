import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FiGithub, FiMail } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-[700px] rounded-b-[15px] bg-violet p-5 text-xl">
      <div>
        <h1 className="text-2xl font-extrabold">Arti Selimi</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="flex gap-2">
        <div className="relative group">
          <div className="h-2 w-2 bg-black rounded-full relative -top-10"></div>
        </div>
        <div className="relative group">
          <div className="h-3 w-3 bg-green-500 rounded-full relative -top-10"></div>
          <span className="absolute left-1/2 -translate-x-1/2 -top-12 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-60 group-hover:left-1/2 group-hover:translate-x-2 group-hover:cursor-default transition-all ease-in-out duration-200">
            Yes, I'm watching
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div>
          <h1 className="text-2xl font-extrabold">Contacts:</h1>
        </div>
        <div className="flex items-center gap-3">
          <a href="MAILTO:selimiarti@outlook.com" target="_blank"><FiMail size={30} /></a>
          <a href="https://www.github.com/Arti-Selimi" target="_blank"><FiGithub size={25} /></a>
          <a href="https://www.linkedin.com/in/arti-selimi-9116ab312/" target="_blank"><FaLinkedin size={30} /></a>
        </div>
      </div>
    </div>
  );
}
