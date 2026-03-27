import "./Projects.css";

/* ---------- PROJECT DATA ---------- */

const projects = [
  {
    title: "Sports Hub",
    description:
      "A full-stack sports facility booking platform enabling users to reserve courts, rent equipment, manage memberships, and participate in leagues and tournaments with real-time availability and secure authentication.",
    tech: "React • Node.js • Express • MongoDB • JWT",
    image: "/projects/Sports-hub.png",
    github: "https://github.com/Aniket033-gupta/sports-hub-",
    live: "",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A GUI-based Tic Tac Toe game developed using Java Swing featuring two-player gameplay, win/draw detection, interactive controls, and popup-based result handling with restart functionality.",
    tech: "Java • Swing • NetBeans",
    image: "/projects/tictactoe.jpg",
    github:
      "https://github.com/Aniket033-gupta/TIC-TAC-TOE-Game-Application-Java-Swing-",
    live: "",
  },
  {
    title: "Car Rental Platform",
    description:
      "A premium car rental platform with real-time availability, featuring a clean dashboard for managing bookings, browsing vehicle categories, and secure user authentication.",
    tech: "React • Node.js • Express • MongoDB",
    image: "/projects/car-rental.png",
    github: "https://github.com/Aniket033-gupta/Car-Rental-Platform-With-Real-Time-Availability",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <p className="projects-label">// Featured Work</p>

        <h2 className="projects-title">
          <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="tech-tag">
                  {project.tech}
                </span>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    GitHub ↗
                  </a>

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="live-btn"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="coming-soon">
                      Live Soon
                    </span>
                  )}

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}