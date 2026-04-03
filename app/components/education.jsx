"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function PortfolioEducation({ data }) {
  const items = data?.education;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="education" style={{ background:"#07060a", padding:"8rem 2rem", position:"relative", overflow:"hidden", borderTop:"1px solid rgba(201,168,76,0.06)" }}>
      <style>{`
        .gn-edu-row { display:grid; grid-template-columns:120px 1fr; gap:2rem; padding:2.5rem 0; border-bottom:1px solid rgba(201,168,76,0.07); transition:all 0.3s; position:relative; }
        .gn-edu-row:last-child { border-bottom:none; }
        .gn-edu-row::before { content:''; position:absolute; left:0; top:0; width:1px; height:0; background:linear-gradient(180deg, #c9a84c, rgba(201,168,76,0.1)); transition:height 0.4s ease; }
        .gn-edu-row:hover::before { height:100%; }
        .gn-edu-row:hover { padding-left:1rem; }
        @media(max-width:640px) { .gn-edu-row { grid-template-columns:1fr; gap:1rem; } }
      `}</style>

      <div style={{ position:"absolute", top:"2rem", right:"2rem", fontSize:"220px", fontWeight:900, lineHeight:1, color:"transparent", WebkitTextStrokeWidth:"1px", WebkitTextStrokeColor:"rgba(201,168,76,0.04)", pointerEvents:"none", userSelect:"none" }}>02</div>
      <div style={{ position:"absolute", bottom:"-80px", right:"-80px", width:"350px", height:"350px", borderRadius:"50%", background:"radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1280px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.45em", color:"rgba(201,168,76,0.5)", textTransform:"uppercase" }}>02</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3.5rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#f5eed9", margin:0, textTransform:"uppercase" }}>Education</h2>
          <div style={{ width:"60px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)", marginTop:"1rem" }} />
        </motion.div>

        <div>
          {items.map((edu, i) => (
            <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i * 0.08 }}>
              <div className="gn-edu-row">
                {/* Year column */}
                <div>
                  <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.2em", color:"rgba(201,168,76,0.6)", display:"block", marginBottom:"4px" }}>
                    {edu.year || edu.graduationYear || edu.period || "—"}
                  </span>
                  <span style={{ fontSize:"10px", color:"rgba(245,238,217,0.2)", letterSpacing:"0.1em" }}>Year</span>
                </div>

                {/* Content */}
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"0.5rem" }}>
                    <FaGraduationCap style={{ color:"rgba(201,168,76,0.5)", fontSize:"14px" }} />
                    <h3 style={{ fontSize:"17px", fontWeight:800, color:"#f5eed9", margin:0, letterSpacing:"-0.02em" }}>
                      {edu.degree || edu.field || edu.program}
                    </h3>
                  </div>
                  <p style={{ fontSize:"13px", fontWeight:600, color:"rgba(201,168,76,0.7)", margin:"0 0 10px" }}>
                    {edu.institution || edu.school}
                  </p>
                  {edu.description && (
                    <p style={{ fontSize:"13px", color:"rgba(245,238,217,0.4)", lineHeight:1.65, margin:0 }}>{edu.description}</p>
                  )}
                  {edu.gpa && (
                    <p style={{ fontSize:"11px", color:"rgba(201,168,76,0.5)", marginTop:"8px", fontWeight:600, letterSpacing:"0.1em" }}>GPA: {edu.gpa}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
