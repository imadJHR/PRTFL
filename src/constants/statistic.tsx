import { getSkills } from "@/lib/skills";
import { Statistic } from "@/types/interface";

export async function getStatistics() {
  const frontendSkills = await getSkills("frontend");
  const backendSkills = await getSkills("backend");
  const toolsSkills = await getSkills("tools");
  const totalSkills: number =
    frontendSkills.length + backendSkills.length + toolsSkills.length;
  const statistics: Statistic[] = [
    {
      label: "years of experience",
      value: new Date().getFullYear() - 2023,
    },
    {
      label: "completed projects",
      value: totalSkills,
    },
  ];
  return { statistics };
}
