"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaGithub, FaLinkedin, FaCheckCircle, FaCircleNotch } from "react-icons/fa";

export default function PortfolioContact({ data }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const hasForm = !!data?.web3forms_key;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hasForm) return;
    setStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, access_key: data.web3forms_key, subject: `New Portfolio Message from ${formData.name}`, from_name: "Portfolio Contact Form", botcheck: "" }),
      });
      const result = await response.json();
      if (result.success) { setStatus("success"); setFormData({ name: "", email: "", message: "" }); setTimeout(() => setStatus("idle"), 5000); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const contactLinks = [
    { show: data?.email, icon: FaEnvelope, label: "Email", value: data?.email, href: `mailto:${data?.email}`, color: "#e040fb" },
    { show: data?.github, icon: FaGithub, label: "GitHub", value: "View Profile", href: data?.github, color: "rgba(255,255,255,0.7)" },
    { show: data?.linkedin, icon: FaLinkedin, label: "LinkedIn", value: "Connect", href: data?.linkedin, color: "#ffea00" },
  ].filter(l => l.show);

  if (!hasForm && contactLinks.length === 0) return null;

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden" style={{ background: "#100015" }}>

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #e040fb 0px, #e040fb 1px, transparent 1px, transparent 40px)" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(224,64,251,0.12), rgba(255,234,0,0.06), transparent 70%)" }} />

      {/* Rising pulses */}
      {[20, 50, 80].map((left, i) => (
        <motion.div key={i}
          animate={{ y: ["100%", "-100%"], opacity: [0, 0.4, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: i * 1.5, ease: "linear" }}
          className="absolute bottom-0 w-px h-32 pointer-events-none"
          style={{ left: `${left}%`, background: `linear-gradient(to top, ${i % 2 === 0 ? "#e040fb" : "#ffea00"}, transparent)` }} />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className={`flex items-center gap-3 mb-3 ${!hasForm ? "justify-center" : ""}`}>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "#e040fb" }}>07 /</span>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/40">Contact</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className={`text-4xl sm:text-5xl font-black tracking-tighter text-white mb-2 uppercase leading-none ${!hasForm ? "text-center" : ""}`}>
          Get In Touch
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 120 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`h-0.5 mb-14 ${!hasForm ? "mx-auto" : ""}`}
          style={{ background: "linear-gradient(90deg, #e040fb, #ffea00, transparent)" }} />

        <div className={`grid gap-10 ${hasForm ? "grid-cols-1 lg:grid-cols-5" : "grid-cols-1 max-w-md mx-auto"}`}>

          {/* Links */}
          <motion.div initial={{ opacity: 0, x: hasForm ? -40 : 0 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`${hasForm ? "lg:col-span-2" : ""} space-y-3`}>
            {contactLinks.map((link, i) => (
              <motion.a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="group flex items-center gap-4 p-4 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(224,64,251,0.3)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
                <div className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(224,64,251,0.08)", border: `1px solid rgba(224,64,251,0.2)` }}>
                  <link.icon className="w-5 h-5" style={{ color: link.color }} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-0.5 text-white/25">{link.label}</p>
                  <p className="text-sm font-black text-white/70 group-hover:text-white transition-colors">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          {hasForm && (
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
              className="lg:col-span-3">
              <div className="p-8" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["name", "email"].map((field) => (
                      <div key={field}>
                        <label className="block text-[10px] font-black uppercase tracking-[0.35em] text-white/25 mb-2">
                          {field === "name" ? "Name" : "Email"}
                        </label>
                        <input name={field} type={field === "email" ? "email" : "text"}
                          value={formData[field]} onChange={handleChange} required
                          className="w-full px-4 py-3 text-sm text-white outline-none transition-all"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                          onFocus={(e) => { e.target.style.borderColor = "rgba(224,64,251,0.5)"; e.target.style.background = "rgba(224,64,251,0.04)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.04)"; }} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.35em] text-white/25 mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                      className="w-full px-4 py-3 text-sm text-white outline-none transition-all resize-none"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(224,64,251,0.5)"; e.target.style.background = "rgba(224,64,251,0.04)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.04)"; }} />
                  </div>
                  <motion.button type="submit"
                    disabled={status === "loading" || status === "success"}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(224,64,251,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-8 py-4 text-sm font-black uppercase tracking-wider text-black transition-all disabled:opacity-50"
                    style={{ background: status === "success" ? "#00e676" : "#e040fb" }}>
                    <AnimatePresence mode="wait">
                      {status === "loading" ? (
                        <motion.span key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                          <FaCircleNotch className="w-4 h-4 animate-spin" /> Sending...
                        </motion.span>
                      ) : status === "success" ? (
                        <motion.span key="s" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-2">
                          <FaCheckCircle className="w-4 h-4" /> Sent!
                        </motion.span>
                      ) : (
                        <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                          Send Message <FaPaperPlane className="w-4 h-4" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
