import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <Spotlight
        className="hidden md:block absolute -top-10 -left-10 h-[500vh] md:h-[150vh] w-[10vw] md:w-[1000vw] lg:w-[100vw]"
        fill="white"
      />
      <Spotlight
        className="hidden md:block absolute -top-20 left-10 h-[500vh] md:h-[100vh] w-[10vw] md:w-[1000vw] lg:w-[10000vw]"
        fill="blue"
      />
      <Spotlight
        className="hidden md:block absolute -top-10 -left-10 h-[500vh] md:h-[150vh] w-[10vw] md:w-[1000vw] lg:w-[100vw]"
        fill="white"
      />

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10 ">
        <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-5xl text-center font-bold md:text-6xl lg:text-8xl">
            <span className="block">SKILL</span>
            <span className="block ml-[6px]">ABHYUDAYA</span>
          </h1>
          <TextGenerateEffect
            className="text-center text-[20px] md:text-3xl lg:text-4xl"
            words="Development and Design event of IIIT Una"
          />
          <TextGenerateEffect
            className="text-center tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
            words="Hosted by FORCE"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
