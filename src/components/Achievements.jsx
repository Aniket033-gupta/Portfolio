import "./Achievements.css";

export default function Achievements() {
  const certificates = [
    { img: "/certificates/neptel.jpg", name: "NPTEL Online Certification" },
    {
      img: "/certificates/SummerInterShip.jpg",
      name: "Tranning in Java Swing with mySQL",
    },
    { img: "/certificates/CourseraBits.jpg", name: "Coursera Bits and Bytes Certificate" },
    {
      img: "/certificates/ComputationalTheory.jpg",
      name: "Infosys Computational Theory Certificate",
    },
    {
      img: "/certificates/MasteGen.jpg",
      name: "Built Generative & AI Certificate",
    },
  ];

  return (
    <section className="achievements">
      <div className="achievements-container">
        <p className="achievements-label">// Achievements</p>

        <h2 className="achievements-title">
          Featured <span>Certifications</span>
        </h2>

        <div className="carousel">
          <div className="carousel-track">
            {[...certificates, ...certificates].map((cert, index) => (
              <div className="cert-card" key={index}>
                <a href={cert.img} download>
                  <img src={cert.img} alt={cert.name} />
                </a>

                <p className="cert-name">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
