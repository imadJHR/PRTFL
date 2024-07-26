import { SocialLinks } from "@/constants/social-links";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Variable } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-black border-t pt-4 pb-28 md:pd-4    items-center w-full">
      <div className="container flex flex-col md:flex-row items-center justify-between  gap-y-4">
        <p className="text-sm mr-5">
          Copyright &copy; {currentYear} .All rights reserved 
        </p>
        <div className="flex items-center gap-3">
          {SocialLinks.map((link, index) => {
            const { href, icon: Icon } = link;
            return (
              <a
                key={index}
                href={href}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "rounded-full"
                )}
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
