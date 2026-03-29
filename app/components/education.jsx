"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioEducation({ data }) {
  if (!data?.education?.length) return null;

  return (
    <section id="education" className="relative py-28 px-6 overflow-hidden bg-[#080d18]">

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-blue-700/[0.05] blur-[140px] rounded-full -translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="text-blue-400/40 font-black text-xs tracking-widest select-none">{"//"}</span>
          <span className="text-[10px] font-black tracking-[0.35em] uppercase text-blue-400/80">05 — Training</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent max-w-[80px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-6xl font-black tracking-tighter text-white mb-4 uppercase"
        >
          Education<span className="text-blue-400">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/30 text-sm mb-16 max-w-sm"
        >
          Academic foundations and earned credentials.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute left-[19px] top-3 w-px bg-gradient-to-b from-blue-400/40 via-blue-600/15 to-transparent hidden sm:block origin-top"
            style={{ height: "calc(100% - 12px)" }}
          />

          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="relative sm:pl-14"
              >
                {/* Timeline marker — circle for education (differentiates from experience diamonds) */}
                <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 items-center justify-center z-10 bg-[#080d18]">
                  <motion.div
                    animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.9, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.6 }}
                    className="absolute inset-0 border border-blue-400/30 rounded-full"
                  />
                  <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(59,130,246,0.7)]" />
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group"
                >
                  <div className="relative bg-blue-500/[0.03] border border-blue-500/15 p-6 sm:p-7 overflow-hidden hover:border-blue-400/40 hover:shadow-[0_8px_40px_rgba(59,130,246,0.1)] transition-all duration-400">

                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[16px] border-l-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ borderTopColor: "rgba(59,130,246,0.4)", borderLeftColor: "transparent" }} />

                    <span className="absolute right-5 top-4 text-6xl font-black text-blue-400/[0.04] select-none leading-none tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3 relative z-10">
                      <div>
                        <h3 className="text-base font-black text-white uppercase tracking-wide group-hover:text-blue-200 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 mt-1.5">
                          <FaGraduationCap className="w-3.5 h-3.5 text-blue-400/60" />
                          <span className="text-sm font-bold text-blue-400/80">{edu.institution}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                        <span className="text-[10px] font-black text-white/35 bg-blue-500/[0.07] border border-blue-500/15 px-3 py-1 uppercase tracking-wider">
                          {edu.period}
                        </span>
                        {edu.location && (
                          <span className="flex items-center gap-1 text-[10px] text-white/25">
                            <FaMapMarkerAlt className="w-2.5 h-2.5" /> {edu.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-sm text-white/40 leading-relaxed mb-4 relative z-10">{edu.description}</p>
                    )}

                    {edu.achievements?.length > 0 && (
                      <ul className="space-y-2 relative z-10">
                        {edu.achievements.filter((a) => a?.trim()).map((a, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/35">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400/60 flex-shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
