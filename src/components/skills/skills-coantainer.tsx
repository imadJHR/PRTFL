/* eslint-disable react/jsx-key */

import { FC } from "react";
import SkillItem from "./skill-item";
import { Skills } from "@/types/interface";

interface SkillsCoantainerProps {
  
  label: string;

  data: Skills[];
}

const SkillsCoantainer: FC<SkillsCoantainerProps> = ({ label,data }) => {
  return (
    <article className="min-h-[25rem] border border-primary rounded-lg">
      <h2 className="text-primary text-2xl font-semibold py-4 px-6 border-b border-primary">
        {label}
      </h2>
      <div className="px-6 py-4 spave-y-6">
        {data.map((item)=>(
          <SkillItem  key={item._id} {...item} />
        ))}
      </div>
    </article>
  );
};

export default SkillsCoantainer;
