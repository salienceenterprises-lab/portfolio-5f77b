"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function PortfolioFooter({ data }) {
  const year = new Date().getFullYear();
  if (!data) return null;

  const socials = [
    { show: data?.github,   icon: FaGithub,   href: data?.github,             label: "GitHub"   },
    { show: data?.linkedin, icon: FaLinkedin,  href: data?.linkedin,           label: "LinkedIn" },
    { show: data?.email,    icon: FaEnvelope,  href: `mailto:${data?.email}`,  label: "Email"    },
  ].filter(s => s.show);

  return (
    <footer className="relative bg-[#020b16] border-t border-white/[0.05] py-10 px-6 overflow-hidden">
      {/* Top fade line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-cyan-400/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Name & brand */}
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            />
            <p className="text-sm text-white/40">
              © {year}{" "}
              <span className="text-white/70 font-bold">{data.name || "Portfolio"}</span>
            </p>
          </div>

          {/* Social icons */}
          {socials.length > 0 && (
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.2, color: "#22d3ee" }}
                  className="text-white/25 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          )}

          {/* Credit */}
          <p className="text-[11px] text-white/15 tracking-widest">
            Built with{" "}
            <span className="text-cyan-500/50 font-semibold">Salience</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
