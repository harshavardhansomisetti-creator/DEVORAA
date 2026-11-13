
export const co3Topics = [

    // TOPIC 1
    {
        title: "Introduction to React",
        sections: [
            {
                heading: "What is React?",
                body: `React is a JavaScript library used to build interactive user interfaces. It was developed by Meta.

Traditional websites often update parts of a page using direct DOM manipulation. React provides a component-based approach that makes user interface development easier to organize and maintain.

React is commonly used for single-page applications where users can interact with different sections without reloading the entire page.`
            },
            {
                heading: "Why Use React?",
                body: `React is useful because it allows developers to divide a large user interface into smaller reusable components.

Important advantages include:

• Component-based architecture
• Reusable UI elements
• Efficient updates using the Virtual DOM
• Easy management of interactive interfaces
• Large ecosystem and community support

For example, a navigation bar created once can be reused across multiple pages.`
            },
            {
                heading: "How React Works",
                body: `React describes how the user interface should look based on the current application data.

When data changes, React calculates what needs to be updated and applies the necessary changes to the browser DOM.

This approach helps developers build interfaces that respond to user actions and changing information.`
            },
            {
                heading: "Where React Is Used",
                body: `React is commonly used in:

• E-commerce websites
• Social media interfaces
• Student dashboards
• Admin panels
• Online learning platforms
• Interactive web applications

A student dashboard with course lists, progress indicators and assessment results is a good example of a React application.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is React?",
                options: [
                    "A JavaScript library",
                    "A database",
                    "An operating system",
                    "A programming language"
                ],
                correct: 0,
                explanation: "React is a JavaScript library used for building user interfaces."
            },
            {
                level: "Easy",
                question: "Who developed React?",
                options: [
                    "Google",
                    "Microsoft",
                    "Meta",
                    "Oracle"
                ],
                correct: 2,
                explanation: "React was originally developed at Facebook, now known as Meta."
            },
            {
                level: "Medium",
                question: "What is the main purpose of React?",
                options: [
                    "Managing databases",
                    "Building user interfaces",
                    "Creating operating systems",
                    "Managing computer hardware"
                ],
                correct: 1,
                explanation: "React focuses on creating interactive and reusable user interfaces."
            },
            {
                level: "Medium",
                question: "What is a major feature of React?",
                options: [
                    "Component-based architecture",
                    "Hardware programming",
                    "Database storage",
                    "Network configuration"
                ],
                correct: 0,
                explanation: "React applications are organized using reusable components."
            },
            {
                level: "Hard",
                question: "React is commonly used to build which type of application?",
                options: [
                    "Single-page applications",
                    "Operating systems",
                    "Device drivers",
                    "BIOS software"
                ],
                correct: 0,
                explanation: "React is widely used to build single-page applications with interactive interfaces."
            }
        ]
    },

    // TOPIC 2
    {
        title: "Setting Up a React Project",
        sections: [
            {
                heading: "Requirements for React Development",
                body: `Before creating a React application, install Node.js and a code editor such as Visual Studio Code.

Node.js provides the JavaScript runtime needed by development tools. npm, which comes with Node.js, helps install and manage project packages.

A browser is also required to view and test the application.`
            },
            {
                heading: "Creating a React Project",
                body: `Vite is a modern development tool that can create and run React projects.

Open the terminal and execute these commands:`
            },
            {
                heading: "Project Creation Commands",
                code: `npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`,
                body: `The first command creates a React project using Vite.

The second command enters the project folder.

The third command installs the required dependencies.

The final command starts the development server. Open the local URL shown in the terminal to view your application.`
            },
            {
                heading: "Understanding Project Files",
                body: `Important files in a basic Vite React project:

• index.html – Main HTML document.
• src/main.jsx – Application entry point.
• src/App.jsx – Main application component.
• src/App.css – Component styling.
• package.json – Project information and dependencies.

The main.jsx file connects the React application to the HTML document.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "Which tool is commonly used to create a React project?",
                options: ["Vite", "MySQL", "Photoshop", "Cisco Packet Tracer"],
                correct: 0,
                explanation: "Vite is a modern tool used to create and run React projects."
            },
            {
                level: "Easy",
                question: "What does npm manage?",
                options: ["Hardware devices", "JavaScript packages", "Computer memory", "Network cables"],
                correct: 1,
                explanation: "npm is a package manager used to install and manage project dependencies."
            },
            {
                level: "Medium",
                question: "Which command installs project dependencies?",
                options: ["npm start", "npm install", "npm delete", "npm build"],
                correct: 1,
                explanation: "npm install downloads and installs the packages specified by the project."
            },
            {
                level: "Medium",
                question: "Which file is commonly used as the main React component in a Vite project?",
                options: ["App.jsx", "database.sql", "server.php", "index.py"],
                correct: 0,
                explanation: "App.jsx commonly contains the main application component."
            },
            {
                level: "Hard",
                question: "What does npm run dev usually do in a Vite project?",
                options: [
                    "Deletes the project",
                    "Starts the development server",
                    "Creates a database",
                    "Installs an operating system"
                ],
                correct: 1,
                explanation: "The dev script starts the local development server."
            }
        ]
    },

    // TOPIC 3
    {
        title: "JSX and Components",
        sections: [
            {
                heading: "What is JSX?",
                body: `JSX stands for JavaScript XML. It is a syntax extension that allows developers to write HTML-like markup inside JavaScript code.

JSX makes React components easier to read because the user interface structure and related JavaScript logic can be written together.

Browsers do not execute JSX directly. Development tools transform JSX into JavaScript that React can use.`
            },
            {
                heading: "Writing JSX",
                code: `function App() {
    return (
        <div>
            <h1>Welcome to DEVORAA</h1>
            <p>Learn React Development</p>
        </div>
    );
}

export default App;`,
                body: `The App function returns JSX describing the interface.

JSX expressions are written inside parentheses for readability. A component must return a single parent element. Multiple elements can be grouped using a parent element or React Fragment.`
            },
            {
                heading: "What Are Components?",
                body: `Components are independent and reusable parts of a user interface.

For example, a learning website may contain:

• Header component
• Sidebar component
• CourseCard component
• Lesson component
• Footer component

Each component can manage a specific part of the interface. This makes an application easier to develop, test and maintain.`
            },
            {
                heading: "Creating a Reusable Component",
                code: `function Welcome() {
    return <h2>Welcome to React!</h2>;
}

function App() {
    return (
        <div>
            <Welcome />
            <Welcome />
        </div>
    );
}

export default App;`,
                body: `The Welcome component is defined once and used twice inside App.

Component names must begin with a capital letter. In JSX, a component is used with opening and closing tags, or as a self-closing tag when it has no children.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is the full form of JSX?",
                options: [
                    "JavaScript XML",
                    "Java Syntax Extension",
                    "JavaScript Extra",
                    "JSON XML"
                ],
                correct: 0,
                explanation: "JSX stands for JavaScript XML."
            },
            {
                level: "Easy",
                question: "What is a React component?",
                options: [
                    "A reusable UI building block",
                    "A database table",
                    "A CSS property",
                    "A browser"
                ],
                correct: 0,
                explanation: "Components are reusable building blocks of React user interfaces."
            },
            {
                level: "Medium",
                question: "How should a React component name begin?",
                options: [
                    "With a number",
                    "With a capital letter",
                    "With a special symbol",
                    "With a space"
                ],
                correct: 1,
                explanation: "React component names should begin with a capital letter."
            },
            {
                level: "Medium",
                question: "Which syntax is used to display a Welcome component?",
                options: [
                    "<Welcome />",
                    "Welcome() in HTML",
                    "[Welcome]",
                    "#Welcome"
                ],
                correct: 0,
                explanation: "React components are used in JSX with tag-like syntax."
            },
            {
                level: "Hard",
                question: "What can be used to group multiple JSX elements without adding an extra DOM element?",
                options: [
                    "React Fragment",
                    "Database",
                    "CSS Grid",
                    "Local Storage"
                ],
                correct: 0,
                explanation: "React Fragment groups elements without creating an additional DOM node."
            }
        ]
    },

    // TOPIC 4
    {
        title: "Props in React",
        sections: [
            {
                heading: "Understanding Props",
                body: `Props stands for properties. Props are used to pass information from a parent component to a child component.

They allow developers to create reusable components that display different information depending on the values received.

For example, the same CourseCard component can display different course names and descriptions.`
            },
            {
                heading: "Passing Props",
                code: `function Student(props) {
    return <h2>Student: {props.name}</h2>;
}

function App() {
    return (
        <div>
            <Student name="Harsha" />
            <Student name="Ravi" />
        </div>
    );
}

export default App;`,
                body: `The App component passes a name property to Student.

The Student component receives that information through its props parameter.

The curly braces in JSX allow JavaScript expressions to be displayed inside markup.`
            },
            {
                heading: "Destructuring Props",
                code: `function Course({ title, duration }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Duration: {duration}</p>
        </div>
    );
}

function App() {
    return (
        <Course
            title="React Development"
            duration="6 Weeks"
        />
    );
}`,
                body: `Destructuring allows individual prop values to be extracted directly from the component parameter.

Instead of writing props.title and props.duration, we can use title and duration directly.`
            },
            {
                heading: "Important Rules of Props",
                body: `• Props are passed from parent to child components.
• Props are read-only.
• A child component should not directly modify its props.
• Props can contain strings, numbers, arrays, objects and functions.
• Different prop values allow the same component to display different content.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What does Props stand for?",
                options: [
                    "Properties",
                    "Programs",
                    "Processes",
                    "Protocols"
                ],
                correct: 0,
                explanation: "Props is short for properties."
            },
            {
                level: "Easy",
                question: "What is the main purpose of props?",
                options: [
                    "Passing data between parent and child components",
                    "Creating databases",
                    "Styling HTML directly",
                    "Installing React"
                ],
                correct: 0,
                explanation: "Props pass information from parent components to child components."
            },
            {
                level: "Medium",
                question: "Can a child component directly modify its props?",
                options: [
                    "Yes, always",
                    "No, props are read-only",
                    "Only using CSS",
                    "Only in HTML"
                ],
                correct: 1,
                explanation: "Props are read-only values and should not be directly modified by the child."
            },
            {
                level: "Medium",
                question: "Which syntax passes a name prop?",
                options: [
                    "<Student name='Ravi' />",
                    "<Student: name />",
                    "Student.name = Ravi",
                    "#Student(name)"
                ],
                correct: 0,
                explanation: "A prop is passed as an attribute in a component's JSX tag."
            },
            {
                level: "Hard",
                question: "What is the benefit of destructuring props?",
                options: [
                    "It makes prop values easier to access",
                    "It deletes all props",
                    "It creates a database",
                    "It replaces JSX"
                ],
                correct: 0,
                explanation: "Destructuring provides direct access to individual prop values."
            }
        ]
    },

    // TOPIC 5
    {
        title: "State and useState Hook",
        sections: [
            {
                heading: "What is State?",
                body: `State is data that a React component remembers and manages over time.

State is useful when the interface needs to respond to user actions or changing information.

Examples include:

• Counter values
• Form input values
• Selected course
• Menu open or closed status
• Shopping cart items

When state changes, React updates the interface where that state is used.`
            },
            {
                heading: "Understanding useState",
                body: `useState is a React Hook that allows functional components to create and manage state.

It returns two values:

1. The current state value.
2. A function used to update that value.

The initial value is provided when calling useState.`
            },
            {
                heading: "Counter Example",
                code: `import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}

export default Counter;`,
                body: `Initially, count is 0.

When the user clicks Increase, setCount updates the state to the next value.

React then renders the updated count in the interface.`
            },
            {
                heading: "Important Rules of useState",
                body: `• Import useState from React.
• Call Hooks at the top level of a component or custom Hook.
• Do not call Hooks inside loops or conditions.
• Use the state setter to update state.
• Do not directly modify state variables.

For example, setCount(count + 1) is the correct way to update the counter.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is state in React?",
                options: [
                    "Data managed by a component",
                    "A CSS selector",
                    "An HTML tag",
                    "A database server"
                ],
                correct: 0,
                explanation: "State stores information that a component manages over time."
            },
            {
                level: "Easy",
                question: "Which Hook is used to manage state?",
                options: [
                    "useState",
                    "useHTML",
                    "useCSS",
                    "useDatabase"
                ],
                correct: 0,
                explanation: "The useState Hook allows functional components to manage state."
            },
            {
                level: "Medium",
                question: "What does useState return?",
                options: [
                    "A state value and a setter function",
                    "Only a CSS class",
                    "A database connection",
                    "An HTML document"
                ],
                correct: 0,
                explanation: "useState returns the current state and a function to update it."
            },
            {
                level: "Medium",
                question: "What happens when state is updated?",
                options: [
                    "React schedules an update to the component",
                    "The browser closes",
                    "The project is deleted",
                    "CSS is removed"
                ],
                correct: 0,
                explanation: "Updating state causes React to render the component with the updated state."
            },
            {
                level: "Hard",
                question: "Which is the correct way to update a count state?",
                options: [
                    "count = count + 1",
                    "setCount(count + 1)",
                    "count++",
                    "updateHTML(count)"
                ],
                correct: 1,
                explanation: "The setter function should be used to update React state."
            }
        ]
    },

    // TOPIC 6
    {
        title: "Event Handling in React",
        sections: [
            {
                heading: "What is Event Handling?",
                body: `Event handling allows React applications to respond to user interactions.

Common events include:

• onClick – When an element is clicked.
• onChange – When an input value changes.
• onSubmit – When a form is submitted.
• onMouseOver – When the pointer moves over an element.

Events make React applications interactive.`
            },
            {
                heading: "Handling a Click Event",
                code: `function App() {
    function handleClick() {
        alert("Button clicked!");
    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}

export default App;`,
                body: `The handleClick function runs when the user clicks the button.

React event names use camelCase, such as onClick instead of onclick.

Pass the function reference as the event handler rather than calling it immediately.`
            },
            {
                heading: "Handling Input Changes",
                code: `import { useState } from "react";

function NameInput() {
    const [name, setName] = useState("");

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
            />

            <p>Hello, {name}</p>
        </div>
    );
}

export default NameInput;`,
                body: `The onChange event runs whenever the input value changes.

event.target.value provides the current text entered by the user.

The setName function updates the state, and React displays the updated greeting.`
            },
            {
                heading: "Form Submission",
                code: `function ContactForm() {
    function handleSubmit(event) {
        event.preventDefault();
        alert("Form submitted!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" />
            <button type="submit">Submit</button>
        </form>
    );
}`,
                body: `The onSubmit event handles form submission.

event.preventDefault() prevents the browser's default form submission behavior, allowing the React application to handle the action.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "Which event handles button clicks in React?",
                options: ["onClick", "onChange", "onSubmit", "onLoad"],
                correct: 0,
                explanation: "The onClick event handles click interactions."
            },
            {
                level: "Easy",
                question: "Which event is commonly used for input changes?",
                options: ["onChange", "onClick", "onDelete", "onStop"],
                correct: 0,
                explanation: "onChange responds when an input value changes."
            },
            {
                level: "Medium",
                question: "How are React event names written?",
                options: [
                    "CamelCase",
                    "All lowercase",
                    "All uppercase",
                    "With spaces"
                ],
                correct: 0,
                explanation: "React event names use camelCase, such as onClick."
            },
            {
                level: "Medium",
                question: "What does event.preventDefault() do?",
                options: [
                    "Prevents the default browser action",
                    "Deletes the event",
                    "Closes the application",
                    "Changes CSS"
                ],
                correct: 0,
                explanation: "It prevents the browser's default behavior for an event."
            },
            {
                level: "Hard",
                question: "How should a click handler normally be passed?",
                options: [
                    "onClick={handleClick}",
                    "onClick='handleClick()'",
                    "click=handleClick",
                    "onClick={handleClick()}"
                ],
                correct: 0,
                explanation: "Passing the function reference allows React to call it when the event occurs."
            }
        ]
    },

    // TOPIC 7
    {
        title: "Conditional Rendering",
        sections: [
            {
                heading: "What is Conditional Rendering?",
                body: `Conditional rendering means displaying different user interface elements depending on a condition.

For example, a learning platform may show:

• Login screen when the user is not logged in.
• Dashboard when the user is logged in.
• A message when there are no available courses.

React supports JavaScript conditions inside components and JSX.`
            },
            {
                heading: "Using if and else",
                code: `function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h2>Welcome back!</h2>;
    }

    return <h2>Please log in.</h2>;
}

export default Greeting;`,
                body: `The component checks the value of isLoggedIn.

If the value is true, it displays a welcome message. Otherwise, it displays a login message.`
            },
            {
                heading: "Using Ternary Operator",
                code: `function App() {
    const isLoggedIn = true;

    return (
        <div>
            {isLoggedIn
                ? <h2>Dashboard</h2>
                : <h2>Login Page</h2>
            }
        </div>
    );
}

export default App;`,
                body: `The ternary operator provides a short way to choose between two expressions.

Its syntax is condition ? expressionIfTrue : expressionIfFalse.`
            },
            {
                heading: "Using Logical AND",
                code: `function Notification() {
    const hasMessage = true;

    return (
        <div>
            {hasMessage && <p>You have a new message.</p>}
        </div>
    );
}`,
                body: `The logical AND operator (&&) can display an element only when a condition is true.

This is useful when there is no need to display an alternative element when the condition is false.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is conditional rendering?",
                options: [
                    "Displaying UI based on conditions",
                    "Creating a database",
                    "Changing the browser",
                    "Installing packages"
                ],
                correct: 0,
                explanation: "Conditional rendering displays different elements depending on conditions."
            },
            {
                level: "Easy",
                question: "Which operator is commonly used for a short two-way condition?",
                options: ["Ternary operator", "Addition operator", "Assignment operator", "Modulus operator"],
                correct: 0,
                explanation: "The ternary operator selects between two expressions."
            },
            {
                level: "Medium",
                question: "What does the && operator do in JSX?",
                options: [
                    "Displays the right side when the left condition is truthy",
                    "Deletes a component",
                    "Creates a new project",
                    "Changes the page title"
                ],
                correct: 0,
                explanation: "Logical AND can conditionally display JSX when its left expression is truthy."
            },
            {
                level: "Medium",
                question: "Which expression is a valid ternary condition?",
                options: [
                    "condition ? A : B",
                    "condition : A ? B",
                    "condition = A : B",
                    "condition && : A"
                ],
                correct: 0,
                explanation: "The ternary operator follows the condition ? trueValue : falseValue structure."
            },
            {
                level: "Hard",
                question: "Which technique is useful when displaying either a login screen or dashboard?",
                options: [
                    "Conditional rendering",
                    "Database indexing",
                    "CSS comments",
                    "Package installation"
                ],
                correct: 0,
                explanation: "Conditional rendering can display the appropriate screen based on login status."
            }
        ]
    },

    // TOPIC 8
    {
        title: "Lists and Keys",
        sections: [
            {
                heading: "Rendering Lists in React",
                body: `React can display collections of data by using JavaScript array methods.

The map() method is commonly used to convert an array of data into a list of JSX elements.

For example, a course dashboard can use an array containing course names and display each course automatically.`
            },
            {
                heading: "Using map()",
                code: `function CourseList() {
    const courses = [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ];

    return (
        <ul>
            {courses.map((course) => (
                <li key={course}>{course}</li>
            ))}
        </ul>
    );
}

export default CourseList;`,
                body: `The map() method visits every item in the courses array.

For each item, it returns a list element.

React uses the key prop to identify individual elements in a rendered list.`
            },
            {
                heading: "What Are Keys?",
                body: `Keys are special identifiers used by React to track list elements between renders.

Keys help React identify which items have been added, removed or changed.

A stable and unique ID from the data is usually the best choice for a key.

Keys should be unique among their sibling elements.`
            },
            {
                heading: "Rendering Objects",
                code: `function StudentList() {
    const students = [
        { id: 1, name: "Ravi" },
        { id: 2, name: "Harsha" },
        { id: 3, name: "Kiran" }
    ];

    return (
        <ul>
            {students.map((student) => (
                <li key={student.id}>
                    {student.name}
                </li>
            ))}
        </ul>
    );
}`,
                body: `Here, each student is represented by an object.

The student.id property provides a stable key, while student.name is displayed in the list.

Avoid using array indexes as keys when the list can be reordered, inserted into or deleted from.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "Which JavaScript method is commonly used to render lists in React?",
                options: ["map()", "push()", "alert()", "prompt()"],
                correct: 0,
                explanation: "map() transforms each array item into a JSX element."
            },
            {
                level: "Easy",
                question: "What are keys used for in React lists?",
                options: [
                    "Identifying list elements",
                    "Styling buttons",
                    "Connecting databases",
                    "Creating CSS files"
                ],
                correct: 0,
                explanation: "Keys help React track individual list elements."
            },
            {
                level: "Medium",
                question: "Where should a key be placed when rendering a list?",
                options: [
                    "On the outermost returned element for each item",
                    "Only on the page body",
                    "Inside CSS",
                    "On the database server"
                ],
                correct: 0,
                explanation: "The key should be placed on the top-level element returned for each mapped item."
            },
            {
                level: "Medium",
                question: "Which is generally the best key for a list item?",
                options: [
                    "A stable unique ID",
                    "A random number on every render",
                    "An empty string",
                    "The same value for every item"
                ],
                correct: 0,
                explanation: "Stable unique identifiers help React track items correctly."
            },
            {
                level: "Hard",
                question: "Why should array indexes often be avoided as keys in changing lists?",
                options: [
                    "They may not identify the same item after list changes",
                    "They prevent CSS from working",
                    "They delete the array",
                    "They stop JavaScript"
                ],
                correct: 0,
                explanation: "Indexes can refer to different items after insertion, deletion or reordering."
            }
        ]
    },

    // TOPIC 9
    {
        title: "useEffect Hook",
        sections: [
            {
                heading: "Understanding Side Effects",
                body: `A side effect is an operation that interacts with something outside the component's rendering process.

Examples include:

• Fetching information from an API.
• Updating the browser document title.
• Setting up a subscription.
• Connecting to an external service.

React provides the useEffect Hook to synchronize a component with external systems.`
            },
            {
                heading: "Introduction to useEffect",
                body: `useEffect is a React Hook that runs an effect after a component commits a render.

It accepts two main arguments:

1. A setup function containing the effect.
2. An optional dependency array.

The dependency array controls when React runs the effect again.`
            },
            {
                heading: "Basic useEffect Example",
                code: `import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = "Count: " + count;
    }, [count]);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}

export default Counter;`,
                body: `Whenever count changes, React runs the effect and updates the browser tab title.

The dependency array contains count, so the effect runs after the initial render and again when count changes.`
            },
            {
                heading: "Dependency Array",
                body: `The dependency array controls when an effect is synchronized again.

• No dependency array: the effect runs after every committed render.
• Empty array []: the effect runs after the initial mount.
• [count]: the effect runs after the initial mount and when count changes.

An effect can also return a cleanup function to remove subscriptions or other resources before the effect runs again or the component unmounts.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "Which Hook is used to synchronize a component with external systems?",
                options: ["useEffect", "useState", "useHTML", "useCSS"],
                correct: 0,
                explanation: "useEffect is used to synchronize a component with external systems."
            },
            {
                level: "Easy",
                question: "Which of the following is a side effect?",
                options: [
                    "Fetching data from an API",
                    "Writing a paragraph",
                    "Declaring a CSS class",
                    "Creating an HTML heading"
                ],
                correct: 0,
                explanation: "Fetching data from an external API is a common side effect."
            },
            {
                level: "Medium",
                question: "What does an empty dependency array mean?",
                options: [
                    "The effect runs after the initial mount",
                    "The effect never runs",
                    "The effect runs on every click",
                    "The component is deleted"
                ],
                correct: 0,
                explanation: "An empty dependency array means the effect has no reactive dependencies to watch."
            },
            {
                level: "Medium",
                question: "What does [count] represent in useEffect?",
                options: [
                    "The effect depends on count",
                    "The effect deletes count",
                    "The effect creates a database",
                    "The effect disables rendering"
                ],
                correct: 0,
                explanation: "React re-runs the effect when count changes."
            },
            {
                level: "Hard",
                question: "What is the purpose of a cleanup function in useEffect?",
                options: [
                    "To release resources or undo setup",
                    "To delete React",
                    "To install dependencies",
                    "To change JSX into HTML"
                ],
                correct: 0,
                explanation: "Cleanup functions help remove subscriptions, listeners or other resources created by an effect."
            }
        ]
    },

    // TOPIC 10
    {
        title: "Building a React Application",
        sections: [
            {
                heading: "Planning the Application",
                body: `A React application is easier to build when its requirements and components are planned before coding.

In this topic, we will create a simple Student Course Dashboard.

The dashboard will display:

• Application heading
• Student information
• Available courses
• Course descriptions
• A button for each course

This example combines components, props, lists and JSX.`
            },
            {
                heading: "Creating the Course Component",
                code: `function CourseCard({ title, description }) {
    return (
        <div className="course-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <button>View Course</button>
        </div>
    );
}

export default CourseCard;`,
                body: `CourseCard is a reusable component.

It accepts title and description through props and displays them inside the card.

The same component can be reused for multiple courses with different values.`
            },
            {
                heading: "Building the Dashboard",
                code: `import CourseCard from "./CourseCard";

function App() {
    const courses = [
        {
            id: 1,
            title: "HTML",
            description: "Learn website structure."
        },
        {
            id: 2,
            title: "CSS",
            description: "Learn website styling."
        },
        {
            id: 3,
            title: "JavaScript",
            description: "Learn programming for the web."
        }
    ];

    return (
        <div>
            <h1>Student Dashboard</h1>
            <p>Welcome to your learning space.</p>

            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    title={course.title}
                    description={course.description}
                />
            ))}
        </div>
    );
}

export default App;`,
                body: `The App component stores course information in an array.

The map() method creates a CourseCard for every course.

Each card receives its title and description through props, and its unique ID is used as a key.`
            },
            {
                heading: "Improving the Application",
                body: `The basic dashboard can be improved by adding more React features.

Possible improvements include:

• useState for tracking selected courses.
• Event handling for button clicks.
• Conditional rendering for empty course lists.
• CSS for responsive layouts.
• useEffect for loading course data from an API.

These features help turn a simple interface into a more complete application.`
            },
            {
                heading: "Conclusion",
                body: `React provides a structured way to build modern user interfaces.

In this course, we explored React fundamentals, project setup, JSX, components, props, state, event handling, conditional rendering, lists and effects.

Combining these concepts allows developers to create reusable and interactive applications.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is the main purpose of a CourseCard component?",
                options: [
                    "To display course information",
                    "To install React",
                    "To connect a router",
                    "To create a database"
                ],
                correct: 0,
                explanation: "A CourseCard component displays information about an individual course."
            },
            {
                level: "Easy",
                question: "Which React concept allows CourseCard to receive a title?",
                options: ["Props", "CSS Grid", "HTML comments", "Local files"],
                correct: 0,
                explanation: "Props pass values such as a course title to a component."
            },
            {
                level: "Medium",
                question: "Which method is used to generate a card for every course in an array?",
                options: ["map()", "alert()", "prompt()", "parseInt()"],
                correct: 0,
                explanation: "map() transforms every course object into a CourseCard element."
            },
            {
                level: "Medium",
                question: "Why is a unique ID used as the key?",
                options: [
                    "To help React identify each list item",
                    "To change the font",
                    "To install packages",
                    "To create HTML files"
                ],
                correct: 0,
                explanation: "A stable unique key helps React track each course card."
            },
            {
                level: "Hard",
                question: "Which combination is useful for building an interactive course dashboard?",
                options: [
                    "Components, props, state and event handling",
                    "Only HTML comments",
                    "Only database tables",
                    "Only CSS variables"
                ],
                correct: 0,
                explanation: "These React concepts work together to create reusable and interactive interfaces."
            }
        ]
    }

];
