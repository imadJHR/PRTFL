import { Navlink } from "@/types/interface";
import {User,Wrench,Book,MessageSquareText} from 'lucide-react'

 export const navlinks:Navlink[] = [
    {
        name: "about",
        href: "#about",
        icon: User,
    },
    {
        name: "skills",
        href: "#skills",
        icon: Wrench,
    },
    {
        name: "projects",
        href: "#projects",
        icon: Book,
    },
    {
        name: "contact",
        href: "#contact",
        icon: MessageSquareText,
    },


 ]