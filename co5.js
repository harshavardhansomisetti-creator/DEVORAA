
export const co5Topics = [

    // TOPIC 1
    {
        title: "Introduction to Database Management",
        sections: [
            {
                heading: "What is a Database?",
                body: `A database is an organized collection of information that can be stored, accessed, managed and updated.

Web applications use databases to store information such as user accounts, student records, product details, course information and orders.

For example, an online learning platform may store student names, registered courses, assessment scores and learning progress in a database.

Without a database, applications would have difficulty maintaining information permanently and retrieving it efficiently.`
            },
            {
                heading: "What is a DBMS?",
                body: `DBMS stands for Database Management System.

It is software that allows users and applications to create, manage and interact with databases.

A DBMS provides facilities for:

• Storing information
• Retrieving records
• Updating information
• Deleting records
• Managing access
• Maintaining data consistency

Examples include MySQL, PostgreSQL, Oracle Database and MongoDB.`
            },
            {
                heading: "Types of Databases",
                body: `Databases are commonly classified into different categories.

1. Relational Databases:
Store data in tables containing rows and columns. Examples include MySQL and PostgreSQL.

2. Document Databases:
Store data as documents, commonly using JSON-like structures. MongoDB is an example.

3. Key-Value Databases:
Store information as key-value pairs. Redis is a common example.

4. Graph Databases:
Represent information using nodes and relationships. Neo4j is an example.

The choice of database depends on application requirements and data structure.`
            },
            {
                heading: "Database in Web Applications",
                body: `A typical web application connects three major parts:

Frontend – Displays information and accepts user input.

Backend – Processes requests and applies application logic.

Database – Stores and manages application information.

Example workflow:

1. A student enters registration information.
2. The frontend sends the information to the backend.
3. The backend validates the submitted data.
4. The backend stores the record in the database.
5. The application returns a response to the student.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is a database?",
                options: [
                    "An organized collection of information",
                    "A programming language",
                    "A web browser",
                    "An operating system"
                ],
                correct: 0,
                explanation: "A database stores organized information for efficient access and management."
            },
            {
                level: "Easy",
                question: "What does DBMS stand for?",
                options: [
                    "Database Management System",
                    "Data Backup Management Software",
                    "Digital Business Management System",
                    "Database Machine Software"
                ],
                correct: 0,
                explanation: "DBMS stands for Database Management System."
            },
            {
                level: "Medium",
                question: "Which database stores information in tables?",
                options: [
                    "Relational database",
                    "Document database only",
                    "Graph database only",
                    "File browser"
                ],
                correct: 0,
                explanation: "Relational databases organize data into tables with rows and columns."
            },
            {
                level: "Medium",
                question: "Which of the following is a document database?",
                options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle Database"],
                correct: 0,
                explanation: "MongoDB is a document-oriented database."
            },
            {
                level: "Hard",
                question: "What is the main role of a database in a web application?",
                options: [
                    "To store and manage application information",
                    "To design webpage colors",
                    "To execute CSS animations",
                    "To replace the web browser"
                ],
                correct: 0,
                explanation: "Databases provide persistent storage and retrieval of application information."
            }
        ]
    },

    // TOPIC 2
    {
        title: "Relational Database Concepts",
        sections: [
            {
                heading: "What is a Relational Database?",
                body: `A relational database organizes information into tables.

Each table represents a particular type of information, such as students, courses or departments.

Tables contain rows and columns.

A row represents one record, while a column represents an attribute of that record.

For example, a Students table can contain student ID, name, email and department.`
            },
            {
                heading: "Tables, Rows and Columns",
                body: `Consider a Students table:

| StudentID | Name | Department |
| 1 | Ravi | ECE |
| 2 | Harsha | ECE |
| 3 | Kiran | CSE |

StudentID, Name and Department are columns.

Each student entry is a row.

The table organizes student information in a structured format.`
            },
            {
                heading: "Primary Key",
                body: `A primary key is a column or combination of columns that uniquely identifies each row in a table.

Important characteristics:

• Values must be unique.
• A primary key cannot contain NULL.
• Each table can have only one primary key constraint, though it may contain multiple columns.

For example, StudentID can uniquely identify each student.

Primary keys prevent records from being confused with one another.`
            },
            {
                heading: "Foreign Key",
                body: `A foreign key is a column or group of columns that references a candidate key, commonly the primary key, in another table.

It creates a relationship between tables.

For example:

Students table:
StudentID, Name

Enrollments table:
EnrollmentID, StudentID, CourseName

The StudentID in Enrollments can reference StudentID in Students.

This helps maintain referential integrity between related records.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "How is data organized in a relational database?",
                options: ["Tables", "Audio files", "Images", "Videos"],
                correct: 0,
                explanation: "Relational databases organize data using tables."
            },
            {
                level: "Easy",
                question: "What does a row represent in a table?",
                options: ["A record", "A database server", "A database connection", "A programming language"],
                correct: 0,
                explanation: "Each row represents an individual record."
            },
            {
                level: "Medium",
                question: "What is the purpose of a primary key?",
                options: [
                    "Uniquely identify each record",
                    "Change webpage colors",
                    "Store CSS styles",
                    "Create network connections"
                ],
                correct: 0,
                explanation: "A primary key uniquely identifies each row in a table."
            },
            {
                level: "Medium",
                question: "What does a foreign key establish?",
                options: [
                    "A relationship between tables",
                    "A webpage layout",
                    "A JavaScript variable",
                    "A server port"
                ],
                correct: 0,
                explanation: "Foreign keys reference keys in another table to establish relationships."
            },
            {
                level: "Hard",
                question: "Which statement about a primary key is correct?",
                options: [
                    "It must contain unique, non-NULL values",
                    "It must always contain duplicate values",
                    "It stores only images",
                    "It cannot identify records"
                ],
                correct: 0,
                explanation: "Primary key values must uniquely identify rows and cannot be NULL."
            }
        ]
    },

    // TOPIC 3
    {
        title: "Introduction to SQL",
        sections: [
            {
                heading: "What is SQL?",
                body: `SQL stands for Structured Query Language.

It is used to communicate with relational database management systems.

SQL allows developers to create tables, insert records, retrieve information, update existing values and delete records.

It is commonly used with databases such as MySQL, PostgreSQL, SQL Server and Oracle Database.`
            },
            {
                heading: "Creating a Database",
                code: `CREATE DATABASE Devor aaDB;`,
                body: `The CREATE DATABASE command creates a new database.

For a database name containing spaces, special syntax may be required depending on the database system.

A simple valid example is:

CREATE DATABASE Devor aaDB;

To avoid naming problems, use a name without spaces, such as:

CREATE DATABASE Devor aaDB;

Then select the database using:

USE Devor aaDB;`
            },
            {
                heading: "Creating a Table",
                code: `CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100),
    Department VARCHAR(50),
    Age INT
);`,
                body: `CREATE TABLE creates a new table.

StudentID is an integer primary key.

VARCHAR stores variable-length text.

INT stores integer values.

The table definition specifies the structure of the information that can be stored.`
            },
            {
                heading: "Inserting and Retrieving Data",
                code: `INSERT INTO Students
(StudentID, Name, Department, Age)
VALUES
(1, 'Ravi', 'ECE', 19);

SELECT * FROM Students;

SELECT Name, Department
FROM Students;`,
                body: `INSERT INTO adds a new record to a table.

SELECT retrieves information.

SELECT * retrieves all columns, while SELECT Name, Department retrieves only the selected columns.

SQL makes it possible to retrieve specific information from large datasets.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What does SQL stand for?",
                options: [
                    "Structured Query Language",
                    "Simple Question Language",
                    "System Query Logic",
                    "Structured Quick Link"
                ],
                correct: 0,
                explanation: "SQL stands for Structured Query Language."
            },
            {
                level: "Easy",
                question: "Which SQL command creates a table?",
                options: ["CREATE TABLE", "SELECT TABLE", "SHOW TABLE", "GET TABLE"],
                correct: 0,
                explanation: "CREATE TABLE defines a new table in a relational database."
            },
            {
                level: "Medium",
                question: "Which command retrieves data?",
                options: ["SELECT", "DELETE", "DROP", "UPDATE"],
                correct: 0,
                explanation: "SELECT retrieves records from a database."
            },
            {
                level: "Medium",
                question: "Which SQL data type is commonly used for variable-length text?",
                options: ["VARCHAR", "INT", "DATE", "BOOLEAN"],
                correct: 0,
                explanation: "VARCHAR stores variable-length character data."
            },
            {
                level: "Hard",
                question: "What does SELECT * FROM Students return?",
                options: [
                    "All columns from the Students table",
                    "Only the first column",
                    "Deletes all students",
                    "Creates a new table"
                ],
                correct: 0,
                explanation: "The asterisk selects all columns from the specified table."
            }
        ]
    },

    // TOPIC 4
    {
        title: "SQL Data Manipulation",
        sections: [
            {
                heading: "What is Data Manipulation?",
                body: `Data Manipulation Language (DML) contains SQL commands used to work with records stored in database tables.

Important DML operations include:

INSERT – Adds records.

UPDATE – Modifies existing records.

DELETE – Removes records.

SELECT – Retrieves records and is commonly classified as Data Query Language (DQL).

These operations are essential for managing application data.`
            },
            {
                heading: "INSERT Command",
                code: `INSERT INTO Students
(StudentID, Name, Department, Age)
VALUES
(2, 'Harsha', 'ECE', 19);

INSERT INTO Students
(StudentID, Name, Department, Age)
VALUES
(3, 'Kiran', 'CSE', 20);`,
                body: `INSERT INTO adds new records to a table.

The column list identifies which columns receive values.

The values must match the selected columns in number and compatible data type.`
            },
            {
                heading: "UPDATE Command",
                code: `UPDATE Students
SET Department = 'EEE'
WHERE StudentID = 2;`,
                body: `UPDATE changes existing records.

SET specifies the new value.

WHERE identifies which records should be modified.

Always check the WHERE condition before executing an UPDATE. Without WHERE, every row in the table may be updated.`
            },
            {
                heading: "DELETE Command",
                code: `DELETE FROM Students
WHERE StudentID = 3;`,
                body: `DELETE removes records from a table.

The WHERE condition selects which records should be removed.

Without WHERE, all rows in the table can be deleted.

DELETE removes records, whereas DROP removes a database object such as a table.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "Which command inserts a new record?",
                options: ["INSERT INTO", "UPDATE", "DELETE", "DROP"],
                correct: 0,
                explanation: "INSERT INTO adds new records to a database table."
            },
            {
                level: "Easy",
                question: "Which command modifies existing records?",
                options: ["UPDATE", "CREATE", "DROP", "ALTER"],
                correct: 0,
                explanation: "UPDATE changes existing values in table records."
            },
            {
                level: "Medium",
                question: "What is the purpose of WHERE?",
                options: [
                    "To specify a condition",
                    "To create a database",
                    "To delete the entire database",
                    "To rename SQL"
                ],
                correct: 0,
                explanation: "WHERE filters records based on a specified condition."
            },
            {
                level: "Medium",
                question: "What happens if DELETE is executed without WHERE?",
                options: [
                    "All records in the table are deleted",
                    "Only the first record is deleted",
                    "The table is renamed",
                    "A new database is created"
                ],
                correct: 0,
                explanation: "Without WHERE, DELETE removes every row from the table."
            },
            {
                level: "Hard",
                question: "Which command removes a database table structure?",
                options: ["DROP TABLE", "DELETE ROW", "UPDATE TABLE", "SELECT TABLE"],
                correct: 0,
                explanation: "DROP TABLE removes the table object and its stored records."
            }
        ]
    },

    // TOPIC 5
    {
        title: "SQL Constraints and Data Types",
        sections: [
            {
                heading: "What Are Constraints?",
                body: `Constraints are rules applied to database columns or tables to maintain valid and consistent information.

They prevent invalid data from being inserted into a database.

Common constraints include:

PRIMARY KEY – Uniquely identifies records.

FOREIGN KEY – Maintains relationships between tables.

NOT NULL – Prevents NULL values.

UNIQUE – Prevents duplicate values in a constrained column or column combination.

CHECK – Enforces a specified condition.

DEFAULT – Provides a default value when one is not supplied.`
            },
            {
                heading: "Using Constraints",
                code: `CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(150) UNIQUE,
    Age INT CHECK (Age >= 16),
    Department VARCHAR(50) DEFAULT 'ECE'
);`,
                body: `StudentID uniquely identifies each record.

Name must contain a value.

Email values must be unique.

Age must satisfy the CHECK condition.

Department receives ECE when a value is not supplied.

Constraint support and exact behavior can vary slightly between database systems.`
            },
            {
                heading: "Common SQL Data Types",
                body: `Data types define what kind of information a column can store.

INT – Integer numbers.

DECIMAL – Exact numeric values, commonly used for financial data.

VARCHAR – Variable-length text.

CHAR – Fixed-length text.

DATE – Calendar date.

DATETIME or TIMESTAMP – Date and time values, depending on the database system.

BOOLEAN – Logical true or false values, with implementation differences across SQL databases.`
            },
            {
                heading: "Why Constraints Matter",
                body: `Constraints improve database reliability.

For example, a student registration system should not allow two students to have the same student ID.

A required name should not be left empty.

A course enrollment should refer to a valid student.

Using suitable constraints helps protect data integrity and reduces application errors.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is the purpose of NOT NULL?",
                options: [
                    "Prevent NULL values",
                    "Allow only duplicate values",
                    "Delete the table",
                    "Create a database"
                ],
                correct: 0,
                explanation: "NOT NULL requires a value for the specified column."
            },
            {
                level: "Easy",
                question: "Which constraint uniquely identifies each record?",
                options: ["PRIMARY KEY", "DEFAULT", "CHECK", "NOT NULL"],
                correct: 0,
                explanation: "PRIMARY KEY uniquely identifies each row."
            },
            {
                level: "Medium",
                question: "Which constraint prevents duplicate values?",
                options: ["UNIQUE", "DEFAULT", "CHECK", "NOT NULL"],
                correct: 0,
                explanation: "UNIQUE prevents duplicate values for the constrained column or combination."
            },
            {
                level: "Medium",
                question: "Which data type is suitable for variable-length text?",
                options: ["VARCHAR", "INT", "DATE", "DECIMAL"],
                correct: 0,
                explanation: "VARCHAR stores variable-length character data."
            },
            {
                level: "Hard",
                question: "Which constraint can enforce Age >= 16?",
                options: ["CHECK", "DEFAULT", "UNIQUE", "PRIMARY KEY"],
                correct: 0,
                explanation: "CHECK enforces a condition on inserted or updated values."
            }
        ]
    },

    // TOPIC 6
    {
        title: "SQL Joins and Relationships",
        sections: [
            {
                heading: "Understanding Relationships",
                body: `Relational databases often divide information into multiple tables to reduce duplication and organize data.

Relationships connect related records across tables.

Common relationship types:

One-to-One – One record is associated with one record in another table.

One-to-Many – One record can be associated with multiple records.

Many-to-Many – Multiple records in one table can relate to multiple records in another table, usually through a junction table.`
            },
            {
                heading: "What is a JOIN?",
                body: `A JOIN combines related information from two or more tables using a matching condition.

For example:

Students:
StudentID, Name

Enrollments:
EnrollmentID, StudentID, CourseName

A JOIN can combine student names with their enrolled course names.

This avoids storing the same student details repeatedly in every enrollment record.`
            },
            {
                heading: "INNER JOIN",
                code: `SELECT
    Students.Name,
    Enrollments.CourseName
FROM Students
INNER JOIN Enrollments
ON Students.StudentID = Enrollments.StudentID;`,
                body: `INNER JOIN returns records where the join condition matches in both tables.

In this example, students are displayed along with their matching enrollment records.

Students without matching enrollment records are not included in the result.`
            },
            {
                heading: "LEFT JOIN and RIGHT JOIN",
                code: `SELECT
    Students.Name,
    Enrollments.CourseName
FROM Students
LEFT JOIN Enrollments
ON Students.StudentID = Enrollments.StudentID;`,
                body: `LEFT JOIN returns every row from the left table and matching rows from the right table.

When no matching right-side record exists, the right-side columns contain NULL.

RIGHT JOIN returns every row from the right table and matching rows from the left table.

The exact availability of RIGHT JOIN and syntax can vary across database systems.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What is a SQL JOIN?",
                options: [
                    "Combining related records from tables",
                    "Deleting a database",
                    "Creating CSS styles",
                    "Installing a server"
                ],
                correct: 0,
                explanation: "JOIN combines related data from multiple tables."
            },
            {
                level: "Easy",
                question: "Which JOIN returns only matching records?",
                options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "FULL JOIN"],
                correct: 0,
                explanation: "INNER JOIN returns records that satisfy the matching condition in both tables."
            },
            {
                level: "Medium",
                question: "What does LEFT JOIN return?",
                options: [
                    "All left-table rows and matching right-table rows",
                    "Only right-table rows",
                    "Only matching rows",
                    "No records"
                ],
                correct: 0,
                explanation: "LEFT JOIN preserves all rows from the left table."
            },
            {
                level: "Medium",
                question: "Which key commonly connects related records between tables?",
                options: ["Foreign key", "CSS key", "HTML key", "Browser key"],
                correct: 0,
                explanation: "A foreign key references a key in another table."
            },
            {
                level: "Hard",
                question: "Which relationship commonly requires a junction table?",
                options: [
                    "Many-to-Many",
                    "One-to-One only",
                    "One-to-Many only",
                    "No relationship"
                ],
                correct: 0,
                explanation: "A junction table represents many-to-many relationships in relational databases."
            }
        ]
    },

    // TOPIC 7
    {
        title: "Introduction to MongoDB",
        sections: [
            {
                heading: "What is MongoDB?",
                body: `MongoDB is a NoSQL document-oriented database.

Instead of organizing information in relational tables, MongoDB stores records as documents inside collections.

Documents use a JSON-like structure called BSON internally.

MongoDB is useful when applications need flexible document structures and scalable data management.`
            },
            {
                heading: "Documents and Collections",
                body: `MongoDB organizes information using databases, collections and documents.

Database – Contains collections.

Collection – Contains related documents.

Document – Stores a set of fields and values.

Example document:

{
    "name": "Harsha",
    "department": "ECE",
    "year": 2
}

A collection can contain many documents with similar or different fields.`
            },
            {
                heading: "SQL vs MongoDB",
                body: `Relational database:

• Uses tables, rows and columns.
• Commonly uses SQL.
• Supports structured relationships.
• Example: MySQL.

MongoDB:

• Uses collections and documents.
• Stores BSON documents.
• Supports flexible document structures.
• Uses MongoDB query and update operations.

Both approaches can be used to build modern web applications.`
            },
            {
                heading: "MongoDB Shell Commands",
                code: `show dbs

use devoraa

db.createCollection("students")

db.students.insertOne({
    name: "Harsha",
    department: "ECE",
    year: 2
})

db.students.find()`,
                body: `show dbs lists available databases.

use devoraa switches to or selects the database.

db.createCollection() creates a collection.

insertOne() adds a document.

find() retrieves documents.

MongoDB can create a database when data is first stored in it.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What type of database is MongoDB?",
                options: [
                    "NoSQL document database",
                    "Relational-only database",
                    "Operating system",
                    "Programming language"
                ],
                correct: 0,
                explanation: "MongoDB is a NoSQL document-oriented database."
            },
            {
                level: "Easy",
                question: "What is a collection in MongoDB?",
                options: [
                    "A group of documents",
                    "A CSS file",
                    "A JavaScript function",
                    "A browser window"
                ],
                correct: 0,
                explanation: "A collection stores related MongoDB documents."
            },
            {
                level: "Medium",
                question: "What is the document format used internally by MongoDB?",
                options: ["BSON", "HTML", "CSS", "MP3"],
                correct: 0,
                explanation: "MongoDB stores documents using BSON, a binary representation of JSON-like documents."
            },
            {
                level: "Medium",
                question: "Which method inserts one document?",
                options: ["insertOne()", "find()", "deleteMany()", "updateMany()"],
                correct: 0,
                explanation: "insertOne() adds a single document to a collection."
            },
            {
                level: "Hard",
                question: "Which MongoDB command retrieves documents from a collection?",
                options: ["find()", "insertOne()", "drop()", "createCollection()"],
                correct: 0,
                explanation: "find() retrieves documents that match a specified filter."
            }
        ]
    },

    // TOPIC 8
    {
        title: "MongoDB CRUD Operations",
        sections: [
            {
                heading: "What is CRUD?",
                body: `CRUD represents four basic operations used to manage stored information.

Create – Add new records.

Read – Retrieve existing records.

Update – Modify existing records.

Delete – Remove records.

These operations are essential for most database-driven applications.`
            },
            {
                heading: "Create and Read Operations",
                code: `db.students.insertOne({
    name: "Ravi",
    department: "ECE",
    age: 19
})

db.students.insertMany([
    { name: "Harsha", department: "ECE" },
    { name: "Kiran", department: "CSE" }
])

db.students.find()

db.students.find({
    department: "ECE"
})`,
                body: `insertOne() inserts one document.

insertMany() inserts multiple documents.

find() retrieves documents.

A filter can be passed to find() to retrieve matching records.

For example, the final query retrieves students belonging to ECE.`
            },
            {
                heading: "Update Operations",
                code: `db.students.updateOne(
    { name: "Ravi" },
    { $set: { age: 20 } }
)`,
                body: `updateOne() modifies the first document matching the filter.

$set changes the specified field without replacing the entire document.

updateMany() can modify all documents that match a filter.

Always choose the filter carefully when updating records.`
            },
            {
                heading: "Delete Operations",
                code: `db.students.deleteOne({
    name: "Ravi"
})

db.students.deleteMany({
    department: "CSE"
})`,
                body: `deleteOne() removes the first document matching the filter.

deleteMany() removes all documents matching the filter.

A filter should be reviewed carefully before performing a delete operation.

These commands are similar to SQL INSERT, SELECT, UPDATE and DELETE in purpose, but use MongoDB-specific syntax.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "What does CRUD stand for?",
                options: [
                    "Create, Read, Update, Delete",
                    "Create, Run, Upload, Download",
                    "Copy, Read, Use, Design",
                    "Connect, Replace, Update, Display"
                ],
                correct: 0,
                explanation: "CRUD represents Create, Read, Update and Delete."
            },
            {
                level: "Easy",
                question: "Which MongoDB method inserts one document?",
                options: ["insertOne()", "find()", "updateOne()", "deleteOne()"],
                correct: 0,
                explanation: "insertOne() creates one document in a collection."
            },
            {
                level: "Medium",
                question: "Which method retrieves documents?",
                options: ["find()", "insertOne()", "deleteOne()", "drop()"],
                correct: 0,
                explanation: "find() retrieves documents matching a filter."
            },
            {
                level: "Medium",
                question: "What does the $set operator do?",
                options: [
                    "Changes specified field values",
                    "Deletes a collection",
                    "Creates a database",
                    "Retrieves every document"
                ],
                correct: 0,
                explanation: "$set updates the specified fields in a document."
            },
            {
                level: "Hard",
                question: "Which method removes all documents matching a filter?",
                options: ["deleteMany()", "insertMany()", "find()", "updateOne()"],
                correct: 0,
                explanation: "deleteMany() removes every document matching the supplied filter."
            }
        ]
    },

    // TOPIC 9
    {
        title: "Connecting Database with Backend",
        sections: [
            {
                heading: "Why Connect a Database to Backend?",
                body: `A backend application uses a database to store and retrieve information.

Without database integration, application data may exist only temporarily in application memory.

Database integration allows an application to maintain information even after the server restarts.

For example, a course management system can save courses, retrieve them later and update their details.`
            },
            {
                heading: "Connecting Node.js with MongoDB",
                body: `A Node.js application can communicate with MongoDB using an official driver or an ODM library such as Mongoose.

Mongoose provides schemas and models to define and work with MongoDB documents.

Install Mongoose using:

npm install mongoose

The application needs a MongoDB connection string to connect to a database.

Connection strings should be stored securely rather than exposed in public source code.`
            },
            {
                heading: "Database Connection Example",
                code: `const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.error("Database connection failed");
    });`,
                body: `mongoose.connect() establishes a connection to MongoDB.

The connection string is read from an environment variable named MONGODB_URI.

The then() block runs after a successful connection.

The catch() block handles a connection failure.

The database URL should be configured in the server environment and must not be committed as a secret in a public repository.`
            },
            {
                heading: "Creating a Mongoose Model",
                code: `const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        default: 1
    }
});

const Student = mongoose.model(
    "Student",
    studentSchema
);

module.exports = Student;`,
                body: `A schema defines the expected structure and validation rules for documents.

mongoose.model() creates a model based on the schema.

The model provides methods for creating, finding, updating and deleting documents.

For example, Student.find() can retrieve student records from the database.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "Why does a backend connect to a database?",
                options: [
                    "To store and retrieve application data",
                    "To change webpage colors",
                    "To create animations",
                    "To replace JavaScript"
                ],
                correct: 0,
                explanation: "Database integration allows backend applications to store and retrieve persistent data."
            },
            {
                level: "Easy",
                question: "Which package is commonly used as an ODM for MongoDB in Node.js?",
                options: ["Mongoose", "Bootstrap", "React", "Express CSS"],
                correct: 0,
                explanation: "Mongoose is an ODM library commonly used with MongoDB and Node.js."
            },
            {
                level: "Medium",
                question: "What is a Mongoose schema?",
                options: [
                    "A definition of document structure and validation",
                    "A CSS layout",
                    "A browser setting",
                    "An HTML image"
                ],
                correct: 0,
                explanation: "A schema describes the expected structure and rules for documents."
            },
            {
                level: "Medium",
                question: "Why should a database connection string be protected?",
                options: [
                    "It may contain credentials and access information",
                    "It changes the font",
                    "It creates CSS files",
                    "It is an image format"
                ],
                correct: 0,
                explanation: "Connection strings may contain credentials that should remain confidential."
            },
            {
                level: "Hard",
                question: "What is the purpose of mongoose.model()?",
                options: [
                    "To create a model based on a schema",
                    "To create an HTML page",
                    "To install Node.js",
                    "To delete the server"
                ],
                correct: 0,
                explanation: "mongoose.model() creates a model used to interact with a MongoDB collection."
            }
        ]
    },

    // TOPIC 10
    {
        title: "Building a Database-Driven Application",
        sections: [
            {
                heading: "Application Overview",
                body: `In this topic, we combine database and backend concepts to build a simple Student Management API.

The application will support:

• Creating student records
• Retrieving all students
• Retrieving an individual student
• Updating student information
• Deleting student records

We will use Node.js, Express.js, MongoDB and Mongoose.

Unlike an in-memory array, MongoDB provides persistent storage.`
            },
            {
                heading: "Installing Dependencies",
                code: `npm init -y
npm install express mongoose dotenv`,
                body: `Express is used to build the backend API.

Mongoose connects Node.js to MongoDB and provides schema-based models.

dotenv loads configuration values from a local environment file.

Create these files:

server.js
Student.js
.env

Keep the .env file private and out of public Git repositories.`
            },
            {
                heading: "Environment Configuration",
                code: `MONGODB_URI=your_mongodb_connection_string
PORT=3000`,
                body: `The .env file contains configuration values.

Replace the database connection placeholder with your actual MongoDB connection string.

Never share a real connection string or database password publicly.

Add .env to .gitignore before committing your project.`
            },
            {
                heading: "Student Model",
                code: `const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model(
    "Student",
    studentSchema
);`,
                body: `The Student model defines the structure of student records.

The name, email and department fields are required.

The unique option creates a uniqueness constraint at the database index level when the index is available. Applications should still handle duplicate-key errors properly.`
            },
            {
                heading: "Complete Backend Application",
                code: `require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Student = require("./Student");

const app = express();

app.use(express.json());

// Get all students
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve students"
        });
    }
});

// Add a student
app.post("/students", async (req, res) => {
    try {
        const { name, email, department } = req.body;

        if (
            typeof name !== "string" || !name.trim() ||
            typeof email !== "string" || !email.trim() ||
            typeof department !== "string" || !department.trim()
        ) {
            return res.status(400).json({
                message: "Valid name, email and department are required"
            });
        }

        const student = await Student.create({
            name: name.trim(),
            email: email.trim(),
            department: department.trim()
        });

        res.status(201).json(student);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        res.status(500).json({
            message: "Unable to create student"
        });
    }
});

// Update a student
app.put("/students/:id", async (req, res) => {
    try {
        const { name, email, department } = req.body;

        if (
            typeof name !== "string" || !name.trim() ||
            typeof email !== "string" || !email.trim() ||
            typeof department !== "string" || !department.trim()
        ) {
            return res.status(400).json({
                message: "Valid name, email and department are required"
            });
        }

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            {
                name: name.trim(),
                email: email.trim(),
                department: department.trim()
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        res.status(400).json({
            message: "Invalid request"
        });
    }
});

// Delete a student
app.delete("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(
            req.params.id
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: "Invalid student ID"
        });
    }
});

// Connect to database and start server
async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Database connected");

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log("Server running on port " + PORT);
        });
    } catch (error) {
        console.error("Unable to start application");
        process.exit(1);
    }
}

startServer();`,
                body: `This example combines Express routes with Mongoose database operations.

GET /students retrieves all student records.

POST /students creates a new student.

PUT /students/:id updates a student.

DELETE /students/:id removes a student.

The async and await keywords allow the application to wait for database operations without blocking the entire Node.js process.

The server starts only after a successful database connection.

For a production application, additional email validation, authentication, authorization, rate limiting and structured logging should be implemented.`
            },
            {
                heading: "Conclusion",
                body: `Databases are an essential part of modern web applications.

In this course, we learned database fundamentals, relational database concepts, SQL, CRUD operations, constraints, joins, MongoDB, Mongoose and backend database integration.

These concepts help developers build applications that can store and manage information reliably.

A database-driven application combines the frontend, backend and database into one complete system.`
            }
        ],
        questions: [
            {
                level: "Easy",
                question: "Which database is used in the Student Management API?",
                options: ["MongoDB", "HTML", "CSS", "React"],
                correct: 0,
                explanation: "MongoDB stores student records in the application."
            },
            {
                level: "Easy",
                question: "Which package connects the Node.js application to MongoDB in this example?",
                options: ["Mongoose", "Bootstrap", "Vite", "jQuery"],
                correct: 0,
                explanation: "Mongoose provides the database connection and model operations."
            },
            {
                level: "Medium",
                question: "What does Student.find() do?",
                options: [
                    "Retrieves student documents",
                    "Deletes the database",
                    "Creates an HTML page",
                    "Installs Express"
                ],
                correct: 0,
                explanation: "Student.find() retrieves documents matching the specified query."
            },
            {
                level: "Medium",
                question: "Why is dotenv used?",
                options: [
                    "To load environment configuration values",
                    "To create CSS animations",
                    "To replace MongoDB",
                    "To design HTML pages"
                ],
                correct: 0,
                explanation: "dotenv loads configuration values from an environment file."
            },
            {
                level: "Hard",
                question: "Why does the server connect to MongoDB before listening for requests?",
                options: [
                    "To ensure the database is available before serving database-dependent requests",
                    "To create a CSS file",
                    "To delete all student records",
                    "To change the browser"
                ],
                correct: 0,
                explanation: "Starting after a successful database connection avoids accepting requests before the required database is ready."
            }
        ]
    }

];
