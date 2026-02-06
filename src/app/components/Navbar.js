"use client";

import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo */}
                <span className="nav-logo">
                    Mohammed <span>Musharraf</span>
                </span>

                {/* Desktop Links */}
                <div className="nav-links desktop">
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a
                        href="/Mohammed_Backend_Developer_Node_AWS.pdf"
                        download
                        className="resume-link"
                    >
                        Resume
                    </a>
                    <a href="#contact">Contact</a>
                </div>

                {/* Hamburger */}
                <button
                    className={`hamburger ${open ? "open" : ""}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="mobile-menu">
                    <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
                    <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
                    <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                    <a
                        href="/Mohammed_Backend_Developer_Node_AWS.pdf"
                        download
                        onClick={() => setOpen(false)}
                    >
                        Resume
                    </a>
                    <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
                </div>
            )}
        </nav>
    );
}
