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
      : [];

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
