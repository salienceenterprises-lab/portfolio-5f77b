"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function PortfolioFooter({ data }) {
  const year = new Date().getFullYear();
  if (!data) return null;

  return (
    <footer className="relative py-10 px-6 border-t"
      style={{ background: "#000000", borderColor: "rgba(0,230,118,0.08)" }}>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-black text-sm uppercase tracking-tight text-white">
            <span style={{ color: "#00e676" }}>›</span> {data.name || "Portfolio"}
          </span>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            &copy; {year} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {data?.github && (
            <a href={data.github} target="_blank" rel="noopener noreferrer"
              className="transition-colors" style={{ color: "rgba(255,255,255,0.25)" }}
              aria-label="GitHub"
              onMouseEnter={(e) => e.currentTarget.style.color = "#00e676"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}>
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {data?.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer"
              className="transition-colors" style={{ color: "rgba(255,255,255,0.25)" }}
              aria-label="LinkedIn"
              onMouseEnter={(e) => e.currentTarget.style.color = "#00e676"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}>
              <FaLinkedin className="w-5 h-5" />
            </a>
          )}
          {data?.email && (
            <a href={`mailto:${data.email}`}
              className="transition-colors" style={{ color: "rgba(255,255,255,0.25)" }}
              aria-label="Email"
              onMouseEnter={(e) => e.currentTarget.style.color = "#00e676"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}>
              <FaEnvelope className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
          Built with <span className="font-bold" style={{ color: "rgba(0,230,118,0.5)" }}>Salience</span>
        </p>
      </div>
    </footer>
  );
}
