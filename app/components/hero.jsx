"use client";
import React from "react";
import { motion } from "framer-motion";

const CHARCOAL = "#1c1915";
const GREEN    = "#1e3a2f";
const GOLD     = "#b8923a";
const CREAM    = "#faf7f2";
const GREY     = "#7a7268";
const BORDER   = "#e0d8cc";

const dignified = (delay = 0) => ({
  initial:    { opacity: 0, y: 16 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1], delay },
});

export default function OldMoneyHero({ data }) {
  const hasPhoto    = !!data?.heroImageBase64;
  const resumeSource = data?.resumeBase64 || data?.resume || data?.resumeUrl;
  const nameParts   = (data?.name || "Portfolio").split(" ");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      background: CREAM,
      display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
      paddingTop: "68px",
    }}>
      {/* Subtle linen texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23faf7f2'/%3E%3Crect width='1' height='1' x='0' y='0' fill='%23f0e8d8' opacity='0.3'/%3E%3Crect width='1' height='1' x='2' y='2' fill='%23f0e8d8' opacity='0.3'/%3E%3C/svg%3E")`,
      }} />

      {/* Right green accent panel */}
      {hasPhoto && (
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: "38%", height: "100%",
          background: "#f3ede3",
          borderLeft: `1px solid ${BORDER}`,
          pointerEvents: "none",
        }} />
      )}

      <style>{`
        @media(max-width:768px){
          .om-hero-grid { grid-template-columns: 1fr !important; padding: 3rem 1.25rem 7rem !important; gap: 2rem !important; }
          .om-hero-photo { min-height: 300px !important; }
        }
      `}</style>
      <div className="om-hero-grid" style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "6rem 3rem",
        width: "100%", position: "relative", zIndex: 1,
        display: "grid",
        gridTemplateColumns: hasPhoto ? "1fr 360px" : "1fr",
        gap: "5rem", alignItems: "center",
      }}>
        {/* Left: identity */}
        <div>
          {/* Title */}
          <motion.div {...dignified(0)} style={{ marginBottom: "2.2rem" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "16px",
            }}>
              <div style={{ width: "32px", height: "1px", background: GOLD }} />
              <span style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "11px", letterSpacing: "0.28em",
                textTransform: "uppercase", color: GOLD,
                fontWeight: 400,
              }}>
                {data?.title || "Executive Professional"}
              </span>
            </div>
          </motion.div>

          {/* Name — serif display */}
          <motion.div {...dignified(0.1)} style={{ marginBottom: "2.5rem" }}>
            {nameParts.map((word, i) => (
              <div key={i} style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(3.2rem, 7vw, 7.5rem)",
                fontWeight: 700,
                color: i === nameParts.length - 1 ? GREEN : CHARCOAL,
                letterSpacing: "-0.02em",
                lineHeight: 0.95,
                display: "block",
              }}>
                {word}
              </div>
            ))}
          </motion.div>

          {/* Ruled divider */}
          <motion.div {...dignified(0.2)} style={{
            display: "flex", alignItems: "center", gap: "16px",
            marginBottom: "2.5rem",
          }}>
            <div style={{ flex: 1, height: "1px", background: BORDER, maxWidth: "480px" }} />
            <div style={{ width: "5px", height: "5px", background: GOLD, transform: "rotate(45deg)", flexShrink: 0 }} />
          </motion.div>

          {/* Tagline / bio */}
          {(data?.sloganHeroSection || data?.bio) && (
            <motion.p {...dignified(0.25)} style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "17px", fontWeight: 400,
              color: GREY, lineHeight: 1.9,
              maxWidth: "500px", margin: "0 0 3.5rem",
              fontStyle: "italic",
            }}>
              "{data?.sloganHeroSection || data?.bio?.slice(0, 160) + "…"}"
            </motion.p>
          )}

          {/* CTAs */}
          <motion.div {...dignified(0.3)} style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: GREEN, color: "#f5f0e8",
                border: "none", padding: "13px 36px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "11px", letterSpacing: "0.2em",
                textTransform: "uppercase", cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#152b22"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = GREEN; }}
            >
              Arrange a Meeting
            </button>
            <button
              onClick={() => scrollTo("about")}
              style={{
                background: "transparent", color: CHARCOAL,
                border: `1px solid ${BORDER}`, padding: "12px 32px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "11px", letterSpacing: "0.2em",
                textTransform: "uppercase", cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = GREEN; e.currentTarget.style.color = GREEN; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = CHARCOAL; }}
            >
              View Profile
            </button>
            {resumeSource && (
              <a
                href={data?.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : resumeSource}
                download="Resume.pdf"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "11px", letterSpacing: "0.16em",
                  color: GOLD, textDecoration: "none",
                  textTransform: "uppercase",
                  borderBottom: `1px solid ${GOLD}60`,
                  paddingBottom: "2px",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "0.65"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                Curriculum Vitæ ↓
              </a>
            )}
          </motion.div>
        </div>

        {/* Right: formal portrait */}
        {hasPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35 }}
            style={{ position: "relative", alignSelf: "stretch" }}
          >
            {/* Gold corner marks */}
            {[
              { top: "-8px",  left: "-8px",  borderTop: `2px solid ${GOLD}`, borderLeft: `2px solid ${GOLD}` },
              { top: "-8px",  right: "-8px", borderTop: `2px solid ${GOLD}`, borderRight: `2px solid ${GOLD}` },
              { bottom: "-8px", left: "-8px",  borderBottom: `2px solid ${GOLD}`, borderLeft: `2px solid ${GOLD}` },
              { bottom: "-8px", right: "-8px", borderBottom: `2px solid ${GOLD}`, borderRight: `2px solid ${GOLD}` },
            ].map((s, i) => (
              <div key={i} style={{ position: "absolute", width: "24px", height: "24px", ...s }} />
            ))}

            <div style={{
              overflow: "hidden",
              border: `1px solid ${BORDER}`,
              height: "100%", minHeight: "480px",
            }}>
              <img
                src={data.heroImageBase64}
                alt={data.name}
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "center top",
                  display: "block",
                  filter: "brightness(1.0) saturate(0.75) sepia(0.08)",
                }}
              />
            </div>

            {/* Nameplate */}
            <div style={{
              position: "absolute", bottom: "0", left: "0", right: "0",
              background: "rgba(28,25,21,0.78)",
              backdropFilter: "blur(4px)",
              padding: "14px 20px",
              borderTop: `2px solid ${GOLD}80`,
            }}>
              <div style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "13px", fontWeight: 700,
                color: "#f5f0e8", letterSpacing: "0.1em",
              }}>
                {data.name}
              </div>
              {data?.title && (
                <div style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "10px", color: GOLD,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  marginTop: "3px",
                }}>
                  {data.title}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom rule */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "1px", background: BORDER,
      }} />
    </section>
  );
}
