"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

export default function PortfolioProjects({ data }) {
  if (!data?.projects?.length) return null;

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden bg-[#040f1e]">

      {/* Ambient depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/[0.06] rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

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
          <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-cyan-400/80">04 — Projects</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4"
        >
          What I've Built
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/30 text-sm mb-16 max-w-md"
        >
          A selection of projects I'm proud of — from concept to deployment.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-cyan-500/30 hover:shadow-[0_20px_60px_rgba(6,182,212,0.1)] transition-all duration-400"
            >
              {/* Background hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              {proj.imageBase64 ? (
                /* Cinematic banner with image */
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={proj.imageBase64}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Sonar ring overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#040f1e]" />
                  <div className="absolute inset-0 bg-[#040f1e]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  {/* Index watermark */}
                  <div className="absolute top-3 right-3 text-[10px] font-black text-white/15 tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {/* Links floating over image */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#020c18]/90 border border-white/20 rounded-full text-[10px] font-bold text-white/80 hover:text-white hover:border-cyan-400/50 transition-all backdrop-blur-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-3 h-3" /> Code
                      </a>
                    )}
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/80 border border-cyan-400/40 rounded-full text-[10px] font-bold text-white hover:bg-cyan-400 transition-all backdrop-blur-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="w-2.5 h-2.5" /> Live
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                /* Elegant no-image header strip */
                <div className="relative h-20 bg-gradient-to-br from-[#061e34] to-[#041120] border-b border-white/[0.05] flex items-center px-6 overflow-hidden">
                  <div className="absolute -right-4 -top-4 text-7xl font-black text-white/[0.03] select-none leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                      <FaFolder className="w-4 h-4 text-cyan-400/70" />
                    </div>
                    <div className="flex items-center gap-3">
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white transition-colors">
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                      {proj.demo && (
                        <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-cyan-400 transition-colors">
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {proj.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed flex-1">
                  {proj.description}
                </p>

                {proj.stack?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/[0.05]">
                    {proj.stack.filter(t => t?.trim()).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-bold text-cyan-400/60 bg-cyan-400/[0.06] border border-cyan-400/10 px-2.5 py-1 rounded-md tracking-wide"
                      >
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
