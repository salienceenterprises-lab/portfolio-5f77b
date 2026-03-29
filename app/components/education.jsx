"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioEducation({ data }) {
  if (!data?.education?.length) return null;

  return (
    <section id="education" className="relative py-28 px-6 overflow-hidden bg-[#010703]">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(circle, rgba(0,230,118,0.05), transparent 70%)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,230,118,0.015)_1px,transparent_1px)] bg-[size:64px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3">
          <span className="font-black text-base" style={{ color: "#00e676" }}>›</span>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase"
            style={{ color: "rgba(0,230,118,0.7)" }}>02 — Education</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4 uppercase">
          Credentials
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm mb-16 max-w-md" style={{ color: "rgba(255,255,255,0.3)" }}>
          Academic foundations and certifications.
        </motion.p>

        <div className="relative">
          <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }}
            viewport={{ once: true }} transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute left-[19px] top-3 w-px hidden sm:block origin-top"
            style={{ background: "linear-gradient(to bottom, #00e676, rgba(0,230,118,0.1), transparent)" }} />

          <div className="space-y-7">
            {data.education.map((edu, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="relative sm:pl-14">

                {/* Upward chevron marker */}
                <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 items-center justify-center z-10"
                  style={{ background: "#010703" }}>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.5 }}
                    className="w-0 h-0"
                    style={{
                      borderLeft: "7px solid transparent",
                      borderRight: "7px solid transparent",
                      borderBottom: "12px solid #00e676",
                      filter: "drop-shadow(0 0 6px rgba(0,230,118,0.6))",
                    }} />
                </div>

                <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }}
                  className="group">
                  <div className="relative p-6 sm:p-7 overflow-hidden transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      borderLeft: "2px solid rgba(0,230,118,0.2)",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                      borderRight: "1px solid rgba(255,255,255,0.05)",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                      style={{ background: "linear-gradient(135deg, rgba(0,230,118,0.04), transparent)" }} />

                    <div className="absolute right-5 top-4 text-5xl font-black select-none leading-none"
                      style={{ color: "rgba(255,255,255,0.025)", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "rgba(0,230,118,0.06)" }}>
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3 relative z-10">
                      <div>
                        <h3 className="text-lg font-black text-white group-hover:text-[#00e676] transition-colors duration-300 uppercase tracking-tight">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 mt-1.5">
                          <FaGraduationCap className="w-3.5 h-3.5" style={{ color: "rgba(0,230,118,0.7)" }} />
                          <span className="text-sm font-bold" style={{ color: "rgba(0,230,118,0.8)" }}>
                            {edu.institution}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                        <span className="text-xs font-bold px-3 py-1"
                          style={{ color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                          {edu.period}
                        </span>
                        {edu.location && (
                          <span className="flex items-center gap-1 text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                            <FaMapMarkerAlt className="w-2.5 h-2.5" /> {edu.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-sm leading-relaxed mb-4 relative z-10" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {edu.description}
                      </p>
                    )}

                    {edu.achievements?.length > 0 && (
                      <ul className="space-y-2 relative z-10">
                        {edu.achievements.filter(a => a?.trim()).map((a, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                            <div className="mt-2 w-1.5 h-1.5 flex-shrink-0"
                              style={{ background: "#00e676", clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
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
