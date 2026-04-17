"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

interface SanityDifferentiator {
  title: string;
  description: string;
}

interface AboutData {
  title?: string;
  description?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any;
  differentiators?: SanityDifferentiator[];
  mission?: string;
  vision?: string;
}

interface AboutProps {
  aboutData?: AboutData | null;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

export default function About({ aboutData }: AboutProps) {
  const imageSrc = aboutData?.image
    ? urlFor(aboutData.image).url()
    : "/images/pergola-04.jpg";

  const title = aboutData?.title || "Quiénes Somos";

  const description =
    aboutData?.description ||
    "En Construcciones Capital, somos un equipo especializado en la transformación de espacios arquitectónicos. Combinamos precisión técnica con visión estética para diseñar soluciones que optimizan la entrada de luz natural y garantizan la integridad estructural frente a los elementos. No solo instalamos o reparamos — diseñamos soluciones a medida para cada proyecto.";

  const differentiators =
    aboutData?.differentiators && aboutData.differentiators.length > 0
      ? aboutData.differentiators.map((d, i) => ({
          num: String(i + 1).padStart(2, "0"),
          title: d.title,
          description: d.description,
        }))
      : [];

  const mission =
    aboutData?.mission ||
    "Transformar ideas en realidad mediante el diseño y la construcción de techos y domos que desafían los límites convencionales, integrando soluciones arquitectónicas innovadoras y sostenibles para mejorar la calidad de vida de nuestros clientes.";

  const vision =
    aboutData?.vision ||
    "Convertirnos en el referente nacional de diseño y construcción de cubiertas y domos arquitectónicos, reconocidos por nuestra innovación, calidad excepcional y compromiso con la sostenibilidad.";

  return (
    <section id="nosotros" className="py-24 bg-[#16213e] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Bloque principal: imagen + texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
          >
            <Image
              src={imageSrc}
              alt="Trabajador instalando estructura de techo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16213e]/30 to-transparent" />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <span className="inline-block text-[#60a5fa] text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold uppercase text-white leading-tight mb-6">
              {title}
            </h2>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Diferenciadores */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={itemVariants}
              className="relative pl-6 border-l-2 border-[#1e6fdb]/50"
            >
              <span className="text-[#1e6fdb] text-3xl font-bold opacity-30 leading-none">
                {item.num}
              </span>
              <h3 className="text-white font-bold text-lg mt-1 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Misión y Visión */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-[#60a5fa] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Nuestra Misión
            </h3>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {mission}
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-[#60a5fa] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Nuestra Visión
            </h3>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {vision}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
