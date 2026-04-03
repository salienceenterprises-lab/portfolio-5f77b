"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function PortfolioAbout({ data }) {
  if (!data) return null;

  const infoRows = [
    { label:"Location", value:data.location,  icon:<FaMapMarkerAlt />, link:null },
    { label:"Email",    value:data.email,      icon:<FaEnvelope />,     link:`mailto:${data.email}` },
    { label:"GitHub",   value:data.github ? "@"+data.github.split("/").pop() : null, icon:<FaGithub />, link:data.github },
    { label:"LinkedIn", value:data.linkedin ? "LinkedIn" : null, icon:<FaLinkedin />, link:data.linkedin },
    { label:"Website",  value:data.website,    icon:<FaGlobe />,        link:data.website },
  ].filter((r) => r.value);

  return (
    <section id="about" style={{ background:"#07060a", padding:"8rem 2rem", position:"relative", overflow:"hidden" }}>
      <style>{`
        @keyframes gn-shimmer { 0%,100%{opacity:0.4;} 50%{opacity:1;} }
        .gn-info-row { display:flex; align-items:center; gap:16px; padding:14px 0; border-bottom:1px solid rgba(201,168,76,0.06); transition:all 0.2s; }
        .gn-info-row:last-child { border-bottom:none; }
        .gn-info-row:hover { padding-left:8px; }
        .gn-info-a { color:rgba(245,238,217,0.55); text-decoration:none; font-size:13px; transition:color 0.2s; }
        .gn-info-a:hover { color:#c9a84c; }
        .gn-skill-tag { display:inline-block; padding:5px 14px; font-size:11px; font-weight:600; letter-spacing:0.08em; border:1px solid rgba(201,168,76,0.2); color:rgba(201,168,76,0.7); background:rgba(201,168,76,0.04); transition:all 0.2s; cursor:default; }
        .gn-skill-tag:hover { border-color:rgba(201,168,76,0.5); color:#c9a84c; background:rgba(201,168,76,0.1); }
      `}</style>

      {/* Ghost number watermark */}
      <div style={{ position:"absolute", top:"2rem", right:"2rem", fontSize:"220px", fontWeight:900, lineHeight:1, color:"transparent", WebkitTextStrokeWidth:"1px", WebkitTextStrokeColor:"rgba(201,168,76,0.05)", pointerEvents:"none", userSelect:"none" }}>01</div>

      {/* Gold ambient */}
      <div style={{ position:"absolute", top:"-80px", left:"-80px", width:"350px", height:"350px", borderRadius:"50%", background:"radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1280px", margin:"0 auto", position:"relative", zIndex:1 }}>
        {/* Section header */}
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.45em", color:"rgba(201,168,76,0.5)", textTransform:"uppercase" }}>01</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3.5rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#f5eed9", margin:0, textTransform:"uppercase" }}>
            About
          </h2>
          {/* Gold underline */}
          <div style={{ width:"60px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)", marginTop:"1rem" }} />
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"3fr 2fr", gap:"5rem", alignItems:"start" }} className="block md:grid">
          {/* Bio */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}>
            {/* Editorial quote block */}
            <div style={{ borderLeft:"2px solid #c9a84c", paddingLeft:"2rem", marginBottom:"3rem", boxShadow:"-4px 0 20px rgba(201,168,76,0.1)" }}>
              <p style={{ fontSize:"clamp(1rem, 1.8vw, 1.2rem)", lineHeight:1.85, color:"rgba(245,238,217,0.7)", fontWeight:300, margin:0, letterSpacing:"-0.01em" }}>
                {data.bio}
              </p>
            </div>

            {/* Skills */}
            {data.skills?.length > 0 && (
              <div>
                <p style={{ fontSize:"9px", fontWeight:800, letterSpacing:"0.5em", color:"rgba(201,168,76,0.4)", textTransform:"uppercase", marginBottom:"1rem" }}>
                  Core Competencies
                </p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
                  {data.skills.slice(0, 10).map((skill, i) => (
                    <span key={i} className="gn-skill-tag">{skill}</span>
                  ))}
                  {data.skills.length > 10 && (
                    <a href="#skills" style={{ display:"inline-block", padding:"5px 14px", fontSize:"11px", color:"rgba(245,238,217,0.25)", border:"1px solid rgba(245,238,217,0.08)", textDecoration:"none" }}>
                      +{data.skills.length - 10}
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7, delay:0.25 }}>
            {/* Panel with top gold rule */}
            <div style={{ borderTop:"1px solid rgba(201,168,76,0.25)", paddingTop:"2rem" }}>
              <p style={{ fontSize:"9px", fontWeight:800, letterSpacing:"0.5em", color:"rgba(201,168,76,0.4)", textTransform:"uppercase", marginBottom:"1.5rem" }}>
                Quick Info
              </p>
              {infoRows.map((row, i) => (
                <div key={i} className="gn-info-row">
                  <span style={{ color:"rgba(201,168,76,0.5)", fontSize:"13px", flexShrink:0 }}>{row.icon}</span>
                  <span style={{ fontSize:"9px", fontWeight:800, letterSpacing:"0.3em", color:"rgba(245,238,217,0.25)", textTransform:"uppercase", width:"70px", flexShrink:0 }}>{row.label}</span>
                  {row.link ? (
                    <a href={row.link} target="_blank" rel="noopener noreferrer" className="gn-info-a">{row.value}</a>
                  ) : (
                    <span style={{ color:"rgba(245,238,217,0.55)", fontSize:"13px" }}>{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
