// ===============================
// DARK MODE
// ===============================

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("portfolioTheme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("portfolioTheme", "light");
        themeToggle.textContent = "🌙";
    }
});


// ===============================
// NAVIGATION
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


// ===============================
// SCROLL ANIMATION
// ===============================

const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .education-card, .certificate-card, .career-item"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(function (element) {
    observer.observe(element);
});


// ===============================
// PORTFOLIO CHATBOT
// ===============================

const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotClose = document.getElementById("chatbot-close");

const chatbotInput = document.getElementById("chatbot-input");
const chatbotSend = document.getElementById("chatbot-send");

const chatbotMessages = document.getElementById("chatbot-messages");

const suggestions = document.querySelectorAll(".suggestion");


// ===============================
// OPEN CHATBOT
// ===============================

chatbotToggle.addEventListener("click", function () {

    chatbotWindow.classList.toggle("open");

    if (chatbotWindow.classList.contains("open")) {
        chatbotInput.focus();
    }

});


// ===============================
// CLOSE CHATBOT
// ===============================

chatbotClose.addEventListener("click", function () {

    chatbotWindow.classList.remove("open");

});


// ===============================
// ESCAPE HTML
// Prevents unsafe HTML from user messages
// ===============================

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// ===============================
// ADD MESSAGE
// ===============================

function addMessage(message, sender, allowHTML = false) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("chat-message");

    if (sender === "user") {

        messageDiv.classList.add("user-message");

    } else {

        messageDiv.classList.add("bot-message");

    }

    if (allowHTML) {

        messageDiv.innerHTML = message;

    } else {

        messageDiv.innerHTML = escapeHTML(message);

    }

    chatbotMessages.appendChild(messageDiv);

    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}


// ===============================
// CHATBOT RESPONSES
// ===============================

function getBotResponse(message) {

    const text = message.toLowerCase().trim();


    // GREETINGS
    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey") ||
        text.includes("good morning") ||
        text.includes("good afternoon") ||
        text.includes("good evening")
    ) {

        return "👋 Hello! I'm Nsovo's Portfolio Assistant. I can tell you about Nsovo, her skills, education, projects and career interests. What would you like to know?";

    }


    // WHO IS NSOVO
    if (
        text.includes("who is nsovo") ||
        text.includes("about nsovo") ||
        text.includes("tell me about nsovo") ||
        text.includes("who are you")
    ) {

        return "👩‍💻 Nsovo Mkoveni is an Information Technology graduate who completed a Diploma in Information Technology Network Management at Rosebank College. She is interested in practical technology solutions, web development, networking and building useful digital projects.";

    }


    // SKILLS
    if (
        text.includes("skill") ||
        text.includes("technology") ||
        text.includes("technologies") ||
        text.includes("what can she do")
    ) {

        return `
        💻 <strong>Nsovo's skills include:</strong>
        <br><br>
        • HTML<br>
        • CSS<br>
        • JavaScript<br>
        • Python<br>
        • Flask<br>
        • Networking<br>
        • IT Support<br>
        • Database fundamentals<br>
        • UI/UX fundamentals
        `;

    }


    // PROJECTS
    if (
        text.includes("project") ||
        text.includes("projects") ||
        text.includes("portfolio projects")
    ) {

        return `
        🚀 <strong>Nsovo has worked on several projects:</strong>
        <br><br>

        <strong>1. Netcare Patient Support Chatbot</strong><br>
        A chatbot project designed to help users navigate healthcare information and services.
        <br><br>

        <strong>2. ContentGen AI</strong><br>
        A content-generation web application with options such as content type, tone, audience and length.
        <br><br>

        <strong>3. Personal Portfolio</strong><br>
        This responsive portfolio website showcasing Nsovo's skills, education and projects.
        `;

    }


    // NETCARE
    if (
        text.includes("netcare") ||
        text.includes("patient chatbot") ||
        text.includes("healthcare chatbot")
    ) {

        return `
        🏥 <strong>Netcare Patient Support Chatbot</strong>
        <br><br>

        This is a Flask-based chatbot project designed to help users navigate healthcare information and services.
        <br><br>

        The project focuses on providing useful information and directing users toward appropriate healthcare services. It is not intended to diagnose conditions or replace healthcare professionals.
        <br><br>

        <a href="https://github.com/NsovoMkoveni/Netcare-Patient-Support-Chatbot"
        target="_blank"
        rel="noopener noreferrer">
        🔗 View Netcare Project on GitHub
        </a>
        `;

    }


    // CONTENTGEN
    if (
        text.includes("contentgen") ||
        text.includes("content generator") ||
        text.includes("content generation")
    ) {

        return `
        ✨ <strong>ContentGen AI</strong>
        <br><br>

        ContentGen AI is a web application designed to help users generate content based on different options such as content type, tone, audience and length.
        <br><br>

        The project also includes features such as regenerate, copy, download and saving content/history.
        <br><br>

        The current version uses programmed templates and logic rather than a live AI model.
        <br><br>

        <a href="https://github.com/NsovoMkoveni/ContentGen-AI"
        target="_blank"
        rel="noopener noreferrer">
        🔗 View ContentGen AI on GitHub
        </a>
        `;

    }


    // EDUCATION
    if (
        text.includes("education") ||
        text.includes("study") ||
        text.includes("qualification") ||
        text.includes("degree") ||
        text.includes("diploma") ||
        text.includes("rosebank")
    ) {

        return `
        🎓 <strong>Education</strong>
        <br><br>

        Nsovo completed a <strong>Diploma in Information Technology Network Management</strong> at Rosebank College.
        <br><br>

        She has also completed Cisco certifications including:
        <br><br>

        • Cisco Network Design and Initial Configuration<br>
        • Cisco Introduction to IoT and Digital Transformation
        `;

    }


    // CERTIFICATIONS
    if (
        text.includes("certificate") ||
        text.includes("certification") ||
        text.includes("cisco")
    ) {

        return `
        📜 <strong>Certifications</strong>
        <br><br>

        • Cisco Network Design and Initial Configuration<br>
        • Cisco Introduction to IoT and Digital Transformation
        `;

    }


    // CAREER
    if (
        text.includes("career") ||
        text.includes("interests") ||
        text.includes("interested") ||
        text.includes("job") ||
        text.includes("work")
    ) {

        return `
        💼 <strong>Career Interests</strong>
        <br><br>

        Nsovo is interested in:
        <br><br>

        • Web Development<br>
        • Full Stack Development<br>
        • IT Support<br>
        • Network Engineering<br>
        • Cybersecurity<br>
        • Cloud Computing<br>
        • IT Infrastructure
        `;

    }


    // CV
    if (
        text.includes("cv") ||
        text.includes("resume") ||
        text.includes("curriculum vitae")
    ) {

        return `
        📄 You can view Nsovo's CV here:
        <br><br>

        <a href="Nsovo-Mkoveni-CvPDF.pdf"
        download>
        📥 Download CV
        </a>
        `;

    }


    // GITHUB
    if (
        text.includes("github") ||
        text.includes("code repository") ||
        text.includes("repositories")
    ) {

        return `
        💻 You can view Nsovo's GitHub profile here:
        <br><br>

        <a href="https://github.com/NsovoMkoveni"
        target="_blank"
        rel="noopener noreferrer">
        🔗 Visit GitHub
        </a>
        `;

    }


    // LINKEDIN
    if (
        text.includes("linkedin") ||
        text.includes("professional profile")
    ) {

        return `
        🔗 You can view Nsovo's LinkedIn profile here:
        <br><br>

        <a href="https://www.linkedin.com/in/nsovo-mkoveni-7070b335b"
        target="_blank"
        rel="noopener noreferrer">
        Visit LinkedIn
        </a>
        `;

    }


    // CONTACT
    if (
        text.includes("contact") ||
        text.includes("hire") ||
        text.includes("reach")
    ) {

        return `
        📩 You can contact Nsovo through the links in the Contact section of this portfolio.
        <br><br>

        You can also connect with her on GitHub or LinkedIn.
        `;

    }


    // HELP
    if (
        text.includes("help") ||
        text.includes("what can you do") ||
        text.includes("options")
    ) {

        return `
        🤖 I can help you learn about:
        <br><br>

        • Nsovo<br>
        • Her skills<br>
        • Her projects<br>
        • Netcare chatbot<br>
        • ContentGen AI<br>
        • Education<br>
        • Certifications<br>
        • Career interests<br>
        • CV<br>
        • GitHub<br>
        • LinkedIn
        `;

    }


    // THANK YOU
    if (
        text.includes("thank you") ||
        text.includes("thanks")
    ) {

        return "😊 You're welcome! Feel free to ask me anything about Nsovo's portfolio.";

    }


    // DEFAULT RESPONSE
    return `
    🤔 I'm not sure about that yet.
    <br><br>

    I can answer questions about Nsovo's:
    <br><br>

    • Skills<br>
    • Projects<br>
    • Education<br>
    • Career interests<br>
    • CV<br>
    • GitHub<br>
    • LinkedIn
    `;

}


// ===============================
// SEND MESSAGE
// ===============================

function sendMessage() {

    const message = chatbotInput.value.trim();

    // Don't send empty messages
    if (message === "") {
        return;
    }


    // Show user's message
    addMessage(message, "user");


    // Clear input
    chatbotInput.value = "";


    // Get chatbot response
    const response = getBotResponse(message);


    // Small delay for natural conversation
    setTimeout(function () {

        addMessage(response, "bot", true);

    }, 300);

}


// ===============================
// SEND BUTTON
// ===============================

chatbotSend.addEventListener("click", function () {

    sendMessage();

});


// ===============================
// ENTER KEY
// ===============================

chatbotInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        sendMessage();

    }

});


// ===============================
// SUGGESTED QUESTIONS
// ===============================

suggestions.forEach(function (button) {

    button.addEventListener("click", function () {

        const question = button.textContent.trim();

        chatbotInput.value = question;

        sendMessage();

    });

});