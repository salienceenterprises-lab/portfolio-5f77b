"use client";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaArrowDown } from "react-icons/fa";

export default function PortfolioHero({ data }) {
  const words = (data?.name || "").split(" ");
  const hasPhoto = !!data?.heroImageBase64;

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020b04]">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[12, 28, 50, 72, 88].map((left, i) => (
          <div key={i} className="absolute top-0 bottom-0 w-px"
            style={{ left: `${left}%`, background: "rgba(0,230,118,0.04)" }} />
        ))}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[220px]"
          style={{ background: "radial-gradient(circle, rgba(0,230,118,0.1), transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(circle, rgba(0,230,118,0.06), transparent 70%)" }} />
        {/* Moving scan line */}
        <motion.div
          animate={{ y: ["-100vh", "200vh"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px opacity-20"
          style={{ background: "linear-gradient(90deg, transparent, #00e676, transparent)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        {hasPhoto ? (
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8">
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2" style={{ background: "#00e676" }} />
                <span className="text-[10px] font-black tracking-[0.45em] uppercase"
                  style={{ color: "rgba(0,230,118,0.7)" }}>
                  {data?.title || "Portfolio"}
                </span>
              </motion.div>

              <div className="mb-8 overflow-hidden">
                {words.map((word, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h1
                      initial={{ opacity: 0, y: i % 2 === 0 ? -48 : 48 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.1 + i * 0.13, type: "spring", stiffness: 120, damping: 14 }}
                      className="font-black tracking-tighter leading-[0.9] text-white uppercase"
                      style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)" }}>
                      {i === words.length - 1
                        ? <span style={{ color: "#00e676" }}>{word}</span>
                        : word}
                    </motion.h1>
                  </div>
                ))}
              </div>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
                className="text-white/40 text-base leading-relaxed mb-10 max-w-md">
                {data?.sloganHeroSection}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}
                className="flex flex-wrap gap-4">
                {data?.resumeBase64 && (
                  <a href={`data:application/pdf;base64,${data.resumeBase64}`}
                    download={`${data.name || "Resume"}.pdf`}
                    className="flex items-center gap-2.5 px-7 py-3.5 text-sm font-black uppercase tracking-wider text-[#020b04] transition-all hover:opacity-85"
                    style={{ background: "#00e676" }}>
                    <FaDownload className="w-3.5 h-3.5" /> Resume
                  </a>
                )}
                <button onClick={scrollToContact}
                  className="flex items-center gap-2.5 px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white/60 border transition-all hover:text-white hover:border-[#00e676]/50"
                  style={{ borderColor: "rgba(0,230,118,0.2)" }}>
                  <FaEnvelope className="w-3.5 h-3.5" style={{ color: "#00e676" }} /> Contact
                </button>
              </motion.div>
            </div>

            {/* Photo — chamfered portrait frame */}
            <motion.div initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 blur-[70px]"
                  style={{ background: "rgba(0,230,118,0.14)", transform: "scale(1.3)" }} />
                <div className="relative">
                  <motion.div
                    animate={{ boxShadow: ["0 0 25px rgba(0,230,118,0.15)", "0 0 55px rgba(0,230,118,0.3)", "0 0 25px rgba(0,230,118,0.15)"] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ border: "1.5px solid rgba(0,230,118,0.35)" }}>
                    <img src={data.heroImageBase64} alt={data?.name || "Profile"}
                      className="w-56 h-72 sm:w-64 sm:h-80 object-cover block"
                      style={{ clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)" }} />
                    {/* Corner cut fill */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-b border-l"
                      style={{ background: "#020b04", borderColor: "rgba(0,230,118,0.35)" }} />
                  </motion.div>
                  {/* Corner brackets */}
                  <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2"
                    style={{ borderColor: "#00e676" }} />
                  <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2"
                    style={{ borderColor: "#00e676" }} />
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          /* No photo — centered */
          <div className="text-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3 mb-10">
              <div className="flex-1 h-px max-w-[60px]" style={{ background: "rgba(0,230,118,0.25)" }} />
              <span className="text-[10px] font-black tracking-[0.45em] uppercase"
                style={{ color: "rgba(0,230,118,0.7)" }}>
                {data?.title || "Portfolio"}
              </span>
              <div className="flex-1 h-px max-w-[60px]" style={{ background: "rgba(0,230,118,0.25)" }} />
            </motion.div>

            <div className="mb-10 overflow-hidden">
              {words.map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, y: i % 2 === 0 ? -60 : 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 + i * 0.15, type: "spring", stiffness: 100, damping: 14 }}
                    className="font-black tracking-tighter leading-[0.88] text-white uppercase"
                    style={{ fontSize: "clamp(3.5rem, 11vw, 8rem)" }}>
                    {i === words.length - 1
                      ? <span style={{ color: "#00e676" }}>{word}</span>
                      : word}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
              className="text-white/35 text-lg leading-relaxed mb-14 max-w-2xl mx-auto">
              {data?.sloganHeroSection}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15 }}
              className="flex flex-wrap items-center justify-center gap-5">
              {data?.resumeBase64 && (
                <a href={`data:application/pdf;base64,${data.resumeBase64}`}
                  download={`${data.name || "Resume"}.pdf`}
                  className="flex items-center gap-2.5 px-9 py-4 text-sm font-black uppercase tracking-wider text-[#020b04] transition-all hover:opacity-85"
                  style={{ background: "#00e676" }}>
                  <FaDownload className="w-3.5 h-3.5" /> Download Resume
                </a>
              )}
              <button onClick={scrollToContact}
                className="flex items-center gap-2.5 px-9 py-4 text-sm font-black uppercase tracking-wider text-white/60 border transition-all hover:text-white"
                style={{ borderColor: "rgba(0,230,118,0.2)" }}>
                <FaEnvelope className="w-3.5 h-3.5" style={{ color: "#00e676" }} /> Get In Touch
              </button>
            </motion.div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020b04] to-transparent z-10" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.5em] text-white/20">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <FaArrowDown className="w-3.5 h-3.5" style={{ color: "rgba(0,230,118,0.4)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
