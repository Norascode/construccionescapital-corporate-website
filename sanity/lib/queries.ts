import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    logo,
    whatsappSales,
    whatsappSupport,
    instagram,
    facebook,
    youtube,
    city,
    schedule
  }
`;

export const heroSectionQuery = groq`
  *[_type == "heroSection"][0] {
    slogan,
    subtitle,
    ctaText,
    ctaSecondaryText,
    slides[] {
      image,
      label
    }
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    name,
    description,
    image,
    order
  }
`;

export const aboutSectionQuery = groq`
  *[_type == "aboutSection"][0] {
    title,
    description,
    image,
    differentiators[] {
      title,
      description
    },
    mission,
    vision
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    name,
    location,
    category,
    images,
    youtubeUrl,
    order
  }
`;

export const contactInfoQuery = groq`
  *[_type == "contactInfo"][0] {
    sectionTitle,
    sectionSubtitle,
    address,
    email,
    mapAddress
  }
`;
