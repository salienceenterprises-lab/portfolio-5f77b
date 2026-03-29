"use client";
import { motion } from "framer-motion";
import { FaBolt, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioCommunity({ data }) {
  if (!data?.community?.length) return null;

  return (
    <section id="community" className="relative py-28 px-6 overflow-hidden bg-[#050505]">

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[400px] bg-blue-600/[0.05] blur-[150px] rounded-full" />
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
          <span className="text-[10px] font-black tracking-[0.35em] uppercase text-blue-400/80">06 — Impact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent max-w-[80px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-6xl font-black tracking-tighter text-white mb-4 uppercase"
        >
          Community<span className="text-blue-400">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/30 text-sm mb-16 max-w-sm"
        >
          Giving back, building up, leaving things better.
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.community.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative bg-blue-500/[0.03] border border-blue-500/15 p-6 overflow-hidden hover:border-blue-500/45 hover:shadow-[0_16px_50px_rgba(59,130,246,0.12)] transition-all duration-400"
            >
              {/* Corner bracket — top left */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/70 transition-colors duration-400" />
              {/* Corner bracket — bottom right */}
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/70 transition-colors duration-400" />

              {/* Electric flash icon with pulse */}
              <div className="relative w-11 h-11 mb-5">
                {/* Electric pulse rings */}
                {[0, 1].map((r) => (
                  <motion.div
                    key={r}
                    animate={{ scale: [1, 2.2], opacity: [0.25, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 + r * 0.8 }}
                    className="absolute inset-0 border border-blue-500/40"
                  />
                ))}
                <div className="relative w-11 h-11 bg-blue-500/[0.1] border border-blue-500/25 flex items-center justify-center group-hover:border-blue-500/60 transition-colors duration-300 z-10">
                  <FaBolt className="w-4 h-4 text-blue-400/80" />
                </div>
              </div>

              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-black text-white text-sm uppercase tracking-wide mb-0.5 group-hover:text-blue-200 transition-colors duration-300">
                    {item.role}
                  </h3>
                  <p className="text-xs font-bold text-blue-400/70 uppercase tracking-wider">{item.organization}</p>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/20 hover:text-blue-400 transition-colors mt-0.5 flex-shrink-0"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {item.description && (
                <p className="text-sm text-white/35 leading-relaxed mt-3">{item.description}</p>
              )}

              {/* Bottom indicator line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
