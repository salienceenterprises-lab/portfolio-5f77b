"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioEducation({ data }) {
  if (!data?.education?.length) return null;

  return (
    <section id="education" className="relative py-28 px-6 overflow-hidden" style={{ background: "#0d0010" }}>

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffea00 0px, #ffea00 1px, transparent 1px, transparent 40px)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(224,64,251,0.1) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "#ffea00" }}>02 /</span>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/40">Education</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-2 uppercase leading-none">
          Credentials
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 120 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }} className="h-0.5 mb-14"
          style={{ background: "linear-gradient(90deg, #ffea00, #e040fb, transparent)" }} />

        <div className="space-y-5">
          {data.education.map((edu, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness: 110 }}
              whileHover={{ x: 6 }}
              className="group relative p-6 sm:p-7 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.025)",
                borderLeft: "2px solid rgba(255,234,0,0.3)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderLeft: "2px solid rgba(255,234,0,0.3)",
              }}>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(255,234,0,0.04), transparent)" }} />

              <div className="absolute right-5 top-4 text-4xl font-black select-none leading-none"
                style={{ color: "rgba(255,234,0,0.05)", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "rgba(255,234,0,0.08)" }}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3 relative z-10">
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-white mb-1.5 group-hover:text-[#ffea00] transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="w-3.5 h-3.5" style={{ color: "#ffea00" }} />
                    <span className="text-sm font-black" style={{ color: "rgba(255,234,0,0.8)" }}>{edu.institution}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                  <span className="text-xs font-black px-3 py-1"
                    style={{ color: "rgba(255,234,0,0.7)", background: "rgba(255,234,0,0.08)", border: "1px solid rgba(255,234,0,0.15)" }}>
                    {edu.period}
                  </span>
                  {edu.location && (
                    <span className="flex items-center gap-1 text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                      <FaMapMarkerAlt className="w-2.5 h-2.5" /> {edu.location}
                    </span>
                  )}
                </div>
              </div>

              {edu.description && (
                <p className="text-sm leading-relaxed mb-3 relative z-10" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {edu.description}
                </p>
              )}

              {edu.achievements?.length > 0 && (
                <ul className="space-y-2 relative z-10">
                  {edu.achievements.filter(a => a?.trim()).map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                      <div className="mt-2 w-1.5 h-1.5 flex-shrink-0 rotate-45" style={{ background: "#ffea00" }} />
                      {a}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
