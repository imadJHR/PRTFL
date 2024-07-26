/* eslint-disable react/no-unescaped-entities */
import { buttonVariants } from "@/components/ui/button";
import { SocialLinks } from "@/constants/social-links";
import { ArrowRightCircle, Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import Me from "../app/assets/me.png";
import { Effect } from "@/components/ui/effects";

const Home = () => {
  return (
    <section id="home" className="grid md:grid-cols-12 items-center gap-6 ">
      {/*social links  */}
      <ul className="flex md:flex-col gap-4 items-center size-fit mx-auto py-2 md:py-8 px-8 md:px-2 border rounded-3xl ">
        {SocialLinks.map((link, index) => {
          const { href, icon: Icon } = link;
          return (
            <li key={index}>
              <a target="_blank" href={href}>
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>

      {/*presentation section */}
      <div className="md:col-span-6 flex flex-col items-center md:items-start gap-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground ">
          Hello 😊 I'm Imad Johar{" "}
        </h1>
        <h5 className="text-xl md:text-2xl font-semibold capitalize">
          Full Stack Developer
        </h5>
        <p className="leading-7 md:text-lg md:max-w-[85%] text-center md:text-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          optio rem in fugiat qui minima ab quas libero perspiciatis.
          Praesentium facilis maiores voluptatem ducimus corrupti sit assumenda,
          provident blanditiis aspernatur!
        </p>
        <div className="flex items-center  gap-2 py-4">
          <a href="#projects" className={buttonVariants({ size: "lg" })}>
            <span className="">My Work ⚒️</span>
            <ArrowRightCircle className="size-4 " />
          </a>
          <a
            href=""
            className={buttonVariants({ variant: "outline", size: "lg" })}
            download={true}
            target="_blank"
          >
            <span>download CV</span>
            <Download className="size-4" />
          </a>
        </div>
      </div>

      {/*image section */}
      <div className="md:col-span-5 grid place-content-center">
        <div className="relative flex items-center justify-center size-80 md:size-96 ">
        <Effect className="size-full "/>
        <Effect variant="square" size="sm" className="top-[8%] left-[25%] -rotate-12"/>
        <Effect variant="square" size="sm" className="top-[50%] right-[2%] rotate-12"/>
        <Effect variant="square" size="sm" className="bottom-[18%] left-[12%] rotate-6"/>
        <Image src={Me} alt={""} width={420} height={420} className="object-fill border-2 size-[80%] rounded-full ring-4 ring-primary ring-offset-4 ring-offset-background" />
        </div>
      </div>
    </section>
  );
};

export default Home;
