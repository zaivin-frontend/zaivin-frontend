import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-scroll";
import "../styles/Hero.css";
import { initParticles, initScrollAnimations } from "../utils/portfolio";

const Hero = () => {
  const [text, setText] = useState("");
  const phrases = useMemo(
    () => ["Web Developer", "Frontend Specialist", "Problem Solver"],
    []
  );
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    initParticles();
    initScrollAnimations();
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setTypingSpeed(150);
        return;
      }

      const delta = isDeleting ? -1 : 1;
      setText(currentPhrase.substring(0, text.length + delta));
      setTypingSpeed(isDeleting ? 50 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed]);

  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = "/assets/Fegi_Marvin_CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Fegi_Marvin_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="particles"></div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">
            <span className="wave">👋</span>
            <span>Hello, I'm</span>
          </div>
          <h1 className="hero-title">
            <span className="name">Zaivin</span>
            <div className="title-decoration"></div>
          </h1>
          <div className="hero-subtitle">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">
            Passionate Computer Engineering student crafting beautiful digital
            experiences with modern web technologies and creative
            problem-solving.
          </p>
          <div className="cta-buttons">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="btn btn-primary"
            >
              <i className="fas fa-rocket"></i>
              <span>Explore Work</span>
            </Link>
            <button onClick={handleDownloadCV} className="btn btn-secondary">
              <i className="fas fa-download"></i>
              <span>Download CV</span>
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <div className="code-block">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="code-title">portfolio.js</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable">developer</span>
                  <span className="code-operator">=</span>
                  <span className="code-string">'Zaivin'</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">let</span>
                  <span className="code-variable">skills</span>
                  <span className="code-operator">=</span>
                  <span className="code-bracket">[</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-string">'JavaScript'</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-string">'PHP'</span>,
                  <span className="code-string">'Node.js'</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket">]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
