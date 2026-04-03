"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function PortfolioFooter({ data }) {
  const year = new Date().getFullYear();

  const socials = [
    { icon:<FaGithub size={15}/>,   href:data?.github,   label:"GitHub" },
    { icon:<FaLinkedin size={15}/>, href:data?.linkedin, label:"LinkedIn" },
    { icon:<FaEnvelope size={15}/>, href:data?.email ? `mailto:${data.email}` : null, label:"Email" },
    { icon:<FaGlobe size={15}/>,    href:data?.website,  label:"Website" },
  ].filter((s) => s.href);

  const navLinks = ["About","Experience","Projects","Skills","Contact"];

  return (
    <footer style={{ background:"#07060a", padding:"3.5rem 2rem 2rem", position:"relative", overflow:"hidden", borderTop:"1px solid rgba(201,168,76,0.1)" }}>
      <style>{`
        .gn-footer-link { color:rgba(245,238,217,0.25); text-decoration:none; font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; transition:color 0.2s; }
        .gn-footer-link:hover { color:#c9a84c; }
        .gn-footer-social { width:36px; height:36px; border:1px solid rgba(201,168,76,0.12); background:rgba(201,168,76,0.03); display:flex; align-items:center; justify-content:center; color:rgba(201,168,76,0.4); text-decoration:none; transition:all 0.2s; }
        .gn-footer-social:hover { border-color:rgba(201,168,76,0.4); color:#c9a84c; background:rgba(201,168,76,0.08); }
      `}</style>

      {/* Gold top accent */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:"1px", background:"linear-gradient(90deg, transparent, rgba(201,168,76,0.5), rgba(240,204,110,0.3), transparent)" }} />

      <div style={{ maxWidth:"1280px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-start", justifyContent:"space-between", gap:"2.5rem", marginBottom:"3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"baseline", gap:"2px", marginBottom:"6px" }}>
              <span style={{ fontWeight:900, fontSize:"18px", letterSpacing:"-0.03em", color:"#f5eed9", textTransform:"uppercase" }}>
                {data?.name?.split(" ")[0] || "Portfolio"}
              </span>
              <span style={{ color:"#c9a84c", fontSize:"22px", fontWeight:300, lineHeight:1 }}>.</span>
            </div>
            {data?.title && (
              <p style={{ fontSize:"10px", fontWeight:600, letterSpacing:"0.2em", color:"rgba(201,168,76,0.4)", margin:0, textTransform:"uppercase" }}>{data.title}</p>
            )}
          </div>

          {/* Nav */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:"1.5rem" }}>
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="gn-footer-link">{l}</a>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display:"flex", gap:"8px" }}>
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="gn-footer-social">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Gold hairline divider */}
        <div style={{ height:"1px", background:"linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)", marginBottom:"1.5rem" }} />

        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1rem" }}>
          <p style={{ fontSize:"10px", color:"rgba(245,238,217,0.18)", margin:0, letterSpacing:"0.1em" }}>
            © {year} {data?.name}. All rights reserved.
          </p>
          <p style={{ fontSize:"10px", color:"rgba(245,238,217,0.18)", margin:0, letterSpacing:"0.1em" }}>
            Built with{" "}
            <span style={{ color:"#c9a84c", fontWeight:700 }}>Salience</span>
            {" "}✦
          </p>
        </div>
      </div>
    </footer>
  );
}
