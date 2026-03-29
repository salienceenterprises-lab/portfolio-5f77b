"use client";
import { motion } from "framer-motion";

export default function PortfolioAbout({ data }) {
  if (!data?.bio) return null;
  const hasPhoto = !!data?.heroImageBase64;

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden bg-[#020b04]">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px]"
          style={{ background: "radial-gradient(circle, rgba(0,230,118,0.05), transparent 70%)" }} />
        {[15, 50, 85].map((left, i) => (
          <div key={i} className="absolute top-0 bottom-0 w-px"
            style={{ left: `${left}%`, background: "rgba(0,230,118,0.03)" }} />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-3">
          <span className="font-black text-base" style={{ color: "#00e676" }}>›</span>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase"
            style={{ color: "rgba(0,230,118,0.7)" }}>01 — About</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4 uppercase">
          The Story<br />Behind the Work
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-0.5 mb-16" style={{ background: "linear-gradient(90deg, #00e676, transparent)" }} />

        <div className={`grid gap-14 items-start ${hasPhoto ? "grid-cols-1 lg:grid-cols-5" : "grid-cols-1 max-w-3xl"}`}>

          {/* Bio */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className={`${hasPhoto ? "lg:col-span-3" : ""} relative pl-6`}>
            {/* Left border accent */}
            <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }}
              viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-0 top-0 w-0.5 origin-top"
              style={{ background: "linear-gradient(to bottom, #00e676, rgba(0,230,118,0.1))" }} />
            <p className="text-white/55 text-lg leading-[1.8] mb-8">{data.bio}</p>

            {data?.skills && data.skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {data.skills.slice(0, 8).map((skill, i) => (
                  <motion.span key={skill}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                    className="px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider border transition-all cursor-default"
                    style={{
                      color: "rgba(0,230,118,0.7)",
                      borderColor: "rgba(0,230,118,0.15)",
                      background: "rgba(0,230,118,0.04)",
                    }}>
                    {skill}
                  </motion.span>
                ))}
                {data.skills.length > 8 && (
                  <a href="#skills"
                    className="px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider border transition-all hover:border-[#00e676]/40"
                    style={{ color: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.08)" }}>
                    +{data.skills.length - 8} more
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {/* Photo */}
          {hasPhoto && (
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 blur-[40px]"
                  style={{ background: "rgba(0,230,118,0.1)", transform: "scale(1.3)" }} />
                <div className="relative" style={{ border: "1.5px solid rgba(0,230,118,0.25)" }}>
                  <img src={data.heroImageBase64} alt={data.name}
                    className="w-52 h-64 object-cover block"
                    style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)" }} />
                  <div className="absolute top-0 right-0 w-6 h-6 border-b border-l"
                    style={{ background: "#020b04", borderColor: "rgba(0,230,118,0.25)" }} />
                </div>
                <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2"
                  style={{ borderColor: "#00e676" }} />
                <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2"
                  style={{ borderColor: "#00e676" }} />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
