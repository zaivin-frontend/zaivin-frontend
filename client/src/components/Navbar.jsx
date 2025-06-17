import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import { initMobileMenu, initNavigation } from "../utils/portfolio";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Initialize navigation functionality
    initNavigation();
    initMobileMenu();

    // Handle theme
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (isDark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDark]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">Zaivin</span>
          <div className="logo-dot"></div>
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {["home", "about", "cv", "projects", "skills", "contact"].map(
            (section) => (
              <li key={section}>
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`nav-link ${
                    activeSection === section ? "active" : ""
                  }`}
                  onSetActive={() => handleSetActive(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`}></i>
        </button>

        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
