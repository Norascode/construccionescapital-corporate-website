"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "/images/1000537698.jpg",
    alt: "Pérgola iluminada de noche con paneles LED y piso de madera",
    num: "01",
    label: "Pérgola residencial",
  },
  {
    src: "/images/1000537699.jpg",
    alt: "Skylight de vidrio en cocina con luz natural y árboles",
    num: "02",
    label: "Skylight cocina integral",
  },
  {
    src: "/images/IMG-20260326-WA0106.jpg",
    alt: "Estructura metálica geométrica contra cielo azul",
    num: "03",
    label: "Cubierta en vidrio templado",
  },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const scrollToGallery = () => {
    const el = document.querySelector("#galeria");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
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
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Gradiente lateral izquierdo para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight tracking-tight"
          >
            Transformamos espacios con precisión y diseño
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
            className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Especialistas en domos, techos, pérgolas, decks y fachadas en Medellín.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fbe59] text-white font-bold px-6 py-3 rounded-full transition-colors duration-200 text-sm uppercase tracking-wide shadow-lg"
            >
              <WhatsAppIcon />
              Contáctanos por WhatsApp
            </a>
            <button
              onClick={scrollToGallery}
              className="inline-flex items-center gap-2 border-2 border-[#1e6fdb] text-white hover:bg-[#1e6fdb]/20 font-bold px-6 py-3 rounded-full transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Ver Proyectos
            </button>
          </motion.div>
        </div>
      </div>

      {/* Indicadores de slide — parte inferior */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                  className={`text-xs font-bold tabular-nums transition-colors duration-300 ${
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
                  className={`hidden sm:block text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
                    i === currentIndex ? "text-white" : "text-slate-400"
                  }`}
                >
                  {slide.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
