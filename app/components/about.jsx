"use client";
import { motion } from "framer-motion";

export default function PortfolioAbout({ data }) {
  if (!data?.bio) return null;
  const hasPhoto = !!data?.heroImageBase64;

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden" style={{ background: "#100015" }}>

      {/* Stripe texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #e040fb 0px, #e040fb 1px, transparent 1px, transparent 40px)" }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,234,0,0.08) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: "#e040fb" }}>01 /</span>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/40">About</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-2 uppercase leading-none">
          The Story<br /><span style={{ color: "#ffea00" }}>Behind the Work</span>
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 120 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-0.5 mb-14"
          style={{ background: "linear-gradient(90deg, #e040fb, #ffea00, transparent)" }} />

        <div className={`grid gap-14 items-start ${hasPhoto ? "grid-cols-1 lg:grid-cols-5" : "grid-cols-1 max-w-3xl"}`}>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className={`${hasPhoto ? "lg:col-span-3" : ""} relative pl-5`}>
            <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="absolute left-0 top-0 w-0.5 origin-top"
              style={{ background: "linear-gradient(to bottom, #e040fb, rgba(224,64,251,0.1))" }} />
            <p className="text-lg leading-[1.85] mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>{data.bio}</p>

            {data?.skills?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {data.skills.slice(0, 8).map((skill, i) => (
                  <motion.span key={skill}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                    className="px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider transition-all cursor-default"
                    style={{ color: "rgba(224,64,251,0.8)", background: "rgba(224,64,251,0.08)", border: "1px solid rgba(224,64,251,0.2)" }}>
                    {skill}
                  </motion.span>
                ))}
                {data.skills.length > 8 && (
                  <a href="#skills"
                    className="px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider transition-all"
                    style={{ color: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    +{data.skills.length - 8} more
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {hasPhoto && (
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 opacity-30" style={{ background: "#e040fb" }} />
                <div className="absolute inset-0 -translate-x-2 -translate-y-2 opacity-15" style={{ background: "#ffea00" }} />
                <img src={data.heroImageBase64} alt={data.name}
                  className="relative w-52 h-64 object-cover"
                  style={{ border: "2px solid #e040fb" }} />
                <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2" style={{ borderColor: "#ffea00" }} />
                <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2" style={{ borderColor: "#e040fb" }} />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
