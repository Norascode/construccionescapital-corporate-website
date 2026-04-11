import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Sección Hero (Banner Principal)",
  type: "document",
  fields: [
    defineField({
      name: "sloganLine1",
      title: "Eslogan — Línea 1 (la más larga)",
      type: "string",
      initialValue: "TRANSFORMAMOS ESPACIOS",
      description: "Primera línea del eslogan. Recomendado: 2-3 palabras largas.",
    }),
    defineField({
      name: "sloganLine2",
      title: "Eslogan — Línea 2",
      type: "string",
      initialValue: "CON PRECISIÓN",
      description: "Segunda línea, más corta que la primera.",
    }),
    defineField({
      name: "sloganLine3",
      title: "Eslogan — Línea 3 (la más corta)",
      type: "string",
      initialValue: "Y DISEÑO",
      description: "Tercera línea, la más corta de las tres.",
    }),
    defineField({
      name: "subtitle",
      title: "Subtítulo",
      type: "string",
      initialValue:
        "Especialistas en domos, techos, pérgolas, decks y fachadas en Medellín.",
    }),
    defineField({
      name: "slides",
      title: "Slides del carrusel",
      type: "array",
      validation: (Rule) => Rule.min(3).error("El carrusel necesita mínimo 3 imágenes con sus descripciones"),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Imagen",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required().error("La imagen es obligatoria"),
            }),
            defineField({
              name: "label",
              title: "Etiqueta del indicador",
              type: "string",
              description: "Ej: Pérgola residencial",
              validation: (Rule) => Rule.required().error("La descripción es obligatoria"),
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
