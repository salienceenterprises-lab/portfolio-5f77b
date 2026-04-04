"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function PortfolioFooter({ data }) {
  const year = new Date().getFullYear();
  if (!data) return null;

  return (
    <footer className="relative py-10 px-6" style={{ background: "#0a000d", borderTop: "1px solid rgba(224,64,251,0.1)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-black text-sm uppercase tracking-tight text-white">
            {data.name || "Portfolio"}
            <span style={{ color: "#e040fb" }}>_</span>
          </span>
          <p className="text-xs font-medium text-white/20">&copy; {year} All rights reserved.</p>
        </div>

        <div className="flex items-center gap-5">
          {data?.github && (
            <a href={data.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="text-white/25 transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}>
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {data?.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-white/25 transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e040fb")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}>
              <FaLinkedin className="w-5 h-5" />
            </a>
          )}
          {data?.email && (
            <a href={`mailto:${data.email}`} aria-label="Email"
              className="text-white/25 transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffea00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}>
              <FaEnvelope className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="text-xs text-white/20">
          Built with <span className="font-black" style={{ color: "rgba(224,64,251,0.6)" }}>Salience</span>
        </p>
      </div>
    </footer>
  );
}
