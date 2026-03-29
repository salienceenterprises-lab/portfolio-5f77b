"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 18, scale: 0.85 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 240, damping: 18 } },
};

export default function PortfolioSkills({ data }) {
  if (!data?.skills?.length) return null;

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden bg-[#020b04]">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(ellipse, rgba(0,230,118,0.06), transparent 70%)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,230,118,0.015)_1px,transparent_1px)] bg-[size:64px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3">
          <span className="font-black text-base" style={{ color: "#00e676" }}>›</span>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase"
            style={{ color: "rgba(0,230,118,0.7)" }}>05 — Arsenal</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4 uppercase">
          Tech Stack
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm mb-16 max-w-md" style={{ color: "rgba(255,255,255,0.3)" }}>
          Tools and technologies in my arsenal.
        </motion.p>

        <motion.div variants={container} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-wrap gap-3">
          {data.skills.map((skill, i) => (
            <motion.div key={`${skill}-${i}`} variants={item}
              whileHover={{ y: -4, scale: 1.05 }}
              className="group relative cursor-default">

              {/* Glow on hover */}
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none"
                style={{ background: "rgba(0,230,118,0.3)" }} />

              <div className="relative flex items-center gap-2.5 px-5 py-3 transition-all duration-300"
                style={{
                  background: "rgba(0,230,118,0.04)",
                  border: "1px solid rgba(0,230,118,0.12)",
                }}>
                {/* Brackets */}
                <span className="text-xs font-black opacity-30 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ color: "#00e676" }}>&#123;</span>
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.5 + (i % 5) * 0.3, repeat: Infinity }}
                  className="w-1.5 h-1.5 flex-shrink-0"
                  style={{ background: "#00e676" }} />
                <span className="text-sm font-black uppercase tracking-wider transition-colors duration-300"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#00e676"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                  {skill}
                </span>
                <span className="text-xs font-black opacity-30 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ color: "#00e676" }}>&#125;</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex items-center gap-4">
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(0,230,118,0.2), transparent)" }} />
          <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
            {data.skills.length} Technologies
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(270deg, rgba(0,230,118,0.2), transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}
