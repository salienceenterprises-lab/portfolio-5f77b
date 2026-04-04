"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PortfolioAbout({ data }) {
  if (!data?.bio) return null;

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden bg-[#040f1e]">

      {/* Deep ocean ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/[0.06] rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-600/[0.05] rounded-full blur-[120px]" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section label */}
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
          <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-cyan-400/80">01 — About</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-16 leading-tight"
        >
          Who I Am
        </motion.h2>

        {/* Content split */}
        <div className={`grid gap-12 items-start ${data?.heroImageBase64 ? "grid-cols-1 lg:grid-cols-[1fr_340px]" : "grid-cols-1 max-w-3xl"}`}>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Quote treatment */}
            <div className="relative">
              <div className="absolute -left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent rounded-full" />
              <p className="text-white/65 text-lg sm:text-xl leading-relaxed font-light pl-2">
                {data.bio}
              </p>
            </div>

            {/* Quick-fire skills pills */}
            {data?.skills?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-wrap gap-2 mt-10"
              >
                {data.skills.slice(0, 8).map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-[11px] font-bold text-cyan-300/80 bg-cyan-400/[0.07] border border-cyan-400/[0.15] rounded-full tracking-wide hover:bg-cyan-400/[0.14] hover:text-cyan-200 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
                {data.skills.length > 8 && (
                  <a
                    href="#skills"
                    className="px-4 py-2 text-[11px] font-bold text-white/25 bg-white/[0.03] border border-white/[0.07] rounded-full tracking-wide hover:text-white/50 transition-all duration-300"
                  >
                    +{data.skills.length - 8} more
                  </a>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Profile photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
            className="flex flex-col items-center lg:items-end gap-5"
          >
            {data?.heroImageBase64 ? (
              <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                {/* Sonar rings */}
                {[0, 1].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 2.2], opacity: [0.15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 1.4, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border border-cyan-400/20"
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-2xl scale-110" />
                <div
                  className="relative w-full h-full overflow-hidden border-2 border-cyan-400/25 shadow-[0_0_60px_rgba(6,182,212,0.15)]"
                  style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
                >
                  <img src={data.heroImageBase64} alt={data.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-blue-600/[0.06]" />
                </div>
              </div>
            ) : null}

            {/* Name card under photo */}
            <div className="text-center lg:text-right">
              <p className="text-sm font-bold text-white/80">{data.name}</p>
              {data.title && <p className="text-xs text-cyan-400/70 mt-0.5">{data.title}</p>}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
