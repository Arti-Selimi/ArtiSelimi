import React from "react";
import Image from "next/image";
import ProfilePic from "../../../../public/Arti.jpg";

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
        <h1 className="text-2xl 2xl:text-3xl font-bold">About Me</h1>
        <p className="text-xs leading-relaxed">
          I write code, mostly for the web. I enjoy making interfaces that look
          good and work well. I also spend a fair amount of time on the backend,
          getting things to connect and run the way they should.
        </p>
        <div className="mt-2 text-white/60 italic text-xs">
          “Code is like humor. When you have to explain it, it&#39;s bad.” — Cory
          House
        </div>
      </div>
    </div>
  );
}
