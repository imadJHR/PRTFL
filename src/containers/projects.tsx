import ProjectItem from "@/components/projects/project-item";
import TitleSection from "@/components/title-section";
import { Effect } from "@/components/ui/effects";
import { getProjects } from "@/lib/projects";

import React from "react";

const ProjectsSection = async () => {
  const projects = await getProjects();
  return (
    <section id="projects" className="relative space-y-6 ">
      <Effect className="top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
      <TitleSection title={"Projects"} description="Some things i've built" />
      <div className="grid md:grid-cols-2 lg:grid-cls-3 gap-4">
        {projects.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      
        
       
      </div>
    </section>
  );
};

export default ProjectsSection;
