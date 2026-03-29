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
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, access_key: data.web3forms_key, subject: `New Portfolio Message from ${formData.name}`, from_name: "Portfolio Contact Form", botcheck: "" }),
      });
      const r = await res.json();
      if (r.success) { setStatus("success"); setFormData({ name: "", email: "", message: "" }); setTimeout(() => setStatus("idle"), 5000); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const contactLinks = [
    { show: data?.email, icon: FaEnvelope, label: "Email", value: data?.email, href: `mailto:${data?.email}`, color: "text-[#FF0000]", bg: "bg-[#950101]/20" },
    { show: data?.github, icon: FaGithub, label: "GitHub", value: "View Profile", href: data?.github, color: "text-white/70", bg: "bg-white/10" },
    { show: data?.linkedin, icon: FaLinkedin, label: "LinkedIn", value: "Connect", href: data?.linkedin, color: "text-red-400", bg: "bg-[#3D0000]/40" },
  ].filter(l => l.show);

  if (!hasForm && contactLinks.length === 0) return null;

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden bg-[linear-gradient(180deg,#000000_0%,#140707_100%)]">
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }} transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF0000]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-gradient-to-r from-[#FF0000] to-transparent" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#FF0000]">Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Get in Touch</h2>
          <p className="text-white/40 max-w-lg mb-14">
            {hasForm ? "Have a project in mind or want to chat? Drop me a message." : "Let's connect across the web."}
          </p>
        </motion.div>

        <div className={`grid gap-10 ${hasForm ? "grid-cols-1 lg:grid-cols-5" : "max-w-md mx-auto"}`}>
          <motion.div initial={{ opacity: 0, x: hasForm ? -30 : 0 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }} className={`${hasForm ? "lg:col-span-2" : ""} space-y-3`}>
            {contactLinks.map((l, i) => (
              <motion.a key={i} href={l.href} target="_blank" rel="noopener noreferrer" whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="group flex items-center gap-4 p-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl ${l.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <l.icon className={`w-4 h-4 ${l.color}`} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">{l.label}</p>
                  <p className="text-sm text-white/70 group-hover:text-white transition-colors">{l.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {hasForm && (
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["name", "email"].map(f => (
                    <div key={f} className="space-y-2">
                      <label className="text-xs text-white/40 ml-1 capitalize">{f}</label>
                      <input name={f} type={f === "email" ? "email" : "text"} value={formData[f]} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-sm text-white focus:outline-none focus:border-[#FF0000]/50 focus:bg-white/[0.06] transition-all" />
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/40 ml-1">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={4}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-sm text-white focus:outline-none focus:border-[#FF0000]/50 focus:bg-white/[0.06] transition-all resize-none" />
                </div>

                <motion.button type="submit" disabled={status === "loading" || status === "success"} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold transition-all ${status === "success" ? "bg-green-500 text-white" : "bg-[#950101] hover:bg-red-600 text-white shadow-lg shadow-red-900/30"}`}>
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
                        Send Message <FaPaperPlane className="w-3.5 h-3.5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
                {status === "error" && <p className="text-xs text-red-400">Something went wrong. Please try again.</p>}
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
