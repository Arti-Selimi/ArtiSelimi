"use client";

import React from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import ProfilePic from "../../../../public/Arti.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import Accent from "../animated-components/Accent";

export default function About() {
  return (
    <div className="bg-expresso text-white p-8 rounded-[15px] shadow-md w-full h-full flex flex-col 2xl:flex-row 2xl:gap-3 items-center">
      <div className="flex gap-2 2xl:flex-col items-center justify-between text-center lg:text-left">
        <div className="w-18 h-18 2xl:w-32 2xl:h-32 rounded-full flex items-center justify-center overflow-hidden border-4 border-accent-orange">
          <Image
            src={ProfilePic}
            alt="Profile"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <h2 className="text-lg sm:text-sm font-semibold">Arti Selimi</h2>
          <p className="text-accent-orange text-sm sm:text-xs">
            Full-Stack Developer
          </p>
          <div className="flex gap-4 text-xl text-white">
            <Link
              href="mailto:your@email.com"
              className="hover:text-accent-orange transition"
            >
              <FiMail />
            </Link>
            <Link
              href="https://github.com/Arti-Selimi"
              target="_blank"
              className="hover:text-accent-orange transition"
            >
              <FiGithub />
            </Link>
            <Link
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              className="hover:text-accent-orange transition"
            >
              <FiLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-evenly h-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl 2xl:text-3xl font-bold">About Me</h1>
          <p className="text-sm 2xl:text-xl leading-relaxed text-white/90">
            I write code, mostly for the web. I enjoy making interfaces that
            look good and work well. I also spend a fair amount of time on the
            backend, getting things to connect and run the way they should.
          </p>
          <p className="text-sm 2xl:text-xl leading-relaxed text-white/80">
            I like trying out new tools, improving old projects, and learning by
            building things. Right now, I&#39;m focused on working with JavaScript
            frameworks like React and Next.js.
          </p>
          <p className="text-white/60 italic text-xs 2xl:text-lg mb-4">
            P.S. the <Accent content="orangy-colored " />
            background means front-end and the{" "}
            <Accent content="grayish " className="text-brown " />
            one means back-end.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FaReact className="text-accent-orange text-xl animate-spin-slow" />
          <motion.span className="text-white/90 text-sm 2xl:text-lg">
            Lately using <Accent content="React" /> and{" "}
            <Accent content="Next.js" /> to build <Accent content="web apps" />.
          </motion.span>
        </div>

        <div className="mt-2 text-white/60 italic text-sm 2xl:text-lg">
          “Code is like humor. When you have to explain it, it&#39;s bad.” — Cory
          House
        </div>
      </div>
    </div>
  );
}
