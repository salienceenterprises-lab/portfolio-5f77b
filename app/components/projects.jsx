"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const CHARCOAL = "#1c1915";
const GREEN    = "#1e3a2f";
const GOLD     = "#b8923a";
const CREAM    = "#faf7f2";
const GREY     = "#7a7268";
const BORDER   = "#e0d8cc";

export default function OldMoneyProjects({ data }) {
  const list = data?.projects || [];
  if (!list.length) return null;

  return (
    <section id="projects" style={{ background: CREAM, borderTop: `1px solid ${BORDER}` }}>
      <style>{`
        @media(max-width:768px){
          .om-proj-inner { padding: 4rem 1.25rem !important; }
          .om-proj-row   { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .om-proj-numeral { display: none !important; }
          .om-proj-links { justify-content: flex-start !important; }
        }
      `}</style>
      <div className="om-proj-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "4.5rem" }}
        >
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", fontWeight: 700, color: GREEN, letterSpacing: "0.25em", textTransform: "uppercase" }}>IV.</span>
          <div style={{ width: "60px", height: "1px", background: GREEN, opacity: 0.4 }} />
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: GREY }}>Select Engagements</span>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", borderTop: `1px solid ${BORDER}` }}>
          {list.map((project, i) => {
            const tags = Array.isArray(project.stack) ? project.stack
              : Array.isArray(project.tags) ? project.tags
              : Array.isArray(project.technologies) ? project.technologies
              : Array.isArray(project.tech) ? project.tech : [];
            const demoLink   = project.demo  || project.live || project.url || project.link;
            const githubLink = project.github;

            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                className="om-proj-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: "2rem",
                  padding: "2.5rem 0",
                  borderBottom: `1px solid ${BORDER}`,
                  alignItems: "start",
                }}
              >
                {/* Roman numeral */}
                <div className="om-proj-numeral" style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: "20px", color: BORDER,
                  fontWeight: 700, paddingTop: "4px",
                  userSelect: "none", lineHeight: 1,
                }}>
                  {["I","II","III","IV","V","VI","VII","VIII"][i] || i + 1}
                </div>

                <div>
                  {/* Project image — 16:9 aspect ratio, elegant */}
                  {project.imageBase64 && (
                    <div style={{
                      width: "100%", paddingTop: "52%", position: "relative",
                      overflow: "hidden", marginBottom: "1.25rem",
                      border: `1px solid ${BORDER}`,
                    }}>
                      <img
                        src={project.imageBase64}
                        alt={project.title || project.name || "Project"}
                        style={{
                          position: "absolute", inset: 0,
                          width: "100%", height: "100%",
                          objectFit: "cover", objectPosition: "center top",
                          display: "block",
                          filter: "brightness(1.0) saturate(0.85) sepia(0.05)",
                        }}
                      />
                    </div>
                  )}

                  <h3 style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: "19px", fontWeight: 700,
                    color: CHARCOAL, letterSpacing: "-0.01em",
                    margin: "0 0 0.6rem",
                  }}>
                    {project.title || project.name}
                  </h3>

                  {project.description && (
                    <p style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: "14px", color: GREY,
                      lineHeight: 1.8, margin: "0 0 1rem",
                      maxWidth: "600px",
                    }}>
                      {project.description}
                    </p>
                  )}

                  {tags.filter(Boolean).length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1rem" }}>
                      {tags.filter(Boolean).map((tag, j) => (
                        <span key={j} style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: "10px", letterSpacing: "0.14em",
                          textTransform: "uppercase", color: GREEN,
                          border: `1px solid ${GREEN}35`,
                          padding: "3px 10px",
                          background: "rgba(30,58,47,0.04)",
                        }}>
                          {typeof tag === "string" ? tag : tag?.name || String(tag)}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links row */}
                  {(demoLink || githubLink) && (
                    <div className="om-proj-links" style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
                      {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer"
                          style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            fontFamily: 'Georgia, serif',
                            fontSize: "10px", letterSpacing: "0.15em",
                            textTransform: "uppercase", color: GOLD,
                            textDecoration: "none", transition: "opacity 0.2s",
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.6"}
                          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                        >
                          View <FaExternalLinkAlt size={9} />
                        </a>
                      )}
                      {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer"
                          style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            fontFamily: 'Georgia, serif',
                            fontSize: "10px", letterSpacing: "0.15em",
                            textTransform: "uppercase", color: GREY,
                            textDecoration: "none", transition: "opacity 0.2s",
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.6"}
                          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                        >
                          <FaGithub size={12} /> GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
