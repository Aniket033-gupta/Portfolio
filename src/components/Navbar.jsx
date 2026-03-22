import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  /* ---------- navbar background on scroll ---------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- detect visible section ---------- */
  useEffect(() => {

    const sections = document.querySelectorAll("section");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();

  }, []);

  /* ---------- scroll function ---------- */
  const scrollToSection = (id) => {
    setMenuOpen(false);

    if (id === "home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <h1 className="logo" onClick={() => navigate("/")}>
          Aniket.
        </h1>

        {/* RIGHT SIDE */}
        <div className="nav-right">

          {/* NAV LINKS */}
          <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>

            <NavItem title="Home" id="home" active={active} onClick={scrollToSection}/>
            <NavItem title="About" id="about" active={active} onClick={scrollToSection}/>
            <NavItem title="Skills" id="skills" active={active} onClick={scrollToSection}/>
            <NavItem title="Projects" id="projects" active={active} onClick={scrollToSection}/>
            <NavItem title="Contact" id="contact" active={active} onClick={scrollToSection}/>

          </ul>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </div>
    </nav>
  );
}

/* ---------- NAV ITEM ---------- */

function NavItem({ title, id, active, onClick }) {
  return (
    <li
      className={`nav-item ${active === id ? "nav-active" : ""}`}
      onClick={() => onClick(id)}
    >
      <span>{title}</span>
      <span className="underline"></span>
    </li>
  );
}