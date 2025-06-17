// Enhanced Portfolio JavaScript
import emailjs from "@emailjs/browser";

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  initializePortfolio();
});

// Initialize all portfolio functionality
function initializePortfolio() {
  try {
    initNavigation();
    initTypingAnimation();
    initScrollAnimations();
    initParticles();
    initContactForm();
    initScrollIndicator();
    initMobileMenu();
    initSkillProgressBars();
    initThemeToggle();
  } catch (error) {
    console.error("Error initializing portfolio:", error);
  }
}

// Navigation functionality
function initNavigation() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!navbar || !navLinks.length) return;

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Smooth scroll for nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Typing animation
function initTypingAnimation() {
  const typedTextElement = document.getElementById("typed-text");
  if (!typedTextElement) return;

  const textArray = [
    "Computer Engineering Student",
    "Web Developer",
    "Frontend Enthusiast",
    "Problem Solver",
    "Tech Explorer",
  ];

  let textArrayIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeText() {
    const currentText = textArray[textArrayIndex];

    if (isDeleting) {
      typedTextElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    // Typing speed
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      // Pause at end
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textArrayIndex = (textArrayIndex + 1) % textArray.length;
      typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
  }

  // Start typing animation
  typeText();
}

// Scroll animations
function initScrollAnimations() {
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".glass-card, .timeline-item, .skill-card"
  );
  animatedElements.forEach((el) => observer.observe(el));
}

// Skill progress bar animation
function initSkillProgressBars() {
  const skillProgressBars = document.querySelectorAll(".skill-progress");
  if (!skillProgressBars.length) return;

  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgressBar(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillProgressBars.forEach((bar) => progressObserver.observe(bar));
}

function animateProgressBar(progressBar) {
  const progress = progressBar.style.getPropertyValue("--progress");
  progressBar.style.width = "0%";

  setTimeout(() => {
    progressBar.style.width = progress;
  }, 200);
}

// Particles system
function initParticles() {
  const particlesContainer = document.querySelector(".particles");
  if (!particlesContainer) return;

  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer);
  }
}

function createParticle(container) {
  const particle = document.createElement("div");
  particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(102, 126, 234, 0.5);
      border-radius: 50%;
      pointer-events: none;
  `;

  // Random position
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = Math.random() * 100 + "%";

  // Animation
  particle.style.animation = `
      particleFloat ${5 + Math.random() * 10}s linear infinite,
      particleFade ${2 + Math.random() * 3}s ease-in-out infinite alternate
  `;

  container.appendChild(particle);

  // Remove and recreate particle after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.remove();
      createParticle(container);
    }
  }, (5 + Math.random() * 10) * 1000);
}

// Add particle animations to CSS dynamically
function addParticleAnimations() {
  const style = document.createElement("style");
  style.textContent = `
      @keyframes particleFloat {
          0% { transform: translateY(100vh) translateX(0px); }
          100% { transform: translateY(-100px) translateX(${
            Math.random() * 200 - 100
          }px); }
      }
      
      @keyframes particleFade {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
      }
  `;
  document.head.appendChild(style);
}

// Contact Form Handling
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: "fegimarvin@gmail.com",
      };

      console.log("Sending email with params:", templateParams);

      emailjs
        .send("service_kh8htse", "template_7u2xbul", templateParams)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          showNotification("Message sent successfully!", "success");
          contactForm.reset();
        })
        .catch((error) => {
          console.error("FAILED...", error);
          showNotification(
            "Failed to send message. Please try again.",
            "error"
          );
        })
        .finally(() => {
          // Reset button state
          submitButton.innerHTML = originalButtonText;
          submitButton.disabled = false;
        });
    } catch (error) {
      console.error("Error in form submission:", error);
      showNotification("An error occurred. Please try again.", "error");
      submitButton.innerHTML = originalButtonText;
      submitButton.disabled = false;
    }
  });
}

// Notification function
function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
        <i class="fas ${
          type === "success" ? "fa-check-circle" : "fa-exclamation-circle"
        }"></i>
        <span>${message}</span>
    `;
  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Scroll indicator
function initScrollIndicator() {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (!scrollIndicator) return;

  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = (window.scrollY / documentHeight) * 100;
    scrollIndicator.style.width = `${scrolled}%`;
  });
}

// Mobile menu functionality
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navContainer = document.querySelector(".nav-container");
  if (!hamburger || !navLinks || !navContainer) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    navContainer.classList.toggle("menu-open");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      navContainer.classList.remove("menu-open");
    }
  });

  // Close menu when clicking a nav link
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      navContainer.classList.remove("menu-open");
    });
  });
}

// Theme toggle functionality
function initThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
  if (!themeToggle) return;

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Function to set theme
  function setTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
    localStorage.setItem("theme", theme);
    updateThemeIcon(theme);
  }

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const systemTheme = prefersDarkScheme.matches ? "dark" : "light";
    setTheme(systemTheme);
  }

  // Theme toggle click handler
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  });

  // Update theme icon based on current theme
  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector("i");
    if (theme === "light") {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  }

  // Listen for system theme changes
  prefersDarkScheme.addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      const systemTheme = e.matches ? "dark" : "light";
      setTheme(systemTheme);
    }
  });
}

// Add particle animations to CSS
addParticleAnimations();

// Export functions for use in other files
export {
  initContactForm,
  initializePortfolio,
  initMobileMenu,
  initNavigation,
  initParticles,
  initScrollAnimations,
  initScrollIndicator,
  initSkillProgressBars,
  initThemeToggle,
  initTypingAnimation,
  showNotification,
};
