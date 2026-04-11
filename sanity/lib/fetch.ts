import { client } from "./client";
import {
  siteSettingsQuery,
  heroSectionQuery,
  servicesQuery,
  aboutSectionQuery,
  projectsQuery,
  contactInfoQuery,
} from "./queries";

export async function fetchSiteSettings() {
  try {
    return await client.fetch(siteSettingsQuery);
  } catch {
    return null;
  }
}

export async function fetchHeroSection() {
  try {
    return await client.fetch(heroSectionQuery);
  } catch {
    return null;
  }
}

export async function fetchServices() {
  try {
    return await client.fetch(servicesQuery);
  } catch {
    return null;
  }
}

export async function fetchAboutSection() {
  try {
    return await client.fetch(aboutSectionQuery);
  } catch {
    return null;
  }
}

export async function fetchProjects() {
  try {
    return await client.fetch(projectsQuery);
  } catch {
    return null;
  }
}

export async function fetchContactInfo() {
  try {
    return await client.fetch(contactInfoQuery);
  } catch {
    return null;
  }
}
