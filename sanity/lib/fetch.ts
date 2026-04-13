import { clientNoCdn } from "./client";
import {
  siteSettingsQuery,
  heroSectionQuery,
  servicesQuery,
  aboutSectionQuery,
  projectsQuery,
  contactInfoQuery,
} from "./queries";

// Todas las funciones de fetch usan clientNoCdn para que los datos
// se actualicen al instante después de una revalidación desde Sanity.
// El caché de Next.js (revalidate en page.tsx) sigue controlando
// cuándo se regenera la página, así que no hay impacto en rendimiento
// para los visitantes normales.

export async function fetchSiteSettings() {
  try {
    return await clientNoCdn.fetch(siteSettingsQuery);
  } catch {
    return null;
  }
}

export async function fetchHeroSection() {
  try {
    return await clientNoCdn.fetch(heroSectionQuery);
  } catch {
    return null;
  }
}

export async function fetchServices() {
  try {
    return await clientNoCdn.fetch(servicesQuery);
  } catch {
    return null;
  }
}

export async function fetchAboutSection() {
  try {
    return await clientNoCdn.fetch(aboutSectionQuery);
  } catch {
    return null;
  }
}

export async function fetchProjects() {
  try {
    return await clientNoCdn.fetch(projectsQuery);
  } catch {
    return null;
  }
}

export async function fetchContactInfo() {
  try {
    return await clientNoCdn.fetch(contactInfoQuery);
  } catch {
    return null;
  }
}
