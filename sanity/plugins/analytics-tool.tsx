import { definePlugin } from "sanity";
import { BarChartIcon } from "@sanity/icons";

function AnalyticsPane() {
  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        gap: "1.5rem",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          background: "#1a1a2e",
          borderRadius: "16px",
          padding: "3rem",
          textAlign: "center",
          maxWidth: "480px",
          width: "100%",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
          }}
        >
          📊
        </div>
        <h2
          style={{
            color: "#f1f5f9",
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}
        >
          Estadísticas del Sitio
        </h2>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          Visualiza las visitas, países, páginas más vistas y más desde el panel
          de Vercel Analytics.
        </p>
        <a
          href="https://vercel.com/proyectosnoracc-projects/construccionescapital-corporate-website/analytics"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#1e6fdb",
            color: "white",
            fontWeight: 600,
            fontSize: "1rem",
            padding: "0.85rem 2rem",
            borderRadius: "9999px",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.background = "#1a5fbd")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.background = "#1e6fdb")
          }
        >
          Ver Estadísticas ↗
        </a>
      </div>
    </div>
  );
}

export const analyticsToolPlugin = definePlugin({
  name: "analytics-tool",
  tools: [
    {
      name: "analytics",
      title: "Estadísticas",
      icon: BarChartIcon,
      component: AnalyticsPane,
    },
  ],
});
