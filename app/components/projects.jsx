"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

export default function PortfolioProjects({ data }) {
  if (!data?.projects?.length) return null;

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden bg-[#080d18]">

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/[0.05] blur-[150px] rounded-full translate-x-1/3 -translate-y-1/4" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="text-blue-400/40 font-black text-xs tracking-widest select-none">{"//"}</span>
          <span className="text-[10px] font-black tracking-[0.35em] uppercase text-blue-400/80">03 — Operations</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent max-w-[80px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-6xl font-black tracking-tighter text-white mb-4 uppercase"
        >
          Projects<span className="text-blue-400">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/30 text-sm mb-16 max-w-sm"
        >
          Selected work — executed with precision.
        </motion.p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative bg-blue-500/[0.03] border border-blue-500/15 overflow-hidden transition-all duration-300 hover:border-blue-500/45 hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]"
            >
              {/* Corner bracket accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/70 transition-colors duration-400 z-20" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/70 transition-colors duration-400 z-20" />

              {/* With image: cinematic banner */}
              {proj.imageBase64 ? (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={proj.imageBase64}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080d18]/30 to-[#080d18]" />
                  {/* Scan line on hover */}
                  <motion.div
                    initial={{ y: "-100%", opacity: 0 }}
                    whileHover={{ y: "200%", opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                  />
                  {/* Hover link buttons */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#050505]/90 border border-blue-500/40 text-[10px] font-black uppercase tracking-wider text-white/70 hover:text-blue-300 hover:border-blue-400/70 transition-colors duration-200"
                      >
                        <FaGithub className="w-3 h-3" /> Code
                      </a>
                    )}
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/90 border border-blue-500/50 text-[10px] font-black uppercase tracking-wider text-white hover:bg-blue-500/90 transition-colors duration-200"
                      >
                        <FaExternalLinkAlt className="w-2.5 h-2.5" /> Live
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                /* Without image: dark header with index watermark */
                <div className="relative h-24 bg-gradient-to-br from-blue-900/20 to-[#050505] border-b border-blue-500/10 overflow-hidden flex items-center px-5">
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-7xl font-black text-blue-400/[0.07] select-none leading-none tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-3 relative z-10">
                    <FaFolder className="w-5 h-5 text-blue-400/50 flex-shrink-0" />
                    <div className="flex gap-2">
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer"
                          className="text-white/30 hover:text-blue-400 transition-colors">
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                      {proj.demo && (
                        <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                          className="text-white/30 hover:text-blue-400 transition-colors">
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Card body */}
              <div className="p-5">
                <h3 className="font-black text-white text-sm uppercase tracking-wider mb-2 group-hover:text-blue-200 transition-colors duration-300">
                  {proj.title}
                </h3>
                {proj.description && (
                  <p className="text-sm text-white/35 leading-relaxed mb-4">{proj.description}</p>
                )}
                {proj.tech?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                    {proj.tech.filter((t) => t?.trim()).map((tech) => (
                      <span key={tech}
                        className="text-[9px] font-bold uppercase tracking-wider text-blue-400/50 bg-blue-500/[0.07] border border-blue-500/15 px-2 py-0.5">
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
