"use client";
import React from "react";
import { motion } from "framer-motion";

const CHARCOAL = "#1c1915";
const GREEN    = "#1e3a2f";
const GOLD     = "#b8923a";
const GREY     = "#7a7268";
const BORDER   = "#e0d8cc";

export default function OldMoneySkills({ data }) {
  const raw = data?.skills || [];
  if (!raw.length) return null;

  // Normalise: builder stores flat string array
  const flat = raw.flatMap((s) =>
    typeof s === "object" && s !== null && Array.isArray(s.items) ? s.items :
    typeof s === "object" && s !== null && Array.isArray(s.skills) ? s.skills :
    [s]
  ).filter(Boolean);

  // Split into columns of up to 5 for visual grouping
  const CHUNK = 5;
  const columns = [];
  for (let i = 0; i < flat.length; i += CHUNK) {
    columns.push(flat.slice(i, i + CHUNK));
  }

  return (
    <section id="skills" style={{ background: "#f5f0e8", borderTop: `1px solid ${BORDER}` }}>
      <style>{`
        @media(max-width:768px){
          .om-skills-inner { padding: 4rem 1.25rem !important; }
          .om-skills-grid  { grid-template-columns: 1fr 1fr !important; gap: 1px !important; }
        }
        @media(max-width:480px){
          .om-skills-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="om-skills-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "4.5rem" }}
        >
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", fontWeight: 700, color: GREEN, letterSpacing: "0.25em", textTransform: "uppercase" }}>V.</span>
          <div style={{ width: "60px", height: "1px", background: GREEN, opacity: 0.4 }} />
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: GREY }}>Expertise</span>
        </motion.div>

        <div className="om-skills-grid" style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(columns.length, 4)}, 1fr)`,
          gap: "2px",
          background: BORDER,
        }}>
          {columns.map((col, ci) => (
            <motion.div key={ci}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: ci * 0.06 }}
              style={{ background: "#faf7f2", padding: "2rem 2rem" }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                {col.map((skill, si) => {
                  const label = typeof skill === "string" ? skill : skill?.name || skill?.label || String(skill);
                  return (
                    <div key={si} style={{
                      display: "flex", alignItems: "center", gap: "12px",
                      padding: "10px 0",
                      borderBottom: si < col.length - 1 ? `1px solid ${BORDER}` : "none",
                    }}>
                      <div style={{ width: "4px", height: "4px", background: GOLD, transform: "rotate(45deg)", flexShrink: 0 }} />
                      <span style={{
                        fontFamily: 'Georgia, serif',
                        fontSize: "13px", color: CHARCOAL, letterSpacing: "0.02em",
                      }}>
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
