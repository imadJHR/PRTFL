import { cn } from "@/lib/utils";

import React, { FC } from "react";

interface TitleSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

const TitleSection: FC<TitleSectionProps> = ({className,title,description,...props}) => {
  return (
    <div
      className={cn("flex flex-col gap-y-1 md:gap-y-2 items-center", className)}
    >
      <h1 className="text-primary font-bold ">{title}</h1>
      <h3 className="text-foreground font-semibold text-xl md:text-2xl">{description}</h3>
    </div>
  );
};

export default TitleSection;
