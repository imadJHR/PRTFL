import { TabItem } from "@/types/interface";
import { AppWindow, PencilRuler, TerminalSquare } from "lucide-react";

 

export const tabItem:TabItem[] = [
    {
        value:"frontend",
        label:"frontend",
        icon:AppWindow
    },
    {
        value:"backend",
        label:"backend",
        icon:TerminalSquare
    },
    {
        value:"tools",
        label:"tools",
        icon:PencilRuler
    },

]