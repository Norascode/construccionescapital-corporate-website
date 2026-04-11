"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

type Category = "Todos" | "Techos" | "Pérgolas" | "Decks" | "Fachadas" | "Interiores";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<Category, "Todos">;
  project: string;
  youtubeUrl?: string;
}

interface SanityProject {
  _id: string;
  name: string;
  category: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: any[];
  youtubeUrl?: string;
}

interface GalleryProps {
  projects?: SanityProject[] | null;
}

const fallbackGalleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/pergola-02.jpg",
    alt: "Trabajadores instalando pérgola con cubierta de vidrio",
    category: "Pérgolas",
    project: "Pérgola con cubierta de vidrio y deck en madera",
  },
  {
    id: 2,
    src: "/images/techo-02.jpg",
    alt: "Estructura metálica geométrica para cubierta",
    category: "Pérgolas",
    project: "Pérgola con cubierta de vidrio y deck en madera",
  },
  {
    id: 3,
    src: "/images/pergola-04.jpg",
    alt: "Trabajador en escalera instalando techo",
    category: "Pérgolas",
    project: "Pérgola con cubierta de vidrio y deck en madera",
  },
  {
    id: 4,
    src: "/images/pergola-01.jpg",
    alt: "Pérgola iluminada de noche con paneles LED y piso de madera",
    category: "Pérgolas",
    project: "Pérgola con cubierta de vidrio y deck en madera",
  },
  {
    id: 5,
    src: "/images/deck-01.jpg",
    alt: "Deck de madera en construcción sobre estructura metálica",
    category: "Decks",
    project: "Deck en madera natural",
  },
  {
    id: 6,
    src: "/images/techo-01.jpg",
    alt: "Skylight de vidrio en cocina con luz natural y árboles",
    category: "Techos",
    project: "Skylight para cocina integral",
  },
  {
    id: 7,
    src: "/images/fachada-01.jpg",
    alt: "Restauración de fachada residencial",
    category: "Fachadas",
    project: "Restauración de fachada residencial",
  },
  {
    id: 8,
    src: "/images/fachada-02.jpg",
    alt: "Casa con fachada colonial renovada",
    category: "Fachadas",
    project: "Casa con fachada colonial",
  },
  { id: 9, src: "/images/pergola-03.jpg", alt: "Estructura de pérgola con jardín tropical", category: "Pérgolas", project: "Pérgola con cubierta de vidrio y deck en madera" },
  { id: 10, src: "/images/pergola-05.jpg", alt: "Estructura metálica con cableado eléctrico", category: "Pérgolas", project: "Pérgola con cubierta de vidrio y deck en madera" },
  { id: 11, src: "/images/techo-03.jpg", alt: "Trabajador estucando techo interior", category: "Techos", project: "Mantenimiento de techo interior" },
  { id: 12, src: "/images/techo-04.jpg", alt: "Proceso de reparación de techo en 6 pasos", category: "Techos", project: "Reparación de techo" },
  { id: 13, src: "/images/techo-05.jpg", alt: "Instalación de drywall en techo", category: "Techos", project: "Instalación de drywall" },
  { id: 14, src: "/images/deck-02.jpg", alt: "Trabajador clavando tablas de deck", category: "Decks", project: "Pérgola con cubierta de vidrio y deck en madera" },
  { id: 15, src: "/images/deck-03.jpg", alt: "Trabajadores terminando instalación de deck", category: "Decks", project: "Pérgola con cubierta de vidrio y deck en madera" },
  { id: 16, src: "/images/deck-04.jpg", alt: "Trabajadores preparando madera para deck", category: "Decks", project: "Pérgola con cubierta de vidrio y deck en madera" },
  { id: 17, src: "/images/deck-05.jpg", alt: "Base metálica para deck sobre gravilla", category: "Decks", project: "Pérgola con cubierta de vidrio y deck en madera" },
  { id: 18, src: "/images/fachada-03.jpg", alt: "Casa de ladrillo con fachada", category: "Fachadas", project: "Casa con fachada colonial" },
  { id: 19, src: "/images/techo-06.jpg", alt: "Trabajadores reparando cubierta exterior", category: "Techos", project: "Reparación de cubierta" },
  { id: 20, src: "/images/interior-01.jpg", alt: "Remodelación de cocina: antes y después", category: "Interiores", project: "Remodelación de cocina integral" },
  { id: 21, src: "/images/fachada-04.jpg", alt: "Reja ornamental en hierro forjado", category: "Fachadas", project: "Fachada con herrería ornamental" },
];

const categories: Category[] = ["Todos", "Techos", "Pérgolas", "Decks", "Fachadas", "Interiores"];

const VALID_CATEGORIES = new Set<string>(["Techos", "Pérgolas", "Decks", "Fachadas", "Interiores"]);

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

export default function Gallery({ projects: sanityProjects }: GalleryProps) {
  const galleryItems: GalleryItem[] =
    sanityProjects && sanityProjects.length > 0
      ? sanityProjects.flatMap((project, pi) => {
          const category = (VALID_CATEGORIES.has(project.category)
            ? project.category
            : "Techos") as Exclude<Category, "Todos">;
          const imageItems: GalleryItem[] = (project.images || []).map((img, ii) => ({
            id: pi * 1000 + ii,
            src: urlFor(img).url(),
            alt: project.name,
            category,
            project: project.name,
          }));
          if (project.youtubeUrl) {
            const videoId = getYouTubeId(project.youtubeUrl);
            if (videoId) {
              imageItems.push({
                id: pi * 1000 + 999,
                src: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
                alt: `${project.name} - Video`,
                category,
                project: project.name,
                youtubeUrl: project.youtubeUrl,
              });
            }
          }
          return imageItems;
        })
      : fallbackGalleryItems;

  const [activeFilter, setActiveFilter] = useState<Category>("Todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + filtered.length) % filtered.length : null
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Reset lightbox when filter changes
  useEffect(() => {
    setLightboxIndex(null);
  }, [activeFilter]);

  return (
    <>
      <section id="galeria" className="py-24 bg-[#0f172a] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="inline-block text-[#60a5fa] text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Nuestro Trabajo
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold uppercase text-white leading-tight">
              Proyectos Realizados
            </h2>
          </motion.div>

          {/* Filtros */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-[#1e6fdb] text-white shadow-lg shadow-[#1e6fdb]/30"
                    : "border border-white/20 text-slate-400 hover:border-[#1e6fdb]/50 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
                  className="break-inside-avoid mb-4 group relative cursor-pointer rounded-xl overflow-hidden"
                  onClick={() => setLightboxIndex(i)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Ícono de play para items de video */}
                  {item.youtubeUrl && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-colors duration-300">
                        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  {/* Overlay en hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                    <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white text-xs font-semibold uppercase tracking-wide">
                        {item.category}
                      </p>
                      <p className="text-slate-200 text-sm mt-0.5">{item.project}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
            onClick={closeLightbox}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeLightbox}
              aria-label="Cerrar"
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Botón anterior */}
            {filtered.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                aria-label="Anterior"
                className="absolute left-4 z-10 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Contenido: video o imagen */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[85vh] w-full mx-16 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {filtered[lightboxIndex].youtubeUrl ? (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(filtered[lightboxIndex].youtubeUrl!)}?autoplay=1&rel=0`}
                  title={filtered[lightboxIndex].alt}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full max-w-4xl aspect-video rounded-lg"
                />
              ) : (
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  width={1200}
                  height={900}
                  className="object-contain max-h-[85vh] w-auto rounded-lg shadow-2xl"
                  sizes="90vw"
                  priority
                />
              )}
            </motion.div>

            {/* Botón siguiente */}
            {filtered.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                aria-label="Siguiente"
                className="absolute right-4 z-10 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Contador */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 text-sm">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
