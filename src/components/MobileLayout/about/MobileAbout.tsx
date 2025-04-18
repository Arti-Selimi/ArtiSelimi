import React from "react";
import Image from "next/image";
import ProfilePic from "public/Arti.jpg";
import Accent from "@/components/DekstopLayout/animated-components/Accent";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

type Props = {};

export default function MobileAbout({}: Props) {
  return (
    <div className="flex flex-col p-5 pt-10 bg-expresso rounded-xl">
      <div className="w-24 h-24 rounded-full absolute top-8 left-35 flex items-center justify-center overflow-hidden border-4 border-expresso">
        <Image
          src={ProfilePic}
          alt="Profile"
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-white/90 m-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl 2xl:text-3xl font-bold">About Me</h1>
          <div className="flex gap-4 text-xl text-white">
            <Link
              href="mailto:your@email.com"
              className="text-accent-orange transition"
            >
              <FiMail />
            </Link>
            <Link
              href="https://github.com/Arti-Selimi"
              target="_blank"
              className="text-accent-orange transition"
            >
              <FiGithub />
            </Link>
            <Link
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              className="text-accent-orange transition"
            >
              <FiLinkedin />
            </Link>
          </div>
          <p className="text-xs leading-relaxed">
            I write code, mostly for the web. I enjoy making interfaces that
            look good and work well. I also spend a fair amount of time on the
            backend, getting things to connect and run the way they should.
          </p>
          <p className="text-xs leading-relaxed">
            I like trying out new tools, improving old projects, and learning by
            building things. Right now, I&#39;m focused on working with
            JavaScript frameworks like <Accent content="React" /> and <Accent content="Next.js" />.
          </p>
        </div>
        <div className="mt-2 text-white/60 italic text-xs">
          “Code is like humor. When you have to explain it, it&#39;s bad.” —
          Cory House
        </div>
      </div>
    </div>
  );
}
