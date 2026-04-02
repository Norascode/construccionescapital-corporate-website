export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Construcciones Capital — Medellín, Colombia
        </p>
        <p className="text-slate-600 text-xs mt-1">
          Domos · Techos · Pérgolas · Decks · Fachadas
        </p>
      </div>
    </footer>
  );
}
