import React, { useEffect } from "react";
import "../style/Experience.css";
import { initScrollAnimations } from "../utils/portfolio.js";

const Experience = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <section id="cv" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My background</span>
          <h2 className="section-title">Certificate & Education</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <div className="timeline-header">
                <h3>B.S. Computer Engineering</h3>
                <span className="timeline-date">2022 - 2026</span>
              </div>
              <h4>Colegio De Montalban</h4>
              <p className="timeline-location">Rodriguez, Rizal</p>
              <p>
                Focusing on web development, embedded systems, and electronics.
                Building a strong foundation in both hardware and software
                engineering.
              </p>
              <div className="timeline-skills">
                <span className="skill-tag">Web Development</span>
                <span className="skill-tag">Embedded Systems</span>
                <span className="skill-tag">Electronics</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <div className="timeline-header">
                <h3>TESDA Computer System Servicing NC II</h3>
                <span className="timeline-date">Sep 2024</span>
              </div>
              <p>
                Certified in computer hardware troubleshooting, system
                maintenance, and technical support services.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <div className="timeline-header">
                <h3>Cisco Networking Basics</h3>
                <span className="timeline-date">Jul 2024</span>
              </div>
              <p>
                Completed comprehensive training in networking fundamentals,
                protocols, and network security principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
