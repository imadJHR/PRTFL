import { buttonVariants } from "@/components/ui/button";
import TitleSection from "../components/title-section";
import { Effect } from "@/components/ui/effects";
import React from "react";
import { ArrowRightCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { getStatistics } from "@/constants/statistic";

const About = () => {
  const { statistics } = getStatistics();
  return (
    <section id="about" className="relative">
      <Effect className="-left-32 md:left-44 -top-12" />
      <article className="relative max-x-[50rem] mx-auto bg-background/90 border rounded-lg p-6 flex flex-col gap-y-6">
        <Effect
          variant="square"
          size="default"
          className="-top-4 -right-5 -z-10 rotate-12"
        />
        <TitleSection
          title="aboute me "
          description="a quick introduction about me "
          className="items-start"
        />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          voluptas amet dolores, harum ratione at ipsa? Modi consequatur labore,
          fugit veniam nulla laborum magnam adipisci commodi facere iure
          doloremque assumenda provident ipsam ut esse soluta minima
          reprehenderit reiciendis. Quae perspiciatis ipsam accusamus nihil eius
          rem illo repellat nemo autem saepe.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-end">
          {statistics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start"
            >
              <p className="text-foreground text-2xl md:text-4xl font-bold">
                +{item.value}
              </p>
              <p className="whitespace-nowrap text-sm md:text-lg">
                {item.label}
              </p>
            </div>
          ))}

          <a
            href="#skills"
            className={cn(
              buttonVariants({ size: "lg" }),
              "cols-span-2 md:col-span-1"
            )}
          >
            <span className="">Discover skills</span>
            <ArrowRightCircleIcon className="size-4" />
          </a>
        </div>
      </article>
    </section>
  );
};

export default About;
