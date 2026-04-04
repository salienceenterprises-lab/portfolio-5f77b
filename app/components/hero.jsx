"use client";
import { motion } from "framer-motion";
import { FaDownload, FaArrowDown } from "react-icons/fa";

export default function PortfolioHero({ data }) {
  const words = (data?.name || "").split(" ");
  const hasPhoto = !!data?.heroImageBase64;

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#0d0010" }}>

      {/* Diagonal stripe texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #e040fb 0px, #e040fb 1px, transparent 1px, transparent 40px)" }} />

      {/* Blobs */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full blur-[250px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(224,64,251,0.18) 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,234,0,0.1) 0%, transparent 70%)", transform: "translate(30%, 30%)" }} />

      {/* Glitch horizontal lines */}
      {[15, 42, 68, 85].map((top, i) => (
        <motion.div key={i}
          animate={{ scaleX: [1, 0.4, 1], opacity: [0.04, 0.12, 0.04], x: [0, i % 2 === 0 ? 8 : -8, 0] }}
          transition={{ duration: 3 + i * 1.5, repeat: Infinity, delay: i * 0.8 }}
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ top: `${top}%`, background: "#e040fb" }} />
      ))}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        {hasPhoto ? (
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8">
                <motion.div
                  animate={{ opacity: [1, 0.3, 1], x: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2" style={{ background: "#e040fb" }} />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]" style={{ color: "rgba(224,64,251,0.7)" }}>
                  {data?.title || "Portfolio"}
                </span>
                <div className="flex-1 h-px max-w-[60px]" style={{ background: "rgba(224,64,251,0.2)" }} />
              </motion.div>

              <div className="mb-8">
                {words.map((word, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.65, delay: i * 0.12, type: "spring", stiffness: 120, damping: 15 }}>
                      {/* Glitch offset layer */}
                      <div className="relative">
                        <h1 className="absolute font-black tracking-tighter leading-[0.88] uppercase select-none pointer-events-none"
                          style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color: "#e040fb", opacity: 0.4, transform: "translate(3px, 2px)" }}>
                          {word}
                        </h1>
                        <h1 className="relative font-black tracking-tighter leading-[0.88] uppercase"
                          style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color: i === words.length - 1 ? "#ffea00" : "white" }}>
                          {word}
                        </h1>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
                className="text-base leading-relaxed mb-10 max-w-md" style={{ color: "rgba(255,255,255,0.4)" }}>
                {data?.sloganHeroSection}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }}
                className="flex flex-wrap gap-4">
                {data?.resumeBase64 && (
                  <a href={`data:application/pdf;base64,${data.resumeBase64}`}
                    download={`${data.name || "Resume"}.pdf`}
                    className="flex items-center gap-2.5 px-7 py-3.5 text-sm font-black uppercase tracking-wider text-black transition-all hover:opacity-85"
                    style={{ background: "#e040fb", boxShadow: "0 0 30px rgba(224,64,251,0.4)" }}>
                    <FaDownload className="w-3.5 h-3.5" /> Resume
                  </a>
                )}
                <button onClick={scrollToContact}
                  className="flex items-center gap-2.5 px-7 py-3.5 text-sm font-black uppercase tracking-wider text-white transition-all border hover:border-[#e040fb] hover:text-[#e040fb]"
                  style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                  Contact Me
                </button>
              </motion.div>
            </div>

            {/* Photo — glitch-offset frame */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }} className="flex justify-center">
              <div className="relative">
                {/* Offset shadow layers */}
                <div className="absolute inset-0 translate-x-3 translate-y-3" style={{ background: "#e040fb", opacity: 0.25 }} />
                <div className="absolute inset-0 -translate-x-2 -translate-y-2" style={{ background: "#ffea00", opacity: 0.15 }} />
                <motion.div
                  animate={{ boxShadow: ["0 0 20px rgba(224,64,251,0.3)", "0 0 50px rgba(224,64,251,0.6)", "0 0 20px rgba(224,64,251,0.3)"] }}
                  transition={{ duration: 3, repeat: Infinity }}>
                  <img src={data.heroImageBase64} alt={data?.name || "Profile"}
                    className="relative w-56 h-72 sm:w-64 sm:h-80 object-cover"
                    style={{ border: "2px solid #e040fb" }} />
                </motion.div>
                {/* Corner accents */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: "#ffea00" }} />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: "#e040fb" }} />
              </div>
            </motion.div>
          </div>
        ) : (
          /* No photo */
          <div className="text-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3 mb-10">
              <div className="flex-1 h-px max-w-[80px]" style={{ background: "rgba(224,64,251,0.25)" }} />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]" style={{ color: "rgba(224,64,251,0.7)" }}>
                {data?.title || "Portfolio"}
              </span>
              <div className="flex-1 h-px max-w-[80px]" style={{ background: "rgba(224,64,251,0.25)" }} />
            </motion.div>

            <div className="mb-10">
              {words.map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.14, type: "spring", stiffness: 100, damping: 14 }}>
                    <div className="relative inline-block">
                      <h1 className="absolute font-black tracking-tighter leading-[0.88] uppercase select-none pointer-events-none w-full"
                        style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)", color: "#e040fb", opacity: 0.35, transform: "translate(4px, 3px)" }}>
                        {word}
                      </h1>
                      <h1 className="relative font-black tracking-tighter leading-[0.88] uppercase"
                        style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)", color: i === words.length - 1 ? "#ffea00" : "white" }}>
                        {word}
                      </h1>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              className="text-xl leading-relaxed mb-14 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.35)" }}>
              {data?.sloganHeroSection}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
              className="flex flex-wrap items-center justify-center gap-5">
              {data?.resumeBase64 && (
                <a href={`data:application/pdf;base64,${data.resumeBase64}`}
                  download={`${data.name || "Resume"}.pdf`}
                  className="flex items-center gap-2.5 px-9 py-4 text-sm font-black uppercase tracking-wider text-black transition-all hover:opacity-85"
                  style={{ background: "#e040fb", boxShadow: "0 0 40px rgba(224,64,251,0.4)" }}>
                  <FaDownload className="w-4 h-4" /> Download Resume
                </a>
              )}
              <button onClick={scrollToContact}
                className="flex items-center gap-2.5 px-9 py-4 text-sm font-black uppercase tracking-wider text-white border transition-all hover:border-[#ffea00] hover:text-[#ffea00]"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                Get In Touch
              </button>
            </motion.div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0d0010, transparent)" }} />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.5em]" style={{ color: "rgba(255,255,255,0.2)" }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <FaArrowDown className="w-3.5 h-3.5" style={{ color: "rgba(224,64,251,0.5)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
