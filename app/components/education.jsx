"use client";
import React from "react";
import { motion } from "framer-motion";

const CHARCOAL = "#1c1915";
const GREEN    = "#1e3a2f";
const GOLD     = "#b8923a";
const CREAM    = "#faf7f2";
const GREY     = "#7a7268";
const BORDER   = "#e0d8cc";

export default function OldMoneyEducation({ data }) {
  const list = data?.education || [];
  if (!list.length) return null;

  return (
    <section id="education" style={{ background: CREAM, borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "4.5rem" }}
        >
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", fontWeight: 700, color: GREEN, letterSpacing: "0.25em", textTransform: "uppercase" }}>II.</span>
          <div style={{ width: "60px", height: "1px", background: GREEN, opacity: 0.4 }} />
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: GREY }}>Education</span>
        </motion.div>

        <style>{`@media(max-width:768px){.om-edu-row{grid-template-columns:1fr!important;gap:1rem!important;padding:2rem 0!important;} #education>div{padding:4rem 1.25rem!important;}}`}</style>
        <div style={{ display: "flex", flexDirection: "column", gap: "0", borderTop: `1px solid ${BORDER}` }}>
          {list.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="om-edu-row"
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "3rem",
                padding: "2.5rem 0",
                borderBottom: `1px solid ${BORDER}`,
                alignItems: "start",
              }}
            >
              {/* Left: date */}
              <div style={{ paddingTop: "4px" }}>
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: "11px", color: GOLD,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  fontWeight: 700,
                }}>
                  {edu.period || edu.duration || edu.years || edu.year || ""}
                </div>
                {(edu.institution || edu.school) && (
                  <div style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: "12px", color: GREY,
                    marginTop: "6px", letterSpacing: "0.04em",
                    fontStyle: "italic",
                  }}>
                    {edu.institution || edu.school}
                  </div>
                )}
              </div>

              {/* Right: degree */}
              <div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{ width: "6px", height: "6px", background: GREEN, transform: "rotate(45deg)", flexShrink: 0, marginTop: "8px" }} />
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: "20px", fontWeight: 700,
                      color: CHARCOAL, letterSpacing: "-0.01em",
                      margin: "0 0 0.4rem",
                    }}>
                      {edu.degree || edu.field || edu.title}
                    </h3>
                    {(edu.location) && (
                      <div style={{ fontFamily: 'Georgia, serif', fontSize: "12px", color: GREY, fontStyle: "italic", marginBottom: "0.6rem" }}>
                        {edu.location}
                      </div>
                    )}
                    {edu.description && (
                      <p style={{
                        fontFamily: 'Georgia, serif',
                        fontSize: "14px", color: GREY,
                        lineHeight: 1.8, margin: "0 0 0.8rem",
                        fontStyle: "italic",
                      }}>
                        {edu.description}
                      </p>
                    )}
                    {Array.isArray(edu.achievements) && edu.achievements.filter(Boolean).length > 0 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginTop: "0.6rem" }}>
                        {edu.achievements.filter(Boolean).map((a, ai) => (
                          <div key={ai} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                            <div style={{ width: "3px", height: "3px", background: GOLD, transform: "rotate(45deg)", flexShrink: 0, marginTop: "7px" }} />
                            <span style={{ fontFamily: 'Georgia, serif', fontSize: "13px", color: GREY, lineHeight: 1.7 }}>{a}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
