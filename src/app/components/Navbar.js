"use client";

import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [resumeOpen, setResumeOpen] = useState(false);

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

                    {/* Resume Dropdown */}
                    <div
                        style={{ position: "relative" }}
                        onMouseLeave={() => setResumeOpen(false)}
                    >
                        <button
                            onClick={() => setResumeOpen(!resumeOpen)}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "14px"
                            }}
                        >
                            Resume ▾
                        </button>

                        {resumeOpen && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "30px",
                                    right: "0",
                                    background: "#fff",
                                    borderRadius: "8px",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                                    overflow: "hidden",
                                    minWidth: "220px",
                                    border: "1px solid #eee"
                                }}
                            >
                                <a
                                    href="/Musharaf_Software_dev_Resume.pdf"
                                    download
                                    style={{
                                        display: "block",
                                        padding: "10px 16px",
                                        textDecoration: "none",
                                        color: "#333"
                                    }}
                                >
                                    Software Developer Resume
                                </a>

                                <a
                                    href="/Musharaf_Data_Analyst_Resume.pdf"
                                    download
                                    style={{
                                        display: "block",
                                        padding: "10px 16px",
                                        textDecoration: "none",
                                        color: "#333"
                                    }}
                                >
                                    Data Analyst Resume
                                </a>
                            </div>
                        )}
                    </div>

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

                    {/* Mobile Resume Options */}
                    <a
                        href="/Musharaf_Software_dev_Resume.pdf"
                        download
                        onClick={() => setOpen(false)}
                    >
                        Software Developer Resume
                    </a>

                    <a
                        href="/Musharaf_Data_Analyst_Resume.pdf"
                        download
                        onClick={() => setOpen(false)}
                    >
                        Data Analyst Resume
                    </a>

                    <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
                </div>
            )}
        </nav>
    );
}