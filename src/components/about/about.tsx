import React from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import ProfilePic from "../../../public/Arti.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="bg-brown text-white p-8 rounded-2xl shadow-md h-full max-w-full mx-auto flex flex-col lg:flex-row items-center gap-10">
      {/* Profile + Socials */}
      <div className="flex flex-col items-center text-center lg:text-left">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-accent-orange">
          <Image
            src={ProfilePic}
            alt="Profile"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
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

      {/* Description */}
      <div className="flex-1 flex flex-col justify-between h-full">
        <div>
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed mb-4 text-white/90">
            I write code, mostly for the web. I enjoy making interfaces that look good and work well. 
            I also spend a fair amount of time on the backend, getting things to connect and run the way they should.
          </p>
          <p className="text-lg leading-relaxed text-white/80 mb-6">
            I like trying out new tools, improving old projects, and learning by building things. Right now, 
            I’m focused on working with JavaScript frameworks like React and Next.js.
          </p>
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <FaReact className="text-accent-orange text-3xl animate-spin-slow" />
          <span className="text-white/90">Lately using React, Next.js & TypeScript.</span>
        </div>

        <div className="mt-8 text-white/60 italic text-sm">
          “Code is like humor. When you have to explain it, it’s bad.” — Cory House
        </div>
      </div>
    </div>
  );
}
