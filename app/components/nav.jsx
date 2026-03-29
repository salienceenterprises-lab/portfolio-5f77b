"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

export default function PortfolioNav({ data }) {
  const [scrolled, setScrolled]       = useState(false);
  const [pastHero, setPastHero]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();

  if (!data) return null;

  const allNavLinks = [
    { label: "About",     href: "#about",     key: "about"     },
    { label: "Education", href: "#education", key: "education" },
    { label: "Experience",href: "#experience",key: "experience"},
    { label: "Projects",  href: "#projects",  key: "projects"  },
    { label: "Skills",    href: "#skills",    key: "skills"    },
    { label: "Impact",    href: "#community", key: "community" },
    { label: "Contact",   href: "#contact",   key: "email"     },
  ];

  const activeLinks = allNavLinks.filter((link) => {
    if (link.label === "About") return true;
    const sectionData = data?.[link.key];
    if (Array.isArray(sectionData)) return sectionData.length > 0;
    return !!sectionData;
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    setPastHero(latest > window.innerHeight * 0.8);

    // Active section detection
    const sectionIds = ["hero", ...activeLinks.map(l => l.href.replace("#", ""))];
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && latest >= el.offsetTop - 120) {
        setActiveSection(sectionIds[i]);
        break;
      }
    }
  });

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#020c18]/92 backdrop-blur-2xl border-b border-cyan-400/[0.07] shadow-[0_4px_40px_rgba(6,182,212,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex items-center gap-2"
        >
          <span className="text-base font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300">
            {data.name?.split(" ")[0]}
          </span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-base font-black text-cyan-400"
          >.</motion.span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {activeLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-3 py-2 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300"
              >
                <span className={isActive ? "text-cyan-300" : "text-white/40 hover:text-white/80"}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Resume CTA */}
        <div className="hidden md:flex items-center">
          <AnimatePresence>
            {pastHero && data?.resumeBase64 && (
              <motion.a
                href={`data:application/pdf;base64,${data.resumeBase64}`}
                download={`${data.name || "Resume"}.pdf`}
                initial={{ opacity: 0, scale: 0.9, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: 10 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[11px] font-bold rounded-full shadow-lg shadow-cyan-500/25 tracking-wide"
              >
                <FaDownload className="w-2.5 h-2.5" />
                Resume
              </motion.a>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/50 hover:text-cyan-300 transition-colors"
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
            className="md:hidden bg-[#020c18]/98 backdrop-blur-2xl border-b border-cyan-400/[0.07] overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 space-y-1">
              {activeLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-3 text-sm text-white/50 hover:text-cyan-300 transition-colors border-b border-white/[0.04] last:border-0 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              {data?.resumeBase64 && (
                <a
                  href={`data:application/pdf;base64,${data.resumeBase64}`}
                  download={`${data.name || "Resume"}.pdf`}
                  className="flex items-center gap-2 mt-4 text-sm text-cyan-400 font-bold"
                >
                  <FaDownload className="w-3.5 h-3.5" /> Download Resume
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
