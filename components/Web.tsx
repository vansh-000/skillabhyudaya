import React from 'react';
import ProjectCard from './ProjectCard';
import {webwinners} from "@/utils/winners";

const Web = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="uppercase tracking-widest text-center font-bold m-16">
        <span className="text-center tracking-widest text-3xl">
          Web Development Projects
        </span> 
      </h1>
      <div className="flex flex-col lg:flex-row justify-center gap-6">
      {webwinners.map((winner) => (
        <ProjectCard
          key={winner.key}
          title={winner.title}
          live={winner.live}
          github={winner.github}
          image={winner.image}
          participants={winner.participants}
          position={winner.position}
        />
      ))}
      </div>
    </div>
  );
}

export default Web;
