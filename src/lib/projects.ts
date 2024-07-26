import { client } from "@/sanity/lib/client";
import { Project } from "@/types/interface";

export async function getProjects() {
  const query = `
    *[_type=="projects"] {
         _id,
         title,
         images,
         description,
         tags,
         demoLink,
         githubLink,
         publishArt,
         isresponsive
}`;


const data = await client.fetch(query)

  return data  as Project []

}


