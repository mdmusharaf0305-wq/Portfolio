"use client";

import { motion } from "framer-motion";

export default function ExperienceCard({ role, company, duration, points }) {
  return (
    <motion.div
      className="experience-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="card-content">
        {/* Header */}
        <div className="experience-header">
          <h4 className="experience-role">{role}</h4>
          <span className="experience-duration">{duration}</span>
        </div>

        <p className="company">{company}</p>

        {/* Highlights */}
        <ul className="experience-points">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
