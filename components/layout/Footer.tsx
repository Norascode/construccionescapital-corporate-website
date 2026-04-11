import Image from "next/image";
import Link from "next/link";

interface SiteSettings {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  whatsappSales?: string;
  city?: string;
  schedule?: string;
}

interface ContactInfo {
  address?: string;
  email?: string;
  mapAddress?: string;
}

interface FooterProps {
  siteSettings?: SiteSettings | null;
  contactInfo?: ContactInfo | null;
}

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer({ siteSettings, contactInfo }: FooterProps) {
  const instagramHref = siteSettings?.instagram || "#";
  const facebookHref = siteSettings?.facebook || "#";
  const youtubeHref = siteSettings?.youtube || "#";
  const phone = siteSettings?.whatsappSales || "573000000000";

  const addressLine1 = contactInfo?.address || siteSettings?.city || "Medellín, Antioquia — Colombia";
  const addressLine2 = undefined;

  const scheduleLines = siteSettings?.schedule
    ? [siteSettings.schedule]
    : ["Lun – Vie: 8:00 AM – 6:00 PM", "Sáb: 9:00 AM – 2:00 PM"];

  return (
    <footer className="bg-[#060a12] border-t border-white/10">
      {/* Columnas */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna 1: Logo + descripción */}
          <div className="flex flex-col gap-4">
            <Link href="/admin">
              <Image
                src="/images/logo.png"
                alt="Construcciones Capital"
                width={280}
                height={100}
                className="h-[80px] md:h-[120px] w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Especialistas en domos, techos, pérgolas, decks y fachadas en Medellín.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
              Navegación
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#60a5fa] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
              Contacto
            </h3>
            <ul className="flex flex-col gap-5">
              {/* Dirección */}
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 mt-0.5 shrink-0 text-[#60a5fa]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-400 text-sm">{addressLine1}</span>
                  {addressLine2 && (
                    <span className="text-slate-400 text-sm">{addressLine2}</span>
                  )}
                </div>
              </li>

              {/* Horario */}
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 mt-0.5 shrink-0 text-[#60a5fa]">
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
                <div className="flex flex-col gap-0.5">
                  {scheduleLines.map((line, i) => (
                    <span key={i} className="text-slate-400 text-sm">{line}</span>
                  ))}
                </div>
              </li>

              {/* WhatsApp */}
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-0.5 shrink-0 text-[#60a5fa]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a
                  href={`https://wa.me/${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#60a5fa] text-sm transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Mapa + Redes sociales */}
          <div>
            <iframe
              src={contactInfo?.mapAddress
                ? `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(contactInfo.mapAddress)}`
                : "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Medell%C3%ADn%2C+Antioquia%2C+Colombia"
              }
              width="100%"
              height="180"
              className="rounded-xl border border-white/10"
              style={{ filter: "invert(90%) hue-rotate(180deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Construcciones Capital — Laureles, Medellín"
            />
            <div className="mt-5">
              <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
                Síguenos
              </h3>
              <div className="flex gap-4">
                <a
                  href={instagramHref}
                  aria-label="Instagram"
                  target={instagramHref !== "#" ? "_blank" : undefined}
                  rel={instagramHref !== "#" ? "noopener noreferrer" : undefined}
                  className="text-slate-400 hover:text-[#1e6fdb] transition-colors duration-200"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={facebookHref}
                  aria-label="Facebook"
                  target={facebookHref !== "#" ? "_blank" : undefined}
                  rel={facebookHref !== "#" ? "noopener noreferrer" : undefined}
                  className="text-slate-400 hover:text-[#1e6fdb] transition-colors duration-200"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={youtubeHref}
                  aria-label="YouTube"
                  target={youtubeHref !== "#" ? "_blank" : undefined}
                  rel={youtubeHref !== "#" ? "noopener noreferrer" : undefined}
                  className="text-slate-400 hover:text-[#1e6fdb] transition-colors duration-200"
                >
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Construcciones Capital. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-xs">
            Desarrollado por{" "}
            <a
              href="https://www.linkedin.com/in/danielesban/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#60a5fa] transition-colors duration-200"
            >
              Daniel Quintero
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
