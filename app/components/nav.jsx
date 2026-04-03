"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

// ── Gilded Noir palette ──────────────────────────────────────────────────────
// bg: #07060a  |  gold: #c9a84c  |  gold-hi: #f0cc6e  |  cream: #f5eed9

export default function PortfolioNav({ data }) {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  if (!data) return null;

  const allLinks = [
    { label: "About",      href: "#about",      key: "about" },
    { label: "Education",  href: "#education",  key: "education" },
    { label: "Experience", href: "#experience", key: "experience" },
    { label: "Projects",   href: "#projects",   key: "projects" },
    { label: "Skills",     href: "#skills",     key: "skills" },
    { label: "Impact",     href: "#community",  key: "community" },
    { label: "Contact",    href: "#contact",    key: "email" },
  ];

  const activeLinks = allLinks.filter((l) => {
    if (l.label === "About") return true;
    const d = data?.[l.key];
    return Array.isArray(d) ? d.length > 0 : !!d;
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = activeLinks.map((l) => l.href.replace("#", ""));
      const sorted = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .sort((a, b) => a.offsetTop - b.offsetTop);
      let current = sorted[0]?.id ?? "about";
      for (let i = sorted.length - 1; i >= 0; i--) {
        if (window.scrollY >= sorted[i].offsetTop - 120) { current = sorted[i].id; break; }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .gn-link { position:relative; text-decoration:none; letter-spacing:0.2em; font-size:10px; font-weight:700; text-transform:uppercase; transition:color 0.2s; color:rgba(245,238,217,0.35); }
        .gn-link:hover { color:#c9a84c; }
        .gn-link.active { color:#c9a84c; }
        .gn-link::after { content:''; position:absolute; bottom:-3px; left:0; right:0; height:1px; background:linear-gradient(90deg, #c9a84c, #f0cc6e); transform:scaleX(0); transform-origin:left; transition:transform 0.25s ease; }
        .gn-link:hover::after, .gn-link.active::after { transform:scaleX(1); }
        @keyframes gn-border-glow { 0%,100%{border-color:rgba(201,168,76,0.15);} 50%{border-color:rgba(201,168,76,0.35);} }
        .gn-scrolled { animation:gn-border-glow 4s ease-in-out infinite; }
      `}</style>

      <motion.nav
        initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
        style={{
          position:"fixed", top:0, left:0, right:0, zIndex:50,
          background: scrolled ? "rgba(7,6,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent",
          transition:"all 0.4s ease",
        }}
        className={scrolled ? "gn-scrolled" : ""}
      >
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 1.5rem", height:"68px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          {/* Logo */}
          <a href="#about" onClick={(e) => handleClick(e, "#about")} style={{ textDecoration:"none", display:"flex", alignItems:"baseline", gap:"1px" }}>
            <span style={{ fontWeight:900, fontSize:"15px", letterSpacing:"-0.03em", color:"#f5eed9" }}>
              {data.name?.split(" ")[0] || "Portfolio"}
            </span>
            <span style={{ color:"#c9a84c", fontSize:"18px", fontWeight:300, lineHeight:1 }}>.</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex" style={{ alignItems:"center", gap:"2rem" }}>
            {activeLinks.map((link) => (
              <a
                key={link.href} href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`gn-link${activeSection === link.href.replace("#","") ? " active" : ""}`}
              >
                {link.label}
              </a>
            ))}
            {data?.resumeBase64 && (
              <a href="/resume.pdf" download="Resume.pdf" style={{
                display:"flex", alignItems:"center", gap:"6px",
                padding:"7px 18px", border:"1px solid rgba(201,168,76,0.3)",
                color:"#c9a84c", fontSize:"10px", fontWeight:700, letterSpacing:"0.15em",
                textDecoration:"none", textTransform:"uppercase",
                background:"rgba(201,168,76,0.04)",
                transition:"all 0.2s",
              }}
                onMouseEnter={(e)=>{ e.currentTarget.style.background="rgba(201,168,76,0.1)"; e.currentTarget.style.borderColor="rgba(201,168,76,0.6)"; e.currentTarget.style.color="#f0cc6e"; e.currentTarget.style.boxShadow="0 0 20px rgba(201,168,76,0.15)"; }}
                onMouseLeave={(e)=>{ e.currentTarget.style.background="rgba(201,168,76,0.04)"; e.currentTarget.style.borderColor="rgba(201,168,76,0.3)"; e.currentTarget.style.color="#c9a84c"; e.currentTarget.style.boxShadow="none"; }}
              >
                <FaDownload style={{ fontSize:"9px" }} /> Resume
              </a>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background:"none", border:"none", color:"rgba(245,238,217,0.5)", cursor:"pointer", padding:"8px" }}>
            {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:"auto" }} exit={{ opacity:0, height:0 }}
              style={{ background:"rgba(7,6,10,0.98)", backdropFilter:"blur(24px)", borderBottom:"1px solid rgba(201,168,76,0.12)", overflow:"hidden" }}>
              <div style={{ padding:"1rem 1.5rem 1.5rem" }}>
                {activeLinks.map((link, i) => (
                  <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)}
                    style={{ display:"block", padding:"12px 0", borderBottom: i < activeLinks.length-1 ? "1px solid rgba(201,168,76,0.08)" : "none",
                      color:"rgba(245,238,217,0.5)", fontSize:"11px", fontWeight:700, letterSpacing:"0.2em", textDecoration:"none", textTransform:"uppercase" }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
