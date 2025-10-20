import React from "react";
import "./styles.css";

const Projects = () => {
  const projects = [
    { title: "Portfolio Website", link: "https://github.com/yourname/portfolio" },
    { title: "Weather App", link: "https://github.com/yourname/weather-app" },
    { title: "Todo App", link: "https://github.com/yourname/todo-app" },
  ];

  return (
    <section id="projects" className="section projects-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <a href={p.link} target="_blank" rel="noreferrer">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
