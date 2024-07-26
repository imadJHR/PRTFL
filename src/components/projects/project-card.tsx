import Image from "next/image";
import { FC } from "react";

interface ProjectCardProps {
  imagUrl: string;
  title: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ imagUrl, title }) => {
  return (
    <article className="relative group border rounded-md shadow cursor-pointer overflow-hidden">
      <figure className="absolute size-full top-0 left-O bg-gradient-to-t from-background/70 to-transparent" />
      <Image src={imagUrl} width={220} height={220} alt={title} className="size-full rounded-md group-hover:scale-105 transition" />
      <h3 className="absolute bottom-2 start-2 text-foreground group-hover:text-primary truncate ">{title}</h3>
    </article>
  );
};

export default ProjectCard;
