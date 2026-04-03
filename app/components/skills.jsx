"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PortfolioSkills({ data }) {
  const skills = data?.skills;
  if (!skills || !Array.isArray(skills) || skills.length === 0) return null;

  const categories = data?.skillCategories;
  const hasCategories = categories && typeof categories === "object" && Object.keys(categories).length > 0;

  return (
    <section id="skills" style={{ background:"#07060a", padding:"8rem 2rem", position:"relative", overflow:"hidden", borderTop:"1px solid rgba(201,168,76,0.06)" }}>
      <style>{`
        .gn-skill-pill {
          display:inline-flex; align-items:center; gap:8px;
          padding:9px 20px;
          border:1px solid rgba(201,168,76,0.14);
          color:rgba(245,238,217,0.55);
          font-size:12px; font-weight:600; letter-spacing:0.08em;
          background:rgba(201,168,76,0.02);
          transition:all 0.25s ease; cursor:default;
          clip-path:polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
        }
        .gn-skill-pill::before { content:''; width:5px; height:5px; background:rgba(201,168,76,0.35); flex-shrink:0; transform:rotate(45deg); transition:background 0.2s; }
        .gn-skill-pill:hover { border-color:rgba(201,168,76,0.4); color:#c9a84c; background:rgba(201,168,76,0.07); }
        .gn-skill-pill:hover::before { background:#c9a84c; }
        .gn-cat-row { padding:2rem 0; border-bottom:1px solid rgba(201,168,76,0.07); }
        .gn-cat-row:last-child { border-bottom:none; }
      `}</style>

      <div style={{ position:"absolute", top:"2rem", right:"2rem", fontSize:"220px", fontWeight:900, lineHeight:1, color:"transparent", WebkitTextStrokeWidth:"1px", WebkitTextStrokeColor:"rgba(201,168,76,0.04)", pointerEvents:"none", userSelect:"none" }}>05</div>

      <div style={{ maxWidth:"1280px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.45em", color:"rgba(201,168,76,0.5)", textTransform:"uppercase" }}>05</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3.5rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#f5eed9", margin:0, textTransform:"uppercase" }}>Skills</h2>
          <div style={{ width:"60px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)", marginTop:"1rem" }} />
        </motion.div>

        {hasCategories ? (
          <div>
            {Object.entries(categories).map(([cat, catSkills], ci) => (
              <motion.div key={cat} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:ci*0.07 }}
                className="gn-cat-row">
                <div style={{ display:"grid", gridTemplateColumns:"180px 1fr", gap:"2rem", alignItems:"start" }}>
                  <div>
                    <span style={{ fontSize:"10px", fontWeight:800, letterSpacing:"0.35em", color:"rgba(201,168,76,0.5)", textTransform:"uppercase" }}>{cat}</span>
                    <div style={{ width:"24px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)", marginTop:"8px" }} />
                  </div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
                    {(Array.isArray(catSkills) ? catSkills : []).map((skill, i) => (
                      <span key={i} className="gn-skill-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            {/* Full-width gold divider */}
            <div style={{ height:"1px", background:"linear-gradient(90deg, transparent, rgba(201,168,76,0.3), rgba(201,168,76,0.1), transparent)", marginBottom:"3rem" }} />
            <div style={{ display:"flex", flexWrap:"wrap", gap:"10px" }}>
              {skills.map((skill, i) => (
                <span key={i} className="gn-skill-pill"
                  style={{ fontSize: i % 7 === 0 ? "13px" : "11px" }}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
