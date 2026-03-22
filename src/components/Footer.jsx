import "./Footer.css";
import { Instagram, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <p className="footer-copy">
        © 2026 Aniket. All rights reserved.
      </p>

      <div className="footer-links">

        <a
          href="https://instagram.com/msd07_133"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram size={22} />
        </a>

        <a
          href="https://github.com/Aniket033-gupta"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/aniket-kumar-gupta-dev09"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={22} />
        </a>

      </div>

    </footer>
  );
}