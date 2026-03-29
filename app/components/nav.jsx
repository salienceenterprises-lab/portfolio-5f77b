"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

export default function PortfolioNav({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();

  if (!data) return null;

  const allNavLinks = [
    { label: "About",    href: "#about",      key: "about"      },
    { label: "Exp",      href: "#experience", key: "experience" },
    { label: "Projects", href: "#projects",   key: "projects"   },
    { label: "Skills",   href: "#skills",     key: "skills"     },
    { label: "Education",href: "#education",  key: "education"  },
    { label: "Impact",   href: "#community",  key: "community"  },
    { label: "Contact",  href: "#contact",    key: "email"      },
  ];

  const activeLinks = allNavLinks.filter(
    (l) => l.key === "about" || (Array.isArray(data?.[l.key]) ? data[l.key].length > 0 : !!data?.[l.key])
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    setPastHero(latest > window.innerHeight * 0.8);
    const sectionIds = ["hero", ...activeLinks.map((l) => l.href.replace("#", ""))];
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && latest >= el.offsetTop - 130) {
        setActiveSection(sectionIds[i]);
        break;
      }
    }
  });

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: "smooth" });
  };

  const initials = data.name?.split(" ").map((w) => w[0]).join("").slice(0, 2) || "B";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-blue-500/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, "#hero")}
          className="flex items-center gap-2 group"
        >
          <div className="relative w-8 h-8 border border-blue-500/40 flex items-center justify-center group-hover:border-blue-400/80 transition-colors duration-300">
            <span className="text-xs font-black text-blue-400 tracking-tighter group-hover:text-blue-300 transition-colors">{initials}</span>
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-1.5 h-px bg-blue-400" />
            <span className="absolute top-0 left-0 h-1.5 w-px bg-blue-400" />
            <span className="absolute bottom-0 right-0 w-1.5 h-px bg-blue-400" />
            <span className="absolute bottom-0 right-0 h-1.5 w-px bg-blue-400" />
          </div>
          <span className="text-sm font-bold text-white/70 tracking-tight hidden sm:block">
            {data.name?.split(" ")[0]}<span className="text-blue-400">_</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {activeLinks.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className="relative text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-300 py-1"
                style={{ color: isActive ? "rgba(96,165,250,1)" : "rgba(255,255,255,0.35)" }}
              >
                {l.label}
                {isActive && (
                  <motion.div
                    layoutId="bb-nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          <AnimatePresence>
            {pastHero && data?.resumeBase64 && (
              <motion.a
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.25 }}
                href={`data:application/pdf;base64,${data.resumeBase64}`}
                download={`${data.name || "Resume"}.pdf`}
                className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black rounded-sm uppercase tracking-[0.2em] transition-all shadow-lg shadow-blue-600/20"
              >
                <FaDownload className="w-2.5 h-2.5" /> Resume
              </motion.a>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/50 hover:text-blue-400 transition-colors"
        >
          {mobileOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505]/97 backdrop-blur-xl border-b border-blue-500/10 px-6 pb-6 pt-3 overflow-hidden"
          >
            {activeLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className="block py-3 text-xs font-black uppercase tracking-[0.25em] text-white/40 hover:text-blue-400 transition-colors border-b border-white/[0.04] last:border-0"
              >
                {l.label}
              </a>
            ))}
            {data?.resumeBase64 && (
              <a
                href={`data:application/pdf;base64,${data.resumeBase64}`}
                download={`${data.name || "Resume"}.pdf`}
                className="flex items-center gap-2 mt-5 text-xs font-black uppercase tracking-[0.2em] text-blue-400"
              >
                <FaDownload className="w-3.5 h-3.5" /> Download Resume
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
