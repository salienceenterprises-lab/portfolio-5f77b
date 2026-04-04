"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioProjects({ data }) {
  if (!data?.projects?.length) return null;

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden" style={{ background: "#0d0010" }}>

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffea00 0px, #ffea00 1px, transparent 1px, transparent 40px)" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(224,64,251,0.1), transparent 70%)" }} />

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "#ffea00" }}>04 /</span>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/40">Projects</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-2 uppercase leading-none">
          Built Work
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 120 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }} className="h-0.5 mb-14"
          style={{ background: "linear-gradient(90deg, #ffea00, #e040fb, transparent)" }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.projects.map((proj, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07, type: "spring", stiffness: 120 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(224,64,251,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>

              {/* Top bar draws in */}
              <motion.div className="absolute top-0 left-0 right-0 h-0.5 origin-left"
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 + index * 0.06 }}
                style={{ background: "linear-gradient(90deg, #e040fb, #ffea00)" }} />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(224,64,251,0.06), transparent 60%)" }} />

              {proj.imageBase64 ? (
                <div className="relative h-44 overflow-hidden">
                  <img src={proj.imageBase64} alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, #0d0010)" }} />
                  <div className="absolute top-3 right-3 text-[10px] font-black tracking-widest" style={{ color: "rgba(255,255,255,0.2)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black text-black"
                        style={{ background: "#e040fb" }} onClick={(e) => e.stopPropagation()}>
                        <FaGithub className="w-3 h-3" /> Code
                      </a>
                    )}
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black text-black"
                        style={{ background: "#ffea00" }} onClick={(e) => e.stopPropagation()}>
                        <FaExternalLinkAlt className="w-2.5 h-2.5" /> Live
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative h-20 flex items-center justify-between px-6 overflow-hidden"
                  style={{ background: "rgba(224,64,251,0.05)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="text-5xl font-black select-none leading-none"
                    style={{ color: "rgba(224,64,251,0.07)", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "rgba(224,64,251,0.1)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex gap-3">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        className="text-white/20 hover:text-[#e040fb] transition-colors">
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                        className="text-white/20 hover:text-[#ffea00] transition-colors">
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-base font-black uppercase tracking-tight text-white mb-2 group-hover:text-[#e040fb] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{proj.description}</p>

                {proj.stack?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    {proj.stack.filter(t => t?.trim()).map((tech) => (
                      <span key={tech}
                        className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1"
                        style={{ color: "rgba(255,234,0,0.7)", background: "rgba(255,234,0,0.06)", border: "1px solid rgba(255,234,0,0.12)" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
