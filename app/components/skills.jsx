"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PortfolioSkills({ data }) {
  if (!data?.skills || !Array.isArray(data.skills) || data.skills.length === 0) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.3, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section id="skills" className="py-28 px-6 bg-[linear-gradient(180deg,#091413_0%,#123127_100%)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-gradient-to-r from-[#B0E4CC] to-transparent" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#B0E4CC]">
              Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Tech Stack
          </h2>
          <p className="text-white/40 max-w-lg mb-14">
            Technologies and tools I work with on a daily basis.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.skills.map((skill, index) => (
            <motion.div
              key={`${skill}-${index}`}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              className="cursor-default"
            >
              <div className="group relative">
                <div className="absolute -inset-px bg-gradient-to-r from-[#408A71]/50 to-[#B0E4CC]/35 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />

                <div className="relative px-5 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm font-medium text-white/60 group-hover:text-white group-hover:border-[#408A71]/40 group-hover:bg-white/[0.08] transition-all duration-300">
                  {skill}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}