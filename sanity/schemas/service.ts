import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Servicios",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del servicio",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Imagen representativa",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Orden de aparición",
      type: "number",
      description: "Número menor = aparece primero",
    }),
  ],
  orderings: [
    {
      title: "Orden de aparición",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "order", media: "image" },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle: `Orden: ${subtitle}`,
      media,
    }),
  },
});
