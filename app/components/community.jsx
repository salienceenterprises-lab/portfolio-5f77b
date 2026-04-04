"use client";
import { motion } from "framer-motion";
import { FaStar, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioCommunity({ data }) {
  if (!data?.community || !Array.isArray(data.community) || data.community.length === 0) return null;

  return (
    <section id="community" className="relative py-28 px-6 overflow-hidden" style={{ background: "#0d0010" }}>

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffea00 0px, #ffea00 1px, transparent 1px, transparent 40px)" }} />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(224,64,251,0.1), transparent 70%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "#ffea00" }}>06 /</span>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/40">Impact</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-2 uppercase leading-none">
          Community
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 120 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }} className="h-0.5 mb-14"
          style={{ background: "linear-gradient(90deg, #ffea00, #e040fb, transparent)" }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.community.map((item, index) => {
            if (!item) return null;
            return (
              <motion.div key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 120, damping: 16, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative p-7 overflow-hidden transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,234,0,0.3)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>

                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, #ffea00, #e040fb)" }} />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(255,234,0,0.04), transparent)" }} />

                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.7 }}
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ background: "rgba(255,234,0,0.08)", border: "1px solid rgba(255,234,0,0.2)" }}>
                    <FaStar className="w-4 h-4" style={{ color: "#ffea00" }} />
                  </motion.div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      className="text-white/20 hover:text-[#e040fb] transition-colors">
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="font-black uppercase tracking-tight text-white mb-1.5 group-hover:text-[#ffea00] transition-colors relative z-10">
                  {item.role || "Contributor"}
                </h3>
                <p className="text-[11px] font-black uppercase tracking-widest mb-3 relative z-10"
                  style={{ color: "rgba(224,64,251,0.7)" }}>
                  {item.organization || "Community Initiative"}
                </p>
                <p className="text-sm leading-relaxed relative z-10" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {item.description || ""}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
