"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioEducation({ data }) {
  if (!data?.education?.length) return null;

  return (
    <section id="education" className="relative py-28 px-6 overflow-hidden bg-[#040f1e]">

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-cyan-500/[0.05] rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

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
          <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-cyan-400/80">02 — Education</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4"
        >
          Credentials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/30 text-sm mb-16 max-w-md"
        >
          Academic foundations and certifications.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute left-[19px] top-3 w-px bg-gradient-to-b from-cyan-400/40 via-blue-500/15 to-transparent hidden sm:block origin-top"
          />

          <div className="space-y-7">
            {data.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="relative sm:pl-14"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 rounded-full bg-[#040f1e] border border-cyan-400/20 items-center justify-center z-10">
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.6 }}
                    className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                  />
                </div>

                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group"
                >
                  <div className="relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 sm:p-7 overflow-hidden hover:border-blue-500/25 hover:bg-white/[0.05] transition-all duration-400">

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />

                    {/* Watermark */}
                    <div className="absolute right-5 top-4 text-5xl font-black text-white/[0.025] select-none leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3 relative z-10">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 mt-1.5">
                          <FaGraduationCap className="w-3.5 h-3.5 text-blue-400/70" />
                          <span className="text-sm font-semibold text-blue-400/80">{edu.institution}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                        <span className="text-xs font-bold text-white/30 bg-white/[0.05] border border-white/[0.08] px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                        {edu.location && (
                          <span className="flex items-center gap-1 text-[11px] text-white/25">
                            <FaMapMarkerAlt className="w-2.5 h-2.5" /> {edu.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-sm text-white/45 leading-relaxed mb-4 relative z-10">{edu.description}</p>
                    )}

                    {edu.achievements?.length > 0 && (
                      <ul className="space-y-2 relative z-10">
                        {edu.achievements.filter(a => a?.trim()).map((a, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/40">
                            <div className="mt-2 w-1 h-1 rounded-full bg-blue-400/60 flex-shrink-0" />
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
