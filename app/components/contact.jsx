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
    { show: data?.email,    icon: FaEnvelope,  label: "Email",    value: data?.email,         href: `mailto:${data?.email}`,  color: "text-cyan-400",  border: "border-cyan-400/20", bg: "bg-cyan-400/[0.07]"  },
    { show: data?.github,   icon: FaGithub,    label: "GitHub",   value: "View Profile",       href: data?.github,            color: "text-white/60",  border: "border-white/10",    bg: "bg-white/[0.04]"     },
    { show: data?.linkedin, icon: FaLinkedin,  label: "LinkedIn", value: "Connect",            href: data?.linkedin,          color: "text-blue-400",  border: "border-blue-400/20", bg: "bg-blue-400/[0.07]"  },
  ].filter(l => l.show);

  if (!hasForm && contactLinks.length === 0) return null;

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden bg-[#040f1e]">

      {/* Ambient pulse glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.10, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      {/* Sonar rings at bottom-center */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [0.5, 3], opacity: [0.12, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: i * 1.6, ease: "easeOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border border-cyan-400/20 pointer-events-none"
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3"
        >
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px bg-gradient-to-r from-cyan-400 to-transparent"
          />
          <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-cyan-400/80">07 — Contact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/30 text-sm mb-16 max-w-md"
        >
          {hasForm ? "Have a project in mind or want to collaborate? Drop a message." : "Let's connect — find me across the web."}
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
                className={`group flex items-center gap-4 p-4 ${link.bg} border ${link.border} rounded-2xl hover:brightness-125 transition-all duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl ${link.bg} border ${link.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className={`w-4 h-4 ${link.color}`} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/25 mb-0.5 font-bold">{link.label}</p>
                  <p className="text-sm text-white/55 group-hover:text-white transition-colors duration-300">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          {hasForm && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["name", "email"].map((field) => (
                    <div key={field} className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/30 ml-1">{field}</label>
                      <input
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        placeholder={field === "email" ? "your@email.com" : "Your name"}
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.07] rounded-xl text-sm text-white placeholder-white/15 focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/30 ml-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.07] rounded-xl text-sm text-white placeholder-white/15 focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(6,182,212,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold transition-all duration-400 ${
                    status === "success"
                      ? "bg-emerald-600 text-white"
                      : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {status === "loading" ? (
                      <motion.span key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                        <FaCircleNotch className="w-4 h-4 animate-spin" /> Sending...
                      </motion.span>
                    ) : status === "success" ? (
                      <motion.span key="s" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-2">
                        <FaCheckCircle className="w-4 h-4" /> Message Sent!
                      </motion.span>
                    ) : (
                      <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                        Send Message <FaPaperPlane className="w-3.5 h-3.5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                {status === "error" && (
                  <p className="text-xs text-red-400 mt-2">Something went wrong. Please try again.</p>
                )}
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
