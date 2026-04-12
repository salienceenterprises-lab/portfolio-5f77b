"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const CHARCOAL = "#1c1915";
const GREEN    = "#1e3a2f";
const GOLD     = "#b8923a";
const CREAM    = "#faf7f2";
const BORDER   = "#e0d8cc";
const GREY     = "#7a7268";

export default function OldMoneyNav({ data }) {
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen,    setMobileOpen]    = useState(false);

  const allLinks = [
    { label: "About",      key: "about",      href: "#about"      },
    { label: "Education",  key: "education",  href: "#education"  },
    { label: "Experience", key: "experience", href: "#experience" },
    { label: "Projects",   key: "projects",   href: "#projects"   },
    { label: "Skills",     key: "skills",     href: "#skills"     },
    { label: "Community",  key: "community",  href: "#community"  },
    { label: "Contact",    key: "email",      href: "#contact"    },
  ];

  const activeLinks = allLinks.filter((l) => {
    if (l.key === "about") return true;
    const d = data?.[l.key];
    return Array.isArray(d) ? d.length > 0 : !!d;
  });

  const resumeSource = data?.resumeBase64 || data?.resume || data?.resumeUrl;

  useEffect(() => {
    const ids = ["hero", ...activeLinks.map((l) => l.href.replace("#", ""))];
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sorted = ids
        .map((id) => ({ id, top: document.getElementById(id)?.offsetTop ?? Infinity }))
        .filter((s) => s.top !== Infinity)
        .sort((a, b) => a.top - b.top);
      for (let i = sorted.length - 1; i >= 0; i--) {
        if (window.scrollY >= sorted[i].top - 120) { setActiveSection(sorted[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  // Display name: just last word for compact monogram label, or full name if single word
  const nameParts = (data?.name || "").split(" ").filter(Boolean);
  const initial   = nameParts[0]?.charAt(0).toUpperCase() || "P";
  const surname   = nameParts[nameParts.length - 1] || "Portfolio";

  return (
    <>
      <style>{`
        .om-nav-link {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 11px; font-weight: 400;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: ${GREY}; text-decoration: none;
          padding: 4px 0; position: relative;
          transition: color 0.25s ease; white-space: nowrap;
        }
        .om-nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1px; background: ${GREEN};
          transition: width 0.3s ease;
        }
        .om-nav-link:hover { color: ${CHARCOAL}; }
        .om-nav-link:hover::after, .om-nav-link.active::after { width: 100%; }
        .om-nav-link.active { color: ${CHARCOAL}; font-weight: 700; }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: CREAM,
        borderBottom: `1px solid ${scrolled ? BORDER : "transparent"}`,
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
        boxShadow: scrolled ? "0 1px 16px rgba(28,25,21,0.07)" : "none",
      }}>
        {/* Thin gold top rule */}
        <div style={{ height: "2px", background: GOLD, opacity: 0.6 }} />

        <div style={{
          maxWidth: "1200px", margin: "0 auto",
          padding: "0 1.5rem", height: "64px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "1rem",
        }}>
          {/* Monogram — just the box with initial, surname beside it on md+ */}
          <a href="#hero" onClick={(e) => go(e, "#hero")}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <div style={{
              width: "32px", height: "32px", flexShrink: 0,
              border: `1.5px solid ${GREEN}`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "14px", fontWeight: 700, color: GREEN,
              }}>
                {initial}
              </span>
            </div>
            <span className="hidden sm:inline" style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "12px", fontWeight: 400,
              color: CHARCOAL, letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}>
              {surname}
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.6rem", overflow: "hidden" }} className="hidden md:flex">
            {activeLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a key={link.href} href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className={`om-nav-link ${isActive ? "active" : ""}`}>
                  {link.label}
                </a>
              );
            })}
            {resumeSource && (
              <a
                href={data?.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : resumeSource}
                download="Resume.pdf"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "10px", letterSpacing: "0.18em",
                  textTransform: "uppercase", color: GREEN,
                  textDecoration: "none", borderBottom: `1px solid ${GREEN}`,
                  paddingBottom: "1px", transition: "opacity 0.2s", flexShrink: 0,
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "0.65"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                CV
              </a>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{ background: "none", border: "none", cursor: "pointer", color: CHARCOAL, padding: "8px", flexShrink: 0 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: "fixed", top: "66px", left: 0, right: 0, zIndex: 199,
              background: CREAM, borderBottom: `1px solid ${BORDER}`,
              overflow: "hidden",
            }}
            className="md:hidden"
          >
            <div style={{ padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column" }}>
              {activeLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a key={link.href} href={link.href} onClick={(e) => go(e, link.href)}
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: "13px", letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: isActive ? GREEN : CHARCOAL,
                      fontWeight: isActive ? 700 : 400,
                      textDecoration: "none", padding: "12px 0",
                      borderBottom: `1px solid ${BORDER}`,
                    }}>
                    {link.label}
                  </a>
                );
              })}
              {resumeSource && (
                <a
                  href={data?.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : resumeSource}
                  download="Resume.pdf"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    marginTop: "1.25rem", alignSelf: "flex-start",
                    fontFamily: 'Georgia, serif', fontSize: "11px",
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    color: "#f5f0e8", textDecoration: "none",
                    background: GREEN, padding: "10px 24px",
                  }}>
                  Curriculum Vitæ ↓
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
