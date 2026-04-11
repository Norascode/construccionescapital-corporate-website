import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import {
  fetchSiteSettings,
  fetchHeroSection,
  fetchServices,
  fetchAboutSection,
  fetchProjects,
  fetchContactInfo,
} from "@/sanity/lib/fetch";

export default async function Home() {
  const [siteSettings, heroSection, services, aboutSection, projects, contactInfo] =
    await Promise.all([
      fetchSiteSettings(),
      fetchHeroSection(),
      fetchServices(),
      fetchAboutSection(),
      fetchProjects(),
      fetchContactInfo(),
    ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero
          slogan={heroSection?.slogan}
          subtitle={heroSection?.subtitle}
          ctaText={heroSection?.ctaText}
          ctaSecondaryText={heroSection?.ctaSecondaryText}
          slides={heroSection?.slides}
          phoneNumber={siteSettings?.whatsappSales}
        />
        <Services services={services} />
        <About aboutData={aboutSection} />
        <Gallery projects={projects} />
        <Contact contactInfo={contactInfo} siteSettings={siteSettings} />
      </main>
      <Footer siteSettings={siteSettings} contactInfo={contactInfo} />
      <WhatsAppButton phoneNumber={siteSettings?.whatsappSales} />
      <ScrollToTop />
    </>
  );
}
