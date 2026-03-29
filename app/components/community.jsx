"use client";
import { motion } from "framer-motion";
import { FaLeaf, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioCommunity({ data }) {
  if (!data?.community || !Array.isArray(data.community) || data.community.length === 0) return null;

  return (
    <section id="community" className="relative py-28 px-6 overflow-hidden bg-[#010703]">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full blur-[200px]"
          style={{ background: "radial-gradient(circle, rgba(0,230,118,0.05), transparent 70%)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,230,118,0.015)_1px,transparent_1px)] bg-[size:64px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3">
          <span className="font-black text-base" style={{ color: "#00e676" }}>›</span>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase"
            style={{ color: "rgba(0,230,118,0.7)" }}>06 — Impact</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4 uppercase">
          Community
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm mb-16 max-w-md" style={{ color: "rgba(255,255,255,0.3)" }}>
          Giving back — organisations and causes that matter.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.community.map((item, index) => {
            if (!item) return null;
            return (
              <motion.div key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}>

                {/* Top green bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: "linear-gradient(90deg, #00e676, rgba(0,230,118,0.1))" }} />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(0,230,118,0.04), transparent)" }} />

                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                      style={{
                        background: "rgba(0,230,118,0.08)",
                        border: "1px solid rgba(0,230,118,0.2)",
                      }}>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.6 }}>
                        <FaLeaf className="w-4 h-4" style={{ color: "rgba(0,230,118,0.7)" }} />
                      </motion.div>
                    </div>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer"
                        className="transition-colors" style={{ color: "rgba(255,255,255,0.2)" }}
                        aria-label={`Visit ${item.organization}`}>
                        <FaExternalLinkAlt className="w-3.5 h-3.5 hover:text-[#00e676]" />
                      </a>
                    )}
                  </div>

                  <h3 className="font-black text-white mb-1.5 group-hover:text-[#00e676] transition-colors duration-300 uppercase tracking-tight">
                    {item.role || "Contributor"}
                  </h3>
                  <p className="text-[11px] font-black uppercase tracking-widest mb-3"
                    style={{ color: "rgba(0,230,118,0.6)" }}>
                    {item.organization || "Community Initiative"}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {item.description || ""}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
