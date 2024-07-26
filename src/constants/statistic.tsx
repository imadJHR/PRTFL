import { Statistic } from "@/types/interface";

export function getStatistics() {
  const statistics: Statistic[] = [
    {
      label: "years of experience",
      value: new Date().getFullYear() - 2023,
    },
    {
      label: "completed projects",
      value: 4,
    },
  ];
  return { statistics };
}
