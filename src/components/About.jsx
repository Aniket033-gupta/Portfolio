import "./About.css";
import resume from "../assets/AniketKumarGupta.pdf";

export default function About() {
  return (
    <section id="about" className="about-dev">

      {/* ================= TOP ABOUT ================= */}
      <div className="about-dev-container">

        {/* LEFT SIDE */}
        <div className="about-dev-left">

          <p className="code-label">// About Me</p>
          <h2 className="about-dev-title">
            Hi, I'm <span>Aniket Gupta</span>
          </h2>

          <p className="about-dev-text">
            I'm a Computer Science Engineering student and Full Stack Developer
            passionate about building modern web applications and interactive
            digital experiences.
          </p>

          <p className="about-dev-text">
            Alongside development, I solve coding problems and develop projects in Java/JS, exploring areas like AI, networking, and system design.
          </p>

          <p className="about-dev-text">
            My goal is to merge technology and creativity into meaningful
            user experiences.
          </p>
          
          <a href={resume} download className="about-download-btn">
            Download Resume
          </a>

        </div>

        {/* RIGHT SIDE STATS */}
        <div className="about-dev-right">

          <div className="about-stat-card">
            <span className="code-icon">&lt;/&gt;</span>
            <h3>2+</h3>
            <p>Years Learning</p>
          </div>

          <div className="about-stat-card">
            <h3>3+</h3>
            <p>Projects Built</p>
          </div>

          <div className="about-stat-card">
            <h3>Full Stack</h3>
            <p>React • Node • Express</p>
          </div>

        </div>
      </div>

      {/* ================= EDUCATION ================= */}
      <div className="education-section">

        <p className="code-label">// Education</p>
        <h3 className="education-title">My Academic Journey</h3>

        <div className="timeline">

          {/* BTECH */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <span className="edu-tag">Ongoing • 7.28 CGPA</span>
              <h4>B.Tech — Computer Science & Engineering</h4>
              <p>Lovely Professional University, Punjab</p>
              <small>2024 — Present</small>
            </div>
          </div>

          {/* DIPLOMA */}
          <div className="timeline-item right">
            <div className="timeline-content">
              <span className="edu-tag">Diploma • 73.7%</span>
              <h4>Diploma in Engineering</h4>
              <p>M.P Polytechnic, Gorakhpur</p>
              <small>2020 — 2023</small>
            </div>
          </div>

          {/* 10TH */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <span className="edu-tag">85%</span>
              <h4>Matriculation (10th Standard)</h4>
              <p>PGSS School, Gorakhpur</p>
              <small>2018 — 2020</small>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}