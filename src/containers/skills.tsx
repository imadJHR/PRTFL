import SkillsCoantainer from "@/components/skills/skills-coantainer";
import TitleSection from "@/components/title-section";
import { Effect } from "@/components/ui/effects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabItem } from "@/constants/tab-items";

import { getSkills } from "@/lib/skills";
import React from "react";

const skills = async () => {
  const FrontEndSkills = await getSkills("frontend");
  const BackEndSkills = await getSkills("backend");
  const Tools = await getSkills("tools");
  // eslint-disable-next-line react/jsx-key
  return (
    <section id="skills" className="relative space-y-6">
      <Effect className="-right-20 bottom-8 md:-right-36 md:bottom-2" />
      <TitleSection title="skills" description="my tecnical proficiency" />
      <Tabs defaultValue={tabItem[0].value}>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {/*tab list  */}

          <TabsList className="grid grid-cols-3 md:grid-cols-1 gap-2 w-full h-fit">
            {tabItem.map((item) => {
              const { value, label, icon: Icon } = item;
              return (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="w-full gap-2 "
                >
                  <Icon className="size-4 " />
                  <span>{label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/*tab content  */}
          <div className="md:col-span-2 bg-background/50">
            <TabsContent value="frontend">
              <SkillsCoantainer label="front end" data={FrontEndSkills} />
            </TabsContent>
            <TabsContent value="backend">
            <SkillsCoantainer label="back end" data={BackEndSkills} />
            </TabsContent>
            <TabsContent value="tools">
            <SkillsCoantainer label="tools" data={Tools} />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default skills;
