import React from "react";
import Image from "next/image";
import skillImage from "@/images/skillLogo.png";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { SparklesCore } from "./ui/SparklesProps";

const Hero = () => {
  return (
    <div className="p-10">
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
      <div className="left-1 top-0 bottom-1 w-[100vw] h-[100vh] absolute">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#eeeee4"
        />
      </div>

      <div className="flex h-screen flex-col lg:flex-row items-center justify-center relative z-10 lg:space-y-0 lg:space-x-8">
        <div className="lg:max-w-[20vw] lg:hidden sm:relative sm:top-0 sm:left-0 sm:w-[100vw] sm:h-[auto] sm:flex sm:justify-center">
          <Image
            src={skillImage}
            alt="Skill Abhyudaya"
            width={250}
            className="rounded-full sm:top-0 sm:left-0"
          />
        </div>
        <div className="flex flex-col items-center justify-center max-w-[80vw] md:max-w-2xl lg:max-w-[40vw]">
          <h1 className="uppercase tracking-widest text-5xl text-center font-bold md:text-6xl lg:text-8xl">
            <span className="block">SKILL</span>
            <span className="block ml-[6px]">ABHYUDAYA</span>
          </h1>
          <TextGenerateEffect
            className="text-center text-3xl lg:text-4xl"
            words="Development and Design event of IIIT Una"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
