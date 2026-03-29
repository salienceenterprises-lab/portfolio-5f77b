"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaEnvelope, FaDownload, FaArrowDown } from "react-icons/fa";

export default function PortfolioHero({ data }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 250]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const firstName = data?.name?.split(" ")[0] || "";
  const restName = data?.name?.split(" ").slice(1).join(" ") || "";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(149,1,1,0.35)_0%,rgba(0,0,0,1)_100%)]" />
        <motion.div animate={{ y: ["0%", "100%"] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/25 to-transparent z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/08 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 py-24">
        {data?.heroImageBase64 ? (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
              className="flex justify-center order-first md:order-last">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-red-600 to-red-900 rounded-full blur-lg opacity-40 animate-pulse" />
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full opacity-50" />
                <img src={data.heroImageBase64} alt={data?.name || "Profile"}
                  className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-red-900/60 shadow-2xl shadow-red-900/50" />
              </div>
            </motion.div>

            <div className="text-left">
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-6 inline-block">
                <span className="px-4 py-1.5 rounded-full border border-red-500/25 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.3em] text-red-400 font-bold">
                  {data?.title}
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-7xl font-black tracking-tighter leading-[0.88] text-white mb-6">
                {firstName}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-red-500">{restName}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
                className="text-base sm:text-xl text-white/45 max-w-lg font-light leading-relaxed mb-10">
                {data?.sloganHeroSection}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }} className="flex flex-wrap items-center gap-4">
                <motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,0,0,0.25)" }} whileTap={{ scale: 0.95 }}
                  href={data.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : "/resume.pdf"}
                  download={`${data.name || "Resume"}.pdf`}
                  className="group flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-red-900/50">
                  <FaDownload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Download Resume
                </motion.a>
                <motion.button whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.06)" }} whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="group flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-sm font-bold rounded-full backdrop-blur-sm transition-all">
                  <FaEnvelope className="w-4 h-4 text-red-400 group-hover:rotate-12 transition-transform" /> Get In Touch
                </motion.button>
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8 inline-block">
              <span className="px-4 py-1.5 rounded-full border border-red-500/20 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.3em] text-red-400 font-bold">
                {data?.title}
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl sm:text-[10rem] font-black tracking-tighter leading-[0.8] text-white">
              {firstName}
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-red-300/20 via-red-100/70 to-white">{restName}</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
              className="text-lg sm:text-2xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed tracking-tight mt-6 mb-14">
              {data?.sloganHeroSection}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }} className="flex flex-wrap items-center justify-center gap-6">
              <motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,0,0,0.2)" }} whileTap={{ scale: 0.95 }}
                href={data.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : "/resume.pdf"}
                download={`${data.name || "Resume"}.pdf`}
                className="group flex items-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-500 text-white text-sm font-bold rounded-full transition-all">
                <FaDownload className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /> Download Resume
              </motion.a>
              <motion.button whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }} whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="group flex items-center gap-3 px-10 py-5 border border-white/20 text-white text-sm font-bold rounded-full backdrop-blur-sm transition-all">
                <FaEnvelope className="w-4 h-4 text-red-400 group-hover:rotate-12 transition-transform" /> Get In Touch
              </motion.button>
            </motion.div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent z-10" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">Explore</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <FaArrowDown className="w-4 h-4 text-red-500/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
