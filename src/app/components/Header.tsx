"use client";

import { motion } from "framer-motion";

export default function Header() {
    return (
        <header className="container">

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Software Developer & Data Engineer
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                Data Analyst and Software Developer with ~2 years of experience building data-driven applications and analytics solutions. Skilled in analyzing datasets, developing interactive dashboards, and designing scalable APIs and backend services. Experienced in developing cloud-based systems, building ETL pipelines, and transforming operational data into meaningful business insights.
            </motion.p>
        </header>
    );
}
