import React, { useEffect } from "react";
import "../style/Projects.css";
import { initScrollAnimations } from "../utils/portfolio.js";

const Projects = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          <div className="project-card glass-card">
            <div className="project-image">
              <i className="fas fa-calendar-alt"></i>
              <div className="project-overlay">
                <div className="project-links">
                  <a
                    href="https://your-project-demo.com"
                    className="project-link"
                    title="View Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href="https://github.com/zaivin-frontend/Event-management"
                    className="project-link"
                    title="View Code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Event Management System</h3>
              <p>
                A comprehensive event management solution featuring user
                registration, event scheduling, and attendee management with a
                modern, intuitive interface.
              </p>
              <div className="project-tech">
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Bootstrap</span>
              </div>
              <div className="project-actions">
                <a
                  href="https://your-project-demo.com"
                  className="btn btn-primary btn-small"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-eye"></i>
                  Live Demo
                </a>
                <a
                  href="https://github.com/zaivin-frontend/Event-management"
                  className="btn btn-secondary btn-small"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
