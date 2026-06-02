"use client";

import { motion } from "framer-motion";

interface Company {
    name: string;
    logo?: string;
}

interface ProjectTech {
    frontend?: string[];
    backend?: string[];
    databases?: string[];
    tools?: string[];
    testing?: string[];
}

interface ProjectCardProps {
    company?: Company;
    title: string;
    description?: string[];
    role: string;
    techStack: ProjectTech;
    responsibilities: string[];
    liveUrl?: string;
}

export default function ProjectCard({
    company,
    title,
    description = [],
    role,
    techStack,
    responsibilities = [],
    liveUrl,
}: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.002, y: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="bg-theme-card border border-theme-border rounded-2xl p-6 md:p-8 hover:bg-theme-card-hover hover:shadow-xl transition-all duration-300 relative mb-12 last:mb-0"
        >
            {/* ---------- COMPANY HEADER ---------- */}
            {company && (
                <div className="flex items-center gap-3 mb-4">
                    {company.logo && (
                        <img
                            src={company.logo}
                            alt={company.name}
                            className="w-8 h-8 rounded-lg bg-theme-bg border border-theme-border object-contain p-1.5"
                        />
                    )}
                    <span className="text-xs font-bold uppercase tracking-wider text-theme-text-body/60">
                        {company.name}
                    </span>
                </div>
            )}

            {/* ---------- TITLE & ROLE ---------- */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                <h4 className="text-xl md:text-2xl font-extrabold text-theme-text-title flex items-center gap-2">
                    {title}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-cyan-400 hover:text-cyan-600 transition-colors"
                            aria-label={`View ${title} live`}
                        >
                            🔗
                        </a>
                    )}
                </h4>
                <div className="text-xs font-bold text-blue-600 dark:text-cyan-400 bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100/50 dark:border-blue-900/50 rounded-full px-3 py-1 self-start shadow-sm">
                    {role}
                </div>
            </div>

            {/* ---------- DESCRIPTION ---------- */}
            <div className="space-y-3 mb-6">
                {description.map((text, index) => (
                    <p key={index} className="text-sm md:text-base text-theme-text-body leading-relaxed">
                        {text}
                    </p>
                ))}
            </div>

            {/* ---------- SECTION 1: TECH STACK VISUAL SHOWCASE ---------- */}
            <div className="border-t border-theme-border pt-6 mb-8">
                <h5 className="text-xs font-bold uppercase tracking-widest text-theme-text-body/60 mb-4">
                    Technologies & Stack Expertise
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Frontend */}
                    {techStack.frontend && techStack.frontend.length > 0 && (
                        <div className="bg-gradient-to-br from-indigo-500/5 via-theme-card to-theme-card border border-indigo-500/10 dark:border-indigo-500/20 rounded-xl p-3.5 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                Frontend
                            </p>
                            <div className="flex flex-wrap gap-1">
                                {techStack.frontend.map((tech, idx) => (
                                    <span key={idx} className="text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100/50 dark:bg-slate-900/60 border border-theme-border text-theme-text-body">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Backend */}
                    {techStack.backend && techStack.backend.length > 0 && (
                        <div className="bg-gradient-to-br from-cyan-500/5 via-theme-card to-theme-card border border-cyan-500/10 dark:border-cyan-500/20 rounded-xl p-3.5 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                Backend
                            </p>
                            <div className="flex flex-wrap gap-1">
                                {techStack.backend.map((tech, idx) => (
                                    <span key={idx} className="text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100/50 dark:bg-slate-900/60 border border-theme-border text-theme-text-body">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Databases */}
                    {techStack.databases && techStack.databases.length > 0 && (
                        <div className="bg-gradient-to-br from-emerald-500/5 via-theme-card to-theme-card border border-emerald-500/10 dark:border-emerald-500/20 rounded-xl p-3.5 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Databases
                            </p>
                            <div className="flex flex-wrap gap-1">
                                {techStack.databases.map((tech, idx) => (
                                    <span key={idx} className="text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100/50 dark:bg-slate-900/60 border border-theme-border text-theme-text-body">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tools & Testing */}
                    {((techStack.tools && techStack.tools.length > 0) || (techStack.testing && techStack.testing.length > 0)) && (
                        <div className="bg-gradient-to-br from-purple-500/5 via-theme-card to-theme-card border border-purple-500/10 dark:border-purple-500/20 rounded-xl p-3.5 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                Tools & QA
                            </p>
                            <div className="flex flex-wrap gap-1">
                                {[...(techStack.tools || []), ...(techStack.testing || [])].map((tech, idx) => (
                                    <span key={idx} className="text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100/50 dark:bg-slate-900/60 border border-theme-border text-theme-text-body">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ---------- SECTION 2: ROLES & RESPONSIBILITIES ---------- */}
            <div className="border-t border-theme-border pt-6">
                <h5 className="text-xs font-bold uppercase tracking-widest text-theme-text-body/60 mb-4">
                    Roles & Responsibilities
                </h5>
                <ul className="space-y-3">
                    {responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-3 items-start text-sm md:text-base text-theme-text-body leading-relaxed">
                            {/* Stylized Badge Checkbox Indicator */}
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-900/40 text-blue-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5 text-[10px] select-none shadow-sm">
                                ✓
                            </span>
                            <p className="text-sm md:text-base text-theme-text-body">{resp}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
