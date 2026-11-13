
export const co6Topics = [
  {
    title: "Introduction to Authentication",
    sections: [
      {
        heading: "What is Authentication?",
        body: "Authentication is the process of verifying the identity of a user before allowing access to an application. Most websites use authentication to ensure that only registered users can access their accounts.",
      },
      {
        heading: "Authentication Methods",
        body: "Common authentication methods include username and password, email verification, one-time passwords (OTP), and token-based authentication. Each method verifies a user's identity in a different way."
      },
      {
        heading: "Authentication vs Authorization",
        body: "Authentication verifies who a user is. Authorization determines what an authenticated user is allowed to access."
      }
    ],
    questions: [
      { question: "What is authentication?", options: ["Verifying user identity", "Creating a database", "Designing a webpage", "Deleting files"], answer: 0 },
      { question: "Which is an authentication method?", options: ["CSS", "Password", "HTML", "SQL JOIN"], answer: 1 },
      { question: "What does authorization determine?", options: ["User identity", "Access permissions", "Website color", "Database size"], answer: 1 },
      { question: "What does OTP stand for?", options: ["One-Time Password", "Online Transfer Process", "Open Text Program", "One Type Protocol"], answer: 0 },
      { question: "Authentication mainly protects what?", options: ["User accounts", "CSS files", "Images", "Screen size"], answer: 0 }
    ]
  },
  {
    title: "Password Security and Hashing",
    sections: [
      {
        heading: "Password Security",
        body: "Applications must store passwords securely. Storing plain-text passwords is unsafe because anyone who gains access to the database could read them."
      },
      {
        heading: "Password Hashing",
        body: "Hashing converts a password into a fixed-format value using a one-way algorithm. Secure password storage uses dedicated password-hashing algorithms such as bcrypt or Argon2, along with a unique salt."
      },
      {
        heading: "Best Practices",
        body: "Use a trusted password-hashing library, never log passwords, and never store passwords in plain text. Hashing is different from encryption because a secure password hash is not designed to be reversed."
      }
    ],
    questions: [
      { question: "Why should passwords be hashed?", options: ["To improve security", "To change page color", "To increase image size", "To remove HTML"], answer: 0 },
      { question: "Which is a password-hashing algorithm?", options: ["Flexbox", "bcrypt", "HTML", "HTTP"], answer: 1 },
      { question: "Should plain-text passwords be stored?", options: ["Yes", "No", "Only in CSS", "Only in HTML"], answer: 1 },
      { question: "What is a salt used for?", options: ["Strengthening password hashes", "Styling forms", "Creating URLs", "Connecting screens"], answer: 0 },
      { question: "Which is designed to be one-way?", options: ["Password hashing", "CSS styling", "HTML rendering", "Page navigation"], answer: 0 }
    ]
  },
  {
    title: "Session Management",
    sections: [
      {
        heading: "What is a Session?",
        body: "A session is a way for a server to maintain information about a user's interaction across multiple requests. It helps an application recognize an authenticated user after login."
      },
      {
        heading: "How Sessions Work",
        body: "After successful login, the server creates a session and sends the browser a session identifier, commonly stored in a cookie. The browser sends that cookie with later requests."
      },
      {
        heading: "Session Security",
        body: "Use secure cookie settings such as HttpOnly, Secure when using HTTPS, and an appropriate SameSite policy. Sessions should expire and be invalidated when a user logs out."
      }
    ],
    questions: [
      { question: "What is a session?", options: ["A way to maintain user state", "A CSS property", "A database table only", "An image format"], answer: 0 },
      { question: "Where is a session identifier commonly stored in the browser?", options: ["Cookie", "CSS file", "HTML heading", "Image"], answer: 0 },
      { question: "What does HttpOnly help protect?", options: ["Cookies from JavaScript access", "Images from resizing", "CSS from loading", "HTML from parsing"], answer: 0 },
      { question: "What should happen after logout?", options: ["Invalidate the session", "Keep the session forever", "Change the font", "Delete the website"], answer: 0 },
      { question: "Which connection should be used for Secure cookies?", options: ["HTTPS", "FTP only", "Plain HTTP", "None"], answer: 0 }
    ]
  },
  {
    title: "JSON Web Tokens (JWT)",
    sections: [
      {
        heading: "What is JWT?",
        body: "JSON Web Token (JWT) is a compact format for securely transmitting claims between parties. It is commonly used in web applications to represent authenticated user information."
      },
      {
        heading: "JWT Structure",
        body: "A JWT has three parts separated by dots: Header, Payload, and Signature. The header describes the token type and algorithm, the payload contains claims, and the signature helps verify integrity."
      },
      {
        heading: "JWT Security",
        body: "A signed JWT is not automatically encrypted. Avoid placing passwords or sensitive personal information in its payload. Validate tokens on the server and use expiration times."
      }
    ],
    questions: [
      { question: "What does JWT stand for?", options: ["Java Web Tool", "JSON Web Token", "JavaScript Website Type", "Joint Web Transfer"], answer: 1 },
      { question: "How many main parts does a JWT have?", options: ["Two", "Three", "Four", "Five"], answer: 1 },
      { question: "Which is a JWT part?", options: ["Payload", "Footer CSS", "Database", "HTML body"], answer: 0 },
      { question: "Does a signed JWT automatically hide its payload?", options: ["Yes", "No", "Only in Chrome", "Only in databases"], answer: 1 },
      { question: "Why are expiration times used?", options: ["To limit token validity", "To style a page", "To create tables", "To compress images"], answer: 0 }
    ]
  },
  {
    title: "Authorization and Role-Based Access",
    sections: [
      {
        heading: "What is Authorization?",
        body: "Authorization determines which resources or actions a user can access after their identity has been verified."
      },
      {
        heading: "Role-Based Access Control",
        body: "Role-Based Access Control (RBAC) assigns permissions to roles. For example, an application may have Admin, Teacher, and Student roles, each with different permissions."
      },
      {
        heading: "Server-Side Permission Checks",
        body: "The server must check permissions for every protected operation. Hiding a button in the user interface is not enough to protect the underlying data or API."
      }
    ],
    questions: [
      { question: "What does authorization control?", options: ["Permissions", "Password spelling", "Website title", "Image quality"], answer: 0 },
      { question: "What is RBAC?", options: ["Role-Based Access Control", "Random Browser Access Code", "Remote Backend Application", "Role-Based Animation Color"], answer: 0 },
      { question: "Which role commonly manages users?", options: ["Admin", "Visitor only", "Browser", "Database column"], answer: 0 },
      { question: "Where should protected API permissions be checked?", options: ["Server", "Only CSS", "Only browser button", "Image file"], answer: 0 },
      { question: "Can hiding a button alone secure an API?", options: ["Yes", "No", "Always", "Only on mobile"], answer: 1 }
    ]
  },
  {
    title: "Secure Web Application Practices",
    sections: [
      {
        heading: "Why Web Security Matters",
        body: "Web security protects application data, user accounts, and services from unauthorized access and common attacks."
      },
      {
        heading: "Common Security Risks",
        body: "Common risks include SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), weak access controls, and exposed credentials."
      },
      {
        heading: "Security Practices",
        body: "Validate input on the server, use parameterized database queries, encode untrusted output, apply appropriate CSRF protections, and keep dependencies updated."
      }
    ],
    questions: [
      { question: "What does XSS stand for?", options: ["Cross-Site Scripting", "Extra Server Security", "External Style System", "Cross Server Storage"], answer: 0 },
      { question: "Which helps prevent SQL injection?", options: ["Parameterized queries", "Inline CSS", "Large images", "Page animations"], answer: 0 },
      { question: "Where should input validation happen?", options: ["On the server", "Only in a browser", "Only in CSS", "Nowhere"], answer: 0 },
      { question: "What should developers do with dependencies?", options: ["Keep them updated", "Never update them", "Delete all packages", "Share passwords"], answer: 0 },
      { question: "What should never be exposed in public source code?", options: ["Secret API keys", "Public headings", "CSS colors", "Page titles"], answer: 0 }
    ]
  },
  {
    title: "Environment Variables and Configuration",
    sections: [
      {
        heading: "Application Configuration",
        body: "Applications need configuration values such as database connection strings, service ports, and API credentials. These values should be managed separately from application source code."
      },
      {
        heading: "Environment Variables",
        body: "Environment variables provide configuration to an application through its runtime environment. In Node.js, process.env is used to read these values."
      },
      {
        heading: "Using dotenv",
        body: "The dotenv package can load values from a local .env file during development. Real .env files containing secrets should not be committed to a public Git repository. Use a .env.example file with placeholder values instead."
      },
      {
        heading: "Example",
        body: "A configuration example can use a placeholder value. Never put a real password or database credential in lesson code or a public repository.",
        code: `const port = process.env.PORT || 3000;
console.log("Server port:", port);`
      }
    ],
    questions: [
      { question: "What are environment variables used for?", options: ["Application configuration", "HTML styling", "Image editing", "Creating animations"], answer: 0 },
      { question: "How do you access environment variables in Node.js?", options: ["process.env", "document.css", "window.sql", "html.env"], answer: 0 },
      { question: "What is dotenv commonly used for?", options: ["Loading .env configuration", "Drawing images", "Writing CSS", "Creating HTML forms"], answer: 0 },
      { question: "Should real secrets be committed to public GitHub?", options: ["Yes", "No", "Only passwords", "Only database URLs"], answer: 1 },
      { question: "What can .env.example contain?", options: ["Placeholder configuration names", "Real passwords", "Private API keys", "Personal credentials"], answer: 0 }
    ]
  },
  {
    title: "Introduction to Web Hosting and Deployment",
    sections: [
      {
        heading: "What is Hosting?",
        body: "Web hosting provides computing resources that make a website or application accessible over a network. A hosting provider may supply storage, server processing, networking, and other services."
      },
      {
        heading: "What is Deployment?",
        body: "Deployment is the process of making an application available in a target environment, such as a testing server or production hosting platform."
      },
      {
        heading: "Deployment Types",
        body: "Static websites can be hosted using static hosting services. Applications that need server-side processing require a suitable backend hosting environment."
      }
    ],
    questions: [
      { question: "What is web hosting?", options: ["Making website resources available", "Writing only HTML", "Designing logos", "Creating passwords"], answer: 0 },
      { question: "What is deployment?", options: ["Releasing an application to an environment", "Deleting code", "Changing font size", "Renaming a variable"], answer: 0 },
      { question: "What can host a static website?", options: ["Static hosting service", "Only a database", "Only a text editor", "Only a printer"], answer: 0 },
      { question: "What does a backend application need?", options: ["A suitable server environment", "Only a CSS file", "Only an image", "No runtime"], answer: 0 },
      { question: "Which environment is commonly used for final users?", options: ["Production", "Draft", "Local editor", "Recycle bin"], answer: 0 }
    ]
  },
  {
    title: "Deploying Backend Applications",
    sections: [
      {
        heading: "Backend Deployment",
        body: "Backend deployment makes server-side application code run on a hosting platform so clients can send requests to it."
      },
      {
        heading: "Deployment Preparation",
        body: "Before deployment, configure the start command, runtime version, environment variables, database connectivity, and production dependencies."
      },
      {
        heading: "Testing After Deployment",
        body: "After deployment, test important API routes, database operations, error handling, and application logs. Never assume deployment succeeded just because the build completed."
      }
    ],
    questions: [
      { question: "What is backend deployment?", options: ["Running backend code on a hosting platform", "Styling a heading", "Creating a logo", "Editing an image"], answer: 0 },
      { question: "What should be configured before deployment?", options: ["Environment variables", "Only font size", "Only button color", "Desktop wallpaper"], answer: 0 },
      { question: "What is an API route test used for?", options: ["Checking endpoint behavior", "Changing page layout", "Creating a logo", "Compressing CSS"], answer: 0 },
      { question: "Why should logs be checked?", options: ["To identify runtime problems", "To change the browser theme", "To create HTML", "To rename a project"], answer: 0 },
      { question: "Should database connectivity be tested after deployment?", options: ["Yes", "No", "Never", "Only before coding"], answer: 0 }
    ]
  },
  {
    title: "Final Full Stack Application Deployment",
    sections: [
      {
        heading: "Full Stack Deployment",
        body: "A full-stack application combines a frontend, backend, and database. Deployment requires these parts to communicate correctly in their hosting environments."
      },
      {
        heading: "Deployment Workflow",
        body: "A typical workflow includes preparing the application, testing it locally, configuring production settings, deploying the frontend and backend, connecting the database, and verifying the live application."
      },
      {
        heading: "Final Verification",
        body: "Check navigation, forms, authentication, API responses, database operations, and error handling. Use HTTPS and keep credentials outside public source code."
      },
      {
        heading: "Conclusion",
        body: "Successful deployment makes a full-stack application available to users. Regular monitoring, backups, updates, and security checks help maintain it over time."
      }
    ],
    questions: [
      { question: "Which parts make up a typical full-stack application?", options: ["Frontend, backend and database", "Only HTML", "Only CSS and images", "Only a browser"], answer: 0 },
      { question: "What should be checked after deployment?", options: ["Frontend and API communication", "Only desktop wallpaper", "Only source file names", "Only font color"], answer: 0 },
      { question: "Why is HTTPS important?", options: ["It protects data in transit", "It creates CSS", "It increases screen size", "It replaces a database"], answer: 0 },
      { question: "What helps maintain an application over time?", options: ["Monitoring and updates", "Ignoring errors", "Sharing credentials", "Disabling backups"], answer: 0 },
      { question: "What is the final goal of deployment?", options: ["Make the application available to users", "Delete the backend", "Remove the database", "Hide all pages"], answer: 0 }
    ]
  }
];
