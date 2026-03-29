"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaEnvelope, FaDownload, FaArrowDown } from "react-icons/fa";

export default function PortfolioHero({ data }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 180]);
  const y2 = useTransform(scrollY, [0, 600], [0, -120]);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    data?.experience?.length > 0 && { value: `${data.experience.length}+`, label: "Roles" },
    data?.projects?.length > 0  && { value: `${data.projects.length}`,   label: "Projects" },
    data?.skills?.length > 0    && { value: `${data.skills.length}+`,    label: "Skills" },
  ].filter(Boolean);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020c18]">

      {/* ── Background layers ─────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_70%_at_65%_45%,rgba(6,182,212,0.10)_0%,rgba(2,12,24,1)_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
        {/* Horizontal scanner */}
        <motion.div
          animate={{ y: ["-2px", "100vh"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/18 to-transparent"
        />
      </div>

      {/* Parallax depth blobs */}
      <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[4%] w-[380px] h-[380px] bg-blue-600/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-[15%] right-[4%] w-[480px] h-[480px] bg-cyan-400/[0.07] rounded-full blur-[140px] pointer-events-none" />

      {/* ── Main content grid ──────────────────────────────────────────── */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-center min-h-screen py-28">

          {/* LEFT — Identity */}
          <div className="flex flex-col justify-center order-2 lg:order-1">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-3 mb-8 w-fit"
            >
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-white/45 font-semibold">{data.title || "Available"}</span>
              </div>
            </motion.div>

            {/* Name */}
            <div className="mb-5 overflow-hidden">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-6xl sm:text-7xl lg:text-[88px] font-black tracking-tighter leading-[0.88]">
                  <span className="text-white">{data.name?.split(" ")[0]}</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                    {data.name?.split(" ").slice(1).join(" ")}
                  </span>
                </h1>
              </motion.div>
            </div>

            {/* Slogan */}
            {data.sloganHeroSection && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base sm:text-lg text-white/40 max-w-md font-light leading-relaxed mb-8 border-l-[2px] border-cyan-500/35 pl-5"
              >
                {data.sloganHeroSection}
              </motion.p>
            )}

            {/* Stats */}
            {stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex gap-7 mb-10"
              >
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <span className="text-2xl font-black text-white tracking-tight">{s.value}</span>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 font-medium">{s.label}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {data?.resumeBase64 && (
                <motion.a
                  whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(6,182,212,0.28)" }}
                  whileTap={{ scale: 0.96 }}
                  href={`data:application/pdf;base64,${data.resumeBase64}`}
                  download={`${data.name || "Resume"}.pdf`}
                  className="group flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-300"
                >
                  <FaDownload className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  Download Resume
                </motion.a>
              )}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={scrollToContact}
                className="group flex items-center gap-3 px-7 py-3.5 border border-white/[0.12] hover:border-cyan-500/40 bg-white/[0.04] hover:bg-cyan-500/[0.08] text-white text-sm font-bold rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <FaEnvelope className="w-3.5 h-3.5 text-cyan-400" />
                Get In Touch
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT — Profile Photo */}
          <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2">
            <div className="relative">
              {/* Sonar pulse rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 2.8], opacity: [0.18, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: i * 1.15, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full border border-cyan-400/25 pointer-events-none"
                />
              ))}

              {/* Rotating orbital rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full pointer-events-none"
                style={{ border: "1px dashed rgba(6,182,212,0.15)" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full pointer-events-none"
                style={{ border: "1px dotted rgba(6,182,212,0.2)" }}
              />

              {/* Corner accent marks */}
              <div className="absolute -top-10 -right-10 w-5 h-5 border-t-[2px] border-r-[2px] border-cyan-400/35 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-5 h-5 border-b-[2px] border-l-[2px] border-cyan-400/35 pointer-events-none" />

              {/* Photo or placeholder */}
              {data?.heroImageBase64 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.25, type: "spring", stiffness: 80, damping: 18 }}
                  className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
                >
                  {/* Glow halo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/25 to-blue-600/25 rounded-full blur-3xl scale-110 pointer-events-none" />
                  {/* Hexagonal frame */}
                  <div
                    className="relative w-full h-full overflow-hidden border-[2px] border-cyan-400/20 shadow-[0_0_80px_rgba(6,182,212,0.18)]"
                    style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
                  >
                    <img src={data.heroImageBase64} alt={data.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/08 via-transparent to-blue-600/08" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                  <div
                    className="relative w-full h-full bg-gradient-to-br from-[#061e34] to-[#041120] border-[2px] border-cyan-400/20 flex items-center justify-center"
                    style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
                  >
                    <motion.span
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-7xl font-black bg-gradient-to-b from-cyan-300 to-blue-500 bg-clip-text text-transparent select-none"
                    >
                      {data.name?.charAt(0) ?? "?"}
                    </motion.span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#020c18] to-transparent z-10 pointer-events-none" />

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] text-white/18 font-medium">Explore</span>
        <div className="w-px h-7 bg-gradient-to-b from-cyan-400/40 to-transparent" />
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <FaArrowDown className="w-3 h-3 text-cyan-400/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}
