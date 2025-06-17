import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Footer.css";
import { initScrollIndicator } from "../utils/portfolio";

const Footer = () => {
  useEffect(() => {
    initScrollIndicator();
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              &copy; {new Date().getFullYear()} Zaivin. Crafted with{" "}
              <i className="fas fa-heart"></i> and lots of{" "}
              <i className="fas fa-coffee"></i>
            </p>
          </div>
          <div className="footer-links">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="back-to-top"
            >
              <i className="fas fa-arrow-up"></i>
              <span>Back to top</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
