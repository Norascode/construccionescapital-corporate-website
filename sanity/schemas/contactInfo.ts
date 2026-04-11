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
      name: "mapAddress",
      title: "Dirección para el mapa",
      type: "string",
      description: "Escribe la dirección completa. El mapa se generará automáticamente. Ejemplo: Calle 10 #43-12, Laureles, Medellín",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Información de Contacto" }),
  },
});
