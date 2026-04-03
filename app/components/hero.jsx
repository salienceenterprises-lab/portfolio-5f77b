"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaDownload, FaArrowDown } from "react-icons/fa";

// ── Gilded Noir ─ bg:#07060a · gold:#c9a84c · hi-gold:#f0cc6e · cream:#f5eed9

export default function PortfolioHero({ data }) {
  const hasPhoto  = !!data?.heroImageBase64;
  const firstName = data?.name?.split(" ")[0] ?? "";
  const restName  = data?.name?.split(" ").slice(1).join(" ") ?? "";

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <section id="hero" style={{ position:"relative", minHeight:"100vh", background:"#07060a", display:"flex", alignItems:"center", overflow:"hidden" }}>
      <style>{`
        @keyframes gn-drift { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-20px);} }
        @keyframes gn-spin  { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
        @keyframes gn-orbit { from{transform:rotate(0deg) translateX(58px) rotate(0deg);} to{transform:rotate(360deg) translateX(58px) rotate(-360deg);} }
        @keyframes gn-bob   { 0%,100%{transform:translateY(0);} 50%{transform:translateY(7px);} }
        @keyframes gn-shimmer { 0%,100%{opacity:0.4;} 50%{opacity:1;} }
        @keyframes gn-line-grow { from{transform:scaleX(0);} to{transform:scaleX(1);} }
        .gn-cta-primary {
          display:inline-flex; align-items:center; gap:10px; cursor:pointer;
          padding:15px 36px; border:1px solid #c9a84c;
          background:rgba(201,168,76,0.08); color:#f0cc6e;
          font-size:11px; font-weight:800; letter-spacing:0.25em; text-transform:uppercase;
          text-decoration:none;
          transition:all 0.25s ease;
          clip-path:polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }
        .gn-cta-primary:hover { background:rgba(201,168,76,0.18); box-shadow:0 0 40px rgba(201,168,76,0.2); color:#fff8e7; }
        .gn-cta-secondary {
          display:inline-flex; align-items:center; gap:10px; cursor:pointer; background:none; border:none;
          color:rgba(245,238,217,0.4); font-size:11px; font-weight:700; letter-spacing:0.25em; text-transform:uppercase;
          transition:color 0.2s; padding:0;
        }
        .gn-cta-secondary:hover { color:rgba(245,238,217,0.8); }
        .gn-scroll-btn { background:none; border:none; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:6px; animation:gn-bob 2.5s ease-in-out infinite; }
      `}</style>

      {/* ── Gold-leaf geometric SVG background ── */}
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        {/* Fine grid lines */}
        <defs>
          <pattern id="gn-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(201,168,76,0.04)" strokeWidth="0.5"/>
          </pattern>
          <radialGradient id="gn-vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="transparent"/>
            <stop offset="100%" stopColor="#07060a" stopOpacity="0.9"/>
          </radialGradient>
          <linearGradient id="gn-diag" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c9a84c" stopOpacity="0"/>
            <stop offset="50%" stopColor="#c9a84c" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#gn-grid)"/>
        <rect width="100%" height="100%" fill="url(#gn-vignette)"/>
        {/* Diagonal gold accent line */}
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#gn-diag)" strokeWidth="1"/>
        {/* Corner decorative marks */}
        <g stroke="#c9a84c" strokeWidth="1" strokeOpacity="0.25" fill="none">
          <path d="M 60 20 L 20 20 L 20 60" style={{ animation:"gn-shimmer 4s ease-in-out infinite" }}/>
          <path d="M calc(100% - 60px) 20 L calc(100% - 20px) 20 L calc(100% - 20px) 60" style={{ animation:"gn-shimmer 4s 1s ease-in-out infinite" }}/>
          <path d="M 20 calc(100% - 60px) L 20 calc(100% - 20px) L 60 calc(100% - 20px)" style={{ animation:"gn-shimmer 4s 2s ease-in-out infinite" }}/>
          <path d="M calc(100% - 20px) calc(100% - 60px) L calc(100% - 20px) calc(100% - 20px) L calc(100% - 60px) calc(100% - 20px)" style={{ animation:"gn-shimmer 4s 3s ease-in-out infinite" }}/>
        </g>
      </svg>

      {/* Warm gold ambient glow */}
      <div style={{ position:"absolute", top:"20%", left:hasPhoto?"5%":"50%", transform:hasPhoto?"none":"translateX(-50%)", width:"600px", height:"600px", borderRadius:"50%", background:"radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)", animation:"gn-drift 10s ease-in-out infinite", pointerEvents:"none" }} />

      {/* ── Content ── */}
      <div style={{
        position:"relative", zIndex:10, maxWidth:"1280px", margin:"0 auto",
        padding:"100px 2rem 3rem",
        display:"grid",
        gridTemplateColumns: hasPhoto ? "1fr 380px" : "1fr",
        gap:"5rem", alignItems:"center", width:"100%",
      }}>
        {/* Left: editorial text block */}
        <div>
          {/* Overline */}
          <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.7 }} style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"2.5rem" }}>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)", animation:"gn-line-grow 1s ease forwards" }} />
            <span style={{ fontSize:"10px", fontWeight:800, letterSpacing:"0.5em", color:"rgba(201,168,76,0.7)", textTransform:"uppercase" }}>
              {data?.title || "Portfolio"}
            </span>
          </motion.div>

          {/* Massive editorial headline */}
          <div style={{ marginBottom:"2.5rem" }}>
            {/* First name — cream, massive */}
            <div style={{ overflow:"hidden" }}>
              <motion.div initial={{ y:80, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.8, delay:0.1 }}>
                <span style={{
                  display:"block",
                  fontSize:"clamp(4rem, 10vw, 9rem)",
                  fontWeight:900, lineHeight:0.85,
                  letterSpacing:"-0.05em",
                  color:"#f5eed9",
                  textTransform:"uppercase",
                }}>
                  {firstName}
                </span>
              </motion.div>
            </div>

            {/* Last name — outlined gold */}
            <div style={{ overflow:"hidden" }}>
              <motion.div initial={{ y:80, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.8, delay:0.25 }}>
                <span style={{
                  display:"block",
                  fontSize:"clamp(4rem, 10vw, 9rem)",
                  fontWeight:900, lineHeight:0.85,
                  letterSpacing:"-0.05em",
                  color:"transparent",
                  WebkitTextStrokeWidth:"1.5px",
                  WebkitTextStrokeColor:"#c9a84c",
                  textTransform:"uppercase",
                  filter:"drop-shadow(0 0 30px rgba(201,168,76,0.25))",
                }}>
                  {restName || firstName}
                </span>
              </motion.div>
            </div>

            {/* Thin gold rule */}
            <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:1, delay:0.5 }}
              style={{ height:"1px", background:"linear-gradient(90deg, #c9a84c, rgba(201,168,76,0.2), transparent)", marginTop:"1.5rem", transformOrigin:"left" }} />
          </div>

          {/* Tagline */}
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1, delay:0.6 }}
            style={{ fontSize:"clamp(1rem, 1.8vw, 1.2rem)", fontWeight:300, color:"rgba(245,238,217,0.5)", maxWidth:"520px", lineHeight:1.75, marginBottom:"3rem", letterSpacing:"-0.01em" }}>
            {data?.sloganHeroSection || data?.bio?.slice(0, 120)}
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.8 }}
            style={{ display:"flex", flexWrap:"wrap", gap:"1.5rem", alignItems:"center" }}>
            <button onClick={() => scrollTo("contact")} className="gn-cta-primary">
              <FaEnvelope style={{ fontSize:"11px" }} /> Get In Touch
            </button>
            {data?.resumeBase64 && (
              <a href="/resume.pdf" download="Resume.pdf" className="gn-cta-secondary">
                <FaDownload style={{ fontSize:"11px" }} /> Download Resume
              </a>
            )}
          </motion.div>
        </div>

        {/* Right: photo with gold frame */}
        {hasPhoto && (
          <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.9, delay:0.35 }}
            style={{ position:"relative", flexShrink:0 }}
            className="hidden md:block"
          >
            {/* Outer gold border frame (square/angular) */}
            <div style={{ position:"relative", width:"340px", height:"380px" }}>
              {/* Corner accents */}
              <div style={{ position:"absolute", top:"-8px", left:"-8px", width:"32px", height:"32px", borderTop:"2px solid #c9a84c", borderLeft:"2px solid #c9a84c", zIndex:3 }} />
              <div style={{ position:"absolute", top:"-8px", right:"-8px", width:"32px", height:"32px", borderTop:"2px solid #c9a84c", borderRight:"2px solid #c9a84c", zIndex:3 }} />
              <div style={{ position:"absolute", bottom:"-8px", left:"-8px", width:"32px", height:"32px", borderBottom:"2px solid #c9a84c", borderLeft:"2px solid #c9a84c", zIndex:3 }} />
              <div style={{ position:"absolute", bottom:"-8px", right:"-8px", width:"32px", height:"32px", borderBottom:"2px solid #c9a84c", borderRight:"2px solid #c9a84c", zIndex:3 }} />

              {/* Gold glow behind photo */}
              <div style={{ position:"absolute", inset:"-20px", background:"radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 70%)", borderRadius:"4px", animation:"gn-drift 8s ease-in-out infinite", zIndex:0 }} />

              {/* Spin ring */}
              <div style={{ position:"absolute", inset:0, border:"1px solid transparent", borderTopColor:"rgba(201,168,76,0.6)", borderRightColor:"rgba(201,168,76,0.2)", borderRadius:"2px", animation:"gn-spin 12s linear infinite", zIndex:1 }} />

              {/* Photo */}
              <img src={data.heroImageBase64} alt={data.name} style={{
                position:"absolute", inset:"8px",
                width:"calc(100% - 16px)", height:"calc(100% - 16px)",
                objectFit:"cover", display:"block", zIndex:2,
                filter:"sepia(0.1) contrast(1.05)",
              }} />

              {/* Gold foil overlay strip */}
              <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"60px", background:"linear-gradient(to top, rgba(7,6,10,0.8), transparent)", zIndex:3, display:"flex", alignItems:"flex-end", padding:"12px 14px" }}>
                <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.3em", color:"rgba(201,168,76,0.8)", textTransform:"uppercase" }}>{data.location || ""}</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}
        style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", zIndex:10 }}>
        <button className="gn-scroll-btn" onClick={() => scrollTo("about")}>
          <span style={{ fontSize:"9px", letterSpacing:"0.4em", color:"rgba(201,168,76,0.4)", textTransform:"uppercase", fontWeight:700 }}>Scroll</span>
          <FaArrowDown style={{ color:"rgba(201,168,76,0.4)", fontSize:"11px" }} />
        </button>
      </motion.div>

      {/* Bottom fade */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"100px", background:"linear-gradient(to top, #07060a, transparent)", pointerEvents:"none" }} />
    </section>
  );
}
