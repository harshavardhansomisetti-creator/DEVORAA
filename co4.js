
export const co4Topics = [

    // TOPIC 1
    {
        title: "Introduction to Backend Development",
        sections: [
            {
                heading: "What is Backend Development?",
                body: `Backend development focuses on the server-side operations of a web application.

It manages application logic, processes user requests, communicates with databases and sends responses to the frontend.

Users normally interact with the frontend, while backend operations work behind the scenes.

For example, when a student logs into an online learning platform, the backend checks the login information and determines whether access should be allowed.`
            },
            {
                heading: "Frontend vs Backend",
                body: `Frontend is the part of an application that users see and interact with.

Backend handles the operations that support the frontend.

Frontend responsibilities:
• Displaying web pages
• Handling user interactions
• Showing forms and buttons
• Presenting application data

Backend responsibilities:
• Processing requests
• Applying business logic
• Managing authentication
• Communicating with databases
• Sending responses to clients`
            },
            {
                heading: "Understanding Client and Server",
                body: `A client is an application or device that requests a service. A web browser is a common example.

A server receives requests, processes them and sends responses.

The communication generally follows this sequence:

1. A user performs an action in the browser.
2. The frontend sends a request.
3. The backend receives the request.
4. The backend processes the information.
5. The server sends a response.
6. The frontend displays the result.`
            },
            {
                heading: "Backend Technologies",
                body: `Several technologies are used for backend development.

• Node.js – JavaScript runtime for server-side applications.
• Express.js – Framework for building web servers and APIs.
• Python – Programming language used in backend applications.
• Django – Python web framework.
• PHP – Server-side scripting language.
• Java – Commonly used for enterprise backend systems.

In this course, we focus mainly on Node.js and Express.js.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is backend development?",
                options: [
                    "Server-side development",
                    "Only webpage designing",
                    "Image editing",
                    "Computer hardware assembly"
                ],
                correct: 0,
                explanation: "Backend development handles server-side operations and application logic."
            },
            {
                level: "Easy",
                question: "Which part of a web application is visible to users?",
                options: ["Frontend", "Backend", "Database", "Server storage"],
                correct: 0,
                explanation: "Frontend contains the visible user interface."
            },
            {
                level: "Medium",
                question: "What is the main responsibility of a server?",
                options: [
                    "Receive and process requests",
                    "Design computer screens",
                    "Create keyboard layouts",
                    "Edit images"
                ],
                correct: 0,
                explanation: "A server receives requests, processes them and returns responses."
            },
            {
                level: "Medium",
                question: "Which technology is commonly used for JavaScript backend development?",
                options: ["Node.js", "Photoshop", "HTML", "Figma"],
                correct: 0,
                explanation: "Node.js allows JavaScript to run outside the browser."
            },
            {
                level: "Hard",
                question: "What happens after the backend processes a client request?",
                options: [
                    "It sends a response to the client",
                    "It automatically closes the browser",
                    "It deletes the frontend",
                    "It formats the computer"
                ],
                correct: 0,
                explanation: "The server sends a response containing the result of request processing."
            }
        ]
    },

    // TOPIC 2
    {
        title: "Introduction to Node.js",
        sections: [
            {
                heading: "What is Node.js?",
                body: `Node.js is an open-source JavaScript runtime environment.

It allows developers to execute JavaScript outside a web browser.

Traditionally, JavaScript was mainly used in browsers. Node.js made it possible to use JavaScript for server-side development.

It is built on the V8 JavaScript engine.`
            },
            {
                heading: "Features of Node.js",
                body: `Important features include:

• Asynchronous operations
• Event-driven architecture
• Non-blocking input and output
• Large package ecosystem through npm
• Cross-platform support

These features make Node.js useful for applications that handle many concurrent connections and input/output operations.`
            },
            {
                heading: "Creating a Node.js File",
                code: `console.log("Welcome to Node.js!");

const name = "DEVORAA";

console.log("Learning Backend Development");
console.log(name);`,
                body: `Save the code in a file named app.js.

Open the terminal in the same folder and execute:

node app.js

Node.js executes the JavaScript file and displays the output in the terminal.`
            },
            {
                heading: "Understanding npm",
                body: `npm stands for Node Package Manager.

It is commonly used to install, update and manage JavaScript packages.

Important commands:

npm init -y
Creates a package.json file with default values.

npm install express
Installs the Express package.

npm install
Installs dependencies listed in package.json.

npm uninstall express
Removes the Express package.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is Node.js?",
                options: [
                    "A JavaScript runtime environment",
                    "A database",
                    "A CSS framework",
                    "An HTML editor"
                ],
                correct: 0,
                explanation: "Node.js executes JavaScript outside the browser."
            },
            {
                level: "Easy",
                question: "Which JavaScript engine is used by Node.js?",
                options: ["V8", "SpiderMonkey", "Java VM", "WebKit CSS"],
                correct: 0,
                explanation: "Node.js is built on Google's V8 JavaScript engine."
            },
            {
                level: "Medium",
                question: "Which command executes app.js using Node.js?",
                options: [
                    "node app.js",
                    "npm app.js",
                    "run app.js",
                    "html app.js"
                ],
                correct: 0,
                explanation: "The node command executes a JavaScript file."
            },
            {
                level: "Medium",
                question: "What is npm used for?",
                options: [
                    "Managing JavaScript packages",
                    "Designing images",
                    "Creating HTML headings",
                    "Managing computer hardware"
                ],
                correct: 0,
                explanation: "npm installs and manages packages used in JavaScript projects."
            },
            {
                level: "Hard",
                question: "Which file commonly stores project dependencies and scripts?",
                options: [
                    "package.json",
                    "index.html",
                    "style.css",
                    "photo.png"
                ],
                correct: 0,
                explanation: "package.json stores project metadata, scripts and dependency information."
            }
        ]
    },

    // TOPIC 3
    {
        title: "Introduction to Express.js",
        sections: [
            {
                heading: "What is Express.js?",
                body: `Express.js is a lightweight web framework built for Node.js.

It provides features that simplify the creation of web servers, APIs and request-handling logic.

Instead of manually handling every HTTP request, developers can use Express methods to define routes and middleware.`
            },
            {
                heading: "Installing Express",
                code: `npm init -y
npm install express`,
                body: `First, initialize a Node.js project.

Next, install Express using npm.

The installed package becomes available for use in the application.`
            },
            {
                heading: "Creating an Express Server",
                code: `const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to DEVORAA Backend!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});`,
                body: `express() creates an Express application.

app.get() defines a route that handles HTTP GET requests.

The callback receives req and res objects.

res.send() sends a response to the client.

app.listen() starts the server on port 3000.

After starting the server, open http://localhost:3000 in a browser.`
            },
            {
                heading: "Benefits of Express.js",
                body: `Express provides:

• Simple route definitions
• Middleware support
• HTTP request and response handling
• Integration with databases
• Support for REST API development

It reduces the amount of code required to build a Node.js web server.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is Express.js?",
                options: [
                    "A Node.js web framework",
                    "A database",
                    "An operating system",
                    "A programming language"
                ],
                correct: 0,
                explanation: "Express.js is a web framework used with Node.js."
            },
            {
                level: "Easy",
                question: "Which command installs Express?",
                options: [
                    "npm install express",
                    "node install express",
                    "html express",
                    "css install express"
                ],
                correct: 0,
                explanation: "npm install express installs Express into the project."
            },
            {
                level: "Medium",
                question: "What does express() create?",
                options: [
                    "An Express application",
                    "A database table",
                    "A CSS stylesheet",
                    "An HTML image"
                ],
                correct: 0,
                explanation: "express() creates an Express application instance."
            },
            {
                level: "Medium",
                question: "Which method defines a GET route?",
                options: ["app.get()", "app.css()", "app.html()", "app.database()"],
                correct: 0,
                explanation: "app.get() registers a handler for HTTP GET requests."
            },
            {
                level: "Hard",
                question: "What does app.listen() do?",
                options: [
                    "Starts the server",
                    "Deletes a route",
                    "Creates an HTML file",
                    "Installs npm"
                ],
                correct: 0,
                explanation: "app.listen() starts the Express server on a specified port."
            }
        ]
    },

    // TOPIC 4
    {
        title: "HTTP Methods and Status Codes",
        sections: [
            {
                heading: "Understanding HTTP",
                body: `HTTP stands for Hypertext Transfer Protocol.

It is an application-layer protocol used for communication between clients and servers.

A client sends an HTTP request, and the server returns an HTTP response.

An HTTP request contains information such as a method, URL, headers and sometimes a request body.`
            },
            {
                heading: "Common HTTP Methods",
                body: `GET – Retrieves information from a server.

POST – Submits data to create a resource or perform an operation.

PUT – Replaces an existing resource.

PATCH – Partially updates an existing resource.

DELETE – Requests removal of a resource.

These methods describe the intended operation of an HTTP request.`
            },
            {
                heading: "HTTP Status Codes",
                body: `Status codes indicate the result of an HTTP request.

Common status codes:

200 OK – Request completed successfully.

201 Created – A resource was successfully created.

400 Bad Request – The request contains invalid information.

401 Unauthorized – Authentication is required or has failed.

403 Forbidden – The server refuses the requested operation.

404 Not Found – The requested resource was not found.

500 Internal Server Error – An unexpected server-side error occurred.`
            },
            {
                heading: "Using Status Codes in Express",
                code: `const express = require("express");
const app = express();

app.get("/student", (req, res) => {
    res.status(200).json({
        name: "Harsha",
        course: "ECE"
    });
});

app.post("/student", (req, res) => {
    res.status(201).json({
        message: "Student created"
    });
});

app.listen(3000);`,
                body: `res.status() sets the HTTP response status code.

res.json() sends a JSON response to the client.

Using appropriate status codes makes APIs easier to understand and integrate.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What does HTTP stand for?",
                options: [
                    "Hypertext Transfer Protocol",
                    "High Transfer Text Program",
                    "Hyper Tool Transfer Process",
                    "Host Text Transmission Protocol"
                ],
                correct: 0,
                explanation: "HTTP stands for Hypertext Transfer Protocol."
            },
            {
                level: "Easy",
                question: "Which HTTP method is commonly used to retrieve data?",
                options: ["GET", "POST", "DELETE", "PATCH"],
                correct: 0,
                explanation: "GET is used to retrieve a resource."
            },
            {
                level: "Medium",
                question: "Which status code indicates successful resource creation?",
                options: ["201", "404", "500", "403"],
                correct: 0,
                explanation: "201 Created indicates that a resource was successfully created."
            },
            {
                level: "Medium",
                question: "What does status code 404 mean?",
                options: [
                    "Resource not found",
                    "Request successful",
                    "Server created",
                    "Authentication successful"
                ],
                correct: 0,
                explanation: "404 indicates that the requested resource could not be found."
            },
            {
                level: "Hard",
                question: "Which HTTP method is commonly used for partial resource updates?",
                options: ["PATCH", "GET", "DELETE", "OPTIONS"],
                correct: 0,
                explanation: "PATCH is commonly used to partially update an existing resource."
            }
        ]
    },

    // TOPIC 5
    {
        title: "Routing in Express.js",
        sections: [
            {
                heading: "What is Routing?",
                body: `Routing determines how a server responds to a request sent to a particular URL and HTTP method.

For example, a learning platform may use:

/ – Home page.

/courses – Course information.

/students – Student information.

/contact – Contact information.

Each route can perform a different operation.`
            },
            {
                heading: "Creating Routes",
                code: `const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/courses", (req, res) => {
    res.send("Available Courses");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.listen(3000);`,
                body: `Each app.get() statement defines a separate GET route.

When a client requests a matching URL, Express executes the corresponding callback.`
            },
            {
                heading: "Route Parameters",
                code: `app.get("/students/:id", (req, res) => {
    const studentId = req.params.id;

    res.send("Student ID: " + studentId);
});`,
                body: `Route parameters allow a route to accept dynamic values.

In this example, :id is a route parameter.

If the client requests /students/25, the value 25 is available through req.params.id.`
            },
            {
                heading: "Query Parameters",
                code: `app.get("/search", (req, res) => {
    const keyword = req.query.keyword;

    res.send("Searching for: " + keyword);
});`,
                body: `Query parameters provide additional information in a URL.

For example:

/search?keyword=React

The keyword value can be accessed using req.query.keyword.

Route parameters identify a part of the URL path, while query parameters provide optional filtering or search information.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is routing in Express?",
                options: [
                    "Handling requests for specific URLs and methods",
                    "Designing web images",
                    "Creating CSS variables",
                    "Installing a database"
                ],
                correct: 0,
                explanation: "Routing defines how an application responds to different requests."
            },
            {
                level: "Easy",
                question: "Which Express method defines a GET route?",
                options: ["app.get()", "app.style()", "app.page()", "app.file()"],
                correct: 0,
                explanation: "app.get() registers a GET route."
            },
            {
                level: "Medium",
                question: "How can a route parameter be accessed?",
                options: ["req.params", "req.css", "res.html", "app.body"],
                correct: 0,
                explanation: "Route parameters are available through req.params."
            },
            {
                level: "Medium",
                question: "Which object provides access to query parameters?",
                options: ["req.query", "req.params.css", "res.query", "app.query"],
                correct: 0,
                explanation: "req.query contains parsed query-string parameters."
            },
            {
                level: "Hard",
                question: "What is the difference between route and query parameters?",
                options: [
                    "Route parameters are part of the path; query parameters follow the question mark",
                    "Both are CSS properties",
                    "Query parameters are only used in databases",
                    "There is no difference"
                ],
                correct: 0,
                explanation: "Route parameters belong to the URL path, while query parameters are provided in its query string."
            }
        ]
    },

    // TOPIC 6
    {
        title: "Middleware in Express.js",
        sections: [
            {
                heading: "What is Middleware?",
                body: `Middleware is a function that runs during the request-response cycle of an Express application.

It can access the request and response objects and can perform operations before the request reaches the final route handler.

Middleware is commonly used for:

• Logging requests
• Parsing request bodies
• Authentication checks
• Error handling
• Processing request information`
            },
            {
                heading: "Middleware Function",
                code: `const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("Request received");
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to DEVORAA");
});

app.listen(3000);`,
                body: `app.use() registers middleware.

The middleware function receives req, res and next.

next() passes control to the next middleware function or route handler.

Without calling next() or sending a response, a request may remain unfinished.`
            },
            {
                heading: "Built-in Middleware",
                code: `const express = require("express");
const app = express();

app.use(express.json());

app.post("/student", (req, res) => {
    const student = req.body;

    res.json({
        received: student
    });
});

app.listen(3000);`,
                body: `express.json() is built-in middleware that parses incoming JSON request bodies.

After it runs, parsed data is available through req.body.

This is useful when a frontend sends JSON data to a backend API.`
            },
            {
                heading: "Types of Middleware",
                body: `Application-level middleware – Registered on the Express application.

Router-level middleware – Applied to an Express router.

Built-in middleware – Provided by Express, such as express.json().

Third-party middleware – Installed separately, such as logging or security-related packages.

Error-handling middleware – Handles errors and uses four parameters: err, req, res and next.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is middleware?",
                options: [
                    "A function used in the request-response cycle",
                    "A database",
                    "A CSS framework",
                    "An HTML element"
                ],
                correct: 0,
                explanation: "Middleware processes requests during the Express request-response cycle."
            },
            {
                level: "Easy",
                question: "Which function passes control to the next middleware?",
                options: ["next()", "stop()", "exit()", "close()"],
                correct: 0,
                explanation: "next() passes control to the next middleware or route handler."
            },
            {
                level: "Medium",
                question: "Which middleware parses incoming JSON request bodies?",
                options: ["express.json()", "express.css()", "express.html()", "express.image()"],
                correct: 0,
                explanation: "express.json() parses incoming JSON request bodies."
            },
            {
                level: "Medium",
                question: "Where is parsed request body data available?",
                options: ["req.body", "res.body", "app.css", "req.style"],
                correct: 0,
                explanation: "Parsed request data is available through req.body."
            },
            {
                level: "Hard",
                question: "How many parameters does Express error-handling middleware use?",
                options: ["Four", "One", "Two", "Six"],
                correct: 0,
                explanation: "Error-handling middleware uses err, req, res and next."
            }
        ]
    },

    // TOPIC 7
    {
        title: "Building REST APIs",
        sections: [
            {
                heading: "What is an API?",
                body: `API stands for Application Programming Interface.

An API allows different software applications to communicate through defined rules and interfaces.

A frontend application can use a backend API to request information or submit data.

For example, a student dashboard can request course information from a server through an API.`
            },
            {
                heading: "What is REST?",
                body: `REST stands for Representational State Transfer.

It is an architectural style for designing network-based APIs.

REST APIs commonly use HTTP methods and resource-based URLs.

For example:

GET /students – Retrieve students.

GET /students/10 – Retrieve a specific student.

POST /students – Create a student.

PUT /students/10 – Replace student information.

DELETE /students/10 – Delete a student resource.`
            },
            {
                heading: "Creating a Simple REST API",
                code: `const express = require("express");
const app = express();

app.use(express.json());

let courses = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" }
];

app.get("/courses", (req, res) => {
    res.json(courses);
});

app.get("/courses/:id", (req, res) => {
    const course = courses.find(
        item => item.id === Number(req.params.id)
    );

    if (!course) {
        return res.status(404).json({
            message: "Course not found"
        });
    }

    res.json(course);
});

app.listen(3000);`,
                body: `This example creates two API endpoints.

GET /courses returns all courses.

GET /courses/:id searches for a course using its ID.

The find() method searches the array for a matching course.

If no course exists, the server returns a 404 response.`
            },
            {
                heading: "JSON in APIs",
                body: `JSON stands for JavaScript Object Notation.

It is a lightweight data format commonly used for communication between frontend and backend applications.

Example JSON:

{
    "id": 1,
    "name": "React",
    "duration": "6 Weeks"
}

JSON stores data using key-value pairs and supports objects, arrays, strings, numbers, booleans and null values.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What does API stand for?",
                options: [
                    "Application Programming Interface",
                    "Advanced Program Installation",
                    "Application Process Internet",
                    "Automatic Programming Integration"
                ],
                correct: 0,
                explanation: "API stands for Application Programming Interface."
            },
            {
                level: "Easy",
                question: "What does REST stand for?",
                options: [
                    "Representational State Transfer",
                    "Remote Server Technology",
                    "Response System Transfer",
                    "Request State Tool"
                ],
                correct: 0,
                explanation: "REST stands for Representational State Transfer."
            },
            {
                level: "Medium",
                question: "Which format is commonly used for API data exchange?",
                options: ["JSON", "MP3", "JPEG", "EXE"],
                correct: 0,
                explanation: "JSON is a common lightweight format for API communication."
            },
            {
                level: "Medium",
                question: "Which HTTP method is commonly used to create a resource?",
                options: ["POST", "GET", "DELETE", "HEAD"],
                correct: 0,
                explanation: "POST is commonly used to submit data to create a resource."
            },
            {
                level: "Hard",
                question: "What is the purpose of a REST API endpoint?",
                options: [
                    "To provide access to a resource or operation",
                    "To style an HTML page",
                    "To install JavaScript",
                    "To create a computer account"
                ],
                correct: 0,
                explanation: "An endpoint provides a URL through which a client accesses a resource or operation."
            }
        ]
    },

    // TOPIC 8
    {
        title: "Asynchronous Programming",
        sections: [
            {
                heading: "What is Asynchronous Programming?",
                body: `Asynchronous programming allows certain operations to complete without blocking the entire JavaScript execution flow while waiting.

It is useful for tasks such as:

• Reading files
• Database operations
• API requests
• Network communication
• Timers

For example, a backend can start an API request and continue handling other work while waiting for the response.`
            },
            {
                heading: "Callbacks",
                code: `function getData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

getData((message) => {
    console.log(message);
});`,
                body: `A callback is a function passed to another function as an argument.

In this example, the callback executes after the timer finishes.

Callbacks are one way to handle asynchronous operations.`
            },
            {
                heading: "Promises",
                code: `const result = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

result
    .then(message => console.log(message))
    .catch(error => console.log(error));`,
                body: `A Promise represents the eventual completion or failure of an asynchronous operation.

A Promise can be in one of three states:

• Pending – Operation is still running.
• Fulfilled – Operation completed successfully.
• Rejected – Operation failed.

then() handles successful results, while catch() handles errors.`
            },
            {
                heading: "Async and Await",
                code: `function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Welcome to DEVORAA");
        }, 1000);
    });
}

async function displayMessage() {
    try {
        const message = await getMessage();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

displayMessage();`,
                body: `The async keyword defines an asynchronous function.

The await keyword pauses execution within that async function until the Promise settles.

try and catch can be used to handle errors.

Async and await provide a readable way to work with Promises.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is asynchronous programming?",
                options: [
                    "Handling operations without blocking the entire execution flow",
                    "Only writing HTML",
                    "Creating CSS animations",
                    "Deleting JavaScript"
                ],
                correct: 0,
                explanation: "Asynchronous programming allows operations to progress without blocking the entire JavaScript flow."
            },
            {
                level: "Easy",
                question: "What is a callback?",
                options: [
                    "A function passed to another function",
                    "A database",
                    "A CSS property",
                    "An HTML tag"
                ],
                correct: 0,
                explanation: "A callback is a function supplied as an argument to another function."
            },
            {
                level: "Medium",
                question: "Which method handles a fulfilled Promise?",
                options: ["then()", "catch()", "delete()", "remove()"],
                correct: 0,
                explanation: "then() handles the successful result of a Promise."
            },
            {
                level: "Medium",
                question: "Which keyword is used to define an asynchronous function?",
                options: ["async", "await", "return", "static"],
                correct: 0,
                explanation: "The async keyword declares an asynchronous function."
            },
            {
                level: "Hard",
                question: "What is the purpose of await?",
                options: [
                    "Wait for a Promise to settle inside an async function",
                    "Delete a Promise",
                    "Create a CSS file",
                    "Stop the entire server permanently"
                ],
                correct: 0,
                explanation: "await pauses the async function until the awaited Promise settles."
            }
        ]
    },

    // TOPIC 9
    {
        title: "Error Handling in Backend",
        sections: [
            {
                heading: "What is Error Handling?",
                body: `Error handling is the process of identifying, managing and responding to problems that occur during application execution.

Errors can happen because of:

• Invalid user input
• Missing resources
• Database failures
• Network problems
• Unexpected server conditions

Proper error handling helps applications respond clearly instead of failing unexpectedly.`
            },
            {
                heading: "Using try and catch",
                code: `try {
    const result = JSON.parse('{"name":"Harsha"}');

    console.log(result.name);
} catch (error) {
    console.log("An error occurred:", error.message);
}`,
                body: `The try block contains code that may throw an error.

If an error occurs, execution moves to the catch block.

The catch block receives the error object, which can provide useful information about the problem.`
            },
            {
                heading: "Handling Errors in Express",
                code: `const express = require("express");
const app = express();

app.get("/data", (req, res, next) => {
    try {
        throw new Error("Something went wrong");
    } catch (error) {
        next(error);
    }
});

app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(500).json({
        message: "Internal Server Error"
    });
});

app.listen(3000);`,
                body: `Express error-handling middleware receives errors passed to next(error).

It logs the error and sends a suitable response.

In production applications, avoid exposing confidential information, stack traces or internal implementation details to users.`
            },
            {
                heading: "Importance of Error Handling",
                body: `Good error handling provides:

• Better application reliability
• Clear error responses
• Easier debugging
• Improved user experience
• Protection against accidental information exposure

Errors should be logged appropriately, while clients should receive safe and meaningful messages.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is the main purpose of error handling?",
                options: [
                    "Managing application errors",
                    "Designing images",
                    "Creating HTML tables",
                    "Installing an operating system"
                ],
                correct: 0,
                explanation: "Error handling manages problems that occur during application execution."
            },
            {
                level: "Easy",
                question: "Which JavaScript structure handles exceptions?",
                options: ["try and catch", "if and CSS", "HTML and body", "for and style"],
                correct: 0,
                explanation: "try and catch are used to handle exceptions in JavaScript."
            },
            {
                level: "Medium",
                question: "Which function passes an error to Express error middleware?",
                options: ["next(error)", "send(error)", "close(error)", "style(error)"],
                correct: 0,
                explanation: "Calling next(error) passes the error to Express error-handling middleware."
            },
            {
                level: "Medium",
                question: "Which status code represents an internal server error?",
                options: ["500", "200", "201", "301"],
                correct: 0,
                explanation: "500 represents an Internal Server Error."
            },
            {
                level: "Hard",
                question: "Why should sensitive server details not be exposed to clients?",
                options: [
                    "To avoid revealing internal information",
                    "To improve image quality",
                    "To change CSS",
                    "To reduce HTML tags"
                ],
                correct: 0,
                explanation: "Exposing internal details can create security and privacy risks."
            }
        ]
    },

    // TOPIC 10
    {
        title: "Building a Backend Application",
        sections: [
            {
                heading: "Application Overview",
                body: `In this topic, we combine backend concepts to build a simple Course Management API using Node.js and Express.

The API will provide endpoints to:

• View all courses
• View a specific course
• Add a new course
• Update course information
• Delete a course

For this introductory example, data is stored in an in-memory array. It will reset whenever the server restarts.`
            },
            {
                heading: "Creating the Project",
                code: `mkdir course-api
cd course-api
npm init -y
npm install express`,
                body: `Create a project folder and initialize a Node.js application.

Install Express to build the backend server.

Create a file named server.js inside the project folder.`
            },
            {
                heading: "Complete Backend API",
                code: `const express = require("express");

const app = express();

app.use(express.json());

let courses = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" }
];

// Get all courses
app.get("/courses", (req, res) => {
    res.json(courses);
});

// Get a single course
app.get("/courses/:id", (req, res) => {
    const id = Number(req.params.id);

    const course = courses.find(item => item.id === id);

    if (!course) {
        return res.status(404).json({
            message: "Course not found"
        });
    }

    res.json(course);
});

// Add a course
app.post("/courses", (req, res) => {
    const { name } = req.body;

    if (typeof name !== "string" || !name.trim()) {
        return res.status(400).json({
            message: "Valid course name is required"
        });
    }

    const newCourse = {
        id: Math.max(0, ...courses.map(item => item.id)) + 1,
        name: name.trim()
    };

    courses.push(newCourse);

    res.status(201).json(newCourse);
});

// Update a course
app.put("/courses/:id", (req, res) => {
    const id = Number(req.params.id);
    const course = courses.find(item => item.id === id);

    if (!course) {
        return res.status(404).json({
            message: "Course not found"
        });
    }

    const { name } = req.body;

    if (typeof name !== "string" || !name.trim()) {
        return res.status(400).json({
            message: "Valid course name is required"
        });
    }

    course.name = name.trim();

    res.json(course);
});

// Delete a course
app.delete("/courses/:id", (req, res) => {
    const id = Number(req.params.id);
    const courseExists = courses.some(item => item.id === id);

    if (!courseExists) {
        return res.status(404).json({
            message: "Course not found"
        });
    }

    courses = courses.filter(item => item.id !== id);

    res.json({
        message: "Course deleted successfully"
    });
});

app.listen(3000, () => {
    console.log("Course API running on port 3000");
});`,
                body: `This application combines routing, HTTP methods, JSON handling, validation and status codes.

GET retrieves course information.

POST adds a new course after validating its name.

PUT updates an existing course.

DELETE removes a course.

Start the server using:

node server.js

The API can then be accessed at http://localhost:3000/courses.

For a real production application, persistent database storage, authentication, stronger validation and additional security controls would also be required.`
            },
            {
                heading: "Conclusion",
                body: `Backend development provides the functionality that supports modern web applications.

In this course, we explored backend fundamentals, Node.js, Express.js, HTTP methods, routing, middleware, REST APIs, asynchronous programming and error handling.

These concepts form the foundation for developing server-side applications.

The next step is learning database integration so application data can be stored permanently.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "Which framework is used in the Course Management API?",
                options: ["Express.js", "React", "Bootstrap", "Angular"],
                correct: 0,
                explanation: "Express.js is used to create the backend API."
            },
            {
                level: "Easy",
                question: "Which middleware parses incoming JSON data?",
                options: ["express.json()", "express.css()", "express.html()", "express.image()"],
                correct: 0,
                explanation: "express.json() parses JSON request bodies."
            },
            {
                level: "Medium",
                question: "Which endpoint retrieves all courses in this example?",
                options: ["GET /courses", "POST /courses", "DELETE /courses", "PUT /courses"],
                correct: 0,
                explanation: "GET /courses returns the course collection."
            },
            {
                level: "Medium",
                question: "What is the purpose of validating a course name?",
                options: [
                    "To prevent invalid data from being accepted",
                    "To change the page background",
                    "To install Express",
                    "To create an HTML file"
                ],
                correct: 0,
                explanation: "Validation checks input before the application accepts and processes it."
            },
            {
                level: "Hard",
                question: "Why does the example lose its course data when the server restarts?",
                options: [
                    "The data is stored only in an in-memory array",
                    "Express automatically deletes databases",
                    "React removes backend data",
                    "HTTP cannot store information"
                ],
                correct: 0,
                explanation: "An in-memory array is temporary. Persistent database storage is needed to retain data after a restart."
            }
        ]
    }

];
