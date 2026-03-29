"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioExperience({ data }) {
  if (!data?.experience?.length) return null;

  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden bg-[#020b04]">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px]"
          style={{ background: "radial-gradient(circle, rgba(0,230,118,0.06), transparent 70%)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,230,118,0.015)_1px,transparent_1px)] bg-[size:64px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3">
          <span className="font-black text-base" style={{ color: "#00e676" }}>›</span>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase"
            style={{ color: "rgba(0,230,118,0.7)" }}>03 — Experience</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4 uppercase">
          Career Log
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm mb-16 max-w-md" style={{ color: "rgba(255,255,255,0.3)" }}>
          Where I've worked and what I've built.
        </motion.p>

        <div className="relative">
          <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }}
            viewport={{ once: true }} transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-[19px] top-3 w-px hidden sm:block origin-top"
            style={{ background: "linear-gradient(to bottom, #00e676, rgba(0,230,118,0.15), transparent)" }} />

          <div className="space-y-7">
            {data.experience.map((job, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="relative sm:pl-14">

                {/* Square marker */}
                <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 items-center justify-center z-10"
                  style={{ background: "#020b04" }}>
                  <motion.div
                    animate={{ opacity: [0.6, 1, 0.6], boxShadow: ["0 0 6px rgba(0,230,118,0.3)", "0 0 14px rgba(0,230,118,0.7)", "0 0 6px rgba(0,230,118,0.3)"] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                    className="w-3 h-3"
                    style={{ background: "#00e676" }} />
                </div>

                <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }}
                  className="group">
                  <div className="relative p-6 sm:p-7 overflow-hidden transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      borderLeft: "2px solid rgba(0,230,118,0.25)",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                      borderRight: "1px solid rgba(255,255,255,0.05)",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                      style={{ background: "linear-gradient(135deg, rgba(0,230,118,0.04), transparent)" }} />

                    {/* Hover: left border brightens */}
                    <motion.div className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "#00e676" }} />

                    <div className="absolute right-5 top-4 text-5xl font-black select-none leading-none"
                      style={{ color: "rgba(255,255,255,0.025)", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "rgba(0,230,118,0.06)" }}>
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 relative z-10">
                      <div>
                        <h3 className="text-lg font-black text-white group-hover:text-[#00e676] transition-colors duration-300 uppercase tracking-tight">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1.5">
                          <FaBriefcase className="w-3 h-3" style={{ color: "rgba(0,230,118,0.7)" }} />
                          <span className="text-sm font-bold" style={{ color: "rgba(0,230,118,0.8)" }}>{job.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                        <span className="text-xs font-bold px-3 py-1"
                          style={{ color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                          {job.period}
                        </span>
                        {job.location && (
                          <span className="flex items-center gap-1 text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                            <FaMapMarkerAlt className="w-2.5 h-2.5" /> {job.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {job.description && (
                      <p className="text-sm leading-relaxed mb-5 relative z-10" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {job.description}
                      </p>
                    )}

                    {job.highlights?.length > 0 && (
                      <ul className="space-y-2 mb-5 relative z-10">
                        {job.highlights.filter(h => h?.trim()).map((h, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                            <div className="mt-2 w-1.5 h-1.5 flex-shrink-0"
                              style={{ background: "#00e676" }} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    {job.stack?.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4 relative z-10"
                        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                        {job.stack.filter(t => t?.trim()).map((tech) => (
                          <span key={tech}
                            className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1"
                            style={{
                              color: "rgba(0,230,118,0.65)",
                              background: "rgba(0,230,118,0.05)",
                              border: "1px solid rgba(0,230,118,0.12)",
                            }}>
                            {tech}
                          </span>
                        ))}
                      </div>
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
