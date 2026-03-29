"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

export default function PortfolioNav({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!data) return null;

  const allNavLinks = [
    { label: "About", href: "#about", key: "about" },
    { label: "Education", href: "#education", key: "education" },
    { label: "Experience", href: "#experience", key: "experience" },
    { label: "Projects", href: "#projects", key: "projects" },
    { label: "Skills", href: "#skills", key: "skills" },
    { label: "Impact", href: "#community", key: "community" },
    { label: "Contact", href: "#contact", key: "email" },
  ];

  const activeLinks = allNavLinks.filter((link) => {
    if (link.label === "About") return true;
    const sectionData = data?.[link.key];
    if (Array.isArray(sectionData)) return sectionData.length > 0;
    return !!sectionData;
  });

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > 50);
      setPastHero(window.scrollY > heroHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#000000]/85 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="text-lg font-bold text-white tracking-tight">
          {data.name || "Portfolio"}<span className="text-red-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {activeLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold text-white/45 hover:text-red-400 tracking-widest uppercase transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <AnimatePresence>
            {pastHero && (data?.resumeBase64 || data?.resume) && (
              <motion.a
                href={data.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : (data.resume || "/resume.pdf")}
                download={`${data.name || "Resume"}.pdf`}
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.25 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#950101] to-[#FF0000] hover:from-[#FF0000] hover:to-[#950101] text-white text-xs font-semibold rounded-full transition-all shadow-md shadow-red-900/40"
              >
                <FaDownload className="w-3 h-3" /> Resume
              </motion.a>
            )}
          </AnimatePresence>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white/60 hover:text-red-400 transition-colors">
          {mobileOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#000000]/95 backdrop-blur-xl border-b border-white/[0.06] px-6 pb-6 pt-2 overflow-hidden">
            {activeLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 text-sm text-white/60 hover:text-red-400 transition-colors border-b border-white/[0.04] last:border-0">
                {link.label}
              </a>
            ))}
            {(data?.resumeBase64 || data?.resume) && (
              <a href={data.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : (data.resume || "/resume.pdf")}
                download={`${data.name || "Resume"}.pdf`}
                className="mt-3 inline-flex items-center gap-2 text-sm text-red-400 font-semibold">
                <FaDownload className="w-3.5 h-3.5" /> Download Resume
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
