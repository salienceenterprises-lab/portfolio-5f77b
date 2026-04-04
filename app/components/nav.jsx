"use client";
import { useState } from "react";
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
    { label: "About",     href: "#about",      key: "about"      },
    { label: "Education", href: "#education",  key: "education"  },
    { label: "Exp",       href: "#experience", key: "experience" },
    { label: "Projects",  href: "#projects",   key: "projects"   },
    { label: "Skills",    href: "#skills",     key: "skills"     },
    { label: "Impact",    href: "#community",  key: "community"  },
    { label: "Contact",   href: "#contact",    key: "email"      },
  ];

  const activeLinks = allNavLinks.filter(
    (l) => l.key === "about" || (Array.isArray(data?.[l.key]) ? data[l.key].length > 0 : !!data?.[l.key])
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    setPastHero(latest > window.innerHeight * 0.8);
    const sectionIds = ["hero", ...activeLinks.map((l) => l.href.replace("#", ""))];
    const sorted = sectionIds
      .map((id) => ({ id, top: document.getElementById(id)?.offsetTop ?? Infinity }))
      .filter((s) => s.top !== Infinity)
      .sort((a, b) => a.top - b.top);
    for (let i = sorted.length - 1; i >= 0; i--) {
      if (latest >= sorted[i].top - 130) { setActiveSection(sorted[i].id); break; }
    }
  });

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled
        ? { background: "rgba(13,0,16,0.96)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(224,64,251,0.12)" }
        : { background: "transparent" }}>

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}
          className="font-black text-sm uppercase tracking-tight text-white hover:opacity-70 transition-opacity">
          {data.name || "Portfolio"}
          <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
            style={{ color: "#e040fb" }}>_</motion.span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {activeLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-4 py-2 text-[10px] font-black tracking-widest uppercase transition-colors duration-200"
                style={{ color: isActive ? "#e040fb" : "rgba(255,255,255,0.3)" }}>
                {isActive && (
                  <motion.div layoutId="cv-indicator"
                    className="absolute bottom-0 left-1 right-1 h-0.5"
                    style={{ background: "linear-gradient(90deg, #e040fb, #ffea00)" }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }} />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}

          <AnimatePresence>
            {pastHero && data?.resumeBase64 && (
              <motion.a href={`data:application/pdf;base64,${data.resumeBase64}`}
                download={`${data.name || "Resume"}.pdf`}
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
                className="ml-3 flex items-center gap-1.5 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-black hover:opacity-85 transition-opacity"
                style={{ background: "#e040fb" }}>
                <FaDownload className="w-3 h-3" /> Resume
              </motion.a>
            )}
          </AnimatePresence>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white/50 hover:text-white transition-colors p-1">
          {mobileOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden px-6 pb-6 pt-2"
            style={{ background: "rgba(13,0,16,0.98)", borderBottom: "1px solid rgba(224,64,251,0.12)" }}>
            {activeLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 text-sm font-black uppercase tracking-widest border-b last:border-0 transition-colors"
                style={{
                  color: activeSection === link.href.replace("#", "") ? "#e040fb" : "rgba(255,255,255,0.35)",
                  borderColor: "rgba(224,64,251,0.08)"
                }}>
                {link.label}
              </a>
            ))}
            {data?.resumeBase64 && (
              <a href={`data:application/pdf;base64,${data.resumeBase64}`}
                download={`${data.name || "Resume"}.pdf`}
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-black uppercase tracking-wider text-black"
                style={{ background: "#e040fb" }}>
                <FaDownload className="w-3.5 h-3.5" /> Resume
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
