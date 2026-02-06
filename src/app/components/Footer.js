export default function Footer() {
    return (
      <footer id="contact">
        <div className="footer-inner container">
          {/* LEFT — MESSAGE */}
          <div className="footer-meta">
            <p className="footer-heading">
              Want to collaborate or discuss an opportunity?
            </p>
  
            <p className="footer-description">
              I’m always open to meaningful engineering conversations, backend
              challenges, and product-focused problem solving.
            </p>
  
            <p className="footer-copy">
              © {new Date().getFullYear()} Mohammed Musharraf
            </p>
          </div>
  
          {/* RIGHT — ICON LINKS */}
          <div className="footer-links footer-icons">
  <a href="mailto:md.musharaf0305@gmail.com" aria-label="Email" title="Email">
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
      alt=""
      className="icon-gmail"
    />
  </a>

  <a
    href="https://www.linkedin.com/in/mohammed-musharraf-374940212"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    title="LinkedIn"
  >
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
      alt=""
      className="icon-linkedin"
    />
  </a>

  <a
    href="https://github.com/mdmusharaf0305-wq"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    title="GitHub"
  >
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
      alt=""
      className="icon-github"
    />
  </a>

  <a
    href="https://www.naukri.com/mnjuser/profile"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Naukri"
    title="Naukri"
  >
    <img
      src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
      alt=""
      className="naukri-icon"
    />
  </a>
</div>

        </div>
      </footer>
    );
  }
  