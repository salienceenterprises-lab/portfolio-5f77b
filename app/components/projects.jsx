"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioProjects({ data }) {
  const items = data?.projects;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="projects" style={{ background:"#07060a", padding:"8rem 2rem", position:"relative", overflow:"hidden", borderTop:"1px solid rgba(201,168,76,0.06)" }}>
      <style>{`
        .gn-proj-card {
          position:relative; padding:2.5rem;
          border-top:1px solid rgba(201,168,76,0.12);
          border-left:1px solid transparent;
          border-right:1px solid transparent;
          border-bottom:1px solid rgba(201,168,76,0.06);
          display:flex; flex-direction:column; height:100%;
          transition:all 0.35s ease; overflow:hidden; cursor:default;
        }
        .gn-proj-card::after {
          content:'';
          position:absolute; left:0; top:0; bottom:0; width:1px;
          background:linear-gradient(180deg, #c9a84c, rgba(201,168,76,0.1), transparent);
          transform:scaleY(0); transform-origin:top; transition:transform 0.4s ease;
        }
        .gn-proj-card:hover { background:rgba(201,168,76,0.025); border-top-color:rgba(201,168,76,0.4); box-shadow:0 0 60px rgba(201,168,76,0.06); }
        .gn-proj-card:hover::after { transform:scaleY(1); }
        .gn-proj-link { color:rgba(245,238,217,0.3); text-decoration:none; transition:color 0.2s; }
        .gn-proj-link:hover { color:#c9a84c; }
        .gn-tech-tag { font-size:10px; font-weight:700; padding:3px 10px; border:1px solid rgba(201,168,76,0.15); color:rgba(201,168,76,0.6); background:rgba(201,168,76,0.03); letter-spacing:0.08em; }
      `}</style>

      <div style={{ position:"absolute", top:"2rem", right:"2rem", fontSize:"220px", fontWeight:900, lineHeight:1, color:"transparent", WebkitTextStrokeWidth:"1px", WebkitTextStrokeColor:"rgba(201,168,76,0.04)", pointerEvents:"none", userSelect:"none" }}>04</div>

      <div style={{ maxWidth:"1280px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.45em", color:"rgba(201,168,76,0.5)", textTransform:"uppercase" }}>04</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3.5rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#f5eed9", margin:0, textTransform:"uppercase" }}>Projects</h2>
          <div style={{ width:"60px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)", marginTop:"1rem" }} />
        </motion.div>

        {/* Gap-px editorial grid — container is the border color, children are bg */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(340px,1fr))", gap:"1px", background:"rgba(201,168,76,0.06)" }}>
          {items.map((proj, i) => (
            <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.07 }}
              style={{ background:"#07060a", height:"100%" }}>
              <div className="gn-proj-card">
                {/* Header row */}
                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"1.5rem", gap:"1rem" }}>
                  {/* Roman numeral index */}
                  <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.3em", color:"rgba(201,168,76,0.3)" }}>
                    {["I","II","III","IV","V","VI","VII","VIII","IX","X"][i] || String(i+1).padStart(2,"0")}
                  </span>
                  <div style={{ display:"flex", gap:"12px" }}>
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="gn-proj-link" aria-label="GitHub">
                        <FaGithub size={16} />
                      </a>
                    )}
                    {(proj.link || proj.demo) && (
                      <a href={proj.link || proj.demo} target="_blank" rel="noopener noreferrer" className="gn-proj-link" aria-label="Live">
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize:"18px", fontWeight:900, color:"#f5eed9", margin:"0 0 10px", letterSpacing:"-0.03em", textTransform:"uppercase", lineHeight:1.2 }}>
                  {proj.title || "Untitled"}
                </h3>
                <p style={{ fontSize:"13px", color:"rgba(245,238,217,0.45)", lineHeight:1.7, margin:0, flex:1 }}>
                  {proj.description}
                </p>

                {(proj.tech || proj.stack) && Array.isArray(proj.tech || proj.stack) && (
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginTop:"1.5rem", paddingTop:"1.25rem", borderTop:"1px solid rgba(201,168,76,0.07)" }}>
                    {(proj.tech || proj.stack).map((t, j) => (
                      <span key={j} className="gn-tech-tag">{t}</span>
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
