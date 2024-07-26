import { LucideIcon } from "lucide-react";

export interface SocialLink {
  href: string;
  icon: LucideIcon;
}
export interface Navlink extends SocialLink {
  name: string;
}
export interface Statistic {
  label: string;
  value: number;
}
export type SkillCategory = "frontend" | "backend" | "tools";
export interface Skills {
  label: string;
  value: number;
  category: string;
  _id: string;
}
export interface TabItem {
  label: string;
  icon: LucideIcon;
  value: SkillCategory;
}
export interface Project {
  _id: string;
  title: string;
  images: any[];
  description: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  publishArt: Date;
  isresponsive: boolean;
  
}
