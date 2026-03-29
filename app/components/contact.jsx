"use client";
import React, { useState } from "react";
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
        body: JSON.stringify({
          ...formData,
          access_key: data.web3forms_key,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
          botcheck: "",
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactLinks = [
    { show: data?.email,    icon: FaEnvelope,  label: "Email",    value: data?.email,    href: `mailto:${data?.email}`, color: "text-blue-400",   border: "border-blue-500/25",  bg: "bg-blue-500/[0.06]"  },
    { show: data?.github,   icon: FaGithub,    label: "GitHub",   value: "View Profile", href: data?.github,            color: "text-white/60",   border: "border-white/10",     bg: "bg-white/[0.03]"     },
    { show: data?.linkedin, icon: FaLinkedin,  label: "LinkedIn", value: "Connect",      href: data?.linkedin,          color: "text-blue-300",   border: "border-blue-400/20",  bg: "bg-blue-400/[0.06]"  },
  ].filter((l) => l.show);

  if (!hasForm && contactLinks.length === 0) return null;

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden bg-[#080d18]">

      {/* Electric ambient */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.09, 0.04] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Electric pulse lines from bottom */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scaleY: [0, 1], opacity: [0.2, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeOut", transformOrigin: "bottom" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-t from-blue-400/40 to-transparent pointer-events-none"
          style={{ height: `${180 + i * 80}px`, marginLeft: `${(i - 1) * 60}px` }}
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="text-blue-400/40 font-black text-xs tracking-widest select-none">{"//"}</span>
          <span className="text-[10px] font-black tracking-[0.35em] uppercase text-blue-400/80">07 — Signal</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent max-w-[80px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-6xl font-black tracking-tighter text-white mb-4 uppercase"
        >
          Contact<span className="text-blue-400">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/30 text-sm mb-16 max-w-sm"
        >
          {hasForm ? "Got a mission? Send the signal." : "Open comms — find me across the web."}
        </motion.p>

        <div className={`grid gap-10 ${hasForm ? "grid-cols-1 lg:grid-cols-5" : "max-w-md"}`}>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: hasForm ? -30 : 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`${hasForm ? "lg:col-span-2" : ""} space-y-3`}
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`group flex items-center gap-4 p-4 ${link.bg} border ${link.border} hover:border-blue-400/50 hover:shadow-[0_4px_24px_rgba(59,130,246,0.15)] transition-all duration-300`}
              >
                <div className={`w-11 h-11 ${link.bg} border ${link.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className={`w-4 h-4 ${link.color}`} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-0.5">{link.label}</p>
                  <p className="text-sm text-white/50 group-hover:text-white/90 transition-colors duration-300">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          {hasForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["name", "email"].map((field) => (
                    <div key={field} className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 ml-0.5">{field}</label>
                      <input
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        placeholder={field === "email" ? "your@email.com" : "Your name"}
                        className="w-full px-4 py-3 bg-blue-500/[0.04] border border-blue-500/20 text-sm text-white placeholder-white/15 focus:outline-none focus:border-blue-400/60 focus:bg-blue-500/[0.07] transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 ml-0.5">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe the mission..."
                    className="w-full px-4 py-3 bg-blue-500/[0.04] border border-blue-500/20 text-sm text-white placeholder-white/15 focus:outline-none focus:border-blue-400/60 focus:bg-blue-500/[0.07] transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59,130,246,0.35)" }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center gap-3 px-8 py-3.5 text-sm font-black uppercase tracking-[0.15em] transition-all duration-300 ${
                    status === "success"
                      ? "bg-emerald-600 text-white"
                      : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {status === "loading" ? (
                      <motion.span key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                        <FaCircleNotch className="w-4 h-4 animate-spin" /> Sending...
                      </motion.span>
                    ) : status === "success" ? (
                      <motion.span key="s" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-2">
                        <FaCheckCircle className="w-4 h-4" /> Transmitted
                      </motion.span>
                    ) : (
                      <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                        Send Signal <FaPaperPlane className="w-3.5 h-3.5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                {status === "error" && (
                  <p className="text-xs text-red-400 mt-2">Transmission failed. Please try again.</p>
                )}
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
