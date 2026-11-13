import { co1Topics } from "./co1.js";
import { co2Topics } from "./co2.js";
import { co3Topics } from "./co3.js";
import { co4Topics } from "./co4.js";
import { co5Topics } from "./co5.js";
import { co6Topics } from "./co6.js";

// ==========================================
// DEVORAA - COURSE INFORMATION
// ==========================================

const courseTopics = {
    CO1: co1Topics,
    CO2: co2Topics,
    CO3: co3Topics,
    CO4: co4Topics,
    CO5: co5Topics,
    CO6: co6Topics
};

const courses = {
    CO1: {
        title: "Web Foundations",
        description: "Learn how websites are structured and displayed."
    },
    CO2: {
        title: "JavaScript",
        description: "Learn how to make websites interactive."
    },
    CO3: {
        title: "React Development",
        description: "Build user interfaces using React."
    },
    CO4: {
        title: "Backend Development",
        description: "Understand servers, APIs and backend logic."
    },
    CO5: {
        title: "Database Development",
        description: "Learn how applications store and manage data."
    },
    CO6: {
        title: "Authentication and Deployment",
        description: "Secure, connect and publish a full-stack application."
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
// LOCAL STORAGE
// ==========================================

const STORAGE_KEY = "devoraaProgress";

function getProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return {
                name: "",
                lastVisited: null,
                completedTopics: [],
                quizScores: {}
            };
        }

        const progress = JSON.parse(saved);

        return {
            name: typeof progress.name === "string" ? progress.name : "",
            lastVisited: progress.lastVisited || null,
            completedTopics: Array.isArray(progress.completedTopics)
                ? progress.completedTopics : [],
            quizScores: progress.quizScores || {}
        };

    } catch (error) {
        console.error("Could not read saved progress:", error);

        return {
            name: "",
            lastVisited: null,
            completedTopics: [],
            quizScores: {}
        };
    }
}

let savedProgress = getProgress();

function saveProgress() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(savedProgress)
        );
    } catch (error) {
        console.error("Could not save progress:", error);
    }
}

// ==========================================
// PROGRESS HELPERS
// ==========================================

function getTopicKey(code, index) {
    return `${code}:${index}`;
}

function isTopicCompleted(code, index) {
    return savedProgress.completedTopics.includes(
        getTopicKey(code, index)
    );
}

function getCourseProgress(code) {
    const topics = courseTopics[code] || [];

    if (topics.length === 0) return 0;

    const completed = topics.filter((topic, index) =>
        isTopicCompleted(code, index)
    ).length;

    return Math.round((completed / topics.length) * 100);
}

function getLastLesson() {
    const last = savedProgress.lastVisited;

    if (!last || !courseTopics[last.code]) return null;

    const topics = courseTopics[last.code];

    if (
        !Number.isInteger(last.index) ||
        last.index < 0 ||
        last.index >= topics.length
    ) {
        return null;
    }

    return {
        code: last.code,
        index: last.index
    };
}

// ==========================================
// SAVE LAST VISITED TOPIC
// ==========================================

function saveLastVisited(code, index) {
    savedProgress.lastVisited = {
        code: code,
        index: index
    };

    saveProgress();
}

// ==========================================
// SCROLL TO TOP
// ==========================================

function scrollPageToTop() {
    if (pageContent) {
        pageContent.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}

// ==========================================
// OPEN APPLICATION
// ==========================================

function openApplication() {
    if (nameScreen) {
        nameScreen.style.display = "none";
    }

    if (appLayout) {
        appLayout.classList.add("visible");
    }

    const lastLesson = getLastLesson();

    if (lastLesson) {
        showTopicLesson(lastLesson.code, lastLesson.index);
    } else {
        showDashboard();
    }
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

        savedProgress.name = studentName;
        saveProgress();

        if (nameScreen) {
            nameScreen.style.opacity = "0";
            nameScreen.style.transform = "translateY(-15px)";
        }

        setTimeout(function() {
            openApplication();
        }, 500);
    });
}

// ==========================================
// DASHBOARD
// ==========================================

function showDashboard() {
    setActiveNavigation("dashboard");

    const lastLesson = getLastLesson();

    let continueHTML = "";

    if (lastLesson) {
        const course = courses[lastLesson.code];
        const lesson = courseTopics[lastLesson.code][lastLesson.index];

        continueHTML = `
            <h2 class="section-heading">Continue learning</h2>

            <button class="course-card"
                data-topic="${lastLesson.index}"
                data-course-code="${lastLesson.code}">

                <p class="course-number">${lastLesson.code}</p>

                <h3>${escapeHTML(lesson.title)}</h3>

                <p>${escapeHTML(course.title)}</p>

                <p>Continue where you left off →</p>

            </button>
        `;
    }

    pageContent.innerHTML = `
        <p class="eyebrow">YOUR LEARNING SPACE</p>

        <h1 class="welcome-heading">
            Welcome, ${escapeHTML(studentName)}.
        </h1>

        <p class="page-description">
            Choose a course and start learning.
        </p>

        ${continueHTML}

        <h2 class="section-heading">Your curriculum</h2>

        <div class="course-grid">
            ${Object.entries(courses).map(([code, course]) => `
                <button class="course-card"
                    data-open-course="${code}">

                    <p class="course-number">${code}</p>

                    <h3>${escapeHTML(course.title)}</h3>

                    <p>${escapeHTML(course.description)}</p>

                    <p>${getCourseProgress(code)}% completed</p>

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
    const topics = courseTopics[code];

    if (!course || !Array.isArray(topics)) {
        console.error("Course data not found:", code);
        return;
    }

    setActiveNavigation(code);

    const completedCount = topics.filter((topic, index) =>
        isTopicCompleted(code, index)
    ).length;

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

        <h2 class="section-heading">Course progress</h2>

        <p>${completedCount} of ${topics.length} topics completed</p>

        <p>${getCourseProgress(code)}% completed</p>

        <h2 class="section-heading">Topics</h2>

        <div class="topic-list">
            ${topics.map((topic, index) => {
                const topicTitle =
                    typeof topic === "string"
                        ? topic
                        : topic.title;

                const completed = isTopicCompleted(code, index);

                return `
                    <button class="topic-item"
                        data-topic="${index}"
                        data-course-code="${code}">

                        <span>
                            ${String(index + 1).padStart(2, "0")}
                            &nbsp; ${escapeHTML(topicTitle || "Untitled Topic")}
                        </span>

                        <span>
                            ${completed ? "✓ Completed" : "→"}
                        </span>

                    </button>
                `;
            }).join("")}
        </div>
    `;

    scrollPageToTop();
}

// ==========================================
// LESSON DISPLAY - CO1 TO CO6
// ==========================================

function showTopicLesson(code, index) {
    const topics = courseTopics[code];

    if (!Array.isArray(topics)) return;

    const lesson = topics[index];

    if (!lesson || typeof lesson !== "object") {
        console.error("Lesson not found:", code, index);
        return;
    }

    // Save the current course and topic
    saveLastVisited(code, index);

    setActiveNavigation(code);

    const completed = isTopicCompleted(code, index);

    const sectionsHTML = (lesson.sections || []).map((section, i) => `
        <section class="lesson-section">

            <h2>${i + 1}. ${escapeHTML(section.heading || "")}</h2>

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
                ${escapeHTML(lesson.title || "Untitled Topic")}
            </h1>

            <p class="page-description">
                ${escapeHTML(courses[code].title)}
            </p>

            <p class="page-description">
                ${completed ? "✓ Assessment completed" : "Not completed yet"}
            </p>

        </div>

        <article class="lesson-content">

            ${sectionsHTML || `
                <section class="lesson-section">
                    <p>Lesson content is being prepared.</p>
                </section>
            `}

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

    renderQuiz(lesson, code, index);
    scrollPageToTop();
}

// ==========================================
// FIVE QUESTION QUIZ
// ==========================================

function renderQuiz(lesson, code, index) {
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
                        ${index + 1}. ${escapeHTML(question.question || "")}
                    </h3>

                    ${question.level ? `
                        <p class="quiz-level">
                            ${escapeHTML(question.level)}
                        </p>
                    ` : ""}

                    <div class="lesson-quiz">
                        ${(question.options || []).map((option, optionIndex) => `
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
        .addEventListener("click", () =>
            checkQuiz(questions, code, index)
        );

    document.getElementById("retakeQuiz")
        .addEventListener("click", () =>
            renderQuiz(lesson, code, index)
        );
}

// ==========================================
// CHECK QUIZ ANSWERS AND SAVE COMPLETION
// ==========================================

function checkQuiz(questions, code, topicIndex) {
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

        const correctAnswer = Number(
            question.correct ?? question.answer
        );

        const selectedAnswer = Number(selected.value);

        if (selectedAnswer === correctAnswer) {
            score++;

            feedback.textContent =
                "Correct! " + (question.explanation || "");

            feedback.style.color = "#247a46";
        } else {
            feedback.textContent =
                "Incorrect. Correct answer: " +
                question.options[correctAnswer] +
                ". " + (question.explanation || "");

            feedback.style.color = "#b04444";
        }
    });

    if (unanswered) {
        document.getElementById("quizResult").textContent =
            "Please answer all five questions before submitting.";
        return;
    }

    // Disable submitted answers
    document.querySelectorAll("#lessonQuiz input").forEach(input => {
        input.disabled = true;
    });

    document.getElementById("submitQuiz").disabled = true;

    document.getElementById("quizResult").textContent =
        `Your Score: ${score}/5`;

    document.getElementById("retakeQuiz").hidden = false;

    // Save completed topic
    const topicKey = getTopicKey(code, topicIndex);

    if (!savedProgress.completedTopics.includes(topicKey)) {
        savedProgress.completedTopics.push(topicKey);
    }

    // Save latest quiz score
    savedProgress.quizScores[topicKey] = score;

    saveProgress();
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

        showTopicLesson(code, index);
        return;
    }

    if (lessonButton) {
        const code = lessonButton.dataset.topicCourse;
        const index = Number(lessonButton.dataset.topicLesson);

        const topics = courseTopics[code];

        if (topics && index >= 0 && index < topics.length) {
            showTopicLesson(code, index);
        }

        return;
    }
});

// ==========================================
// SIDEBAR TOGGLE
// ==========================================

if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function() {
        appLayout.classList.toggle("sidebar-collapsed");
    });
}

// ==========================================
// START DEVORAA
// ==========================================

if (savedProgress.name) {
    studentName = savedProgress.name;
    openApplication();
} else {
    if (nameScreen) {
        nameScreen.style.display = "flex";
    }

    if (appLayout) {
        appLayout.classList.remove("visible");
    }
}
