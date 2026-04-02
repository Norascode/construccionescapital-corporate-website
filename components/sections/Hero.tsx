export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-[#0f172a] relative overflow-hidden"
    >
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1e6fdb_0%,_transparent_70%)]" />
      </div>

      <div className="relative text-center px-6">
        <span className="inline-block text-[#1e6fdb] text-sm font-bold uppercase tracking-[0.3em] mb-6">
          — Sección 1 —
        </span>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
          HERO
        </h1>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Carrusel de imágenes · Eslogan · CTAs · Navbar transparente
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400">
            Framer Motion
          </span>
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400">
            Carrusel automático
          </span>
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400">
            Sanity CMS
          </span>
        </div>
      </div>
    </section>
  );
}
