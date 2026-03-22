import "./About.css";

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
            Alongside development, I work as a 3D artist and visual storyteller,
            creating cinematic renders and motion visuals using Blender and
            modern creative tools.
          </p>

          <p className="about-dev-text">
            My goal is to merge technology and creativity into meaningful
            user experiences.
          </p>

        </div>

        {/* RIGHT SIDE STATS */}
        <div className="about-dev-right">

          <div className="about-stat-card">
            <span className="code-icon">&lt;/&gt;</span>
            <h3>2+</h3>
            <p>Years Learning</p>
          </div>

          <div className="about-stat-card">
            <h3>10+</h3>
            <p>Projects Built</p>
          </div>

          <div className="about-stat-card">
            <h3>Full Stack</h3>
            <p>React • Node • Spring Boot</p>
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
              <span className="edu-tag">Ongoing</span>
              <h4>B.Tech — Computer Science & Engineering</h4>
              <p>Lovely Professional University, Punjab</p>
              <small>2024 — Present</small>
            </div>
          </div>

          {/* DIPLOMA */}
          <div className="timeline-item right">
            <div className="timeline-content">
              <span className="edu-tag">Diploma • 85.6%</span>
              <h4>Diploma in Engineering</h4>
              <p>Lovely Professional University</p>
              <small>2021 — 2024</small>
            </div>
          </div>

          {/* 10TH */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <span className="edu-tag">76%</span>
              <h4>Matriculation (10th Standard)</h4>
              <p>Foundation School, Buxar</p>
              <small>2018 — 2020</small>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}