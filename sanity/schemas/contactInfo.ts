import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactInfo",
  title: "Información de Contacto",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Título de la sección",
      type: "string",
      initialValue: "Contáctanos",
    }),
    defineField({
      name: "sectionSubtitle",
      title: "Subtítulo",
      type: "string",
      initialValue: "Estamos listos para transformar tu espacio. Escríbenos.",
    }),
    defineField({
      name: "address",
      title: "Dirección",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Correo electrónico",
      type: "string",
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "URL del mapa de Google Maps (embed)",
      type: "url",
      description: "URL del iframe de Google Maps para mostrar la ubicación",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Información de Contacto" }),
  },
});
