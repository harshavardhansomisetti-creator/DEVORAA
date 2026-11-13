
export const co4Topics = [

    // ==========================================
    // TOPIC 1 - INTRODUCTION TO NODE.JS
    // ==========================================

    {
        title: "Introduction to Node.js",

        sections: [
            {
                heading: "What is Node.js?",
                body: "Node.js is an open-source JavaScript runtime environment. It allows developers to execute JavaScript outside a web browser. Before Node.js, JavaScript was mainly used to make web pages interactive. Node.js allows JavaScript to run on servers, process requests, access files and communicate with databases."
            },
            {
                heading: "Why was Node.js introduced?",
                body: "Traditionally, frontend and backend applications were developed using different programming languages. Node.js made it possible to use JavaScript for both frontend and backend development. This helps developers build complete applications using one language."
            },
            {
                heading: "How Node.js works",
                body: "Node.js uses the V8 JavaScript engine to execute JavaScript code. It follows an event-driven, non-blocking I/O model. This means it can handle multiple operations without waiting for every operation to finish one by one.",
                code: `// First Node.js program

console.log("Welcome to Node.js");

const name = "DEVORAA";

console.log("Learning platform:", name);`
            },
            {
                heading: "Node.js applications",
                body: "Node.js is used in web servers, REST APIs, real-time chat applications, streaming services, automation tools and backend systems. Popular applications use Node.js for handling network requests and asynchronous operations."
            },
            {
                heading: "Node.js vs JavaScript in Browser",
                body: "Browser JavaScript works inside a web browser and can interact with HTML, CSS and the DOM. Node.js executes JavaScript outside the browser and provides access to server-side features such as files, operating system information and network services."
            }
        ],

        questions: [
            {
                question: "What is Node.js?",
                level: "Easy",
                options: [
                    "A JavaScript runtime environment",
                    "A database",
                    "A CSS framework",
                    "An operating system"
                ],
                correct: 0,
                explanation: "Node.js allows JavaScript to execute outside a browser."
            },
            {
                question: "Which engine does Node.js use?",
                level: "Easy",
                options: ["SpiderMonkey", "V8", "Java Engine", "WebKit"],
                correct: 1,
                explanation: "Node.js uses Google's V8 JavaScript engine."
            },
            {
                question: "Node.js is mainly used for which purpose?",
                level: "Easy",
                options: [
                    "Image editing",
                    "Backend development",
                    "Operating system installation",
                    "Graphic designing"
                ],
                correct: 1,
                explanation: "Node.js is widely used to build backend applications."
            },
            {
                question: "What does non-blocking I/O mean?",
                level: "Medium",
                options: [
                    "Every operation must wait",
                    "Operations can continue without waiting for I/O completion",
                    "JavaScript cannot execute",
                    "The server stops permanently"
                ],
                correct: 1,
                explanation: "Non-blocking I/O allows other work to continue while an I/O operation is pending."
            },
            {
                question: "Can Node.js execute JavaScript outside a browser?",
                level: "Easy",
                options: ["Yes", "No", "Only CSS", "Only HTML"],
                correct: 0,
                explanation: "Node.js was designed to execute JavaScript outside web browsers."
            }
        ]
    },


    // ==========================================
    // TOPIC 2 - NODE.JS FUNDAMENTALS
    // ==========================================

    {
        title: "Node.js Fundamentals",

        sections: [
            {
                heading: "Understanding the Node.js environment",
                body: "Node.js provides an environment for running JavaScript programs on a computer or server. It includes built-in modules that help developers perform common tasks such as working with files, creating servers and handling paths."
            },
            {
                heading: "Installing and checking Node.js",
                body: "After installing Node.js, developers can verify the installation using the terminal. The node command executes JavaScript files, while npm is used to manage project packages.",
                code: `// Check installed versions

node -v
npm -v

// Execute a JavaScript file

node app.js`
            },
            {
                heading: "Built-in modules",
                body: "Node.js includes built-in modules that provide ready-made functionality. The fs module works with files, the path module handles file paths, and the http module helps create web servers.",
                code: `// Import the file system module

const fs = require("fs");

// Read a file

fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
        console.log("File reading failed");
        return;
    }

    console.log(data);
});`
            },
            {
                heading: "Modules in Node.js",
                body: "A module is a reusable piece of JavaScript code. Node.js supports CommonJS modules using require and module.exports. It also supports ES modules using import and export."
            },
            {
                heading: "Creating a simple project",
                body: "A Node.js project usually contains JavaScript files and a package.json file. The package.json file stores project information, dependencies and scripts.",
                code: `// Create a project folder first

mkdir my-backend
cd my-backend

// Initialize Node.js project

npm init -y`
            }
        ],

        questions: [
            {
                question: "Which command checks the Node.js version?",
                level: "Easy",
                options: ["node -v", "npm start", "node install", "version node"],
                correct: 0,
                explanation: "node -v displays the installed Node.js version."
            },
            {
                question: "Which module is used to work with files?",
                level: "Easy",
                options: ["http", "fs", "path", "url"],
                correct: 1,
                explanation: "The fs module provides file system operations."
            },
            {
                question: "What is a Node.js module?",
                level: "Easy",
                options: [
                    "A reusable piece of code",
                    "A database table",
                    "An HTML element",
                    "A browser"
                ],
                correct: 0,
                explanation: "Modules help organize and reuse code."
            },
            {
                question: "Which command initializes a Node.js project?",
                level: "Easy",
                options: ["npm init", "node create", "npm delete", "node start"],
                correct: 0,
                explanation: "npm init creates a package.json configuration file."
            },
            {
                question: "Which module helps create an HTTP server?",
                level: "Medium",
                options: ["fs", "path", "http", "os"],
                correct: 2,
                explanation: "The built-in http module provides HTTP server functionality."
            }
        ]
    },


    // ==========================================
    // TOPIC 3 - EXPRESS.JS
    // ==========================================

    {
        title: "Express.js",

        sections: [
            {
                heading: "What is Express.js?",
                body: "Express.js is a lightweight web application framework built on top of Node.js. It simplifies backend development by providing methods to create routes, handle HTTP requests, send responses and build APIs. Without Express, developers need to write more code using the built-in HTTP module."
            },
            {
                heading: "Why do we use Express.js?",
                body: "Express makes server development easier. It provides a clean routing system, middleware support and request-response handling. It is commonly used to develop REST APIs and web applications."
            },
            {
                heading: "Installing Express",
                body: "Express is installed using npm. After creating a Node.js project, install Express and import it into the application.",
                code: `// Install Express

npm install express

// Create app.js

const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});`
            },
            {
                heading: "Creating routes",
                body: "A route defines how the server responds to a particular URL and HTTP method. For example, a GET route can display information, while a POST route can receive information from a client.",
                code: `const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to DEVORAA");
});

app.get("/about", (req, res) => {
    res.send("About our platform");
});

app.listen(3000);`
            },
            {
                heading: "Request and response objects",
                body: "Express provides req and res objects. The req object contains information about the incoming request, such as parameters and query values. The res object is used to send a response back to the client.",
                code: `app.get("/student", (req, res) => {
    res.json({
        name: "Harsha",
        course: "Full Stack Development"
    });
});`
            },
            {
                heading: "Express applications",
                body: "Express is used for creating login systems, student portals, e-commerce backends, REST APIs and content management systems. It provides a simple foundation for building server-side applications."
            }
        ],

        questions: [
            {
                question: "What is Express.js?",
                level: "Easy",
                options: [
                    "A Node.js web framework",
                    "A programming language",
                    "A database",
                    "A browser"
                ],
                correct: 0,
                explanation: "Express.js is a web framework built on Node.js."
            },
            {
                question: "Which command installs Express?",
                level: "Easy",
                options: [
                    "npm install express",
                    "node express",
                    "npm create database",
                    "express start"
                ],
                correct: 0,
                explanation: "npm install express adds Express to the project."
            },
            {
                question: "Which method defines a GET route?",
                level: "Easy",
                options: ["app.post()", "app.get()", "app.delete()", "app.use()"],
                correct: 1,
                explanation: "app.get() handles GET requests."
            },
            {
                question: "What does res.send() do?",
                level: "Easy",
                options: [
                    "Sends a response",
                    "Creates a database",
                    "Installs a package",
                    "Deletes a route"
                ],
                correct: 0,
                explanation: "res.send() sends a response to the client."
            },
            {
                question: "Which object contains incoming request information?",
                level: "Medium",
                options: ["res", "req", "app", "npm"],
                correct: 1,
                explanation: "The req object represents the incoming request."
            }
        ]
    },


    // ==========================================
    // TOPIC 4 - MIDDLEWARE
    // ==========================================

    {
        title: "Middleware",

        sections: [
            {
                heading: "What is middleware?",
                body: "Middleware is a function that executes during the request-response cycle in an Express application. It can access the request object, response object and the next function. Middleware is used for logging, authentication, validation and processing request data."
            },
            {
                heading: "How middleware works",
                body: "When a client sends a request, Express passes it through registered middleware functions. Each middleware can perform an operation and either send a response or call next() to continue to the next middleware.",
                code: `const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("Request received");
    next();
});

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(3000);`
            },
            {
                heading: "Types of middleware",
                body: "Application-level middleware is attached to an Express application. Router-level middleware is attached to an Express router. Built-in middleware is provided by Express, such as express.json(). Third-party middleware is installed separately, such as logging and security packages."
            },
            {
                heading: "Built-in middleware",
                body: "Express provides built-in middleware for common tasks. express.json() parses incoming JSON request bodies. express.urlencoded() parses URL-encoded form data. These functions make request data easier to access.",
                code: `const express = require("express");

const app = express();

app.use(express.json());

app.post("/student", (req, res) => {
    console.log(req.body);
    res.json({ message: "Student data received" });
});

app.listen(3000);`
            },
            {
                heading: "Error-handling middleware",
                body: "Error-handling middleware is used to manage errors in Express applications. It has four parameters: err, req, res and next. It helps return consistent error responses instead of allowing unexpected errors to crash the application."
            },
            {
                heading: "Importance of middleware",
                body: "Middleware makes applications easier to maintain because common operations can be written once and reused across multiple routes. It improves code organization and supports security, validation and request monitoring."
            }
        ],

        questions: [
            {
                question: "What is middleware in Express?",
                level: "Easy",
                options: [
                    "A function in the request-response cycle",
                    "A database",
                    "A CSS property",
                    "A programming language"
                ],
                correct: 0,
                explanation: "Middleware processes requests before the final route response."
            },
            {
                question: "Which function moves execution to the next middleware?",
                level: "Easy",
                options: ["send()", "next()", "stop()", "finish()"],
                correct: 1,
                explanation: "next() passes control to the next middleware."
            },
            {
                question: "Which middleware parses JSON request bodies?",
                level: "Easy",
                options: ["express.json()", "express.html()", "express.css()", "express.file()"],
                correct: 0,
                explanation: "express.json() parses JSON request bodies."
            },
            {
                question: "How many parameters does Express error middleware use?",
                level: "Medium",
                options: ["Two", "Three", "Four", "Five"],
                correct: 2,
                explanation: "Error middleware uses err, req, res and next."
            },
            {
                question: "Which is a common middleware use?",
                level: "Easy",
                options: [
                    "Request logging",
                    "Changing monitor brightness",
                    "Creating CSS animations",
                    "Installing an operating system"
                ],
                correct: 0,
                explanation: "Middleware can log and monitor incoming requests."
            }
        ]
    },


    // ==========================================
    // TOPIC 5 - REST APIs
    // ==========================================

    {
        title: "REST APIs",

        sections: [
            {
                heading: "What is an API?",
                body: "API stands for Application Programming Interface. It allows two software applications to communicate with each other through defined rules. For example, a frontend application can request student information from a backend API."
            },
            {
                heading: "What is REST?",
                body: "REST stands for Representational State Transfer. It is an architectural style used to design network-based applications. REST APIs commonly use HTTP methods to perform operations on resources. Resources are identified using URLs."
            },
            {
                heading: "HTTP methods",
                body: "GET retrieves information, POST creates new information, PUT replaces an existing resource, PATCH updates part of a resource, and DELETE removes a resource. These methods describe the intended operation of an API.",
                code: `// GET - Read students
app.get("/students", getStudents);

// POST - Create student
app.post("/students", createStudent);

// PUT - Replace student
app.put("/students/:id", updateStudent);

// PATCH - Partially update student
app.patch("/students/:id", editStudent);

// DELETE - Remove student
app.delete("/students/:id", deleteStudent);`
            },
            {
                heading: "HTTP status codes",
                body: "Status codes tell the client whether a request was successful. 200 means OK, 201 means Created, 400 means Bad Request, 401 means Unauthorized, 403 means Forbidden, 404 means Not Found and 500 means Internal Server Error."
            },
            {
                heading: "JSON in REST APIs",
                body: "JSON stands for JavaScript Object Notation. It is a lightweight data format used to exchange information between applications. REST APIs commonly send and receive JSON data.",
                code: `{
    "id": 101,
    "name": "Harsha",
    "department": "ECE"
}`
            },
            {
                heading: "Designing REST API endpoints",
                body: "A good REST API uses meaningful resource names. For example, /students represents a collection of students and /students/101 represents one particular student. Consistent endpoint naming makes APIs easier to understand and maintain."
            }
        ],

        questions: [
            {
                question: "What does API stand for?",
                level: "Easy",
                options: [
                    "Application Programming Interface",
                    "Advanced Program Installation",
                    "Application Process Internet",
                    "Automatic Programming Input"
                ],
                correct: 0,
                explanation: "API stands for Application Programming Interface."
            },
            {
                question: "Which HTTP method retrieves data?",
                level: "Easy",
                options: ["POST", "GET", "DELETE", "PATCH"],
                correct: 1,
                explanation: "GET is used to retrieve information."
            },
            {
                question: "Which status code means Created?",
                level: "Easy",
                options: ["200", "201", "404", "500"],
                correct: 1,
                explanation: "HTTP 201 indicates that a resource was created."
            },
            {
                question: "What does REST stand for?",
                level: "Medium",
                options: [
                    "Representational State Transfer",
                    "Remote Server Technology",
                    "Resource System Transfer",
                    "Representational Software Tool"
                ],
                correct: 0,
                explanation: "REST stands for Representational State Transfer."
            },
            {
                question: "Which HTTP method is commonly used to delete a resource?",
                level: "Easy",
                options: ["GET", "POST", "DELETE", "PATCH"],
                correct: 2,
                explanation: "DELETE requests the removal of a resource."
            }
        ]
    },


    // ==========================================
    // TOPIC 6 - INPUT VALIDATION
    // ==========================================

    {
        title: "Input Validation",

        sections: [
            {
                heading: "What is input validation?",
                body: "Input validation is the process of checking data received from users before processing or storing it. Applications should verify that input follows the expected format and rules. Validation helps prevent incorrect data from entering the system."
            },
            {
                heading: "Why validation is important",
                body: "Users may submit missing, incorrect or unexpected values. For example, a student registration form should not accept an empty name or an invalid email address. Validation improves data quality and application reliability."
            },
            {
                heading: "Basic validation in Express",
                body: "A backend route can check required fields before processing a request. If required information is missing, the server should return a suitable client error.",
                code: `const express = require("express");

const app = express();

app.use(express.json());

app.post("/register", (req, res) => {

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: "Name and email are required"
        });
    }

    res.status(201).json({
        message: "Registration successful"
    });
});

app.listen(3000);`
            },
            {
                heading: "Types of validation",
                body: "Required-field validation checks whether important values are present. Type validation checks whether a value is a string, number or another expected type. Format validation checks patterns such as email addresses. Range validation checks whether numeric values fall within an allowed range."
            },
            {
                heading: "Client-side and server-side validation",
                body: "Client-side validation provides quick feedback in the browser. Server-side validation checks data again on the backend. Client-side validation alone is not sufficient because requests can be sent directly to the server without using the website form."
            },
            {
                heading: "Best practices",
                body: "Validate all untrusted input on the server, use clear error messages, restrict values to expected formats and avoid trusting data simply because it came from the frontend. Validation should happen before important application operations."
            }
        ],

        questions: [
            {
                question: "What is input validation?",
                level: "Easy",
                options: [
                    "Checking user data before processing",
                    "Designing a webpage",
                    "Creating a server",
                    "Installing Node.js"
                ],
                correct: 0,
                explanation: "Validation ensures input follows expected rules."
            },
            {
                question: "Which status code commonly indicates invalid request data?",
                level: "Easy",
                options: ["200", "201", "400", "500"],
                correct: 2,
                explanation: "400 Bad Request indicates that the request is invalid."
            },
            {
                question: "Why is server-side validation necessary?",
                level: "Medium",
                options: [
                    "Frontend checks can be bypassed",
                    "It improves screen brightness",
                    "It removes JavaScript",
                    "It replaces the database"
                ],
                correct: 0,
                explanation: "Requests can reach the server without using the frontend form."
            },
            {
                question: "Which validation checks whether an email follows an expected format?",
                level: "Easy",
                options: [
                    "Range validation",
                    "Format validation",
                    "Database validation",
                    "Color validation"
                ],
                correct: 1,
                explanation: "Format validation checks the structure of input values."
            },
            {
                question: "When should input validation happen?",
                level: "Medium",
                options: [
                    "Before processing user data",
                    "Only after deleting data",
                    "Only during deployment",
                    "After closing the server"
                ],
                correct: 0,
                explanation: "Validate input before using or storing it."
            }
        ]
    },


    // ==========================================
    // TOPIC 7 - ERROR HANDLING
    // ==========================================

    {
        title: "Error Handling",

        sections: [
            {
                heading: "What is error handling?",
                body: "Error handling is the process of detecting, managing and responding to unexpected situations in a program. Backend applications may encounter errors due to invalid input, unavailable databases, missing resources or network problems."
            },
            {
                heading: "Types of errors",
                body: "Syntax errors occur when code does not follow language rules. Runtime errors occur while a program is executing. Logical errors occur when a program runs but produces an incorrect result. Network and database errors can also affect backend applications."
            },
            {
                heading: "Using try and catch",
                body: "JavaScript provides try and catch statements to handle exceptions. Code that may produce an error is placed inside try. If an exception occurs, execution moves to the catch block.",
                code: `try {
    const result = JSON.parse("invalid json");
    console.log(result);

} catch (error) {
    console.log("Unable to process the data");
}`
            },
            {
                heading: "Handling errors in Express",
                body: "Express applications can use error-handling middleware to process errors centrally. This avoids repeating error-response logic in every route.",
                code: `app.use((err, req, res, next) => {

    console.error(err.message);

    res.status(500).json({
        error: "Internal Server Error"
    });

});`
            },
            {
                heading: "HTTP error responses",
                body: "A backend should return meaningful status codes. 400 indicates a bad request, 401 indicates missing or invalid authentication, 403 indicates forbidden access, 404 indicates that a resource was not found, and 500 indicates an internal server error."
            },
            {
                heading: "Error-handling best practices",
                body: "Do not expose passwords, database credentials or private system details in error responses. Log useful technical information on the server and return safe, understandable messages to clients. Handle expected errors separately from unexpected errors."
            }
        ],

        questions: [
            {
                question: "What is error handling?",
                level: "Easy",
                options: [
                    "Managing errors during program execution",
                    "Creating HTML pages",
                    "Designing databases",
                    "Installing packages"
                ],
                correct: 0,
                explanation: "Error handling helps applications respond safely to failures."
            },
            {
                question: "Which statements are used for exception handling in JavaScript?",
                level: "Easy",
                options: ["if and else", "try and catch", "for and while", "import and export"],
                correct: 1,
                explanation: "try and catch are used to handle exceptions."
            },
            {
                question: "Which status code indicates a missing resource?",
                level: "Easy",
                options: ["200", "201", "404", "500"],
                correct: 2,
                explanation: "404 means the requested resource was not found."
            },
            {
                question: "What is the purpose of error middleware?",
                level: "Medium",
                options: [
                    "Centralized error handling",
                    "Creating frontend styles",
                    "Installing Node.js",
                    "Deleting all routes"
                ],
                correct: 0,
                explanation: "Error middleware handles application errors in one place."
            },
            {
                question: "Should server error responses expose database passwords?",
                level: "Easy",
                options: ["Yes", "No", "Only in production", "Always"],
                correct: 1,
                explanation: "Sensitive system information must not be exposed to clients."
            }
        ]
    },


    // ==========================================
    // TOPIC 8 - ENVIRONMENT VARIABLES
    // ==========================================

    {
        title: "Environment Variables",

        sections: [
            {
                heading: "What are environment variables?",
                body: "Environment variables are configuration values stored outside application source code. They allow an application to access settings such as the server port, database connection configuration and API credentials without hardcoding them directly into JavaScript files."
            },
            {
                heading: "Why are they important?",
                body: "Applications often run in different environments such as development, testing and production. Each environment may need different configuration values. Environment variables make it easier to change settings without modifying application logic."
            },
            {
                heading: "Using a .env file",
                body: "The dotenv package loads values from a .env file into process.env. Developers commonly use it to manage local configuration during development.",
                code: `// Install dotenv

npm install dotenv

// Create a .env file

PORT=3000
APP_NAME=DEVORAA

// In app.js

require("dotenv").config();

console.log(process.env.PORT);
console.log(process.env.APP_NAME);`
            },
            {
                heading: "Using variables in Express",
                body: "The process.env object provides access to environment variables. A server can use a configured port value and fall back to a default value when the variable is not available.",
                code: `require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started on port", PORT);
});`
            },
            {
                heading: "Protecting sensitive information",
                body: "Database passwords, private API keys and secret tokens should not be committed to public repositories. The .env file should normally be added to .gitignore. A safe example file such as .env.example can document required variable names without containing real secrets."
            },
            {
                heading: "Development and production configuration",
                body: "During local development, variables may be loaded from a .env file. In production, hosting platforms commonly provide configuration settings through their environment-variable dashboards. This allows the same application code to run in different environments."
            }
        ],

        questions: [
            {
                question: "What are environment variables?",
                level: "Easy",
                options: [
                    "External application configuration values",
                    "HTML tags",
                    "Database tables",
                    "CSS selectors"
                ],
                correct: 0,
                explanation: "Environment variables store configuration outside source code."
            },
            {
                question: "Which object accesses environment variables in Node.js?",
                level: "Easy",
                options: ["process.env", "window.env", "document.env", "app.env"],
                correct: 0,
                explanation: "process.env contains environment variables."
            },
            {
                question: "Which package is commonly used to load a .env file?",
                level: "Easy",
                options: ["Express", "dotenv", "Mongoose", "React"],
                correct: 1,
                explanation: "dotenv loads variables from a .env file."
            },
            {
                question: "Where should a .env file normally be listed?",
                level: "Medium",
                options: [".gitignore", "index.html", "style.css", "README image folder"],
                correct: 0,
                explanation: "Ignoring .env helps prevent accidental commits of secrets."
            },
            {
                question: "Which of these should be kept private?",
                level: "Easy",
                options: [
                    "A public application title",
                    "A database password",
                    "A public webpage heading",
                    "A CSS class name"
                ],
                correct: 1,
                explanation: "Database passwords are sensitive configuration values."
            }
        ]
    },


    // ==========================================
    // TOPIC 9 - INTRODUCTION TO TRPC
    // ==========================================

    {
        title: "Introduction to tRPC",

        sections: [
            {
                heading: "What is tRPC?",
                body: "tRPC is a framework that allows TypeScript applications to communicate with backend procedures while sharing type information between the client and server. It helps developers build end-to-end type-safe APIs without manually defining separate API schemas for every operation."
            },
            {
                heading: "Why use tRPC?",
                body: "In traditional API development, frontend and backend developers may need to maintain separate definitions for request and response data. tRPC allows TypeScript types from the backend to be used by the frontend. This can reduce duplicated definitions and help detect mistakes during development."
            },
            {
                heading: "Procedures in tRPC",
                body: "A procedure is a backend function exposed through a tRPC router. Procedures can be queries or mutations. Queries are generally used to retrieve data, while mutations are used to create or modify data."
            },
            {
                heading: "Queries and mutations",
                body: "A query represents a read operation. A mutation represents an operation that changes data. This distinction helps organize application operations according to their purpose."
            },
            {
                heading: "Type safety",
                body: "Type safety means that values are checked against expected types. For example, if a procedure expects a numeric student ID, TypeScript can identify an incorrect string value during development. This reduces certain classes of programming errors."
            },
            {
                heading: "Where tRPC is useful",
                body: "tRPC is useful for TypeScript-based full-stack applications where frontend and backend code can share types. It is often used in applications built with React and Node.js. It is not a replacement for every REST API; the right choice depends on the application requirements."
            }
        ],

        questions: [
            {
                question: "What is tRPC mainly used for?",
                level: "Easy",
                options: [
                    "Building type-safe APIs",
                    "Editing images",
                    "Styling HTML",
                    "Creating database servers"
                ],
                correct: 0,
                explanation: "tRPC helps build type-safe communication between TypeScript clients and servers."
            },
            {
                question: "Which language is central to tRPC's type safety?",
                level: "Easy",
                options: ["CSS", "TypeScript", "SQL", "HTML"],
                correct: 1,
                explanation: "tRPC is designed around TypeScript type information."
            },
            {
                question: "What is a query generally used for?",
                level: "Easy",
                options: [
                    "Reading data",
                    "Deleting the server",
                    "Changing CSS",
                    "Installing packages"
                ],
                correct: 0,
                explanation: "Queries are generally used to retrieve data."
            },
            {
                question: "What is a mutation generally used for?",
                level: "Medium",
                options: [
                    "Changing or creating data",
                    "Displaying CSS",
                    "Opening a browser",
                    "Reading an image file"
                ],
                correct: 0,
                explanation: "Mutations represent operations that modify data."
            },
            {
                question: "What is a major benefit of tRPC?",
                level: "Medium",
                options: [
                    "Shared types between client and server",
                    "Automatic hardware upgrades",
                    "Replacing every database",
                    "Removing JavaScript"
                ],
                correct: 0,
                explanation: "Shared types help maintain consistency between frontend and backend."
            }
        ]
    },


    // ==========================================
    // TOPIC 10 - BUILDING A NOTES API
    // ==========================================

    {
        title: "Building a Notes API",

        sections: [
            {
                heading: "Introduction to the project",
                body: "A Notes API is a small backend project that allows users to create, read, update and delete notes. It combines the main concepts learned in this course, including Node.js, Express, routes, HTTP methods, validation and error handling."
            },
            {
                heading: "Project setup",
                body: "First, create a project folder, initialize Node.js and install Express. The application will use an array temporarily to store notes. This is suitable for understanding API operations, but real applications should use a database for persistent storage.",
                code: `mkdir notes-api
cd notes-api

npm init -y
npm install express`
            },
            {
                heading: "Creating the server",
                body: "The server receives HTTP requests and provides API endpoints. express.json() allows the application to read JSON request bodies.",
                code: `const express = require("express");

const app = express();

app.use(express.json());

let notes = [];
let nextId = 1;

app.listen(3000, () => {
    console.log("Notes API running on port 3000");
});`
            },
            {
                heading: "Creating and reading notes",
                body: "The POST endpoint creates a new note. The GET endpoint returns all stored notes. Each note receives a unique ID so that it can be accessed individually.",
                code: `app.post("/notes", (req, res) => {

    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            error: "Title and content are required"
        });
    }

    const note = {
        id: nextId++,
        title,
        content
    };

    notes.push(note);

    res.status(201).json(note);
});

app.get("/notes", (req, res) => {
    res.json(notes);
});`
            },
            {
                heading: "Updating and deleting notes",
                body: "The PUT endpoint updates an existing note. The DELETE endpoint removes a note using its ID. If the requested note does not exist, the server returns a 404 response.",
                code: `app.put("/notes/:id", (req, res) => {

    const id = Number(req.params.id);

    const note = notes.find(n => n.id === id);

    if (!note) {
        return res.status(404).json({
            error: "Note not found"
        });
    }

    note.title = req.body.title ?? note.title;
    note.content = req.body.content ?? note.content;

    res.json(note);
});

app.delete("/notes/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = notes.findIndex(n => n.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Note not found"
        });
    }

    notes.splice(index, 1);

    res.json({
        message: "Note deleted successfully"
    });
});`
            },
            {
                heading: "Testing the Notes API",
                body: "The API can be tested using tools such as Postman or an HTTP client. Send a POST request to /notes with a JSON body containing title and content. Use GET to view notes, PUT to update a note and DELETE to remove a note. Because this example uses an in-memory array, all notes are lost when the server restarts."
            },
            {
                heading: "What we learned",
                body: "This project demonstrates how a backend receives requests, validates input, performs operations and sends responses. In a real application, the array can be replaced with MongoDB or PostgreSQL so that notes remain stored after the server restarts."
            }
        ],

        questions: [
            {
                question: "What is the purpose of a Notes API?",
                level: "Easy",
                options: [
                    "Managing notes through HTTP requests",
                    "Designing animations",
                    "Editing videos",
                    "Installing an operating system"
                ],
                correct: 0,
                explanation: "A Notes API supports creating, reading, updating and deleting notes."
            },
            {
                question: "Which method creates a new note?",
                level: "Easy",
                options: ["GET", "POST", "DELETE", "OPTIONS"],
                correct: 1,
                explanation: "POST is commonly used to create a new resource."
            },
            {
                question: "What does req.params.id represent?",
                level: "Medium",
                options: [
                    "A route parameter containing the note ID",
                    "The server port",
                    "A database password",
                    "A CSS selector"
                ],
                correct: 0,
                explanation: "req.params contains values captured from route parameters."
            },
            {
                question: "Why does the example use an array?",
                level: "Medium",
                options: [
                    "To demonstrate basic storage operations",
                    "To provide permanent database storage",
                    "To replace Express",
                    "To install Node.js"
                ],
                correct: 0,
                explanation: "An array makes the basic API operations easier to understand."
            },
            {
                question: "What happens to array-stored notes when the server restarts?",
                level: "Medium",
                options: [
                    "They remain permanently",
                    "They are lost",
                    "They move to HTML",
                    "They become environment variables"
                ],
                correct: 1,
                explanation: "In-memory data is not persistent and is lost when the process restarts."
            }
        ]
    }

];
