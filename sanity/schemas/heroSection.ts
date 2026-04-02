import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Sección Hero (Banner Principal)",
  type: "document",
  fields: [
    defineField({
      name: "slogan",
      title: "Eslogan principal",
      type: "string",
      initialValue: "TRANSFORMAMOS ESPACIOS CON PRECISIÓN Y DISEÑO",
    }),
    defineField({
      name: "subtitle",
      title: "Subtítulo",
      type: "string",
      initialValue:
        "Especialistas en domos, techos, pérgolas, decks y fachadas en Medellín.",
    }),
    defineField({
      name: "ctaText",
      title: "Texto botón principal",
      type: "string",
      initialValue: "Contáctanos por WhatsApp",
    }),
    defineField({
      name: "ctaSecondaryText",
      title: "Texto botón secundario",
      type: "string",
      initialValue: "Ver Proyectos",
    }),
    defineField({
      name: "slides",
      title: "Slides del carrusel",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Imagen",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "label",
              title: "Etiqueta del indicador",
              type: "string",
              description: "Ej: Pérgola residencial",
            }),
          ],
          preview: {
            select: { title: "label", media: "image" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Hero / Banner Principal" }),
  },
});
