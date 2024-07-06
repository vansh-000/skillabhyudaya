import React from 'react';
import ProjectCard from './ProjectCard';
import {appwinners} from "@/utils/winners";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="uppercase tracking-widest text-center font-bold m-16">
        <span className="text-center tracking-widest text-xl md:text-3xl lg:text-4xl">
          Android Development projects
        </span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center gap-6">
      {appwinners.map((winner) => (
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

export default App;
