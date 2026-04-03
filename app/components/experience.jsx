"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function PortfolioExperience({ data }) {
  const items = data?.experience;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="experience" style={{ background:"#07060a", padding:"8rem 2rem", position:"relative", overflow:"hidden", borderTop:"1px solid rgba(201,168,76,0.06)" }}>
      <style>{`
        .gn-exp-card {
          position:relative; padding:2.5rem;
          border:1px solid rgba(201,168,76,0.08);
          transition:all 0.3s ease; cursor:default;
        }
        .gn-exp-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg, #c9a84c, rgba(201,168,76,0.2), transparent);
          transform:scaleX(0); transform-origin:left; transition:transform 0.4s ease;
        }
        .gn-exp-card:hover { border-color:rgba(201,168,76,0.2); background:rgba(201,168,76,0.025); }
        .gn-exp-card:hover::before { transform:scaleX(1); }
        .gn-exp-card:hover .gn-exp-num { color:rgba(201,168,76,0.25); text-shadow:0 0 30px rgba(201,168,76,0.3); }
        .gn-exp-num { font-size:5rem; font-weight:900; color:rgba(201,168,76,0.07); line-height:1; letter-spacing:-0.05em; transition:all 0.3s; position:absolute; top:1.5rem; right:1.5rem; font-variant-numeric:tabular-nums; }
        .gn-exp-resp-item { display:flex; align-items:flex-start; gap:12px; font-size:13px; color:rgba(245,238,217,0.45); line-height:1.65; }
        .gn-exp-resp-item::before { content:'—'; color:rgba(201,168,76,0.4); flex-shrink:0; font-size:12px; margin-top:2px; }
      `}</style>

      <div style={{ position:"absolute", top:"2rem", right:"2rem", fontSize:"220px", fontWeight:900, lineHeight:1, color:"transparent", WebkitTextStrokeWidth:"1px", WebkitTextStrokeColor:"rgba(201,168,76,0.04)", pointerEvents:"none", userSelect:"none" }}>03</div>
      <div style={{ position:"absolute", top:"-100px", left:"-80px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1280px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.45em", color:"rgba(201,168,76,0.5)", textTransform:"uppercase" }}>03</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3.5rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#f5eed9", margin:0, textTransform:"uppercase" }}>Experience</h2>
          <div style={{ width:"60px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)", marginTop:"1rem" }} />
        </motion.div>

        <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
          {items.map((exp, i) => (
            <motion.div key={i} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i * 0.07 }}>
              <div className="gn-exp-card">
                <div className="gn-exp-num">{String(i+1).padStart(2,"0")}</div>

                <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-start", justifyContent:"space-between", gap:"1rem", marginBottom:"1rem" }}>
                  <div>
                    <h3 style={{ fontSize:"19px", fontWeight:900, color:"#f5eed9", margin:"0 0 6px", letterSpacing:"-0.03em", textTransform:"uppercase" }}>
                      {exp.role || exp.title || exp.position}
                    </h3>
                    <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                      <FaBriefcase style={{ color:"rgba(201,168,76,0.5)", fontSize:"11px" }} />
                      <span style={{ fontSize:"13px", fontWeight:600, color:"rgba(201,168,76,0.75)" }}>
                        {exp.company || exp.organization}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.2em", padding:"6px 16px", border:"1px solid rgba(201,168,76,0.2)", color:"rgba(201,168,76,0.7)", background:"rgba(201,168,76,0.04)", textTransform:"uppercase" }}>
                    {exp.duration || exp.period || exp.startDate}
                  </span>
                </div>

                {exp.description && (
                  <p style={{ fontSize:"14px", color:"rgba(245,238,217,0.5)", lineHeight:1.75, margin:"0 0 1rem", maxWidth:"680px" }}>
                    {exp.description}
                  </p>
                )}

                {exp.responsibilities && Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0 && (
                  <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
                    {exp.responsibilities.map((item, j) => (
                      <div key={j} className="gn-exp-resp-item">{item}</div>
                    ))}
                  </div>
                )}

                {exp.tech && Array.isArray(exp.tech) && exp.tech.length > 0 && (
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginTop:"1rem", paddingTop:"1rem", borderTop:"1px solid rgba(201,168,76,0.07)" }}>
                    {exp.tech.map((t, j) => (
                      <span key={j} style={{ fontSize:"10px", fontWeight:700, padding:"3px 10px", border:"1px solid rgba(201,168,76,0.15)", color:"rgba(201,168,76,0.6)", letterSpacing:"0.08em", background:"rgba(201,168,76,0.03)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
