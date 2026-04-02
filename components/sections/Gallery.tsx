export default function Gallery() {
  return (
    <section
      id="galeria"
      className="min-h-screen flex items-center justify-center bg-[#0f172a] relative"
    >
      <div className="text-center px-6">
        <span className="inline-block text-[#1e6fdb] text-sm font-bold uppercase tracking-[0.3em] mb-6">
          — Sección 4 —
        </span>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
          GALERÍA
        </h2>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Grid masonry · Filtros por categoría · Lightbox · Stagger animation
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {["Todos", "Techos", "Pérgolas", "Decks", "Fachadas", "Domos"].map(
            (cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-[#1e6fdb]/10 border border-[#1e6fdb]/30 rounded-full text-xs text-[#38bdf8]"
              >
                {cat}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
