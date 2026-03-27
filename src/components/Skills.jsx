import { useState } from "react";
import "./Skills.css";
import { Layout, Server, Code, Database, Wrench, Cpu, Key, Plug, CloudUpload, Network, Shield, Cloud, Binary, Brain, Boxes, DatabaseZap, Settings } from "lucide-react";

const lucideIcons = {
  Layout, Server, Code, Database, Wrench, Cpu, Key, Plug, CloudUpload, Network, Shield, Cloud, Binary, Brain, Boxes, DatabaseZap, Settings
};

const skillCategories = [
  {
    category: "Frontend",
    icon: "Layout",
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain", percent: 95, color: "#E34F26" },
      { name: "CSS3", icon: "devicon-css3-plain", percent: 90, color: "#1572B6" },
      { name: "JavaScript", icon: "devicon-javascript-plain", percent: 80, color: "#F7DF1E" },
      { name: "React.js", icon: "devicon-react-original", percent: 90, color: "#61DAFB" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain", percent: 80, color: "#7952B3" },
    ]
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain", percent: 85, color: "#339933" },
      { name: "Express.js", icon: "devicon-express-original", percent: 85, color: "#fff" },
      { name: "Spring Boot", icon: "devicon-spring-original", percent: 55, color: "#6DB33F" },
      { name: "JWT Auth", icon: "Key", isLucide: true, percent: 80, color: "#3b82f6" },
      { name: "REST APIs", icon: "Plug", isLucide: true, percent: 90, color: "#3b82f6" },
    ]
  },
  {
    category: "Languages",
    icon: "Code",
    skills: [
      { name: "C", icon: "devicon-c-plain", percent: 80, color: "#A8B9CC" },
      { name: "C++", icon: "devicon-cplusplus-plain", percent: 78, color: "#00599C" },
      { name: "Java", icon: "devicon-java-plain", percent: 75, color: "#f89820" },
      { name: "PHP", icon: "devicon-php-plain", percent: 65, color: "#777BB4" }
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    skills: [
      { name: "MongoDB", icon: "devicon-mongodb-plain", percent: 85, color: "#47A248" },
      { name: "MySQL", icon: "devicon-mysql-plain", percent: 80, color: "#4479A1" },
      { name: "Atlas", icon: "CloudUpload", isLucide: true, percent: 78, color: "#3b82f6" }
    ]
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: [
      { name: "GitHub", icon: "devicon-github-original", percent: 88, color: "#fff" },
      { name: "Postman", icon: "Network", isLucide: true, percent: 82, color: "#FF6C37" },
      { name: "Kali Linux", icon: "Shield", isLucide: true, percent: 65, color: "#557C94" },
      { name: "Cloud", icon: "Cloud", isLucide: true, percent: 60, color: "#3b82f6" }
    ]
  },
  {
    category: "Core CS",
    icon: "Cpu",
    skills: [
      { name: "DSA", icon: "Binary", isLucide: true, percent: 82, color: "#3b82f6" },
      { name: "Algorithms", icon: "Brain", isLucide: true, percent: 78, color: "#3b82f6" },
      { name: "OOP", icon: "Boxes", isLucide: true, percent: 85, color: "#3b82f6" },
      { name: "DBMS", icon: "DatabaseZap", isLucide: true, percent: 80, color: "#3b82f6" },
      { name: "OS", icon: "Settings", isLucide: true, percent: 70, color: "#3b82f6" }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const activeData = skillCategories.find(c => c.category === activeTab);

  return (
    <section id="skills" className="skills-main-sec">
      <div className="skills-container-new">
        
        <p className="skills-sub">MY EXPERTISE</p>
        <h2 className="skills-main-title">Skills & Technologies</h2>

        {/* Tab Navigation */}
        <div className="skills-tabs">
          {skillCategories.map((cat, idx) => {
            const Icon = lucideIcons[cat.icon];
            return (
              <button 
                key={idx} 
                className={`skill-tab ${activeTab === cat.category ? "active" : ""}`}
                onClick={() => setActiveTab(cat.category)}
              >
                {Icon && <Icon size={16} />} {cat.category}
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid-new">
          {activeData.skills.map((skill, idx) => {
            const LucideIcon = skill.isLucide ? lucideIcons[skill.icon] : null;
            return (
              <div className="skill-item" key={idx}>
                <div className="skill-logo" style={{ color: skill.color }}>
                   {skill.isLucide && LucideIcon ? <LucideIcon size={32} /> : <i className={skill.icon} style={{ fontSize: "32px", color: skill.color }}></i>}
                </div>
                <h4>{skill.name}</h4>
                <div className="skill-progress-bar">
                   <div className="skill-progress-fill" style={{ width: `${skill.percent}%` }}></div>
                </div>
                <div className="skill-percent">{skill.percent}%</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}