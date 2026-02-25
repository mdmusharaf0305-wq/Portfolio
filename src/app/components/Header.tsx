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
                Software Developer with ~2 years of experience building cloud-native applications, scalable APIs, and data-driven systems. Experienced in developing full-stack features, serverless architectures, and analytics-ready data pipelines. Focused on writing clean, maintainable code, designing reliable systems, and delivering production-grade solutions with real-world impact.
            </motion.p>
        </header>
    );
}
