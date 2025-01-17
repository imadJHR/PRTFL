import React from "react";
import Logo from "./Logo";

import { navlinks } from "@/constants/nav-links";
import { ModeToggle } from "./mode-toggle";

const navbar = () => {
  return (
    <header className="fixed -mt-5 top-0 left-0 py-1.5 w-full bg-background/60 backdrop-blur-md z-50">
      <div className="container py-4 flex items-center justify-between">
        <a href="/"><Logo  /></a>
        <nav className="hidden md:flex items-center gap-4">
          {navlinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-sm  font-medium text-muted-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <ModeToggle/>
        
      </div>
    </header>
  );
};

export default navbar;
