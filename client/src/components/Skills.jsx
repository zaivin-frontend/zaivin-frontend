import React, { useEffect } from "react";
import "../style/Skills.css";
import {
  initScrollAnimations,
  initSkillProgressBars,
} from "../utils/portfolio.js";

const Skills = () => {
  useEffect(() => {
    initScrollAnimations();
    initSkillProgressBars();
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I know</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>
        <div className="skills-categories">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills-grid">
              <div className="skill-card glass-card">
                <i className="fab fa-html5"></i>
                <span>HTML5</span>
                <div className="skill-level">
                  <div
                    className="skill-progress"
                    style={{ "--progress": "90%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card glass-card">
                <i className="fab fa-css3-alt"></i>
                <span>CSS3</span>
                <div className="skill-level">
                  <div
                    className="skill-progress"
                    style={{ "--progress": "85%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card glass-card">
                <i className="fab fa-js"></i>
                <span>JavaScript</span>
                <div className="skill-level">
                  <div
                    className="skill-progress"
                    style={{ "--progress": "80%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card glass-card">
                <i className="fab fa-react"></i>
                <span>React.js</span>
                <div className="skill-level">
                  <div
                    className="skill-progress"
                    style={{ "--progress": "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skills-grid">
              <div className="skill-card glass-card">
                <i className="fab fa-php"></i>
                <span>PHP</span>
                <div className="skill-level">
                  <div
                    className="skill-progress"
                    style={{ "--progress": "75%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card glass-card">
                <i className="fab fa-node-js"></i>
                <span>Node.js</span>
                <div className="skill-level">
                  <div
                    className="skill-progress"
                    style={{ "--progress": "70%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card glass-card">
                <i className="fas fa-database"></i>
                <span>MySQL</span>
                <div className="skill-level">
                  <div
                    className="skill-progress"
                    style={{ "--progress": "75%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card glass-card">
                <i className="fas fa-fire"></i>
                <span>Firebase</span>
                <div className="skill-level">
                  <div
                    className="skill-progress"
                    style={{ "--progress": "70%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
