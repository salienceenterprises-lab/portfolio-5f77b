"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PortfolioSkills({ data }) {
  if (!data?.skills?.length) return null;

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden bg-[#020c18]">

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-400/[0.05] rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

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
          <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-cyan-400/80">05 — Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4"
        >
          Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/30 text-sm mb-16 max-w-md"
        >
          Technologies I've mastered and weaponised.
        </motion.p>

        {/* Skill grid — hexagonal-feel cells */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.035 } } }}
        >
          {data.skills.map((skill, index) => (
            <motion.div
              key={`${skill}-${index}`}
              variants={{
                hidden: { opacity: 0, scale: 0.6, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="group relative cursor-default"
            >
              {/* Hover glow layer */}
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-400/60 to-blue-500/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />

              <div className="relative flex items-center gap-2.5 px-5 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl group-hover:bg-cyan-400/[0.08] group-hover:border-cyan-400/40 transition-all duration-300">
                {/* Dot accent */}
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.5 + index * 0.3, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-300 flex-shrink-0 transition-colors duration-300"
                />
                <span className="text-sm font-semibold text-white/55 group-hover:text-white transition-colors duration-300 tracking-wide">
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Count indicator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.06] to-transparent" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20">
            {data.skills.length} Technologies
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-white/[0.06] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
