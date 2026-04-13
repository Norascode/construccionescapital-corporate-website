import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.construccionescapital.com"),
  title: "Construcciones Capital — Domos, Techos, Pérgolas y Decks en Medellín",
  description:
    "Especialistas en domos, techos, pérgolas, decks y fachadas en Medellín, Colombia. Transformamos espacios con precisión y diseño.",
  keywords: ["domos", "techos", "pérgolas", "decks", "fachadas", "Medellín", "construcciones"],
  verification: {
    google: "g9WGWQ5BkiIKmPzJxkh0ewAD50_c96J9gmKIWQ1jrxA",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Construcciones Capital — Domos, Techos, Pérgolas y Decks en Medellín",
    description:
      "Especialistas en domos, techos, pérgolas, decks y fachadas en Medellín, Colombia. Transformamos espacios con precisión y diseño.",
    url: "https://www.construccionescapital.com",
    siteName: "Construcciones Capital",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/images/pergola-01.jpg",
        width: 1200,
        height: 630,
        alt: "Construcciones Capital — Pérgolas, domos y techos en Medellín",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construcciones Capital — Domos, Techos, Pérgolas y Decks en Medellín",
    description:
      "Especialistas en domos, techos, pérgolas, decks y fachadas en Medellín, Colombia.",
    images: ["/images/pergola-01.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={montserrat.variable}
    >
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
