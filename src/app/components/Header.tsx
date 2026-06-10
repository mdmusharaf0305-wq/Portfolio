"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
    "React Js Developer",
    "Frontend Focused Full-Stack",
    "Next.js Developer",
    "Software Engineer",
    "VibeCoder"
];

const AVAILS = [
    "Available for Opportunities",
    "Immediate Joiner"
];

const LOCATIONS = [
    "Bengaluru, India",
    "Preferred: Bengaluru, Hyderabad, Chennai, Pune"
];
interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    decimals?: number;
}

function CountUp({ end, duration = 1500, suffix = "", decimals = 0 }: CountUpProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing: easeOutQuad
            const easeProgress = percentage * (2 - percentage);
            const currentVal = easeProgress * end;
            setCount(currentVal);

            if (percentage < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [end, duration]);

    return (
        <span>
            {count.toFixed(decimals)}
            {suffix}
        </span>
    );
}

export default function Header() {
    // Visits State
    const [visits, setVisits] = useState(0);

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                const response = await fetch("https://api.counterapi.dev/v1/musharraf-portfolio/visits/up");
                const data = await response.json();
                // CounterAPI V1 returns { count: number }
                if (data && typeof data.count === "number") {
                    setVisits(data.count);
                } else {
                    throw new Error("Invalid response format");
                }
            } catch (error) {
                // Fallback to local increments if API is offline or has CORS issues
                const savedVisits = localStorage.getItem("portfolio_profile_visits");
                let currentVisits = savedVisits ? parseInt(savedVisits, 10) : 1247;
                currentVisits += 1;
                localStorage.setItem("portfolio_profile_visits", currentVisits.toString());
                setVisits(currentVisits);
            }
        };
        fetchVisits();
    }, []);

    // Role Typewriter States
    const [roleIndex, setRoleIndex] = useState(0);
    const [currentRoleText, setCurrentRoleText] = useState("");
    const [isRoleDeleting, setIsRoleDeleting] = useState(false);

    // Availability Typewriter States
    const [availIndex, setAvailIndex] = useState(0);
    const [currentAvailText, setCurrentAvailText] = useState("");
    const [isAvailDeleting, setIsAvailDeleting] = useState(false);

    // Location Typewriter States
    const [locIndex, setLocIndex] = useState(0);
    const [currentLocText, setCurrentLocText] = useState("");
    const [isLocDeleting, setIsLocDeleting] = useState(false);

    // Role Typewriter Effect
    useEffect(() => {
        let timer: NodeJS.Timeout;
        const fullText = ROLES[roleIndex];
        const typeSpeed = 50;
        const deleteSpeed = 25;
        const delayBeforeDelete = 2000;
        const delayBeforeType = 400;

        const handleTyping = () => {
            if (!isRoleDeleting) {
                setCurrentRoleText(fullText.substring(0, currentRoleText.length + 1));

                if (currentRoleText === fullText) {
                    timer = setTimeout(() => setIsRoleDeleting(true), delayBeforeDelete);
                    return;
                }

                timer = setTimeout(handleTyping, typeSpeed);
            } else {
                setCurrentRoleText(fullText.substring(0, currentRoleText.length - 1));

                if (currentRoleText === "") {
                    setIsRoleDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % ROLES.length);
                    timer = setTimeout(handleTyping, delayBeforeType);
                    return;
                }

                timer = setTimeout(handleTyping, deleteSpeed);
            }
        };

        timer = setTimeout(handleTyping, isRoleDeleting ? deleteSpeed : typeSpeed);
        return () => clearTimeout(timer);
    }, [currentRoleText, isRoleDeleting, roleIndex]);

    // Availability Typewriter Effect
    useEffect(() => {
        let timer: NodeJS.Timeout;
        const fullText = AVAILS[availIndex];
        const typeSpeed = 45;
        const deleteSpeed = 20;
        const delayBeforeDelete = 2500;
        const delayBeforeType = 300;

        const handleTyping = () => {
            if (!isAvailDeleting) {
                setCurrentAvailText(fullText.substring(0, currentAvailText.length + 1));

                if (currentAvailText === fullText) {
                    timer = setTimeout(() => setIsAvailDeleting(true), delayBeforeDelete);
                    return;
                }

                timer = setTimeout(handleTyping, typeSpeed);
            } else {
                setCurrentAvailText(fullText.substring(0, currentAvailText.length - 1));

                if (currentAvailText === "") {
                    setIsAvailDeleting(false);
                    setAvailIndex((prev) => (prev + 1) % AVAILS.length);
                    timer = setTimeout(handleTyping, delayBeforeType);
                    return;
                }

                timer = setTimeout(handleTyping, deleteSpeed);
            }
        };

        timer = setTimeout(handleTyping, isAvailDeleting ? deleteSpeed : typeSpeed);
        return () => clearTimeout(timer);
    }, [currentAvailText, isAvailDeleting, availIndex]);

    // Location Typewriter Effect
    useEffect(() => {
        let timer: NodeJS.Timeout;
        const fullText = LOCATIONS[locIndex];
        const typeSpeed = 40;
        const deleteSpeed = 18;
        const delayBeforeDelete = 2800;
        const delayBeforeType = 300;

        const handleTyping = () => {
            if (!isLocDeleting) {
                setCurrentLocText(fullText.substring(0, currentLocText.length + 1));

                if (currentLocText === fullText) {
                    timer = setTimeout(() => setIsLocDeleting(true), delayBeforeDelete);
                    return;
                }

                timer = setTimeout(handleTyping, typeSpeed);
            } else {
                setCurrentLocText(fullText.substring(0, currentLocText.length - 1));

                if (currentLocText === "") {
                    setIsLocDeleting(false);
                    setLocIndex((prev) => (prev + 1) % LOCATIONS.length);
                    timer = setTimeout(handleTyping, delayBeforeType);
                    return;
                }

                timer = setTimeout(handleTyping, deleteSpeed);
            }
        };

        timer = setTimeout(handleTyping, isLocDeleting ? deleteSpeed : typeSpeed);
        return () => clearTimeout(timer);
    }, [currentLocText, isLocDeleting, locIndex]);

    return (
        <header className="max-w-5xl mx-auto px-6 pt-24 pb-16 relative overflow-hidden">
            {/* Glowing Ambient Backdrop */}
            <div className="absolute top-0 left-[-10%] w-[450px] h-[450px] bg-brand-start/5 dark:bg-brand-start/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-brand-end/3 dark:bg-brand-end/12 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-start">

                {/* Two Side-by-Side Status Capsules */}
                <div className="flex flex-wrap items-center gap-4 mb-6">

                    {/* Capsule 1: Availability & Immediate Joiner */}
                    <div className="h-9 flex items-center">
                        <div
                            className={`inline-flex items-center px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-300 shadow-sm ${availIndex === 1
                                    ? "border-red-500 bg-red-500/10 dark:bg-red-950/20 text-red-600 dark:text-red-400 shadow-lg shadow-red-500/20 animate-[pulse_1.5s_infinite] scale-102 font-bold"
                                    : "border-theme-border bg-theme-card text-theme-text-body"
                                }`}
                        >
                            {availIndex === 0 ? (
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600"></span>
                                </span>
                            ) : (
                                <span className="mr-1.5 animate-[pulse_1s_infinite] drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">⚡</span>
                            )}
                            <span>{currentAvailText}</span>
                            <span className={`inline-block w-[1.5px] h-3 ml-1 align-middle animate-pulse ${availIndex === 1 ? "bg-red-500" : "bg-slate-500"
                                }`} />
                        </div>
                    </div>

                    {/* Capsule 2: Location & Preferred */}
                    <div className="h-9 flex items-center">
                        <div className="inline-flex items-center px-4 py-1.5 text-xs font-semibold rounded-full border border-theme-border bg-theme-card text-theme-text-body shadow-sm">
                            {locIndex === 0 ? (
                                <span className="mr-1.5">📍</span>
                            ) : (
                                <span className="mr-1.5">✈️</span>
                            )}
                            <span>{currentLocText}</span>
                            <span className="inline-block w-[1.5px] h-3 ml-1 bg-slate-500 align-middle animate-pulse" />
                        </div>
                    </div>

                </div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-none text-theme-text-title max-w-4xl"
                >
                    Mohammed Musharraf
                    {/* Fixed Height Typing Container */}
                    <span className="block mt-3 h-[32px] sm:h-[42px] md:h-[60px] overflow-hidden">
                        <span className="bg-gradient-to-r from-brand-start via-brand-mid to-brand-end bg-clip-text text-transparent text-xl sm:text-3xl md:text-5xl font-bold inline-block">
                            {currentRoleText}
                        </span>
                        {/* Blinking Typewriter Cursor */}
                        <span className="inline-block w-[3px] h-5 sm:h-7 md:h-10 bg-brand-start ml-1.5 align-middle animate-pulse" />
                    </span>
                </motion.h1>

                {/* Subtitle / Bio */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-6 max-w-3xl text-theme-text-body text-base md:text-lg leading-relaxed font-normal"
                >
                    Frontend-focused Full Stack Engineer with 4+ years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, GraphQL, Node.js, and Express.js across e-commerce and healthcare domains. Skilled in developing production-grade frontend architectures, SSR/SSG rendering optimization, and secure full-stack applications.
                </motion.p>

                {/* Action CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    <a
                        href="#projects"
                        className="px-6 py-3 text-sm font-semibold text-white bg-brand-start hover:bg-brand-start/90 rounded-full shadow-lg shadow-brand-start/15 hover:shadow-brand-start/25 hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 text-sm font-semibold text-theme-text-body hover:text-theme-text-title bg-theme-card hover:bg-theme-card-hover border border-theme-border rounded-full shadow-sm hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer"
                    >
                        Get in Touch
                    </a>
                </motion.div>

                {/* Key Metrics Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 w-full relative z-10"
                >
                    <div className="bg-theme-card border border-theme-border rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-102 flex flex-col justify-center min-h-[110px]">
                        <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-brand-start via-brand-mid to-brand-end bg-clip-text text-transparent">
                            <CountUp end={4} suffix="+" />
                        </div>
                        <div className="text-xs font-semibold text-theme-text-body mt-2 leading-tight">
                            Years IT Experience
                        </div>
                    </div>

                    <div className="bg-theme-card border border-theme-border rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-102 flex flex-col justify-center min-h-[110px]">
                        <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-brand-start via-brand-mid to-brand-end bg-clip-text text-transparent">
                            <CountUp end={2} />
                        </div>
                        <div className="text-xs font-semibold text-theme-text-body mt-2 leading-tight">
                            Enterprise Platforms
                        </div>
                    </div>

                    <div className="bg-theme-card border border-theme-border rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-102 flex flex-col justify-center min-h-[110px]">
                        <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-brand-start via-brand-mid to-brand-end bg-clip-text text-transparent">
                            {visits > 0 ? <CountUp end={visits} /> : <span>1248</span>}
                        </div>
                        <div className="text-xs font-semibold text-theme-text-body mt-2 leading-tight">
                            Profile Visits
                        </div>
                    </div>

                    <div className="bg-theme-card border border-theme-border rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-102 flex flex-col justify-center min-h-[110px]">
                        <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-brand-start via-brand-mid to-brand-end bg-clip-text text-transparent">
                            <CountUp end={10} suffix="+" />
                        </div>
                        <div className="text-xs font-semibold text-theme-text-body mt-2 leading-tight">
                            Frameworks & Tools
                        </div>
                    </div>
                </motion.div>
            </div>
        </header>
    );
}
