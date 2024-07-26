import { Rule } from "postcss";
import { defineType, defineField } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => [
        Rule.required(),
        Rule.min(3).error("A title of min. 10 characters is required"),
        Rule.max(50).error("A title of max. 50 characters is required"),
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => [
        Rule.required(),
        Rule.min(3).error("A description of min. 3 characters is required"),
        Rule.max(1000).error(
          "A description of max. 1000 characters is required"
        ),
      ],
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "Demolink",
      title: "DemoLink",
      type: "url",
    }),

    defineField({
      name: "Githublink",
      title: "GithubLink",
      type: "url",
    }),

    defineField({
      name: "publishArt",
      title: "PublishArt",
      type: "date",
      validation: (Rule) => [
        Rule.min(new Date("2020-08-25").toDateString()).max(new Date().toDateString()),
      ],
    }),
    defineField({
      name: "isResponsive",
      title: "IsResponsive",
      type: "boolean",
    }),
  ],
});
