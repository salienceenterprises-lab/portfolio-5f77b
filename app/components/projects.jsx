"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTerminal } from "react-icons/fa";

export default function PortfolioProjects({ data }) {
  if (!data?.projects?.length) return null;

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden bg-[#010703]">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(ellipse, rgba(0,230,118,0.06), transparent 70%)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,230,118,0.015)_1px,transparent_1px)] bg-[size:64px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3">
          <span className="font-black text-base" style={{ color: "#00e676" }}>›</span>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase"
            style={{ color: "rgba(0,230,118,0.7)" }}>04 — Projects</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4 uppercase">
          Built Work
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm mb-16 max-w-md" style={{ color: "rgba(255,255,255,0.3)" }}>
          Selected projects — from concept to deployment.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.projects.map((proj, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>

              {/* Top accent bar — expands on hover */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.06 }}
                style={{ background: "linear-gradient(90deg, #00e676, rgba(0,230,118,0.2))" }} />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(0,230,118,0.04), transparent 60%)" }} />

              {proj.imageBase64 ? (
                <div className="relative h-44 overflow-hidden">
                  <img src={proj.imageBase64} alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, transparent 40%, #010703)" }} />
                  {/* Index */}
                  <div className="absolute top-3 right-3 text-[10px] font-black tracking-widest"
                    style={{ color: "rgba(255,255,255,0.15)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {/* Links on hover */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black text-white/80 hover:text-white transition-all backdrop-blur-sm"
                        style={{ background: "rgba(1,7,3,0.9)", border: "1px solid rgba(255,255,255,0.15)" }}
                        onClick={(e) => e.stopPropagation()}>
                        <FaGithub className="w-3 h-3" /> Code
                      </a>
                    )}
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black text-[#010703] transition-all backdrop-blur-sm hover:opacity-85"
                        style={{ background: "#00e676" }}
                        onClick={(e) => e.stopPropagation()}>
                        <FaExternalLinkAlt className="w-2.5 h-2.5" /> Live
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative h-20 flex items-center px-6 overflow-hidden"
                  style={{ background: "rgba(0,230,118,0.03)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="absolute right-3 top-2 text-6xl font-black select-none leading-none"
                    style={{ color: "rgba(0,230,118,0.04)", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "rgba(0,230,118,0.08)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <div className="w-9 h-9 flex items-center justify-center"
                      style={{ border: "1px solid rgba(0,230,118,0.2)", background: "rgba(0,230,118,0.05)" }}>
                      <FaTerminal className="w-4 h-4" style={{ color: "rgba(0,230,118,0.6)" }} />
                    </div>
                    <div className="flex items-center gap-3">
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer"
                          className="transition-colors" style={{ color: "rgba(255,255,255,0.25)" }}>
                          <FaGithub className="w-4 h-4 hover:text-white" />
                        </a>
                      )}
                      {proj.demo && (
                        <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                          className="transition-colors" style={{ color: "rgba(255,255,255,0.25)" }}>
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-base font-black text-white mb-2 group-hover:text-[#00e676] transition-colors duration-300 uppercase tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {proj.description}
                </p>

                {proj.stack?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    {proj.stack.filter(t => t?.trim()).map((tech) => (
                      <span key={tech}
                        className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1"
                        style={{
                          color: "rgba(0,230,118,0.6)",
                          background: "rgba(0,230,118,0.05)",
                          border: "1px solid rgba(0,230,118,0.1)",
                        }}>
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
