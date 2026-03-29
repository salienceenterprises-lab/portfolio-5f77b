"use client";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

export default function PortfolioAbout({ data }) {
  const topSkills = data?.skills?.slice(0, 8) || [];

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden bg-[#080d18]">

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-blue-700/[0.05] blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3" />
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
          <span className="text-[10px] font-black tracking-[0.35em] uppercase text-blue-400/80">01 — Who I Am</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/20 to-transparent max-w-[80px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-6xl font-black tracking-tighter text-white mb-16 uppercase"
        >
          About<span className="text-blue-400">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          >
            {/* Quote decoration + bio */}
            <div className="relative mb-8">
              <span className="absolute -top-4 -left-2 text-8xl font-black text-blue-500/10 leading-none select-none">"</span>
              <div className="pl-6 border-l-2 border-blue-500/60 relative z-10">
                <p className="text-white/55 text-base leading-[1.9] font-light">
                  {data?.bio || data?.about || "Portfolio bio goes here."}
                </p>
              </div>
            </div>

            {/* Core stack */}
            {topSkills.length > 0 && (
              <div className="mt-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[9px] font-black uppercase tracking-[0.35em] text-white/25">Core Stack</span>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {topSkills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ borderColor: "rgba(59,130,246,0.7)", color: "rgba(147,197,253,1)" }}
                      className="px-3.5 py-1.5 bg-blue-500/[0.07] border border-blue-500/20 text-blue-300/70 text-[10px] font-bold rounded-sm uppercase tracking-wider cursor-default transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 80 }}
            className="flex justify-center"
          >
            {data?.heroImageBase64 ? (
              <div className="relative w-72 h-80">
                {/* Corner bracket decorations */}
                <div className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-blue-500/60 z-20" />
                <div className="absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-blue-500/60 z-20" />
                <div className="absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-blue-500/60 z-20" />
                <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-blue-500/60 z-20" />

                {/* Glow */}
                <div className="absolute inset-0 bg-blue-500/15 blur-xl scale-105" />

                {/* Photo */}
                <div className="absolute inset-0 overflow-hidden border border-blue-500/25">
                  <img
                    src={data.heroImageBase64}
                    alt={data.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/60 to-transparent" />
                </div>

                {/* Name tag */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-[#050505]/80 backdrop-blur-sm border border-blue-500/20 px-3 py-2">
                    <p className="text-xs font-black text-white/80 tracking-wider uppercase">{data?.name}</p>
                    <p className="text-[9px] text-blue-400/70 font-bold uppercase tracking-widest mt-0.5">{data?.title}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-72 h-80 bg-blue-500/[0.04] border border-blue-500/15 flex items-center justify-center">
                <div className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-blue-500/40" />
                <div className="absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-blue-500/40" />
                <div className="absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-blue-500/40" />
                <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-blue-500/40" />
                <FaUser className="w-16 h-16 text-blue-500/20" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
