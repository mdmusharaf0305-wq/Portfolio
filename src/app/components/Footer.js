export default function Footer() {
    return (
        <footer id="contact">
            <div
                className="container"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "3rem",
                    flexWrap: "wrap",
                }}
            >
                {/* LEFT — MESSAGE */}
                <div style={{ maxWidth: "520px" }}>
                    <p style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>
                        Want to collaborate or discuss an opportunity?
                    </p>

                    <p style={{ opacity: 0.85, marginBottom: "1.5rem" }}>
                        I’m always open to meaningful engineering conversations, backend
                        challenges, and product-focused problem solving.
                    </p>

                    <p style={{ fontSize: "0.85rem", opacity: 0.6 }}>
                        © {new Date().getFullYear()} Mohammed Musharraf
                    </p>
                </div>

                {/* RIGHT — CONTACT ICONS */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.25rem",
                        flexShrink: 0,
                    }}
                >
                    {/* Email */}
                    <a
                        href="mailto:md.musharaf0305@gmail.com"
                        aria-label="Email"
                        title="Email"
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
                            width="22"
                            alt="Email"
                            style={{
                                filter:
                                    "invert(33%) sepia(93%) saturate(746%) hue-rotate(345deg)",
                            }}
                        />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/mohammed-musharraf-374940212"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                            width="22"
                            alt="LinkedIn"
                            style={{
                                filter:
                                    "invert(33%) sepia(93%) saturate(746%) hue-rotate(182deg)",
                            }}
                        />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/mdmusharaf0305-wq"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        title="GitHub"
                    >
                        <img
                            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                            width="22"
                            alt="GitHub"
                        />
                    </a>

                    {/* Naukri */}
                    <a
                        href="https://www.naukri.com/mnjuser/profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Naukri"
                        title="Naukri"
                    >
                        <img
                            src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
                            alt="Naukri"
                            style={{
                                height: "26px",
                                width: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
