import "./Hero.css";
import profile from "../assets/profileA.png";
import resume from "../assets/AniketKumarGupta.pdf";

export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <p className="hero-intro">
            Hey, I'm Aniket 👋
          </p>

          <h1 className="hero-title">
            <span className="gradient-text">Fullstack</span>
            <br />
            Developer
          </h1>

          <p className="hero-desc">
            I'm a Full Stack Developer passionate about building
            modern web applications and creating smooth user experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              Projects
            </a>
            <a href={resume} target="_blank" rel="noreferrer" className="btn-secondary">
              View Resume
            </a>
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