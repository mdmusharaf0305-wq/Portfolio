"use client";

import { motion } from "framer-motion";

export default function Header() {
    return (
        <header className="container">
            {/* <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Product Engineer
            </motion.h1> */}

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Backend-focused Full-Stack & Data Engineer
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                Backend-focused Product Engineer with ~2 years of experience building
                cloud-native, serverless systems, data pipelines, and full-stack features.
                Experienced in designing scalable APIs, optimizing databases, and
                developing analytics-ready data pipelines, with a strong focus on clean
                architecture, reliability, and real-world impact.
            </motion.p>
        </header>
    );
}
