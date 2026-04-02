import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Configuración del Sitio",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Nombre del sitio",
      type: "string",
      initialValue: "Construcciones Capital",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "whatsappSales",
      title: "WhatsApp Ventas (Nora)",
      type: "string",
      description: "Formato internacional: 573001234567",
    }),
    defineField({
      name: "whatsappSupport",
      title: "WhatsApp Soporte Técnico",
      type: "string",
      description: "Formato internacional: 573001234567",
    }),
    defineField({
      name: "instagram",
      title: "Link de Instagram",
      type: "url",
    }),
    defineField({
      name: "facebook",
      title: "Link de Facebook",
      type: "url",
    }),
    defineField({
      name: "youtube",
      title: "Link de YouTube",
      type: "url",
    }),
    defineField({
      name: "city",
      title: "Ciudad",
      type: "string",
      initialValue: "Medellín, Antioquia — Colombia",
    }),
    defineField({
      name: "schedule",
      title: "Horario de atención",
      type: "string",
      description: "Ej: Lunes a Viernes 8am - 6pm | Sábados 8am - 12pm",
    }),
  ],
  preview: {
    select: { title: "siteName" },
  },
});
