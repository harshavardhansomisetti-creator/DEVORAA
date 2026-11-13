
export const co3Topics = [

    // ==========================================
    // TOPIC 1 - INTRODUCTION TO REACT
    // ==========================================

    {
        title: "Introduction to React",

        sections: [
            {
                heading: "What is React?",
                body: `React is a JavaScript library used to build user interfaces, especially for web applications. It was developed by Meta. React allows developers to divide a large user interface into smaller, reusable parts called components.

For example, consider an online shopping website. It contains a navigation bar, search bar, product cards, shopping cart and footer. Instead of writing all these elements in one large file, React allows us to create separate components for each part.

React mainly focuses on the user interface. It works with JavaScript and can be combined with other tools to build complete applications.`
            },
            {
                heading: "Why Do We Need React?",
                body: `In traditional JavaScript development, developers often manually select HTML elements and update their content whenever data changes. As an application becomes larger, managing these updates can become difficult.

React provides a structured approach. Developers describe what the interface should look like for the current data, and React updates the necessary parts when that data changes.

Important advantages include:

1. Component reusability: The same component can be used in multiple places.
2. Maintainability: Application code can be organised into smaller units.
3. Declarative development: Developers describe the expected interface rather than manually updating every element.
4. Ecosystem: React supports many tools and libraries for application development.`
            },
            {
                heading: "Understanding the Virtual DOM",
                body: `The browser represents a web page using the Document Object Model (DOM). When the page changes, the browser may need to update parts of this structure.

React maintains its own representation of the rendered interface. When application data changes, React compares the new representation with the previous one and determines what needs to be updated.

This process is commonly explained through the Virtual DOM and reconciliation. React then applies the necessary changes to the browser DOM.

The Virtual DOM is not a separate browser feature. It is part of React's rendering approach.`
            },
            {
                heading: "Creating a React Application",
                body: `A common way to start a modern React project is using Vite. Vite creates the development environment and provides a local development server.

After creating a project, the main application files usually include:

- src/main.jsx: Entry point that connects React to the HTML page.
- src/App.jsx: Main application component.
- src/index.css: Global styles.
- index.html: HTML document loaded by the browser.

The App component is where developers commonly begin building the application interface.`
            },
            {
                heading: "First React Component",
                body: `A React component is a JavaScript function that returns JSX describing part of the user interface. Component names must begin with a capital letter.

In this example, Welcome is a component. It returns a heading and paragraph. The App component uses Welcome to display that content.

This demonstrates how a React application can be built by combining smaller components.`,
                code: `function Welcome() {
    return (
        <div>
            <h1>Welcome to React</h1>
            <p>Start learning component-based development.</p>
        </div>
    );
}

function App() {
    return (
        <main>
            <Welcome />
        </main>
    );
}

export default App;`
            },
            {
                heading: "Where React Is Used",
                body: `React is commonly used for interactive websites and web application interfaces.

Examples include:
- E-commerce product pages.
- Student management dashboards.
- Social media interfaces.
- Online learning platforms.
- Admin panels.
- Data visualisation dashboards.

React is especially useful when an application contains reusable interface elements and frequently changing data.`
            }
        ],

        questions: [
            {
                question: "What is React?",
                level: "Basic",
                options: [
                    "A JavaScript library for building user interfaces",
                    "A database management system",
                    "An operating system",
                    "A programming language"
                ],
                correct: 0,
                explanation: "React is a JavaScript library used to build user interfaces."
            },
            {
                question: "Who developed React?",
                level: "Basic",
                options: ["Google", "Meta", "Microsoft", "Oracle"],
                correct: 1,
                explanation: "React was originally developed at Facebook, now Meta."
            },
            {
                question: "What is a React component?",
                level: "Intermediate",
                options: [
                    "A reusable part of a user interface",
                    "A database table",
                    "A CSS property",
                    "A server"
                ],
                correct: 0,
                explanation: "Components divide interfaces into reusable parts."
            },
            {
                question: "What does JSX allow developers to do?",
                level: "Intermediate",
                options: [
                    "Write HTML-like syntax inside JavaScript",
                    "Create database tables",
                    "Configure network routers",
                    "Replace JavaScript completely"
                ],
                correct: 0,
                explanation: "JSX is a syntax extension that lets developers describe UI using HTML-like syntax."
            },
            {
                question: "What is the main purpose of React's reconciliation process?",
                level: "Advanced",
                options: [
                    "Compare interface changes and update the necessary DOM elements",
                    "Create database backups",
                    "Compile CSS into HTML",
                    "Connect a website to a router"
                ],
                correct: 0,
                explanation: "Reconciliation determines the updates needed when the rendered interface changes."
            }
        ]
    },

    // ==========================================
    // TOPIC 2 - JSX
    // ==========================================

    {
        title: "JSX",

        sections: [
            {
                heading: "Introduction to JSX",
                body: `JSX stands for JavaScript XML. It is a syntax extension used with React to describe what the user interface should display.

JSX looks similar to HTML, but it is written inside JavaScript code. It makes React components easier to read because the interface structure and related logic can be organised together.

JSX is not directly understood by browsers. Development tools transform JSX into JavaScript that React can use.`
            },
            {
                heading: "Writing JSX Elements",
                body: `JSX elements use tags similar to HTML elements. A component can return one parent element containing multiple child elements.

For example, a heading and paragraph can be placed inside a div. Developers can also use a React Fragment when they need a parent wrapper without adding another DOM element.

Unlike HTML, JSX requires certain elements to be written in a specific way.`
            },
            {
                heading: "Important JSX Rules",
                body: `There are several rules to remember when writing JSX.

1. Return one parent element, or use a Fragment.
2. Close all tags. For example, input must be written as a self-closing element.
3. Use className instead of class for CSS classes.
4. Use camelCase for most DOM properties and event names.
5. JavaScript expressions can be inserted using curly braces.
6. Use a capital letter at the beginning of a custom component name.

These rules help JSX remain valid and predictable.`
            },
            {
                heading: "Embedding JavaScript Expressions",
                body: `Curly braces allow JavaScript expressions to be used inside JSX.

For example, a variable containing a student's name can be displayed inside a heading. Mathematical expressions can also be evaluated inside curly braces.

JSX supports expressions, such as calculations and function calls, but it does not accept ordinary JavaScript statements like if directly inside the braces.`,
                code: `function App() {
    const studentName = "Harsha";
    const marks = 85;

    return (
        <div>
            <h1>Welcome, {studentName}</h1>
            <p>Your marks: {marks}</p>
            <p>Next test target: {marks + 5}</p>
        </div>
    );
}

export default App;`
            },
            {
                heading: "Using Attributes in JSX",
                body: `JSX supports attributes that configure HTML elements. Some familiar HTML attributes have different names in JSX.

For example, class becomes className, and the label attribute htmlFor is used to associate a label with a form control.

Attributes can also receive JavaScript values through curly braces. This is useful when an element's properties depend on application data.`,
                code: `function Profile() {
    const imageURL = "/profile.jpg";

    return (
        <div className="profile">
            <img
                src={imageURL}
                alt="Student profile"
                width={150}
            />

            <h2>Student Profile</h2>
        </div>
    );
}

export default Profile;`
            },
            {
                heading: "Conditional Content in JSX",
                body: `Sometimes a website needs to display different content depending on a condition.

For example, a dashboard may display a welcome message when a user is logged in and a login message when the user is not logged in.

The conditional operator and logical AND operator are commonly used to handle simple conditional rendering in JSX.`,
                code: `function App() {
    const isLoggedIn = true;

    return (
        <div>
            {isLoggedIn ? (
                <h1>Welcome back!</h1>
            ) : (
                <h1>Please log in.</h1>
            )}
        </div>
    );
}

export default App;`
            }
        ],

        questions: [
            {
                question: "What is the full form of JSX?",
                level: "Basic",
                options: [
                    "JavaScript XML",
                    "Java Syntax Extension",
                    "JavaScript Extra",
                    "Java XML System"
                ],
                correct: 0,
                explanation: "JSX stands for JavaScript XML."
            },
            {
                question: "Which attribute is used instead of class in JSX?",
                level: "Basic",
                options: ["className", "cssClass", "styleClass", "classname"],
                correct: 0,
                explanation: "React JSX uses className for CSS classes."
            },
            {
                question: "How are JavaScript expressions embedded in JSX?",
                level: "Intermediate",
                options: [
                    "Using curly braces",
                    "Using square brackets",
                    "Using quotation marks only",
                    "Using angle brackets"
                ],
                correct: 0,
                explanation: "Curly braces allow JavaScript expressions inside JSX."
            },
            {
                question: "Which is a valid self-closing JSX element?",
                level: "Intermediate",
                options: ["<input />", "<input>", "<input></input/>", "<input close>"],
                correct: 0,
                explanation: "JSX requires self-closing syntax for elements such as input."
            },
            {
                question: "What is the purpose of a React Fragment?",
                level: "Advanced",
                options: [
                    "Group multiple elements without adding an extra DOM element",
                    "Create a database",
                    "Apply CSS automatically",
                    "Store component state"
                ],
                correct: 0,
                explanation: "Fragments group elements without introducing an additional DOM wrapper."
            }
        ]
    },

    // ==========================================
    // TOPIC 3 - COMPONENTS
    // ==========================================

    {
        title: "Components",

        sections: [
            {
                heading: "Understanding Components",
                body: `Components are the basic building blocks of a React application. A component represents a reusable section of the user interface.

Consider a student portal. It may contain a header, navigation menu, student profile, subject list and footer. Each of these sections can be developed as an individual component.

This approach makes an application easier to understand, test, maintain and expand.`
            },
            {
                heading: "Functional Components",
                body: `A functional component is a JavaScript function that returns JSX. Its name should begin with a capital letter.

The component can contain variables, calculations, event handlers and other JavaScript logic. It can also receive data through props.

Functional components are the standard approach for developing modern React applications.`,
                code: `function Header() {
    return <h1>Student Portal</h1>;
}

function Footer() {
    return <p>Copyright 2026</p>;
}

function App() {
    return (
        <div>
            <Header />
            <h2>Dashboard</h2>
            <Footer />
        </div>
    );
}

export default App;`
            },
            {
                heading: "Using Components Inside Components",
                body: `React components can be combined to create larger interfaces. A parent component can display multiple child components.

For example, an App component may include Header, Sidebar and Dashboard components. Each child component handles a specific part of the application.

This structure is called component composition. It helps developers build complex interfaces from smaller units.`
            },
            {
                heading: "Reusable Components",
                body: `A reusable component can be displayed in different places without rewriting its entire implementation.

For example, an application may need several buttons with similar structure. Instead of creating separate button implementations, developers can create one Button component and customise it using props.

Reusability reduces repeated code and makes changes easier to manage.`
            },
            {
                heading: "Organising Component Files",
                body: `As an application grows, keeping every component in one file becomes difficult. Developers commonly create a components folder inside the src directory.

For example:

src/
- components/
  - Header.jsx
  - Footer.jsx
  - StudentCard.jsx
- App.jsx
- main.jsx

A component can be exported from one file and imported into another. This makes the project structure easier to navigate.`,
                code: `// Header.jsx

function Header() {
    return <h1>DEVORAA Learning Portal</h1>;
}

export default Header;

// App.jsx

import Header from "./Header";

function App() {
    return (
        <main>
            <Header />
            <p>Start learning React.</p>
        </main>
    );
}

export default App;`
            },
            {
                heading: "Component Naming and Best Practices",
                body: `React component names should begin with an uppercase letter. This helps React distinguish custom components from built-in HTML elements.

A component should ideally have a clear responsibility. For example, a ProductCard component should mainly display product information rather than handling every unrelated task in the application.

Useful practices include meaningful file names, small components, reusable layouts and consistent folder organisation.`
            }
        ],

        questions: [
            {
                question: "What is a component in React?",
                level: "Basic",
                options: [
                    "A reusable building block of the user interface",
                    "A database query",
                    "A CSS file",
                    "A browser extension"
                ],
                correct: 0,
                explanation: "Components represent reusable sections of the user interface."
            },
            {
                question: "How should a functional component name begin?",
                level: "Basic",
                options: ["Uppercase letter", "Number", "Underscore only", "Lowercase letter only"],
                correct: 0,
                explanation: "Custom React component names begin with an uppercase letter."
            },
            {
                question: "What is component composition?",
                level: "Intermediate",
                options: [
                    "Combining components to build a larger interface",
                    "Combining database tables",
                    "Writing CSS inside HTML",
                    "Deleting unused components"
                ],
                correct: 0,
                explanation: "Component composition builds interfaces by combining smaller components."
            },
            {
                question: "Why are reusable components useful?",
                level: "Intermediate",
                options: [
                    "They reduce repeated code",
                    "They remove JavaScript",
                    "They replace databases",
                    "They prevent all application errors"
                ],
                correct: 0,
                explanation: "Reusable components reduce duplication and simplify maintenance."
            },
            {
                question: "Which folder commonly stores reusable React components?",
                level: "Advanced",
                options: ["src/components", "public/database", "node_modules/pages", "root/server"],
                correct: 0,
                explanation: "The src/components directory is a common location for component files."
            }
        ]
    },

    // ==========================================
    // TOPIC 4 - PROPS
    // ==========================================

    {
        title: "Props",

        sections: [
            {
                heading: "Introduction to Props",
                body: `Props is short for properties. Props allow a parent component to pass information to a child component.

Imagine an online shopping page displaying several products. Each product card has a different name, price and image, but the overall layout remains the same.

Instead of writing separate components for every product, one ProductCard component can receive different props and display different information.

Props make components flexible and reusable.`
            },
            {
                heading: "Passing Props to Components",
                body: `Props are passed to a component using attributes in JSX. The child component receives them as an object.

In the following example, the parent component passes a student's name and course to StudentCard. The child component reads those values and displays them.

The same component can be used with different values.`,
                code: `function StudentCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Course: {props.course}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <StudentCard
                name="Harsha"
                course="ECE"
            />

            <StudentCard
                name="Ravi"
                course="CSE"
            />
        </div>
    );
}

export default App;`
            },
            {
                heading: "Destructuring Props",
                body: `JavaScript destructuring allows developers to extract values directly from an object.

Instead of writing props.name and props.course repeatedly, the component can receive these values using destructuring.

This makes the component shorter and easier to read.`,
                code: `function StudentCard({ name, course }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Course: {course}</p>
        </div>
    );
}

export default StudentCard;`
            },
            {
                heading: "Default Props Values",
                body: `Sometimes a parent component may not provide every prop. A component can use default parameter values to provide fallback information.

For example, if a profile does not receive a name, it can display the text Guest.

Default values make components more predictable when optional information is missing.`,
                code: `function Profile({ name = "Guest" }) {
    return (
        <h2>Welcome, {name}</h2>
    );
}

function App() {
    return (
        <div>
            <Profile name="Harsha" />
            <Profile />
        </div>
    );
}

export default App;`
            },
            {
                heading: "Passing Functions as Props",
                body: `Props can also contain functions. This allows a child component to notify its parent when an event happens.

For example, a parent can define a function to display a message. It can pass that function to a child button component. When the button is clicked, the child calls the function.

This is a common method of handling communication from child components to parent components.`,
                code: `function MessageButton({ onMessage }) {
    return (
        <button onClick={onMessage}>
            Show Message
        </button>
    );
}

function App() {
    function showMessage() {
        alert("Button clicked!");
    }

    return (
        <MessageButton onMessage={showMessage} />
    );
}

export default App;`
            },
            {
                heading: "Important Rules About Props",
                body: `Props are read-only inputs. A child component should not directly modify the props it receives.

If information needs to change, the component that owns the state should update that state and pass the new value through props.

This keeps data flow predictable and makes React applications easier to debug.`
            }
        ],

        questions: [
            {
                question: "What is the purpose of props?",
                level: "Basic",
                options: [
                    "To pass data from parent to child components",
                    "To create CSS files",
                    "To store browser history",
                    "To connect to a database automatically"
                ],
                correct: 0,
                explanation: "Props are used to pass information to child components."
            },
            {
                question: "Are props directly mutable by the receiving component?",
                level: "Basic",
                options: [
                    "No, props should be treated as read-only",
                    "Yes, always",
                    "Only in CSS",
                    "Only when using HTML"
                ],
                correct: 0,
                explanation: "React components should treat received props as read-only."
            },
            {
                question: "What is destructuring used for?",
                level: "Intermediate",
                options: [
                    "Extracting values from objects",
                    "Deleting all object properties",
                    "Creating a database",
                    "Changing HTML tags"
                ],
                correct: 0,
                explanation: "Destructuring extracts object properties into variables."
            },
            {
                question: "Can a function be passed as a prop?",
                level: "Intermediate",
                options: ["Yes", "No", "Only in CSS", "Only in HTML"],
                correct: 0,
                explanation: "Functions can be passed as props for event handling and communication."
            },
            {
                question: "What happens when a prop has no supplied value and a default parameter is defined?",
                level: "Advanced",
                options: [
                    "The default value is used",
                    "The application always closes",
                    "The component is deleted",
                    "The browser reloads"
                ],
                correct: 0,
                explanation: "Default parameter values provide fallback values for undefined props."
            }
        ]
    },

    // ==========================================
    // TOPIC 5 - USESTATE
    // ==========================================

    {
        title: "useState",

        sections: [
            {
                heading: "Understanding State",
                body: `State is data that a React component remembers between renders. It represents information that can change while an application is running.

Consider a counter application. It displays a number and contains an increment button. Whenever the user clicks the button, the displayed number changes.

The current counter value is state because the component needs to remember it and update the interface when it changes.`
            },
            {
                heading: "Introduction to the useState Hook",
                body: `useState is a React Hook that allows functional components to store and update state.

It returns an array containing two values:

1. The current state value.
2. A function used to update that state.

The initial value is provided when calling useState. When the state setter is called, React schedules an update and renders the component again with the new state.`,
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

export default Counter;`
            },
            {
                heading: "Understanding the Array Returned by useState",
                body: `The useState Hook returns an array with two elements.

In the example, count stores the current value. setCount is the function used to request a state update.

The initial value is zero. When setCount is called with a new value, React updates the state and renders the component again.

Developers commonly use array destructuring to access these two values.`
            },
            {
                heading: "Updating State Correctly",
                body: `When the next state depends on the previous state, using the functional updater form is a reliable approach.

The updater receives the previous state value and returns the next value. This is especially useful when multiple updates are scheduled close together.

For example, setCount(previousCount => previousCount + 1) calculates the next count from the previous value.`,
                code: `import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(previousCount => previousCount + 1);
    }

    function decrease() {
        setCount(previousCount => previousCount - 1);
    }

    return (
        <div>
            <h2>{count}</h2>

            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}

export default Counter;`
            },
            {
                heading: "State with Strings and Boolean Values",
                body: `State is not limited to numbers. It can store strings, Boolean values, arrays and objects.

For example, a component can store a user's name in a string state. A Boolean state can control whether a message or section is visible.

The initial state should match the type of information the component needs to store.`,
                code: `import { useState } from "react";

function Profile() {
    const [name, setName] = useState("Harsha");
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <h2>{name}</h2>

            <button onClick={() => setName("Student")}>
                Change Name
            </button>

            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>

            {isVisible && <p>Welcome to React!</p>}
        </div>
    );
}

export default Profile;`
            },
            {
                heading: "Updating Objects and Arrays in State",
                body: `React state should be updated without directly mutating the existing object or array.

For an object, the spread operator can copy existing properties and replace the property that needs to change.

For an array, methods such as map, filter and spread syntax can create new arrays. This helps React recognise the new state value and update the interface correctly.`,
                code: `import { useState } from "react";

function Student() {
    const [student, setStudent] = useState({
        name: "Harsha",
        course: "ECE"
    });

    function changeCourse() {
        setStudent(previousStudent => ({
            ...previousStudent,
            course: "React Development"
        }));
    }

    return (
        <div>
            <h2>{student.name}</h2>
            <p>{student.course}</p>
            <button onClick={changeCourse}>
                Change Course
            </button>
        </div>
    );
}

export default Student;`
            },
            {
                heading: "Rules of Hooks",
                body: `React Hooks must follow specific rules.

1. Call Hooks at the top level of a functional component or a custom Hook.
2. Do not call Hooks inside loops, conditions or nested functions.
3. Call Hooks from React function components or custom Hooks.

Following these rules helps React maintain the correct relationship between Hook calls and component state.`
            }
        ],

        questions: [
            {
                question: "What is the purpose of useState?",
                level: "Basic",
                options: [
                    "To add state to functional components",
                    "To create HTML files",
                    "To connect a database",
                    "To write CSS"
                ],
                correct: 0,
                explanation: "useState allows a component to store and update state."
            },
            {
                question: "What does useState return?",
                level: "Basic",
                options: [
                    "An array containing the state value and setter function",
                    "Only a string",
                    "A CSS object",
                    "A database connection"
                ],
                correct: 0,
                explanation: "useState returns the current state and a state setter."
            },
            {
                question: "What happens after a state update?",
                level: "Intermediate",
                options: [
                    "React schedules a re-render",
                    "The browser always closes",
                    "The component is permanently deleted",
                    "The CSS file is removed"
                ],
                correct: 0,
                explanation: "A state update causes React to render the component with the updated state."
            },
            {
                question: "Which is a good way to update state based on its previous value?",
                level: "Intermediate",
                options: [
                    "setCount(previous => previous + 1)",
                    "count = count + 1",
                    "document.write(count)",
                    "window.count++"
                ],
                correct: 0,
                explanation: "The functional updater receives the previous state and calculates the next value."
            },
            {
                question: "Where should Hooks be called?",
                level: "Advanced",
                options: [
                    "At the top level of a React component or custom Hook",
                    "Inside every loop",
                    "Inside conditional blocks",
                    "Inside ordinary nested functions"
                ],
                correct: 0,
                explanation: "Hooks must follow the Rules of Hooks."
            }
        ]
    },

    // ==========================================
    // TOPIC 6 - USEEFFECT
    // ==========================================

    {
        title: "useEffect",

        sections: [
            {
                heading: "Introduction to useEffect",
                body: `useEffect is a React Hook used to synchronise a component with external systems.

External systems may include browser APIs, timers, network requests, subscriptions and other systems outside React's rendering process.

For example, a component may need to update the browser document title when a counter changes. This is a suitable use of an Effect.

Effects should not be used for every calculation. Values that can be calculated directly from existing props or state generally do not need an Effect.`
            },
            {
                heading: "Basic useEffect Syntax",
                body: `The useEffect Hook accepts a function containing the Effect logic and an optional dependency array.

The Effect setup function runs after React commits the relevant render to the screen.

The dependency array determines when React should run the Effect again. Understanding dependencies is important for writing predictable React components.`,
                code: `import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = "Count: " + count;
    }, [count]);

    return (
        <button onClick={() => setCount(c => c + 1)}>
            Count: {count}
        </button>
    );
}

export default Counter;`
            },
            {
                heading: "Understanding the Dependency Array",
                body: `The dependency array controls when an Effect should run again.

Three common forms are:

1. No dependency array: The Effect runs after every committed render.
2. Empty dependency array: The Effect runs after the initial mount. In development Strict Mode, React may perform an additional setup and cleanup cycle.
3. Dependencies included: The Effect runs after the initial mount and again when a dependency changes.

Dependencies should include the reactive values used by the Effect.`
            },
            {
                heading: "Cleanup Function",
                body: `Some Effects create resources that should be released when they are no longer needed.

Examples include timers, event listeners and subscriptions.

React allows an Effect to return a cleanup function. React calls this cleanup before running the Effect again when dependencies change, and when the component is removed.

For example, a timer should be cleared during cleanup so that it does not continue running unnecessarily.`,
                code: `import { useEffect, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds(previous => previous + 1);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return <h2>Seconds: {seconds}</h2>;
}

export default Timer;`
            },
            {
                heading: "Fetching Data with useEffect",
                body: `A component may need information from an external API. An Effect can be used to start a network request when the component is mounted or when relevant dependencies change.

The following example requests data from a public demonstration API. It stores the received information in state and displays the result.

In a production application, developers should also handle loading states, request failures and cancellation or stale responses.`,
                code: `import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUsers() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Request failed");
                }

                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadUsers();
    }, []);

    if (loading) {
        return <p>Loading users...</p>;
    }

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default Users;`
            },
            {
                heading: "Common useEffect Mistakes",
                body: `Beginners sometimes create Effects that repeatedly update state and cause unnecessary renders.

One common mistake is updating state inside an Effect while also including that same state as a dependency without a suitable stopping condition.

Other common mistakes include missing dependencies, forgetting cleanup for timers or subscriptions, and using Effects for calculations that could be performed during rendering.

A well-designed Effect should have a clear purpose and correctly manage its dependencies.`
            }
        ],

        questions: [
            {
                question: "What is the main purpose of useEffect?",
                level: "Basic",
                options: [
                    "Synchronising a component with external systems",
                    "Creating CSS styles",
                    "Defining database tables",
                    "Replacing JSX"
                ],
                correct: 0,
                explanation: "useEffect is used for synchronising components with external systems."
            },
            {
                question: "When does an Effect with an empty dependency array normally run?",
                level: "Basic",
                options: [
                    "After the initial mount",
                    "After every button click",
                    "Only when the browser closes",
                    "Never"
                ],
                correct: 0,
                explanation: "An empty dependency array means the Effect does not re-run due to changing dependencies."
            },
            {
                question: "What is the purpose of an Effect cleanup function?",
                level: "Intermediate",
                options: [
                    "To release resources such as timers and subscriptions",
                    "To create new HTML elements",
                    "To remove React from the project",
                    "To change component names"
                ],
                correct: 0,
                explanation: "Cleanup prevents unwanted ongoing resources after an Effect is no longer needed."
            },
            {
                question: "Which browser method can be used to stop an interval timer?",
                level: "Intermediate",
                options: ["clearInterval()", "stopReact()", "removeTimer()", "deleteInterval()"],
                correct: 0,
                explanation: "clearInterval stops a timer created with setInterval."
            },
            {
                question: "Should useEffect be used for every value calculated from existing props and state?",
                level: "Advanced",
                options: [
                    "No, calculate such values during rendering when appropriate",
                    "Yes, always",
                    "Only inside CSS",
                    "Only for numbers"
                ],
                correct: 0,
                explanation: "Effects are for external synchronisation, not ordinary derived calculations."
            }
        ]
    },

    // ==========================================
    // TOPIC 7 - CONDITIONAL RENDERING
    // ==========================================

    {
        title: "Conditional Rendering",

        sections: [
            {
                heading: "What is Conditional Rendering?",
                body: `Conditional rendering means displaying different interface elements depending on a condition.

For example, an application may show a login form when a user is logged out and a dashboard when the user is logged in.

React uses ordinary JavaScript conditions to decide which elements should appear. This allows interfaces to respond to application state and user information.`
            },
            {
                heading: "Using if and else Statements",
                body: `JavaScript if and else statements can be used before the return statement of a component.

This approach is useful when the component needs to choose between different larger sections of the interface.

For example, a login component can return a welcome message when the user is logged in, or a login prompt otherwise.`,
                code: `function App() {
    const isLoggedIn = true;

    if (isLoggedIn) {
        return <h1>Welcome to your dashboard!</h1>;
    }

    return <h1>Please log in to continue.</h1>;
}

export default App;`
            },
            {
                heading: "Using the Ternary Operator",
                body: `The ternary operator is a shorter way to choose between two expressions.

Its structure is condition ? valueIfTrue : valueIfFalse.

In React, this is useful when displaying one of two possible elements inside JSX. It is especially suitable for simple conditions.`,
                code: `function Status() {
    const isAvailable = true;

    return (
        <div>
            <h2>
                {isAvailable ? "Available" : "Not Available"}
            </h2>
        </div>
    );
}

export default Status;`
            },
            {
                heading: "Using the Logical AND Operator",
                body: `The logical AND operator can conditionally display an element when a condition is true.

For example, a notification message may appear only when unread messages are available.

If the condition is false, React does not render the expression on the right side. Developers should be careful when using numbers directly as conditions because a value such as zero can appear in the rendered output.`,
                code: `function Notifications() {
    const hasMessages = true;

    return (
        <div>
            <h2>Inbox</h2>

            {hasMessages && (
                <p>You have new messages.</p>
            )}
        </div>
    );
}

export default Notifications;`
            },
            {
                heading: "Conditional Rendering with State",
                body: `Conditional rendering becomes especially useful when combined with state.

A button can update a Boolean state value. React then renders a different interface based on the new value.

For example, a show and hide button can control whether a paragraph is visible. This demonstrates how state and conditional rendering work together.`,
                code: `import { useState } from "react";

function ToggleMessage() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Hide Message" : "Show Message"}
            </button>

            {visible && (
                <p>This message is now visible.</p>
            )}
        </div>
    );
}

export default ToggleMessage;`
            }
        ],

        questions: [
            {
                question: "What is conditional rendering?",
                level: "Basic",
                options: [
                    "Displaying UI based on a condition",
                    "Creating database tables",
                    "Writing CSS animations only",
                    "Installing React"
                ],
                correct: 0,
                explanation: "Conditional rendering selects which interface elements appear based on conditions."
            },
            {
                question: "Which operator is commonly used for two-way conditional expressions?",
                level: "Basic",
                options: ["Ternary operator", "Assignment operator", "Typeof operator", "Increment operator"],
                correct: 0,
                explanation: "The ternary operator chooses between two expressions."
            },
            {
                question: "What does the logical AND operator help with in JSX?",
                level: "Intermediate",
                options: [
                    "Displaying content only when a condition is true",
                    "Creating a new component file",
                    "Connecting to SQL",
                    "Removing all state"
                ],
                correct: 0,
                explanation: "The logical AND operator can conditionally render content."
            },
            {
                question: "Which React Hook is commonly used to change a visibility condition?",
                level: "Intermediate",
                options: ["useState", "useCSS", "useHTML", "useDatabase"],
                correct: 0,
                explanation: "useState stores the Boolean value that controls visibility."
            },
            {
                question: "Which JavaScript statement is useful for selecting between larger component layouts?",
                level: "Advanced",
                options: ["if and else", "console.log only", "import only", "break only"],
                correct: 0,
                explanation: "if and else can choose which component content to return."
            }
        ]
    },

    // ==========================================
    // TOPIC 8 - LISTS AND KEYS
    // ==========================================

    {
        title: "Lists and Keys",

        sections: [
            {
                heading: "Rendering Lists in React",
                body: `Applications frequently display collections of information. Examples include product lists, student records, notifications and messages.

React allows developers to use JavaScript array methods to transform collections into interface elements.

The map() method is commonly used to create one JSX element for each item in an array.`
            },
            {
                heading: "Using the map() Method",
                body: `The map() method creates a new array by applying a function to every element of an existing array.

In React, the returned array can contain JSX elements. This makes it possible to display a collection without manually writing repeated markup.

In the example, each subject name is converted into a list item.`,
                code: `function Subjects() {
    const subjects = [
        "React",
        "JavaScript",
        "Database",
        "Backend"
    ];

    return (
        <ul>
            {subjects.map((subject, index) => (
                <li key={index}>
                    {subject}
                </li>
            ))}
        </ul>
    );
}

export default Subjects;`
            },
            {
                heading: "Understanding Keys",
                body: `A key is a special attribute that helps React identify individual elements in a rendered list.

When items are added, removed or reordered, keys help React match elements between renders.

Keys should be unique among the siblings in a list. A stable database ID is usually a better choice than an array index when the list can change.

Keys are used internally by React and are not passed to the component as an ordinary prop.`
            },
            {
                heading: "Using Unique IDs as Keys",
                body: `When each item contains a unique identifier, that identifier can be used as the key.

This is generally more reliable than using the array index, especially when items can be inserted, deleted or reordered.

The example below uses each student's id as the key.`,
                code: `function Students() {
    const students = [
        { id: 101, name: "Harsha" },
        { id: 102, name: "Ravi" },
        { id: 103, name: "Kiran" }
    ];

    return (
        <ul>
            {students.map(student => (
                <li key={student.id}>
                    {student.name}
                </li>
            ))}
        </ul>
    );
}

export default Students;`
            },
            {
                heading: "Filtering Lists",
                body: `The filter() method creates a new array containing only the elements that satisfy a condition.

In React applications, filtering is useful for displaying selected products, available courses or students who meet a particular requirement.

The filtered array can then be passed to map() to generate the visible list.`,
                code: `function Products() {
    const products = [
        { id: 1, name: "Keyboard", available: true },
        { id: 2, name: "Mouse", available: false },
        { id: 3, name: "Monitor", available: true }
    ];

    const availableProducts = products.filter(
        product => product.available
    );

    return (
        <ul>
            {availableProducts.map(product => (
                <li key={product.id}>
                    {product.name}
                </li>
            ))}
        </ul>
    );
}

export default Products;`
            },
            {
                heading: "Common List Rendering Mistakes",
                body: `Common mistakes include forgetting the key attribute, using duplicate keys and using unstable keys for changing lists.

A key should uniquely identify each item among its siblings. It should remain stable when the item moves within the list.

For static lists, an array index may be acceptable. For lists where items are inserted, deleted or reordered, use a stable unique identifier whenever possible.`
            }
        ],

        questions: [
            {
                question: "Which JavaScript method is commonly used to render lists in React?",
                level: "Basic",
                options: ["map()", "push()", "alert()", "prompt()"],
                correct: 0,
                explanation: "map() transforms array elements into JSX elements."
            },
            {
                question: "What is the purpose of the key attribute?",
                level: "Basic",
                options: [
                    "To identify list elements between renders",
                    "To apply a CSS colour",
                    "To connect a database",
                    "To create a password"
                ],
                correct: 0,
                explanation: "Keys help React identify individual list items."
            },
            {
                question: "Which is usually a good key for a changing list?",
                level: "Intermediate",
                options: [
                    "A stable unique ID",
                    "A random number generated during every render",
                    "The current date for every item",
                    "The same value for all items"
                ],
                correct: 0,
                explanation: "Stable unique IDs help React track list items correctly."
            },
            {
                question: "What does filter() do?",
                level: "Intermediate",
                options: [
                    "Creates a new array containing elements that satisfy a condition",
                    "Deletes the original array automatically",
                    "Changes CSS styles",
                    "Creates React components automatically"
                ],
                correct: 0,
                explanation: "filter() returns a new array containing matching elements."
            },
            {
                question: "Why can array indexes be problematic as keys in changing lists?",
                level: "Advanced",
                options: [
                    "Indexes may change when items are inserted, removed or reordered",
                    "Indexes cannot be numbers",
                    "React does not support arrays",
                    "Indexes always delete elements"
                ],
                correct: 0,
                explanation: "Changing positions can cause indexes to identify different items across renders."
            }
        ]
    },

    // ==========================================
    // TOPIC 9 - CONTROLLED FORMS
    // ==========================================

    {
        title: "Controlled Forms",

        sections: [
            {
                heading: "Introduction to Forms in React",
                body: `Forms are used to collect information from users. Common examples include login forms, registration forms, contact forms and search forms.

React provides a way to manage form input values using component state.

A controlled input is an input element whose displayed value is controlled by React state. When a user types, an event handler updates the state.`
            },
            {
                heading: "Understanding Controlled Components",
                body: `A controlled component receives its value from React state through the value attribute.

The onChange event handler updates the state whenever the user changes the input.

This means React maintains the current value of the input. The component can then validate, display or submit that information.`,
                code: `import { useState } from "react";

function NameForm() {
    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name"
            />

            <p>Your name: {name}</p>
        </div>
    );
}

export default NameForm;`
            },
            {
                heading: "Handling Form Submission",
                body: `When a user submits a traditional HTML form, the browser may perform its default submission behaviour, which can reload the page.

React applications commonly use the onSubmit event and event.preventDefault() to control this process.

The form data can then be processed by the component or sent to a backend API.

The example displays the entered name after submission.`,
                code: `import { useState } from "react";

function RegistrationForm() {
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setSubmittedName(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Enter your name"
            />

            <button type="submit">Submit</button>

            {submittedName && (
                <p>Welcome, {submittedName}</p>
            )}
        </form>
    );
}

export default RegistrationForm;`
            },
            {
                heading: "Handling Multiple Inputs",
                body: `A form may contain several input fields such as name, email and course.

Each field can have its own state value, or related values can be stored together in an object.

When using an object, the spread operator can preserve the other fields while updating the field that changed.

This approach is useful for registration and student information forms.`,
                code: `import { useState } from "react";

function StudentForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData(previous => ({
            ...previous,
            [name]: value
        }));
    }

    return (
        <form>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />

            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />

            <p>{formData.name}</p>
            <p>{formData.email}</p>
        </form>
    );
}

export default StudentForm;`
            },
            {
                heading: "Form Validation",
                body: `Form validation checks whether the information entered by the user meets the application's requirements.

For example, a registration form may require a name and a valid email format. It may also prevent submission when required fields are empty.

Validation can happen in the browser for user convenience, but important validation must also be performed on the server because client-side checks can be bypassed.

A good form explains what information is missing and helps users correct their input.`,
                code: `import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!email.trim()) {
            setError("Email is required.");
            return;
        }

        setError("");
        alert("Form submitted.");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Enter email"
            />

            <button type="submit">Submit</button>

            {error && <p>{error}</p>}
        </form>
    );
}

export default LoginForm;`
            },
            {
                heading: "Controlled and Uncontrolled Inputs",
                body: `In a controlled input, React state controls the input value through value and onChange.

In an uncontrolled input, the browser manages the current input value. React can access it when needed using a ref.

Controlled inputs are useful when the application needs to respond immediately to input changes or perform validation. Uncontrolled inputs can be suitable for simpler cases where continuous state tracking is unnecessary.`
            }
        ],

        questions: [
            {
                question: "What is a controlled component?",
                level: "Basic",
                options: [
                    "An input whose value is controlled by React state",
                    "An input controlled only by CSS",
                    "A database field",
                    "A browser extension"
                ],
                correct: 0,
                explanation: "Controlled inputs receive their value from React state."
            },
            {
                question: "Which event is commonly used to detect input changes?",
                level: "Basic",
                options: ["onChange", "onDelete", "onInstall", "onDatabase"],
                correct: 0,
                explanation: "The onChange event handles changes to form inputs."
            },
            {
                question: "Why is event.preventDefault() used during form submission?",
                level: "Intermediate",
                options: [
                    "To prevent the browser's default form submission behaviour",
                    "To delete all form values",
                    "To stop React rendering",
                    "To close the application"
                ],
                correct: 0,
                explanation: "It prevents the browser's default submission action."
            },
            {
                question: "What is the purpose of form validation?",
                level: "Intermediate",
                options: [
                    "To check whether user input meets requirements",
                    "To change the website logo",
                    "To install React",
                    "To create a CSS file"
                ],
                correct: 0,
                explanation: "Validation checks whether submitted information meets expected rules."
            },
            {
                question: "Where should important application input validation also happen?",
                level: "Advanced",
                options: [
                    "On the server",
                    "Only in CSS",
                    "Only in the browser address bar",
                    "Only in the HTML title"
                ],
                correct: 0,
                explanation: "Server-side validation is necessary because client-side checks can be bypassed."
            }
        ]
    },

    // ==========================================
    // TOPIC 10 - REACT TO-DO APPLICATION
    // ==========================================

    {
        title: "React To-Do Application",

        sections: [
            {
                heading: "Introduction to the Project",
                body: `In this topic, we combine the React concepts learned earlier to build a simple To-Do application.

A To-Do application allows users to add tasks, view their tasks, mark tasks as completed and remove tasks.

This project demonstrates how components, JSX, state, event handling, lists and controlled inputs work together in a practical application.

The application stores its task list in React state.`
            },
            {
                heading: "Planning the Application",
                body: `Before writing code, identify the main features and data structure.

The application needs:

1. An input field for entering a task.
2. A button for adding the task.
3. A list displaying all tasks.
4. A completion control for each task.
5. A delete button for removing tasks.

Each task can be represented as an object with an id, text and completed property.

This structure makes it possible to identify each task and update its status independently.`
            },
            {
                heading: "Creating the Task State",
                body: `The useState Hook stores the task list.

Initially, the list is empty. When a new task is added, the application creates a new array containing the existing tasks and the new task.

React state should not be directly mutated. Creating a new array using the spread operator provides a new state value.`,
                code: `import { useState } from "react";

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");

    return (
        <div>
            <h1>My To-Do List</h1>

            <input
                value={taskText}
                onChange={event => setTaskText(event.target.value)}
                placeholder="Enter a task"
            />

            <button>Add Task</button>
        </div>
    );
}

export default TodoApp;`
            },
            {
                heading: "Adding New Tasks",
                body: `When the user enters a task and selects Add Task, the application should check whether the input contains meaningful text.

If the input is valid, a new task object is created. A unique identifier can be generated using crypto.randomUUID() in supported browsers.

The new task is added to the existing array using the state setter. After the update, React renders the task list again.`,
                code: `function addTask() {
    const trimmedText = taskText.trim();

    if (!trimmedText) {
        return;
    }

    const newTask = {
        id: crypto.randomUUID(),
        text: trimmedText,
        completed: false
    };

    setTasks(previousTasks => [
        ...previousTasks,
        newTask
    ]);

    setTaskText("");
}`
            },
            {
                heading: "Displaying Tasks",
                body: `The map() method converts the task array into a collection of JSX list elements.

Each task is displayed using its text property. Its unique id is supplied as the key attribute.

If the task list is empty, the application can display a message informing the user that no tasks have been added yet.`,
                code: `{tasks.length === 0 ? (
    <p>No tasks added yet.</p>
) : (
    <ul>
        {tasks.map(task => (
            <li key={task.id}>
                {task.text}
            </li>
        ))}
    </ul>
)}`
            },
            {
                heading: "Marking Tasks as Completed",
                body: `A task can be marked as completed by changing its completed property.

The map() method can be used to create an updated array. The selected task receives the opposite of its previous completed value, while other tasks remain unchanged.

The interface can then display a visual difference between completed and pending tasks.`,
                code: `function toggleTask(taskId) {
    setTasks(previousTasks =>
        previousTasks.map(task =>
            task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
        )
    );
}`
            },
            {
                heading: "Deleting Tasks",
                body: `Users should be able to remove tasks they no longer need.

The filter() method creates a new array containing only tasks whose identifiers do not match the selected task.

React then renders the updated list without the deleted task.

This demonstrates how array operations and state updates work together.`,
                code: `function deleteTask(taskId) {
    setTasks(previousTasks =>
        previousTasks.filter(task => task.id !== taskId)
    );
}`
            },
            {
                heading: "Complete To-Do Application",
                body: `The following example combines adding, displaying, completing and deleting tasks into one working React component.

The application uses controlled input, state updates, map(), filter(), unique keys and event handlers.

This is a small frontend project. A larger application could later connect to a backend API and database to save tasks permanently.`,
                code: `import { useState } from "react";

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");

    function addTask() {
        const trimmedText = taskText.trim();

        if (!trimmedText) return;

        const newTask = {
            id: crypto.randomUUID(),
            text: trimmedText,
            completed: false
        };

        setTasks(previous => [...previous, newTask]);
        setTaskText("");
    }

    function toggleTask(taskId) {
        setTasks(previous =>
            previous.map(task =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    }

    function deleteTask(taskId) {
        setTasks(previous =>
            previous.filter(task => task.id !== taskId)
        );
    }

    return (
        <div>
            <h1>My To-Do List</h1>

            <input
                value={taskText}
                onChange={event => setTaskText(event.target.value)}
                placeholder="Enter a task"
            />

            <button onClick={addTask}>
                Add Task
            </button>

            {tasks.length === 0 ? (
                <p>No tasks added yet.</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            <span
                                style={{
                                    textDecoration: task.completed
                                        ? "line-through"
                                        : "none"
                                }}
                            >
                                {task.text}
                            </span>

                            <button
                                onClick={() => toggleTask(task.id)}
                            >
                                {task.completed ? "Undo" : "Complete"}
                            </button>

                            <button
                                onClick={() => deleteTask(task.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TodoApp;`
            },
            {
                heading: "Project Summary and Further Improvements",
                body: `The To-Do project demonstrates how multiple React concepts work together in one application.

Concepts used:

- Components: The application is organised into a React component.
- JSX: The interface is described using JSX.
- useState: Task information is stored in state.
- Event handling: Buttons respond to user actions.
- Controlled forms: React manages the input value.
- map(): Displays the task list.
- filter(): Removes selected tasks.
- Unique keys: Identifies each task in the rendered list.

Possible improvements include adding task editing, task categories, search, filtering by completion status, persistent storage and backend integration.`
            }
        ],

        questions: [
            {
                question: "What is the main purpose of a To-Do application?",
                level: "Basic",
                options: [
                    "To create and manage tasks",
                    "To edit videos",
                    "To design databases only",
                    "To configure network routers"
                ],
                correct: 0,
                explanation: "A To-Do application helps users organise and manage tasks."
            },
            {
                question: "Which Hook stores the task list in this project?",
                level: "Basic",
                options: ["useState", "useCSS", "useHTML", "useDatabase"],
                correct: 0,
                explanation: "useState stores the task list and allows it to be updated."
            },
            {
                question: "Which array method is used to remove a selected task?",
                level: "Intermediate",
                options: ["filter()", "map()", "join()", "sort()"],
                correct: 0,
                explanation: "filter() creates a new array without the selected task."
            },
            {
                question: "Why does each task have a unique id?",
                level: "Intermediate",
                options: [
                    "To identify and update the correct task",
                    "To change the website background",
                    "To create a new database",
                    "To automatically log in users"
                ],
                correct: 0,
                explanation: "A unique ID identifies a particular task for updates and deletion."
            },
            {
                question: "Which concept allows React to display an updated task list after adding a task?",
                level: "Advanced",
                options: [
                    "Updating state with the state setter",
                    "Changing the HTML title only",
                    "Editing the browser address",
                    "Reloading the CSS file"
                ],
                correct: 0,
                explanation: "Updating state causes React to render the component with the new task list."
            }
        ]
    }

];
