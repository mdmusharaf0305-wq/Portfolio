"use client";

import { motion } from "framer-motion";

export default function ExperienceCard({ role, company, duration }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-5 bg-theme-card border border-theme-border rounded-2xl shadow-sm hover:bg-theme-card-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 w-full text-center relative z-10 min-h-[130px]"
    >
      <h4 className="text-sm md:text-base font-extrabold text-theme-text-title tracking-tight leading-snug">
        {role}
      </h4>
      <p className="text-xs font-bold text-blue-600 dark:text-cyan-400 mt-1.5">
        {company}
      </p>
      <span className="text-[10px] font-bold text-theme-text-body bg-slate-100/50 dark:bg-slate-900/60 border border-theme-border px-2.5 py-0.5 rounded-full mt-2.5 shadow-sm">
        {duration}
      </span>
    </motion.div>
  );
}
