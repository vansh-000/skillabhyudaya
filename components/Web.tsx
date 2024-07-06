import React from 'react';
import ProjectCard from './ProjectCard';

const Web = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="uppercase tracking-widest text-center font-bold mb-16">
        <span className="text-center tracking-widest text-xl md:text-3xl lg:text-4xl">
          Web Development
        </span>
      </h1>
      <div className="flex justify-center gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Web;
