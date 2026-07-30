/* ==========================================
   PORTFOLIO - SCRIPT.JS
========================================== */

// ================================
// Typed.js
// ================================

const typedElement = document.querySelector("#typing");

if (typedElement) {

    new Typed("#typing", {

        strings: [

            "Cloud & DevOps Engineer",
            "AWS Enthusiast",
            "Terraform Practitioner",
            "CI/CD Automation Engineer"

        ],

        typeSpeed: 70,

        backSpeed: 45,

        backDelay: 1800,

        loop: true

    });

}

// ================================
// AOS Animation
// ================================

AOS.init({

    duration: 1000,

    once: true,

    offset: 100,

    easing: "ease-in-out"

});

// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ================================
// Scroll To Top Button
// ================================

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (!scrollTopBtn) return;

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ================================
// Navbar Background
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,15,32,0.92)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(8,15,32,0.65)";
        header.style.boxShadow = "none";

    }

});

// ================================
// Reveal Cards on Hover
// ================================

const cards = document.querySelectorAll(

    ".skill-card, .project-card, .contact-card, .timeline-content, .certification-card"

);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".3s";

    });

});

// ================================
// Footer Year
// ================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Uma Karthik. All Rights Reserved.`;

}

// ================================
// Contact Form
// ================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });

}