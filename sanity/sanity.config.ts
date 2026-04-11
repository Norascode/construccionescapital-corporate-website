import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/admin",
  name: "construcciones-capital",
  title: "Construcciones Capital — CMS",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            S.listItem()
              .title("Configuración General")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.listItem()
              .title("Inicio (Banner Principal)")
              .id("heroSection")
              .child(
                S.document()
                  .schemaType("heroSection")
                  .documentId("heroSection")
              ),
            S.listItem()
              .title("Servicios")
              .id("services")
              .child(
                S.documentTypeList("service").title("Servicios")
              ),
            S.listItem()
              .title("Nosotros")
              .id("aboutSection")
              .child(
                S.document()
                  .schemaType("aboutSection")
                  .documentId("aboutSection")
              ),
            S.listItem()
              .title("Galería")
              .id("projects")
              .child(
                S.documentTypeList("project").title("Proyectos")
              ),
            S.listItem()
              .title("Contacto")
              .id("contactInfo")
              .child(
                S.document()
                  .schemaType("contactInfo")
                  .documentId("contactInfo")
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
