"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function PortfolioFooter({ data }) {
  const year = new Date().getFullYear();
  if (!data) return null;

  const socials = [
    { show: data?.github,   icon: FaGithub,   href: data?.github,            label: "GitHub"   },
    { show: data?.linkedin, icon: FaLinkedin,  href: data?.linkedin,          label: "LinkedIn" },
    { show: data?.email,    icon: FaEnvelope,  href: `mailto:${data?.email}`, label: "Email"    },
  ].filter((s) => s.show);

  return (
    <footer className="relative bg-[#050505] border-t border-blue-500/[0.08] py-10 px-6 overflow-hidden">

      {/* Top gradient rule */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6 border border-blue-500/40 flex items-center justify-center">
              <span className="text-[9px] font-black text-blue-400/70">
                {data.name?.split(" ").map((w) => w[0]).join("").slice(0, 2) || "BB"}
              </span>
              <span className="absolute top-0 left-0 w-1.5 h-px bg-blue-500/50" />
              <span className="absolute top-0 left-0 h-1.5 w-px bg-blue-500/50" />
            </div>
            <p className="text-sm text-white/30">
              © {year}{" "}
              <span className="text-white/60 font-black uppercase tracking-wide">{data.name || "Portfolio"}</span>
            </p>
          </div>

          {/* Social icons */}
          {socials.length > 0 && (
            <div className="flex items-center gap-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.2, color: "#60a5fa" }}
                  className="text-white/20 hover:text-blue-400 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          )}

          {/* Credit */}
          <p className="text-[10px] text-white/15 font-bold uppercase tracking-[0.3em]">
            Built with{" "}
            <span className="text-blue-500/50">Salience</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
