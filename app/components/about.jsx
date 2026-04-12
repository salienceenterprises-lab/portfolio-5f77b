"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const CHARCOAL = "#1c1915";
const GREEN    = "#1e3a2f";
const GOLD     = "#b8923a";
const CREAM    = "#faf7f2";
const GREY     = "#7a7268";
const BORDER   = "#e0d8cc";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1], delay },
});

export default function OldMoneyAbout({ data }) {
  const skills = data?.skills || [];
  const flatSkills = skills.flatMap?.((s) =>
    typeof s === "object" && s.items ? s.items : [s]
  ) || skills;

  const infoRows = [
    data?.location && { icon: <FaMapMarkerAlt size={12} />, label: "Location",        value: data.location,        href: null },
    data?.email    && { icon: <FaEnvelope size={12} />,     label: "Correspondence",   value: data.email,           href: `mailto:${data.email}` },
    data?.linkedin && { icon: <FaLinkedin size={12} />,     label: "LinkedIn",         value: "View Profile",       href: data.linkedin },
    data?.github   && { icon: <FaGithub size={12} />,       label: "GitHub",           value: "View Profile",       href: data.github },
    data?.website  && { icon: <FaGlobe size={12} />,        label: "Website",          value: data.website,         href: data.website },
  ].filter(Boolean);

  return (
    <section id="about" style={{ background: "#f5f0e8", borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 3rem" }}>
        {/* Roman numeral header */}
        <motion.div {...reveal(0)} style={{
          display: "flex", alignItems: "center", gap: "20px",
          marginBottom: "4.5rem",
        }}>
          <span style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: "11px", fontWeight: 700, color: GREEN,
            letterSpacing: "0.25em", textTransform: "uppercase",
          }}>I.</span>
          <div style={{ width: "60px", height: "1px", background: GREEN, opacity: 0.4 }} />
          <span style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: "11px", letterSpacing: "0.25em",
            textTransform: "uppercase", color: GREY, fontWeight: 400,
          }}>Profile</span>
        </motion.div>

        <style>{`@media(max-width:768px){.om-about-grid{grid-template-columns:1fr!important;gap:2.5rem!important;} #about>div{padding:4rem 1.25rem!important;}}`}</style>
        <div className="om-about-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "5rem", alignItems: "start" }}>
          {/* Left */}
          <div>
            <motion.h2 {...reveal(0.05)} style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(2rem, 4vw, 3.8rem)",
              fontWeight: 700, color: CHARCOAL,
              letterSpacing: "-0.02em", lineHeight: 1.1,
              margin: "0 0 2rem",
            }}>
              A Career Built on<br />
              <span style={{ color: GREEN }}>Principle & Precision</span>
            </motion.h2>

            <motion.p {...reveal(0.1)} style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "16px", fontWeight: 400,
              color: GREY, lineHeight: 1.95,
              margin: "0 0 3rem",
              fontStyle: "normal",
            }}>
              {data?.bio || "A distinguished professional with a track record of decisive leadership, sound judgement, and principled conduct across complex environments. Recognized for building institutions of lasting value."}
            </motion.p>

            {flatSkills.length > 0 && (
              <motion.div {...reveal(0.15)}>
                <div style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "10px", letterSpacing: "0.25em",
                  textTransform: "uppercase", color: GOLD,
                  marginBottom: "1.2rem", fontWeight: 700,
                }}>
                  Areas of Expertise
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {flatSkills.slice(0, 12).map((skill, i) => {
                    const label = typeof skill === "string" ? skill : skill?.name || String(skill);
                    return (
                      <div key={i} style={{
                        display: "flex", alignItems: "center", gap: "14px",
                        padding: "10px 0",
                        borderBottom: `1px solid ${BORDER}`,
                      }}>
                        <div style={{ width: "4px", height: "4px", background: GREEN, transform: "rotate(45deg)", flexShrink: 0 }} />
                        <span style={{
                          fontFamily: 'Georgia, "Times New Roman", serif',
                          fontSize: "13px", color: CHARCOAL, letterSpacing: "0.04em",
                        }}>
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right: contact card */}
          {infoRows.length > 0 && (
            <motion.div {...reveal(0.1)}>
              <div style={{
                background: CREAM,
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${GREEN}`,
                padding: "2.5rem",
              }}>
                <div style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "10px", letterSpacing: "0.25em",
                  textTransform: "uppercase", color: GREEN,
                  fontWeight: 700, marginBottom: "2rem",
                }}>
                  Contact
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  {infoRows.map((row, i) => (
                    <div key={i} style={{
                      display: "flex", gap: "14px",
                      padding: "13px 0",
                      borderBottom: i < infoRows.length - 1 ? `1px solid ${BORDER}` : "none",
                      alignItems: "flex-start",
                    }}>
                      <div style={{ color: GOLD, marginTop: "2px", flexShrink: 0 }}>{row.icon}</div>
                      <div>
                        <div style={{
                          fontFamily: 'Georgia, "Times New Roman", serif',
                          fontSize: "9px", fontWeight: 700, color: GREY,
                          textTransform: "uppercase", letterSpacing: "0.18em",
                          marginBottom: "3px",
                        }}>{row.label}</div>
                        {row.href ? (
                          <a href={row.href} target="_blank" rel="noopener noreferrer"
                            style={{
                              fontFamily: 'Georgia, "Times New Roman", serif',
                              fontSize: "13px", color: CHARCOAL,
                              textDecoration: "none", transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = GREEN}
                            onMouseLeave={(e) => e.currentTarget.style.color = CHARCOAL}
                          >
                            {row.value}
                          </a>
                        ) : (
                          <span style={{ fontFamily: 'Georgia, serif', fontSize: "13px", color: CHARCOAL }}>{row.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
