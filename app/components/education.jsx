"use client";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function PortfolioEducation({ data }) {
  if (!data?.education || data.education.length === 0) return null;

  return (
    <section id="education" className="py-28 px-6 bg-[linear-gradient(180deg,#3D0000_0%,#000000_100%)]">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-3">
            <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-[1px] bg-gradient-to-r from-[#FF0000] to-transparent" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#FF0000]">Academic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Education</h2>
          <p className="text-white/40 max-w-lg mb-14">My academic background and specialized certifications.</p>
        </motion.div>

        <div className="relative">
          <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[19px] top-2 w-px bg-gradient-to-b from-[#FF0000]/60 via-white/10 to-transparent hidden sm:block origin-top" />

          <div className="space-y-8">
            {data.education.map((edu, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12, type: "spring", stiffness: 100 }}
                className="relative sm:pl-12">
                <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 rounded-full bg-black border border-[#FF0000]/30 items-center justify-center z-10">
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
                    className="w-2.5 h-2.5 rounded-full bg-[#FF0000] shadow-[0_0_10px_rgba(255,0,0,0.4)]" />
                </div>

                <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }} className="group relative">
                  <div className="absolute -inset-px bg-gradient-to-b from-white/[0.06] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 transition-all duration-500 group-hover:border-[#FF0000]/30 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-red-300 transition-colors">{edu.degree}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <FaGraduationCap className="w-3.5 h-3.5 text-red-400/70" />
                          <span className="text-sm text-red-400/85 font-medium">{edu.institution}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                        <span className="text-xs font-medium text-white/30 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full">{edu.period}</span>
                        {edu.location && <span className="text-xs text-white/25">{edu.location}</span>}
                      </div>
                    </div>

                    <p className="text-sm text-white/45 leading-relaxed mb-5">{edu.description}</p>

                    {edu.achievements && (
                      <ul className="space-y-2.5">
                        {edu.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-white/40">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/70 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
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
