// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import resume from "../data/resume";
import Section from "./Section";

export default function Experience() {
  // Sort experiences by latest date first (assuming proper date strings)
  const sortedExp = [...resume.experience].sort((a, b) => {
    // crude sort: compare by year (the last 4 digits of start date)
    const getYear = (str) => {
      const match = str.match(/\d{4}/g);
      return match ? Math.max(...match.map(Number)) : 0;
    };
    return getYear(b.date) - getYear(a.date);
  });

  return (
    <Section id="experience" title="Experience">
      <div className="timeline">
        {sortedExp.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content card glass p-4">
              <h5 className="fw-bold mb-1">{exp.title}</h5>
              <h6 className="text-accent mb-2">{exp.company}</h6>
              <p className="text-accent mb-2">{exp.date}</p>
              <ul className="text-start">
                {exp.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
