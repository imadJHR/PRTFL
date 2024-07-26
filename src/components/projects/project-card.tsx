import Image from "next/image";
import { FC } from "react";

interface ProjectCardProps {
  imagUrl: string;
  title: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ imagUrl, title }) => {
  return (
    <article className="relative group border rounded-md shadow cursor-pointer overflow-hidden md:max-h-96 ">
      <figure className="absolute size-full top-0 left-O " />
      <Image src={imagUrl} width={120} height={120} alt={title} className="size-full rounded-md group-hover:scale-105 object-cover transition" />
      <h3 className="absolute bottom-2 start-2 text-foreground group-hover:text-primary truncate ">{title}</h3>
    </article>
  );
};

export default ProjectCard;
