"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.6, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 18 } },
};

export default function PortfolioSkills({ data }) {
  if (!data?.skills?.length) return null;

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden bg-[#050505]">

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-700/[0.05] blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="text-blue-400/40 font-black text-xs tracking-widest select-none">{"//"}</span>
          <span className="text-[10px] font-black tracking-[0.35em] uppercase text-blue-400/80">04 — Arsenal</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent max-w-[80px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-6xl font-black tracking-tighter text-white mb-4 uppercase"
        >
          Tech Stack<span className="text-blue-400">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/30 text-sm mb-16 max-w-sm"
        >
          Tools, languages, and frameworks in active rotation.
        </motion.p>

        {/* Skill grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {data.skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                borderColor: "rgba(59,130,246,0.7)",
                boxShadow: "0 0 24px rgba(59,130,246,0.2), inset 0 0 12px rgba(59,130,246,0.05)",
                y: -4,
              }}
              className="group relative bg-blue-500/[0.04] border border-blue-500/15 px-4 py-3.5 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Corner accent — top left */}
              <span className="absolute top-0 left-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-blue-500/30 border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderTopColor: "rgba(59,130,246,0.3)", borderLeftColor: "transparent" }}
              />

              {/* Indicator dot */}
              <div className="flex items-center gap-2.5 mb-0">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 % 2 }}
                  className="w-1.5 h-1.5 rounded-full bg-blue-400/60 flex-shrink-0 group-hover:bg-blue-400 transition-colors"
                />
                <span className="text-[11px] font-bold text-white/50 group-hover:text-white/85 transition-colors duration-300 uppercase tracking-wider leading-tight">
                  {skill}
                </span>
              </div>

              {/* Bottom glow line on hover */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent origin-left"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Count + divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4 mt-12"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
            {data.skills.length} Technologies
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-blue-500/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
