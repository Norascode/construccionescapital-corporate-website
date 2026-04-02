export default function About() {
  return (
    <section
      id="nosotros"
      className="min-h-screen flex items-center justify-center bg-[#16213e] relative"
    >
      <div className="text-center px-6">
        <span className="inline-block text-[#1e6fdb] text-sm font-bold uppercase tracking-[0.3em] mb-6">
          — Sección 3 —
        </span>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
          NOSOTROS
        </h2>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Imagen + texto · Diferenciadores · Misión y Visión
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400">
            Layout imagen + texto
          </span>
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400">
            Tipografía serif
          </span>
        </div>
      </div>
    </section>
  );
}
