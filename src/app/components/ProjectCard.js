"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({
    title,
    description,
    focus,
    tech,
    note,
    architecture,
    architectureImage,
    decisions,
    tradeoffs,
}) {
    const [activePanel, setActivePanel] = useState(null);
    const cardRef = useRef(null);

    /* ---------- AUTO-CLOSE: when another project opens ---------- */
    useEffect(() => {
        const handleGlobalClose = (e) => {
            if (e.detail !== cardRef.current) {
                setActivePanel(null);
            }
        };

        window.addEventListener("close-all-project-panels", handleGlobalClose);
        return () => {
            window.removeEventListener("close-all-project-panels", handleGlobalClose);
        };
    }, []);

    /* ---------- AUTO-CLOSE: when scrolling away ---------- */
    useEffect(() => {
        if (!cardRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    setActivePanel(null);
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    const togglePanel = (panel) => {
        const next = activePanel === panel ? null : panel;
        setActivePanel(next);

        /* Notify other project cards */
        window.dispatchEvent(
            new CustomEvent("close-all-project-panels", {
                detail: cardRef.current,
            })
        );
    };

    return (
        <motion.div
            ref={cardRef}
            className="section-card"
            whileHover={{ scale: 1.01 }}
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

            {/* ACTION PILLS */}
            <div className="project-actions">
                {architecture && (
                    <button
                        onClick={() => togglePanel("architecture")}
                        className={activePanel === "architecture" ? "active" : ""}
                    >
                        View Architecture
                    </button>
                )}

                {decisions && (
                    <button
                        onClick={() => togglePanel("decisions")}
                        className={activePanel === "decisions" ? "active" : ""}
                    >
                        Engineering Decisions
                    </button>
                )}

                {tradeoffs && (
                    <button
                        onClick={() => togglePanel("tradeoffs")}
                        className={activePanel === "tradeoffs" ? "active" : ""}
                    >
                        Trade-offs
                    </button>
                )}
            </div>

            {/* PANELS */}
            <AnimatePresence>
                {activePanel === "architecture" && (
                    <motion.div
                        key="architecture"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        style={{ overflow: "hidden" }}
                    >
                        <div className="project-architecture">
                            <div className="architecture-text">
                                {architecture.map((item, idx) => (
                                    <p key={idx}>• {item}</p>
                                ))}
                            </div>

                            {architectureImage && (
                                <div className="architecture-image">
                                    <img
                                        src={architectureImage}
                                        alt={`${title} architecture diagram`}
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}

                {activePanel === "decisions" && (
                    <motion.div
                        key="decisions"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        <div className="project-panel">
                            {decisions.map((item, idx) => (
                                <p key={idx}>• {item}</p>
                            ))}
                        </div>
                    </motion.div>
                )}

                {activePanel === "tradeoffs" && (
                    <motion.div
                        key="tradeoffs"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        <div className="project-panel">
                            {tradeoffs.map((item, idx) => (
                                <p key={idx}>• {item}</p>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {note && <p className="project-note">{note}</p>}
        </motion.div>
    );
}
