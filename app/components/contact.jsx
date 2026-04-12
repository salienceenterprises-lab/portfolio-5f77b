"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const CHARCOAL = "#1c1915";
const GREEN    = "#1e3a2f";
const GOLD     = "#b8923a";
const CREAM    = "#faf7f2";
const GREY     = "#7a7268";
const BORDER   = "#e0d8cc";

export default function OldMoneyContact({ data }) {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [focused, setFocused] = useState(null);

  const WEB3FORMS_KEY = data?.web3forms_key || process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio Enquiry from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          botcheck: "",
        }),
      });
      const r = await res.json();
      setStatus(r.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: CREAM,
    border: "none",
    borderBottom: `1px solid ${focused === field ? GREEN : BORDER}`,
    color: CHARCOAL,
    fontSize: "14px",
    fontFamily: 'Georgia, "Times New Roman", serif',
    padding: "12px 0",
    outline: "none",
    transition: "border-color 0.25s ease",
    boxSizing: "border-box",
    fontWeight: 400,
  });

  return (
    <section id="contact" style={{ background: "#f5f0e8", borderTop: `1px solid ${BORDER}` }}>
      {/* Gold top rule */}
      <div style={{ height: "2px", background: GOLD, opacity: 0.5 }} />

      <style>{`@media(max-width:768px){.om-contact-inner{padding:4rem 1.25rem 8rem!important;}}`}</style>
      <div className="om-contact-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 3rem 8rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "3.5rem" }}
        >
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", fontWeight: 700, color: GREEN, letterSpacing: "0.25em", textTransform: "uppercase" }}>VII.</span>
          <div style={{ width: "60px", height: "1px", background: GREEN, opacity: 0.4 }} />
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: GREY }}>Correspondence</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.05 }}
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)",
            fontWeight: 700, color: CHARCOAL,
            letterSpacing: "-0.02em", lineHeight: 1.1,
            margin: "0 0 5rem",
          }}
        >
          Open to Dialogue<br />
          <span style={{ color: GREEN }}>& Opportunity.</span>
        </motion.h2>

        <style>{`@media(max-width:768px){.om-contact-grid{grid-template-columns:1fr!important;gap:2.5rem!important;}}`}</style>
        <div className="om-contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: "15px", fontStyle: "italic",
              color: GREY, lineHeight: 1.9,
              margin: "0 0 3rem", maxWidth: "380px",
            }}>
              I welcome substantive enquiries regarding strategic partnerships, board opportunities, advisory roles, and senior appointments.
            </p>

            {data?.email && (
              <div style={{ marginBottom: "2rem" }}>
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: "9px", letterSpacing: "0.22em",
                  textTransform: "uppercase", color: GOLD,
                  fontWeight: 700, marginBottom: "8px",
                }}>
                  Direct Line
                </div>
                <a href={`mailto:${data.email}`}
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: "14px", color: CHARCOAL,
                    textDecoration: "none", transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = GREEN}
                  onMouseLeave={(e) => e.currentTarget.style.color = CHARCOAL}
                >
                  {data.email}
                </a>
              </div>
            )}

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {data?.linkedin && (
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer"
                  style={{ width: "40px", height: "40px", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: GREY, textDecoration: "none", transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = GREEN; e.currentTarget.style.color = GREEN; e.currentTarget.style.background = "rgba(30,58,47,0.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = GREY; e.currentTarget.style.background = "transparent"; }}
                >
                  <FaLinkedin size={15} />
                </a>
              )}
              {data?.github && (
                <a href={data.github} target="_blank" rel="noopener noreferrer"
                  style={{ width: "40px", height: "40px", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: GREY, textDecoration: "none", transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = GREEN; e.currentTarget.style.color = GREEN; e.currentTarget.style.background = "rgba(30,58,47,0.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = GREY; e.currentTarget.style.background = "transparent"; }}
                >
                  <FaGithub size={15} />
                </a>
              )}
              {data?.email && (
                <a href={`mailto:${data.email}`}
                  style={{ width: "40px", height: "40px", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", color: GREY, textDecoration: "none", transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = GREEN; e.currentTarget.style.color = GREEN; e.currentTarget.style.background = "rgba(30,58,47,0.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = GREY; e.currentTarget.style.background = "transparent"; }}
                >
                  <FaEnvelope size={14} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          >
            {status === "sent" ? (
              <div style={{
                border: `1px solid ${GREEN}40`,
                background: "rgba(30,58,47,0.04)",
                padding: "3rem", textAlign: "center",
              }}>
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: "32px", color: GREEN,
                  marginBottom: "1rem",
                }}>✦</div>
                <h3 style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "18px", fontWeight: 700,
                  color: CHARCOAL, marginBottom: "0.5rem",
                }}>
                  Enquiry Received
                </h3>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: "13px", color: GREY, fontStyle: "italic" }}>
                  You will hear from me within two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2.2rem" }}>
                {[
                  { field: "name",    label: "Full Name",        type: "text",  placeholder: "Your full name" },
                  { field: "email",   label: "Email Address",    type: "email", placeholder: "your@address.com" },
                ].map(({ field, label, type, placeholder }) => (
                  <div key={field}>
                    <label style={{
                      display: "block",
                      fontFamily: 'Georgia, serif',
                      fontSize: "9px", fontWeight: 700,
                      textTransform: "uppercase", letterSpacing: "0.22em",
                      color: GREY, marginBottom: "8px",
                    }}>{label}</label>
                    <input type={type} placeholder={placeholder} required
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      onFocus={() => setFocused(field)} onBlur={() => setFocused(null)}
                      style={inputStyle(field)} />
                  </div>
                ))}
                <div>
                  <label style={{
                    display: "block",
                    fontFamily: 'Georgia, serif',
                    fontSize: "9px", fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.22em",
                    color: GREY, marginBottom: "8px",
                  }}>Enquiry</label>
                  <textarea rows={4} placeholder="Describe your proposal or enquiry…" required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), resize: "none" }} />
                </div>

                <div>
                  <button type="submit" disabled={status === "sending"}
                    style={{
                      background: GREEN, color: "#f5f0e8",
                      border: "none", padding: "13px 40px",
                      fontFamily: 'Georgia, serif',
                      fontSize: "11px", letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      cursor: status === "sending" ? "not-allowed" : "pointer",
                      opacity: status === "sending" ? 0.6 : 1,
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => { if (status !== "sending") e.currentTarget.style.background = "#152b22"; }}
                    onMouseLeave={(e) => { if (status !== "sending") e.currentTarget.style.background = GREEN; }}
                  >
                    {status === "sending" ? "Sending…" : "Submit Enquiry"}
                  </button>
                  {status === "error" && (
                    <p style={{ fontFamily: 'Georgia, serif', fontSize: "12px", color: "#9b2c2c", marginTop: "1rem", fontStyle: "italic" }}>
                      Something went wrong. Please try again or write directly.
                    </p>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginTop: "5rem", paddingTop: "2rem",
          borderTop: `1px solid ${BORDER}`,
          flexWrap: "wrap", gap: "1rem",
        }}>
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", color: "#b0a898", fontStyle: "italic" }}>
            © {new Date().getFullYear()} {data?.name}. All rights reserved.
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "24px", height: "1px", background: GOLD, opacity: 0.6 }} />
            <div style={{ width: "4px", height: "4px", background: GOLD, transform: "rotate(45deg)", opacity: 0.6 }} />
            <div style={{ width: "24px", height: "1px", background: GOLD, opacity: 0.6 }} />
          </div>
          <span style={{ fontFamily: 'Georgia, serif', fontSize: "11px", color: "#b0a898" }}>
            Built with <span style={{ fontWeight: 700, color: GOLD }}>Salience</span>
          </span>
        </div>
      </div>
    </section>
  );
}
