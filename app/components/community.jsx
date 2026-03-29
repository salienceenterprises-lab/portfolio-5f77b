"use client";
import { motion } from "framer-motion";
import { FaHeart, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioCommunity({ data }) {
  if (!data?.community || !Array.isArray(data.community) || data.community.length === 0) return null;

  return (
    <section id="community" className="py-28 px-6 bg-[linear-gradient(180deg,#0a0a0a_0%,#140707_100%)]">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-3">
            <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-[1px] bg-gradient-to-r from-[#FF0000] to-transparent" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#FF0000]">Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Community & Volunteering</h2>
          <p className="text-white/45 max-w-lg mb-14">Fierce commitment to showing up, giving back, and making every effort count.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.community.map((item, index) => {
            if (!item) return null;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -5 }}
                className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-300 hover:border-[#FF0000]/30">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#950101]/20 border border-[#FF0000]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaHeart className="w-4 h-4 text-[#FF0000]" />
                  </div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#FF0000] transition-colors">
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="text-white font-semibold mb-1 group-hover:text-red-300 transition-colors">{item.role || "Contributor"}</h3>
                <p className="text-red-400/80 text-xs font-semibold mb-3 uppercase tracking-wider">{item.organization}</p>
                <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
