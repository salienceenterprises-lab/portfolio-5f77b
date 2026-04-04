"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioExperience({ data }) {
  if (!data?.experience?.length) return null;

  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden" style={{ background: "#100015" }}>

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #e040fb 0px, #e040fb 1px, transparent 1px, transparent 40px)" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[220px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(224,64,251,0.1) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "#e040fb" }}>03 /</span>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/40">Experience</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-2 uppercase leading-none">
          Career Log
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 120 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }} className="h-0.5 mb-14"
          style={{ background: "linear-gradient(90deg, #e040fb, #ffea00, transparent)" }} />

        <div className="space-y-5">
          {data.experience.map((job, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness: 110 }}
              whileHover={{ x: 6 }}
              className="group relative p-6 sm:p-7 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderLeft: "2px solid rgba(224,64,251,0.4)",
              }}>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(224,64,251,0.05), transparent)" }} />

              {/* Glitch accent on hover */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "#e040fb", boxShadow: "0 0 8px #e040fb" }} />

              <div className="absolute right-5 top-4 text-4xl font-black select-none leading-none"
                style={{ color: "rgba(224,64,251,0.05)", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "rgba(224,64,251,0.1)" }}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 relative z-10">
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-white mb-1.5 group-hover:text-[#e040fb] transition-colors">
                    {job.role}
                  </h3>
                  <div className="flex items-center gap-2">
                    <FaBriefcase className="w-3 h-3" style={{ color: "#e040fb" }} />
                    <span className="text-sm font-black" style={{ color: "rgba(224,64,251,0.8)" }}>{job.company}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                  <span className="text-xs font-black px-3 py-1"
                    style={{ color: "rgba(224,64,251,0.7)", background: "rgba(224,64,251,0.08)", border: "1px solid rgba(224,64,251,0.15)" }}>
                    {job.period}
                  </span>
                  {job.location && (
                    <span className="flex items-center gap-1 text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                      <FaMapMarkerAlt className="w-2.5 h-2.5" /> {job.location}
                    </span>
                  )}
                </div>
              </div>

              {job.description && (
                <p className="text-sm leading-relaxed mb-4 relative z-10" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {job.description}
                </p>
              )}

              {job.highlights?.length > 0 && (
                <ul className="space-y-2 mb-4 relative z-10">
                  {job.highlights.filter(h => h?.trim()).map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                      <div className="mt-2 w-1.5 h-1.5 flex-shrink-0" style={{ background: "#e040fb" }} />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {job.stack?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 relative z-10"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  {job.stack.filter(t => t?.trim()).map((tech) => (
                    <span key={tech}
                      className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1"
                      style={{ color: "rgba(224,64,251,0.7)", background: "rgba(224,64,251,0.07)", border: "1px solid rgba(224,64,251,0.12)" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
