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
      : [];

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

          {/* Galería vacía */}
          {filtered.length === 0 && (
            <p className="text-slate-400 text-center py-20">No hay proyectos en esta categoría.</p>
          )}

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
