
export const co2Topics = [

    // ==========================================
    // LESSON 1 - JAVASCRIPT FUNDAMENTALS
    // ==========================================

    {
        title: "JavaScript Fundamentals",

        sections: [
            {
                heading: "What is JavaScript?",
                body: "JavaScript is a programming language used to make websites interactive. HTML creates the page structure and CSS controls its appearance. JavaScript makes things happen when a user clicks a button, enters information or interacts with a page. For example, when you click a button and a message appears without reloading the page, JavaScript can handle that action."
            },
            {
                heading: "Where Does JavaScript Run?",
                body: "JavaScript commonly runs inside a web browser. Browsers such as Chrome have a JavaScript engine that reads and executes the code. JavaScript can also run outside the browser using environments such as Node.js."
            },
            {
                heading: "Adding JavaScript to HTML",
                body: "The script element connects JavaScript to an HTML page. You can write JavaScript directly inside the script element or keep it in a separate .js file. Keeping it in a separate file makes a project easier to organize.",
                code: `<!-- HTML file -->
<h1 id="heading">Welcome</h1>

<button onclick="changeText()">
    Click Me
</button>

<script src="script.js"></script>

// script.js
function changeText() {
    document.getElementById("heading").textContent =
        "Hello from JavaScript!";
}`
            },
            {
                heading: "Your First JavaScript Program",
                body: "The console.log() statement displays information in the browser console. It is commonly used to check values and understand what a program is doing while developing it.",
                code: `console.log("Hello, JavaScript!");

console.log(10 + 20);

// Output:
// Hello, JavaScript!
// 30`
            },
            {
                heading: "JavaScript Statements and Comments",
                body: "A statement is an instruction that JavaScript executes. Comments are notes written for people reading the code. Single-line comments start with // and multi-line comments are written between /* and */.",
                code: `// This is a single-line comment

/*
   This is a
   multi-line comment
*/

let marks = 85;
console.log(marks);`
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What is the main purpose of JavaScript in a website?",
                options: [
                    "To create only the page structure",
                    "To add behaviour and interactivity",
                    "To store images",
                    "To replace the browser"
                ],
                correct: 1,
                explanation: "JavaScript handles actions and behaviour, such as button clicks and form interactions."
            },
            {
                level: "Easy",
                question: "Which HTML element is used to connect an external JavaScript file?",
                options: ["<style>", "<link>", "<script>", "<body>"],
                correct: 2,
                explanation: "The script element loads and executes JavaScript code."
            },
            {
                level: "Medium",
                question: "What does console.log() do?",
                options: [
                    "Displays information in the console",
                    "Changes the page background",
                    "Creates an HTML element",
                    "Deletes a variable"
                ],
                correct: 0,
                explanation: "console.log() prints values in the developer console, which helps during testing."
            },
            {
                level: "Hard",
                question: "What will this code display?\n\nconsole.log(5 + 3 * 2);",
                options: ["16", "13", "11", "10"],
                correct: 2,
                explanation: "Multiplication happens before addition. So 3 × 2 = 6, then 5 + 6 = 11."
            },
            {
                level: "Difficult",
                question: "A button should display a message when clicked. Which technology handles this behaviour?",
                options: [
                    "HTML alone",
                    "CSS alone",
                    "JavaScript",
                    "The title element"
                ],
                correct: 2,
                explanation: "JavaScript can listen for a click and update the page when the user interacts with the button."
            }
        ]
    },

    // ==========================================
    // LESSON 2 - VARIABLES AND DATA TYPES
    // ==========================================

    {
        title: "Variables and Data Types",

        sections: [
            {
                heading: "What is a Variable?",
                body: "A variable is a named place used to hold a value while a program runs. Think of a student marks register: you need a name to identify whose marks you are storing. In JavaScript, a variable gives a name to a value so you can use it later.",
                code: `let studentName = "Harsha";
let marks = 85;

console.log(studentName);
console.log(marks);`
            },
            {
                heading: "let, const and var",
                body: "JavaScript provides three keywords for declaring variables. Use let when a value may change. Use const when you do not intend to reassign the variable. var is an older way of declaring variables and is generally avoided in modern JavaScript.",
                code: `let score = 50;
score = 75;

const college = "DEVORAA";

console.log(score);
console.log(college);`
            },
            {
                heading: "JavaScript Data Types",
                body: "A data type describes the kind of value stored in a variable. Common primitive types include String for text, Number for numeric values, Boolean for true or false, Undefined for a declared variable without a value, and Null for an intentionally empty value.",
                code: `let name = "Ravi";       // String
let age = 20;             // Number
let passed = true;        // Boolean
let result;               // Undefined
let selectedCourse = null; // Null

console.log(typeof name);
console.log(typeof age);
console.log(typeof passed);`
            },
            {
                heading: "Checking a Data Type",
                body: "The typeof operator tells you the type of a value. It is useful when checking data received from forms, functions or other parts of a program. One detail to remember: typeof null returns \"object\" because of a historical JavaScript behaviour.",
                code: `let price = 250;
let product = "Keyboard";

console.log(typeof price);   // number
console.log(typeof product); // string
console.log(typeof true);    // boolean`
            },
            {
                heading: "Type Conversion",
                body: "Sometimes a value needs to be converted into another type. For example, information entered in an HTML input usually comes in as text. Number() converts suitable text into a number. String() converts a value into text.",
                code: `let inputValue = "25";

let age = Number(inputValue);

console.log(age + 5); // 30

let marks = 90;
let textMarks = String(marks);

console.log(textMarks); // "90"`
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "Which keyword declares a variable whose value can be reassigned?",
                options: ["const", "let", "static", "fixed"],
                correct: 1,
                explanation: "let allows a variable to be assigned a new value."
            },
            {
                level: "Easy",
                question: "Which data type represents true or false?",
                options: ["String", "Number", "Boolean", "Null"],
                correct: 2,
                explanation: "Boolean has two values: true and false."
            },
            {
                level: "Medium",
                question: "What is the output?\n\nlet x = 10;\nx = 20;\nconsole.log(x);",
                options: ["10", "20", "undefined", "Error"],
                correct: 1,
                explanation: "The value of x is reassigned from 10 to 20."
            },
            {
                level: "Hard",
                question: "What is the output?\n\nconsole.log(typeof \"DEVORAA\");",
                options: ["number", "boolean", "string", "object"],
                correct: 2,
                explanation: "DEVORAA is written inside quotation marks, so its type is string."
            },
            {
                level: "Difficult",
                question: "What is the output?\n\nlet a = \"10\";\nlet b = Number(a);\nconsole.log(b + 5);",
                options: ["105", "15", "Error", "NaN"],
                correct: 1,
                explanation: "Number(a) converts the text \"10\" into the number 10. Adding 5 produces 15."
            }
        ]
    },

    // ==========================================
    // LESSON 3 - FUNCTIONS AND CALLBACKS
    // ==========================================

    {
        title: "Functions and Callbacks",

        sections: [
            {
                heading: "What is a Function?",
                body: "A function is a reusable block of code that performs a particular task. Instead of writing the same instructions again and again, you can put them inside a function and call it whenever needed. For example, a function can calculate a student's total marks.",
                code: `function calculateTotal() {
    let marks = 80 + 90 + 85;
    console.log(marks);
}

calculateTotal();`
            },
            {
                heading: "Parameters and Arguments",
                body: "A parameter is a variable written in a function definition. An argument is the actual value supplied when the function is called. In this example, a and b are parameters, while 10 and 20 are arguments.",
                code: `function add(a, b) {
    console.log(a + b);
}

add(10, 20); // 30
add(5, 15);  // 20`
            },
            {
                heading: "The return Statement",
                body: "A function can send a result back using return. This is useful when another part of the program needs to use the calculated value. Once return is executed, the function stops running.",
                code: `function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);

console.log(result); // 20`
            },
            {
                heading: "Arrow Functions",
                body: "Arrow functions provide a shorter way to write function expressions. They are commonly used in modern JavaScript, especially when working with arrays and callbacks.",
                code: `// Regular function
function greet(name) {
    return "Hello " + name;
}

// Arrow function
const greetUser = (name) => {
    return "Hello " + name;
};

console.log(greetUser("Ravi"));`
            },
            {
                heading: "What is a Callback Function?",
                body: "A callback is a function passed to another function as an argument. The receiving function decides when to call it. For example, you can pass a function that should run after a calculation is completed.",
                code: `function processMarks(marks, callback) {
    let result = marks + 5;
    callback(result);
}

function showResult(value) {
    console.log("Final marks:", value);
}

processMarks(80, showResult);

// Output:
// Final marks: 85`
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What is a function?",
                options: [
                    "A reusable block of code",
                    "A type of CSS selector",
                    "An HTML attribute",
                    "A database"
                ],
                correct: 0,
                explanation: "A function groups instructions so they can be reused whenever required."
            },
            {
                level: "Easy",
                question: "Which keyword sends a value back from a function?",
                options: ["break", "return", "continue", "typeof"],
                correct: 1,
                explanation: "return sends a result back to the code that called the function."
            },
            {
                level: "Medium",
                question: "What is the output?\n\nfunction add(a, b) {\n    return a + b;\n}\nconsole.log(add(4, 6));",
                options: ["46", "10", "4", "6"],
                correct: 1,
                explanation: "The function receives 4 and 6 and returns their sum, which is 10."
            },
            {
                level: "Hard",
                question: "In add(5, 10), what are 5 and 10?",
                options: ["Parameters", "Arguments", "Functions", "Variables declared with let"],
                correct: 1,
                explanation: "The actual values supplied during a function call are called arguments."
            },
            {
                level: "Difficult",
                question: "What is the role of a callback in this code?\n\nfunction run(callback) {\n    callback();\n}",
                options: [
                    "It creates an HTML page",
                    "It passes a function to be called later",
                    "It converts a number into text",
                    "It stops JavaScript"
                ],
                correct: 1,
                explanation: "The callback parameter receives a function, and callback() executes that function."
            }
        ]
    },

    // ==========================================
    // LESSON 4 - HIGHER ORDER FUNCTIONS
    // ==========================================

    {
        title: "Higher Order Functions",

        sections: [
            {
                heading: "What is a Higher Order Function?",
                body: "A higher order function is a function that takes another function as an argument, returns a function, or does both. You have already seen this idea in callbacks. JavaScript arrays provide useful higher order methods such as map(), filter() and reduce()."
            },
            {
                heading: "The map() Method",
                body: "map() goes through every item in an array and creates a new array using the result returned by your callback. The original array remains unchanged. Use it when you want to transform each item, such as converting prices or marks.",
                code: `const marks = [60, 70, 80, 90];

const updatedMarks = marks.map(function(mark) {
    return mark + 5;
});

console.log(updatedMarks);

// [65, 75, 85, 95]`
            },
            {
                heading: "The filter() Method",
                body: "filter() checks each item and keeps only the items for which the callback returns true. It is useful when you need to select records that meet a condition, such as students who passed an examination.",
                code: `const marks = [35, 80, 25, 90, 60];

const passed = marks.filter(function(mark) {
    return mark >= 40;
});

console.log(passed);

// [80, 90, 60]`
            },
            {
                heading: "The reduce() Method",
                body: "reduce() processes an array and combines its items into one final result. It is often used to calculate totals, such as the total price of items in a shopping cart. The second argument is the initial accumulator value.",
                code: `const prices = [100, 200, 300];

const total = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log(total); // 600`
            },
            {
                heading: "Choosing the Right Method",
                body: "Use map() when every item needs to be transformed. Use filter() when you need only matching items. Use reduce() when you need to combine many values into one result. These methods are common in real applications because they make array operations easier to read."
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "Which method creates a new array by transforming each item?",
                options: ["filter()", "map()", "reduce()", "push()"],
                correct: 1,
                explanation: "map() applies a callback to every item and creates a new array from the returned values."
            },
            {
                level: "Easy",
                question: "Which method selects items that satisfy a condition?",
                options: ["map()", "filter()", "join()", "pop()"],
                correct: 1,
                explanation: "filter() keeps the items for which its callback returns true."
            },
            {
                level: "Medium",
                question: "What is the output?\n\n[1, 2, 3].map(n => n * 2);",
                options: ["[1, 2, 3]", "[2, 4, 6]", "[3, 4, 5]", "6"],
                correct: 1,
                explanation: "map() multiplies each item by 2 and returns [2, 4, 6]."
            },
            {
                level: "Hard",
                question: "What is the output?\n\n[10, 20, 30].filter(n => n > 15);",
                options: ["[10]", "[20, 30]", "[10, 20]", "[30]"],
                correct: 1,
                explanation: "Only 20 and 30 satisfy the condition n > 15."
            },
            {
                level: "Difficult",
                question: "What does this code return?\n\n[2, 3, 4].reduce((total, n) => total + n, 0);",
                options: ["4", "9", "24", "[2, 3, 4]"],
                correct: 1,
                explanation: "reduce() adds 2, 3 and 4 to the initial value 0, producing 9."
            }
        ]
    },

    // ==========================================
    // LESSON 5 - PROMISES
    // ==========================================

    {
        title: "Promises",

        sections: [
            {
                heading: "Why Do We Need Promises?",
                body: "Some JavaScript operations take time. For example, downloading information from a server or reading a file may not finish immediately. A Promise helps represent the result of an operation that will finish in the future. It lets the rest of your program continue without waiting for that operation to finish."
            },
            {
                heading: "The Three Promise States",
                body: "A Promise has three possible states. Pending means the operation is still running. Fulfilled means it completed successfully. Rejected means it failed. A settled Promise is either fulfilled or rejected, and it does not change to another state afterwards."
            },
            {
                heading: "Creating a Promise",
                body: "A Promise is created using the Promise constructor. Its executor function receives resolve and reject. Call resolve when the operation succeeds and reject when it fails.",
                code: `const result = new Promise((resolve, reject) => {
    let marks = 85;

    if (marks >= 40) {
        resolve("Student passed");
    } else {
        reject("Student failed");
    }
});`
            },
            {
                heading: "Handling a Promise with then()",
                body: "The then() method handles a fulfilled Promise. The callback receives the value passed to resolve(). This is where you can use the successful result.",
                code: `const result = Promise.resolve("Data received");

result.then(function(value) {
    console.log(value);
});

// Output:
// Data received`
            },
            {
                heading: "Handling Errors with catch()",
                body: "The catch() method handles a rejected Promise or an error passed down the Promise chain. It gives you a place to respond to failures instead of leaving them unhandled.",
                code: `const result = Promise.reject("Network error");

result
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log("Error:", error);
    });`
            },
            {
                heading: "Using finally()",
                body: "finally() runs after a Promise settles, whether it succeeds or fails. It is useful for cleanup tasks, such as hiding a loading indicator after a request finishes.",
                code: `Promise.resolve("Completed")
    .then(value => console.log(value))
    .catch(error => console.log(error))
    .finally(() => {
        console.log("Operation finished");
    });`
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What does a Promise represent?",
                options: [
                    "A future result of an asynchronous operation",
                    "An HTML element",
                    "A CSS property",
                    "A database table"
                ],
                correct: 0,
                explanation: "A Promise represents an operation that may complete successfully or fail in the future."
            },
            {
                level: "Easy",
                question: "Which method handles a rejected Promise?",
                options: ["then()", "catch()", "map()", "filter()"],
                correct: 1,
                explanation: "catch() handles rejection and errors in a Promise chain."
            },
            {
                level: "Medium",
                question: "Which function marks a Promise as successfully completed?",
                options: ["reject()", "resolve()", "finally()", "catch()"],
                correct: 1,
                explanation: "resolve() fulfills a Promise with the supplied value."
            },
            {
                level: "Hard",
                question: "What are the three Promise states?",
                options: [
                    "Start, Stop, Pause",
                    "Pending, Fulfilled, Rejected",
                    "Open, Closed, Saved",
                    "True, False, Null"
                ],
                correct: 1,
                explanation: "A Promise starts pending and eventually becomes fulfilled or rejected."
            },
            {
                level: "Difficult",
                question: "When does finally() execute in a Promise chain?",
                options: [
                    "Only after success",
                    "Only after failure",
                    "After the Promise settles, whether fulfilled or rejected",
                    "Before the Promise starts"
                ],
                correct: 2,
                explanation: "finally() runs after settlement and does not depend on whether the Promise succeeded or failed."
            }
        ]
    },

    // ==========================================
    // LESSON 6 - ASYNC AND AWAIT
    // ==========================================

    {
        title: "Async and Await",

        sections: [
            {
                heading: "What is Async Programming?",
                body: "An asynchronous operation can take time to finish without blocking the rest of the program. Network requests are a common example. JavaScript uses Promises to represent these operations. async and await provide a cleaner way to write code that works with Promises."
            },
            {
                heading: "The async Keyword",
                body: "The async keyword is written before a function declaration. An async function always returns a Promise. If you return a normal value from it, JavaScript wraps that value in a fulfilled Promise.",
                code: `async function getMessage() {
    return "Hello from async";
}

getMessage().then(message => {
    console.log(message);
});`
            },
            {
                heading: "The await Keyword",
                body: "await is used inside an async function to wait for a Promise to settle before moving to the next line of that function. It makes asynchronous code easier to read because the steps appear in the order they happen.",
                code: `function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Student data received");
        }, 1000);
    });
}

async function showData() {
    const result = await getData();
    console.log(result);
}

showData();`
            },
            {
                heading: "Handling Errors with try and catch",
                body: "An awaited Promise can reject. Use try and catch to handle that error. Put the operation inside the try block and the error-handling code inside catch. This prevents a rejected request from stopping your intended error-handling flow.",
                code: `async function loadData() {
    try {
        const result = await Promise.reject("Request failed");
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

loadData();`
            },
            {
                heading: "Running Operations Together",
                body: "If two independent tasks do not depend on each other, you can start them together using Promise.all(). It fulfills when all supplied Promises fulfill. If one rejects, the Promise returned by Promise.all() rejects.",
                code: `async function loadBoth() {
    const first = Promise.resolve("First result");
    const second = Promise.resolve("Second result");

    const results = await Promise.all([first, second]);

    console.log(results);
}

loadBoth();`
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "Which keyword declares an asynchronous function?",
                options: ["await", "async", "return", "then"],
                correct: 1,
                explanation: "The async keyword declares an asynchronous function."
            },
            {
                level: "Easy",
                question: "What does await do?",
                options: [
                    "Waits for a Promise to settle inside an async function",
                    "Creates a CSS rule",
                    "Deletes a Promise",
                    "Stops the browser"
                ],
                correct: 0,
                explanation: "await pauses the execution of its surrounding async function until the Promise settles."
            },
            {
                level: "Medium",
                question: "What does an async function always return?",
                options: ["A CSS object", "A Promise", "An HTML element", "A Boolean only"],
                correct: 1,
                explanation: "An async function always returns a Promise, even when its return value is a normal value."
            },
            {
                level: "Hard",
                question: "Which structure is commonly used to handle errors from await?",
                options: [
                    "if and else",
                    "try and catch",
                    "for and while",
                    "map and filter"
                ],
                correct: 1,
                explanation: "try and catch handle errors from rejected Promises and other exceptions."
            },
            {
                level: "Difficult",
                question: "What does Promise.all() do?",
                options: [
                    "Runs only the first Promise",
                    "Waits for all supplied Promises to fulfill, or rejects if one rejects",
                    "Converts Promises into HTML",
                    "Deletes all pending Promises"
                ],
                correct: 1,
                explanation: "Promise.all() combines multiple Promises and fulfills with their results when all of them fulfill."
            }
        ]
    },

    // ==========================================
    // LESSON 7 - FETCH API
    // ==========================================

    {
        title: "Fetch API",

        sections: [
            {
                heading: "What is the Fetch API?",
                body: "The Fetch API allows JavaScript to send network requests and receive responses. For example, a weather application can request current weather information from a server and display the result. fetch() returns a Promise that fulfills with a Response object when a response is received."
            },
            {
                heading: "Making a GET Request",
                body: "A GET request asks a server to provide information. The fetch() function can send this request using a URL. Once the response arrives, you can read its body using methods such as json().",
                code: `async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    console.log(users);
}

getUsers();`
            },
            {
                heading: "Understanding the Response",
                body: "fetch() gives you a Response object, not the final data directly. The json() method reads the response body and parses JSON data into JavaScript values. Because reading the body is asynchronous, json() also returns a Promise."
            },
            {
                heading: "Checking for Errors",
                body: "A common mistake is assuming fetch() rejects for every HTTP error. It generally rejects for network failures, but an HTTP response such as 404 still fulfills the fetch Promise. Check response.ok to see whether the status indicates success.",
                code: `async function loadUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Unable to load users");
        }

        const users = await response.json();
        console.log(users);

    } catch (error) {
        console.log(error.message);
    }
}

loadUsers();`
            },
            {
                heading: "Sending Data with POST",
                body: "A POST request is commonly used to send information to a server. The request options can include a method, headers and a body. JSON.stringify() converts a JavaScript object into JSON text before sending it.",
                code: `async function createPost() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Learning JavaScript",
                body: "My first post",
                userId: 1
            })
        }
    );

    const result = await response.json();
    console.log(result);
}

createPost();`
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What is the purpose of the Fetch API?",
                options: [
                    "To send network requests",
                    "To style HTML elements",
                    "To declare variables",
                    "To create CSS animations"
                ],
                correct: 0,
                explanation: "Fetch allows JavaScript to request and send data over a network."
            },
            {
                level: "Easy",
                question: "Which method reads a response body as JSON?",
                options: ["response.textColor()", "response.json()", "response.fetch()", "response.html()"],
                correct: 1,
                explanation: "response.json() reads and parses the response body as JSON."
            },
            {
                level: "Medium",
                question: "Which HTTP method is commonly used to retrieve data?",
                options: ["POST", "DELETE", "GET", "PATCH"],
                correct: 2,
                explanation: "GET is used to request information from a server."
            },
            {
                level: "Hard",
                question: "Why should you check response.ok?",
                options: [
                    "To check whether the HTTP response indicates success",
                    "To change the response into CSS",
                    "To stop the browser",
                    "To create a Promise"
                ],
                correct: 0,
                explanation: "response.ok indicates whether the HTTP status is in the successful range."
            },
            {
                level: "Difficult",
                question: "Why is JSON.stringify() used in this POST request?\n\nbody: JSON.stringify({ name: \"Ravi\" })",
                options: [
                    "To convert an object into JSON text",
                    "To convert JSON into HTML",
                    "To create a CSS class",
                    "To execute a callback"
                ],
                correct: 0,
                explanation: "The request body is sent as text. JSON.stringify() converts the JavaScript object into JSON text."
            }
        ]
    },

    // ==========================================
    // LESSON 8 - DOM MANIPULATION
    // ==========================================

    {
        title: "DOM Manipulation",

        sections: [
            {
                heading: "What is the DOM?",
                body: "DOM stands for Document Object Model. When a browser loads an HTML page, it creates a tree-like representation of its elements. JavaScript can use this representation to find elements, read their content, change their styles and create new elements."
            },
            {
                heading: "Selecting HTML Elements",
                body: "Before changing a page, JavaScript needs to find the element it wants to work with. getElementById() selects an element using its ID. querySelector() selects the first element matching a CSS selector. querySelectorAll() selects all matching elements.",
                code: `const heading = document.getElementById("title");

const firstButton = document.querySelector("button");

const allParagraphs = document.querySelectorAll("p");`
            },
            {
                heading: "Changing Text and HTML",
                body: "textContent changes or reads the text inside an element. innerHTML reads or sets HTML markup inside an element. Use textContent when displaying plain user-provided text because it does not interpret that text as HTML.",
                code: `const heading = document.getElementById("title");

heading.textContent = "Welcome to DEVORAA";

// Example HTML:
// <h1 id="title">Old heading</h1>`
            },
            {
                heading: "Changing CSS with JavaScript",
                body: "JavaScript can change an element's inline styles using its style property. You can also use classList to add, remove or toggle CSS classes. Using classes is usually better when several style rules need to change together.",
                code: `const box = document.getElementById("box");

box.style.backgroundColor = "lightblue";

box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("selected");`
            },
            {
                heading: "Creating and Removing Elements",
                body: "createElement() creates a new HTML element. appendChild() adds it to another element. remove() removes an element from the page. These methods are useful when displaying items received from a server or entered by a user.",
                code: `const list = document.getElementById("list");

const item = document.createElement("li");

item.textContent = "Learn JavaScript";

list.appendChild(item);

// To remove the item:
item.remove();`
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What is the full form of DOM?",
                options: [
                    "Data Object Management",
                    "Document Object Model",
                    "Digital Output Method",
                    "Document Oriented Machine"
                ],
                correct: 1,
                explanation: "DOM stands for Document Object Model."
            },
            {
                level: "Easy",
                question: "Which method selects an element using its ID?",
                options: [
                    "getElementById()",
                    "createElement()",
                    "appendChild()",
                    "remove()"
                ],
                correct: 0,
                explanation: "getElementById() finds an element with the specified ID."
            },
            {
                level: "Medium",
                question: "Which property changes only the text content of an element?",
                options: ["innerHTML", "textContent", "style", "classList"],
                correct: 1,
                explanation: "textContent sets plain text without interpreting it as HTML markup."
            },
            {
                level: "Hard",
                question: "Which method creates a new HTML element?",
                options: ["querySelector()", "createElement()", "getElementById()", "classList.add()"],
                correct: 1,
                explanation: "document.createElement() creates a new element that can later be added to the page."
            },
            {
                level: "Difficult",
                question: "What happens when this code runs?\n\nconst item = document.createElement('li');\nitem.textContent = 'Home';\ndocument.body.appendChild(item);",
                options: [
                    "A list item containing Home is added to the page",
                    "The entire page is deleted",
                    "A CSS file is created",
                    "The browser closes"
                ],
                correct: 0,
                explanation: "The code creates an li element, gives it text and appends it to the body."
            }
        ]
    },

    // ==========================================
    // LESSON 9 - EVENTS AND LOCAL STORAGE
    // ==========================================

    {
        title: "Events and Local Storage",

        sections: [
            {
                heading: "What is an Event?",
                body: "An event is an action or occurrence that JavaScript can respond to. Examples include clicking a button, typing in an input, submitting a form or loading a page. Events let your application respond to what the user does."
            },
            {
                heading: "Handling Click Events",
                body: "addEventListener() attaches a function to an event. In this example, the message is displayed only when the button is clicked. This is generally preferred over writing JavaScript directly inside an HTML onclick attribute.",
                code: `const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    console.log("Button clicked!");
});`
            },
            {
                heading: "Input and Form Events",
                body: "The input event fires when the value of an input changes. The submit event fires when a form is submitted. You can use preventDefault() on the event object to stop the browser's normal form submission when you want to handle the form using JavaScript.",
                code: `const input = document.getElementById("name");
const form = document.getElementById("myForm");

input.addEventListener("input", function(event) {
    console.log(event.target.value);
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted");
});`
            },
            {
                heading: "What is Local Storage?",
                body: "Local Storage is a browser feature that stores small amounts of data as key-value pairs. The stored information remains available after the page is refreshed and normally stays in that browser until it is cleared. Local Storage stores values as strings."
            },
            {
                heading: "Storing and Reading Data",
                body: "setItem() stores a value, getItem() reads it and removeItem() deletes a particular entry. clear() removes all entries from the current website's local storage. Use JSON.stringify() and JSON.parse() when you need to store and retrieve objects or arrays.",
                code: `// Store data
localStorage.setItem("student", "Ravi");

// Read data
const name = localStorage.getItem("student");

console.log(name);

// Store an object
const student = {
    name: "Ravi",
    marks: 85
};

localStorage.setItem("details", JSON.stringify(student));

// Read the object
const savedStudent = JSON.parse(
    localStorage.getItem("details")
);

console.log(savedStudent.name);`
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What is a JavaScript event?",
                options: [
                    "An action the program can respond to",
                    "A CSS file",
                    "A database",
                    "An HTML heading"
                ],
                correct: 0,
                explanation: "Events represent actions such as clicks, typing and form submission."
            },
            {
                level: "Easy",
                question: "Which method attaches an event listener?",
                options: ["addEventListener()", "createElement()", "localStorage()", "map()"],
                correct: 0,
                explanation: "addEventListener() registers a function to respond to a particular event."
            },
            {
                level: "Medium",
                question: "Which event is commonly used when a button is clicked?",
                options: ["submit", "click", "load", "change"],
                correct: 1,
                explanation: "The click event fires when the user clicks an element."
            },
            {
                level: "Hard",
                question: "Which Local Storage method reads a stored value?",
                options: ["setItem()", "removeItem()", "getItem()", "clear()"],
                correct: 2,
                explanation: "getItem() retrieves the value associated with a given key."
            },
            {
                level: "Difficult",
                question: "Why is JSON.stringify() used before storing an object in Local Storage?",
                options: [
                    "Local Storage stores values as strings",
                    "It converts the object into a button",
                    "It deletes the object",
                    "It creates a new browser tab"
                ],
                correct: 0,
                explanation: "JSON.stringify() converts an object into a string so it can be stored in Local Storage."
            }
        ]
    },

    // ==========================================
    // LESSON 10 - BUILDING A TO-DO APPLICATION
    // ==========================================

    {
        title: "Building a To-Do Application",

        sections: [
            {
                heading: "What Are We Building?",
                body: "A To-Do Application lets a user add tasks, view them, mark them as completed and delete them. This small project brings together the JavaScript concepts from this course: variables, functions, DOM manipulation, events and Local Storage."
            },
            {
                heading: "Create the HTML Structure",
                body: "First, create an input for entering a task, a button for adding it and an unordered list for displaying tasks. JavaScript will use these elements to update the page.",
                code: `<!DOCTYPE html>
<html>
<head>
    <title>To-Do List</title>
</head>
<body>

    <h1>My Tasks</h1>

    <input id="taskInput" type="text"
        placeholder="Enter a task">

    <button id="addButton">Add Task</button>

    <ul id="taskList"></ul>

    <script src="script.js"></script>
</body>
</html>`
            },
            {
                heading: "Select the Elements",
                body: "JavaScript first selects the input, button and list. These references let the program read what the user typed and add new tasks to the list.",
                code: `const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");`
            },
            {
                heading: "Add a New Task",
                body: "When the user clicks Add Task, the program reads the input value. trim() removes unnecessary spaces at the beginning and end. If the input is empty, the program does nothing. Otherwise, it creates a list item and adds it to the page.",
                code: `addButton.addEventListener("click", function() {

    const task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = task;

    taskList.appendChild(li);

    taskInput.value = "";
});`
            },
            {
                heading: "Delete a Task",
                body: "Each task can have its own Delete button. When the user clicks it, the matching list item is removed using remove(). This is an example of JavaScript responding to an event and changing the DOM.",
                code: `const deleteButton = document.createElement("button");

deleteButton.textContent = "Delete";

deleteButton.addEventListener("click", function() {
    li.remove();
});

li.appendChild(deleteButton);`
            },
            {
                heading: "Save Tasks Using Local Storage",
                body: "The previous version keeps tasks only in the current page. If the page is refreshed, those tasks disappear. Local Storage solves this problem. We can save the task list as JSON and load it again when the page opens. The complete application below includes adding, deleting and saving tasks.",
                code: `const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        const li = document.createElement("li");
        const text = document.createElement("span");
        const deleteButton = document.createElement("button");

        text.textContent = task;

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        });

        li.appendChild(text);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

addButton.addEventListener("click", function() {

    const task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    tasks.push(task);

    saveTasks();
    displayTasks();

    taskInput.value = "";
});

displayTasks();`
            },
            {
                heading: "What You Have Learned",
                body: "This project uses DOM methods to create and remove elements, event listeners to respond to clicks, arrays to manage tasks and Local Storage to preserve information after a refresh. These are the same building blocks used in many everyday web applications."
            }
        ],

        questions: [
            {
                level: "Easy",
                question: "What is the purpose of a To-Do Application?",
                options: [
                    "To manage a list of tasks",
                    "To edit images",
                    "To create databases",
                    "To design computer hardware"
                ],
                correct: 0,
                explanation: "A To-Do Application helps users add, view and manage tasks."
            },
            {
                level: "Easy",
                question: "Which HTML element is suitable for displaying a list of tasks?",
                options: ["<ul>", "<title>", "<head>", "<meta>"],
                correct: 0,
                explanation: "The ul element creates an unordered list that can contain individual li elements."
            },
            {
                level: "Medium",
                question: "Why is trim() used on the task input?",
                options: [
                    "To remove spaces at the beginning and end",
                    "To delete all tasks",
                    "To save the task permanently",
                    "To create a button"
                ],
                correct: 0,
                explanation: "trim() removes whitespace from both ends of the entered text."
            },
            {
                level: "Hard",
                question: "Which method adds a new task element to the list?",
                options: ["remove()", "appendChild()", "getItem()", "filter()"],
                correct: 1,
                explanation: "appendChild() adds the newly created list item to the task list."
            },
            {
                level: "Difficult",
                question: "Why does the application call displayTasks() after loading saved tasks?",
                options: [
                    "To show the saved tasks on the page",
                    "To clear Local Storage",
                    "To close the application",
                    "To delete the task array"
                ],
                correct: 0,
                explanation: "Local Storage holds the saved data, but it does not automatically create page elements. displayTasks() reads the array and builds the visible list."
            }
        ]
    }

];
