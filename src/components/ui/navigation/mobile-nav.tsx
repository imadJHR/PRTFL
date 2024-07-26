import { navlinks } from "@/constants/nav-links";
import React from "react";

const MobileNav = () => {
  return (
    <div className="flex md:hidden w-full fixed bottom-0 left-0 py-4 border-t bg-background rounded-t-lg shadow-lg z-50  ">
      <nav className="container flex items-center justify-evenly ">
            {
              navlinks.map((link, index) => {
                const {name,href,icon:Icon} = link
               return(
                <a key={index} href={href} className="size-10 p-2 grid place-content-center">
                  <div className="flex flex-col items-center gap-y-1">
                    <span className="text-sm font-semibold">
                      {name}
                    </span>
                    <Icon/>
                  </div>
                </a>
               )
              })
            }
      </nav>
    </div>
  );
};

export default MobileNav;
