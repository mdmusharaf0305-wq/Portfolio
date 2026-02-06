"use client";

import { motion } from "framer-motion";

export default function MotionSection({ children }) {
    return (
        <motion.div
            className="section-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1], // premium easing
            }}
        >
            {children}
        </motion.div>
    );
}
