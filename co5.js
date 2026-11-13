
export const co5Topics = [

    {
        title: "1. Introduction to Databases",
        sections: [
            {
                heading: "What is a Database?",
                body: `A database is an organized collection of data stored electronically. It allows applications to store, manage, retrieve, and update information efficiently.

For example, an online shopping application stores customer details, product information, orders, and payment records in databases.

Without a database, applications would have difficulty managing large amounts of information.`,
                code: `Example Database:

Students
--------------------------------
student_id | name   | department
1          | Rahul  | CSE
2          | Priya  | ECE
3          | Arjun  | IT`
            },
            {
                heading: "What is a DBMS?",
                body: `DBMS stands for Database Management System.

It is software that helps users create, store, organize, retrieve, and manage data in a database.

Examples include MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server.

A DBMS provides controlled access to data and helps maintain data consistency.`
            },
            {
                heading: "Advantages of Databases",
                body: `1. Data organization: Stores information in a structured way.
2. Reduced duplication: Helps avoid unnecessary repeated data.
3. Data security: Controls who can access information.
4. Data consistency: Helps maintain accurate information.
5. Data recovery: Supports backup and recovery.
6. Easy access: Makes searching and updating data easier.`
            }
        ],
        questions: [
            { question: "What is a database?", options: ["A programming language", "An organized collection of data", "An operating system", "A web browser"], correct: 1 },
            { question: "What does DBMS stand for?", options: ["Database Management System", "Data Backup Management Software", "Digital Base Management System", "Database Memory Service"], correct: 0 },
            { question: "Which is a DBMS?", options: ["HTML", "CSS", "MySQL", "JavaScript"], correct: 2 },
            { question: "Which is an advantage of databases?", options: ["Data duplication", "Data inconsistency", "Data security", "Data loss"], correct: 2 },
            { question: "Where can an online shopping application store order details?", options: ["Database", "Keyboard", "Monitor", "Compiler"], correct: 0 }
        ]
    },

    {
        title: "2. Relational Database Concepts",
        sections: [
            {
                heading: "What is a Relational Database?",
                body: `A relational database stores data in tables. Each table contains rows and columns.

Rows represent individual records, while columns represent attributes of those records.

Relational databases allow multiple tables to be connected using keys.

MySQL and PostgreSQL are examples of relational database management systems.`,
                code: `Students Table

student_id | name  | age
-----------|-------|----
1          | Rahul | 19
2          | Priya | 20

Courses Table

course_id | course_name
----------|------------
101       | ECE
102       | CSE`
            },
            {
                heading: "Tables, Rows, and Columns",
                body: `Table: A structure used to store related information.

Row: A single record in a table. It contains values for each column.

Column: A field that describes a particular property, such as name, age, or email.

Every column has a data type that determines what kind of values it can store.`
            },
            {
                heading: "Relationships Between Tables",
                body: `Relational databases support different types of relationships.

One-to-One: One record in a table is associated with one record in another table.

One-to-Many: One record is associated with multiple records in another table. For example, one customer can place many orders.

Many-to-Many: Multiple records in one table can relate to multiple records in another table. This is commonly implemented using a junction table.`
            }
        ],
        questions: [
            { question: "How is data stored in a relational database?", options: ["Images", "Tables", "Audio files", "Animations"], correct: 1 },
            { question: "What does a row represent?", options: ["A record", "A database server", "A data type", "A command"], correct: 0 },
            { question: "What does a column represent?", options: ["A complete database", "A field or attribute", "A server", "A relationship only"], correct: 1 },
            { question: "Which relationship allows one customer to have many orders?", options: ["One-to-One", "One-to-Many", "Many-to-One only", "No relationship"], correct: 1 },
            { question: "Which database is relational?", options: ["MySQL", "HTML", "CSS", "React"], correct: 0 }
        ]
    },

    {
        title: "3. Introduction to SQL",
        sections: [
            {
                heading: "What is SQL?",
                body: `SQL stands for Structured Query Language.

It is used to communicate with relational databases. Developers use SQL to create tables, insert records, retrieve information, update existing data, and delete records.

SQL is widely used in backend development because applications need to store and retrieve information.`,
                code: `-- Create a database
CREATE DATABASE devoraa_db;

-- Select the database
USE devoraa_db;`
            },
            {
                heading: "SQL Command Categories",
                body: `SQL commands are commonly grouped into categories.

DDL – Data Definition Language: Defines database structures. Examples: CREATE, ALTER, DROP.

DML – Data Manipulation Language: Changes table data. Examples: INSERT, UPDATE, DELETE.

DQL – Data Query Language: Retrieves data. Example: SELECT.

DCL – Data Control Language: Manages permissions. Examples: GRANT, REVOKE.

TCL – Transaction Control Language: Manages transactions. Examples: COMMIT, ROLLBACK.`
            },
            {
                heading: "Creating a Table",
                body: `The CREATE TABLE statement creates a new table inside a selected database.

Each column must have a name and an appropriate data type.`,
                code: `CREATE TABLE students (
    student_id INT,
    name VARCHAR(100),
    age INT,
    department VARCHAR(50)
);`
            }
        ],
        questions: [
            { question: "What is the full form of SQL?", options: ["Structured Query Language", "Simple Question Language", "System Query Logic", "Standard Quick Language"], correct: 0 },
            { question: "Which command creates a database?", options: ["INSERT", "CREATE DATABASE", "SELECT", "UPDATE"], correct: 1 },
            { question: "Which command retrieves records?", options: ["DELETE", "DROP", "SELECT", "ALTER"], correct: 2 },
            { question: "Which category includes CREATE?", options: ["DDL", "DML", "DCL", "TCL"], correct: 0 },
            { question: "Which command selects a database in MySQL?", options: ["OPEN", "USE", "START", "SELECT DATABASE"], correct: 1 }
        ]
    },

    {
        title: "4. SQL Data Types and Constraints",
        sections: [
            {
                heading: "SQL Data Types",
                body: `Data types specify the kind of information that a database column can store.

INT: Stores whole numbers.

VARCHAR(n): Stores variable-length text up to the specified maximum length.

CHAR(n): Stores fixed-length text.

DATE: Stores dates.

DECIMAL(p,s): Stores precise decimal values, commonly used for financial data.

BOOLEAN: Represents true or false values in database systems that support it directly; MySQL commonly represents it using TINYINT.`,
                code: `CREATE TABLE products (
    product_id INT,
    product_name VARCHAR(100),
    price DECIMAL(10,2),
    manufacture_date DATE
);`
            },
            {
                heading: "What are Constraints?",
                body: `Constraints are rules applied to table columns to maintain valid and reliable data.

NOT NULL: Prevents a column from storing NULL.

UNIQUE: Ensures values in a column or column combination are unique.

PRIMARY KEY: Uniquely identifies each row and does not allow NULL.

FOREIGN KEY: Connects a column to a key in another table.

CHECK: Ensures values satisfy a specified condition.

DEFAULT: Supplies a value when one is not provided.`,
                code: `CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    age INT CHECK (age >= 16),
    city VARCHAR(50) DEFAULT 'Vijayawada'
);`
            },
            {
                heading: "Why Constraints Matter",
                body: `Constraints protect the quality of stored information.

For example, a student table should not contain two students with the same student ID. A NOT NULL constraint can prevent important fields from being left empty.

Choosing suitable constraints helps prevent invalid records from entering a database.`
            }
        ],
        questions: [
            { question: "Which data type stores whole numbers?", options: ["VARCHAR", "INT", "DATE", "TEXT"], correct: 1 },
            { question: "Which constraint uniquely identifies a row?", options: ["DEFAULT", "CHECK", "PRIMARY KEY", "NOT NULL"], correct: 2 },
            { question: "Which constraint prevents NULL values?", options: ["NOT NULL", "UNIQUE", "DEFAULT", "FOREIGN KEY"], correct: 0 },
            { question: "Which data type is suitable for precise prices?", options: ["DATE", "BOOLEAN", "DECIMAL", "CHAR"], correct: 2 },
            { question: "What does FOREIGN KEY do?", options: ["Deletes a database", "Connects related tables", "Creates a programming language", "Changes a server"], correct: 1 }
        ]
    },

    {
        title: "5. SQL Queries: INSERT, SELECT, UPDATE and DELETE",
        sections: [
            {
                heading: "INSERT Statement",
                body: `INSERT is used to add new records to a table.

You can specify the columns and the values that should be inserted.`,
                code: `INSERT INTO students
(student_id, name, age, department)
VALUES
(1, 'Rahul', 19, 'ECE');`
            },
            {
                heading: "SELECT Statement",
                body: `SELECT retrieves information from one or more database tables.

Use * to retrieve all columns, or specify individual columns to retrieve only the required information.`,
                code: `-- Retrieve all columns
SELECT * FROM students;

-- Retrieve selected columns
SELECT name, department
FROM students;`
            },
            {
                heading: "UPDATE Statement",
                body: `UPDATE modifies existing records in a table.

The WHERE clause identifies which records should be changed.

Without a WHERE clause, the update can affect every row in the table.`,
                code: `UPDATE students
SET age = 20
WHERE student_id = 1;`
            },
            {
                heading: "DELETE Statement",
                body: `DELETE removes records from a table.

Always check the WHERE condition before executing a DELETE statement. Without WHERE, all rows in the table are deleted, although the table itself remains.`,
                code: `DELETE FROM students
WHERE student_id = 1;`
            }
        ],
        questions: [
            { question: "Which command adds records?", options: ["SELECT", "INSERT", "UPDATE", "DROP"], correct: 1 },
            { question: "Which command retrieves data?", options: ["SELECT", "DELETE", "ALTER", "CREATE"], correct: 0 },
            { question: "Which clause identifies records to update?", options: ["ORDER BY", "GROUP BY", "WHERE", "LIMIT"], correct: 2 },
            { question: "What happens when DELETE is used without WHERE?", options: ["Only one row is deleted", "All rows are deleted", "The database is deleted", "Nothing happens"], correct: 1 },
            { question: "Which statement changes an existing record?", options: ["UPDATE", "INSERT", "CREATE", "SELECT"], correct: 0 }
        ]
    },

    {
        title: "6. Filtering, Sorting and Aggregate Functions",
        sections: [
            {
                heading: "WHERE Clause",
                body: `The WHERE clause filters records based on a condition.

It supports comparison operators such as =, !=, >, <, >=, and <=.

It can also use logical operators such as AND, OR, and NOT.`,
                code: `SELECT *
FROM students
WHERE department = 'ECE';

SELECT *
FROM students
WHERE age >= 18 AND department = 'ECE';`
            },
            {
                heading: "ORDER BY and LIMIT",
                body: `ORDER BY sorts query results.

ASC sorts values in ascending order and is the default.

DESC sorts values in descending order.

LIMIT restricts the number of returned rows in MySQL.`,
                code: `SELECT *
FROM students
ORDER BY age DESC;

SELECT *
FROM students
LIMIT 5;`
            },
            {
                heading: "Aggregate Functions",
                body: `Aggregate functions calculate a result using multiple records.

COUNT(): Counts records.

SUM(): Calculates the total.

AVG(): Calculates the average.

MIN(): Finds the smallest value.

MAX(): Finds the largest value.`,
                code: `SELECT COUNT(*) FROM students;

SELECT AVG(age) FROM students;

SELECT MIN(age), MAX(age)
FROM students;`
            },
            {
                heading: "GROUP BY and HAVING",
                body: `GROUP BY combines rows that share the same value in a specified column. It is commonly used with aggregate functions.

HAVING filters groups after grouping. WHERE filters individual rows before grouping.`,
                code: `SELECT department, COUNT(*) AS total
FROM students
GROUP BY department
HAVING COUNT(*) > 2;`
            }
        ],
        questions: [
            { question: "Which clause filters records?", options: ["ORDER BY", "WHERE", "GROUP BY", "LIMIT"], correct: 1 },
            { question: "Which keyword sorts results in descending order?", options: ["ASC", "SORT", "DESC", "DOWN"], correct: 2 },
            { question: "Which function counts records?", options: ["SUM()", "AVG()", "COUNT()", "MAX()"], correct: 2 },
            { question: "Which clause groups similar records?", options: ["GROUP BY", "WHERE", "LIMIT", "INSERT"], correct: 0 },
            { question: "Which clause filters grouped results?", options: ["WHERE", "HAVING", "ORDER BY", "VALUES"], correct: 1 }
        ]
    },

    {
        title: "7. SQL Joins and Relationships",
        sections: [
            {
                heading: "What is a JOIN?",
                body: `A JOIN combines related records from two or more tables using a matching column.

Joins are useful when information is stored in separate tables to reduce unnecessary duplication.

For example, customer details can be stored in one table and order details in another.`,
                code: `Customers

customer_id | name
------------|-------
1           | Rahul
2           | Priya

Orders

order_id | customer_id
---------|------------
101      | 1
102      | 1
103      | 2`
            },
            {
                heading: "INNER JOIN",
                body: `INNER JOIN returns only records that have matching values in both tables.

If a customer has no matching order, that customer will not appear in the result.`,
                code: `SELECT customers.name, orders.order_id
FROM customers
INNER JOIN orders
ON customers.customer_id = orders.customer_id;`
            },
            {
                heading: "LEFT JOIN and RIGHT JOIN",
                body: `LEFT JOIN returns all records from the left table and matching records from the right table. If no match exists, the right-side columns contain NULL.

RIGHT JOIN returns all records from the right table and matching records from the left table.`
            },
            {
                heading: "Many-to-Many Relationships",
                body: `A many-to-many relationship is usually implemented using a junction table.

For example, a student can enroll in multiple courses, and each course can contain multiple students.

A student_courses table can connect students and courses using student_id and course_id.`
            }
        ],
        questions: [
            { question: "What is the purpose of JOIN?", options: ["Delete tables", "Combine related table records", "Create databases", "Change passwords"], correct: 1 },
            { question: "Which JOIN returns only matching records?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "CROSS JOIN"], correct: 2 },
            { question: "Which JOIN keeps all records from the left table?", options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "SELF JOIN"], correct: 0 },
            { question: "What is commonly used to implement many-to-many relationships?", options: ["Junction table", "Single column", "Index only", "Database name"], correct: 0 },
            { question: "What value can appear when a LEFT JOIN has no matching right-side record?", options: ["0 always", "NULL", "TRUE", "ERROR always"], correct: 1 }
        ]
    },

    {
        title: "8. Database Normalization and Indexing",
        sections: [
            {
                heading: "What is Normalization?",
                body: `Normalization is the process of organizing relational database tables to reduce unnecessary duplication and improve data consistency.

It divides data into related tables and establishes relationships using keys.

Normalization helps avoid insertion, update, and deletion anomalies.`,
                code: `Instead of repeating customer details in every order:

Customers
customer_id | customer_name
1           | Rahul

Orders
order_id | customer_id
101      | 1
102      | 1`
            },
            {
                heading: "Normal Forms",
                body: `First Normal Form (1NF): Each column should contain atomic values, and repeating groups should be avoided.

Second Normal Form (2NF): The table should satisfy 1NF, and every non-key attribute should depend on the whole candidate key, not just part of a composite candidate key.

Third Normal Form (3NF): The table should satisfy 2NF and should not have inappropriate transitive dependencies of non-key attributes on candidate keys.`
            },
            {
                heading: "Database Indexing",
                body: `An index is a data structure that helps a database locate records more efficiently.

It can improve the speed of searches and certain queries, especially on frequently filtered columns.

However, indexes require storage and can slow down INSERT, UPDATE, and DELETE operations because indexes also need maintenance.`,
                code: `CREATE INDEX idx_student_name
ON students(name);

-- Remove an index in MySQL
DROP INDEX idx_student_name
ON students;`
            }
        ],
        questions: [
            { question: "What is the main purpose of normalization?", options: ["Increase duplication", "Reduce unnecessary duplication", "Delete all tables", "Stop queries"], correct: 1 },
            { question: "What does 1NF require?", options: ["Atomic column values", "No primary keys", "No tables", "Only one record"], correct: 0 },
            { question: "What is a database index?", options: ["A programming language", "A structure that helps locate records", "A user account", "A database backup"], correct: 1 },
            { question: "What is one disadvantage of indexes?", options: ["They always delete records", "They require storage and maintenance", "They prevent SELECT", "They remove primary keys"], correct: 1 },
            { question: "Which command creates an index?", options: ["MAKE INDEX", "CREATE INDEX", "ADD DATABASE", "INSERT INDEX"], correct: 1 }
        ]
    },

    {
        title: "9. Transactions and ACID Properties",
        sections: [
            {
                heading: "What is a Transaction?",
                body: `A transaction is a group of database operations treated as one logical unit of work.

For example, transferring money between two bank accounts requires subtracting money from one account and adding it to another.

Both operations should succeed together. If one operation fails, the transaction can be rolled back.`,
                code: `START TRANSACTION;

UPDATE accounts
SET balance = balance - 500
WHERE account_id = 1;

UPDATE accounts
SET balance = balance + 500
WHERE account_id = 2;

COMMIT;`
            },
            {
                heading: "ACID Properties",
                body: `ACID describes four important properties of reliable database transactions.

Atomicity: All operations in a transaction succeed together, or the transaction is rolled back.

Consistency: A transaction takes the database from one valid state to another while respecting constraints.

Isolation: Concurrent transactions should not interfere in ways that violate the configured isolation guarantees.

Durability: Once a transaction is committed, its changes are designed to persist even after a system failure.`
            },
            {
                heading: "COMMIT and ROLLBACK",
                body: `COMMIT permanently saves the changes made by a transaction.

ROLLBACK cancels uncommitted changes in the current transaction.

SAVEPOINT creates a point within a transaction that can be used for a partial rollback.`,
                code: `START TRANSACTION;

UPDATE students
SET age = 21
WHERE student_id = 1;

-- Save changes
COMMIT;

-- Example of cancelling uncommitted changes
START TRANSACTION;

UPDATE students
SET age = 22
WHERE student_id = 1;

ROLLBACK;`
            }
        ],
        questions: [
            { question: "What is a transaction?", options: ["A group of logical database operations", "A CSS property", "A web page", "A programming framework"], correct: 0 },
            { question: "What does ACID stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Input, Data", "Application, Code, Internet, Design", "Automatic, Central, Internal, Database"], correct: 0 },
            { question: "Which property ensures all operations succeed together?", options: ["Durability", "Atomicity", "Isolation", "Consistency"], correct: 1 },
            { question: "Which command saves a transaction?", options: ["ROLLBACK", "DELETE", "COMMIT", "DROP"], correct: 2 },
            { question: "Which command cancels uncommitted transaction changes?", options: ["COMMIT", "ROLLBACK", "SELECT", "CREATE"], correct: 1 }
        ]
    },

    {
        title: "10. Connecting Databases with Backend Applications",
        sections: [
            {
                heading: "Why Backend Applications Need Databases",
                body: `Backend applications use databases to store and retrieve information.

For example, a student management application may store student profiles, attendance, marks, and course details.

The backend receives a request, communicates with the database, processes the result, and sends a response to the frontend.

The frontend should not connect directly to a database using secret database credentials.`
            },
            {
                heading: "Connecting Node.js with MySQL",
                body: `Node.js applications can connect to MySQL using packages such as mysql2.

A database connection requires the server address, username, password, and database name.

In real applications, credentials should be stored in environment variables instead of being hardcoded.`,
                code: `// Install the package:
// npm install mysql2

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "devoraa_db"
});

connection.connect((error) => {
    if (error) {
        console.error("Connection failed:", error);
        return;
    }

    console.log("Connected to MySQL");
});`
            },
            {
                heading: "Executing Database Queries",
                body: `Backend applications execute SQL queries to perform database operations.

Use parameterized queries instead of joining untrusted user input directly into SQL strings. Parameterized queries help protect against SQL injection.`,
                code: `const studentId = 1;

connection.execute(
    "SELECT * FROM students WHERE student_id = ?",
    [studentId],
    (error, results) => {
        if (error) {
            console.error(error);
            return;
        }

        console.log(results);
    }
);`
            },
            {
                heading: "Building a Simple Student API",
                body: `A student API can provide endpoints for creating and retrieving student records.

GET /students retrieves student records.

POST /students creates a new student record.

PUT /students/:id updates an existing student.

DELETE /students/:id removes a student record.

A backend should validate incoming data, use parameterized queries, handle database errors, and return suitable HTTP status codes.`
            },
            {
                heading: "Database Security Best Practices",
                body: `1. Never expose database passwords in frontend code.
2. Use environment variables for credentials.
3. Use parameterized SQL queries.
4. Give database accounts only the permissions they need.
5. Validate user input on the backend.
6. Back up important data.
7. Handle errors without exposing sensitive internal information.

These practices help build safer and more reliable applications.`
            }
        ],
        questions: [
            { question: "Why does a backend application use a database?", options: ["To style web pages", "To store and retrieve application data", "To design images", "To compile CSS"], correct: 1 },
            { question: "Which package can connect Node.js with MySQL?", options: ["mysql2", "react-dom", "express-html", "css-loader"], correct: 0 },
            { question: "Where should database passwords be stored?", options: ["Public frontend code", "HTML comments", "Environment variables", "Image files"], correct: 2 },
            { question: "What helps protect SQL queries from SQL injection?", options: ["String concatenation", "Parameterized queries", "Removing all tables", "Using CSS"], correct: 1 },
            { question: "Which HTTP method is commonly used to retrieve students?", options: ["POST", "DELETE", "GET", "PATCH only"], correct: 2 }
        ]
    }

];
