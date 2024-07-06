import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GitHub, Linkedin } from "react-feather";
import { BackgroundGradient } from "./ui/BackgroundGradient";

const ProjectCard = ({ position, image, title, live, github, participants }) => {
  return (
    <div className="flex justify-center mb-12 mx-5">
      <BackgroundGradient className="relative rounded-[22px] max-w-sm p-6 bg-white dark:bg-zinc-900">
        <div className="absolute -top-2 -left-2">
          <div
            className="h-10 w-10 bg-[#bab736] rounded-full"
            style={{ boxShadow: "0px 0px 3px 5px #4e5029" }}
          >
            <h1 className=" p-2 " >#{position}</h1>
          </div>
        </div>

        <h1 className="text-4xl font-bold pb-2 text-[#fcffff] mt-5">{title}</h1>
        <p className="pb-4 text-gray-400">
          Some short description about the project and specifications.
        </p>
        <div className="text-gray-400 mb-4">
          <h2 className="font-semibold text-lg text-[#fcffff] mb-2">Participants:</h2>
          <ul className="list-disc pl-5">
            {participants.map((participant, index) => (
              <li key={index}>{participant}</li>
            ))}
          </ul>
        </div>
        <div className="relative h-40 mb-4">
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              alt="Project Image"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="relative mt-6">
          <div className="absolute -bottom-14 -left-12 right-0 h-16 text-white flex justify-around items-center border-white bg-white/10 backdrop-filter backdrop-blur-[1px] shadow-lg rounded-xl">
            <div className="relative font-semibold text-xl border-[3px] py-1 px-4 rounded-full text-[#fdfeff]">
              <Link href={live} passHref>
                <div className="flex items-center">
                  <div className="absolute top-0 left-0">
                    <div
                      className="h-2 w-2 bg-[#3dd75f] rounded-full mr-1"
                      style={{ boxShadow: "0px 0px 3px 5px #4e5029" }}
                    ></div>
                  </div>
                  Live
                </div>
              </Link>
            </div>
            <div className="flex space-x-4 items-center">
              <Linkedin className="text-3xl text-[#bfc0c2]" />
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <GitHub className="text-3xl text-[#bfc0c2]" />
              </a>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default ProjectCard;
