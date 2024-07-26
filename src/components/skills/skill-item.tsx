"use client";

import { FC, useEffect, useState } from "react";
import { Skills } from "@/types/interface";
import { Progress } from "../ui/progress";

interface SkillItemProps {
  item: Skills;
  label: string;
  value: number;
}

const SkillItem: FC<SkillItemProps> = ( item ) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(item.value), 500);
    return () => clearTimeout(timer);
  }, [item.value]);
  return (
    <article className="grid gap-2">
      <div className="flex items-center justify-between gap-8 px-4">
        <h4 className="text-foreground">{item.label}</h4>
        <h4 className="text-primary/80">{item.value}%</h4>
      </div>
      <Progress value={progress} className="h-1.5" />
    </article>
  );
};

export default SkillItem;
