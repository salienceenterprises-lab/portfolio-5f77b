"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const CHARCOAL = "#1c1915";
const GREEN    = "#1e3a2f";
const GOLD     = "#b8923a";
const CREAM    = "#faf7f2";
const GREY     = "#7a7268";
const BORDER   = "#e0d8cc";

export default function OldMoneyCommunity({ data }) {
  const list = data?.community || data?.volunteering || data?.involvement || [];
  if (!list.length) return null;

  return (
    <section id="community" style={{ background: CREAM, borderTop: `1px solid ${BORDER}` }}>
      <style>{`@media(max-width:768px){.om-comm-inner{padding:4rem 1.25rem!important;} .om-comm-grid{grid-template-columns:1fr!important;}}`}</style>
      <div className="om-comm-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "4.5rem" }}
        >
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", fontWeight: 700, color: GREEN, letterSpacing: "0.25em", textTransform: "uppercase" }}>VI.</span>
          <div style={{ width: "60px", height: "1px", background: GREEN, opacity: 0.4 }} />
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: GREY }}>Civic & Community</span>
        </motion.div>

        <div className="om-comm-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2px", background: BORDER }}>
          {list.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              style={{
                background: "#faf7f2",
                padding: "2.5rem",
                borderTop: `3px solid ${GREEN}`,
                display: "flex", flexDirection: "column",
              }}
            >
              <h3 style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "16px", fontWeight: 700,
                color: CHARCOAL, margin: "0 0 6px",
              }}>
                {item.title || item.role || item.name}
              </h3>
              {(item.organization || item.company) && (
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: "12px", fontStyle: "italic",
                  color: GREEN, marginBottom: "0.8rem",
                }}>
                  {item.organization || item.company}
                </div>
              )}
              {item.description && (
                <p style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: "13px", color: GREY,
                  lineHeight: 1.8, margin: "0 0 1rem", flex: 1,
                }}>
                  {item.description}
                </p>
              )}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                marginTop: "auto", paddingTop: "1rem",
                borderTop: `1px solid ${BORDER}`,
              }}>
                {(item.duration || item.years || item.period) && (
                  <span style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: "10px", fontStyle: "italic",
                    color: GOLD, letterSpacing: "0.1em",
                  }}>
                    {item.duration || item.years || item.period}
                  </span>
                )}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "5px",
                      fontFamily: 'Georgia, serif',
                      fontSize: "10px", letterSpacing: "0.15em",
                      textTransform: "uppercase", color: GREEN,
                      textDecoration: "none", transition: "opacity 0.2s",
                      marginLeft: "auto",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "0.6"}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                  >
                    Read More <FaExternalLinkAlt size={8} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
