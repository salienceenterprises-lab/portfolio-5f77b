"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARCOAL = "#1c1915";
const GREEN    = "#1e3a2f";
const GOLD     = "#b8923a";
const GREY     = "#7a7268";
const BORDER   = "#e0d8cc";

export default function OldMoneyExperience({ data }) {
  const list = data?.experience || [];
  if (!list.length) return null;

  const [active, setActive] = useState(0);
  const job = list[active];

  const bullets = (
    Array.isArray(job?.highlights) && job.highlights.filter(Boolean).length ? job.highlights.filter(Boolean) :
    Array.isArray(job?.responsibilities) && job.responsibilities.filter(Boolean).length ? job.responsibilities.filter(Boolean) :
    Array.isArray(job?.bullets) && job.bullets.filter(Boolean).length ? job.bullets.filter(Boolean) : []
  );
  const stack = Array.isArray(job?.stack) ? job.stack.filter(Boolean) : [];

  return (
    <section id="experience" style={{ background: "#f5f0e8", borderTop: `1px solid ${BORDER}` }}>
      <style>{`@media(max-width:768px){.om-exp-inner{padding:4rem 1.25rem!important;} .om-exp-tabs{grid-template-columns:1fr!important;} .om-exp-detail{padding:1.5rem!important;}}`}</style>
      <div className="om-exp-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "4.5rem" }}
        >
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", fontWeight: 700, color: GREEN, letterSpacing: "0.25em", textTransform: "uppercase" }}>III.</span>
          <div style={{ width: "60px", height: "1px", background: GREEN, opacity: 0.4 }} />
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: GREY }}>Professional Record</span>
        </motion.div>

        <div className="om-exp-tabs" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "0", border: `1px solid ${BORDER}` }}>
          {/* Left column: positions */}
          <div style={{ borderRight: `1px solid ${BORDER}`, background: "#faf7f2" }}>
            {list.map((item, i) => (
              <button key={i}
                onClick={() => setActive(i)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  background: active === i ? "#f5f0e8" : "transparent",
                  border: "none",
                  borderLeft: active === i ? `3px solid ${GREEN}` : "3px solid transparent",
                  borderBottom: `1px solid ${BORDER}`,
                  padding: "1.6rem 1.8rem",
                  cursor: "pointer", transition: "all 0.2s ease",
                }}
              >
                <div style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "13px", fontWeight: active === i ? 700 : 400,
                  color: active === i ? CHARCOAL : GREY,
                  marginBottom: "4px", transition: "all 0.2s",
                }}>
                  {item.company || item.employer || item.organization}
                </div>
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: "10px", fontStyle: "italic",
                  color: active === i ? GOLD : "#b0a898",
                  letterSpacing: "0.05em", transition: "color 0.2s",
                }}>
                  {item.period || item.duration || item.years || ""}
                </div>
              </button>
            ))}
          </div>

          {/* Right: detail */}
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="om-exp-detail" style={{ padding: "2.8rem 3rem", background: "#faf7f2" }}
            >
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: "10px", letterSpacing: "0.22em",
                textTransform: "uppercase", color: GOLD,
                marginBottom: "0.5rem", fontStyle: "italic",
              }}>
                {job?.role || job?.title || job?.position}
              </div>

              <h3 style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(1.5rem, 2.5vw, 2.4rem)",
                fontWeight: 700, color: CHARCOAL,
                letterSpacing: "-0.02em", margin: "0 0 1.5rem",
              }}>
                {job?.company || job?.employer || job?.organization}
              </h3>

              {/* Gold rule */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
                <div style={{ width: "40px", height: "1px", background: GOLD, opacity: 0.6 }} />
                <div style={{ width: "4px", height: "4px", background: GOLD, transform: "rotate(45deg)", opacity: 0.6 }} />
              </div>

              {job?.description && (
                <p style={{ fontFamily: 'Georgia, serif', fontSize: "14px", color: GREY, lineHeight: 1.85, marginBottom: bullets.length ? "1.2rem" : 0 }}>
                  {job.description}
                </p>
              )}
              {bullets.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {bullets.map((b, j) => (
                    <div key={j} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <div style={{ width: "5px", height: "5px", background: GREEN, transform: "rotate(45deg)", flexShrink: 0, marginTop: "7px" }} />
                      <p style={{ fontFamily: 'Georgia, serif', fontSize: "14px", color: GREY, lineHeight: 1.85, margin: 0 }}>{b}</p>
                    </div>
                  ))}
                </div>
              )}
              {stack.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "1.5rem", paddingTop: "1.2rem", borderTop: `1px solid ${BORDER}` }}>
                  {stack.map((s, si) => (
                    <span key={si} style={{
                      fontFamily: 'Georgia, serif', fontSize: "10px",
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: GREEN, border: `1px solid ${GREEN}35`,
                      padding: "3px 10px", background: "rgba(30,58,47,0.04)",
                    }}>{typeof s === "string" ? s : s?.name || String(s)}</span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
