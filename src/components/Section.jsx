// src/components/Section.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="my-5 py-4">
      {/* Animated heading */}
      <motion.h2
        className="section-heading mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {title}
      </motion.h2>

      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
