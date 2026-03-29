"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function PortfolioFooter({ data }) {
  const year = new Date().getFullYear();
  if (!data) return null;
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6 bg-[#000000]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/30">© {year} <span className="text-white/60 font-semibold">{data.name || "Portfolio"}</span></p>
        <div className="flex items-center gap-5">
          {data?.github && <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-red-400 transition-colors"><FaGithub className="w-4 h-4" /></a>}
          {data?.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-red-400 transition-colors"><FaLinkedin className="w-4 h-4" /></a>}
          {data?.email && <a href={`mailto:${data.email}`} className="text-white/30 hover:text-red-400 transition-colors"><FaEnvelope className="w-4 h-4" /></a>}
        </div>
        <p className="text-xs text-white/20">Built with <span className="text-red-400/70">Salience</span></p>
      </div>
    </footer>
  );
}
