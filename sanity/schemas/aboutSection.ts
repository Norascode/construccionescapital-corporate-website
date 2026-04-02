import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "Sección Nosotros",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título de la sección",
      type: "string",
      initialValue: "Quiénes Somos",
    }),
    defineField({
      name: "description",
      title: "Descripción principal",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "image",
      title: "Imagen principal",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "differentiators",
      title: "Diferenciadores / Por qué elegirnos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Título",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Descripción",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
    defineField({
      name: "mission",
      title: "Misión",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "vision",
      title: "Visión",
      type: "text",
      rows: 4,
    }),
  ],
  preview: {
    prepare: () => ({ title: "Sección Nosotros" }),
  },
});
