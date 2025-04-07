import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FiGithub, FiMail } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-[50%] rounded-b-[15px] bg-beige p-5 pt-0 text-xl">
      <div>
        <h1 className="text-2xl font-extrabold">Arti Selimi</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="flex gap-2 mt-4 lg:mt-0 relative group">
        <div className="h-2 w-2 bg-expresso rounded-full relative -top-5"></div>
        <div className="h-3 w-3 bg-green-500 rounded-full relative -top-5"></div>
        <div className="hidden group-hover:flex absolute left-1/2 -translate-x-1/2 bg-expresso text-white text-xs px-2 py-1 rounded z-10">
          Yes I'm watching!!
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mt-4 lg:mt-0">
        <div>
          <h1 className="text-2xl font-extrabold">Contacts:</h1>
        </div>
        <div className="flex items-center gap-3 text-2xl">
          <a href="MAILTO:selimiarti@outlook.com" target="_blank">
            <FiMail />
          </a>
          <a href="https://www.github.com/Arti-Selimi" target="_blank">
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/arti-selimi-9116ab312/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
