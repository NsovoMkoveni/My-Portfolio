/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


/* Close mobile menu when a link is clicked */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


/* =========================
   DARK MODE
========================= */

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkModeBtn.textContent = "☀️";

        localStorage.setItem("darkMode", "enabled");

    } else {

        darkModeBtn.textContent = "🌙";

        localStorage.setItem("darkMode", "disabled");

    }

});


/* Remember dark mode */

if (localStorage.getItem("darkMode") === "enabled") {

    document.body.classList.add("dark");

    darkModeBtn.textContent = "☀️";

}


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    contactForm.reset();

});


/* =========================
   BACK TO TOP
========================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   SCROLL ANIMATION
========================= */

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .experience-card, .timeline-item"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});