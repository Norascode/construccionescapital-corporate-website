"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

interface SanitySlide {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  label: string;
}

interface HeroProps {
  slogan?: string;
  subtitle?: string;
  ctaText?: string;
  ctaSecondaryText?: string;
  slides?: SanitySlide[];
  phoneNumber?: string;
  logo?: any;
}

const fallbackSlides = [
  {
    src: "/images/pergola-01.jpg",
    alt: "Pérgola iluminada de noche con paneles LED y piso de madera",
    num: "01",
    label: "Pérgola residencial",
    objectPosition: "center 15%",
  },
  {
    src: "/images/techo-01.jpg",
    alt: "Skylight de vidrio en cocina con luz natural y árboles",
    num: "02",
    label: "Skylight cocina integral",
    objectPosition: "center top",
  },
  {
    src: "/images/techo-02.jpg",
    alt: "Estructura metálica geométrica contra cielo azul",
    num: "03",
    label: "Cubierta en vidrio templado",
    objectPosition: "center top",
  },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Hero({
  slogan,
  subtitle,
  ctaText,
  ctaSecondaryText,
  slides: sanitySlides,
  phoneNumber,
  logo,
}: HeroProps) {
  const slides =
    sanitySlides && sanitySlides.length >= 1
      ? sanitySlides.map((slide, i) => ({
          src: urlFor(slide.image).url(),
          alt: slide.label,
          num: String(i + 1).padStart(2, "0"),
          label: slide.label,
          objectPosition: "center center",
        }))
      : fallbackSlides;

  const displaySlogan = slogan || "Transformamos espacios con precisión y diseño";
  const displaySubtitle =
    subtitle || "Especialistas en domos, techos, pérgolas, decks y fachadas en Medellín.";
  const displayCtaText = ctaText || "Contáctanos por WhatsApp";
  const displayCtaSecondary = ctaSecondaryText || "Ver Proyectos";
  const displayPhone = phoneNumber || "573000000000";
  const logoSrc = logo ? urlFor(logo).width(560).url() : "/images/logo.png";

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToGallery = () => {
    const el = document.querySelector("#galeria");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[600px] flex flex-col overflow-hidden"
    >
      {/* Carrusel de fondo */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              fill
              className="object-cover"
              style={{ objectPosition: slides[currentIndex].objectPosition }}
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlay oscuro uniforme */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Gradiente lateral izquierdo para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        {/* Gradiente inferior para legibilidad de indicadores */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/55 to-transparent" />
      </div>

      {/* Logo — parte superior, mismo padding que todo el contenido */}
      <div className="relative z-20 pt-3 -mt-1 px-8 md:px-16 lg:px-24">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#inicio")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Image
            src={logoSrc}
            alt="Construcciones Capital"
            width={280}
            height={100}
            className="h-[80px] md:h-[160px] w-auto object-contain"
            priority
          />
        </a>
      </div>

      {/* Contenido principal — centrado verticalmente en el espacio restante */}
      <div className="relative z-10 flex-1 flex items-start pt-4 md:pt-6 px-8 md:px-16 lg:px-24">
        <div className="max-w-[95%] sm:max-w-[90%] lg:max-w-[85%]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-sans font-semibold uppercase text-white leading-[1.05] tracking-[0.02em]"
            style={{ fontSize: "clamp(2.2rem, 4.2vw, 5rem)" }}
          >
            {slogan ? (
              <span className="block">{displaySlogan}</span>
            ) : (
              <>
                <span className="block whitespace-nowrap">Transformamos espacios</span>
                <span className="block">con precisión</span>
                <span className="block">y diseño</span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
            className="mt-4 text-base sm:text-lg text-white font-medium leading-relaxed"
          >
            {displaySubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={`https://wa.me/${displayPhone}?text=${encodeURIComponent("Hola, me gustaría obtener información sobre sus servicios.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fbe59] text-white font-bold px-7 py-3.5 rounded-full transition-colors duration-200 text-base uppercase tracking-wide shadow-lg"
            >
              <WhatsAppIcon />
              {displayCtaText}
            </a>
            <button
              onClick={scrollToGallery}
              className="inline-flex items-center gap-2 border-2 border-[#1e6fdb] text-white hover:bg-[#1e6fdb]/20 font-bold px-7 py-3.5 rounded-full transition-colors duration-200 text-base uppercase tracking-wide"
            >
              {displayCtaSecondary}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Indicadores de slide — parte inferior, mismo padding */}
      <div className="relative z-10 pb-8 px-8 md:px-16 lg:px-24">
        <div className="flex gap-6 sm:gap-10">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`flex items-center gap-3 group transition-all duration-300 ${
                i === currentIndex ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
            >
              <span
                className={`text-sm font-bold tabular-nums transition-colors duration-300 ${
                  i === currentIndex ? "text-[#60a5fa]" : "text-white"
                }`}
              >
                {slide.num}
              </span>
              <span
                className={`hidden sm:block h-px w-6 transition-all duration-300 ${
                  i === currentIndex ? "bg-[#60a5fa] w-10" : "bg-white/50"
                }`}
              />
              <span
                className={`hidden sm:block text-base font-medium uppercase tracking-wide transition-colors duration-300 ${
                  i === currentIndex ? "text-white" : "text-slate-400"
                }`}
              >
                {slide.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
