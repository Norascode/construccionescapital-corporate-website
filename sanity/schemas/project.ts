import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Proyectos (Galería)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del proyecto",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Ubicación",
      type: "string",
      description: "Ej: El Poblado, Medellín",
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Techos", value: "Techos" },
          { title: "Pérgolas", value: "Pérgolas" },
          { title: "Decks", value: "Decks" },
          { title: "Fachadas", value: "Fachadas" },
          { title: "Domos", value: "Domos" },
          { title: "Interiores", value: "Interiores" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "images",
      title: "Fotos del proyecto",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "youtubeUrl",
      title: "Video en YouTube (opcional)",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Orden de aparición",
      type: "number",
      description: "Número menor = aparece primero en la galería",
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
    select: {
      title: "name",
      subtitle: "category",
      media: "images.0",
    },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle,
      media,
    }),
  },
});
