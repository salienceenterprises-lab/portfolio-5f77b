"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

export default function PortfolioProjects({ data }) {
  if (!data?.projects || !Array.isArray(data.projects) || data.projects.length === 0) return null;

  return (
    <section id="projects" className="py-28 px-6 bg-[linear-gradient(180deg,#000000_0%,#3D0000_100%)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(149,1,1,0.2)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-3">
            <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-[1px] bg-gradient-to-r from-red-500 to-transparent" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-red-400">Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-white/40 max-w-lg mb-14">A curated look at my output — from experimental tools to large-scale results.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl flex flex-col overflow-hidden hover:border-red-500/40 hover:shadow-[0_24px_70px_rgba(200,0,0,0.15)] transition-all duration-500 cursor-default"
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

              {/* ── IMAGE ZONE ── */}
              {project.imageBase64 ? (
                <div className="relative w-full h-44 overflow-hidden flex-shrink-0">
                  <img
                    src={project.imageBase64}
                    alt={project.title || "Project screenshot"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark gradient fade into card body */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0000] via-black/30 to-transparent" />
                  {/* Red vignette on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Links pinned to top-right of image */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-red-400 hover:bg-black/80 transition-all border border-white/10">
                        <FaGithub className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-red-300 hover:bg-black/80 transition-all border border-white/10">
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  {/* Index number watermark */}
                  <span className="absolute bottom-3 left-4 text-[10px] font-black tracking-[0.3em] text-white/20 uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ) : (
                /* ── NO IMAGE: clean minimal placeholder ── */
                <div className="relative w-full h-20 flex-shrink-0 bg-gradient-to-br from-red-950/60 to-black/40 border-b border-white/[0.04] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(180,0,0,0.12)_0%,transparent_70%)]" />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-red-800/30 via-red-500/10 to-transparent" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[42px] font-black tracking-tighter text-red-900/20 select-none leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute top-1/2 -translate-y-1/2 left-5 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaFolder className="w-4 h-4 text-red-400/70" />
                    </div>
                    {/* Links inline when no image */}
                    <div className="flex items-center gap-2 ml-1">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-red-400 transition-colors">
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-red-300 transition-colors">
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ── CARD BODY ── */}
              <div className="flex flex-col flex-1 p-6 relative z-10">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-300 transition-colors leading-snug">
                  {project.title || "Untitled Project"}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed flex-1">
                  {project.description}
                </p>

                {project.stack?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/[0.05]">
                    {project.stack.filter(t => t?.trim()).map(tech => (
                      <span key={tech} className="text-[10px] font-semibold text-red-400/70 bg-red-400/5 border border-red-500/10 px-2 py-0.5 rounded group-hover:border-red-500/20 transition-colors">
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
