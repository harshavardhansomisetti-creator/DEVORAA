// DEVORAA - COURSE DATA

import { co1Topics } from "./co1.js";
import { co2Topics } from "./co2.js";

// ==========================================
// DEVORAA - COURSE DATA
// ==========================================

const courses = {
    CO1: {
        title: "Web Foundations",
        description: "Learn how websites are structured and displayed.",
        topics: [
            "Introduction to Full Stack Development",
            "Client, Server and Database",
            "HTML Fundamentals",
            "Semantic HTML",
            "CSS Fundamentals",
            "Flexbox and Grid",
            "Responsive Web Design",
            "CSS Variables",
            "Building a Three-Page Website"
        ]
    },

    CO2: {
        title: "JavaScript",
        description: "Learn how to make websites interactive.",
        topics: [
            "JavaScript Fundamentals",
            "Variables and Data Types",
            "Functions and Callbacks",
            "Higher Order Functions",
            "Promises",
            "Async and Await",
            "Fetch API",
            "DOM Manipulation",
            "Events and Local Storage",
            "Building a To-Do Application"
        ]
    },

    CO3: {
        title: "React Development",
        description: "Build user interfaces using React.",
        topics: [
            "Introduction to React", "JSX", "Components", "Props",
            "useState", "useEffect", "Conditional Rendering",
            "Lists and Keys", "Controlled Forms",
            "React To-Do Application"
        ]
    },

    CO4: {
        title: "Backend Development",
        description: "Understand servers, APIs and backend logic.",
        topics: [
            "Introduction to Node.js", "Node.js Fundamentals",
            "Express.js", "Middleware", "REST APIs",
            "Input Validation", "Error Handling",
            "Environment Variables", "Introduction to tRPC",
            "Building a Notes API"
        ]
    },

    CO5: {
        title: "Database Development",
        description: "Learn how applications store and manage data.",
        topics: [
            "Introduction to Databases", "Database Persistence",
            "MongoDB Fundamentals", "BSON and MongoDB Operators",
            "Mongoose", "PostgreSQL", "Prisma ORM",
            "Database Schema Design", "CRUD Operations",
            "Connecting Database with Backend"
        ]
    },

    CO6: {
        title: "Authentication and Deployment",
        description: "Secure, connect and publish a full-stack application.",
        topics: [
            "Authentication Fundamentals", "Sessions and JWT",
            "Password Hashing", "OAuth", "CORS",
            "Deployment Fundamentals", "Vercel and Render",
            "MongoDB Atlas and Supabase",
            "AI Coding Assistant Security Review",
            "Deploying a Full-Stack Application"
        ]
    }
};


// ==========================================
// DOM ELEMENTS
// ==========================================

const nameForm = document.getElementById("nameForm");
const userName = document.getElementById("userName");
const nameScreen = document.getElementById("nameScreen");
const appLayout = document.getElementById("appLayout");
const pageContent = document.getElementById("pageContent");
const sidebarToggle = document.getElementById("sidebarToggle");

let studentName = "";


// ==========================================
// SCROLL TO TOP
// ==========================================

function scrollPageToTop() {

    pageContent.scrollTo({
        top: 0,
        behavior: "instant"
    });

    let parent = pageContent.parentElement;

    while (parent && parent !== document.body) {

        const style = window.getComputedStyle(parent);

        const canScroll =
            parent.scrollHeight > parent.clientHeight &&
            ["auto", "scroll"].includes(style.overflowY);

        if (canScroll) {
            parent.scrollTo({
                top: 0,
                behavior: "instant"
            });
            break;
        }

        parent = parent.parentElement;
    }

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


// ==========================================
// NAME ENTRY
// ==========================================

if (nameForm) {

    nameForm.addEventListener("submit", function(event) {

        event.preventDefault();

        studentName = userName.value.trim();

        if (!studentName) {
            userName.focus();
            return;
        }

        nameScreen.style.opacity = "0";
        nameScreen.style.transform = "translateY(-15px)";

        setTimeout(function() {

            nameScreen.style.display = "none";
            appLayout.classList.add("visible");

            showDashboard();

        }, 500);

    });

}


// ==========================================
// DASHBOARD
// ==========================================

function showDashboard() {

    setActiveNavigation("dashboard");

    pageContent.innerHTML = `

        <p class="eyebrow">YOUR LEARNING SPACE</p>

        <h1 class="welcome-heading">
            Welcome, ${escapeHTML(studentName)}.
        </h1>

        <p class="page-description">
            Choose a course and start learning.
        </p>

        <h2 class="section-heading">Your curriculum</h2>

        <div class="course-grid">

            ${Object.entries(courses).map(([code, course]) => `

                <button class="course-card"
                    data-open-course="${code}">

                    <p class="course-number">${code}</p>

                    <h3>${escapeHTML(course.title)}</h3>

                    <p>${escapeHTML(course.description)}</p>

                </button>

            `).join("")}

        </div>

    `;

    scrollPageToTop();
}


// ==========================================
// COURSE PAGE
// ==========================================

function showCourse(code) {

    const course = courses[code];

    if (!course) return;

    setActiveNavigation(code);

    pageContent.innerHTML = `

        <button class="back-button" data-page="dashboard">
            ← Back to dashboard
        </button>

        <p class="eyebrow">${code} / COURSE</p>

        <h1 class="course-title">
            ${escapeHTML(course.title)}
        </h1>

        <p class="page-description">
            ${escapeHTML(course.description)}
        </p>

        <h2 class="section-heading">Topics</h2>

        <div class="topic-list">

            ${course.topics.map((topic, index) => `

                <button class="topic-item"
                    data-topic="${index}"
                    data-course-code="${code}">

                    <span>
                        ${String(index + 1).padStart(2, "0")}
                        &nbsp; ${escapeHTML(topic)}
                    </span>

                    <span>→</span>

                </button>

            `).join("")}

        </div>

    `;

    scrollPageToTop();
}


// ==========================================
// CO1 AND CO2 LESSON DISPLAY
// ==========================================

function showTopicLesson(code, index) {

    const topics = code === "CO1" ? co1Topics : co2Topics;

    const lesson = topics[index];

    if (!lesson) return;

    setActiveNavigation(code);

    const sectionsHTML = lesson.sections.map((section, i) => `

        <section class="lesson-section">

            <h2>${i + 1}. ${escapeHTML(section.heading)}</h2>

            ${section.body ? `
                <p>${escapeHTML(section.body)}</p>
            ` : ""}

            ${section.code ? `
                <pre class="lesson-code"><code>${escapeHTML(section.code)}</code></pre>
            ` : ""}

        </section>

    `).join("");

    pageContent.innerHTML = `

        <div class="lesson-header">

            <button class="back-button" data-course="${code}">
                ← Back to ${code}
            </button>

            <p class="eyebrow">
                ${code} / TOPIC ${String(index + 1).padStart(2, "0")}
            </p>

            <h1 class="course-title">
                ${escapeHTML(lesson.title)}
            </h1>

            <p class="page-description">
                ${code === "CO1" ? "Web Foundations" : "JavaScript"}
            </p>

        </div>

        <article class="lesson-content">

            ${sectionsHTML}

            <section class="lesson-section">

                <h2>Topic Assessment</h2>

                <p>Answer all five questions to test your understanding.</p>

                <div id="lessonQuiz"></div>

            </section>

        </article>

        <div class="lesson-footer">

            <button class="back-button"
                data-topic-lesson="${index - 1}"
                data-topic-course="${code}"
                ${index === 0 ? "disabled" : ""}>

                ← Previous Topic

            </button>

            <button class="back-button"
                data-topic-lesson="${index + 1}"
                data-topic-course="${code}"
                ${index === topics.length - 1 ? "disabled" : ""}>

                Next Topic →

            </button>

            <button class="back-button" data-course="${code}">
                Back to ${code}
            </button>

        </div>

    `;

    renderQuiz(lesson);

    scrollPageToTop();
}


// ==========================================
// FIVE QUESTION QUIZ
// ==========================================

function renderQuiz(lesson) {

    const quizContainer = document.getElementById("lessonQuiz");

    if (!quizContainer) return;

    const questions = lesson.questions;

    if (!Array.isArray(questions) || questions.length !== 5) {

        quizContainer.innerHTML = `

            <p class="quiz-result">
                Assessment questions are being prepared for this topic.
            </p>

        `;

        return;
    }

    quizContainer.innerHTML = `

        <div class="quiz-questions">

            ${questions.map((question, index) => `

                <div class="quiz-question">

                    <h3>
                        ${index + 1}. ${escapeHTML(question.question)}
                    </h3>

                    <p class="quiz-level">
                        ${escapeHTML(question.level)}
                    </p>

                    <div class="lesson-quiz">

                        ${question.options.map((option, optionIndex) => `

                            <label class="quiz-option">

                                <input
                                    type="radio"
                                    name="question-${index}"
                                    value="${optionIndex}"
                                >

                                ${escapeHTML(option)}

                            </label>

                        `).join("")}

                    </div>

                    <p class="quiz-feedback" id="feedback-${index}"></p>

                </div>

            `).join("")}

        </div>

        <button class="back-button" id="submitQuiz">
            Submit Assessment
        </button>

        <div id="quizResult" class="quiz-result"></div>

        <button class="back-button" id="retakeQuiz" hidden>
            Retake Assessment
        </button>

    `;

    document.getElementById("submitQuiz")
        .addEventListener("click", () => checkQuiz(questions));

    document.getElementById("retakeQuiz")
        .addEventListener("click", () => renderQuiz(lesson));

}


// ==========================================
// CHECK QUIZ ANSWERS
// ==========================================

function checkQuiz(questions) {

    let score = 0;
    let unanswered = false;

    questions.forEach((question, index) => {

        const selected = document.querySelector(
            `input[name="question-${index}"]:checked`
        );

        const feedback = document.getElementById(`feedback-${index}`);

        if (!selected) {
            unanswered = true;
            return;
        }

        const selectedAnswer = Number(selected.value);

        if (selectedAnswer === question.correct) {

            score++;

            feedback.textContent =
                "Correct! " + (question.explanation || "");

            feedback.style.color = "#247a46";

        } else {

            feedback.textContent =
                "Incorrect. Correct answer: " +
                question.options[question.correct] +
                ". " + (question.explanation || "");

            feedback.style.color = "#b04444";
        }

    });

    if (unanswered) {

        document.getElementById("quizResult").textContent =
            "Please answer all five questions before submitting.";

        return;
    }

    document.querySelectorAll("#lessonQuiz input").forEach(input => {
        input.disabled = true;
    });

    document.getElementById("submitQuiz").disabled = true;

    document.getElementById("quizResult").textContent =
        `Your Score: ${score}/5`;

    document.getElementById("retakeQuiz").hidden = false;

}


// ==========================================
// ACTIVE NAVIGATION
// ==========================================

function setActiveNavigation(page) {

    document.querySelectorAll(".nav-item").forEach(button => {

        const isDashboard = button.dataset.page === page;
        const isCourse = button.dataset.course === page;

        button.classList.toggle(
            "active",
            isDashboard || isCourse
        );

    });

}


// ==========================================
// HTML ESCAPE
// ==========================================

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, character => ({

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"

    })[character]);

}


// ==========================================
// ALL CLICK EVENTS
// ==========================================

document.addEventListener("click", function(event) {

    const courseButton = event.target.closest("[data-course]");

    const openCourseButton = event.target.closest("[data-open-course]");

    const dashboardButton = event.target.closest('[data-page="dashboard"]');

    const topicButton = event.target.closest("[data-topic]");

    const lessonButton = event.target.closest("[data-topic-lesson]");


    if (courseButton) {

        showCourse(courseButton.dataset.course);

        return;
    }


    if (openCourseButton) {

        showCourse(openCourseButton.dataset.openCourse);

        return;
    }


    if (dashboardButton) {

        showDashboard();

        return;
    }


    if (topicButton) {

        const code = topicButton.dataset.courseCode;

        const index = Number(topicButton.dataset.topic);

        if (!courses[code] || !courses[code].topics[index]) return;

        if (code === "CO1" || code === "CO2") {

            showTopicLesson(code, index);

        } else {

            showPlaceholderLesson(code, index);

        }

        return;
    }


    if (lessonButton) {

        const code = lessonButton.dataset.topicCourse;

        const index = Number(lessonButton.dataset.topicLesson);

        const topics = code === "CO1" ? co1Topics : co2Topics;

        if (index >= 0 && index < topics.length) {

            showTopicLesson(code, index);

        }

        return;
    }

});


// ==========================================
// OTHER COURSE PLACEHOLDER
// ==========================================

function showPlaceholderLesson(code, index) {

    const topic = courses[code].topics[index];

    pageContent.innerHTML = `

        <button class="back-button" data-course="${code}">
            ← Back to ${code}
        </button>

        <p class="eyebrow">${code} / TOPIC ${index + 1}</p>

        <h1 class="course-title">${escapeHTML(topic)}</h1>

        <p class="page-description">
            Lesson content will be added here.
        </p>

    `;

    scrollPageToTop();
}


// ==========================================
// SIDEBAR TOGGLE
// ==========================================

if (sidebarToggle) {

    sidebarToggle.addEventListener("click", function() {

        appLayout.classList.toggle("sidebar-collapsed");

    });

}
