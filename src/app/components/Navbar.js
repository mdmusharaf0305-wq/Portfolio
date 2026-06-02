"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Initial check for theme state and scroll listener
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const isDark = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const next = !darkMode;
        setDarkMode(next);
        if (next) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl z-50 rounded-full border shadow-md h-14 flex items-center justify-between px-6 transition-all duration-300 ${
            open
                ? "bg-white dark:bg-slate-950 border-theme-border shadow-lg"
                : scrolled 
                    ? "bg-slate-50/95 dark:bg-slate-950/95 border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-lg"
                    : "bg-theme-card/75 border-theme-border backdrop-blur-md"
        }`}>
            {/* Logo & Name Group */}
            <a href="#" className="flex items-center gap-1 font-semibold text-sm md:text-base tracking-tight text-theme-text-title hover:opacity-90 transition-opacity shrink-0">
                {/* Creative SVG Logo */}
                <svg className="w-6.5 h-6.5 mr-1 shrink-0 animate-[spin_8s_linear_infinite]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="logoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--brand-start)" />
                            <stop offset="50%" stopColor="var(--brand-mid)" />
                            <stop offset="100%" stopColor="var(--brand-end)" />
                        </linearGradient>
                    </defs>
                    <path d="M20 75 L38 30 L55 60 L75 25" stroke="url(#logoGrad)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="75" cy="25" r="7" fill="var(--brand-end)" />
                    <circle cx="20" cy="75" r="6" fill="var(--brand-start)" />
                </svg>
                
                <span>Mohammed <span className="bg-gradient-to-r from-brand-start via-brand-mid to-brand-end bg-clip-text text-transparent font-bold">Musharraf</span></span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
                <a href="#skills" className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-theme-text-body hover:text-theme-text-title hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all duration-200">
                    Skills
                </a>
                <a href="#experience" className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-theme-text-body hover:text-theme-text-title hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all duration-200">
                    Experience
                </a>
                <a href="#projects" className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-theme-text-body hover:text-theme-text-title hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all duration-200">
                    Projects
                </a>

                {/* Direct Resume Download Link */}
                <a 
                    href="/Mohammed%20Musharraf%20Resume.pdf" 
                    download
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-theme-text-body hover:text-theme-text-title hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all duration-200"
                >
                    Resume
                </a>

                <a 
                    href="mailto:musharaff.dev@gmail.com" 
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-theme-text-body hover:text-theme-text-title hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all duration-200"
                >
                    Mail
                </a>

                <a href="#contact" className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-theme-text-body hover:text-theme-text-title hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all duration-200">
                    Contact
                </a>

                {/* Theme Toggle Button */}
                <button 
                    onClick={toggleTheme}
                    className="w-8 h-8 rounded-full border border-theme-border bg-slate-50 dark:bg-slate-900 text-theme-text-body hover:text-brand-start dark:hover:text-brand-end flex items-center justify-center cursor-pointer transition-all duration-300 ml-2 shadow-sm"
                    aria-label="Toggle Theme"
                >
                    {darkMode ? (
                        /* Sun Icon */
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    ) : (
                        /* Moon Icon */
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Hamburger */}
            <div className="md:hidden flex items-center gap-2">
                {/* Theme Toggle in Mobile Bar */}
                <button 
                    onClick={toggleTheme}
                    className="w-8 h-8 rounded-full border border-theme-border bg-slate-50 dark:bg-slate-900 text-theme-text-body hover:text-brand-start dark:hover:text-brand-end flex items-center justify-center cursor-pointer transition-all duration-300 shadow-sm"
                    aria-label="Toggle Theme"
                >
                    {darkMode ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                </button>

                <button
                    className="flex flex-col justify-center items-center w-8 h-8 rounded-lg text-theme-text-body hover:text-theme-text-title hover:bg-slate-100/50 transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                >
                    <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
                    <div className={`w-5 h-0.5 bg-current my-1 transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
                    <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="absolute top-[52px] left-0 right-0 bg-white dark:bg-slate-950 border border-theme-border rounded-2xl p-4 flex flex-col gap-1.5 transition-all duration-300 shadow-lg shadow-slate-200/20 dark:shadow-none z-50">
                    <a 
                        href="#skills" 
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm font-bold text-theme-text-body hover:text-theme-text-title hover:bg-slate-100 dark:hover:bg-slate-900/40 transition-colors"
                    >
                        Skills
                    </a>
                    <a 
                        href="#experience" 
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm font-bold text-theme-text-body hover:text-theme-text-title hover:bg-slate-100 dark:hover:bg-slate-900/40 transition-colors"
                    >
                        Experience
                    </a>
                    <a 
                        href="#projects" 
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm font-bold text-theme-text-body hover:text-theme-text-title hover:bg-slate-100 dark:hover:bg-slate-900/40 transition-colors"
                    >
                        Projects
                    </a>

                    {/* Direct Mobile Resume Download Link */}
                    <a
                        href="/Mohammed%20Musharraf%20Resume.pdf"
                        download
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm font-bold text-theme-text-body hover:text-theme-text-title hover:bg-slate-100 dark:hover:bg-slate-900/40 transition-colors"
                    >
                        Resume
                    </a>

                    <a
                        href="mailto:musharaff.dev@gmail.com"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm font-bold text-theme-text-body hover:text-theme-text-title hover:bg-slate-100 dark:hover:bg-slate-900/40 transition-colors"
                    >
                        Mail
                    </a>

                    <a 
                        href="#contact" 
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm font-bold text-theme-text-body hover:text-theme-text-title hover:bg-slate-100 dark:hover:bg-slate-900/40 transition-colors border-t border-theme-border mt-1 pt-2.5"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}