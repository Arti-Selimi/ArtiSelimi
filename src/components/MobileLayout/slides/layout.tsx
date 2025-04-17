"use client";

import React, {useState} from "react";
import { projectsArr } from "@/components/projectArr/Projects";
import Card from "./card";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function CardLayout() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider({
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      slides: { perView: 1, spacing: 16 },
    });
  return (
    <>
      <div ref={sliderRef} className="keen-slider inset-shadow-[rgb(0_0_10px_10px)]">
        {projectsArr.map((project, index) => {
          return (
            <Card
              key={index}
              name={project.name}
              frameworks={project.frameworks}
              imgSrc={project.imgSrc}
              link={project.link}
              deploymentUrl={project.deploymentUrl}
              description={project.description}
            />
          );
        })}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {projectsArr.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full transition-all ${
              idx === currentSlide
                ? "bg-black scale-125"
                : "bg-expresso opacity-50"
            }`}
          />
        ))}
      </div>
    </>
  );
}
