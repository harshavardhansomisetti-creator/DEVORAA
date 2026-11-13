
export const co6Topics = [

    {
        title: "1. Introduction to Authentication and Authorization",
        sections: [
            {
                heading: "What is Authentication?",
                body: `Authentication is the process of verifying the identity of a user.

When a user logs into an application, the system checks whether the provided credentials belong to a valid account.

Common authentication methods include:
1. Username and password.
2. One-time passwords (OTP).
3. Multi-factor authentication (MFA).
4. Biometric authentication.

For example, when a student enters an email address and password to access a learning platform, the application authenticates the student.`
            },
            {
                heading: "What is Authorization?",
                body: `Authorization determines what an authenticated user is allowed to access or perform.

For example, in a college management application:
- Students can view their marks.
- Teachers can update marks.
- Administrators can manage student and teacher accounts.

Authentication answers: Who are you?

Authorization answers: What are you allowed to do?`
            },
            {
                heading: "Authentication vs Authorization",
                body: `Authentication happens before authorization in most application workflows.

Authentication verifies identity, whereas authorization checks permissions.

A user may successfully log in but still be denied access to an administrator-only page because the user does not have the required role.`
            }
        ],
        questions: [
            { question: "What is authentication?", options: ["Verifying user identity", "Deleting user accounts", "Designing a webpage", "Creating a database"], correct: 0 },
            { question: "What is authorization?", options: ["Checking permissions", "Checking screen size", "Creating passwords", "Installing software"], correct: 0 },
            { question: "Which is an authentication method?", options: ["CSS", "OTP", "HTML", "SQL JOIN"], correct: 1 },
            { question: "Which process determines what a user can access?", options: ["Authentication", "Authorization", "Compilation", "Deployment"], correct: 1 },
            { question: "Can an authenticated user be denied access to an admin page?", options: ["No", "Yes, if they lack permission", "Only when offline", "Never"], correct: 1 }
        ]
    },

    {
        title: "2. User Registration and Login Systems",
        sections: [
            {
                heading: "User Registration",
                body: `User registration is the process of creating a new account in an application.

A registration form commonly collects:
- Full name.
- Email address.
- Password.
- Other required profile information.

The backend validates the submitted information before creating the account.

The application should check whether the email is already registered and should never store plain-text passwords.`
            },
            {
                heading: "User Login",
                body: `Login allows an existing user to access an application.

A typical login process works as follows:

1. The user enters their email and password.
2. The frontend sends the information securely to the backend using HTTPS.
3. The backend finds the account.
4. The password is verified against its stored password hash.
5. If the credentials are valid, the server establishes an authenticated session or issues a suitable token.
6. The user can access permitted resources.`
            },
            {
                heading: "Registration and Login API",
                body: `Backend applications commonly use separate API endpoints for registration and login.

POST /register creates an account.

POST /login verifies login credentials.

GET /profile retrieves information for the authenticated user.

These endpoints must validate requests, handle errors, and protect sensitive information.`
            }
        ],
        questions: [
            { question: "What is user registration?", options: ["Creating a new account", "Deleting a server", "Changing CSS", "Stopping an application"], correct: 0 },
            { question: "Which HTTP method is commonly used for login requests?", options: ["GET", "POST", "DELETE", "HEAD"], correct: 1 },
            { question: "Where should user passwords be stored?", options: ["As plain text", "As securely generated password hashes", "In HTML comments", "In public files"], correct: 1 },
            { question: "What does POST /register usually do?", options: ["Creates an account", "Deletes a database", "Displays CSS", "Starts a browser"], correct: 0 },
            { question: "Which protocol helps protect data during transmission?", options: ["HTTP without encryption", "HTTPS", "FTP without encryption", "Telnet"], correct: 1 }
        ]
    },

    {
        title: "3. Password Hashing and Security",
        sections: [
            {
                heading: "Why Password Security Matters",
                body: `Passwords protect user accounts and personal information.

Storing passwords as plain text is unsafe because anyone who gains access to the database could read them.

Applications should use established password-hashing algorithms designed for password storage.`
            },
            {
                heading: "What is Password Hashing?",
                body: `Password hashing converts a password into a fixed-format representation using a one-way cryptographic process.

A secure password-hashing system uses a unique salt and an appropriate work factor.

Recommended password-hashing algorithms include Argon2id, bcrypt, and scrypt.

When a user logs in, the application verifies the entered password using the password-hashing library. It does not need to decrypt the stored hash.`
            },
            {
                heading: "Example Using bcrypt",
                body: `The bcrypt package is commonly used in Node.js applications for password hashing.

Install it using npm install bcrypt.

The following example demonstrates hashing a password and verifying it. In a real application, use the validated password received by the backend and store the resulting hash in the database.`,
                code: `const bcrypt = require("bcrypt");

async function createPasswordHash(password) {
    const hash = await bcrypt.hash(password, 12);
    return hash;
}

async function verifyPassword(password, hash) {
    return await bcrypt.compare(password, hash);
}`
            },
            {
                heading: "Password Security Best Practices",
                body: `1. Never store plain-text passwords.
2. Use a trusted password-hashing library.
3. Use unique salts generated by the library.
4. Never send passwords through insecure connections.
5. Do not log passwords.
6. Provide a secure password-reset process.
7. Apply suitable login rate limits.

Hashing is different from encryption. Hashing is designed to be one-way, whereas encryption is designed to be reversible with the appropriate key.`
            }
        ],
        questions: [
            { question: "Why should passwords be hashed?", options: ["To display them", "To protect stored passwords", "To increase image quality", "To change HTML"], correct: 1 },
            { question: "Which is a password-hashing algorithm?", options: ["bcrypt", "HTML", "React", "CSS"], correct: 0 },
            { question: "What is a salt?", options: ["A database table", "Random data added during password hashing", "A browser extension", "A programming language"], correct: 1 },
            { question: "Can a secure password hash normally be decrypted to obtain the original password?", options: ["Yes, always", "No, hashing is designed to be one-way", "Only using CSS", "Only through HTML"], correct: 1 },
            { question: "Which package is used in the example?", options: ["express", "bcrypt", "react", "mysql2"], correct: 1 }
        ]
    },

    {
        title: "4. Sessions and Cookies",
        sections: [
            {
                heading: "What is a Session?",
                body: `A session allows a server to remember an authenticated user's state across multiple HTTP requests.

HTTP is stateless, which means individual requests do not automatically remember earlier requests.

A session system commonly stores information on the server and gives the browser a session identifier.

When the browser sends that identifier in later requests, the server can identify the corresponding session.`
            },
            {
                heading: "What are Cookies?",
                body: `Cookies are small pieces of data stored by a browser for a website.

They are commonly used for session identifiers, user preferences, and other website-related information.

A server can instruct the browser to store a cookie using the Set-Cookie response header. The browser may send it in later requests using the Cookie request header.`
            },
            {
                heading: "Secure Cookie Attributes",
                body: `HttpOnly: Prevents JavaScript running in the browser from reading the cookie.

Secure: Restricts cookie transmission to secure HTTPS connections.

SameSite: Helps control when cookies are sent with cross-site requests.

Expires and Max-Age: Control how long the cookie remains valid.

These attributes help protect cookies, but applications still need proper session management and CSRF protection.`
            },
            {
                heading: "Session-Based Authentication",
                body: `In session-based authentication:

1. A user logs in.
2. The server verifies the credentials.
3. The server creates a session.
4. A session identifier is sent to the browser in a cookie.
5. The browser sends the cookie with later requests.
6. The server validates the session and checks the user's permissions.

The server can invalidate a session when the user logs out.`
            }
        ],
        questions: [
            { question: "Why are sessions used?", options: ["To remember user state across requests", "To design images", "To compile CSS", "To create HTML tags"], correct: 0 },
            { question: "Where are browser cookies stored?", options: ["In the browser", "Only in a keyboard", "In a monitor", "In a compiler"], correct: 0 },
            { question: "What does HttpOnly do?", options: ["Allows JavaScript to read the cookie", "Prevents JavaScript from reading the cookie", "Deletes the database", "Disables HTTPS"], correct: 1 },
            { question: "What does Secure cookie attribute help enforce?", options: ["HTTPS transmission", "Image compression", "Database indexing", "HTML validation"], correct: 0 },
            { question: "What is commonly sent by the browser to identify a session?", options: ["Session cookie", "CSS file", "Image tag", "SQL command"], correct: 0 }
        ]
    },

    {
        title: "5. JSON Web Tokens (JWT)",
        sections: [
            {
                heading: "What is JWT?",
                body: `JWT stands for JSON Web Token.

It is a compact token format used to transfer claims between parties.

JWT is commonly used in authentication systems where a server issues a signed token after verifying a user's identity.

The client sends the token with later requests, and the backend verifies it before granting access.

A signed JWT is not automatically encrypted. Its payload should not contain confidential information.`
            },
            {
                heading: "Structure of JWT",
                body: `A typical JWT contains three parts separated by dots:

1. Header: Contains information about the token type and signing algorithm.
2. Payload: Contains claims such as user ID and expiration time.
3. Signature: Allows the receiver to verify that the token has not been modified and was signed using the expected key.

The three parts are encoded using Base64URL encoding.`,
                code: `header.payload.signature

Example claims:

{
    "sub": "user123",
    "role": "student",
    "exp": 1893456000
}`
            },
            {
                heading: "JWT Authentication Workflow",
                body: `1. User submits login credentials.
2. Server verifies the credentials.
3. Server creates and signs a token.
4. Client stores the token using a suitable secure strategy.
5. Client sends the token with protected requests.
6. Server verifies the signature and checks expiration and required claims.
7. Server checks authorization before returning protected information.

Tokens should have suitable expiration periods and a revocation or rotation strategy where required.`
            },
            {
                heading: "JWT Example in Node.js",
                body: `The jsonwebtoken package can create and verify JWTs.

Install it using npm install jsonwebtoken.

The signing secret must be a strong secret stored securely in an environment variable. Never expose it in frontend code.`,
                code: `const jwt = require("jsonwebtoken");

const token = jwt.sign(
    { userId: 101, role: "student" },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
);

const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET
);

console.log(decoded.userId);`
            }
        ],
        questions: [
            { question: "What is the full form of JWT?", options: ["Java Web Technology", "JSON Web Token", "JavaScript Web Tool", "Joined Web Transfer"], correct: 1 },
            { question: "How many main parts does a typical JWT contain?", options: ["One", "Two", "Three", "Five"], correct: 2 },
            { question: "What is the purpose of the JWT signature?", options: ["To verify token integrity and authenticity", "To store images", "To create HTML", "To style a webpage"], correct: 0 },
            { question: "Is a signed JWT payload automatically encrypted?", options: ["Yes", "No", "Only in HTML", "Only in CSS"], correct: 1 },
            { question: "Where should a JWT signing secret be stored?", options: ["Public JavaScript file", "Environment variable", "HTML title", "Image folder"], correct: 1 }
        ]
    },

    {
        title: "6. Role-Based Access Control",
        sections: [
            {
                heading: "What is Access Control?",
                body: `Access control determines which users can access specific resources or perform certain actions.

It is an important part of application security because different users often need different permissions.

For example, students, teachers, and administrators may have different levels of access.`
            },
            {
                heading: "Role-Based Access Control (RBAC)",
                body: `Role-Based Access Control assigns permissions to roles rather than assigning every permission separately to each user.

Example roles:

Student:
- View personal profile.
- View marks.
- View course information.

Teacher:
- View assigned classes.
- Update marks for permitted courses.

Administrator:
- Manage users.
- Manage courses.
- Configure application settings.

A user's role should be checked on the backend for every protected operation.`
            },
            {
                heading: "Example of Role Checking",
                body: `The following Express middleware demonstrates a basic role check.

The authentication middleware must run first and attach a verified user object to the request. Never trust a role sent directly by the client.`,
                code: `function allowRoles(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                message: "Login required"
            });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Access denied"
            });
        }

        next();
    };
}

// Example:
// app.get("/admin", authenticate, allowRoles("admin"), handler);`
            },
            {
                heading: "401 vs 403 Status Codes",
                body: `401 Unauthorized means the request does not have valid authentication credentials.

403 Forbidden means the server understands the request but refuses access because the user does not have the required permission.

Using these status codes correctly makes APIs easier to understand and troubleshoot.`
            }
        ],
        questions: [
            { question: "What does RBAC stand for?", options: ["Role-Based Access Control", "Random Browser Access Code", "Remote Backend Application Control", "Role-Based Application Compiler"], correct: 0 },
            { question: "What is the purpose of RBAC?", options: ["Assign permissions based on roles", "Design website layouts", "Create database backups", "Compress files"], correct: 0 },
            { question: "Which status code commonly indicates missing or invalid authentication?", options: ["200", "401", "404", "500"], correct: 1 },
            { question: "Which status code indicates insufficient permission?", options: ["201", "301", "403", "204"], correct: 2 },
            { question: "Where should authorization checks be enforced?", options: ["Only in frontend buttons", "On the backend", "Only in CSS", "In image files"], correct: 1 }
        ]
    },

    {
        title: "7. Application Security and Common Threats",
        sections: [
            {
                heading: "Why Application Security Matters",
                body: `Application security protects user accounts, data, and system resources against unauthorized access and misuse.

A secure application validates input, protects credentials, applies access controls, and handles unexpected requests safely.

Security should be considered throughout development rather than added only after deployment.`
            },
            {
                heading: "SQL Injection",
                body: `SQL Injection occurs when untrusted input is incorrectly included in an SQL query.

An attacker may attempt to change the meaning of a database query.

Parameterized queries help prevent this by keeping user-supplied values separate from SQL instructions.`,
                code: `// Safer parameterized query
connection.execute(
    "SELECT * FROM users WHERE email = ?",
    [email],
    callback
);`
            },
            {
                heading: "Cross-Site Scripting (XSS)",
                body: `Cross-Site Scripting is a vulnerability in which untrusted content is interpreted as executable script in a user's browser.

Applications should safely handle untrusted content, use context-aware output encoding, and avoid unsafe DOM operations.

A Content Security Policy (CSP) can provide an additional layer of protection.`
            },
            {
                heading: "Cross-Site Request Forgery (CSRF)",
                body: `CSRF is an attack in which a browser may be tricked into sending an unwanted authenticated request to a website.

Applications using cookie-based authentication should apply suitable CSRF protections.

Common defenses include anti-CSRF tokens, suitable SameSite cookie settings, and checking request origins where appropriate.`
            },
            {
                heading: "Security Best Practices",
                body: `1. Use HTTPS.
2. Validate and safely process user input.
3. Use parameterized database queries.
4. Hash passwords securely.
5. Apply authentication and authorization.
6. Keep dependencies updated.
7. Protect secrets with environment variables.
8. Configure secure cookies.
9. Apply rate limiting to sensitive endpoints.
10. Avoid exposing internal errors and confidential data.`
            }
        ],
        questions: [
            { question: "What is SQL injection?", options: ["An attack that manipulates SQL queries", "A CSS feature", "A browser setting", "A database backup"], correct: 0 },
            { question: "Which practice helps prevent SQL injection?", options: ["Parameterized queries", "Plain-text passwords", "Disabling validation", "Public database credentials"], correct: 0 },
            { question: "What does XSS stand for?", options: ["Cross-Site Scripting", "Extra Server Storage", "External System Software", "Cross Server Security"], correct: 0 },
            { question: "What does CSRF stand for?", options: ["Cross-Site Request Forgery", "Central Server Resource File", "Common Security Request Format", "Client-Side Runtime Function"], correct: 0 },
            { question: "Which protocol protects data in transit?", options: ["HTTPS", "Unencrypted HTTP", "Plain text", "HTML"], correct: 0 }
        ]
    },

    {
        title: "8. API Testing and Validation",
        sections: [
            {
                heading: "What is API Testing?",
                body: `API testing verifies whether an application's API endpoints work correctly.

It checks request methods, input validation, response data, status codes, authentication, authorization, and error handling.

API testing is important because frontend applications and other services depend on reliable backend responses.`
            },
            {
                heading: "Common HTTP Status Codes",
                body: `200 OK: The request succeeded.

201 Created: A resource was successfully created.

204 No Content: The request succeeded without a response body.

400 Bad Request: The request contains invalid information.

401 Unauthorized: Valid authentication is missing or invalid.

403 Forbidden: The user does not have permission.

404 Not Found: The requested resource does not exist.

500 Internal Server Error: An unexpected server-side problem occurred.`
            },
            {
                heading: "Testing APIs with Postman",
                body: `Postman is a tool used to send HTTP requests and inspect API responses.

Developers can use it to:
- Select HTTP methods such as GET, POST, PUT, and DELETE.
- Enter request URLs.
- Add headers and authentication information.
- Send JSON request bodies.
- Inspect response status codes and response data.
- Save requests into collections for repeated testing.`
            },
            {
                heading: "Request Validation",
                body: `Input validation checks whether incoming data follows the application's requirements.

For example, a registration API may check that:
- Name is not empty.
- Email has a valid format.
- Password meets the application's security requirements.
- Required fields are present.
- Values have the expected types.

Validation should happen on the backend even if the frontend already validates the form.`
            }
        ],
        questions: [
            { question: "What is API testing?", options: ["Checking API functionality", "Designing a logo", "Installing an operating system", "Writing CSS only"], correct: 0 },
            { question: "Which status code means Created?", options: ["200", "201", "400", "500"], correct: 1 },
            { question: "Which status code means Not Found?", options: ["201", "301", "404", "500"], correct: 2 },
            { question: "Which tool is commonly used for API testing?", options: ["Postman", "Paint", "Calculator", "Notepad only"], correct: 0 },
            { question: "Should backend APIs validate incoming data?", options: ["Yes", "No", "Only during deployment", "Only for images"], correct: 0 }
        ]
    },

    {
        title: "9. Environment Variables and Application Configuration",
        sections: [
            {
                heading: "What are Environment Variables?",
                body: `Environment variables are values provided to an application through its runtime environment.

They are commonly used to configure database credentials, API keys, application ports, and other settings.

They help keep configuration separate from application source code.

Sensitive values should not be committed to public repositories.`
            },
            {
                heading: "Using dotenv in Node.js",
                body: `The dotenv package loads variables from a local .env file into process.env.

Install it using npm install dotenv.

The .env file should normally be added to .gitignore so that local secrets are not committed to Git.`,
                code: `// .env file
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_local_password
JWT_SECRET=replace_with_a_long_random_secret

// server.js
require("dotenv").config();

const port = process.env.PORT || 3000;

console.log("Server port:", port);`
            },
            {
                heading: "Using .gitignore",
                body: `A .gitignore file tells Git which files and directories should not be tracked.

It is commonly used to exclude:
- .env files.
- node_modules directories.
- Local log files.
- Temporary build files.

Example .gitignore content:`,
                code: `.env
.env.*
node_modules/
*.log`
            },
            {
                heading: "Configuration Across Environments",
                body: `Applications may run in different environments.

Development: Used while building and testing an application locally.

Testing: Used to verify application behavior.

Production: The live environment used by real users.

Each environment may require different database connections, service URLs, and configuration values.

Production secrets should be configured through the hosting platform's secure environment-variable settings.`
            }
        ],
        questions: [
            { question: "What are environment variables used for?", options: ["Application configuration", "Creating HTML tags", "Drawing images", "Formatting CSS"], correct: 0 },
            { question: "Which Node.js package loads .env files?", options: ["dotenv", "react", "mysql2 only", "express-html"], correct: 0 },
            { question: "Which file helps exclude .env from Git?", options: [".gitignore", "index.html", "style.css", "package.json only"], correct: 0 },
            { question: "Where should production secrets be configured?", options: ["Public GitHub repository", "Secure hosting environment settings", "HTML source code", "Public frontend JavaScript"], correct: 1 },
            { question: "What is a production environment?", options: ["The live application environment", "A code editor theme", "A database table", "A browser extension"], correct: 0 }
        ]
    },

    {
        title: "10. Application Deployment and Maintenance",
        sections: [
            {
                heading: "What is Deployment?",
                body: `Deployment is the process of making an application available in an environment where users can access it.

During development, an application may run on localhost. Deployment makes it accessible through a hosting platform or server.

A full-stack application may contain a frontend, backend, and database, each of which needs suitable hosting and configuration.`
            },
            {
                heading: "Frontend Deployment",
                body: `Frontend applications contain the user interface and browser-side code.

Static websites built using HTML, CSS, and JavaScript can be deployed using platforms such as GitHub Pages.

Modern frontend applications built with frameworks may need a build process before deployment.

After deployment, the platform provides a URL through which users can access the website.`
            },
            {
                heading: "Backend Deployment",
                body: `Backend applications run on a server and handle API requests, authentication, business logic, and database operations.

Backend hosting platforms provide features such as:
- Application runtime.
- Environment variables.
- Logs.
- Deployment from Git repositories.
- HTTPS support.

The backend should listen on the port provided by its hosting environment when required.`,
                code: `const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("DEVORAA API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});`
            },
            {
                heading: "Database Deployment",
                body: `A production backend needs access to a properly configured database.

A database hosting service or managed database platform can provide a production database.

Important considerations include:
- Database credentials.
- Network access rules.
- Backups.
- Database migrations.
- Access permissions.
- Secure connections.

A local development database and a production database should be configured separately.`
            },
            {
                heading: "Deployment Workflow",
                body: `A common deployment workflow is:

1. Develop the application locally.
2. Test its frontend and backend.
3. Store the project in a Git repository.
4. Configure production environment variables.
5. Set up the production database.
6. Deploy the frontend and backend.
7. Configure API URLs and database connections.
8. Enable HTTPS.
9. Test the deployed application.
10. Monitor logs and maintain the application.

Deployment is not the end of development. Applications need regular updates, security fixes, and monitoring.`
            }
        ],
        questions: [
            { question: "What is deployment?", options: ["Making an application available to users", "Deleting source code", "Creating a database table", "Writing a password"], correct: 0 },
            { question: "Which platform can host static websites?", options: ["GitHub Pages", "MySQL only", "Postman", "bcrypt"], correct: 0 },
            { question: "What does process.env.PORT provide?", options: ["A runtime environment port value", "A database password", "An HTML tag", "A CSS selector"], correct: 0 },
            { question: "Why is HTTPS important?", options: ["It helps protect data in transit", "It creates database tables", "It replaces JavaScript", "It removes the need for testing"], correct: 0 },
            { question: "What should happen after deployment?", options: ["Testing and monitoring", "Delete all backups", "Expose all credentials", "Stop maintaining the application"], correct: 0 }
        ]
    }

];
