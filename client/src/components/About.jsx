import React, { useEffect } from "react";
import "../style/About.css";
import { initScrollAnimations } from "../utils/portfolio.js";

const About = () => {
    useEffect (() => {
        initScrollAnimations();
    }, []);

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Get to know me</span>
                    <h2 className="section-title">About Me</h2>
                </div>
                <div className="about-cont">
                    <div className="about-text">
                        <div className="about-card glass-card">
                            <h3>My Journey</h3>
                            <p>
                                I'm a passionate Computer Engineering student at Colegio De
                                Montalban, driven by curiosity and a love for technology. My
                                journey in web development began with a simple "Hello World" and
                                has evolved into creating meaningful digital experiences.
                            </p>
                            <p>
                                I believe in the power of clean code, intuitive design, and
                                continuous learning. Every project is an opportunity to push
                                boundaries and create something that makes a difference.
                            </p>
                            <div className="about-hightlights">
                                <div className="highlight">
                                    <i className="fas fa-graduation-cap"></i>
                                    <span>Computer Engineering Student</span>
                                </div>
                                <div className="hightlight">
                                    <i className="fas fa-code"></i>
                                    <span>Frontend Developer</span>
                                </div>
                                <div className="hightlight">
                                    <i className="fas fa-lightbulb"></i>
                                    <span>Problem Solver</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="image-container">
                            <div className="floating-elements">
                                <div className="floating-element" style={{ "--delay": "0s" }}>
                                    <i className="fab fa-js"></i>
                                </div>
                                <div className="floating-element" style={{ "--delay": "1s" }}>
                                    <i className="fab fa-php"></i>
                                </div>
                                <div className="floating-element" style={{ "--delay": "2s" }}>
                                    <i className="fab fa-node-js"></i>
                                </div>
                                <div className="floating-element" style={{ "--delay": "3s" }}>
                                    <i className="fab fa-database"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;