export default function Footer() {
    return (
        <footer id="contact">
            <div
                className="container"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "3rem",
                    flexWrap: "wrap",
                }}
            >
                {/* LEFT SIDE — Content */}
                <div style={{ maxWidth: "650px" }}>
                    <h3 style={{ marginBottom: "0.75rem" }}>
                        Mohammed — Backend-Focused Full-Stack & Data Engineer
                    </h3>

                    <p style={{ marginBottom: "1rem" }}>
                        Backend-focused engineer with ~2 years of experience building
                        cloud-native APIs, serverless systems, and data pipelines. I enjoy
                        designing reliable architectures and owning problems end-to-end,
                        from requirements to production.
                    </p>

                    <p style={{ marginBottom: "1.25rem", opacity: 0.85 }}>
                        If you’re building something meaningful or want to discuss an
                        engineering opportunity, feel free to reach out.
                    </p>

                    <p style={{ fontSize: "0.85rem", opacity: 0.6 }}>
                        © {new Date().getFullYear()} Mohammed Musharraf. Built with Next.js.
                    </p>
                </div>

                {/* RIGHT SIDE — Social Icons */}
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
