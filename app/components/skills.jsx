"use client";
import { motion } from "framer-motion";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } };
const item = {
  hidden: { opacity: 0, y: 16, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 240, damping: 18 } },
};

export default function PortfolioSkills({ data }) {
  if (!data?.skills?.length) return null;

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden" style={{ background: "#100015" }}>

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #e040fb 0px, #e040fb 1px, transparent 1px, transparent 40px)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,234,0,0.08), transparent 70%)" }} />

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "#e040fb" }}>05 /</span>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/40">Skills</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-2 uppercase leading-none">
          Tech Stack
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 120 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }} className="h-0.5 mb-14"
          style={{ background: "linear-gradient(90deg, #e040fb, #ffea00, transparent)" }} />

        <motion.div variants={container} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-wrap gap-3">
          {data.skills.map((skill, i) => {
            const useMagenta = i % 2 === 0;
            return (
              <motion.div key={`${skill}-${i}`} variants={item}
                whileHover={{ y: -4, scale: 1.06 }}
                className="group relative cursor-default">
                {/* Glow */}
                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none"
                  style={{ background: useMagenta ? "rgba(224,64,251,0.4)" : "rgba(255,234,0,0.3)" }} />
                <div className="relative flex items-center gap-2.5 px-5 py-3 transition-all duration-200"
                  style={{
                    background: useMagenta ? "rgba(224,64,251,0.06)" : "rgba(255,234,0,0.05)",
                    border: `1px solid ${useMagenta ? "rgba(224,64,251,0.2)" : "rgba(255,234,0,0.18)"}`,
                  }}>
                  <motion.div animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.5 + (i % 5) * 0.35, repeat: Infinity }}
                    className="w-1.5 h-1.5 flex-shrink-0 rotate-45"
                    style={{ background: useMagenta ? "#e040fb" : "#ffea00" }} />
                  <span className="text-sm font-black uppercase tracking-wider"
                    style={{ color: useMagenta ? "rgba(224,64,251,0.8)" : "rgba(255,234,0,0.75)" }}>
                    {skill}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-4 mt-14">
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #e040fb, transparent)" }} />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
            {data.skills.length} Technologies
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(270deg, #ffea00, transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}
