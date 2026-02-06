"use client";

import { motion } from "framer-motion";

export default function ExperienceCard({ role, company, duration, points }) {
    return (
        <motion.div
            className="experience-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="timeline-dot" />

            <div className="card-content">
                <h4>{role}</h4>
                <p className="company">
                    {company} · <span>{duration}</span>
                </p>

                <ul>
                    {points.map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
