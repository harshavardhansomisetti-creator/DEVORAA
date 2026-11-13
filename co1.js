
export const co1Topics = [

    // ==========================================
    // LESSON 1 - INTRODUCTION TO FULL STACK
    // ==========================================

    {
        title: "Introduction to Full Stack Development",

        sections: [
            {
                heading: "1. What is Web Development?",
                body: "Web development is the process of creating websites and web applications that run inside a web browser. A website may contain text, images, forms, buttons and interactive features. For example, when you open an online shopping website, you are using a web application. Web development involves designing the user interface, writing application logic, managing data and connecting different parts of the application."
            },
            {
                heading: "2. What is Full Stack Development?",
                body: "Full Stack Development means developing both the frontend and backend of a web application. The frontend handles what users see and interact with. The backend handles application logic, requests and data processing. A full stack developer understands how these parts communicate with each other and how information is stored in a database."
            },
            {
                heading: "3. Frontend Development",
                body: "Frontend development focuses on the visible part of a website. It includes page layouts, navigation menus, buttons, images, forms and other elements that users interact with. Three important technologies are HTML, CSS and JavaScript. HTML defines the structure, CSS controls the appearance, and JavaScript adds behaviour. For example, HTML creates a button, CSS gives it a colour and size, and JavaScript makes something happen when the user clicks it."
            },
            {
                heading: "4. Backend Development",
                body: "Backend development is responsible for the server-side operations of an application. It receives requests from the frontend, checks information, applies business rules and communicates with databases. For example, when a user submits a login form, the backend receives the login details, verifies them and sends an appropriate response. Common backend technologies include Node.js, Python, Java and PHP."
            },
            {
                heading: "5. Database",
                body: "A database is an organized collection of information that an application can store, retrieve and update. A shopping application may store customer details, product names, prices and orders. The backend communicates with the database whenever information needs to be saved or retrieved. Examples of database systems include MongoDB, MySQL and PostgreSQL."
            },
            {
                heading: "6. How Full Stack Parts Work Together",
                body: "Consider an online shopping application. First, the user opens a product page through the frontend. The frontend sends a request to the backend for product information. The backend retrieves the required information from the database and sends it back. Finally, the frontend displays the product details to the user. This communication between frontend, backend and database makes the application work as a complete system.",
                code: `User
  |
  v
Frontend (HTML, CSS, JavaScript)
  |
  v
Backend (Server and Application Logic)
  |
  v
Database (Stored Information)
  |
  v
Response sent back to the user`
            },
            {
                heading: "7. Real-World Example",
                body: "Think about a student registration website. The frontend displays a registration form. The student enters their name, email and other details. The backend receives the submitted information and validates it. If the information is acceptable, the backend stores it in the database. The website then displays a success message. Each layer has a different responsibility, but all three work together."
            },
            {
                heading: "8. Important Technologies",
                body: "HTML is used for page structure. CSS is used for styling and layout. JavaScript adds interactive behaviour. Node.js can run JavaScript on the server. Express.js helps build backend routes and APIs. MongoDB and PostgreSQL are examples of database systems. These technologies can be combined to build complete web applications."
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What is Full Stack Development?",
                options: [
                    "Only designing websites",
                    "Developing frontend and backend",
                    "Only managing databases",
                    "Only writing HTML"
                ],
                correct: 1,
                explanation: "Full Stack Development includes both the frontend and backend parts of an application."
            },
            {
                level: "Easy",
                question: "Which part of a website is directly visible to users?",
                options: ["Backend", "Database", "Frontend", "Server"],
                correct: 2,
                explanation: "The frontend contains the visible interface and interactive elements."
            },
            {
                level: "Easy",
                question: "What is the main purpose of a database?",
                options: [
                    "Store and organize information",
                    "Design buttons",
                    "Create animations",
                    "Display images"
                ],
                correct: 0,
                explanation: "A database stores application information so it can be retrieved and updated."
            },
            {
                level: "Medium",
                question: "Which technology is mainly used to structure web pages?",
                options: ["CSS", "HTML", "SQL", "Python"],
                correct: 1,
                explanation: "HTML defines the structure and content of web pages."
            },
            {
                level: "Hard",
                question: "A user submits a registration form. Which part normally validates the submitted information before saving it?",
                options: ["CSS", "Backend", "Image file", "Browser theme"],
                correct: 1,
                explanation: "The backend applies validation rules and communicates with the database."
            }
        ]
    },


    // ==========================================
    // LESSON 2 - CLIENT, SERVER AND DATABASE
    // ==========================================

    {
        title: "Client, Server and Database",

        sections: [
            {
                heading: "1. Understanding Web Communication",
                body: "A web application usually contains different components that communicate to complete a task. The client requests information, the server processes the request, and the database stores the information required by the application. Understanding this communication is important because almost every modern website uses this basic architecture."
            },
            {
                heading: "2. What is a Client?",
                body: "A client is a device or software application that requests a service or information from a server. A web browser such as Chrome, Firefox or Edge acts as a client when opening a website. A mobile application can also act as a client. For example, when you search for a product on a shopping website, your browser sends a request to the website's server."
            },
            {
                heading: "3. What is a Server?",
                body: "A server is a computer or software system that receives requests from clients and sends responses. It may process information, execute application logic, verify user details and retrieve data. For example, when you log into a website, the server checks the submitted information and decides whether the login should be accepted."
            },
            {
                heading: "4. What is a Database?",
                body: "A database stores information in an organized form. It allows an application to create, read, update and delete records. A student management application may store student names, roll numbers, courses and marks. The server communicates with the database when it needs to retrieve or modify these records."
            },
            {
                heading: "5. What is a Request and Response?",
                body: "A request is a message sent by a client asking the server to perform an operation or provide information. A response is the message returned by the server. For example, a browser may request a webpage using HTTP. The server processes the request and returns a response containing the webpage or an appropriate error message."
            },
            {
                heading: "6. How Client, Server and Database Work Together",
                body: "Suppose a student opens a result portal. The browser sends a request to the server. The server identifies the requested student record and communicates with the database. The database returns the stored result information. The server prepares a response and sends it to the browser. The browser then displays the result to the student.",
                code: `Client (Browser)
       |
       | Request
       v
     Server
       |
       | Database Query
       v
    Database
       |
       | Stored Information
       v
     Server
       |
       | Response
       v
Client (Browser)`
            },
            {
                heading: "7. Introduction to HTTP",
                body: "HTTP stands for HyperText Transfer Protocol. It is commonly used for communication between web clients and web servers. When a browser requests a webpage, it can use HTTP to send the request and receive the response. HTTPS is the secure version of HTTP and uses encryption to protect communication."
            },
            {
                heading: "8. Common HTTP Methods",
                body: "GET is commonly used to retrieve information. POST is used to submit information or create a resource. PUT is commonly used to replace an existing resource. PATCH is used to update part of a resource. DELETE is used to request deletion of a resource. These methods are commonly used when building web APIs."
            },
            {
                heading: "9. Real-World Example",
                body: "When you check your bank account balance through a website, the browser sends a request to the bank's server. The server verifies the user's session and retrieves the permitted account information. It then sends a response that the browser displays. Sensitive operations also require proper authentication and security checks."
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What sends requests to a server?",
                options: ["Database", "Client", "CSS", "HTML"],
                correct: 1,
                explanation: "A client sends requests to a server to obtain information or services."
            },
            {
                level: "Easy",
                question: "What is the main responsibility of a server?",
                options: [
                    "Only displaying images",
                    "Processing client requests",
                    "Only designing pages",
                    "Creating HTML automatically"
                ],
                correct: 1,
                explanation: "A server receives requests, processes them and sends responses."
            },
            {
                level: "Easy",
                question: "Which component stores application data?",
                options: ["Browser", "Client", "Database", "CSS"],
                correct: 2,
                explanation: "A database stores organized information used by an application."
            },
            {
                level: "Medium",
                question: "Which protocol is commonly used for web communication?",
                options: ["HTTP", "Bluetooth", "SMTP only", "HDMI"],
                correct: 0,
                explanation: "HTTP is commonly used for communication between web clients and servers."
            },
            {
                level: "Hard",
                question: "Which HTTP method is commonly used to retrieve information?",
                options: ["POST", "DELETE", "GET", "PATCH"],
                correct: 2,
                explanation: "GET requests are commonly used to retrieve information from a server."
            }
        ]
    },


    // ==========================================
    // LESSON 3 - HTML FUNDAMENTALS
    // ==========================================

    {
        title: "HTML Fundamentals",

        sections: [
            {
                heading: "1. What is HTML?",
                body: "HTML stands for HyperText Markup Language. It is the standard markup language used to define the structure and content of webpages. HTML tells the browser which parts of a page are headings, paragraphs, images, links, lists and forms. HTML is not a programming language because it does not provide general-purpose programming logic such as loops and conditions."
            },
            {
                heading: "2. What is an HTML Tag?",
                body: "An HTML tag is a keyword written inside angle brackets. Most elements use an opening tag and a closing tag. The opening tag starts an element, while the closing tag ends it. The content is placed between them. For example, the p element is used to represent a paragraph.",
                code: `<p>This is a paragraph.</p>

<h1>This is a heading.</h1>`
            },
            {
                heading: "3. HTML Elements and Attributes",
                body: "An HTML element includes its tags and content. An attribute provides additional information about an element. Attributes are generally written inside the opening tag. For example, the href attribute specifies the destination of a link, while the src attribute specifies the location of an image.",
                code: `<a href="https://example.com">
    Visit Website
</a>

<img src="photo.jpg" alt="A sample photo">`
            },
            {
                heading: "4. Basic HTML Document Structure",
                body: "An HTML document begins with a DOCTYPE declaration. The html element contains the entire document. The head section contains information about the webpage, such as its title and metadata. The body section contains the content that appears in the browser window.",
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <h1>Welcome to DEVORAA</h1>
    <p>Learning HTML step by step.</p>
</body>
</html>`
            },
            {
                heading: "5. Headings and Paragraphs",
                body: "HTML provides six heading levels, from h1 to h6. The h1 element represents the highest-level heading, while h6 represents the lowest-level heading. The p element represents a paragraph. Headings should describe the structure of the content rather than being selected only for their visual size."
            },
            {
                heading: "6. Links and Images",
                body: "The a element creates a hyperlink that allows users to navigate to another page or location. The href attribute defines the destination. The img element displays an image. Its src attribute identifies the image file, and its alt attribute provides alternative text that can help users who cannot see the image.",
                code: `<a href="about.html">About Us</a>

<img src="logo.png" alt="DEVORAA logo">`
            },
            {
                heading: "7. Lists in HTML",
                body: "HTML supports ordered and unordered lists. An unordered list uses the ul element and normally displays bullet points. An ordered list uses the ol element and normally displays numbered items. Each list item is placed inside an li element.",
                code: `<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

<ol>
    <li>Learn HTML</li>
    <li>Learn CSS</li>
    <li>Learn JavaScript</li>
</ol>`
            },
            {
                heading: "8. HTML Forms",
                body: "Forms allow users to enter and submit information. The form element groups form controls. The input element accepts different types of data, such as text and email addresses. The label element describes a form control. A button can be used to submit the form.",
                code: `<form>
    <label for="name">Your Name:</label>
    <input type="text" id="name" name="name">

    <button type="submit">Submit</button>
</form>`
            },
            {
                heading: "9. Why HTML is Important",
                body: "HTML provides the foundation of every normal webpage. CSS depends on HTML elements to apply styles, and JavaScript can select HTML elements to change content or behaviour. Learning HTML properly makes it easier to understand page structure, accessibility and frontend development."
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What is the full form of HTML?",
                options: [
                    "HyperText Markup Language",
                    "HighText Machine Language",
                    "Hyper Transfer Main Language",
                    "Home Tool Markup Language"
                ],
                correct: 0,
                explanation: "HTML stands for HyperText Markup Language."
            },
            {
                level: "Easy",
                question: "Which tag represents the highest-level heading?",
                options: ["h6", "p", "h1", "head"],
                correct: 2,
                explanation: "The h1 element represents the highest-level heading."
            },
            {
                level: "Easy",
                question: "Which HTML element creates a paragraph?",
                options: ["div", "p", "img", "a"],
                correct: 1,
                explanation: "The p element represents a paragraph."
            },
            {
                level: "Medium",
                question: "Which section contains the visible webpage content?",
                options: ["head", "title", "body", "meta"],
                correct: 2,
                explanation: "The body element contains the content displayed in the browser."
            },
            {
                level: "Hard",
                question: "Which attribute specifies the destination of a hyperlink?",
                options: ["src", "alt", "href", "class"],
                correct: 2,
                explanation: "The href attribute defines the destination URL of a hyperlink."
            }
        ]
    },


    // ==========================================
    // LESSON 4 - SEMANTIC HTML
    // ==========================================

    {
        title: "Semantic HTML",

        sections: [
            {
                heading: "1. What is Semantic HTML?",
                body: "Semantic HTML means using HTML elements that clearly describe the meaning and purpose of their content. For example, the header element represents introductory content, while the nav element represents navigation links. Semantic elements make the structure of a webpage easier for developers, browsers and assistive technologies to understand."
            },
            {
                heading: "2. Semantic vs Non-Semantic Elements",
                body: "A semantic element describes the meaning of its content. Examples include header, nav, main, article, section and footer. A non-semantic element such as div or span does not describe the meaning of its content by itself. Non-semantic elements are still useful when a general container is needed.",
                code: `<header>
    <h1>DEVORAA</h1>
</header>

<div class="header">
    <h1>DEVORAA</h1>
</div>`
            },
            {
                heading: "3. Important Semantic Elements",
                body: "The header element represents introductory content. The nav element contains major navigation links. The main element identifies the primary content of the page. The section element groups related content. The article element represents independent, self-contained content. The aside element represents related supplementary content. The footer element contains information about the page or a section."
            },
            {
                heading: "4. Understanding Article and Section",
                body: "The article element is useful for content that can stand independently, such as a blog post, news story or forum entry. The section element groups related content under a common theme, often with a heading. A section can contain articles, and an article can contain sections. Choose elements based on the meaning of the content."
            },
            {
                heading: "5. Semantic HTML Example",
                body: "The following example uses meaningful elements to organize a simple webpage. The browser can interpret these elements as different parts of the document, and developers can understand the page structure more easily.",
                code: `<header>
    <h1>DEVORAA</h1>
</header>

<nav>
    <a href="index.html">Home</a>
    <a href="courses.html">Courses</a>
</nav>

<main>
    <article>
        <h2>Web Development</h2>
        <p>Learn modern web technologies.</p>
    </article>
</main>

<footer>
    <p>DEVORAA Learning Platform</p>
</footer>`
            },
            {
                heading: "6. Accessibility Benefits",
                body: "Semantic HTML helps assistive technologies understand the structure of a webpage. For example, screen readers can identify navigation and main content regions. Correct heading order and meaningful elements also help users move through information more easily. Semantic HTML does not automatically make a website fully accessible, but it provides an important foundation."
            },
            {
                heading: "7. SEO Benefits",
                body: "Search engines analyze webpage content and structure to understand what a page is about. Meaningful headings and semantic elements can help describe the organization of the content. Semantic HTML alone does not guarantee a higher search ranking, but clear structure supports better understanding of the page."
            },
            {
                heading: "8. Best Practices",
                body: "Use one main element for the primary content of a page. Use heading elements in a logical order. Use nav for major navigation areas. Use article for independent content and section for related groups of content. Do not choose semantic elements only because they have a particular default appearance; CSS should control visual styling."
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What is Semantic HTML?",
                options: [
                    "HTML with meaningful elements",
                    "HTML without tags",
                    "A programming language",
                    "A database language"
                ],
                correct: 0,
                explanation: "Semantic HTML uses meaningful elements to describe the purpose of content."
            },
            {
                level: "Easy",
                question: "Which element represents navigation links?",
                options: ["main", "nav", "footer", "article"],
                correct: 1,
                explanation: "The nav element represents a section containing navigation links."
            },
            {
                level: "Easy",
                question: "Which element identifies the primary content of a page?",
                options: ["header", "nav", "main", "title"],
                correct: 2,
                explanation: "The main element represents the primary content of the document."
            },
            {
                level: "Medium",
                question: "Which element is suitable for an independent blog post?",
                options: ["article", "br", "span", "input"],
                correct: 0,
                explanation: "Article is suitable for self-contained content that can stand independently."
            },
            {
                level: "Hard",
                question: "Which is an important accessibility benefit of Semantic HTML?",
                options: [
                    "It removes the need for CSS",
                    "It helps assistive technologies understand page structure",
                    "It automatically creates databases",
                    "It replaces JavaScript"
                ],
                correct: 1,
                explanation: "Semantic elements help assistive technologies identify meaningful page regions."
            }
        ]
    },


    // ==========================================
    // LESSON 5 - CSS FUNDAMENTALS
    // ==========================================

    {
        title: "CSS Fundamentals",

        sections: [
            {
                heading: "1. What is CSS?",
                body: "CSS stands for Cascading Style Sheets. It is used to control the visual appearance and layout of HTML documents. HTML defines what content exists on a webpage, while CSS defines how that content looks. CSS can control colours, fonts, spacing, borders, backgrounds and element positioning."
            },
            {
                heading: "2. Why is CSS Needed?",
                body: "Without CSS, a webpage mainly displays content using the browser's default styles. CSS helps developers create consistent designs, organize content and improve the user experience. For example, CSS can turn a plain list of links into a horizontal navigation bar and make a form easier to use."
            },
            {
                heading: "3. Types of CSS",
                body: "Inline CSS is written directly inside an HTML element using the style attribute. Internal CSS is written inside a style element in the HTML document. External CSS is stored in a separate .css file and connected using a link element. External CSS is generally preferred for larger projects because it keeps structure and styling separate.",
                code: `<!-- Inline CSS -->
<p style="color: blue;">Hello</p>

<!-- Internal CSS -->
<style>
    p {
        color: blue;
    }
</style>

<!-- External CSS -->
<link rel="stylesheet" href="style.css">`
            },
            {
                heading: "4. CSS Syntax",
                body: "A CSS rule contains a selector followed by a declaration block. The selector identifies which HTML elements should receive the styles. Each declaration contains a property and a value. The property describes what should change, and the value specifies how it should look.",
                code: `h1 {
    color: blue;
    font-size: 30px;
}`
            },
            {
                heading: "5. CSS Selectors",
                body: "Selectors identify the HTML elements that CSS should style. An element selector targets elements by their tag name. A class selector begins with a dot and can be reused on multiple elements. An ID selector begins with a hash symbol and identifies an element by its ID. Class selectors are commonly used for reusable styling.",
                code: `/* Element selector */
p {
    color: black;
}

/* Class selector */
.card {
    padding: 20px;
}

/* ID selector */
#heading {
    font-size: 24px;
}`
            },
            {
                heading: "6. Common CSS Properties",
                body: "The color property controls text colour. The background-color property controls an element's background. The font-size property changes text size. The margin property controls space outside an element. The padding property controls space inside an element. The border property adds a border. The width and height properties control an element's dimensions.",
                code: `.card {
    color: #222;
    background-color: white;
    font-size: 16px;
    margin: 20px;
    padding: 15px;
    border: 1px solid #ddd;
}`
            },
            {
                heading: "7. The CSS Box Model",
                body: "Every normal CSS element can be understood using the box model. It contains content, padding, border and margin. Content is the actual text or image. Padding is the space between content and border. Border surrounds the padding and content. Margin is the space outside the border. Understanding the box model helps developers control layout and spacing.",
                code: `.box {
    width: 200px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
    box-sizing: border-box;
}`
            },
            {
                heading: "8. External CSS Connection",
                body: "An external stylesheet is connected using the link element inside the HTML head section. The href attribute specifies the stylesheet file location. When the browser loads the HTML document, it also loads the linked CSS file and applies its rules.",
                code: `<head>
    <link rel="stylesheet" href="style.css">
</head>`
            },
            {
                heading: "9. Practical Example",
                body: "Imagine creating a course card for DEVORAA. HTML creates the card and its heading. CSS gives the card a border, spacing, background and readable typography. Keeping these responsibilities separate makes the project easier to modify and maintain.",
                code: `<div class="course-card">
    <h2>Web Foundations</h2>
    <p>Learn HTML and CSS.</p>
</div>

<style>
.course-card {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: white;
}
</style>`
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What is the full form of CSS?",
                options: [
                    "Creative Style System",
                    "Cascading Style Sheets",
                    "Computer Style Sheets",
                    "Colorful Style Syntax"
                ],
                correct: 1,
                explanation: "CSS stands for Cascading Style Sheets."
            },
            {
                level: "Easy",
                question: "Which language controls webpage appearance?",
                options: ["HTML", "CSS", "SQL", "HTTP"],
                correct: 1,
                explanation: "CSS controls the visual styling and layout of webpages."
            },
            {
                level: "Easy",
                question: "Which symbol is used for a class selector?",
                options: ["#", ".", "@", "$"],
                correct: 1,
                explanation: "A class selector begins with a dot, such as .card."
            },
            {
                level: "Medium",
                question: "Which CSS property controls the space inside an element's border?",
                options: ["margin", "padding", "color", "font-size"],
                correct: 1,
                explanation: "Padding controls the space between the content and the border."
            },
            {
                level: "Hard",
                question: "Which CSS type is generally preferred for styling multiple webpages?",
                options: [
                    "Inline CSS",
                    "Internal CSS",
                    "External CSS",
                    "Browser CSS"
                ],
                correct: 2,
                explanation: "External CSS allows multiple pages to share one stylesheet and makes maintenance easier."
            }
        ]
    },


    // ==========================================
    // LESSON 6 - FLEXBOX AND GRID
    // ==========================================

    {
        title: "Flexbox and Grid",

        sections: [
            {
                heading: "1. Understanding CSS Layout",
                body: "CSS layout controls how elements are positioned and arranged on a webpage. A page may contain navigation bars, sidebars, cards, images and content sections. Without a layout system, arranging these elements consistently can become difficult. Flexbox and CSS Grid provide modern ways to create organized and responsive layouts."
            },
            {
                heading: "2. What is Flexbox?",
                body: "Flexbox, also called the Flexible Box Layout, is a one-dimensional layout system. It arranges items along a main axis, which can be horizontal or vertical. Flexbox is useful when arranging navigation links, buttons, menus and groups of cards in a row or column."
            },
            {
                heading: "3. Flex Container and Flex Items",
                body: "When an element receives display: flex, it becomes a flex container. Its direct children become flex items. The flex-direction property decides whether items are arranged in a row or column. The default direction is row.",
                code: `.container {
    display: flex;
    flex-direction: row;
    gap: 20px;
}`
            },
            {
                heading: "4. Main Flexbox Alignment Properties",
                body: "The justify-content property controls the distribution of items along the main axis. The align-items property controls alignment along the cross axis. The gap property creates space between flex items. Common justify-content values include center, space-between, space-around and flex-start.",
                code: `.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}`
            },
            {
                heading: "5. What is CSS Grid?",
                body: "CSS Grid is a two-dimensional layout system. It allows developers to arrange elements using both rows and columns. Grid is useful for dashboards, product galleries, image collections and complete page layouts. It provides precise control over the size and placement of grid items."
            },
            {
                heading: "6. Creating a Grid Layout",
                body: "The display: grid declaration creates a grid container. The grid-template-columns property defines the columns. The grid-template-rows property defines rows. The gap property controls spacing between grid items. The fr unit represents a fraction of the available space.",
                code: `.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}`
            },
            {
                heading: "7. Responsive Grid",
                body: "A responsive grid can automatically adjust the number of columns depending on the available width. The repeat() and minmax() functions help create flexible layouts. The auto-fit keyword allows the browser to fit as many columns as possible into the available space.",
                code: `.container {
    display: grid;
    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}`
            },
            {
                heading: "8. Flexbox vs Grid",
                body: "Flexbox is mainly designed for one-dimensional layouts, such as a horizontal navigation bar or a vertical group of buttons. Grid is designed for two-dimensional layouts involving rows and columns, such as a dashboard. They are not competitors; both can be used together in the same webpage."
            },
            {
                heading: "9. Practical Example",
                body: "A DEVORAA dashboard can use Grid to arrange course cards into columns. Inside each course card, Flexbox can arrange the heading and other elements. Using both layout systems together creates a flexible and organized interface."
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "Flexbox is mainly which type of layout system?",
                options: [
                    "One-dimensional",
                    "Two-dimensional",
                    "Three-dimensional",
                    "Database layout"
                ],
                correct: 0,
                explanation: "Flexbox arranges items along one main dimension."
            },
            {
                level: "Easy",
                question: "CSS Grid is mainly designed for which type of layout?",
                options: [
                    "Only text formatting",
                    "Two-dimensional layouts",
                    "Database storage",
                    "Creating HTML tags"
                ],
                correct: 1,
                explanation: "CSS Grid arranges items using rows and columns."
            },
            {
                level: "Medium",
                question: "Which property creates a flex container?",
                options: [
                    "position: flex",
                    "display: flex",
                    "flex: display",
                    "layout: flex"
                ],
                correct: 1,
                explanation: "The display: flex declaration creates a flex container."
            },
            {
                level: "Medium",
                question: "Which property defines the columns in a CSS Grid layout?",
                options: [
                    "grid-template-columns",
                    "flex-direction",
                    "justify-content",
                    "font-size"
                ],
                correct: 0,
                explanation: "grid-template-columns defines the number and size of grid columns."
            },
            {
                level: "Hard",
                question: "Which layout system is generally suitable for a dashboard containing rows and columns of cards?",
                options: ["CSS Grid", "Text decoration", "Inline styling only", "HTML headings"],
                correct: 0,
                explanation: "CSS Grid is well suited for two-dimensional dashboard layouts."
            }
        ]
    },


    // ==========================================
    // LESSON 7 - RESPONSIVE WEB DESIGN
    // ==========================================

    {
        title: "Responsive Web Design",

        sections: [
            {
                heading: "1. What is Responsive Web Design?",
                body: "Responsive Web Design is an approach to creating websites that adapt to different screen sizes and devices. A responsive website should remain usable on mobile phones, tablets, laptops and desktop monitors. Instead of creating a completely separate website for every device, developers use flexible layouts, responsive images and CSS media queries."
            },
            {
                heading: "2. Why Responsive Design is Important",
                body: "People access websites using devices with different screen sizes and resolutions. A fixed-width layout designed only for a desktop may become difficult to use on a mobile phone. Responsive design helps content fit the available screen, improves navigation and makes the website easier to use."
            },
            {
                heading: "3. Viewport Meta Tag",
                body: "The viewport meta tag tells mobile browsers how to control the dimensions and scaling of a webpage. Without it, a mobile browser may render a page using a wider virtual viewport, making the content appear too small. The width=device-width setting makes the viewport width match the device width.",
                code: `<meta name="viewport"
content="width=device-width, initial-scale=1.0">`
            },
            {
                heading: "4. Flexible Layouts",
                body: "Flexible layouts use relative units such as percentages, rem and flexible grid units instead of relying entirely on fixed pixel dimensions. For example, a container with width: 90% can adapt to the available screen width. CSS Grid and Flexbox also help elements rearrange naturally when the viewport changes.",
                code: `.container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
}`
            },
            {
                heading: "5. Responsive Images",
                body: "Images should fit within their containers without overflowing the layout. The max-width: 100% rule allows an image to shrink when its container becomes narrower. The height: auto rule preserves the original image proportions.",
                code: `img {
    max-width: 100%;
    height: auto;
}`
            },
            {
                heading: "6. What are Media Queries?",
                body: "A media query allows CSS rules to apply only when certain conditions are met, such as a particular viewport width. Developers commonly use media queries to change column counts, spacing, font sizes and navigation layouts for smaller screens.",
                code: `/* Default layout */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* Smaller screens */
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
}`
            },
            {
                heading: "7. Mobile-First Design",
                body: "Mobile-first design means starting with a layout suitable for smaller screens and then adding styles for larger screens. This approach encourages developers to focus on essential content and functionality first. Larger screen layouts can then introduce additional columns, wider spacing and more complex arrangements."
            },
            {
                heading: "8. Common Responsive Design Problems",
                body: "Common problems include horizontal scrolling, text that is too small, images overflowing their containers and buttons that are difficult to use on touchscreens. Testing the website at different viewport widths helps identify these problems. Browser developer tools can simulate different screen dimensions."
            },
            {
                heading: "9. Practical Example",
                body: "Imagine a DEVORAA course page that displays three course cards in a row on a desktop. On a mobile phone, those cards can change to a single column. A media query can make this change without creating a separate page for mobile users."
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What is Responsive Web Design?",
                options: [
                    "Design for only desktop computers",
                    "Design that adapts to different screen sizes",
                    "A database design method",
                    "A programming language"
                ],
                correct: 1,
                explanation: "Responsive design adapts webpage layouts to different device and viewport sizes."
            },
            {
                level: "Easy",
                question: "Which HTML tag helps mobile browsers set the correct viewport?",
                options: ["title", "meta viewport", "footer", "script"],
                correct: 1,
                explanation: "The viewport meta tag helps the page use the device's viewport dimensions."
            },
            {
                level: "Medium",
                question: "Which CSS feature applies styles based on screen conditions?",
                options: ["Media queries", "HTML comments", "Database queries", "JavaScript alerts"],
                correct: 0,
                explanation: "Media queries apply CSS rules when specified conditions are satisfied."
            },
            {
                level: "Medium",
                question: "Which CSS rule helps an image stay within its container?",
                options: [
                    "max-width: 100%",
                    "width: 2000px",
                    "position: fixed",
                    "display: none"
                ],
                correct: 0,
                explanation: "max-width: 100% prevents an image from exceeding the width of its container."
            },
            {
                level: "Hard",
                question: "What is the main idea of mobile-first design?",
                options: [
                    "Design for large screens first",
                    "Start with small screens and enhance for larger screens",
                    "Remove all images from mobile pages",
                    "Create a separate programming language"
                ],
                correct: 1,
                explanation: "Mobile-first design begins with smaller screens and progressively enhances the layout."
            }
        ]
    },


    // ==========================================
    // LESSON 8 - CSS VARIABLES
    // ==========================================

    {
        title: "CSS Variables",

        sections: [
            {
                heading: "1. What are CSS Variables?",
                body: "CSS variables, officially called custom properties, allow developers to store reusable values in a stylesheet. Instead of repeating the same colour, spacing or font value in many places, developers can define it once and reuse it. This makes a website easier to maintain and update."
            },
            {
                heading: "2. Declaring a CSS Variable",
                body: "A custom property name begins with two hyphens. Variables are commonly declared inside the :root selector when they need to be available throughout the document. The :root selector represents the document's root element.",
                code: `:root {
    --primary-color: #222222;
    --text-color: #444444;
    --main-spacing: 20px;
}`
            },
            {
                heading: "3. Using the var() Function",
                body: "The var() function reads the value of a CSS custom property. It is written inside a CSS declaration wherever the variable's value is required. This allows the same variable to be reused across multiple selectors.",
                code: `:root {
    --primary-color: #222222;
}

h1 {
    color: var(--primary-color);
}

button {
    background-color: var(--primary-color);
}`
            },
            {
                heading: "4. Why CSS Variables are Useful",
                body: "CSS variables reduce repeated values and make design changes easier. Suppose a website uses the same primary colour in its header, buttons and links. If that colour changes, updating one variable can update all elements that use it. Variables are also useful for maintaining consistent spacing, typography and border values."
            },
            {
                heading: "5. Providing a Fallback Value",
                body: "The var() function can include a fallback value. A fallback is used when the requested custom property is unavailable or invalid. This can help make styles more reliable.",
                code: `.card {
    color: var(--text-color, #333333);
}`
            },
            {
                heading: "6. Local Scope and Global Scope",
                body: "A variable declared inside :root is generally available throughout the document. A variable declared inside a specific selector is available to that element and its descendants through CSS inheritance. This allows developers to define shared design values globally and component-specific values locally.",
                code: `:root {
    --main-color: navy;
}

.card {
    --card-padding: 16px;
    padding: var(--card-padding);
    color: var(--main-color);
}`
            },
            {
                heading: "7. Updating Variables",
                body: "Custom properties can be overridden in another CSS rule. For example, a dark theme can assign different values to colour variables. The elements using those variables will then use the updated values when the new rules apply.",
                code: `:root {
    --background: white;
    --text: #222;
}

.dark-theme {
    --background: #222;
    --text: white;
}

body {
    background: var(--background);
    color: var(--text);
}`
            },
            {
                heading: "8. CSS Variables in DEVORAA",
                body: "A learning platform may use the same background colour, text colour, border colour and spacing throughout its pages. Storing these values as CSS variables creates a consistent design system. It also makes it easier to adjust the appearance of the entire website without searching through every CSS rule."
            },
            {
                heading: "9. Best Practices",
                body: "Use meaningful variable names such as --primary-color and --card-spacing. Keep commonly reused design values in :root. Use local variables when a value belongs to a particular component. Avoid creating variables for values that are used only once unless doing so improves readability."
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What are CSS variables also called?",
                options: [
                    "Custom properties",
                    "HTML elements",
                    "JavaScript functions",
                    "Database records"
                ],
                correct: 0,
                explanation: "CSS variables are officially called CSS custom properties."
            },
            {
                level: "Easy",
                question: "Which symbol begins a CSS custom property name?",
                options: ["#", ".", "--", "$"],
                correct: 2,
                explanation: "CSS custom property names begin with two hyphens."
            },
            {
                level: "Medium",
                question: "Which function is used to access a CSS variable?",
                options: ["get()", "var()", "value()", "read()"],
                correct: 1,
                explanation: "The var() function reads the value of a custom property."
            },
            {
                level: "Medium",
                question: "Which selector is commonly used to declare global CSS variables?",
                options: [".class", "#id", ":root", "::before"],
                correct: 2,
                explanation: "The :root selector is commonly used for document-wide custom properties."
            },
            {
                level: "Hard",
                question: "What is the purpose of a fallback value in var()?",
                options: [
                    "To delete a CSS rule",
                    "To provide an alternative value when the variable cannot be used",
                    "To create an HTML element",
                    "To execute JavaScript"
                ],
                correct: 1,
                explanation: "A fallback provides an alternative value when the custom property is missing or invalid."
            }
        ]
    },


    // ==========================================
    // LESSON 9 - BUILDING A THREE-PAGE WEBSITE
    // ==========================================

    {
        title: "Building a Three-Page Website",

        sections: [
            {
                heading: "1. Introduction to a Multi-Page Website",
                body: "A multi-page website contains multiple HTML pages connected through navigation links. Each page provides different information or functionality. For example, a simple learning website may contain a Home page, an About page and a Courses page. Separating content into pages makes navigation and organization easier."
            },
            {
                heading: "2. Planning the Website",
                body: "Before writing code, identify the purpose of the website and decide which pages are required. Determine what information each page should contain and how users will move between pages. A simple navigation structure helps visitors find information without confusion."
            },
            {
                heading: "3. Project Folder Structure",
                body: "A project should keep related files organized. HTML files can be stored in the main project folder, CSS files can be placed inside a css folder, and images can be placed inside an images folder. This structure makes it easier to locate and maintain files.",
                code: `my-website/
|
|-- index.html
|-- about.html
|-- courses.html
|
|-- css/
|   |-- style.css
|
|-- images/
    |-- logo.png`
            },
            {
                heading: "4. Creating the Home Page",
                body: "The home page is commonly the main entry point of a website. It introduces the website and provides links to important sections. The file is commonly named index.html. It can contain a heading, introductory paragraph, navigation menu and other important information.",
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="courses.html">Courses</a>
    </nav>

    <main>
        <h1>Welcome to DEVORAA</h1>
        <p>Start learning web development.</p>
    </main>
</body>
</html>`
            },
            {
                heading: "5. Creating the About Page",
                body: "The About page explains the purpose of the website, its background and the services it provides. It should use the same navigation structure as the other pages so that users can move between sections consistently.",
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="courses.html">Courses</a>
    </nav>

    <main>
        <h1>About DEVORAA</h1>
        <p>DEVORAA is a learning platform.</p>
    </main>
</body>
</html>`
            },
            {
                heading: "6. Creating the Courses Page",
                body: "The Courses page displays the learning options available on the website. It may contain course names, short descriptions and links to course details. Reusing the same CSS file across all pages helps maintain a consistent visual appearance.",
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Courses</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="courses.html">Courses</a>
    </nav>

    <main>
        <h1>Our Courses</h1>
        <ul>
            <li>Web Foundations</li>
            <li>JavaScript</li>
            <li>React Development</li>
        </ul>
    </main>
</body>
</html>`
            },
            {
                heading: "7. Connecting Pages with Links",
                body: "The a element connects one page to another. Its href attribute contains the path of the destination page. When a user clicks the link, the browser navigates to that page. The navigation links should be tested to ensure that every destination exists and works correctly.",
                code: `<a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="courses.html">Courses</a>`
            },
            {
                heading: "8. Sharing a Common Stylesheet",
                body: "A common external CSS file allows multiple pages to share the same typography, colours, navigation design and spacing. Every page can connect to the same stylesheet using the link element. If the common design needs to change, updating one CSS file can update all connected pages.",
                code: `/* style.css */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

nav {
    display: flex;
    gap: 20px;
}

a {
    color: #222;
    text-decoration: none;
}`
            },
            {
                heading: "9. Testing and Final Checks",
                body: "After creating the pages, open the home page in a browser and test every navigation link. Check that the stylesheet loads correctly, headings and content are visible, and there are no broken images or missing files. Also test the layout at different screen sizes. A website should be checked before it is shared with users."
            },
            {
                heading: "10. What You Have Built",
                body: "By completing this project, you have used HTML to create multiple pages, links to connect those pages and CSS to maintain a common design. These are the basic building blocks of a multi-page website. The same ideas can be extended later with JavaScript, forms, backend services and databases."
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What is a multi-page website?",
                options: [
                    "A website containing only one section",
                    "A website containing multiple connected pages",
                    "A database application only",
                    "A website without navigation"
                ],
                correct: 1,
                explanation: "A multi-page website contains multiple pages connected through navigation links."
            },
            {
                level: "Easy",
                question: "Which filename is commonly used for the main website page?",
                options: ["index.html", "style.css", "image.png", "server.js"],
                correct: 0,
                explanation: "index.html is commonly used as the main entry page of a website."
            },
            {
                level: "Medium",
                question: "Which HTML element connects one page to another?",
                options: ["img", "a", "table", "input"],
                correct: 1,
                explanation: "The a element creates hyperlinks using the href attribute."
            },
            {
                level: "Medium",
                question: "Why can multiple HTML pages use the same external CSS file?",
                options: [
                    "To store database records",
                    "To maintain a consistent design",
                    "To replace all HTML elements",
                    "To automatically create new pages"
                ],
                correct: 1,
                explanation: "A shared stylesheet keeps the design consistent and reduces repeated styling code."
            },
            {
                level: "Hard",
                question: "After building a three-page website, what is an important testing step?",
                options: [
                    "Delete the navigation links",
                    "Check that all page links and styles work correctly",
                    "Rename every HTML tag",
                    "Remove the stylesheet"
                ],
                correct: 1,
                explanation: "Testing navigation, styles and page content helps identify broken links and missing resources."
            }
        ]
    }

];
