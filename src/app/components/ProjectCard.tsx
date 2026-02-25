"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Company {
    name: string;
    logo?: string;
}

interface ProjectCardProps {
    company?: Company;
    title: string;
    description?: string[];
    focus?: string;
    tech?: string;
    note?: string;
    architecture?: string[];
    architectureImage?: string;
    decisions?: string[];
    tradeoffs?: string[];
    liveUrl?: string;
}

export default function ProjectCard({
    company,
    title,
    description = [],
    focus,
    tech,
    note,
    architecture,
    architectureImage,
    decisions,
    tradeoffs,
    liveUrl,
}: ProjectCardProps) {
    const [activePanel, setActivePanel] = useState<string | null>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    /* ---------- AUTO-CLOSE: when another project opens ---------- */
    useEffect(() => {
        const handleGlobalClose = (e: Event) => {
            if ((e as CustomEvent).detail !== cardRef.current) {
                setActivePanel(null);
            }
        };

        window.addEventListener("close-all-project-panels", handleGlobalClose);
        return () =>
            window.removeEventListener("close-all-project-panels", handleGlobalClose);
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

    const togglePanel = (panel: string) => {
        const next = activePanel === panel ? null : panel;
        setActivePanel(next);

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
            {/* ---------- COMPANY (Logo + Name) ---------- */}
            {company && (
                <div className="project-company">
                    {company.logo && (
                        <img
                            src={company.logo}
                            alt={company.name}
                            className="project-company-logo"
                        />
                    )}
                    <span className="project-company-name">
                        {company.name}
                    </span>
                </div>
            )}

            {/* ---------- TITLE + LIVE LINK ---------- */}
            <div className="project-title">
                <h4 className="project-heading">
                    {title}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-live-link"
                            aria-label={`View ${title} live`}
                        >
                            🔗
                        </a>
                    )}
                </h4>
            </div>

            {/* ---------- DESCRIPTION ---------- */}
            {description.map((text, index) => (
                <p key={index}>{text}</p>
            ))}

            {focus && (
                <p>
                    <strong>Key Focus Areas:</strong> {focus}
                </p>
            )}

            {tech && (
                <p>
                    <strong>Tech:</strong> {tech}
                </p>
            )}

            {/* ---------- ACTION BUTTONS ---------- */}
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

            {/* ---------- PANELS ---------- */}
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
                                {architecture!.map((item, idx) => (
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
                            {decisions!.map((item, idx) => (
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
                            {tradeoffs!.map((item, idx) => (
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
