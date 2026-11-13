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
npm install mysql2

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
    },
    
    {
        title: "MongoDB Shell (mongosh)",
        sections: [
            {
                heading: "Introduction",
                body: "MongoDB Shell, also called mongosh, is a command-line interface used to interact with MongoDB databases. Developers use it to create databases, manage collections, insert documents, retrieve information and execute database commands. It provides direct access to MongoDB without requiring a graphical interface."
            },
            {
                heading: "Starting MongoDB Shell",
                body: "The mongosh command starts the MongoDB Shell and connects to a MongoDB server. The following commands help developers navigate and manage databases.",
                code: `mongosh

show dbs

use devoraa_db

db

show collections`
            },
            {
                heading: "Creating a Collection",
                body: "A collection stores related documents inside a database. The createCollection() method creates a new collection.",
                code: `use devoraa_db

db.createCollection("students")

show collections`
            },
            {
                heading: "Important Commands",
                body: "show dbs displays available databases. use selects a database. db displays the current database. show collections lists collections in the selected database."
            },
            {
                heading: "Practical Application",
                body: "MongoDB Shell is useful for testing queries, creating databases, managing collections and checking stored information during application development."
            }
        ],
        questions: [
            {
                question: "What is MongoDB Shell?",
                options: [
                    "A command-line interface for MongoDB",
                    "A programming language",
                    "A CSS framework",
                    "An operating system"
                ],
                correct: 0
            },
            {
                question: "Which command displays all databases?",
                options: ["show tables", "show dbs", "list database", "db.show"],
                correct: 1
            },
            {
                question: "Which command selects a database?",
                options: ["select db", "open database", "use", "create"],
                correct: 2
            },
            {
                question: "Which command displays collections?",
                options: ["show collections", "show dbs", "db", "find"],
                correct: 0
            },
            {
                question: "Which method creates a collection?",
                options: ["insertOne()", "find()", "createCollection()", "deleteOne()"],
                correct: 2
            }
        ]
    },

    {
        title: "MongoDB Insert Operations",
        sections: [
            {
                heading: "Introduction",
                body: "Insert operations are used to add new documents into MongoDB collections. MongoDB stores records as BSON documents. Each document contains fields and values. MongoDB supports insertOne() for inserting one document and insertMany() for inserting multiple documents."
            },
            {
                heading: "Insert One Document",
                body: "The insertOne() method adds a single document to a collection. MongoDB automatically generates a unique _id field if it is not supplied.",
                code: `db.students.insertOne({
    name: "Harsha",
    age: 19,
    branch: "ECE",
    city: "Vijayawada"
})`
            },
            {
                heading: "Insert Multiple Documents",
                body: "The insertMany() method inserts multiple documents in a single operation. Documents are passed as an array.",
                code: `db.students.insertMany([
    {
        name: "Ravi",
        age: 20,
        branch: "CSE"
    },
    {
        name: "Kiran",
        age: 19,
        branch: "ECE"
    },
    {
        name: "Suresh",
        age: 21,
        branch: "IT"
    }
])`
            },
            {
                heading: "Understanding the _id Field",
                body: "Every MongoDB document has a unique _id field. MongoDB automatically creates this field when the developer does not provide one. It helps identify individual documents inside a collection."
            },
            {
                heading: "Practical Application",
                body: "Insert operations are commonly used in student registration systems, employee management applications, online shopping platforms and customer databases."
            }
        ],
        questions: [
            {
                question: "Which method inserts one document?",
                options: ["find()", "insertOne()", "deleteOne()", "updateOne()"],
                correct: 1
            },
            {
                question: "Which method inserts multiple documents?",
                options: ["insertMany()", "findOne()", "updateOne()", "drop()"],
                correct: 0
            },
            {
                question: "What is the purpose of _id?",
                options: ["Store passwords", "Identify documents uniquely", "Delete collections", "Create databases"],
                correct: 1
            },
            {
                question: "MongoDB stores documents internally in which format?",
                options: ["HTML", "CSS", "BSON", "TXT"],
                correct: 2
            },
            {
                question: "Which method is suitable for inserting five documents together?",
                options: ["insertOne()", "insertMany()", "find()", "deleteMany()"],
                correct: 1
            }
        ]
    },

    {
        title: "MongoDB Find and Read Operations",
        sections: [
            {
                heading: "Introduction",
                body: "Read operations retrieve information stored in MongoDB collections. MongoDB provides find() and findOne() methods to search for documents. A query filter can be supplied to retrieve only documents that satisfy a particular condition."
            },
            {
                heading: "Find All Documents",
                body: "The find() method without a filter retrieves all documents in a collection.",
                code: `db.students.find()`
            },
            {
                heading: "Find Using a Condition",
                body: "A filter object specifies the conditions that documents must satisfy. The following example retrieves students whose branch is ECE.",
                code: `db.students.find({
    branch: "ECE"
})`
            },
            {
                heading: "Find One Document",
                body: "The findOne() method returns the first document that matches the specified filter.",
                code: `db.students.findOne({
    name: "Harsha"
})`
            },
            {
                heading: "Projection",
                body: "Projection controls which fields are displayed in the result. A value of 1 includes a field, while 0 excludes it. The _id field is included by default unless it is explicitly excluded.",
                code: `db.students.find(
    {},
    {
        name: 1,
        branch: 1,
        _id: 0
    }
)`
            },
            {
                heading: "Practical Application",
                body: "Read operations are used in search pages, student dashboards, product listings, employee directories and reporting systems."
            }
        ],
        questions: [
            {
                question: "Which method retrieves multiple matching documents?",
                options: ["insertOne()", "find()", "deleteOne()", "updateOne()"],
                correct: 1
            },
            {
                question: "Which method returns one matching document?",
                options: ["findOne()", "insertMany()", "drop()", "updateMany()"],
                correct: 0
            },
            {
                question: "What is a query filter?",
                options: ["A CSS property", "A condition used to select documents", "A database name", "A collection deletion command"],
                correct: 1
            },
            {
                question: "What does projection control?",
                options: ["Database creation", "Displayed fields", "Document deletion", "Server installation"],
                correct: 1
            },
            {
                question: "Which command retrieves ECE students?",
                options: [
                    'db.students.find({branch:"ECE"})',
                    'db.students.deleteMany({branch:"ECE"})',
                    'db.students.insertOne({branch:"ECE"})',
                    "db.students.drop()"
                ],
                correct: 0
            }
        ]
    },

    {
        title: "MongoDB Update Operations",
        sections: [
            {
                heading: "Introduction",
                body: "Update operations modify existing documents in a MongoDB collection. MongoDB provides updateOne(), updateMany() and replaceOne() methods. Update operators such as $set and $inc help modify specific fields."
            },
            {
                heading: "Update One Document",
                body: "updateOne() modifies the first document that matches the specified filter.",
                code: `db.students.updateOne(
    { name: "Harsha" },
    {
        $set: {
            city: "Hyderabad"
        }
    }
)`
            },
            {
                heading: "Update Multiple Documents",
                body: "updateMany() modifies every document that matches the specified filter.",
                code: `db.students.updateMany(
    { branch: "ECE" },
    {
        $set: {
            department: "Electronics"
        }
    }
)`
            },
            {
                heading: "Using the $inc Operator",
                body: "The $inc operator increases or decreases a numeric field by a specified amount. It is useful for counters, scores and quantity values.",
                code: `db.students.updateOne(
    { name: "Harsha" },
    {
        $inc: {
            age: 1
        }
    }
)`
            },
            {
                heading: "Practical Application",
                body: "Update operations are useful for changing customer addresses, updating employee information, modifying product prices and maintaining student records."
            }
        ],
        questions: [
            {
                question: "Which method updates one matching document?",
                options: ["findOne()", "updateOne()", "insertOne()", "deleteOne()"],
                correct: 1
            },
            {
                question: "Which method updates multiple matching documents?",
                options: ["updateMany()", "insertMany()", "find()", "drop()"],
                correct: 0
            },
            {
                question: "Which operator changes a field value?",
                options: ["$find", "$delete", "$set", "$read"],
                correct: 2
            },
            {
                question: "What is the purpose of $inc?",
                options: ["Delete a field", "Increase or decrease a numeric value", "Create a collection", "Search a database"],
                correct: 1
            },
            {
                question: "Which operation modifies existing documents?",
                options: ["Update", "Insert", "Read", "Connect"],
                correct: 0
            }
        ]
    },

    {
        title: "MongoDB Delete Operations",
        sections: [
            {
                heading: "Introduction",
                body: "Delete operations remove documents from MongoDB collections. MongoDB provides deleteOne() and deleteMany() methods. A filter specifies which documents should be removed."
            },
            {
                heading: "Delete One Document",
                body: "deleteOne() removes the first document matching the given filter.",
                code: `db.students.deleteOne({
    name: "Harsha"
})`
            },
            {
                heading: "Delete Multiple Documents",
                body: "deleteMany() removes all documents that match the specified filter.",
                code: `db.students.deleteMany({
    branch: "ECE"
})`
            },
            {
                heading: "Delete All Documents",
                body: "An empty filter matches every document in the collection. Therefore, deleteMany({}) removes all documents but keeps the collection itself.",
                code: `db.students.deleteMany({})`
            },
            {
                heading: "Important Precautions",
                body: "Always check the filter before executing a delete command. An empty filter can match every document. In real applications, deletion should be performed carefully and only when authorized."
            },
            {
                heading: "Practical Application",
                body: "Delete operations are used to remove outdated records, clean temporary data and manage records that are no longer required."
            }
        ],
        questions: [
            {
                question: "Which method deletes one matching document?",
                options: ["deleteOne()", "findOne()", "insertOne()", "updateOne()"],
                correct: 0
            },
            {
                question: "Which method deletes multiple matching documents?",
                options: ["find()", "deleteMany()", "insertMany()", "updateOne()"],
                correct: 1
            },
            {
                question: "What does deleteMany({}) do?",
                options: ["Deletes one field", "Deletes all documents in the collection", "Deletes the database", "Creates a collection"],
                correct: 1
            },
            {
                question: "Does deleteMany({}) remove the collection itself?",
                options: ["Yes", "No", "Only sometimes", "It renames the collection"],
                correct: 1
            },
            {
                question: "What should be checked before deleting documents?",
                options: ["CSS file", "Query filter", "HTML title", "Browser theme"],
                correct: 1
            }
        ]
    }

    {
        title: "MongoDB Query Operators",
        sections: [
            {
                heading: "Introduction",
                body: "MongoDB query operators are special keywords used to perform advanced searches and filter documents based on specific conditions. They help developers retrieve records using comparison, logical and element-based conditions."
            },
            {
                heading: "Comparison Operators",
                body: "Comparison operators compare field values with specified values. Common operators include $eq, $ne, $gt, $gte, $lt and $lte.",
                code: `// Greater than
db.students.find({
    age: { $gt: 18 }
})

// Less than
db.students.find({
    age: { $lt: 20 }
})

// Greater than or equal to
db.students.find({
    age: { $gte: 19 }
})

// Not equal to
db.students.find({
    branch: { $ne: "CSE" }
})`
            },
            {
                heading: "Logical Operators",
                body: "Logical operators combine multiple conditions. $and requires all conditions to be true, $or requires at least one condition to be true, and $not reverses a condition.",
                code: `// AND operator
db.students.find({
    $and: [
        { age: { $gte: 18 } },
        { branch: "ECE" }
    ]
})

// OR operator
db.students.find({
    $or: [
        { branch: "ECE" },
        { branch: "CSE" }
    ]
})`
            },
            {
                heading: "Membership Operators",
                body: "$in selects documents where a field matches any value in a given array. $nin selects documents whose field value does not match any value in the array.",
                code: `db.students.find({
    branch: {
        $in: ["ECE", "CSE"]
    }
})`
            },
            {
                heading: "Practical Application",
                body: "Query operators are useful in shopping filters, student result searches, employee databases, product price filtering and advanced search features."
            }
        ],
        questions: [
            {
                question: "Which operator checks whether a value is greater than another value?",
                options: ["$lt", "$gt", "$eq", "$ne"],
                correct: 1
            },
            {
                question: "Which operator checks whether at least one condition is true?",
                options: ["$and", "$or", "$not", "$eq"],
                correct: 1
            },
            {
                question: "What is the purpose of $in?",
                options: [
                    "Deletes documents",
                    "Matches any value in a specified array",
                    "Creates a database",
                    "Updates all fields"
                ],
                correct: 1
            },
            {
                question: "Which operator checks for values less than or equal to a given value?",
                options: ["$gte", "$gt", "$lte", "$ne"],
                correct: 2
            },
            {
                question: "Which operator selects documents that do not match values in an array?",
                options: ["$in", "$nin", "$or", "$set"],
                correct: 1
            }
        ]
    },

    {
        title: "MongoDB Sorting and Limiting",
        sections: [
            {
                heading: "Introduction",
                body: "Sorting and limiting are used to control the order and number of documents returned by a MongoDB query. Sorting organizes results based on field values, while limiting restricts the number of returned documents."
            },
            {
                heading: "Sorting Documents",
                body: "The sort() method arranges documents according to one or more fields. A value of 1 represents ascending order and -1 represents descending order.",
                code: `// Ascending order
db.students.find().sort({
    age: 1
})

// Descending order
db.students.find().sort({
    age: -1
})`
            },
            {
                heading: "Limiting Documents",
                body: "The limit() method restricts the maximum number of documents returned by a query.",
                code: `// Display only 5 students
db.students.find().limit(5)`
            },
            {
                heading: "Skipping Documents",
                body: "The skip() method ignores a specified number of documents before returning the remaining results. It is often used with limit() to implement pagination.",
                code: `// Skip first 5 records
// Display next 5 records
db.students.find()
    .skip(5)
    .limit(5)`
            },
            {
                heading: "Combining Sorting and Limiting",
                body: "Sorting, skipping and limiting can be combined to create organized result pages.",
                code: `db.students.find()
    .sort({ age: -1 })
    .skip(0)
    .limit(5)`
            },
            {
                heading: "Practical Application",
                body: "These methods are used in product listings, student rankings, dashboards, search result pages and online shopping applications."
            }
        ],
        questions: [
            {
                question: "Which method sorts MongoDB documents?",
                options: ["sort()", "delete()", "insert()", "connect()"],
                correct: 0
            },
            {
                question: "Which value represents ascending order?",
                options: ["-1", "0", "1", "10"],
                correct: 2
            },
            {
                question: "Which method restricts the number of results?",
                options: ["skip()", "limit()", "drop()", "update()"],
                correct: 1
            },
            {
                question: "What is the purpose of skip()?",
                options: [
                    "Delete a database",
                    "Ignore a specified number of documents",
                    "Insert new records",
                    "Rename a collection"
                ],
                correct: 1
            },
            {
                question: "Which feature is commonly implemented using skip() and limit()?",
                options: ["Authentication", "Pagination", "Encryption", "Compilation"],
                correct: 1
            }
        ]
    },

    {
        title: "MongoDB Indexing",
        sections: [
            {
                heading: "Introduction",
                body: "Indexing is a database technique used to improve the speed of data retrieval. An index stores information about selected fields so MongoDB can locate matching documents more efficiently. Without a suitable index, MongoDB may need to examine many documents to find matching records."
            },
            {
                heading: "Creating an Index",
                body: "The createIndex() method creates an index on a specified field. The value 1 creates an ascending index, while -1 creates a descending index.",
                code: `db.students.createIndex({
    name: 1
})`
            },
            {
                heading: "Creating a Compound Index",
                body: "A compound index contains multiple fields. It can support queries that use the indexed fields in suitable combinations and order.",
                code: `db.students.createIndex({
    branch: 1,
    age: -1
})`
            },
            {
                heading: "Viewing Indexes",
                body: "The getIndexes() method displays the indexes created on a collection.",
                code: `db.students.getIndexes()`
            },
            {
                heading: "Deleting an Index",
                body: "The dropIndex() method removes a particular index from a collection. Indexes should be removed carefully because queries may become slower if they depend on them.",
                code: `db.students.dropIndex("name_1")`
            },
            {
                heading: "Advantages and Limitations",
                body: "Indexes improve query performance when used appropriately. However, they require additional storage and can increase the cost of insert, update and delete operations because indexes must also be maintained."
            },
            {
                heading: "Practical Application",
                body: "Indexes are useful in large student databases, product catalogues, employee records and applications that frequently search using particular fields."
            }
        ],
        questions: [
            {
                question: "What is the main purpose of indexing?",
                options: [
                    "Improve data retrieval speed",
                    "Delete all documents",
                    "Create HTML pages",
                    "Install MongoDB"
                ],
                correct: 0
            },
            {
                question: "Which method creates an index?",
                options: ["createIndex()", "insertIndex()", "makeIndex()", "findIndex()"],
                correct: 0
            },
            {
                question: "Which value represents an ascending index?",
                options: ["-1", "1", "0", "2"],
                correct: 1
            },
            {
                question: "Which method displays collection indexes?",
                options: ["showIndexes()", "getIndexes()", "findIndexes()", "readIndexes()"],
                correct: 1
            },
            {
                question: "What is one disadvantage of indexes?",
                options: [
                    "They prevent all searches",
                    "They require extra storage",
                    "They remove collections",
                    "They disable MongoDB"
                ],
                correct: 1
            }
        ]
    },

    {
        title: "MongoDB Aggregation Pipeline",
        sections: [
            {
                heading: "Introduction",
                body: "Aggregation is a MongoDB feature used to process documents and calculate summarized results. The aggregation pipeline consists of multiple stages. Each stage performs an operation on the documents and passes its output to the next stage."
            },
            {
                heading: "The aggregate() Method",
                body: "The aggregate() method executes an aggregation pipeline on a collection. Each stage is represented as an object inside an array.",
                code: `db.students.aggregate([
    {
        $match: {
            branch: "ECE"
        }
    }
])`
            },
            {
                heading: "The $match Stage",
                body: "The $match stage filters documents according to specified conditions. It works similarly to find() but is used inside an aggregation pipeline.",
                code: `db.students.aggregate([
    {
        $match: {
            age: { $gte: 18 }
        }
    }
])`
            },
            {
                heading: "The $group Stage",
                body: "The $group stage groups documents by a specified field and performs calculations such as counting or summing values.",
                code: `db.students.aggregate([
    {
        $group: {
            _id: "$branch",
            totalStudents: {
                $sum: 1
            }
        }
    }
])`
            },
            {
                heading: "The $sort and $project Stages",
                body: "$sort arranges documents in ascending or descending order. $project controls which fields appear in the output.",
                code: `db.students.aggregate([
    {
        $project: {
            name: 1,
            branch: 1,
            _id: 0
        }
    },
    {
        $sort: {
            name: 1
        }
    }
])`
            },
            {
                heading: "Practical Application",
                body: "Aggregation is useful for generating sales reports, calculating average marks, counting students by branch, analysing product orders and preparing business reports."
            }
        ],
        questions: [
            {
                question: "What is MongoDB aggregation used for?",
                options: [
                    "Processing and summarizing documents",
                    "Creating CSS styles",
                    "Installing Node.js",
                    "Deleting the MongoDB server"
                ],
                correct: 0
            },
            {
                question: "Which method executes an aggregation pipeline?",
                options: ["find()", "aggregate()", "insertOne()", "deleteOne()"],
                correct: 1
            },
            {
                question: "Which stage filters documents?",
                options: ["$group", "$sort", "$match", "$project"],
                correct: 2
            },
            {
                question: "Which stage groups documents?",
                options: ["$group", "$match", "$limit", "$skip"],
                correct: 0
            },
            {
                question: "Which operator calculates a total?",
                options: ["$sum", "$delete", "$find", "$read"],
                correct: 0
            }
        ]
    },

    {
        title: "MongoDB Relationships and Embedded Documents",
        sections: [
            {
                heading: "Introduction",
                body: "MongoDB is a document-oriented database, but documents can still represent relationships between different types of information. Related data can be stored together inside an embedded document or referenced using identifiers."
            },
            {
                heading: "Embedded Documents",
                body: "An embedded document stores related information inside another document. This approach is useful when related information is usually accessed together.",
                code: `db.students.insertOne({
    name: "Harsha",
    branch: "ECE",
    address: {
        city: "Vijayawada",
        state: "Andhra Pradesh",
        country: "India"
    }
})`
            },
            {
                heading: "Accessing Embedded Fields",
                body: "MongoDB uses dot notation to query fields inside embedded documents.",
                code: `db.students.find({
    "address.city": "Vijayawada"
})`
            },
            {
                heading: "Referenced Documents",
                body: "References store an identifier that points to another document. This is useful when related information is large, shared by many records or frequently updated independently.",
                code: `// Student document
db.students.insertOne({
    name: "Harsha",
    courseId: 101
})

// Course document
db.courses.insertOne({
    courseId: 101,
    courseName: "Electronics"
})`
            },
            {
                heading: "Embedded vs Referenced Data",
                body: "Embedded documents provide convenient access to closely related data. References reduce unnecessary duplication and support relationships between separately maintained documents. The appropriate design depends on how the application reads and updates its data."
            },
            {
                heading: "Practical Application",
                body: "These approaches are used in customer addresses, online orders, student-course systems, product catalogues and social media applications."
            }
        ],
        questions: [
            {
                question: "What is an embedded document?",
                options: [
                    "A document stored inside another document",
                    "A deleted collection",
                    "A JavaScript file",
                    "A database connection"
                ],
                correct: 0
            },
            {
                question: "Which notation accesses an embedded field?",
                options: ["Slash notation", "Dot notation", "HTML notation", "CSS notation"],
                correct: 1
            },
            {
                question: "What does a reference generally store?",
                options: [
                    "A document identifier",
                    "A CSS property",
                    "A browser address",
                    "A password in plain text"
                ],
                correct: 0
            },
            {
                question: "When is embedding useful?",
                options: [
                    "When related data is commonly accessed together",
                    "When no database exists",
                    "Only for HTML files",
                    "For deleting databases"
                ],
                correct: 0
            },
            {
                question: "Which design can reduce unnecessary data duplication?",
                options: ["References", "CSS", "HTML", "Loops"],
                correct: 0
            }
        ]
    },

    {
        title: "MongoDB with Node.js",
        sections: [
            {
                heading: "Introduction",
                body: "Node.js applications can connect to MongoDB using the official MongoDB Node.js driver. This driver allows JavaScript applications to communicate with MongoDB servers and perform database operations such as inserting, reading, updating and deleting documents."
            },
            {
                heading: "Installing MongoDB Driver",
                body: "Before connecting to MongoDB, install Node.js and create a project directory. Then initialize the project and install the official MongoDB driver.",
                code: `mkdir devoraa-mongodb

cd devoraa-mongodb

npm init -y

npm install mongodb`
            },
            {
                heading: "Connecting to MongoDB",
                body: "The MongoClient class creates a connection between a Node.js application and a MongoDB server. The following example uses a local MongoDB server.",
                code: `const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();

        console.log("MongoDB Connected");

        const db = client.db("devoraa_db");

        const students = db.collection("students");

        console.log("Database Ready");

    } catch (error) {
        console.error(error);
    }
}

connectDB();`
            },
            {
                heading: "Inserting Data Through Node.js",
                body: "After establishing a connection, the collection's insertOne() method can add a document from the Node.js application.",
                code: `const result = await students.insertOne({
    name: "Harsha",
    branch: "ECE"
});

console.log("Inserted ID:", result.insertedId);`
            },
            {
                heading: "Reading Data Through Node.js",
                body: "The find() method returns a cursor. The toArray() method converts the retrieved documents into an array that can be processed by JavaScript.",
                code: `const records = await students
    .find({})
    .toArray();

console.log(records);`
            },
            {
                heading: "Important Development Practices",
                body: "Use environment variables to store database connection strings. Handle connection errors, validate user input and close database connections when appropriate. Never expose database credentials in public source code."
            },
            {
                heading: "Practical Application",
                body: "The Node.js MongoDB driver is used in student portals, inventory management applications, e-commerce websites and REST API backends."
            }
        ],
        questions: [
            {
                question: "Which package connects Node.js with MongoDB?",
                options: ["mongodb", "express-css", "react-dom", "mysql-html"],
                correct: 0
            },
            {
                question: "Which class is used to create a MongoDB client?",
                options: ["MongoClient", "DatabaseClient", "ReactClient", "NodeServer"],
                correct: 0
            },
            {
                question: "Which command installs the MongoDB driver?",
                options: [
                    "npm install mongodb",
                    "npm install html",
                    "git install mongodb",
                    "node create mongodb"
                ],
                correct: 0
            },
            {
                question: "Which method establishes the connection?",
                options: ["connect()", "delete()", "style()", "render()"],
                correct: 0
            },
            {
                question: "Why should connection strings be stored securely?",
                options: [
                    "To protect database credentials",
                    "To change CSS",
                    "To improve screen brightness",
                    "To create HTML tags"
                ],
                correct: 0
            }
        ]
    },

    {
        title: "MongoDB Atlas Cloud Database",
        sections: [
            {
                heading: "Introduction",
                body: "MongoDB Atlas is a cloud database service that allows developers to create, manage and access MongoDB databases over the internet. Instead of managing database servers manually on a local computer, developers can use a hosted database environment."
            },
            {
                heading: "Creating an Atlas Database",
                body: "To begin, create an account on MongoDB Atlas, create a project and deploy a database cluster. Select the available configuration suitable for learning or application development. Follow the platform's current setup instructions."
            },
            {
                heading: "Database User and Network Access",
                body: "Create a database user with a strong password. Configure network access to allow only trusted addresses or networks where possible. Database credentials and access permissions must be protected."
            },
            {
                heading: "Connecting an Application",
                body: "Atlas provides a connection string for applications. The connection string is used by the MongoDB driver to connect Node.js to the cloud database.",
                code: `const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();

        console.log("Connected to MongoDB Atlas");

        const db = client.db("devoraa_db");

        return db;

    } catch (error) {
        console.error("Connection failed:", error);
        throw error;
    }
}

connectDB();`
            },
            {
                heading: "Environment Variables",
                body: "Environment variables store configuration separately from application source code. The dotenv package can load variables from a local .env file during development.",
                code: `npm install dotenv

// Create a .env file
MONGODB_URI=your_mongodb_connection_string

// At the beginning of your Node.js entry file
require("dotenv").config();

const uri = process.env.MONGODB_URI;`
            },
            {
                heading: "Security Best Practices",
                body: "Never publish database passwords or connection strings in public repositories. Add .env to .gitignore, use appropriate database permissions and configure network access carefully. Rotate credentials if they are accidentally exposed."
            },
            {
                heading: "Practical Application",
                body: "MongoDB Atlas is useful for deployed web applications, student projects, e-commerce platforms, cloud-based services and applications that need database access from different environments."
            }
        ],
        questions: [
            {
                question: "What is MongoDB Atlas?",
                options: [
                    "A cloud database service",
                    "A CSS framework",
                    "A code editor",
                    "An operating system"
                ],
                correct: 0
            },
            {
                question: "What does a connection string provide?",
                options: [
                    "Database connection information",
                    "HTML page design",
                    "CSS animations",
                    "JavaScript comments"
                ],
                correct: 0
            },
            {
                question: "Where should database credentials be stored?",
                options: [
                    "Public HTML file",
                    "Secure environment variables",
                    "Public GitHub README",
                    "CSS stylesheet"
                ],
                correct: 1
            },
            {
                question: "Which package loads .env variables in Node.js?",
                options: ["dotenv", "react", "express-css", "nodemon-html"],
                correct: 0
            },
            {
                question: "Why should database access be restricted?",
                options: [
                    "To improve security",
                    "To remove JavaScript",
                    "To disable queries",
                    "To change website colours"
                ],
                correct: 0
            }
        ]
    }

    {
        title: "MongoDB Transactions and ACID Properties",
        sections: [
            {
                heading: "Introduction",
                body: "A transaction is a group of database operations treated as one logical unit of work. Transactions help maintain data consistency when multiple operations must succeed together. MongoDB supports multi-document transactions on replica sets and sharded clusters."
            },
            {
                heading: "ACID Properties",
                body: "ACID represents Atomicity, Consistency, Isolation and Durability. Atomicity means all operations in a transaction succeed or the transaction is rolled back. Consistency ensures database rules remain satisfied. Isolation controls how concurrent transactions interact. Durability means committed changes are preserved."
            },
            {
                heading: "Starting a Transaction",
                body: "In the MongoDB Node.js driver, a session can be created and a transaction can be started using startTransaction(). Database operations inside the transaction must use the same session.",
                code: `const session = client.startSession();

try {
    session.startTransaction();

    await db.collection("accounts").updateOne(
        { name: "Ravi" },
        { $inc: { balance: -500 } },
        { session }
    );

    await db.collection("accounts").updateOne(
        { name: "Kiran" },
        { $inc: { balance: 500 } },
        { session }
    );

    await session.commitTransaction();

    console.log("Transaction committed");

} catch (error) {
    await session.abortTransaction();

    console.log("Transaction aborted");

} finally {
    await session.endSession();
}`
            },
            {
                heading: "Commit and Rollback",
                body: "commitTransaction() confirms the transaction and saves its changes. abortTransaction() cancels the transaction so its uncommitted changes are not applied. The session should be ended after the transaction."
            },
            {
                heading: "Practical Application",
                body: "Transactions are useful in banking systems, order processing, payment applications and inventory management where multiple database changes must remain consistent."
            }
        ],
        questions: [
            {
                question: "What is a database transaction?",
                options: [
                    "A group of operations treated as one logical unit",
                    "A CSS property",
                    "A web browser",
                    "A programming language"
                ],
                correct: 0
            },
            {
                question: "What does ACID stand for?",
                options: [
                    "Atomicity, Consistency, Isolation, Durability",
                    "Application, Code, Internet, Database",
                    "Array, Class, Index, Data",
                    "Access, Create, Insert, Delete"
                ],
                correct: 0
            },
            {
                question: "Which method starts a transaction?",
                options: ["startTransaction()", "createDatabase()", "insertOne()", "findOne()"],
                correct: 0
            },
            {
                question: "Which method confirms a transaction?",
                options: ["abortTransaction()", "commitTransaction()", "deleteMany()", "drop()"],
                correct: 1
            },
            {
                question: "Which method cancels an uncommitted transaction?",
                options: ["commitTransaction()", "abortTransaction()", "find()", "sort()"],
                correct: 1
            }
        ]
    },

    {
        title: "MongoDB Data Validation and Schema Design",
        sections: [
            {
                heading: "Introduction",
                body: "MongoDB is a flexible document database, but flexibility does not mean that every document should contain arbitrary data. Schema validation allows developers to define rules for the structure and data types of documents stored in a collection."
            },
            {
                heading: "Creating a Collection with Validation",
                body: "MongoDB supports JSON Schema validation. Developers can specify required fields, data types and other rules while creating a collection.",
                code: `db.createCollection("employees", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "age"],
            properties: {
                name: {
                    bsonType: "string"
                },
                age: {
                    bsonType: "int",
                    minimum: 18
                }
            }
        }
    }
})`
            },
            {
                heading: "Required Fields",
                body: "The required property specifies fields that must be present in a document. If a required field is missing, the document may be rejected according to the configured validation action."
            },
            {
                heading: "Data Types",
                body: "The bsonType property defines the expected BSON data type. Common types include string, int, double, bool, date, array and object.",
                code: `db.createCollection("products", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                productName: {
                    bsonType: "string"
                },
                price: {
                    bsonType: "double"
                },
                available: {
                    bsonType: "bool"
                }
            }
        }
    }
})`
            },
            {
                heading: "Schema Design Principles",
                body: "A good MongoDB schema should reflect how the application reads and updates information. Developers should decide carefully whether related data should be embedded or referenced, avoid unnecessary duplication and create indexes for frequently queried fields."
            },
            {
                heading: "Practical Application",
                body: "Validation and schema design are useful in registration systems, inventory applications, financial records and business databases where data quality is important."
            }
        ],
        questions: [
            {
                question: "What is schema validation?",
                options: [
                    "Checking documents against defined rules",
                    "Deleting a database",
                    "Creating CSS files",
                    "Connecting a keyboard"
                ],
                correct: 0
            },
            {
                question: "Which MongoDB feature supports JSON Schema validation?",
                options: ["$jsonSchema", "$find", "$delete", "$sort"],
                correct: 0
            },
            {
                question: "What does the required property specify?",
                options: [
                    "Fields that must be present",
                    "Fields to delete",
                    "Database passwords",
                    "Collection names"
                ],
                correct: 0
            },
            {
                question: "Which BSON type represents text?",
                options: ["string", "bool", "date", "int"],
                correct: 0
            },
            {
                question: "Why is schema design important?",
                options: [
                    "It supports efficient and reliable data management",
                    "It replaces the operating system",
                    "It creates CSS animations",
                    "It removes all indexes"
                ],
                correct: 0
            }
        ]
    },

    {
        title: "MongoDB Backup and Restore",
        sections: [
            {
                heading: "Introduction",
                body: "Database backup means creating a copy of database information so it can be restored if data is lost or damaged. MongoDB Database Tools provide utilities such as mongodump and mongorestore for backup and restoration."
            },
            {
                heading: "Creating a Backup",
                body: "The mongodump utility creates a BSON backup of MongoDB data. The following example backs up the devoraa_db database to a directory named backup.",
                code: `mongodump --db devoraa_db --out ./backup`
            },
            {
                heading: "Restoring a Backup",
                body: "The mongorestore utility restores data from a backup created by mongodump. The database tools must be installed and the MongoDB server must be accessible.",
                code: `mongorestore --db devoraa_db ./backup/devoraa_db`
            },
            {
                heading: "Backup with a Connection String",
                body: "For a remote database, backup tools can connect using an authorized MongoDB connection string. Credentials should be handled securely and should not be placed in public scripts.",
                code: `mongodump --uri="YOUR_MONGODB_URI" --out="./backup"`
            },
            {
                heading: "Backup Best Practices",
                body: "Create backups regularly, store them securely, restrict access and test restoration procedures. A backup is useful only when the data can actually be restored when required."
            },
            {
                heading: "Practical Application",
                body: "Backups are important for business applications, student databases, e-commerce platforms and any system that stores important information."
            }
        ],
        questions: [
            {
                question: "What is a database backup?",
                options: [
                    "A copy of database information",
                    "A CSS file",
                    "A programming language",
                    "A browser extension"
                ],
                correct: 0
            },
            {
                question: "Which utility creates a MongoDB backup?",
                options: ["mongodump", "mongorestore", "mongosh-only", "npm"],
                correct: 0
            },
            {
                question: "Which utility restores MongoDB backup data?",
                options: ["mongodump", "mongorestore", "node", "git"],
                correct: 1
            },
            {
                question: "What is the purpose of testing restoration?",
                options: [
                    "To verify that backup data can be recovered",
                    "To change the website design",
                    "To remove all databases",
                    "To install a browser"
                ],
                correct: 0
            },
            {
                question: "Where should backup files be stored?",
                options: [
                    "In a secure location",
                    "In a public password file",
                    "Only in CSS",
                    "Inside a browser address bar"
                ],
                correct: 0
            }
        ]
    },

    {
        title: "MongoDB Performance Monitoring",
        sections: [
            {
                heading: "Introduction",
                body: "Database performance monitoring involves observing query execution, resource usage and database activity. It helps developers identify slow queries and understand how efficiently an application communicates with MongoDB."
            },
            {
                heading: "Explain Query Execution",
                body: "The explain() method provides information about how MongoDB executes a query. It helps developers understand whether an index is used and how many documents are examined.",
                code: `db.students.find({
    branch: "ECE"
}).explain("executionStats")`
            },
            {
                heading: "Important Execution Statistics",
                body: "executionStats provides useful information such as execution time, total documents examined and total documents returned. These statistics help compare query performance."
            },
            {
                heading: "Using Indexes for Better Performance",
                body: "Indexes can reduce the amount of data MongoDB needs to examine for suitable queries. However, indexes should be selected based on real query patterns and tested using explain().",
                code: `db.students.createIndex({
    branch: 1
})

db.students.find({
    branch: "ECE"
}).explain("executionStats")`
            },
            {
                heading: "Monitoring Best Practices",
                body: "Monitor slow queries, review index usage, avoid unnecessary data retrieval and observe database resource usage. Performance should be measured with realistic data and workloads."
            },
            {
                heading: "Practical Application",
                body: "Performance monitoring is important in large websites, online shopping platforms, reporting systems and applications that handle frequent database queries."
            }
        ],
        questions: [
            {
                question: "What is database performance monitoring?",
                options: [
                    "Observing database activity and efficiency",
                    "Creating HTML elements",
                    "Changing a computer wallpaper",
                    "Writing CSS animations"
                ],
                correct: 0
            },
            {
                question: "Which method provides query execution information?",
                options: ["explain()", "insertOne()", "deleteOne()", "createCollection()"],
                correct: 0
            },
            {
                question: "Which option provides execution statistics?",
                options: [
                    "executionStats",
                    "deleteStats",
                    "htmlStats",
                    "cssStats"
                ],
                correct: 0
            },
            {
                question: "What does totalDocsExamined represent?",
                options: [
                    "Documents examined during query execution",
                    "Number of CSS files",
                    "Number of users logged in",
                    "Number of databases deleted"
                ],
                correct: 0
            },
            {
                question: "Why should indexes be tested?",
                options: [
                    "To understand their effect on query performance",
                    "To change HTML structure",
                    "To remove Node.js",
                    "To create a new programming language"
                ],
                correct: 0
            }
        ]
    },

    {
        title: "MongoDB Security and Access Control",
        sections: [
            {
                heading: "Introduction",
                body: "MongoDB security protects databases from unauthorized access, accidental changes and data exposure. Security includes authentication, authorization, network restrictions, secure configuration and careful credential management."
            },
            {
                heading: "Authentication",
                body: "Authentication verifies the identity of a user or application before allowing access. MongoDB supports authentication mechanisms such as SCRAM. Applications should use properly configured database accounts."
            },
            {
                heading: "Authorization and Roles",
                body: "Authorization determines what an authenticated user is allowed to do. MongoDB uses role-based access control. Built-in roles include read, readWrite and database administration roles. Users should receive only the permissions they need."
            },
            {
                heading: "Creating a Database User",
                body: "The following example creates a database user with read and write permissions on the devoraa_db database. Execute it in an appropriately authorized MongoDB administrative session.",
                code: `use admin

db.createUser({
    user: "devoraa_user",
    pwd: passwordPrompt(),
    roles: [
        {
            role: "readWrite",
            db: "devoraa_db"
        }
    ]
})`
            },
            {
                heading: "Security Best Practices",
                body: "Use strong credentials, enable authentication, restrict network access, apply least-privilege permissions, use encrypted connections where appropriate and keep database software updated. Never publish credentials in public repositories."
            },
            {
                heading: "Practical Application",
                body: "Database security is essential in banking applications, student portals, business systems, customer databases and cloud-hosted applications."
            }
        ],
        questions: [
            {
                question: "What is authentication?",
                options: [
                    "Verifying user identity",
                    "Sorting documents",
                    "Deleting collections",
                    "Creating CSS files"
                ],
                correct: 0
            },
            {
                question: "What is authorization?",
                options: [
                    "Determining allowed actions",
                    "Installing MongoDB",
                    "Creating a web page",
                    "Changing a database name"
                ],
                correct: 0
            },
            {
                question: "Which role allows reading and writing database data?",
                options: ["readWrite", "readOnlyCSS", "deleteAll", "htmlAdmin"],
                correct: 0
            },
            {
                question: "What does least privilege mean?",
                options: [
                    "Giving users only the permissions they need",
                    "Giving every user full administrator access",
                    "Removing all database users",
                    "Disabling authentication"
                ],
                correct: 0
            },
            {
                question: "Where should database passwords not be published?",
                options: [
                    "Public source-code repositories",
                    "Secure secret storage",
                    "Protected environment variables",
                    "A secure password manager"
                ],
                correct: 0
            }
        ]
    },

    {
        title: "MongoDB Integration with Express REST API",
        sections: [
            {
                heading: "Introduction",
                body: "Express.js can be used with MongoDB to build REST APIs. A REST API allows frontend applications to communicate with a backend server through HTTP methods such as GET, POST, PUT and DELETE. Express handles incoming requests, while MongoDB stores application data."
            },
            {
                heading: "Project Setup",
                body: "Create a Node.js project and install Express, the MongoDB driver and dotenv. These packages help build the server, communicate with the database and load environment variables.",
                code: `mkdir devoraa-api

cd devoraa-api

npm init -y

npm install express mongodb dotenv`
            },
            {
                heading: "Creating the Express Server",
                body: "The following example creates an Express server, connects to MongoDB and exposes a GET endpoint to retrieve student records. Create a .env file containing your MONGODB_URI and PORT values. Keep .env out of Git.",
                code: `require("dotenv").config();

const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

app.use(express.json());

const client = new MongoClient(
    process.env.MONGODB_URI
);

let students;

async function startServer() {
    try {
        await client.connect();

        const db = client.db("devoraa_db");

        students = db.collection("students");

        app.get("/students", async (req, res) => {
            try {
                const records = await students
                    .find({})
                    .toArray();

                res.json(records);

            } catch (error) {
                res.status(500).json({
                    message: "Unable to fetch students"
                });
            }
        });

        app.listen(process.env.PORT || 3000, () => {
            console.log("Server is running");
        });

    } catch (error) {
        console.error("Server startup failed:", error);
        process.exit(1);
    }
}

startServer();`
            },
            {
                heading: "Understanding HTTP Methods",
                body: "GET retrieves information. POST creates a new resource. PUT or PATCH modifies existing information. DELETE removes a resource. These methods form the foundation of REST API development."
            },
            {
                heading: "Testing the API",
                body: "After starting the server, send a GET request to http://localhost:3000/students using a browser or an API testing tool. The endpoint returns student documents in JSON format."
            },
            {
                heading: "Practical Application",
                body: "Express and MongoDB integration is used in student management portals, e-commerce websites, inventory systems and many modern web applications."
            }
        ],
        questions: [
            {
                question: "What is the purpose of Express.js?",
                options: [
                    "Building web servers and APIs",
                    "Designing database indexes",
                    "Creating operating systems",
                    "Editing images"
                ],
                correct: 0
            },
            {
                question: "Which HTTP method retrieves information?",
                options: ["GET", "POST", "DELETE", "PATCH"],
                correct: 0
            },
            {
                question: "Which HTTP method commonly creates a resource?",
                options: ["GET", "POST", "DELETE", "OPTIONS"],
                correct: 1
            },
            {
                question: "Which middleware parses incoming JSON request bodies?",
                options: ["express.json()", "express.css()", "express.html()", "express.database()"],
                correct: 0
            },
            {
                question: "Which endpoint retrieves student records in the example?",
                options: ["/students", "/delete", "/styles", "/images"],
                correct: 0
            }
        ]
    },

    {
        title: "MongoDB Database Project",
        sections: [
            {
                heading: "Introduction",
                body: "A practical database project combines database creation, collection management and CRUD operations into one working application. A Student Management Database is a useful example for understanding how MongoDB works in a real-world situation."
            },
            {
                heading: "Step 1: Create the Database",
                body: "Select the database and create a students collection.",
                code: `use devoraa_db

db.createCollection("students")`
            },
            {
                heading: "Step 2: Insert Student Records",
                body: "Insert multiple student documents containing names, branches, ages and marks.",
                code: `db.students.insertMany([
    {
        name: "Harsha",
        branch: "ECE",
        age: 19,
        marks: 85
    },
    {
        name: "Ravi",
        branch: "CSE",
        age: 20,
        marks: 90
    },
    {
        name: "Kiran",
        branch: "ECE",
        age: 19,
        marks: 78
    }
])`
            },
            {
                heading: "Step 3: Retrieve Student Records",
                body: "Use find() to display all records and filters to search for specific students.",
                code: `// Display all students
db.students.find()

// Display ECE students
db.students.find({
    branch: "ECE"
})

// Find students with marks above 80
db.students.find({
    marks: { $gt: 80 }
})`
            },
            {
                heading: "Step 4: Update Student Information",
                body: "Update the marks of a particular student using updateOne() and the $set operator.",
                code: `db.students.updateOne(
    { name: "Harsha" },
    {
        $set: {
            marks: 92
        }
    }
)`
            },
            {
                heading: "Step 5: Delete a Student Record",
                body: "Remove a particular student record using deleteOne(). Always verify the filter before performing a deletion.",
                code: `db.students.deleteOne({
    name: "Kiran"
})`
            },
            {
                heading: "Step 6: Create an Index",
                body: "Create an index on the branch field to support suitable queries that frequently search by branch.",
                code: `db.students.createIndex({
    branch: 1
})`
            },
            {
                heading: "Project Outcome",
                body: "This project demonstrates database creation, document insertion, searching, updating, deletion and indexing. These operations form the foundation of MongoDB-based application development."
            }
        ],
        questions: [
            {
                question: "Which command selects the project database?",
                options: [
                    "use devoraa_db",
                    "show css",
                    "npm create db",
                    "git database"
                ],
                correct: 0
            },
            {
                question: "Which method inserts multiple student records?",
                options: ["insertMany()", "findOne()", "deleteOne()", "sort()"],
                correct: 0
            },
            {
                question: "Which operator searches for marks greater than 80?",
                options: ["$lt", "$gt", "$eq", "$nin"],
                correct: 1
            },
            {
                question: "Which operator updates a student's marks?",
                options: ["$set", "$find", "$delete", "$sort"],
                correct: 0
            },
            {
                question: "Which method creates an index?",
                options: ["createIndex()", "insertMany()", "deleteOne()", "findOne()"],
                correct: 0
            }
        ]
    }
];
