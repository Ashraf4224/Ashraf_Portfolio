import React from "react";
import ProjectCard from "./ProjectCard";
import { projectList } from "./ProjectList";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full h-full pb-10  border-b-[1px] border-b-slate-300"
    >
      <div className="flex flex-col space-y-2 items-center justify-center">
        <h1 className="text-2xl font-bold font-serif text-center text-neutral-300">
          Projects
        </h1>
        <div className="w-full flex items-center ">
          <div className="grid md:grid-cols-3 gap-2 mx-auto">
            {projectList.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
