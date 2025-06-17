import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import "../styles/Contact.css";
import { initScrollAnimations, showNotification } from "../utils/portfolio";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    initScrollAnimations();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_3oq7y0v", // Your EmailJS service ID
        "template_7u2xbul", // Your EmailJS template ID
        form.current,
        "F-3JhgI47wG8qcdkg" // Your EmailJS public key
      )
      .then((result) => {
        console.log(result.text);
        showNotification("Message sent successfully!", "success");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        showNotification("Failed to send message. Please try again.", "error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Have a project in mind or just want to chat about technology? I'd
            love to hear from you!
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card glass-card">
              <h3>Let's work together</h3>
              <p>
                I'm always excited to take on new challenges and collaborate on
                interesting projects.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <i className="fas fa-envelope"></i>
                  <a
                    href="mailto:fegimarvin@gmail.com"
                    className="contact-link"
                  >
                    sexford056@gmail.com
                  </a>
                </div>
                <div className="contact-method">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Rodriguez, Rizal, Philippines</span>
                </div>
                <div className="contact-method">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Computer Engineering Student</span>
                </div>
              </div>
              <div className="social-links">
                <a
                  href="https://github.com/zaivin-frontend"
                  className="social-link"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/your-profile"
                  className="social-link"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://twitter.com/your-handle"
                  className="social-link"
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="mailto:fegimarvin@gmail.com"
                  className="social-link"
                  title="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form glass-card"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="user_name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="user_email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={isSending}
              >
                <i className="fas fa-paper-plane"></i>
                <span>{isSending ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
