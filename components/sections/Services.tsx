"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    name: "Domos y Techos en Vidrio",
    description:
      "Diseño y montaje de cubiertas en vidrio templado y policarbonato sobre estructura metálica. Soluciones que optimizan la entrada de luz natural y garantizan integridad estructural.",
    image: "/images/1000537699.jpg",
    alt: "Skylight de vidrio en cocina con luz natural",
  },
  {
    id: 2,
    name: "Pérgolas y Estructuras de Exterior",
    description:
      "Construcción de pérgolas con estructura metálica y cubierta de vidrio, integradas al diseño arquitectónico de tu espacio exterior.",
    image: "/images/1000537698.jpg",
    alt: "Pérgola iluminada de noche con paneles LED",
  },
  {
    id: 3,
    name: "Decks en Madera",
    description:
      "Instalación de pisos en madera natural sobre estructura metálica para terrazas, jardines y espacios exteriores.",
    image: "/images/IMG-20260326-WA0101.jpg",
    alt: "Deck de madera en construcción",
  },
  {
    id: 4,
    name: "Fachadas y Mantenimiento Exterior",
    description:
      "Restauración integral de fachadas residenciales y corporativas. Mantenimiento avanzado de exteriores para la valorización de tu inmueble.",
    image: "/images/1000537830.jpg",
    alt: "Fachada antes y después de restauración",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#1a1a2e] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-block text-[#60a5fa] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Lo que hacemos
          </h2>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden bg-[#0f172a] border border-white/5 hover:border-[#1e6fdb]/40 transition-all duration-400 shadow-lg hover:shadow-[#1e6fdb]/10 hover:shadow-xl"
            >
              {/* Imagen */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#60a5fa] transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
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
