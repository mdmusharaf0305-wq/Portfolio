"use client";

import { motion } from "framer-motion";

export default function ProjectCard({
    title,
    description,
    focus,
    tech,
    note,
}) {
    return (
        <motion.div
            className="section-card"
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            style={{ marginBottom: "2rem" }}
        >
            <h4>{title}</h4>

            {description.map((text, index) => (
                <p key={index}>{text}</p>
            ))}

            <p>
                <strong>Key Focus Areas:</strong> {focus}
            </p>

            <p>
                <strong>Tech:</strong> {tech}
            </p>

            {note && (
                <p style={{ opacity: 0.6, marginTop: "0.75rem" }}>
                    {note}
                </p>
            )}
        </motion.div>
    );
}
