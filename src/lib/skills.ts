import { client } from "@/sanity/lib/client";
import { SkillCategory, Skills } from "@/types/interface";

export async function getSkills(category:SkillCategory) {
  const query = `
    *[_type=="skills" && category=="${category}"]|order(label) {
  _id,label,value,category
}[]`;


const data = await client.fetch(query)

  return data  as Skills[]

}


