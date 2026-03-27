import { useState, useEffect } from "react";
import "./Hero.css";
import profile from "../assets/profileA.png";
import resume from "../assets/AniketKumarGupta.pdf";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Hero() {
  const ROLES = [
    "Full Stack Developer",
    "CSE Student at LPU",
    "MERN Stack Engineer",
    "Cloud Enthusiast"
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const handleType = () => {
    const i = loopNum % ROLES.length;
    const fullText = ROLES[i];

    if (isDeleting) {
      setText(fullText.substring(0, text.length - 1));
      setTypingSpeed(50);
    } else {
      setText(fullText.substring(0, text.length + 1));
      setTypingSpeed(100);
    }

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    }
  };

  return (
    <section id="home" className="hero">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <p className="hero-intro" style={{ marginBottom: "10px", color: "var(--neon-blue)" }}>
            Hello, I'm
          </p>

          <h1 className="hero-title" style={{ marginBottom: "15px" }}>
            Aniket
            <br />
            Gupta.
          </h1>

          <p className="hero-intro typing-container" >
            I'm a <span className="gradient-text">{text}</span>
            <span className="cursor-blink">|</span>
          </p>

          <p className="hero-desc">
            A passionate Computer Science student at Lovely Professional University, specializing in full-stack web development with the MERN stack. I love building scalable, production-ready applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary contact-btn">
              <Mail size={18} /> Contact Me
            </a>
            <a href={resume} target="_blank" rel="noreferrer" className="btn-secondary">
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/aniket-kumar-gupta-dev09" target="_blank" rel="noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Aniket033-gupta" target="_blank" rel="noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="mailto:guptaaniketgupta737@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>
            <a href="https://wa.me/918853059862" target="_blank" rel="noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" color="inherit">
                <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.553 4.174 1.6 5.996L.145 24l6.146-1.611a11.966 11.966 0 005.74 1.472h.005c6.643 0 12.029-5.389 12.029-12.032C24.065 5.385 18.675 0 12.031 0zm0 21.821h-.005a9.932 9.932 0 01-5.06-1.378l-.363-.215-3.759.986.999-3.663-.238-.376A9.927 9.927 0 012.031 12.03c0-5.517 4.489-10.007 10.005-10.007 5.518 0 10.005 4.49 10.005 10.007 0 5.518-4.487 10.005-10.005 10.005l-.005.786zm5.492-7.508c-.301-.151-1.78-.881-2.057-.982-.276-.1-.476-.151-.678.151-.202.302-.777.982-.953 1.183-.176.202-.352.227-.654.126-.301-.101-1.272-.469-2.423-1.496-.895-.8-.15-1.127 1.15-2.617.202-.301.101-.553-.05-.854-.151-.302-.678-1.637-.928-2.24-.242-.589-.487-.509-.678-.518-.176-.008-.377-.008-.577-.008-.201 0-.528.075-.805.377-.276.302-1.056 1.031-1.056 2.515s1.082 2.917 1.233 3.118c.151.202 2.126 3.245 5.148 4.545.719.31 1.28.495 1.719.633.722.229 1.38.196 1.898.119.58-.087 1.78-.727 2.032-1.43.252-.704.252-1.308.176-1.434-.076-.126-.277-.202-.578-.352z" />
              </svg>
            </a>
          </div>

          <div className="hero-marquee">
            <div className="marquee-content">
              <span><i className="devicon-html5-plain" style={{color: "#E34F26"}}></i> HTML5</span>
              <span><i className="devicon-css3-plain" style={{color: "#1572B6"}}></i> CSS3</span>
              <span><i className="devicon-javascript-plain" style={{color: "#F7DF1E"}}></i> JavaScript</span>
              <span><i className="devicon-react-original" style={{color: "#61DAFB"}}></i> React</span>
              <span><i className="devicon-nodejs-plain" style={{color: "#339933"}}></i> Node.js</span>
              <span><i className="devicon-express-original" style={{color: "#fff"}}></i> Express.js</span>
              <span><i className="devicon-mysql-plain" style={{color: "#4479A1"}}></i> MySQL</span>
              {/* Duplicate for infinite scrolling effect */}
              <span><i className="devicon-html5-plain" style={{color: "#E34F26"}}></i> HTML5</span>
              <span><i className="devicon-css3-plain" style={{color: "#1572B6"}}></i> CSS3</span>
              <span><i className="devicon-javascript-plain" style={{color: "#F7DF1E"}}></i> JavaScript</span>
              <span><i className="devicon-react-original" style={{color: "#61DAFB"}}></i> React</span>
              <span><i className="devicon-nodejs-plain" style={{color: "#339933"}}></i> Node.js</span>
              <span><i className="devicon-express-original" style={{color: "#fff"}}></i> Express.js</span>
              <span><i className="devicon-mysql-plain" style={{color: "#4479A1"}}></i> MySQL</span>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="image-circle">
            <img src={profile} alt="profile" />
          </div>
        </div>

      </div>

    </section>
  );
}