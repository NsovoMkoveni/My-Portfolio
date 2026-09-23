// ================================
// DARK MODE
// ================================

function toggleTheme() {
    document.body.classList.toggle("dark");

    const themeButton = document.getElementById("themeToggle");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️";
        localStorage.setItem("portfolioTheme", "dark");
    } else {
        themeButton.textContent = "🌙";
        localStorage.setItem("portfolioTheme", "light");
    }
}


// ================================
// LOAD SAVED THEME
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("portfolioTheme");
    const themeButton = document.getElementById("themeToggle");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");

        if (themeButton) {
            themeButton.textContent = "☀️";
        }
    }

});


// ================================
// NAVIGATION
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".navbar nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

});


// ================================
// SCROLL ANIMATION
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".skill-card, .project-card, .highlight, .education-card"
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
            threshold: 0.1
        }
    );


    elements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });

});