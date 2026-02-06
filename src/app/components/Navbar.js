"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-container">
                <span className="nav-logo">Mohammed Musharraf</span>

                <div className="nav-links">
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}
