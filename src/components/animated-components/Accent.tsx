"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  content: string;
  className?: string;
};

export default function Accent({ content, className }: Props) {
  const variants = {
    intial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.span
      variants={variants}
      initial="intial"
      animate="animate"
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className={`text-accent-orange font-semibold ${className}!`}
    >
      {content}
    </motion.span>
  );
}
