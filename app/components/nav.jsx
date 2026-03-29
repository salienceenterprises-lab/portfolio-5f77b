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
    { label: "About",    href: "#about",      key: "about"      },
    { label: "Education",href: "#education",  key: "education"  },
    { label: "Exp",      href: "#experience", key: "experience" },
    { label: "Projects", href: "#projects",   key: "projects"   },
    { label: "Skills",   href: "#skills",     key: "skills"     },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl border-b" : "bg-transparent"
      }`}
      style={scrolled ? { background: "rgba(2,11,4,0.92)", borderColor: "rgba(0,230,118,0.08)" } : {}}>

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2 text-white font-black tracking-tight text-sm uppercase hover:opacity-80 transition-opacity">
          <span className="font-black" style={{ color: "#00e676" }}>›</span>
          {data.name || "Portfolio"}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {activeLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-4 py-2 text-[10px] font-black tracking-widest uppercase transition-colors duration-300"
                style={{ color: isActive ? "#00e676" : "rgba(255,255,255,0.35)" }}>
                {isActive && (
                  <motion.div layoutId="bg-nav-pill"
                    className="absolute inset-0 rounded"
                    style={{ background: "rgba(0,230,118,0.08)", border: "1px solid rgba(0,230,118,0.2)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }} />
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
                transition={{ duration: 0.25 }}
                className="ml-3 flex items-center gap-1.5 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-[#020b04] transition-all hover:opacity-85"
                style={{ background: "#00e676" }}>
                <FaDownload className="w-3 h-3" /> Resume
              </motion.a>
            )}
          </AnimatePresence>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden transition-colors p-1"
          style={{ color: "rgba(255,255,255,0.5)" }}>
          {mobileOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b overflow-hidden px-6 pb-6 pt-2"
            style={{ background: "rgba(2,11,4,0.97)", borderColor: "rgba(0,230,118,0.1)" }}>
            {activeLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 text-sm font-black uppercase tracking-widest border-b transition-colors last:border-0"
                style={{
                  color: activeSection === link.href.replace("#", "") ? "#00e676" : "rgba(255,255,255,0.4)",
                  borderColor: "rgba(255,255,255,0.04)",
                }}>
                {link.label}
              </a>
            ))}
            {data?.resumeBase64 && (
              <a href={`data:application/pdf;base64,${data.resumeBase64}`}
                download={`${data.name || "Resume"}.pdf`}
                className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-black uppercase tracking-wider text-[#020b04]"
                style={{ background: "#00e676" }}>
                <FaDownload className="w-3.5 h-3.5" /> Resume
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
