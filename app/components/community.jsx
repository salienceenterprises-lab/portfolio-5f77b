"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioCommunity({ data }) {
  const items = data?.community;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="community" style={{ background:"#07060a", padding:"8rem 2rem", position:"relative", overflow:"hidden", borderTop:"1px solid rgba(201,168,76,0.06)" }}>
      <style>{`
        .gn-com-card {
          position:relative; padding:2.5rem;
          border:1px solid rgba(201,168,76,0.08);
          transition:all 0.35s ease; cursor:default; overflow:hidden;
        }
        .gn-com-card::before {
          content:'';
          position:absolute; bottom:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg, transparent, #c9a84c, rgba(201,168,76,0.3), transparent);
          transform:scaleX(0); transform-origin:left; transition:transform 0.4s ease;
        }
        .gn-com-card:hover { border-color:rgba(201,168,76,0.2); background:rgba(201,168,76,0.02); }
        .gn-com-card:hover::before { transform:scaleX(1); }
        .gn-com-link { display:inline-flex; align-items:center; gap:6px; color:rgba(201,168,76,0.6); font-size:11px; font-weight:700; letter-spacing:0.15em; text-decoration:none; text-transform:uppercase; transition:color 0.2s; }
        .gn-com-link:hover { color:#c9a84c; }
      `}</style>

      <div style={{ position:"absolute", top:"2rem", right:"2rem", fontSize:"220px", fontWeight:900, lineHeight:1, color:"transparent", WebkitTextStrokeWidth:"1px", WebkitTextStrokeColor:"rgba(201,168,76,0.04)", pointerEvents:"none", userSelect:"none" }}>06</div>
      <div style={{ position:"absolute", bottom:"-100px", left:"-80px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1280px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.45em", color:"rgba(201,168,76,0.5)", textTransform:"uppercase" }}>06</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3.5rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#f5eed9", margin:0, textTransform:"uppercase" }}>Impact</h2>
          <div style={{ width:"60px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)", marginTop:"1rem" }} />
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(320px,1fr))", gap:"1.25rem" }}>
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.07 }}>
              <div className="gn-com-card">
                {/* Role/type badge */}
                <div style={{ marginBottom:"1rem", display:"flex", alignItems:"center", gap:"10px" }}>
                  <div style={{ width:"20px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)" }} />
                  <span style={{ fontSize:"9px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(201,168,76,0.6)", textTransform:"uppercase" }}>
                    {item.role || item.type || "Contributor"}
                  </span>
                </div>

                <h3 style={{ fontSize:"16px", fontWeight:900, color:"#f5eed9", margin:"0 0 10px", letterSpacing:"-0.02em", textTransform:"uppercase" }}>
                  {item.title || item.name || item.organization}
                </h3>

                {item.description && (
                  <p style={{ fontSize:"13px", color:"rgba(245,238,217,0.45)", lineHeight:1.65, margin:"0 0 1.25rem" }}>
                    {item.description}
                  </p>
                )}

                {item.year && (
                  <p style={{ fontSize:"10px", letterSpacing:"0.2em", color:"rgba(245,238,217,0.2)", marginBottom:"0.75rem" }}>{item.year}</p>
                )}

                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="gn-com-link">
                    View <FaExternalLinkAlt style={{ fontSize:"9px" }} />
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
