// src/components/About.jsx
import React from "react";
import resume from "../data/resume";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="card glass p-4">
        <p>
          {resume.summary} I build ML systems, GenAI agents, and
          production-ready data pipelines. Currently working on
          multi-agent systems and RAG chatbots at Lennox India Technology
          Center.
        </p>
      </div>
    </Section>
  );
}
