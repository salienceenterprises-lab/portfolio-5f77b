"use client";
import React from "react";
import portfolioData from "../profile.json";
import OldMoneyNav       from "./components/nav";
import OldMoneyHero      from "./components/hero";
import OldMoneyAbout     from "./components/about";
import OldMoneyEducation from "./components/education";
import OldMoneyExperience from "./components/experience";
import OldMoneyProjects  from "./components/projects";
import OldMoneySkills    from "./components/skills";
import OldMoneyCommunity from "./components/community";
import OldMoneyContact   from "./components/contact";

export default function DeployedPortfolio() {
  const data = portfolioData;

  if (!data) return (
    <div style={{
      minHeight: "100vh", background: "#faf7f2",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: "11px", color: "#b0a898",
        letterSpacing: "0.25em", textTransform: "uppercase",
      }}>
        Loading…
      </span>
    </div>
  );

  return (
    <div style={{ background: "#faf7f2", minHeight: "100vh" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; scroll-padding-top: 72px; }
        ::placeholder { color: #c8bfb4; font-family: Georgia, serif; font-style: italic; }
        textarea { resize: none; }
        @media (max-width: 1023px) {
          .om-two-col { grid-template-columns: 1fr !important; }
          .om-exp-grid { grid-template-columns: 1fr !important; }
          .om-exp-grid > *:first-child { border-right: none !important; border-bottom: 1px solid #e0d8cc; }
        }
        @media (max-width: 767px) {
          section > div { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        }
      `}</style>

      <OldMoneyNav       data={data} />
      <OldMoneyHero      data={data} />
      <OldMoneyAbout     data={data} />
      <OldMoneyEducation data={data} />
      <OldMoneyExperience data={data} />
      <OldMoneyProjects  data={data} />
      <OldMoneySkills    data={data} />
      <OldMoneyCommunity data={data} />
      <OldMoneyContact   data={data} />
    </div>
  );
}
