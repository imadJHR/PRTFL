"use client";

import { Project } from "@/types/interface";

import { Separator } from "@/components/ui/separator";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FC } from "react";
import ProjectCard from "./project-card";
import { urlForImage } from "@/sanity/lib/image";
import Carousel from "./carousel";
import InfoItem from "./info-item";
import { Calendar, Eye, Github, LayoutDashboard, Tags } from "lucide-react";
import { buttonVariants } from "../ui/button";


interface ProjectItemProps {
  project: Project;
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return (
    <Dialog>
      <DialogTrigger className="md:h-[24] ">
        <ProjectCard
          imagUrl={urlForImage(project.images[0])}
          title={project.title}
        />
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-4xl lg:max-w-7xl  ">
        <DialogHeader className="bg-muted p-4 md:p-6">
          <DialogTitle className="text-foreground text-xl font-semibold truncate">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        <div className="grid lg:grid-cols-2 gap-4 p-4 max-h-[85vh] overflow-x-hidden overflow-y-auto ">
          <Carousel images={project.images} />
          <div className="space-y-4 lg:space-y-6 p-2 lg:px-4 size-full">
            <p className="text-sm">{project.description}</p>
            <Separator />
            <article className="space-y-2 lg:space-y-3">
              <InfoItem label="published" icon={Calendar}>
                <p className="font-semibold">
                  {project.publishArt.toLocaleString()}
                </p>
              </InfoItem>
              <InfoItem label="layout" icon={LayoutDashboard}>
                <p className="font-semibold">
                  {project.isresponsive ? "responsive" : "n/a"}
                </p>
              </InfoItem>
            </article>
            <Separator />
            <div className="flex items-center gap-2">
              <a
                href={project.demoLink}
                className={buttonVariants()}
                target="_blank"
              >
                <Eye className="size-4" />
                <span className="ml-2 cursor-pointer">view demo</span>
              </a>
              <a
                href={project.githubLink}
                className={buttonVariants({ variant: "outline" })}
                target="_blank"
              >
                <Github className="size-4" />
                <span className="ml-2 cursor-pointer">source code</span>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectItem;
