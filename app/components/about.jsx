"use client";
import { motion } from "framer-motion";
import { FaUser, FaStar } from "react-icons/fa";

export default function PortfolioAbout({ data }) {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden bg-[linear-gradient(180deg,#140707_0%,#0a0a0a_100%)]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF0000]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-3">
            <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-[1px] bg-gradient-to-r from-[#FF0000] to-transparent" />
            <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#FF0000]">
              <FaStar className="w-3 h-3" /> About
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">Bold focus. Zero hesitation.</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative">
          <div className="absolute -inset-px bg-gradient-to-b from-[#FF0000]/30 via-transparent to-[#950101]/25 rounded-2xl opacity-70" />
          <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-white/[0.06] overflow-hidden">
            <div className="flex items-start gap-6">
              {data?.heroImageBase64 ? (
                <div className="hidden sm:block flex-shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-red-500/50 to-red-900/30 rounded-full blur-sm" />
                    <img src={data.heroImageBase64} alt={data.name}
                      className="relative w-20 h-20 rounded-full object-cover border-2 border-red-500/30 shadow-lg shadow-red-900/40" />
                  </div>
                </div>
              ) : (
                <div className="hidden sm:flex w-12 h-12 rounded-xl bg-[#950101]/20 items-center justify-center flex-shrink-0 mt-1 border border-[#FF0000]/20 shadow-[0_0_20px_rgba(255,0,0,0.10)] group-hover:scale-110 transition-transform duration-500">
                  <FaUser className="w-5 h-5 text-[#FF0000]" />
                </div>
              )}

              <div className="flex-1">
                <p className="text-white/75 text-lg leading-relaxed">{data.bio}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {data.skills?.slice(0, 6).map((skill) => (
                    <span key={skill}
                      className="px-4 py-2 text-xs font-medium text-red-300 bg-red-950/30 border border-red-700/30 rounded-full cursor-default transition-all hover:scale-105 hover:bg-red-900/40 hover:text-white">
                      {skill}
                    </span>
                  ))}
                  {data.skills?.length > 6 && (
                    <a href="#skills"
                      className="px-4 py-2 text-xs font-medium text-white/50 hover:text-white/80 bg-white/5 border border-white/10 rounded-full transition-all cursor-pointer">
                      +{data.skills.length - 6} more
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
