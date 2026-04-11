import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Construcciones Capital — Domos, Techos, Pérgolas y Decks en Medellín",
  description:
    "Especialistas en domos, techos, pérgolas, decks y fachadas en Medellín, Colombia. Transformamos espacios con precisión y diseño.",
  keywords: ["domos", "techos", "pérgolas", "decks", "fachadas", "Medellín", "construcciones"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
