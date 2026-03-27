import { Calendar, CheckCircle2 } from "lucide-react";
import "./Training.css";

export default function Training() {
  return (
    <section id="training" className="training">
      
      <div className="section-title">
        <p className="section-label">LEARNING</p>
        <h2>Training</h2>
      </div>

      <div className="training-container">
        
        <div className="training-card">
          <div className="training-header">
            <div className="training-title-area">
              <div className="training-icon">
                <Calendar size={20} />
              </div>
              <div>
                <h3>Java and MySQL: Application Development</h3>
                <p className="training-date">
                  <Calendar size={14} style={{ marginRight: "6px" }} />
                  10 Jun 2025 – 22 Jul 2025
                </p>
              </div>
            </div>
            
            <div className="training-badge">
              <CheckCircle2 size={16} />
              <span>Grade A</span>
            </div>
          </div>

          <ul className="training-details">
            <li>
              <span className="bullet-arrow">▸</span>
              Completed summer training program organized by the Centre for Professional Enhancement at Lovely Professional University.
            </li>
            <li>
              <span className="bullet-arrow">▸</span>
              Acquired hands-on experience in Java and MySQL application development, focusing on database-driven applications.
            </li>
            <li>
              <span className="bullet-arrow">▸</span>
              Demonstrated proficiency through practical assignments and secured an 'A' grade in the certification process.
            </li>
          </ul>

          <div className="training-skills">
            <span className="skill-pill">
              <CheckCircle2 size={14} /> Java
            </span>
            <span className="skill-pill">
              <CheckCircle2 size={14} /> MySQL
            </span>
            <span className="skill-pill">
              <CheckCircle2 size={14} /> Application Development
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
