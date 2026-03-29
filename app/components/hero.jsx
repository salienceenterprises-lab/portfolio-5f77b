"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaDownload, FaEnvelope, FaChevronDown } from "react-icons/fa";

export default function PortfolioHero({ data }) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const yParallax = useTransform(scrollY, [0, 400], [0, 80]);

  const firstName = data?.name?.split(" ")[0] || "";
  const lastName = data?.name?.split(" ").slice(1).join(" ") || "";

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  const stats = [
    data?.experience?.length > 0 && { label: "Roles", value: data.experience.length },
    data?.projects?.length > 0 && { label: "Projects", value: data.projects.length },
    data?.skills?.length > 0 && { label: "Skills", value: data.skills.length },
  ].filter(Boolean);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">

      {/* Electric neon grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.035)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-700/[0.07] blur-[160px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/[0.1] blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Diagonal slash lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[12%] w-px h-[130%] bg-gradient-to-b from-transparent via-blue-500/12 to-transparent"
          style={{ transform: "rotate(12deg)" }} />
        <div className="absolute top-[-10%] right-[18%] w-px h-[130%] bg-gradient-to-b from-transparent via-blue-400/6 to-transparent"
          style={{ transform: "rotate(12deg)" }} />
        <div className="absolute top-[-10%] right-[24%] w-px h-[130%] bg-gradient-to-b from-transparent via-blue-500/4 to-transparent"
          style={{ transform: "rotate(12deg)" }} />
      </div>

      {/* Horizontal scan line */}
      <motion.div
        animate={{ y: ["-100vh", "200vh"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent z-10 pointer-events-none"
      />

      <motion.div style={{ opacity, y: yParallax }}
        className="relative z-20 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-32 min-h-screen">

        {/* Left: content */}
        <div className="order-2 md:order-1">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="block w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.9)]"
            />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-400/80">{data?.title}</span>
          </motion.div>

          {/* Name — character-by-character reveal */}
          <div className="mb-8">
            {/* First name */}
            <div className="flex flex-wrap overflow-hidden">
              {firstName.split("").map((char, i) => (
                <motion.span
                  key={`fn-${i}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                  className="text-6xl sm:text-[5.5rem] font-black tracking-tighter text-white leading-none"
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            {/* Last name in electric blue */}
            <div className="flex flex-wrap overflow-hidden mt-1">
              {lastName.split("").map((char, i) => (
                <motion.span
                  key={`ln-${i}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.45 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                  className="text-6xl sm:text-[5.5rem] font-black tracking-tighter leading-none"
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-white/35 text-sm leading-relaxed max-w-sm mb-10"
          >
            {data?.sloganHeroSection}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {data?.resumeBase64 && (
              <motion.a
                whileHover={{ scale: 1.03, boxShadow: "0 0 35px rgba(59,130,246,0.45)" }}
                whileTap={{ scale: 0.97 }}
                href={`data:application/pdf;base64,${data.resumeBase64}`}
                download={`${data.name || "Resume"}.pdf`}
                className="group relative flex items-center gap-2.5 px-7 py-3.5 bg-blue-600 text-white text-xs font-black rounded-sm uppercase tracking-[0.15em] overflow-hidden transition-all shadow-lg shadow-blue-600/20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaDownload className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">Resume</span>
              </motion.a>
            )}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="flex items-center gap-2.5 px-7 py-3.5 border border-blue-500/30 text-white/60 text-xs font-black rounded-sm hover:border-blue-400/60 hover:text-white/90 transition-all uppercase tracking-[0.15em]"
            >
              <FaEnvelope className="w-3.5 h-3.5 text-blue-400" />
              Contact
            </motion.button>
          </motion.div>

          {/* Stats */}
          {stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex items-center gap-10 pt-8 border-t border-white/[0.06]"
            >
              {stats.map((stat, i) => (
                <div key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
                    className="text-3xl font-black text-blue-400 tabular-nums"
                  >
                    {String(stat.value).padStart(2, "0")}
                  </motion.div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Right: Diamond photo */}
        <div className="order-1 md:order-2 flex justify-center items-center">
          {data?.heroImageBase64 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.75, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 70, damping: 14 }}
              className="relative w-60 h-60 sm:w-80 sm:h-80"
            >
              {/* Glow behind diamond */}
              <div
                className="absolute inset-0 scale-110 bg-blue-500/20 blur-2xl"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />

              {/* Slow rotating outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-5 border border-dashed border-blue-500/20"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />

              {/* Cardinal corner dots */}
              {[
                { top: 0, left: "50%", transform: "translateX(-50%)" },
                { bottom: 0, left: "50%", transform: "translateX(-50%)" },
                { left: 0, top: "50%", transform: "translateY(-50%)" },
                { right: 0, top: "50%", transform: "translateY(-50%)" },
              ].map((style, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.3, 0.9] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.55 }}
                  className="absolute w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)] z-20"
                  style={style}
                />
              ))}

              {/* Hard border */}
              <div
                className="absolute inset-2 border-2 border-blue-500/50 z-10"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />

              {/* Photo */}
              <div
                className="absolute inset-2 overflow-hidden"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              >
                <img
                  src={data.heroImageBase64}
                  alt={data.name}
                  className="w-full h-full object-cover scale-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-transparent" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-60 h-60 sm:w-80 sm:h-80"
            >
              <div
                className="absolute inset-0 bg-blue-500/10 blur-xl"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />
              <div
                className="absolute inset-0 border border-blue-500/30"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-dashed border-blue-400/20"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-black text-blue-400/50 tracking-tighter">
                  {data?.name?.split(" ").map((w) => w[0]).join("") || "?"}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <FaChevronDown className="w-3.5 h-3.5 text-blue-400/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}
