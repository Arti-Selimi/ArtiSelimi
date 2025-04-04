import React from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="bg-brown text-white p-8 rounded-2xl shadow-md max-w-4xl mx-auto mt-10 flex flex-col lg:flex-row items-center gap-10">
      <div className="flex flex-col items-center text-center lg:text-left">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-accent-orange">
          <h1></h1>
        </div>
        <h2 className="text-2xl font-semibold">Arti Selimi</h2>
        <p className="text-accent-orange mt-1">Full-Stack Developer</p>

        <div className="flex gap-4 mt-4 text-2xl text-white">
          <a href="mailto:your@email.com" className="hover:text-accent-orange transition">
            <FiMail />
          </a>
          <a href="https://github.com/Arti-Selimi" target="_blank" className="hover:text-accent-orange transition">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" className="hover:text-accent-orange transition">
            <FiLinkedin />
          </a>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg leading-relaxed mb-4 text-white/90">
          I’m a developer who enjoys crafting beautiful user interfaces and clean backend logic.
          Passionate about React, design systems, and bringing ideas to life through code.
          Always curious, always building.
        </p>
        <div className="flex items-center gap-3 mt-4">
          <FaReact className="text-accent-orange text-3xl animate-spin-slow" />
          <span className="text-white/90">Lately working with React, Next.js & TypeScript.</span>
        </div>
      </div>
    </div>
  );
}
