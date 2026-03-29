"use client";
import { motion } from "framer-motion";
import { FaHeart, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioCommunity({ data }) {
  if (!data?.community?.length) return null;

  return (
    <section id="community" className="relative py-28 px-6 overflow-hidden bg-[#020c18]">

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[400px] bg-cyan-500/[0.05] rounded-full blur-[160px]" />
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
          <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-cyan-400/80">06 — Impact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4"
        >
          Community Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/30 text-sm mb-16 max-w-md"
        >
          Giving back, making ripples, leaving things better than I found them.
        </motion.p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.community.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 overflow-hidden hover:border-cyan-500/25 hover:shadow-[0_16px_50px_rgba(6,182,212,0.09)] transition-all duration-400"
            >
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />

              {/* Pulse ring behind icon */}
              <div className="relative w-10 h-10 mb-5 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.8], opacity: [0.2, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute inset-0 rounded-full bg-cyan-400/20"
                />
                <div className="relative w-10 h-10 rounded-xl bg-cyan-500/[0.1] border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10">
                  <FaHeart className="w-4 h-4 text-cyan-400/80" />
                </div>
              </div>

              <div className="relative z-10 flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-white text-sm mb-0.5 group-hover:text-cyan-200 transition-colors duration-300">
                    {item.role}
                  </h3>
                  <p className="text-xs font-bold text-cyan-400/70">{item.organization}</p>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/20 hover:text-cyan-400 transition-colors mt-0.5 flex-shrink-0"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {item.description && (
                <p className="text-sm text-white/40 leading-relaxed mt-3 relative z-10">{item.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
