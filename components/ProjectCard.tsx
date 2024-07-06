import React from "react";
import Image from "next/image";
import { GitHub, Linkedin } from "react-feather";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import bg from "@/images/bg.png";

export function ProjectCard() {
  return (
    <div className="flex justify-center mb-12 mx-5">
      <BackgroundGradient className="relative rounded-[22px] max-w-sm p-6 bg-white dark:bg-zinc-900">
        <div className="absolute top-[-0.8rem] left-[-0.8rem]">
          <div
            className="h-[2rem] w-[2rem] bg-[#bab736] rounded-full"
            style={{ boxShadow: "0px 0px 3px 5px #4e5029" }}
          ></div>
        </div>

        <h1 className="text-4xl font-bold pb-[0.8rem] text-[#fcffff] mt-5">
          crypto exchange
        </h1>
        <p className="pb-[2rem] text-gray-400">
          Some short description about the project and specifications.
        </p>
        <Image src={bg} alt="crypto image" className="rounded-lg" />

        <div className="relative mt-6">
          <div className="absolute -bottom-14 -left-12 h-[4rem] w-[348px] text-white flex justify-around items-center border-white bg-white/10 backdrop-filter backdrop-blur-[1px] shadow-lg rounded-xl">
            <div className="relative font-semibold text-3xl border-[3px] py-[3px] px-[1.4rem] rounded-full text-[#fdfeff]">
              Live
              <div className="absolute top-[0.1rem] left-[0.1rem]">
                <div
                  className="h-[0.5rem] w-[0.5rem] bg-[#3dd75f] rounded-full"
                  style={{ boxShadow: "0px 0px 3px 5px #4e5029" }}
                ></div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Linkedin className="text-5xl text-[#bfc0c2]" />
              <GitHub className="text-5xl text-[#bfc0c2]" />
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}

export default ProjectCard;
