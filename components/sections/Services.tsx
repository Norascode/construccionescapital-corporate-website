export default function Services() {
  return (
    <section
      id="servicios"
      className="min-h-screen flex items-center justify-center bg-[#1a1a2e] relative"
    >
      <div className="text-center px-6">
        <span className="inline-block text-[#1e6fdb] text-sm font-bold uppercase tracking-[0.3em] mb-6">
          — Sección 2 —
        </span>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
          SERVICIOS
        </h2>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Cards con imagen · Nombre · Descripción · Animación stagger
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {["Domos", "Techos", "Pérgolas", "Decks", "Fachadas"].map((s) => (
            <span
              key={s}
              className="px-4 py-2 bg-[#1e6fdb]/10 border border-[#1e6fdb]/30 rounded-full text-xs text-[#38bdf8]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
