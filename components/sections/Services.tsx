"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

interface SanityService {
  _id: string;
  name: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  order: number;
}

interface ServicesProps {
  services?: SanityService[] | null;
}

const fallbackServices = [
  {
    id: 1,
    name: "Domos y Techos en Vidrio",
    description:
      "Diseño y montaje de cubiertas en vidrio templado y policarbonato sobre estructura metálica. Soluciones que optimizan la entrada de luz natural y garantizan integridad estructural.",
    image: "/images/techo-01.jpg",
    alt: "Skylight de vidrio en cocina con luz natural",
  },
  {
    id: 2,
    name: "Pérgolas y Estructuras de Exterior",
    description:
      "Construcción de pérgolas con estructura metálica y cubierta de vidrio, integradas al diseño arquitectónico de tu espacio exterior.",
    image: "/images/pergola-01.jpg",
    alt: "Pérgola iluminada de noche con paneles LED",
  },
  {
    id: 3,
    name: "Decks en Madera",
    description:
      "Instalación de pisos en madera natural sobre estructura metálica para terrazas, jardines y espacios exteriores.",
    image: "/images/deck-01.jpg",
    alt: "Deck de madera en construcción",
  },
  {
    id: 4,
    name: "Fachadas y Mantenimiento Exterior",
    description:
      "Restauración integral de fachadas residenciales y corporativas. Mantenimiento avanzado de exteriores para la valorización de tu inmueble.",
    image: "/images/fachada-01.jpg",
    alt: "Fachada antes y después de restauración",
  },
];

export default function Services({ services: sanityServices }: ServicesProps) {
  const items =
    sanityServices && sanityServices.length > 0
      ? sanityServices.map((s, i) => ({
          id: i + 1,
          name: s.name,
          description: s.description,
          image: urlFor(s.image).url(),
          alt: s.name,
        }))
      : fallbackServices;

  return (
    <section id="servicios" className="py-24 bg-[#141820] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block text-[#60a5fa] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold uppercase text-white leading-tight">
            Lo que hacemos
          </h2>
        </motion.div>

        {/* Layout alternado */}
        <div className="flex flex-col gap-16 lg:gap-20">
          {items.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Foto */}
              <div className="group w-full lg:w-[55%] relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-black/30">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>

              {/* Texto */}
              <div className="w-full lg:w-[45%]">
                <span className="inline-block text-[#1e6fdb] text-xs font-bold uppercase tracking-[0.25em] mb-3 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                  {service.name}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
