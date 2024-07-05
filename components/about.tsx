import React from "react";
import Image from "next/image";
import clubImage from "@/images/forceLogo.png";
import eventImage from "@/images/skillLogo.png";
import { Meteors } from "./ui/Meteors";

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-transparent text-white">
      <h1 className="uppercase tracking-widest text-center font-bold mb-10">
        <span className="text-center tracking-widest text-xl md:text-3xl lg:text-4xl">
          About
        </span>
      </h1>
      <div className="relative flex flex-col md:flex-row item-center justify-center">
        <div className=" px-10 py-8 mx-auto min-w-[350px] lg:min-w-[460px] max-w-[350px] lg:max-w-[490px] rounded-lg md:w-3/5 text-center flex flex-col items-center animate-slideInFromLeft">
          <div className=" w-full relative ">
            <div className="absolute flex item-center justify-between  inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <Image
                src={clubImage}
                alt="Club Image"
                width={100}
                height={100}
                className=" m-auto object-cover rounded-full mb-4"
              />
              <h2 className="lg:text-2xl text-lg md:text-xl font-bold mb-4">
                FORCE
              </h2>
              <p className="lg:text-lg md:text-base text-sm text-justify">
                FORCE - Forum of Computer Engineers is a community dedicated to
                encourage open source software, improving coding culture,
                project building and introducing new platforms to work on. It
                provides opportunity for students to broaden their knowledge in
                the field of computer science and interact with other students
                who have shared interests.
              </p>
              <Meteors number={10} />
            </div>
          </div>
        </div>
        <div className=" px-10 py-8 mx-auto min-w-[350px] lg:min-w-[460px] max-w-[350px] lg:max-w-[490px] rounded-lg md:w-3/5 text-center flex flex-col items-center animate-slideInFromRight">
          <div className=" w-full relative ">
            <div className="absolute flex item-center justify-between  inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <Image
                src={eventImage}
                alt="Event Image"
                width={130}
                height={130}
                className=" m-auto object-cover rounded-full mb-4"
              />

              <h2 className="lg:text-2xl text-lg md:text-xl font-bold mb-4">
                SKILLABHYUDAYA
              </h2>
              <p className="lg:text-lg md:text-base text-sm text-justify">
                SKILLABHYUDAYA is a multifaceted development event hosted by
                FORCE, focusing on web development, app development, artificial
                intelligence, machine learning, and design. It offers
                participants the chance to enhance their skills, engage in
                innovative projects, and collaborate with peers who share their
                passion for technology and creativity.
              </p>
              <Meteors number={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
