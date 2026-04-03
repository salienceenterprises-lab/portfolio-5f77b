"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";

export default function PortfolioContact({ data }) {
  const [form, setForm]       = useState({ name:"", email:"", message:"" });
  const [status, setStatus]   = useState("idle");
  const [focused, setFocused] = useState(null);

  const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method:"POST",
        headers:{ "Content-Type":"application/json", Accept:"application/json" },
        body:JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio contact from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          botcheck: "",
        }),
      });
      const r = await res.json();
      setStatus(r.success ? "sent" : "error");
    } catch { setStatus("error"); }
  };

  const inputStyle = (field) => ({
    width:"100%", background:"transparent", border:"none",
    borderBottom:`1px solid ${focused===field ? "#c9a84c" : "rgba(201,168,76,0.15)"}`,
    color:"#f5eed9", fontSize:"14px", padding:"12px 0", outline:"none",
    transition:"border-color 0.25s",
    boxShadow: focused===field ? "0 2px 0 rgba(201,168,76,0.2)" : "none",
    fontFamily:"inherit",
  });

  return (
    <section id="contact" style={{ background:"#07060a", padding:"8rem 2rem", position:"relative", overflow:"hidden", borderTop:"1px solid rgba(201,168,76,0.06)" }}>
      <style>{`
        .gn-submit-btn {
          display:inline-flex; align-items:center; gap:10px; cursor:pointer;
          padding:14px 40px; border:1px solid #c9a84c;
          background:rgba(201,168,76,0.06); color:#c9a84c;
          font-size:11px; font-weight:800; letter-spacing:0.3em; text-transform:uppercase;
          transition:all 0.25s ease;
          clip-path:polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }
        .gn-submit-btn:hover:not(:disabled) { background:rgba(201,168,76,0.15); color:#f0cc6e; box-shadow:0 0 30px rgba(201,168,76,0.15); }
        .gn-submit-btn:disabled { opacity:0.5; cursor:not-allowed; }
        .gn-social-btn { width:44px; height:44px; border:1px solid rgba(201,168,76,0.15); background:rgba(201,168,76,0.04); display:flex; align-items:center; justify-content:center; color:rgba(201,168,76,0.5); text-decoration:none; transition:all 0.2s; }
        .gn-social-btn:hover { border-color:rgba(201,168,76,0.4); background:rgba(201,168,76,0.1); color:#c9a84c; box-shadow:0 0 16px rgba(201,168,76,0.15); }
        ::placeholder { color:rgba(245,238,217,0.18); }
        textarea { resize:none; }
      `}</style>

      <div style={{ position:"absolute", top:"2rem", right:"2rem", fontSize:"220px", fontWeight:900, lineHeight:1, color:"transparent", WebkitTextStrokeWidth:"1px", WebkitTextStrokeColor:"rgba(201,168,76,0.04)", pointerEvents:"none", userSelect:"none" }}>07</div>
      <div style={{ position:"absolute", top:"-80px", right:"-80px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1280px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.45em", color:"rgba(201,168,76,0.5)", textTransform:"uppercase" }}>07</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3.5rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#f5eed9", margin:"0 0 1rem", textTransform:"uppercase" }}>Contact</h2>
          <div style={{ width:"60px", height:"1px", background:"linear-gradient(90deg, #c9a84c, transparent)", marginBottom:"1.5rem" }} />
          <p style={{ fontSize:"15px", color:"rgba(245,238,217,0.4)", maxWidth:"480px", lineHeight:1.75, margin:0 }}>
            Have a project in mind or want to collaborate? Send a message.
          </p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"start" }} className="block md:grid">
          {/* Form */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.1 }}>
            {status === "sent" ? (
              <div style={{ padding:"3rem", border:"1px solid rgba(201,168,76,0.2)", background:"rgba(201,168,76,0.03)", textAlign:"center" }}>
                <div style={{ fontSize:"3rem", marginBottom:"1rem" }}>✦</div>
                <h3 style={{ fontSize:"20px", fontWeight:900, color:"#c9a84c", letterSpacing:"-0.02em", textTransform:"uppercase", marginBottom:"0.5rem" }}>Message Sent</h3>
                <p style={{ color:"rgba(245,238,217,0.4)", fontSize:"14px" }}>Thank you. I'll respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"2.5rem" }}>
                <div>
                  <label style={{ fontSize:"9px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(201,168,76,0.5)", textTransform:"uppercase", display:"flex", alignItems:"center", gap:"8px", marginBottom:"10px" }}>
                    <FaUser style={{ fontSize:"9px" }} /> Name
                  </label>
                  <input type="text" placeholder="Your name" required value={form.name}
                    onChange={(e)=>setForm({...form,name:e.target.value})}
                    onFocus={()=>setFocused("name")} onBlur={()=>setFocused(null)}
                    style={inputStyle("name")} />
                </div>
                <div>
                  <label style={{ fontSize:"9px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(201,168,76,0.5)", textTransform:"uppercase", display:"flex", alignItems:"center", gap:"8px", marginBottom:"10px" }}>
                    <FaEnvelope style={{ fontSize:"9px" }} /> Email
                  </label>
                  <input type="email" placeholder="your@email.com" required value={form.email}
                    onChange={(e)=>setForm({...form,email:e.target.value})}
                    onFocus={()=>setFocused("email")} onBlur={()=>setFocused(null)}
                    style={inputStyle("email")} />
                </div>
                <div>
                  <label style={{ fontSize:"9px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(201,168,76,0.5)", textTransform:"uppercase", display:"flex", alignItems:"center", gap:"8px", marginBottom:"10px" }}>
                    ✦ Message
                  </label>
                  <textarea rows={5} placeholder="Your message..." required value={form.message}
                    onChange={(e)=>setForm({...form,message:e.target.value})}
                    onFocus={()=>setFocused("message")} onBlur={()=>setFocused(null)}
                    style={{ ...inputStyle("message"), display:"block" }} />
                </div>
                {status==="error" && <p style={{ fontSize:"12px", color:"rgba(248,113,113,0.8)" }}>Something went wrong. Please try again.</p>}
                <div>
                  <button type="submit" disabled={status==="sending"} className="gn-submit-btn">
                    {status==="sending" ? "Sending..." : <><FaPaperPlane style={{ fontSize:"11px" }} /> Send Message</>}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.25 }}>
            <div style={{ borderTop:"1px solid rgba(201,168,76,0.15)", paddingTop:"2.5rem" }}>
              {data?.email && (
                <div style={{ marginBottom:"2rem" }}>
                  <p style={{ fontSize:"9px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(201,168,76,0.4)", textTransform:"uppercase", marginBottom:"8px" }}>Email</p>
                  <a href={`mailto:${data.email}`} style={{ fontSize:"15px", color:"#c9a84c", textDecoration:"none", fontWeight:600 }}>{data.email}</a>
                </div>
              )}
              {data?.location && (
                <div style={{ marginBottom:"2rem" }}>
                  <p style={{ fontSize:"9px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(201,168,76,0.4)", textTransform:"uppercase", marginBottom:"8px" }}>Location</p>
                  <p style={{ fontSize:"15px", color:"rgba(245,238,217,0.6)", margin:0 }}>{data.location}</p>
                </div>
              )}
              <div style={{ display:"flex", gap:"10px", marginTop:"2rem" }}>
                {data?.github && (
                  <a href={data.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="gn-social-btn">
                    <FaGithub size={17} />
                  </a>
                )}
                {data?.linkedin && (
                  <a href={data.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="gn-social-btn">
                    <FaLinkedin size={17} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
