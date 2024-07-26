import { Rule } from "postcss";
import { defineType, defineField } from "sanity";

export default defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "label",
      type: "string",
      validation: (Rule) => [Rule.required().min(3).max(100)],
    }),
    defineField({
      name: "value",
      title: "Percantage",
      type: "number",
      validation: (Rule) => [
        Rule.required(),
        Rule.min(1).error("minimum value must be 1"),
        Rule.max(100).error("max value must be 100"),
      ],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "frontend",
      options: {
        list: [
          { title: "Frontend", value: "frontend" },

          { title: "Backend", value: "backend" },

          { title: "Tools", value: "tools" },
        ],
      },
      validation: (Rule) => [Rule.required()],
    }),
  ],
});
