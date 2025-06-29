function loadContent(topic) {
    const contentArea = document.getElementById("contentArea");
    
    switch(topic) {
        case 'intro':
            contentArea.innerHTML = `
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to SQL</title>
    <link rel="stylesheet" href="style.css"> <!-- Link to external CSS file for styling -->
</head>
<body>

    <!-- Introduction to SQL Section -->
    <section>
        <h1>Introduction to SQL</h1>
        <p>
            SQL, or Structured Query Language, is a standard programming language used to manage and manipulate relational databases. It is widely used in database systems such as MySQL, PostgreSQL, Microsoft SQL Server, and Oracle Database. SQL allows users to create, read, update, and delete data within a database, making it a crucial tool for interacting with data stored in relational databases.
        </p>
        <p>
            The main purpose of SQL is to provide a structured way to interact with and manipulate data. SQL is essential for tasks like querying data to get specific information, defining the structure of the database, managing access control, and maintaining the integrity of the data.
        </p>
        <p>
            SQL is declarative, meaning that you specify *what* you want, and the database management system figures out *how* to retrieve or manipulate the data. It is widely used in web development, data analysis, and many applications where large amounts of data need to be managed efficiently.
        </p>
    </section>

    <!-- Difference Between File System and SQL Section -->
    <section>
        <h2>Difference Between File System and SQL</h2>
        <p>
            The traditional file system is used to store data in files, whereas SQL is a language used to manage data in databases. Below is a detailed comparison:
        </p>
        <table border="1" cellpadding="10">
            <thead>
                <tr>
                    <th>Aspect</th>
                    <th>File System</th>
                    <th>SQL (Relational Database)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Data Structure</td>
                    <td>
                        In a file system, data is stored in files, which can be structured in a hierarchical manner (e.g., directories). The data may be unstructured or semi-structured (e.g., text files, CSV files).
                    </td>
                    <td>
                        SQL databases store data in structured tables with rows and columns. The relational model organizes data into relations (tables), making it easier to maintain and query.
                    </td>
                </tr>
                <tr>
                    <td>Data Redundancy</td>
                    <td>
                        Data redundancy is common in file systems, as the same data may be repeated in multiple files, leading to inconsistency.
                    </td>
                    <td>
                        SQL databases implement normalization techniques to minimize redundancy and ensure data consistency across tables.
                    </td>
                </tr>
                <tr>
                    <td>Data Integrity</td>
                    <td>
                        Ensuring data integrity in a file system is difficult, as there are no built-in rules to enforce constraints (e.g., unique values, foreign keys).
                    </td>
                    <td>
                        SQL databases provide mechanisms like primary keys, foreign keys, and unique constraints to ensure data integrity.
                    </td>
                </tr>
                <tr>
                    <td>Querying Data</td>
                    <td>
                        Querying specific information from files requires writing custom scripts or manually searching through files. It's time-consuming and error-prone.
                    </td>
                    <td>
                        SQL provides powerful querying capabilities through SELECT statements, making it easy to retrieve specific information using queries.
                    </td>
                </tr>
                <tr>
                    <td>Data Security</td>
                    <td>
                        File systems rely on basic file permissions for security, which can be limited and hard to manage when dealing with large data sets.
                    </td>
                    <td>
                        SQL databases offer fine-grained access control (e.g., GRANT, REVOKE) to control user access, and encryption to enhance data security.
                    </td>
                </tr>
                <tr>
                    <td>Transactions</td>
                    <td>
                        File systems do not support transactions, meaning operations are not atomic (i.e., they can't be rolled back if something goes wrong).
                    </td>
                    <td>
                        SQL databases support transactions, ensuring that operations are completed entirely or not at all, maintaining data consistency.
                    </td>
                </tr>
                <tr>
                    <td>Backup and Recovery</td>
                    <td>
                        Backing up and recovering data from a file system can be cumbersome and may require manual intervention.
                    </td>
                    <td>
                        SQL databases have built-in mechanisms for automated backups and recovery processes, ensuring data safety.
                    </td>
                </tr>
            </tbody>
        </table>
    </section>

    <!-- Why We Need to Use SQL Section -->
    <section>
        <h2>Why We Need to Use SQL</h2>
        <p>
            SQL is essential for managing large amounts of data in a structured way. Below are some key reasons why we use SQL over traditional file systems:
        </p>
        <ul>
            <li>
                <strong>Efficient Data Management:</strong> SQL provides a standardized way to interact with databases, making data management faster, more efficient, and less prone to errors compared to file systems.
            </li>
            <li>
                <strong>Data Integrity:</strong> SQL enforces data integrity by allowing the definition of constraints like primary keys and foreign keys, preventing duplication and ensuring relationships between tables.
            </li>
            <li>
                <strong>Data Security:</strong> SQL databases offer robust security features such as authentication, role-based access control, and encryption, which are more advanced than the basic security measures in file systems.
            </li>
            <li>
                <strong>Powerful Querying Capabilities:</strong> SQL allows users to write complex queries to retrieve, update, or manipulate data, making it easy to extract valuable information from large datasets.
            </li>
            <li>
                <strong>Support for Transactions:</strong> SQL supports atomic transactions, meaning that changes are applied only if the entire operation is successful. This ensures data consistency even in the event of system failures.
            </li>
            <li>
                <strong>Data Relationships:</strong> SQL is based on the relational model, which allows for establishing relationships between tables. This makes it easier to maintain complex data structures and relationships compared to flat files in a file system.
            </li>
            <li>
                <strong>Scalability:</strong> SQL databases are designed to handle large-scale data storage and retrieval, making them suitable for enterprise-level applications.
            </li>
            <li>
                <strong>Industry Standard:</strong> SQL is a widely adopted standard, making it a reliable and universally accepted way to manage and interact with databases across industries.
            </li>
        </ul>
        <p>
            In summary, SQL provides a structured and reliable way to manage and interact with data, making it the preferred choice over traditional file systems, especially when working with large, complex datasets.
        </p>
    </section>

</body>
</html>

            `;
            break;
        case 'datatypes':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Data Types</title>
</head>
<body>
    <h1>SQL Data Types</h1>

    <p>SQL (Structured Query Language) provides several <strong>data types</strong> that allow you to define the kind of data a column will hold in a table. Choosing the correct data type for a column is essential for the proper storage of data and the performance of queries.</p>

    <h2>1. Numeric Data Types</h2>
    <p>Numeric data types store numerical values. These values can be either integers (whole numbers) or floating-point numbers (numbers with decimal places).</p>

    <h3>a. INT (or INTEGER)</h3>
    <p><strong>Description:</strong> Used for whole numbers.</p>
    <p><strong>Range:</strong> Varies by database system, but generally from -2,147,483,648 to 2,147,483,647.</p>
    <p><strong>Example:</strong> <code>age INT</code></p>

    <h3>b. TINYINT</h3>
    <p><strong>Description:</strong> A smaller integer type.</p>
    <p><strong>Range:</strong> Typically from -128 to 127 (signed) or 0 to 255 (unsigned).</p>
    <p><strong>Example:</strong> <code>score TINYINT</code></p>

    <h3>c. SMALLINT</h3>
    <p><strong>Description:</strong> For slightly larger whole numbers than <code>TINYINT</code>.</p>
    <p><strong>Range:</strong> From -32,768 to 32,767.</p>
    <p><strong>Example:</strong> <code>year SMALLINT</code></p>

    <h3>d. BIGINT</h3>
    <p><strong>Description:</strong> Stores very large whole numbers.</p>
    <p><strong>Range:</strong> From -2^63 to 2^63 - 1.</p>
    <p><strong>Example:</strong> <code>population BIGINT</code></p>

    <h3>e. FLOAT</h3>
    <p><strong>Description:</strong> Stores floating-point numbers (numbers with decimals) with single precision.</p>
    <p><strong>Range:</strong> Dependent on database system.</p>
    <p><strong>Example:</strong> <code>height FLOAT</code></p>

    <h3>f. DOUBLE</h3>
    <p><strong>Description:</strong> Stores floating-point numbers with double precision (more accurate than <code>FLOAT</code>).</p>
    <p><strong>Range:</strong> Larger range than <code>FLOAT</code>.</p>
    <p><strong>Example:</strong> <code>price DOUBLE</code></p>

    <h3>g. DECIMAL or NUMERIC</h3>
    <p><strong>Description:</strong> Stores exact numeric data with a specified precision and scale. Useful for storing monetary values.</p>
    <p><strong>Precision:</strong> Total number of digits.</p>
    <p><strong>Scale:</strong> Number of digits to the right of the decimal point.</p>
    <p><strong>Example:</strong> <code>salary DECIMAL(10, 2)</code> (10 digits in total, 2 after the decimal)</p>

    <h2>2. Character Data Types</h2>
    <p>These data types are used for storing string (text) data, and they are often the most commonly used data types in SQL.</p>

    <h3>a. CHAR</h3>
    <p><strong>Description:</strong> Fixed-length string. If the value is shorter than the specified length, it is padded with spaces.</p>
    <p><strong>Size:</strong> Can store up to 255 characters.</p>
    <p><strong>Example:</strong> <code>country CHAR(3)</code> (for 3-letter country codes)</p>

    <h3>b. VARCHAR</h3>
    <p><strong>Description:</strong> Variable-length string. Only the actual length of the string is stored, with no padding.</p>
    <p><strong>Size:</strong> Can store up to 65,535 characters.</p>
    <p><strong>Example:</strong> <code>name VARCHAR(255)</code></p>

    <h3>c. TEXT</h3>
    <p><strong>Description:</strong> Stores long text strings. The maximum size depends on the database system, but it is generally large (up to 65,535 characters or more).</p>
    <p><strong>Example:</strong> <code>description TEXT</code></p>

    <h2>3. Date and Time Data Types</h2>
    <p>Date and time data types store values related to dates and times.</p>

    <h3>a. DATE</h3>
    <p><strong>Description:</strong> Stores dates in the format <code>YYYY-MM-DD</code>.</p>
    <p><strong>Example:</strong> <code>birthdate DATE</code></p>

    <h3>b. DATETIME</h3>
    <p><strong>Description:</strong> Stores both date and time values in the format <code>YYYY-MM-DD HH:MM:SS</code>.</p>
    <p><strong>Example:</strong> <code>created_at DATETIME</code></p>

    <h3>c. TIME</h3>
    <p><strong>Description:</strong> Stores time values in the format <code>HH:MM:SS</code>.</p>
    <p><strong>Example:</strong> <code>event_time TIME</code></p>

    <h3>d. TIMESTAMP</h3>
    <p><strong>Description:</strong> Stores date and time values with time zone information. Typically used for tracking changes.</p>
    <p><strong>Example:</strong> <code>updated_at TIMESTAMP</code></p>

    <h2>4. Boolean Data Type</h2>
    <p>Boolean data types store true or false values.</p>

    <h3>a. BOOLEAN</h3>
    <p><strong>Description:</strong> Stores true or false values. Some systems use <code>TRUE</code> and <code>FALSE</code> or 1 and 0.</p>
    <p><strong>Example:</strong> <code>is_active BOOLEAN</code></p>

    <h2>5. Binary Data Types</h2>
    <p>Binary data types store data in a binary format, typically for files like images, audio, or videos.</p>

    <h3>a. BLOB</h3>
    <p><strong>Description:</strong> Stores Binary Large Objects, such as images or files.</p>
    <p><strong>Example:</strong> <code>image BLOB</code></p>

    <h3>b. VARBINARY</h3>
    <p><strong>Description:</strong> Similar to BLOB, but with a variable length.</p>
    <p><strong>Example:</strong> <code>data VARBINARY(255)</code></p>

    <h2>Conclusion</h2>
    <p>Choosing the right data type is essential for optimizing database storage and performance. Ensure that you select data types based on the nature and range of the data you're working with.</p>

</body>
</html>



            `;
            break;
            case "constraints":
                contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Constraints and Table Creation</title>
</head>
<body>

    <h1>Introduction to SQL Constraints</h1>
    <p>In SQL, <strong>constraints</strong> are used to specify rules for the data in a table. They ensure the accuracy, consistency, and reliability of the data. Here's an overview of the most commonly used constraints:</p>

    <h2>Types of SQL Constraints</h2>
    <ul>
        <li><strong>NOT NULL Constraint</strong>: Ensures that a column cannot have a NULL value.</li>
        <li><strong>UNIQUE Constraint</strong>: Ensures that all values in a column are distinct.</li>
        <li><strong>PRIMARY KEY Constraint</strong>: A combination of NOT NULL and UNIQUE. It uniquely identifies each row in a table.</li>
        <li><strong>FOREIGN KEY Constraint</strong>: Ensures the value in one table matches a value in another table, maintaining referential integrity.</li>
        <li><strong>CHECK Constraint</strong>: Ensures that all values in a column satisfy a specific condition.</li>
        <li><strong>DEFAULT Constraint</strong>: Sets a default value for a column if no value is specified.</li>
    </ul>

    <h2>SQL Table Creation with Constraints</h2>
    <p>Below are examples of creating tables using different types of constraints:</p>

    <h3>Example 1: Creating a <code>Users</code> Table with PRIMARY KEY, NOT NULL, and UNIQUE Constraints</h3>
    <pre>
CREATE TABLE Users (
    user_id INT PRIMARY KEY,         -- PRIMARY KEY constraint (combines NOT NULL and UNIQUE)
    username VARCHAR(100) NOT NULL,  -- NOT NULL constraint (username cannot be NULL)
    email VARCHAR(100) UNIQUE        -- UNIQUE constraint (email must be unique)
);
    </pre>
    <p><strong>Description:</strong> The <code>Users</code> table contains a primary key (<code>user_id</code>), a username that cannot be null, and an email that must be unique for each user.</p>

    <h3>Example 2: Creating an <code>Orders</code> Table with FOREIGN KEY Constraint</h3>
    <pre>
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,        -- PRIMARY KEY constraint
    user_id INT,                     -- user_id refers to Users table
    product_name VARCHAR(100),
    quantity INT CHECK (quantity > 0), -- CHECK constraint to ensure quantity is greater than 0
    FOREIGN KEY (user_id) REFERENCES Users(user_id) -- FOREIGN KEY constraint linking to Users table
);
    </pre>
    <p><strong>Description:</strong> The <code>Orders</code> table has a foreign key (<code>user_id</code>) that references the <code>user_id</code> from the <code>Users</code> table. The <code>CHECK</code> constraint ensures that the quantity is greater than zero.</p>

    <h3>Example 3: Creating a <code>Products</code> Table with DEFAULT and CHECK Constraints</h3>
    <pre>
CREATE TABLE Products (
    product_id INT PRIMARY KEY,      -- PRIMARY KEY constraint
    product_name VARCHAR(100) NOT NULL, -- NOT NULL constraint
    price DECIMAL(10, 2) CHECK (price > 0), -- CHECK constraint (price must be greater than 0)
    stock INT DEFAULT 0              -- DEFAULT constraint (default stock is 0)
);
    </pre>
    <p><strong>Description:</strong> The <code>Products</code> table includes a <code>CHECK</code> constraint that ensures the price is greater than zero and a <code>DEFAULT</code> constraint that sets the default stock to zero if no value is provided.</p>

    <h2>Visualization</h2>
    <p>Here’s how the tables would relate visually with the constraints applied:</p>

    <h3>Users Table</h3>
    <table border="1">
        <thead>
            <tr>
                <th>user_id (PK)</th>
                <th>username (NOT NULL)</th>
                <th>email (UNIQUE)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>JohnDoe</td>
                <td>john@example.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>JaneSmith</td>
                <td>jane@example.com</td>
            </tr>
        </tbody>
    </table>

    <h3>Orders Table</h3>
    <table border="1">
        <thead>
            <tr>
                <th>order_id (PK)</th>
                <th>user_id (FK)</th>
                <th>product_name</th>
                <th>quantity (CHECK > 0)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>101</td>
                <td>1</td>
                <td>Laptop</td>
                <td>1</td>
            </tr>
            <tr>
                <td>102</td>
                <td>2</td>
                <td>Smartphone</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>

    <h3>Products Table</h3>
    <table border="1">
        <thead>
            <tr>
                <th>product_id (PK)</th>
                <th>product_name (NOT NULL)</th>
                <th>price (CHECK > 0)</th>
                <th>stock (DEFAULT 0)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>201</td>
                <td>Laptop</td>
                <td>1000.00</td>
                <td>50</td>
            </tr>
            <tr>
                <td>202</td>
                <td>Smartphone</td>
                <td>500.00</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>

</body>
</html>
`;
break;
case "truncate":
    contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TRUNCATE Command in SQL</title>
</head>
<body>

    <h1>Understanding the TRUNCATE Command in SQL</h1>
    <p>The <strong>TRUNCATE</strong> command in SQL is used to delete all rows from a table, but it preserves the table structure for future use. It is different from the <code>DELETE</code> command, as <code>TRUNCATE</code> removes all the rows in a more efficient way, without logging each row's deletion.</p>

    <h2>Key Points about TRUNCATE</h2>
    <ul>
        <li><strong>Faster than DELETE:</strong> <code>TRUNCATE</code> is faster because it doesn't log individual row deletions.</li>
        <li><strong>Resets Auto Increment:</strong> If a table has an auto-incrementing primary key, <code>TRUNCATE</code> will reset it to the initial value.</li>
        <li><strong>Cannot be Rolled Back:</strong> Unlike <code>DELETE</code>, <code>TRUNCATE</code> cannot be rolled back in most cases.</li>
        <li><strong>No WHERE Clause:</strong> <code>TRUNCATE</code> cannot filter rows; it removes all rows in the table.</li>
    </ul>

    <h2>Syntax of TRUNCATE</h2>
    <pre>
TRUNCATE TABLE table_name;
    </pre>
    <p>This will remove all rows from the table <code>table_name</code>, but the table structure will remain.</p>

    <h2>Examples of Using TRUNCATE</h2>

    <h3>Example 1: Truncating the <code>Users</code> Table</h3>
    <pre>
-- Before truncation
SELECT * FROM Users;

TRUNCATE TABLE Users;

-- After truncation, the table will be empty
SELECT * FROM Users;
    </pre>
    <p><strong>Description:</strong> All the records from the <code>Users</code> table will be deleted, but the table will still exist in the database.</p>

    <h3>Example 2: Truncating the <code>Orders</code> Table</h3>
    <pre>
-- Before truncation
SELECT * FROM Orders;

TRUNCATE TABLE Orders;

-- After truncation, the table will be empty
SELECT * FROM Orders;
    </pre>
    <p><strong>Description:</strong> This will remove all orders from the <code>Orders</code> table while keeping the table itself intact for future use.</p>

    <h2>Visualization of TRUNCATE Operation</h2>

    <h3>Before TRUNCATE: Users Table</h3>
    <table border="1">
        <thead>
            <tr>
                <th>user_id (PK)</th>
                <th>username</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>JohnDoe</td>
                <td>john@example.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>JaneSmith</td>
                <td>jane@example.com</td>
            </tr>
        </tbody>
    </table>

    <h3>After TRUNCATE: Users Table</h3>
    <table border="1">
        <thead>
            <tr>
                <th>user_id (PK)</th>
                <th>username</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="3">No records (Table is empty)</td>
            </tr>
        </tbody>
    </table>

    <h3>Before TRUNCATE: Orders Table</h3>
    <table border="1">
        <thead>
            <tr>
                <th>order_id (PK)</th>
                <th>user_id (FK)</th>
                <th>product_name</th>
                <th>quantity</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>101</td>
                <td>1</td>
                <td>Laptop</td>
                <td>1</td>
            </tr>
            <tr>
                <td>102</td>
                <td>2</td>
                <td>Smartphone</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>

    <h3>After TRUNCATE: Orders Table</h3>
    <table border="1">
        <thead>
            <tr>
                <th>order_id (PK)</th>
                <th>user_id (FK)</th>
                <th>product_name</th>
                <th>quantity</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="4">No records (Table is empty)</td>
            </tr>
        </tbody>
    </table>

</body>
</html>
`;
break;
case "comment":
    contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COMMENT Command in SQL</title>
</head>
<body>

    <h1>Understanding the COMMENT Command in SQL</h1>
    <p>The <strong>COMMENT</strong> command in SQL is used to add explanatory notes or descriptions to a table, column, or other database objects. These comments are helpful for documentation purposes, allowing developers or users to understand the purpose of the table or column better. Comments do not affect the data or structure of the table, but provide useful information.</p>

    <h2>Where Can You Use SQL Comments?</h2>
    <ul>
        <li><strong>Table-level comments:</strong> Used to describe the purpose of the table.</li>
        <li><strong>Column-level comments:</strong> Used to explain the purpose or constraints of individual columns.</li>
    </ul>

    <h2>Types of SQL Comments</h2>
    <ul>
        <li><strong>Single-line comments:</strong> Using <code>--</code>, everything after this symbol on the same line will be ignored by SQL.</li>
        <li><strong>Multi-line comments:</strong> Using <code>/* ... */</code>, anything within the symbols will be considered a comment and ignored.</li>
    </ul>

    <h2>Syntax of COMMENT Command</h2>
    <pre>
COMMENT ON TABLE table_name IS 'description';
COMMENT ON COLUMN table_name.column_name IS 'description';
    </pre>

    <h2>Examples of Using COMMENT</h2>

    <h3>Example 1: Adding a Comment to a Table</h3>
    <pre>
-- Adding a comment to the Users table
COMMENT ON TABLE Users IS 'This table stores user information including login details.';
    </pre>
    <p><strong>Description:</strong> This adds a comment to the <code>Users</code> table, explaining that it stores user information.</p>

    <h3>Example 2: Adding a Comment to a Column</h3>
    <pre>
-- Adding a comment to the username column in the Users table
COMMENT ON COLUMN Users.username IS 'Stores unique usernames for each user.';
    </pre>
    <p><strong>Description:</strong> This adds a comment to the <code>username</code> column in the <code>Users</code> table, explaining that it stores unique usernames for each user.</p>

    <h3>Example 3: Multi-line Comment Example</h3>
    <pre>
/* 
  This is a multi-line comment.
  It is used to provide detailed explanations or notes
  without affecting the actual SQL code.
*/
    </pre>
    <p><strong>Description:</strong> This is an example of using a multi-line comment to add longer explanations in SQL code.</p>

    <h2>Visualization of SQL Comments</h2>

    <h3>Before Adding Comments</h3>
    <table border="1">
        <thead>
            <tr>
                <th>user_id (PK)</th>
                <th>username</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>JohnDoe</td>
                <td>john@example.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>JaneSmith</td>
                <td>jane@example.com</td>
            </tr>
        </tbody>
    </table>

    <h3>After Adding Comments</h3>
    <table border="1">
        <thead>
            <tr>
                <th>user_id (PK)</th>
                <th>username</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>JohnDoe</td>
                <td>john@example.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>JaneSmith</td>
                <td>jane@example.com</td>
            </tr>
        </tbody>
    </table>
    <p><strong>Table Comment:</strong> This table stores user information including login details.</p>
    <p><strong>Column Comment for username:</strong> Stores unique usernames for each user.</p>

    <h2>Using Comments to Enhance SQL Code</h2>
    <p>SQL comments are useful for explaining complex queries or database structures. They allow you to document your code for other developers or for future reference without affecting the SQL execution.</p>

    <h2>Example 4: Using Comments to Explain Complex Queries</h2>
    <pre>
-- This query retrieves all users who have placed orders
SELECT u.user_id, u.username, o.order_id 
FROM Users u
JOIN Orders o ON u.user_id = o.user_id
WHERE o.order_status = 'completed';
    </pre>
    <p><strong>Description:</strong> This comment helps explain the purpose of the query, which retrieves all users who have placed completed orders.</p>

</body>
</html>
`;
break;
            case "ddl":
                contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to DDL Commands</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
        }
        h1, h2 {
            color: #333;
        }
        p {
            line-height: 1.6;
            color: #555;
        }
    </style>
</head>
<body>

    <h1>Introduction to DDL (Data Definition Language) Commands</h1>

    <p>DDL (Data Definition Language) refers to the set of SQL commands used to define and manage the structure of a database. These commands allow database administrators and developers to create, modify, and remove database objects such as tables, views, schemas, and indexes.</p>

    <h2>Common DDL Commands</h2>
    <ul>
        <li><strong>CREATE:</strong> Used to create database objects such as tables, schemas, and indexes.</li>
        <li><strong>ALTER:</strong> Used to modify the structure of an existing database object (e.g., adding, modifying, or deleting columns).</li>
        <li><strong>DROP:</strong> Used to delete an existing database object (e.g., tables, views, etc.).</li>
        <li><strong>TRUNCATE:</strong> Used to delete all rows in a table but retain the table structure.</li>
        <li><strong>COMMENT:</strong> Used to add a comment or description to database objects for documentation purposes.</li>
    </ul>

    <h2>Where DDL Commands are Used</h2>
    <p>DDL commands are used during the design and maintenance phases of a database. They are essential for defining the structure and ensuring the proper organization of data. Here are some examples of where these commands are applied:</p>
    <ul>
        <li><strong>Database Creation:</strong> The <code>CREATE</code> command is used to create new tables, schemas, or indexes.</li>
        <li><strong>Modifying Table Structure:</strong> The <code>ALTER</code> command is used to modify an existing table (e.g., adding new columns or changing column types).</li>
        <li><strong>Deleting Tables:</strong> The <code>DROP</code> command is used to remove tables that are no longer needed.</li>
        <li><strong>Clearing Data:</strong> The <code>TRUNCATE</code> command is used to clear all rows in a table when you want to keep the table but remove the data.</li>
        <li><strong>Documenting Database Objects:</strong> The <code>COMMENT</code> command is used to add descriptive comments to tables and columns for better understanding and documentation.</li>
    </ul>

    <p>DDL commands are crucial for the setup and maintenance of database environments, ensuring efficient data storage, retrieval, and management.</p>

</body>
</html>
`;
break;
case "create":
    contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL CREATE Command</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
        }
        h1, h2 {
            color: #333;
        }
        p, ul {
            line-height: 1.6;
            color: #555;
        }
        code {
            font-family: 'Courier New', monospace;
            background-color: #f4f4f4;
            padding: 5px;
            border-radius: 4px;
            color: #333;
        }
        .example {
            background-color: #e9f7e4;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 15px;
        }
        .visualization {
            width: 100%;
            height: 300px;
            background-color: #ddd;
            border: 1px solid #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body>

    <h1>CREATE Command in SQL</h1>

    <p>The <strong>CREATE</strong> command in SQL is used to create database objects such as tables, views, schemas, and indexes. It defines the structure of the object, specifying the columns, their data types, and any constraints (e.g., primary keys or unique constraints).</p>

    <h2>Examples of Using the CREATE Command</h2>

    <p>Below are 7 examples of the <code>CREATE</code> command, which demonstrate different use cases for creating tables, schemas, and more:</p>

    <!-- Example 1: Creating a Table -->
    <div class="example">
        <h3>Example 1: Creating a Table</h3>
        <p>We can create a simple table to store employee information:</p>
        <code>CREATE TABLE Employees (id INT PRIMARY KEY, name VARCHAR(50), age INT, department VARCHAR(50));</code>
        <p><strong>Description:</strong> This command creates a table called <code>Employees</code> with columns <code>id</code>, <code>name</code>, <code>age</code>, and <code>department</code>.</p>
        <div class="visualization">
            <p>Table: Employees</p>
            <p>id | name | age | department</p>
        </div>
    </div>

    <!-- Example 2: Creating a Table with Not Null Constraints -->
    <div class="example">
        <h3>Example 2: Creating a Table with Not Null Constraints</h3>
        <p>This example demonstrates the use of the <code>NOT NULL</code> constraint to ensure that certain columns must have a value:</p>
        <code>CREATE TABLE Products (product_id INT NOT NULL, product_name VARCHAR(100) NOT NULL, price DECIMAL(10, 2), PRIMARY KEY (product_id));</code>
        <p><strong>Description:</strong> The <code>product_id</code> and <code>product_name</code> columns are set to <code>NOT NULL</code>, which means they must have values when records are inserted into the table.</p>
        <div class="visualization">
            <p>Table: Products</p>
            <p>product_id | product_name | price</p>
        </div>
    </div>

    <!-- Example 3: Creating a Table with Foreign Key -->
    <div class="example">
        <h3>Example 3: Creating a Table with Foreign Key</h3>
        <p>This example shows how to establish a foreign key relationship between two tables:</p>
        <code>CREATE TABLE Orders (order_id INT PRIMARY KEY, customer_id INT, order_date DATE, FOREIGN KEY (customer_id) REFERENCES Customers (customer_id));</code>
        <p><strong>Description:</strong> This creates a table called <code>Orders</code> with a foreign key constraint on the <code>customer_id</code> column, linking it to the <code>Customers</code> table.</p>
        <div class="visualization">
            <p>Table: Orders</p>
            <p>order_id | customer_id | order_date</p>
        </div>
    </div>


    <!-- Example 4: Creating a View -->
    <div class="example">
        <h3>Example 4: Creating a View</h3>
        <p>A view is a virtual table based on the result of a SELECT query:</p>
        <code>CREATE VIEW EmployeeDetails AS SELECT name, department FROM Employees WHERE age > 30;</code>
        <p><strong>Description:</strong> This view will display the names and departments of employees older than 30.</p>
        <div class="visualization">
            <p>View: EmployeeDetails</p>
            <p>name | department</p>
        </div>
    </div>

    <!-- Example 5: Creating a Schema -->
    <div class="example">
        <h3>Example 5: Creating a Schema</h3>
        <p>A schema is a collection of database objects that can contain tables, views, and other structures:</p>
        <code>CREATE SCHEMA Sales;</code>
        <p><strong>Description:</strong> This command creates a new schema named <code>Sales</code>.</p>
        <div class="visualization">
            <p>Schema: Sales</p>
            <p>Contains tables, views, etc.</p>
        </div>
    </div>

    <!-- Example 6: Creating an Index -->
    <div class="example">
        <h3>Example 6: Creating an Index</h3>
        <p>Creating an index helps speed up queries on a table:</p>
        <code>CREATE INDEX idx_employee_name ON Employees (name);</code>
        <p><strong>Description:</strong> This index will improve the performance of queries that search for employees by name in the <code>Employees</code> table.</p>
        <div class="visualization">
            <p>Index: idx_employee_name</p>
            <p>Indexed column: name</p>
        </div>
    </div>

    <!-- Example 7: Creating a Temporary Table -->
    <div class="example">
        <h3>Example 7: Creating a Temporary Table</h3>
        <p>Temporary tables exist only for the duration of a session or transaction:</p>
        <code>CREATE TEMPORARY TABLE TempOrders (order_id INT, product_id INT, quantity INT);</code>
        <p><strong>Description:</strong> This temporary table will store order information temporarily during a session.</p>
        <div class="visualization">
            <p>Temporary Table: TempOrders</p>
            <p>order_id | product_id | quantity</p>
        </div>
    </div>

    <h2>Where the CREATE Command is Used</h2>
    <p>The <code>CREATE</code> command is used when designing and building a database. It is essential for:</p>
    <ul>
        <li>Creating tables to store data.</li>
        <li>Defining relationships between tables (e.g., using foreign keys).</li>
        <li>Creating views to simplify data retrieval.</li>
        <li>Organizing data into schemas for better management.</li>
        <li>Improving query performance through indexes.</li>
        <li>Temporarily storing data in a session with temporary tables.</li>
    </ul>

    <p>The <code>CREATE</code> command is foundational to setting up a well-structured database.</p>

</body>
</html>
`;
break;

case "alter":
    contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL ALTER Command</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #333;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ccc;
            overflow-x: auto;
        }
        .example {
            background-color: #e7f3fe;
            padding: 10px;
            border-left: 4px solid #2196F3;
            margin-bottom: 20px;
        }
        .description {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

    <h1>SQL ALTER Command</h1>

    <p>The <strong>ALTER</strong> command in SQL is used to modify the structure of an existing database object, such as a table, view, or index. It allows you to make changes to the structure without having to delete and recreate the object. These changes could include adding or dropping columns, modifying data types, renaming columns, or altering constraints.</p>

    <h2>Common Uses of the ALTER Command</h2>
    <ul>
        <li>Adding a new column</li>
        <li>Modifying an existing column's data type</li>
        <li>Dropping a column</li>
        <li>Renaming a column</li>
        <li>Adding constraints (e.g., primary key, foreign key)</li>
        <li>Dropping constraints</li>
    </ul>

    <h2>Examples of the ALTER Command</h2>

    <div class="example">
        <h3>Example 1: Adding a New Column to a Table</h3>
        <pre>
ALTER TABLE Employees ADD salary DECIMAL(10, 2);
        </pre>
        <div class="description">
            This command adds a new column <strong>salary</strong> to the <strong>Employees</strong> table. The column will store decimal values with a precision of 10 digits, with 2 digits after the decimal point.
        </div>
    </div>

    <div class="example">
        <h3>Example 2: Modifying a Column's Data Type</h3>
        <pre>
ALTER TABLE Employees MODIFY salary DECIMAL(12, 2);
        </pre>
        <div class="description">
            This command changes the <strong>salary</strong> column in the <strong>Employees</strong> table, increasing its precision to 12 digits instead of 10.
        </div>
    </div>

    <div class="example">
        <h3>Example 3: Dropping a Column from a Table</h3>
        <pre>
ALTER TABLE Employees DROP COLUMN age;
        </pre>
        <div class="description">
            This command removes the <strong>age</strong> column from the <strong>Employees</strong> table.
        </div>
    </div>

    <div class="example">
        <h3>Example 4: Renaming a Column</h3>
        <pre>
ALTER TABLE Employees RENAME COLUMN department TO dept;
        </pre>
        <div class="description">
            This command renames the <strong>department</strong> column to <strong>dept</strong> in the <strong>Employees</strong> table.
        </div>
    </div>

    <div class="example">
        <h3>Example 5: Adding a Primary Key Constraint</h3>
        <pre>
ALTER TABLE Employees ADD CONSTRAINT pk_employee_id PRIMARY KEY (id);
        </pre>
        <div class="description">
            This command adds a primary key constraint to the <strong>id</strong> column in the <strong>Employees</strong> table.
        </div>
    </div>

    <div class="example">
        <h3>Example 6: Dropping a Foreign Key Constraint</h3>
        <pre>
ALTER TABLE Orders DROP CONSTRAINT fk_customer_id;
        </pre>
        <div class="description">
            This command removes the foreign key constraint <strong>fk_customer_id</strong> from the <strong>Orders</strong> table.
        </div>
    </div>

    <div class="example">
        <h3>Example 7: Adding a NOT NULL Constraint</h3>
        <pre>
ALTER TABLE Employees MODIFY salary DECIMAL(10, 2) NOT NULL;
        </pre>
        <div class="description">
            This command modifies the <strong>salary</strong> column to make it a mandatory field by adding a <strong>NOT NULL</strong> constraint.
        </div>
    </div>

    <h2>Where to Use the ALTER Command</h2>
    <p>The <strong>ALTER</strong> command is used when you need to modify the structure of a database object. It is particularly useful in cases where:</p>
    <ul>
        <li>The structure of a table needs to evolve to meet new requirements.</li>
        <li>Constraints or relationships between tables need to be adjusted.</li>
        <li>Column names, data types, or constraints need to be modified for optimization or clarity.</li>
        <li>A column, table, or constraint name needs to be renamed.</li>
    </ul>

</body>
</html>
`;
break;
case "drop":
    contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL DROP Command</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #333;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ccc;
            overflow-x: auto;
        }
        .example {
            background-color: #fdecea;
            padding: 10px;
            border-left: 4px solid #f44336;
            margin-bottom: 20px;
        }
        .description {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

    <h1>SQL DROP Command</h1>

    <p>The <strong>DROP</strong> command in SQL is used to remove an entire database object permanently, such as a table, view, index, or database. Once an object is dropped, all the data and structure are lost, and this operation cannot be undone. Hence, the "DROP" command should be used with caution.</p>

    <h2>Common Uses of the DROP Command</h2>
    <ul>
        <li>Dropping a table</li>
        <li>Dropping a database</li>
        <li>Dropping views</li>
        <li>Dropping indexes</li>
        <li>Dropping triggers</li>
    </ul>

    <h2>Examples of the DROP Command</h2>

    <div class="example">
        <h3>Example 1: Dropping a Table</h3>
        <pre>
DROP TABLE Employees;
        </pre>
        <div class="description">
            This command permanently deletes the <strong>Employees</strong> table, including all its data and structure, from the database.
        </div>
    </div>

    <div class="example">
        <h3>Example 2: Dropping a Database</h3>
        <pre>
DROP DATABASE CompanyDB;
        </pre>
        <div class="description">
            This command permanently deletes the entire <strong>CompanyDB</strong> database, including all its tables, views, and other objects.
        </div>
    </div>

    <div class="example">
        <h3>Example 3: Dropping a View</h3>
        <pre>
DROP VIEW EmployeeView;
        </pre>
        <div class="description">
            This command deletes the <strong>EmployeeView</strong> view from the database. Views are virtual tables, and this will remove its definition.
        </div>
    </div>

    <div class="example">
        <h3>Example 4: Dropping an Index</h3>
        <pre>
DROP INDEX idx_salary ON Employees;
        </pre>
        <div class="description">
            This command drops the <strong>idx_salary</strong> index on the <strong>Employees</strong> table, which may have been created to speed up queries involving the <strong>salary</strong> column.
        </div>
    </div>

    <div class="example">
        <h3>Example 5: Dropping a Trigger</h3>
        <pre>
DROP TRIGGER employee_salary_update;
        </pre>
        <div class="description">
            This command deletes the <strong>employee_salary_update</strong> trigger. A trigger is a set of instructions automatically executed when certain events occur in the database.
        </div>
    </div>

    <div class="example">
        <h3>Example 6: Dropping a Primary Key Constraint</h3>
        <pre>
ALTER TABLE Employees DROP PRIMARY KEY;
        </pre>
        <div class="description">
            This command removes the primary key constraint from the <strong>Employees</strong> table. It deletes the key that uniquely identifies each record in the table.
        </div>
    </div>

    <div class="example">
        <h3>Example 7: Dropping a Foreign Key Constraint</h3>
        <pre>
ALTER TABLE Orders DROP FOREIGN KEY fk_customer_id;
        </pre>
        <div class="description">
            This command removes the foreign key constraint <strong>fk_customer_id</strong> from the <strong>Orders</strong> table, breaking the link between the Orders and Customers tables.
        </div>
    </div>

    <h2>Where to Use the DROP Command</h2>
    <p>The <strong>DROP</strong> command is used when you need to permanently remove a database object. Some common scenarios include:</p>
    <ul>
        <li>Deleting old or unnecessary tables or views to clean up the database.</li>
        <li>Removing indexes that are no longer needed.</li>
        <li>Dropping triggers when they are no longer applicable.</li>
        <li>Removing databases when they are no longer required.</li>
        <li>Eliminating constraints that are no longer needed.</li>
    </ul>

</body>
</html>
`;
break;
case "dml":
    contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DML Commands in SQL</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #333;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            padding: 10px;
            margin-top: 10px;
        }
        .description {
            line-height: 1.6;
            margin-bottom: 20px;
        }
        .example {
            margin-bottom: 30px;
        }
    </style>
</head>
<body>

    <h1>DML (Data Manipulation Language) Commands in SQL</h1>

    <p class="description">Data Manipulation Language (DML) commands are used to manipulate data within existing database tables. These commands allow you to insert, update, delete, and retrieve records. The main DML commands are <strong>INSERT</strong>, <strong>UPDATE</strong>, <strong>DELETE</strong>, and <strong>SELECT</strong>. Below is an explanation of each command, along with examples.</p>

    <h2>1. INSERT Command</h2>
    <p class="description">
        The <strong>INSERT</strong> command is used to add new records into a table. You can insert data into specific columns or into all columns of a table.
    </p>
    <h3>Syntax:</h3>
    <pre>INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);</pre>
    <h3>Example:</h3>
    <pre>INSERT INTO employees (employee_id, first_name, last_name, salary) 
VALUES (101, 'John', 'Doe', 50000);</pre>

    <h2>2. UPDATE Command</h2>
    <p class="description">
        The <strong>UPDATE</strong> command is used to modify existing records in a table. You can update specific columns of one or more rows.
    </p>
    <h3>Syntax:</h3>
    <pre>UPDATE table_name 
SET column1 = value1, column2 = value2, ... 
WHERE condition;</pre>
    <h3>Example:</h3>
    <pre>UPDATE employees 
SET salary = 55000 
WHERE employee_id = 101;</pre>

    <h2>3. DELETE Command</h2>
    <p class="description">
        The <strong>DELETE</strong> command is used to remove one or more rows from a table. You can delete specific records based on a condition, or all records if no condition is specified.
    </p>
    <h3>Syntax:</h3>
    <pre>DELETE FROM table_name WHERE condition;</pre>
    <h3>Example:</h3>
    <pre>DELETE FROM employees WHERE employee_id = 101;</pre>

    <h2>4. SELECT Command</h2>
    <p class="description">
        The <strong>SELECT</strong> command is used to retrieve data from one or more tables. It can be used to fetch specific columns, filter rows with conditions, and combine data from multiple tables using joins.
    </p>
    <h3>Syntax:</h3>
    <pre>SELECT column1, column2, ... FROM table_name WHERE condition;</pre>
    <h3>Example:</h3>
    <pre>SELECT first_name, last_name, salary FROM employees WHERE salary > 50000;</pre>

    <h2>Visualization of DML Commands:</h2>
    <p class="description">The following is a basic visualization of how each DML command interacts with a table named <strong>employees</strong>:</p>

    <h3>Initial Table State:</h3>
    <table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>101</td>
                <td>John</td>
                <td>Doe</td>
                <td>50000</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Jane</td>
                <td>Smith</td>
                <td>60000</td>
            </tr>
        </tbody>
    </table>

    <h3>After INSERT Command:</h3>
    <p>INSERT INTO employees (employee_id, first_name, last_name, salary) VALUES (103, 'Alice', 'Johnson', 70000);</p>
    <table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>101</td>
                <td>John</td>
                <td>Doe</td>
                <td>50000</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Jane</td>
                <td>Smith</td>
                <td>60000</td>
            </tr>
            <tr>
                <td>103</td>
                <td>Alice</td>
                <td>Johnson</td>
                <td>70000</td>
            </tr>
        </tbody>
    </table>

    <h3>After UPDATE Command:</h3>
    <p>UPDATE employees SET salary = 55000 WHERE employee_id = 101;</p>
    <table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>101</td>
                <td>John</td>
                <td>Doe</td>
                <td>55000</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Jane</td>
                <td>Smith</td>
                <td>60000</td>
            </tr>
            <tr>
                <td>103</td>
                <td>Alice</td>
                <td>Johnson</td>
                <td>70000</td>
            </tr>
        </tbody>
    </table>

    <h3>After DELETE Command:</h3>
    <p>DELETE FROM employees WHERE employee_id = 102;</p>
    <table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>101</td>
                <td>John</td>
                <td>Doe</td>
                <td>55000</td>
            </tr>
            <tr>
                <td>103</td>
                <td>Alice</td>
                <td>Johnson</td>
                <td>70000</td>
            </tr>
        </tbody>
    </table>

</body>
</html>
`;break;
case "dql":
    contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DQL (Data Query Language) in SQL</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #333;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            padding: 10px;
            margin-top: 10px;
        }
        .description {
            line-height: 1.6;
            margin-bottom: 20px;
        }
        .example {
            margin-bottom: 30px;
        }
    </style>
</head>
<body>

    <h1>DQL (Data Query Language) in SQL</h1>

    <p class="description">
        Data Query Language (DQL) refers to the SQL commands used for querying and retrieving data from a database. The primary DQL command is the <strong>SELECT</strong> statement. DQL allows you to fetch records from one or more tables based on specific conditions or requirements.
    </p>

    <h2>What is DQL?</h2>
    <p class="description">
        DQL is a subset of SQL that focuses on querying data from databases. The purpose of DQL commands is to retrieve information from a database without modifying the actual data (in contrast to DML commands that modify data). The most commonly used DQL command is <strong>SELECT</strong>.
    </p>

    <h2>SELECT Command</h2>
    <p class="description">
        The <strong>SELECT</strong> command is used to query and retrieve data from a table or multiple tables in a database. You can specify the columns you want to retrieve and apply filters, sorting, and grouping to the results.
    </p>
    <h3>Syntax:</h3>
    <pre>SELECT column1, column2, ... FROM table_name WHERE condition;</pre>
    
    <h3>Example:</h3>
    <pre>SELECT first_name, last_name FROM employees WHERE salary > 50000;</pre>
    <p class="description">
        This query retrieves the <strong>first_name</strong> and <strong>last_name</strong> of employees whose salary is greater than 50,000.
    </p>

    <h2>Filtering and Sorting</h2>
    <p class="description">
        You can filter the results of your query using the <strong>WHERE</strong> clause, and sort the results using the <strong>ORDER BY</strong> clause.
    </p>
    
    <h3>Syntax for Filtering:</h3>
    <pre>SELECT column1, column2 FROM table_name WHERE condition;</pre>
    
    <h3>Example:</h3>
    <pre>SELECT first_name, last_name FROM employees WHERE salary > 50000;</pre>
    
    <h3>Syntax for Sorting:</h3>
    <pre>SELECT column1, column2 FROM table_name ORDER BY column_name ASC|DESC;</pre>
    
    <h3>Example:</h3>
    <pre>SELECT first_name, last_name FROM employees ORDER BY salary DESC;</pre>
    <p class="description">
        This query retrieves employee names and sorts them by salary in descending order.
    </p>

    <h2>Joining Tables</h2>
    <p class="description">
        You can retrieve data from multiple tables by using SQL joins. The most common types of joins are <strong>INNER JOIN</strong>, <strong>LEFT JOIN</strong>, <strong>RIGHT JOIN</strong>, and <strong>FULL JOIN</strong>.
    </p>
    
    <h3>Example of INNER JOIN:</h3>
    <pre>SELECT employees.first_name, employees.last_name, departments.department_name
FROM employees
INNER JOIN departments ON employees.department_id = departments.department_id;</pre>
    <p class="description">
        This query retrieves employee names along with their department names by joining the <strong>employees</strong> and <strong>departments</strong> tables on the <strong>department_id</strong> column.
    </p>

    <h2>Grouping Results</h2>
    <p class="description">
        You can group data in your query using the <strong>GROUP BY</strong> clause. Grouping is useful for aggregation, such as counting or summing values within categories.
    </p>
    
    <h3>Syntax for Grouping:</h3>
    <pre>SELECT column1, COUNT(*)
FROM table_name
GROUP BY column1;</pre>

    <h3>Example:</h3>
    <pre>SELECT department_id, COUNT(*) FROM employees GROUP BY department_id;</pre>
    <p class="description">
        This query counts the number of employees in each department and groups the results by <strong>department_id</strong>.
    </p>

    <h2>Visualization of a SELECT Query:</h2>
    <p class="description">
        The following is an example of a simple <strong>SELECT</strong> query output from the employees table:
    </p>

    <h3>Initial Table - employees:</h3>
    <table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Salary</th>
                <th>Department ID</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>101</td>
                <td>John</td>
                <td>Doe</td>
                <td>50000</td>
                <td>1</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Jane</td>
                <td>Smith</td>
                <td>60000</td>
                <td>2</td>
            </tr>
            <tr>
                <td>103</td>
                <td>Alice</td>
                <td>Johnson</td>
                <td>70000</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>

    <h3>SELECT Query Result - Retrieve employees with salary > 50000:</h3>
    <pre>SELECT first_name, last_name FROM employees WHERE salary > 50000;</pre>
    <table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Jane</td>
                <td>Smith</td>
            </tr>
            <tr>
                <td>Alice</td>
                <td>Johnson</td>
            </tr>
        </tbody>
    </table>

</body>
</html>
`;
break;
 case "tcl":
    contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transaction Control Language (TCL) in SQL</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        h1, h2 {
            color: #2c3e50;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .code-description {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

    <h1>Transaction Control Language (TCL) in SQL</h1>

    <p>Transaction Control Language (TCL) commands in SQL are used to manage the transactions in a database. Transactions are sequences of SQL statements that are treated as a single unit of work. TCL commands allow you to control whether the changes made in the transaction should be saved or rolled back.</p>

    <h2>What is a Transaction?</h2>
    <p>A transaction is a logical unit of work that must be completed entirely; otherwise, the changes made in the transaction are discarded. A transaction has four main properties, often referred to as **ACID** properties:</p>
    <ul>
        <li><strong>Atomicity:</strong> Ensures that all operations within the transaction are completed successfully; otherwise, the transaction is aborted.</li>
        <li><strong>Consistency:</strong> Ensures that the database properly changes state upon a successfully committed transaction.</li>
        <li><strong>Isolation:</strong> Ensures that transactions are securely and independently processed at the same time without interference.</li>
        <li><strong>Durability:</strong> Ensures that the result or effect of a committed transaction persists even after a system failure.</li>
    </ul>

    <h2>TCL Commands</h2>
    <p>TCL provides four main commands that allow the management of transactions:</p>
    
    <h3>1. COMMIT</h3>
    <p>The <strong>COMMIT</strong> command is used to permanently save the changes made during the current transaction. Once a transaction is committed, it cannot be undone.</p>

    <h3>2. ROLLBACK</h3>
    <p>The <strong>ROLLBACK</strong> command is used to undo the changes made during the current transaction. If any part of the transaction fails or an error occurs, the entire transaction can be rolled back to the original state.</p>

    <h3>3. SAVEPOINT</h3>
    <p>The <strong>SAVEPOINT</strong> command is used to set a point within a transaction to which you can later roll back. Multiple savepoints can be set within a transaction.</p>

    <h3>4. RELEASE SAVEPOINT</h3>
    <p>The <strong>RELEASE SAVEPOINT</strong> command is used to delete a previously defined savepoint. It can no longer be rolled back to after being released.</p>

    <h3>5. SET TRANSACTION</h3>
    <p>The <strong>SET TRANSACTION</strong> command is used to set the characteristics of the current transaction, such as its isolation level.</p>

    <h2>Examples of TCL Commands</h2>

    <h3>Example 1: COMMIT</h3>
    <p>The following example demonstrates the use of the <code>COMMIT</code> command:</p>
    <div class="code-description">
        <pre>
BEGIN TRANSACTION;

INSERT INTO orders (order_id, customer_id, amount)
VALUES (1, 101, 500);

-- Commit the changes
COMMIT;
        </pre>
        <p><strong>Description:</strong> The <code>COMMIT</code> command saves the newly inserted order into the <code>orders</code> table. Once committed, the change is permanent and cannot be rolled back.</p>
    </div>

    <h3>Example 2: ROLLBACK</h3>
    <p>The following example shows the use of the <code>ROLLBACK</code> command:</p>
    <div class="code-description">
        <pre>
BEGIN TRANSACTION;

UPDATE employees
SET salary = salary + 2000
WHERE employee_id = 105;

-- An error occurs, roll back the changes
ROLLBACK;
        </pre>
        <p><strong>Description:</strong> The salary update is rolled back, and the <code>employees</code> table remains unchanged due to the <code>ROLLBACK</code> command.</p>
    </div>

    <h3>Example 3: SAVEPOINT and ROLLBACK TO SAVEPOINT</h3>
    <p>The following example demonstrates the use of <code>SAVEPOINT</code> and <code>ROLLBACK TO SAVEPOINT</code>:</p>
    <div class="code-description">
        <pre>
BEGIN TRANSACTION;

INSERT INTO products (product_id, product_name, price)
VALUES (101, 'Laptop', 700);

SAVEPOINT save1;  -- Create a savepoint

INSERT INTO products (product_id, product_name, price)
VALUES (102, 'Tablet', 400);

-- Rollback to the savepoint
ROLLBACK TO save1;

-- Commit the transaction
COMMIT;
        </pre>
        <p><strong>Description:</strong> After inserting the laptop, a savepoint is created. When inserting the tablet, we decide to roll back to the <code>save1</code> savepoint, effectively undoing the tablet insertion while keeping the laptop insertion intact.</p>
    </div>

    <h3>Example 4: SET TRANSACTION</h3>
    <p>The following example shows how to set the isolation level of a transaction using <code>SET TRANSACTION</code>:</p>
    <div class="code-description">
        <pre>
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

BEGIN TRANSACTION;

-- Transaction operations

COMMIT;
        </pre>
        <p><strong>Description:</strong> The transaction is set to the highest isolation level, <code>SERIALIZABLE</code>, to ensure that no other transaction can interfere with this transaction’s execution.</p>
    </div>

    <h2>Comprehensive Example Using All TCL Commands</h2>
    <h3>Example 5: Complete Transaction Flow</h3>
    <p>This example shows a complex transaction where we use all the TCL commands:</p>
    <div class="code-description">
        <pre>
BEGIN TRANSACTION;

-- Step 1: Insert a new customer
INSERT INTO customers (customer_id, name, email)
VALUES (201, 'John Doe', 'john@example.com');

-- Step 2: Create a savepoint after the first insert
SAVEPOINT save1;

-- Step 3: Insert an order for the customer
INSERT INTO orders (order_id, customer_id, amount)
VALUES (301, 201, 800);

-- Step 4: Create another savepoint
SAVEPOINT save2;

-- Step 5: Try to insert a faulty product
INSERT INTO products (product_id, product_name, price)
VALUES (NULL, 'Smartphone', 600);  -- This will fail due to NULL product_id

-- Step 6: Rollback to the second savepoint to undo the faulty product insertion
ROLLBACK TO save2;

-- Step 7: Commit the transaction
COMMIT;
        </pre>
        <p><strong>Description:</strong></p>
        <ul>
            <li><strong>Step 1:</strong> A new customer is inserted into the <code>customers</code> table.</li>
            <li><strong>Step 2:</strong> A savepoint <code>save1</code> is created after inserting the customer.</li>
            <li><strong>Step 3:</strong> An order is placed for the customer in the <code>orders</code> table.</li>
            <li><strong>Step 4:</strong> Another savepoint <code>save2</code> is created after inserting the order.</li>
            <li><strong>Step 5:</strong> An attempt is made to insert a product, but this fails because the <code>product_id</code> cannot be NULL.</li>
            <li><strong>Step 6:</strong> The transaction is rolled back to <code>save2</code>, undoing the faulty product insertion but keeping the order.</li>
            <li><strong>Step 7:</strong> The transaction is committed, saving the changes made before <code>save2</code>, i.e., the customer and the order.</li>
        </ul>
    </div>

</body>
</html>
`;
break;
        case 'queries':
            contentArea.innerHTML = `
                <h1>SQL Queries</h1>
                <p>SQL queries allow you to interact with the database to retrieve or modify data using SELECT, INSERT, UPDATE, DELETE statements.</p>
            `;
            break;
        case 'joins':
            contentArea.innerHTML = `
              <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Joins - Detailed Explanation with Examples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        h1, h2 {
            color: #2c3e50;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        th {
            background-color: #ec5f5f;
        }
        pre {
            background-color: #eaeaea;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>

    <h1>Understanding SQL Joins</h1>
    
    <p>SQL Joins are used to combine rows from two or more tables based on a related column between them. Joins allow us to fetch data from multiple tables by creating relationships between them. There are several types of SQL joins:</p>
    
    <ul>
        <li><strong>INNER JOIN</strong></li>
        <li><strong>LEFT (OUTER) JOIN</strong></li>
        <li><strong>RIGHT (OUTER) JOIN</strong></li>
        <li><strong>FULL (OUTER) JOIN</strong></li>
        <li><strong>CROSS JOIN</strong></li>
        <li><strong>NATURAL JOIN</strong></li>
        <li><strong>SELF JOIN</strong></li>
    </ul>

    <h2>1. INNER JOIN</h2>
    <p>An <strong>INNER JOIN</strong> returns records that have matching values in both tables. If a row in either table does not have a corresponding match in the other table, it will not appear in the result set.</p>

    <h3>Example of INNER JOIN</h3>
    <pre>
SELECT orders.order_id, customers.customer_name
FROM orders
INNER JOIN customers
ON orders.customer_id = customers.customer_id;
    </pre>

    <h3>Sample Data for INNER JOIN</h3>

    <h4>Orders Table</h4>
    <table>
        <thead>
            <tr>
                <th>order_id</th>
                <th>customer_id</th>
                <th>amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>101</td>
                <td>500</td>
            </tr>
            <tr>
                <td>2</td>
                <td>102</td>
                <td>300</td>
            </tr>
            <tr>
                <td>3</td>
                <td>103</td>
                <td>700</td>
            </tr>
        </tbody>
    </table>

    <h4>Customers Table</h4>
    <table>
        <thead>
            <tr>
                <th>customer_id</th>
                <th>customer_name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>101</td>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Jane Smith</td>
            </tr>
        </tbody>
    </table>

    <h4>Result of INNER JOIN</h4>
    <table>
        <thead>
            <tr>
                <th>order_id</th>
                <th>customer_name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane Smith</td>
            </tr>
        </tbody>
    </table>

    <h2>2. LEFT (OUTER) JOIN</h2>
    <p>A <strong>LEFT JOIN</strong> returns all records from the left table (Orders), and the matched records from the right table (Customers). If there is no match, the result will contain <code>NULL</code> for columns from the right table.</p>

    <h3>Example of LEFT JOIN</h3>
    <pre>
SELECT orders.order_id, customers.customer_name
FROM orders
LEFT JOIN customers
ON orders.customer_id = customers.customer_id;
    </pre>

    <h4>Result of LEFT JOIN</h4>
    <table>
        <thead>
            <tr>
                <th>order_id</th>
                <th>customer_name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane Smith</td>
            </tr>
            <tr>
                <td>3</td>
                <td>NULL</td>
            </tr>
        </tbody>
    </table>

    <h2>3. RIGHT (OUTER) JOIN</h2>
    <p>A <strong>RIGHT JOIN</strong> returns all records from the right table (Customers), and the matched records from the left table (Orders). If there is no match, the result will contain <code>NULL</code> for columns from the left table.</p>

    <h3>Example of RIGHT JOIN</h3>
    <pre>
SELECT orders.order_id, customers.customer_name
FROM orders
RIGHT JOIN customers
ON orders.customer_id = customers.customer_id;
    </pre>

    <h4>Result of RIGHT JOIN</h4>
    <table>
        <thead>
            <tr>
                <th>order_id</th>
                <th>customer_name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane Smith</td>
            </tr>
            <tr>
                <td>NULL</td>
                <td>NULL</td>
            </tr>
        </tbody>
    </table>

    <h2>4. FULL OUTER JOIN</h2>
    <p>A <strong>FULL OUTER JOIN</strong> returns all records when there is a match in either table. If there is no match, the result will contain <code>NULL</code> for columns from the other table.</p>

    <h3>Example of FULL OUTER JOIN</h3>
    <pre>
SELECT orders.order_id, customers.customer_name
FROM orders
FULL OUTER JOIN customers
ON orders.customer_id = customers.customer_id;
    </pre>

    <h4>Result of FULL OUTER JOIN</h4>
    <table>
        <thead>
            <tr>
                <th>order_id</th>
                <th>customer_name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane Smith</td>
            </tr>
            <tr>
                <td>3</td>
                <td>NULL</td>
            </tr>
            <tr>
                <td>NULL</td>
                <td>NULL</td>
            </tr>
        </tbody>
    </table>

    <h2>5. CROSS JOIN</h2>
    <p>A <strong>CROSS JOIN</strong> returns the Cartesian product of both tables. It multiplies each row from the first table with every row from the second table, resulting in a large result set.</p>

    <h3>Example of CROSS JOIN</h3>
    <pre>
SELECT orders.order_id, customers.customer_name
FROM orders
CROSS JOIN customers;
    </pre>

    <h4>Result of CROSS JOIN</h4>
    <table>
        <thead>
            <tr>
                <th>order_id</th>
                <th>customer_name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Jane Smith</td>
            </tr>
            <tr>
                <td>2</td>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane Smith</td>
            </tr>
            <tr>
                <td>3</td>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Jane Smith</td>
            </tr>
        </tbody>
    </table>

    <h2>6. NATURAL JOIN</h2>
    <p>A <strong>NATURAL JOIN</strong> automatically joins two tables based on the columns that have the same name and data type in both tables. It eliminates the need to specify the join condition explicitly.</p>

    <h3>Example of NATURAL JOIN</h3>
    <pre>
SELECT order_id, customer_name
FROM orders
NATURAL JOIN customers;
    </pre>

    <h4>Sample Data for NATURAL JOIN</h4>
    <h4>Orders Table</h4>
    <table>
        <thead>
            <tr>
                <th>order_id</th>
                <th>customer_id</th>
                <th>amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>101</td>
                <td>500</td>
            </tr>
            <tr>
                <td>2</td>
                <td>102</td>
                <td>300</td>
            </tr>
            <tr>
                <td>3</td>
                <td>101</td>
                <td>700</td>
            </tr>
        </tbody>
    </table>

    <h4>Result of NATURAL JOIN</h4>
    <table>
        <thead>
            <tr>
                <th>order_id</th>
                <th>customer_name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane Smith</td>
            </tr>
            <tr>
                <td>3</td>
                <td>John Doe</td>
            </tr>
        </tbody>
    </table>

    <h2>7. SELF JOIN</h2>
    <p>A <strong>SELF JOIN</strong> is a join that is used to join a table with itself. This is useful for querying hierarchical data or comparing rows within the same table.</p>

    <h3>Example of SELF JOIN</h3>
    <pre>
SELECT a.employee_id AS EmployeeID, a.name AS EmployeeName, b.name AS ManagerName
FROM employees a
JOIN employees b ON a.manager_id = b.employee_id;
    </pre>

    <h4>Sample Data for SELF JOIN</h4>
    <h4>Employees Table</h4>
    <table>
        <thead>
            <tr>
                <th>employee_id</th>
                <th>name</th>
                <th>manager_id</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John</td>
                <td>NULL</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane</td>
                <td>1</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Mike</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>

    <h4>Result of SELF JOIN</h4>
    <table>
        <thead>
            <tr>
                <th>EmployeeID</th>
                <th>EmployeeName</th>
                <th>ManagerName</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2</td>
                <td>Jane</td>
                <td>John</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Mike</td>
                <td>John</td>
            </tr>
        </tbody>
    </table>

</body>
</html>

`;
            break;
        case 'functions':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Functions with Operations</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h2 {
            color: #333;
        }
        h3 {
            color: #555;
        }
        pre {
            background-color: #e3d6d6;
            padding: 10px;
            border-radius: 5px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #d7b9b9;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #c83030;
        }
    </style>
</head>
<body>

    <h2>SQL Functions with Operations</h2>
    <p>SQL functions perform operations on data stored in a database. Here we will explore various functions with sample operations and their corresponding results displayed in tables.</p>

    <h2>1. Sample Data</h2>
    <p>We will use the following sample tables for demonstration:</p>
    <h3>Customers Table</h3>
    <table>
        <thead>
            <tr>
                <th>CustomerID</th>
                <th>CustomerName</th>
                <th>ContactNumber</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>123-456-7890</td>
                <td>New York</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>987-654-3210</td>
                <td>Los Angeles</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Emily Davis</td>
                <td>456-789-1230</td>
                <td>Chicago</td>
            </tr>
        </tbody>
    </table>

    <h3>Orders Table</h3>
    <table>
        <thead>
            <tr>
                <th>OrderID</th>
                <th>CustomerID</th>
                <th>OrderAmount</th>
                <th>OrderDate</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>150.00</td>
                <td>2024-01-10</td>
            </tr>
            <tr>
                <td>2</td>
                <td>1</td>
                <td>300.00</td>
                <td>2024-02-15</td>
            </tr>
            <tr>
                <td>3</td>
                <td>2</td>
                <td>100.00</td>
                <td>2024-03-12</td>
            </tr>
            <tr>
                <td>4</td>
                <td>3</td>
                <td>250.00</td>
                <td>2024-01-25</td>
            </tr>
        </tbody>
    </table>

    <h2>2. Aggregate Functions</h2>

    <h3>2.1 COUNT()</h3>
    <p>The <strong>COUNT()</strong> function returns the number of rows that meet a specified condition.</p>
    <pre>
SELECT COUNT(*) AS TotalOrders
FROM Orders WHERE OrderAmount > 100;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>TotalOrders</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>3</td>
            </tr>
        </tbody>
    </table>

    <h3>2.2 SUM()</h3>
    <p>The <strong>SUM()</strong> function calculates the total sum of a numeric column.</p>
    <pre>
SELECT SUM(OrderAmount) AS TotalSales
FROM Orders;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>TotalSales</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>800.00</td>
            </tr>
        </tbody>
    </table>

    <h3>2.3 AVG()</h3>
    <p>The <strong>AVG()</strong> function computes the average value of a numeric column.</p>
    <pre>
SELECT AVG(OrderAmount) AS AverageOrderAmount
FROM Orders;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>AverageOrderAmount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>200.00</td>
            </tr>
        </tbody>
    </table>

    <h3>2.4 MAX()</h3>
    <p>The <strong>MAX()</strong> function returns the maximum value from a set of values in a specific column.</p>
    <pre>
SELECT MAX(OrderAmount) AS HighestOrder
FROM Orders;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>HighestOrder</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>300.00</td>
            </tr>
        </tbody>
    </table>

    <h3>2.5 MIN()</h3>
    <p>The <strong>MIN()</strong> function returns the minimum value from a set of values in a specific column.</p>
    <pre>
SELECT MIN(OrderAmount) AS LowestOrder
FROM Orders;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>LowestOrder</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>100.00</td>
            </tr>
        </tbody>
    </table>

    <h2>3. Scalar Functions</h2>

    <h3>3.1 UPPER()</h3>
    <p>The <strong>UPPER()</strong> function converts a string to uppercase letters.</p>
    <pre>
SELECT UPPER(CustomerName) AS UppercaseName
FROM Customers;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>UppercaseName</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>JOHN DOE</td>
            </tr>
            <tr>
                <td>JANE SMITH</td>
            </tr>
            <tr>
                <td>EMILY DAVIS</td>
            </tr>
        </tbody>
    </table>

    <h3>3.2 LOWER()</h3>
    <p>The <strong>LOWER()</strong> function converts a string to lowercase letters.</p>
    <pre>
SELECT LOWER(CustomerName) AS LowercaseName
FROM Customers;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>LowercaseName</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>john doe</td>
            </tr>
            <tr>
                <td>jane smith</td>
            </tr>
            <tr>
                <td>emily davis</td>
            </tr>
        </tbody>
    </table>

    <h3>3.3 LEN()</h3>
    <p>The <strong>LEN()</strong> function returns the length of a string.</p>
    <pre>
SELECT CustomerName, LEN(CustomerName) AS NameLength
FROM Customers;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>CustomerName</th>
                <th>NameLength</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>8</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Emily Davis</td>
                <td>11</td>
            </tr>
        </tbody>
    </table>

    <h3>3.4 ROUND()</h3>
    <p>The <strong>ROUND()</strong> function rounds a numeric value to a specified number of decimal places.</p>
    <pre>
SELECT OrderAmount, ROUND(OrderAmount, 0) AS RoundedAmount
FROM Orders;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>OrderAmount</th>
                <th>RoundedAmount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>150.00</td>
                <td>150</td>
            </tr>
            <tr>
                <td>300.00</td>
                <td>300</td>
            </tr>
            <tr>
                <td>100.00</td>
                <td>100</td>
            </tr>
            <tr>
                <td>250.00</td>
                <td>250</td>
            </tr>
        </tbody>
    </table>

    <h3>3.5 GETDATE()</h3>
    <p>The <strong>GETDATE()</strong> function returns the current date and time.</p>
    <pre>
SELECT GETDATE() AS CurrentDateTime;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>CurrentDateTime</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2024-10-22 12:00:00</td>
            </tr>
        </tbody>
    </table>

    <h2>4. String Functions</h2>

    <h3>4.1 CONCAT()</h3>
    <p>The <strong>CONCAT()</strong> function combines multiple strings into one.</p>
    <pre>
SELECT CONCAT(CustomerName, ' - ', ContactNumber) AS CustomerDetails
FROM Customers;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>CustomerDetails</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe - 123-456-7890</td>
            </tr>
            <tr>
                <td>Jane Smith - 987-654-3210</td>
            </tr>
            <tr>
                <td>Emily Davis - 456-789-1230</td>
            </tr>
        </tbody>
    </table>

    <h3>4.2 SUBSTRING()</h3>
    <p>The <strong>SUBSTRING()</strong> function extracts a substring from a string, starting at a specified position for a specified length.</p>
    <pre>
SELECT SUBSTRING(CustomerName, 1, 4) AS NamePart
FROM Customers;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>NamePart</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
            </tr>
            <tr>
                <td>Jane</td>
            </tr>
            <tr>
                <td>Emily</td>
            </tr>
        </tbody>
    </table>

    <h3>4.3 REPLACE()</h3>
    <p>The <strong>REPLACE()</strong> function replaces all occurrences of a specified substring with another substring.</p>
    <pre>
SELECT REPLACE(CustomerName, 'Doe', 'Smith') AS CorrectedName
FROM Customers;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>CorrectedName</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Smith</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
            </tr>
            <tr>
                <td>Emily Davis</td>
            </tr>
        </tbody>
    </table>

    <h3>4.4 TRIM()</h3>
    <p>The <strong>TRIM()</strong> function removes leading and trailing spaces from a string.</p>
    <pre>
SELECT TRIM('   John Doe   ') AS CleanedName;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>CleanedName</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
            </tr>
        </tbody>
    </table>

    <h2>Conclusion</h2>
    <p>Understanding SQL functions is crucial for effective data manipulation and analysis in database management. These functions enhance the ability to extract, transform, and analyze data efficiently.</p>

</body>
</html>



            `;
            break;
        case 'subqueries':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Subqueries</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3, h4 {
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #cd3636;
        }
    </style>
</head>
<body>

    <h1>SQL Subqueries</h1>
    <p>A subquery is a query nested inside another SQL query. Subqueries can be used in SELECT, INSERT, UPDATE, and DELETE statements and can return individual values or a set of records. Subqueries are categorized into two types: correlated and non-correlated subqueries.</p>

    <h2>Sample Data</h2>
    <h3>Customers Table</h3>
    <table>
        <thead>
            <tr>
                <th>CustomerID</th>
                <th>CustomerName</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>USA</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>UK</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Emily Davis</td>
                <td>USA</td>
            </tr>
        </tbody>
    </table>

    <h3>Orders Table</h3>
    <table>
        <thead>
            <tr>
                <th>OrderID</th>
                <th>CustomerID</th>
                <th>OrderAmount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>150.00</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td>300.00</td>
            </tr>
            <tr>
                <td>3</td>
                <td>1</td>
                <td>100.00</td>
            </tr>
            <tr>
                <td>4</td>
                <td>3</td>
                <td>250.00</td>
            </tr>
        </tbody>
    </table>

    <h2>1. Non-Correlated Subqueries</h2>
    <p>A non-correlated subquery is executed independently of the outer query. It can be executed on its own.</p>

    <h3>1.1 Example: Find Customers with Orders Over $200</h3>
    <pre>
SELECT CustomerName 
FROM Customers 
WHERE CustomerID IN (SELECT CustomerID FROM Orders WHERE OrderAmount > 200);
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>CustomerName</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Jane Smith</td>
            </tr>
        </tbody>
    </table>

    <h2>2. Correlated Subqueries</h2>
    <p>A correlated subquery is executed for each row processed by the outer query. It depends on the outer query for its values.</p>

    <h3>2.1 Example: Find Customers with Order Amounts Greater than Their Average</h3>
    <pre>
SELECT CustomerName 
FROM Customers C 
WHERE EXISTS (SELECT 1 FROM Orders O WHERE O.CustomerID = C.CustomerID GROUP BY O.CustomerID HAVING AVG(O.OrderAmount) < 200);
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>CustomerName</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>Emily Davis</td>
            </tr>
        </tbody>
    </table>

    <h2>3. Subquery in SELECT Statement</h2>
    <p>Subqueries can also be used in the SELECT statement to calculate derived values.</p>

    <h3>3.1 Example: Get Customer Names and Their Order Count</h3>
    <pre>
SELECT CustomerName, 
    (SELECT COUNT(*) FROM Orders WHERE Orders.CustomerID = Customers.CustomerID) AS OrderCount
FROM Customers;
    </pre>
    <h4>Result</h4>
    <table>
        <thead>
            <tr>
                <th>CustomerName</th>
                <th>OrderCount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Emily Davis</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>

    <h2>Conclusion</h2>
    <p>Subqueries are powerful tools in SQL that allow for complex queries and data analysis. Understanding how to effectively use both correlated and non-correlated subqueries can greatly enhance data retrieval capabilities.</p>

</body>
</html>

            `;
            break;
        case 'indexes':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Indexes Explained</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            background-color: #f9f9f9;
        }
        h1, h2, h3, h4 {
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        pre {
            background-color: #e2e2e2;
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>

    <h1>Understanding SQL Indexes</h1>
    <p>Indexes in SQL are powerful tools designed to enhance the speed and efficiency of data retrieval operations within a database. Just like an index in a book, SQL indexes allow the database engine to quickly locate specific rows without scanning every row in a table.</p>

    <h2>Why Use Indexes?</h2>
    <p>As databases grow larger, the time taken to search for data can increase significantly. Indexes help improve query performance by:</p>
    <ul>
        <li>Reducing the number of disk reads required to access data.</li>
        <li>Speeding up retrieval operations, especially for large datasets.</li>
        <li>Enhancing the performance of various queries, including SELECT, UPDATE, and DELETE operations.</li>
    </ul>

    <h2>Types of Indexes</h2>
    <p>There are several types of indexes, each serving a different purpose:</p>

    <h3>1. Single-Column Index</h3>
    <p>A single-column index is created on one specific column in a table, allowing for faster retrieval of rows based on that column.</p>
    <pre>
CREATE INDEX idx_employee_lastname ON Employees(LastName);
    </pre>

    <h3>2. Composite Index</h3>
    <p>A composite index is created on multiple columns, which can improve performance for queries that filter on multiple columns simultaneously.</p>
    <pre>
CREATE INDEX idx_department_salary ON Employees(Department, Salary);
    </pre>

    <h3>3. Unique Index</h3>
    <p>A unique index ensures that all values in the indexed column(s) are unique, preventing duplicate entries. This is often used for primary keys.</p>
    <pre>
CREATE UNIQUE INDEX idx_employee_id ON Employees(EmployeeID);
    </pre>

    <h3>4. Full-Text Index</h3>
    <p>A full-text index is used for searching text-based data within character columns. It allows for complex search operations such as searching for phrases or specific words.</p>
    <pre>
CREATE FULLTEXT INDEX idx_fulltext_description ON Products(Description);
    </pre>

    <h3>5. Clustered Index</h3>
    <p>A clustered index determines the physical order of data in the table. Each table can have only one clustered index, typically on the primary key.</p>
    <pre>
CREATE CLUSTERED INDEX idx_employee_id ON Employees(EmployeeID);
    </pre>

    <h3>6. Non-Clustered Index</h3>
    <p>A non-clustered index is a separate structure from the data rows and contains pointers to the actual data. A table can have multiple non-clustered indexes.</p>
    <pre>
CREATE NONCLUSTERED INDEX idx_nonclustered_salary ON Employees(Salary);
    </pre>

    <h2>How Indexes Work</h2>
    <p>When a query is executed, the SQL database engine can utilize indexes to quickly locate the data. Here's a detailed breakdown of the process:</p>
    
    <h3>Example: Employee Table</h3>
    <table>
        <thead>
            <tr>
                <th>EmployeeID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Department</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John</td>
                <td>Doe</td>
                <td>IT</td>
                <td>60000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane</td>
                <td>Smith</td>
                <td>HR</td>
                <td>50000</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Mike</td>
                <td>Johnson</td>
                <td>Finance</td>
                <td>70000</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Emily</td>
                <td>Davis</td>
                <td>IT</td>
                <td>65000</td>
            </tr>
        </tbody>
    </table>

    <h3>Example Query Without Index</h3>
    <p>Consider the following query that retrieves an employee by last name:</p>
    <pre>
SELECT * FROM Employees WHERE LastName = 'Doe';
    </pre>
    <p>Without an index on <code>LastName</code>, the database must perform a full table scan, examining each row until it finds a match. This can be slow, especially with large tables.</p>

    <h3>Example Query With Index</h3>
    <p>Now, if an index exists on <code>LastName</code>, the database can use the index to quickly find the location of the rows that match the search criteria:</p>
    <pre>
CREATE INDEX idx_lastname ON Employees(LastName);
SELECT * FROM Employees WHERE LastName = 'Doe';
    </pre>
    <p>With the index in place, the database engine directly accesses the indexed data, leading to a significant performance improvement.</p>

    <h2>Performance Comparison</h2>
    <p>Let's illustrate the performance difference with an example:</p>
    
    <h3>Without Index</h3>
    <p>When executing the following query without an index, the database must scan all rows:</p>
    <pre>
SELECT * FROM Employees WHERE LastName = 'Doe';
    </pre>
    
    <h3>With Index</h3>
    <p>With an index, the same query becomes much faster:</p>
    <pre>
SELECT * FROM Employees WHERE LastName = 'Doe';
    </pre>
    <p>The database accesses the index first, quickly locating the row with the last name "Doe" without needing to scan the entire table.</p>

    <h2>Considerations When Using Indexes</h2>
    <p>While indexes significantly enhance query performance, they also have some trade-offs:</p>
    <ul>
        <li>**Increased Storage**: Indexes require additional disk space.</li>
        <li>**Slower Writes**: Insert, update, and delete operations can become slower because the index must also be updated.</li>
        <li>**Maintenance**: Indexes may need to be rebuilt or reorganized periodically for optimal performance.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Indexes are critical for optimizing SQL query performance. They allow the database to retrieve data quickly and efficiently. Understanding how to use and manage indexes effectively is essential for database administrators and developers.</p>

</body>
</html>

            `;
            break;
        case 'transactions':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Transactions and Locking Mechanisms</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
        }
        h3 {
            color: #2980b9;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 3px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
    </style>
</head>
<body>

<h2>Transactions in SQL</h2>
<p>
    A <strong>transaction</strong> in SQL is a sequence of one or more SQL statements that are executed as a single logical unit of work. 
    Transactions are essential for ensuring data integrity and consistency, especially in multi-user environments where concurrent access to the database can occur.
</p>

<h3>Key Characteristics</h3>
<p>Transactions are governed by the <strong>ACID</strong> properties:</p>
<ul>
    <li>
        <strong>Atomicity:</strong> This property ensures that a transaction is treated as a single unit. 
        If any part of the transaction fails, the entire transaction is aborted, and the database is rolled back to its state before the transaction began.
    </li>
    <li>
        <strong>Consistency:</strong> A transaction must transition the database from one valid state to another. 
        Any transaction must ensure that the integrity constraints are maintained.
    </li>
    <li>
        <strong>Isolation:</strong> Transactions must operate independently. 
        The operations of a transaction should not be visible to other transactions until the transaction is committed.
    </li>
    <li>
        <strong>Durability:</strong> Once a transaction is committed, its changes become permanent, even in the event of a system failure.
    </li>
</ul>

<h2>Transaction Control Protocols</h2>
<p>Transaction control commands in SQL are used to manage the execution of transactions. Here are the primary commands:</p>

<h3>1. BEGIN TRANSACTION</h3>
<p>This command marks the start of a transaction. All subsequent SQL statements are part of this transaction until a COMMIT or ROLLBACK is executed.</p>
<code>BEGIN TRANSACTION;</code>

<h3>2. COMMIT</h3>
<p>This command is used to save all the changes made during the transaction. Once committed, the changes cannot be rolled back.</p>
<code>COMMIT;</code>

<h3>3. ROLLBACK</h3>
<p>This command is used to undo all changes made during the transaction. If an error occurs, this command can restore the database to its previous state.</p>
<code>ROLLBACK;</code>

<h3>4. SAVEPOINT</h3>
<p>This command is used to set a point within a transaction to which you can later roll back. This is useful for larger transactions where you may want to undo part of the transaction without affecting the entire transaction.</p>
<code>SAVEPOINT savepoint_name;</code>

<h2>Transaction Example</h2>
<p>Consider a bank transfer operation where money is transferred from Account A to Account B:</p>
<pre>
<code>
BEGIN TRANSACTION;

UPDATE accounts
SET balance = balance - 100
WHERE account_id = 'A';  -- Debiting Account A

UPDATE accounts
SET balance = balance + 100
WHERE account_id = 'B';  -- Crediting Account B

COMMIT;  -- Commit the transaction if both operations are successful
</code>
</pre>

<h2>What are Locks?</h2>
<p>Locks are mechanisms used to manage concurrent access to the database. They prevent multiple transactions from interfering with each other, ensuring data integrity and consistency.</p>

<h2>Types of Locks</h2>
<ul>
    <li>
        <strong>Shared Lock:</strong> Allows multiple transactions to read a resource but prevents any transaction from modifying it.
    </li>
    <li>
        <strong>Exclusive Lock:</strong> Allows a transaction to both read and modify a resource, preventing other transactions from accessing it.
    </li>
    <li>
        <strong>Update Lock:</strong> Used to prevent a deadlock by signaling that a transaction intends to modify a resource.
    </li>
    <li>
        <strong>Intent Lock:</strong> A higher-level lock that indicates a transaction intends to acquire a lock on a lower-level resource.
    </li>
</ul>

<h2>Deadlocks</h2>
<p>A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a cycle of dependencies that prevents any transaction from proceeding. For example:</p>
<pre>
<code>
Transaction 1:          Transaction 2:
------------------      ------------------
1. LOCK A               1. LOCK B
2. LOCK B (wait)       2. LOCK A (wait)
</code>
</pre>

<h2>Lock-Based Protocols</h2>
<p>Lock-based protocols are strategies for managing locks and ensuring serializability of transactions. Two common lock-based protocols are:</p>

<h3>1. Strict Two-Phase Locking (S2PL)</h3>
<p>In Strict Two-Phase Locking, a transaction must hold all its locks until it completes (commits or rolls back). This ensures that no other transaction can access locked resources, thus guaranteeing serializability.</p>
<h4>Advantages:</h4>
<ul>
    <li>Guaranteed serializability</li>
    <li>Simple implementation</li>
</ul>
<h4>Disadvantages:</h4>
<ul>
    <li>Higher chances of deadlocks</li>
    <li>Increased waiting time for transactions</li>
</ul>

<h3>2. Two-Phase Locking (2PL)</h3>
<p>In Two-Phase Locking, a transaction goes through two phases:</p>
<ul>
    <li><strong>Growing Phase:</strong> The transaction can acquire locks but cannot release any.</li>
    <li><strong>Shrinking Phase:</strong> The transaction can release locks but cannot acquire any more.</li>
</ul>
<p>This flexibility can reduce waiting times but might lead to non-serializable schedules.</p>
<h4>Advantages:</h4>
<ul>
    <li>Flexibility in lock management</li>
    <li>Lower chances of deadlocks compared to S2PL</li>
</ul>
<h4>Disadvantages:</h4>
<ul>
    <li>Potential for non-serializable schedules</li>
    <li>Complex implementation</li>
</ul>

<h2>Conclusion</h2>
<p>Understanding transactions, locks, and lock-based protocols is essential for maintaining data integrity and consistency in SQL databases. 
By effectively managing transactions and locking mechanisms, you can ensure that your database operates efficiently and reliably.</p>

</body>
</html>

            `;
            break;
        case 'views':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Views and Operations</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
        }
        h3 {
            color: #2980b9;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 3px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h2>SQL Views</h2>
<p>
    A <strong>view</strong> in SQL is a virtual table that is based on the result set of a SELECT query. 
    Views can simplify complex queries, encapsulate data, and enhance security by restricting access to certain columns or rows of a table.
</p>

<h3>Key Features of Views</h3>
<ul>
    <li>
        <strong>Virtual Table:</strong> A view does not store data physically; instead, it presents data stored in one or more tables.
    </li>
    <li>
        <strong>Encapsulation:</strong> Views can hide the complexity of the underlying data and present a simplified interface to users.
    </li>
    <li>
        <strong>Security:</strong> Views can restrict access to sensitive data by exposing only specific columns and rows.
    </li>
    <li>
        <strong>Consistency:</strong> Changes to the underlying tables are reflected in the view automatically.
    </li>
</ul>

<h2>Creating a View</h2>
<p>The syntax for creating a view is as follows:</p>
<pre>
<code>
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
</code>
</pre>

<h3>Example of Creating a View</h3>
<p>Consider a table named <code>employees</code>:</p>
<table>
    <thead>
        <tr>
            <th>employee_id</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>department</th>
            <th>salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>HR</td>
            <td>60000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane</td>
            <td>Smith</td>
            <td>IT</td>
            <td>75000</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Mike</td>
            <td>Johnson</td>
            <td>Finance</td>
            <td>70000</td>
        </tr>
    </tbody>
</table>
<p>We can create a view to show employees in the IT department:</p>
<pre>
<code>
CREATE VIEW IT_Employees AS
SELECT first_name, last_name, salary
FROM employees
WHERE department = 'IT';
</code>
</pre>

<h3>Querying a View</h3>
<p>You can query a view just like a regular table:</p>
<pre>
<code>
SELECT * FROM IT_Employees;
</code>
</pre>
<p>This would return:</p>
<table>
    <thead>
        <tr>
            <th>first_name</th>
            <th>last_name</th>
            <th>salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Jane</td>
            <td>Smith</td>
            <td>75000</td>
        </tr>
    </tbody>
</table>

<h2>Updating a View</h2>
<p>In some cases, you can update the data in the underlying tables through a view. The view must be updatable, which typically requires it to be based on a single table without any grouping or aggregate functions.</p>

<h3>Example of Updating a View</h3>
<p>Assuming we want to increase the salary of the employee in the IT department:</p>
<pre>
<code>
UPDATE IT_Employees
SET salary = salary + 5000
WHERE last_name = 'Smith';
</code>
</pre>
<p>This will update the salary in the <code>employees</code> table:</p>
<table>
    <thead>
        <tr>
            <th>employee_id</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>department</th>
            <th>salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>HR</td>
            <td>60000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane</td>
            <td>Smith</td>
            <td>IT</td>
            <td>80000</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Mike</td>
            <td>Johnson</td>
            <td>Finance</td>
            <td>70000</td>
        </tr>
    </tbody>
</table>

<h2>Deleting a View</h2>
<p>To remove a view from the database, use the <code>DROP VIEW</code> command:</p>
<pre>
<code>
DROP VIEW IT_Employees;
</code>
</pre>
<p>This command deletes the view, but the underlying data remains unaffected.</p>

<h2>Conclusion</h2>
<p>SQL views are powerful tools for simplifying data access, enhancing security, and encapsulating complex queries. 
Understanding how to create, query, update, and delete views is essential for effective database management.</p>

</body>
</html>

            `;
            break;
        case 'triggers':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Triggers</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
        }
        h3 {
            color: #2980b9;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 3px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h2>SQL Triggers</h2>
<p>
    A <strong>trigger</strong> is a special type of stored procedure in SQL that automatically executes 
    or fires when certain events occur in the database. Triggers can be set to activate before or after 
    an <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code> operation on a table.
</p>

<h3>Key Features of Triggers</h3>
<ul>
    <li>
        <strong>Automatic Execution:</strong> Triggers automatically run when specified events occur in the database.
    </li>
    <li>
        <strong>Data Integrity:</strong> Triggers help maintain data integrity by enforcing rules and constraints.
    </li>
    <li>
        <strong>Audit Trails:</strong> Triggers can be used to track changes in data, providing a history of modifications.
    </li>
    <li>
        <strong>Complex Business Logic:</strong> Triggers allow you to implement complex business rules that may not be achievable through regular SQL statements.
    </li>
</ul>

<h2>Creating a Trigger</h2>
<p>The syntax for creating a trigger is as follows:</p>
<pre>
<code>
CREATE TRIGGER trigger_name
BEFORE|AFTER INSERT|UPDATE|DELETE
ON table_name
FOR EACH ROW
BEGIN
    -- Trigger logic
END;
</code>
</pre>

<h3>Example of Creating a Trigger</h3>
<p>Consider a table named <code>employees</code>:</p>
<table>
    <thead>
        <tr>
            <th>employee_id</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>department</th>
            <th>salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>HR</td>
            <td>60000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane</td>
            <td>Smith</td>
            <td>IT</td>
            <td>75000</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Mike</td>
            <td>Johnson</td>
            <td>Finance</td>
            <td>70000</td>
        </tr>
    </tbody>
</table>
<p>We can create a trigger that logs changes made to the <code>employees</code> table:</p>
<pre>
<code>
CREATE TRIGGER LogSalaryChange
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    INSERT INTO salary_log (employee_id, old_salary, new_salary, change_date)
    VALUES (OLD.employee_id, OLD.salary, NEW.salary, NOW());
END;
</code>
</pre>

<h3>Trigger Logic Explained</h3>
<p>In the above trigger:</p>
<ul>
    <li><code>LogSalaryChange</code> is the name of the trigger.</li>
    <li>It is set to execute <strong>after</strong> an <code>UPDATE</code> on the <code>employees</code> table.</li>
    <li>For each updated row, it inserts a record into the <code>salary_log</code> table, logging the employee ID, old salary, new salary, and the date of the change.</li>
</ul>

<h2>Trigger Execution Example</h2>
<p>Assuming we have a <code>salary_log</code> table structured as follows:</p>
<table>
    <thead>
        <tr>
            <th>employee_id</th>
            <th>old_salary</th>
            <th>new_salary</th>
            <th>change_date</th>
        </tr>
    </thead>
    <tbody>
        <!-- This table will be populated after the trigger fires -->
    </tbody>
</table>

<p>Now, if we update Jane's salary:</p>
<pre>
<code>
UPDATE employees
SET salary = 80000
WHERE last_name = 'Smith';
</code>
</pre>

<p>After the update, the <code>salary_log</code> table will have the following entry:</p>
<table>
    <thead>
        <tr>
            <th>employee_id</th>
            <th>old_salary</th>
            <th>new_salary</th>
            <th>change_date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2</td>
            <td>75000</td>
            <td>80000</td>
            <td>[current_date_time]</td>
        </tr>
    </tbody>
</table>

<h2>Dropping a Trigger</h2>
<p>To remove a trigger from the database, use the <code>DROP TRIGGER</code> command:</p>
<pre>
<code>
DROP TRIGGER LogSalaryChange;
</code>
</pre>
<p>This command deletes the trigger, and it will no longer fire on the specified events.</p>

<h2>Conclusion</h2>
<p>SQL triggers are powerful tools for automating actions in response to changes in the database. They enhance data integrity and allow the implementation of complex business rules, making them an essential feature for advanced database management.</p>

</body>
</html>

            `;
            break;
        case 'procedures':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Procedures</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
        }
        h3 {
            color: #2980b9;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 3px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #e64d4d;
        }
    </style>
</head>
<body>

<h2>SQL Procedures</h2>
<p>
    A <strong>stored procedure</strong> is a set of SQL statements that can be stored in the database and 
    executed as a single unit. Procedures are useful for encapsulating business logic and can accept 
    parameters, enabling more dynamic and reusable code.
</p>

<h3>Key Features of Stored Procedures</h3>
<ul>
    <li>
        <strong>Modularity:</strong> Procedures allow you to break down complex operations into manageable pieces.
    </li>
    <li>
        <strong>Reusability:</strong> Procedures can be called multiple times from different places in your application.
    </li>
    <li>
        <strong>Performance:</strong> Procedures can improve performance by reducing the amount of data sent between the client and server.
    </li>
    <li>
        <strong>Security:</strong> Procedures can restrict direct access to tables, allowing controlled data manipulation.
    </li>
</ul>

<h2>Creating a Stored Procedure</h2>
<p>The syntax for creating a stored procedure is as follows:</p>
<pre>
<code>
CREATE PROCEDURE procedure_name (parameters)
BEGIN
    -- Procedure logic
END;
</code>
</pre>

<h3>Example of Creating a Stored Procedure</h3>
<p>Consider a table named <code>employees</code>:</p>
<table>
    <thead>
        <tr>
            <th>employee_id</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>department</th>
            <th>salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>HR</td>
            <td>60000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane</td>
            <td>Smith</td>
            <td>IT</td>
            <td>75000</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Mike</td>
            <td>Johnson</td>
            <td>Finance</td>
            <td>70000</td>
        </tr>
    </tbody>
</table>

<p>We can create a procedure to update an employee's salary:</p>
<pre>
<code>
CREATE PROCEDURE UpdateEmployeeSalary(
    IN emp_id INT,
    IN new_salary DECIMAL(10,2)
)
BEGIN
    UPDATE employees
    SET salary = new_salary
    WHERE employee_id = emp_id;
END;
</code>
</pre>

<h3>Procedure Logic Explained</h3>
<p>In the above procedure:</p>
<ul>
    <li><code>UpdateEmployeeSalary</code> is the name of the procedure.</li>
    <li>It accepts two parameters: <code>emp_id</code> (the ID of the employee) and <code>new_salary</code> (the new salary to be assigned).</li>
    <li>The procedure updates the salary of the specified employee in the <code>employees</code> table.</li>
</ul>

<h2>Executing a Stored Procedure</h2>
<p>To execute the stored procedure, you can use the following command:</p>
<pre>
<code>
CALL UpdateEmployeeSalary(2, 80000);
</code>
</pre>

<p>After executing the procedure, the <code>employees</code> table will be updated:</p>
<table>
    <thead>
        <tr>
            <th>employee_id</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>department</th>
            <th>salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>HR</td>
            <td>60000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane</td>
            <td>Smith</td>
            <td>IT</td>
            <td>80000</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Mike</td>
            <td>Johnson</td>
            <td>Finance</td>
            <td>70000</td>
        </tr>
    </tbody>
</table>

<h2>Dropping a Stored Procedure</h2>
<p>To remove a stored procedure from the database, use the <code>DROP PROCEDURE</code> command:</p>
<pre>
<code>
DROP PROCEDURE UpdateEmployeeSalary;
</code>
</pre>
<p>This command deletes the procedure, and it will no longer be available for execution.</p>

<h2>Conclusion</h2>
<p>SQL stored procedures are powerful tools for encapsulating business logic, promoting reusability, and enhancing performance. They provide a structured way to manage complex operations in a database environment.</p>

</body>
</html>

            `;
            break;
        case 'normalization':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database Normalization</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
        }
        h3 {
            color: #2980b9;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 3px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #d65353;
        }
    </style>
</head>
<body>

<h2>Database Normalization</h2>
<p>
    Database normalization is a systematic approach to organizing data in a database to reduce redundancy 
    and improve data integrity. It involves dividing large tables into smaller, related tables and defining 
    relationships between them to eliminate unnecessary duplication of data.
</p>

<h3>Objectives of Normalization</h3>
<ul>
    <li>
        Reduce data redundancy by ensuring that data is stored only once.
    </li>
    <li>
        Improve data integrity by enforcing data consistency.
    </li>
    <li>
        Simplify data management by organizing data logically.
    </li>
    <li>
        Enhance query performance by optimizing table structures.
    </li>
</ul>

<h3>Normal Forms</h3>
<p>Normalization is achieved through a series of stages known as normal forms. The most commonly used normal forms are:</p>

<h4>1. First Normal Form (1NF)</h4>
<p>A table is in 1NF if:</p>
<ul>
    <li>All columns contain atomic (indivisible) values.</li>
    <li>Each column contains values of a single type.</li>
    <li>Each column must have a unique name.</li>
    <li>Order of storage does not matter.</li>
</ul>
<p><strong>Example:</strong> Consider the following <code>Orders</code> table:</p>
<table>
    <thead>
        <tr>
            <th>OrderID</th>
            <th>CustomerName</th>
            <th>Products</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Widget A, Widget B</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Widget C</td>
        </tr>
    </tbody>
</table>
<p>This table violates 1NF because the <code>Products</code> column contains multiple values. To convert 
it to 1NF, we can separate the products:</p>
<table>
    <thead>
        <tr>
            <th>OrderID</th>
            <th>CustomerName</th>
            <th>Product</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Widget A</td>
        </tr>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Widget B</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Widget C</td>
        </tr>
    </tbody>
</table>

<h4>2. Second Normal Form (2NF)</h4>
<p>A table is in 2NF if:</p>
<ul>
    <li>It is already in 1NF.</li>
    <li>All non-key attributes are fully functionally dependent on the primary key.</li>
</ul>
<p><strong>Example:</strong> Consider the following table that combines orders and customer details:</p>
<table>
    <thead>
        <tr>
            <th>OrderID</th>
            <th>CustomerID</th>
            <th>CustomerName</th>
            <th>Product</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>101</td>
            <td>John Doe</td>
            <td>Widget A</td>
        </tr>
        <tr>
            <td>1</td>
            <td>101</td>
            <td>John Doe</td>
            <td>Widget B</td>
        </tr>
        <tr>
            <td>2</td>
            <td>102</td>
            <td>Jane Smith</td>
            <td>Widget C</td>
        </tr>
    </tbody>
</table>
<p>This table is in 1NF but not in 2NF because <code>CustomerName</code> is dependent on <code>CustomerID</code>, 
which is not part of the primary key. To convert it to 2NF, we create two tables:</p>

<h4>Orders Table</h4>
<table>
    <thead>
        <tr>
            <th>OrderID</th>
            <th>CustomerID</th>
            <th>Product</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>101</td>
            <td>Widget A</td>
        </tr>
        <tr>
            <td>1</td>
            <td>101</td>
            <td>Widget B</td>
        </tr>
        <tr>
            <td>2</td>
            <td>102</td>
            <td>Widget C</td>
        </tr>
    </tbody>
</table>

<h4>Customers Table</h4>
<table>
    <thead>
        <tr>
            <th>CustomerID</th>
            <th>CustomerName</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>101</td>
            <td>John Doe</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Jane Smith</td>
        </tr>
    </tbody>
</table>

<h4>3. Third Normal Form (3NF)</h4>
<p>A table is in 3NF if:</p>
<ul>
    <li>It is already in 2NF.</li>
    <li>All the attributes are functionally dependent only on the primary key (no transitive dependency).</li>
</ul>
<p><strong>Example:</strong> Suppose we have a table with order details and a separate column for <code>CustomerCity</code>:</p>
<table>
    <thead>
        <tr>
            <th>OrderID</th>
            <th>CustomerID</th>
            <th>Product</th>
            <th>CustomerCity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>101</td>
            <td>Widget A</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>1</td>
            <td>101</td>
            <td>Widget B</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>2</td>
            <td>102</td>
            <td>Widget C</td>
            <td>Los Angeles</td>
        </tr>
    </tbody>
</table>
<p>This table is in 2NF but not in 3NF because <code>CustomerCity</code> depends on <code>CustomerID</code>, 
which is not part of the primary key. To convert it to 3NF, we should separate <code>CustomerCity</code>:</p>

<h4>Updated Customers Table</h4>
<table>
    <thead>
        <tr>
            <th>CustomerID</th>
            <th>CustomerName</th>
            <th>CustomerCity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>101</td>
            <td>John Doe</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Jane Smith</td>
            <td>Los Angeles</td>
        </tr>
    </tbody>
</table>

<h3>Summary of Normalization Stages</h3>
<ul>
    <li><strong>1NF:</strong> Eliminate repeating groups; ensure atomicity.</li>
    <li><strong>2NF:</strong> Eliminate partial dependencies; ensure full functional dependence on primary keys.</li>
    <li><strong>3NF:</strong> Eliminate transitive dependencies; ensure that non-key attributes are dependent only on the primary key.</li>
</ul>

<h3>Conclusion</h3>
<p>
    Database normalization is a crucial process in designing a robust database schema. By adhering to 
    normalization rules, you can create a more efficient, maintainable, and scalable database system 
    that minimizes redundancy and enhances data integrity.
</p>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Higher Normal Forms in Database Normalization</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
        }
        h3 {
            color: #2980b9;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 3px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #af3131;
        }
    </style>
</head>
<body>

<h2>Higher Normal Forms in Database Normalization</h2>

<h3>Boyce-Codd Normal Form (BCNF)</h3>
<p>
    A table is in Boyce-Codd Normal Form (BCNF) if:
</p>
<ul>
    <li>It is in Third Normal Form (3NF).</li>
    <li>For every functional dependency <code>X → Y</code>, <code>X</code> should be a superkey.</li>
</ul>
<p>
    This means that if a non-trivial functional dependency exists, the left side of the dependency must be a superkey. BCNF addresses certain types of anomalies that are not handled by 3NF.
</p>
<p><strong>Example:</strong> Consider the following table:</p>
<table>
    <thead>
        <tr>
            <th>CourseID</th>
            <th>Instructor</th>
            <th>Room</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>CS101</td>
            <td>Dr. Smith</td>
            <td>Room A</td>
        </tr>
        <tr>
            <td>CS101</td>
            <td>Dr. Brown</td>
            <td>Room B</td>
        </tr>
        <tr>
            <td>CS102</td>
            <td>Dr. Smith</td>
            <td>Room A</td>
        </tr>
        <tr>
            <td>CS102</td>
            <td>Dr. Brown</td>
            <td>Room B</td>
        </tr>
    </tbody>
</table>
<p>
    In this table, the combination of <code>CourseID</code> and <code>Instructor</code> can determine <code>Room</code>. 
    However, <code>Instructor</code> also determines <code>Room</code>. To convert this to BCNF, we need to split the table:
</p>

<h4>Courses Table</h4>
<table>
    <thead>
        <tr>
            <th>CourseID</th>
            <th>Instructor</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>CS101</td>
            <td>Dr. Smith</td>
        </tr>
        <tr>
            <td>CS101</td>
            <td>Dr. Brown</td>
        </tr>
        <tr>
            <td>CS102</td>
            <td>Dr. Smith</td>
        </tr>
        <tr>
            <td>CS102</td>
            <td>Dr. Brown</td>
        </tr>
    </tbody>
</table>

<h4>Rooms Table</h4>
<table>
    <thead>
        <tr>
            <th>Instructor</th>
            <th>Room</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Dr. Smith</td>
            <td>Room A</td>
        </tr>
        <tr>
            <td>Dr. Brown</td>
            <td>Room B</td>
        </tr>
    </tbody>
</table>

<h3>Fourth Normal Form (4NF)</h3>
<p>
    A table is in Fourth Normal Form (4NF) if:
</p>
<ul>
    <li>It is in Boyce-Codd Normal Form (BCNF).</li>
    <li>It does not contain any multi-valued dependencies.</li>
</ul>
<p>
    A multi-valued dependency occurs when one attribute in a table uniquely determines another attribute, but does not determine it fully.
</p>
<p><strong>Example:</strong> Consider the following table:</p>
<table>
    <thead>
        <tr>
            <th>StudentID</th>
            <th>Course</th>
            <th>Hobby</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Math</td>
            <td>Reading</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Math</td>
            <td>Swimming</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Science</td>
            <td>Reading</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Science</td>
            <td>Chess</td>
        </tr>
    </tbody>
</table>
<p>
    Here, <code>StudentID</code> determines <code>Course</code> and <code>Hobby</code>, leading to multi-valued dependencies. 
    To convert it to 4NF, we split it into two tables:
</p>

<h4>Student Courses Table</h4>
<table>
    <thead>
        <tr>
            <th>StudentID</th>
            <th>Course</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Math</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Science</td>
        </tr>
    </tbody>
</table>

<h4>Student Hobbies Table</h4>
<table>
    <thead>
        <tr>
            <th>StudentID</th>
            <th>Hobby</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Reading</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Swimming</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Reading</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Chess</td>
        </tr>
    </tbody>
</table>

<h3>Fifth Normal Form (5NF)</h3>
<p>
    A table is in Fifth Normal Form (5NF) if:
</p>
<ul>
    <li>It is in Fourth Normal Form (4NF).</li>
    <li>It does not contain any join dependency and joining the tables will produce lossless joins.</li>
</ul>
<p>
    Lossless joins occur when no data is lost when the tables are joined.
</p>
<p><strong>Example:</strong> Consider a table that tracks projects and their assigned resources:</p>
<table>
    <thead>
        <tr>
            <th>ProjectID</th>
            <th>ResourceID</th>
            <th>Task</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>P1</td>
            <td>R1</td>
            <td>Design</td>
        </tr>
        <tr>
            <td>P1</td>
            <td>R2</td>
            <td>Development</td>
        </tr>
        <tr>
            <td>P2</td>
            <td>R1</td>
            <td>Testing</td>
        </tr>
    </tbody>
</table>
<p>
    This table can be split into three tables to achieve 5NF:
</p>

<h4>Projects Table</h4>
<table>
    <thead>
        <tr>
            <th>ProjectID</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>P1</td>
        </tr>
        <tr>
            <td>P2</td>
        </tr>
    </tbody>
</table>

<h4>Resources Table</h4>
<table>
    <thead>
        <tr>
            <th>ResourceID</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>R1</td>
        </tr>
        <tr>
            <td>R2</td>
        </tr>
    </tbody>
</table>

<h4>Project Tasks Table</h4>
<table>
    <thead>
        <tr>
            <th>ProjectID</th>
            <th>ResourceID</th>
            <th>Task</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>P1</td>
            <td>R1</td>
            <td>Design</td>
        </tr>
        <tr>
            <td>P1</td>
            <td>R2</td>
            <td>Development</td>
        </tr>
        <tr>
            <td>P2</td>
            <td>R1</td>
            <td>Testing</td>
        </tr>
    </tbody>
</table>

<h3>Sixth Normal Form (6NF)</h3>
<p>
    Sixth Normal Form (6NF) is primarily used in temporal databases, focusing on separating data based on the time dimension. 
    It involves breaking down a table into sub-tables to ensure that the data is only related to one time period.
</p>
<p><strong>Example:</strong> Consider a table that records employee roles over time:</p>
<table>
    <thead>
        <tr>
            <th>EmployeeID</th>
            <th>Role</th>
            <th>StartDate</th>
            <th>EndDate</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>E1</td>
            <td>Developer</td>
            <td>2020-01-01</td>
            <td>2021-01-01</td>
        </tr>
        <tr>
            <td>E1</td>
            <td>Senior Developer</td>
            <td>2021-01-02</td>
            <td>2022-01-01</td>
        </tr>
    </tbody>
</table>
<p>
    To convert this to 6NF, we would separate the roles based on the time period:
</p>

<h4>Employee Roles Table</h4>
<table>
    <thead>
        <tr>
            <th>EmployeeID</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>E1</td>
            <td>Developer</td>
        </tr>
        <tr>
            <td>E1</td>
            <td>Senior Developer</td>
        </tr>
    </tbody>
</table>

<h4>Time Period Table</h4>
<table>
    <thead>
        <tr>
            <th>EmployeeID</th>
            <th>StartDate</th>
            <th>EndDate</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>E1</td>
            <td>2020-01-01</td>
            <td>2021-01-01</td>
        </tr>
        <tr>
            <td>E1</td>
            <td>2021-01-02</td>
            <td>2022-01-01</td>
        </tr>
    </tbody>
</table>

<h3>Conclusion</h3>
<p>
    Understanding higher normal forms is essential for creating a robust database design that minimizes redundancy, 
    maintains data integrity, and accommodates various data relationships. Each normal form serves to refine the 
    database structure, ultimately leading to a more efficient and manageable system.
</p>

</body>
</html>

            `;
            break;
        case 'backups':
            contentArea.innerHTML = `
               <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database Backup in SQL</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
        }
        h3 {
            color: #2980b9;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 3px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #ca5656;
        }
    </style>
</head>
<body>

<h2>Database Backup in SQL</h2>

<h3>Importance of Database Backup</h3>
<p>
    Database backup is a critical process that ensures the safety and integrity of data stored in a database. 
    Backups protect against data loss due to various reasons, including:
</p>
<ul>
    <li>Accidental deletion or modification of data</li>
    <li>Hardware or software failures</li>
    <li>Natural disasters or catastrophic events</li>
    <li>Malicious attacks or data breaches</li>
</ul>
<p>
    Regularly backing up databases helps maintain business continuity, ensures compliance with data protection regulations, 
    and provides peace of mind that data can be restored in case of unforeseen circumstances.
</p>

<h3>Types of Database Backups</h3>
<p>
    There are several types of database backups, each serving a specific purpose:
</p>
<ul>
    <li><strong>Full Backup:</strong> A complete copy of the entire database, including all objects and data. It is the most comprehensive type of backup.</li>
    <li><strong>Incremental Backup:</strong> A backup that includes only the data that has changed since the last backup (full or incremental). It is faster and consumes less storage space.</li>
    <li><strong>Differential Backup:</strong> A backup that includes all changes made since the last full backup. It requires more storage than incremental backups but allows for faster recovery.</li>
    <li><strong>Transaction Log Backup:</strong> A backup of the transaction log, which records all changes made to the database. This allows for point-in-time recovery.</li>
</ul>

<h3>Methods of Backing Up a Database</h3>
<p>
    SQL databases provide various methods for performing backups, depending on the database management system (DBMS) in use. 
    Here are some common methods:
</p>

<h4>1. SQL Server Backup</h4>
<p>
    In SQL Server, you can perform backups using SQL Server Management Studio (SSMS) or T-SQL commands. 
    Here’s an example of creating a full backup using T-SQL:
</p>
<pre><code>BACKUP DATABASE [YourDatabase]
TO DISK = 'C:\Backup\YourDatabase.bak';</code></pre>

<h4>2. MySQL Backup</h4>
<p>
    In MySQL, you can use the <code>mysqldump</code> command to create backups. 
    Here’s an example of creating a full backup:
</p>
<pre><code>mysqldump -u [username] -p[password] YourDatabase > YourDatabase.sql</code></pre>
<p>
    To create an incremental backup in MySQL, you would typically rely on binary logs.
</p>

<h4>3. PostgreSQL Backup</h4>
<p>
    In PostgreSQL, you can use the <code>pg_dump</code> utility for backups. 
    Here’s an example of creating a full backup:
</p>
<pre><code>pg_dump YourDatabase > YourDatabase.sql</code></pre>

<h3>Restoring a Database</h3>
<p>
    Restoring a database from a backup is just as crucial as creating the backup itself. 
    The process allows you to recover data and return the database to a functional state after data loss or corruption.
</p>
<h4>1. SQL Server Restore</h4>
<p>
    Here’s an example of restoring a database in SQL Server:
</p>
<pre><code>RESTORE DATABASE [YourDatabase]
FROM DISK = 'C:\Backup\YourDatabase.bak';</code></pre>

<h4>2. MySQL Restore</h4>
<p>
    To restore a MySQL database from a backup file created with <code>mysqldump</code>:
</p>
<pre><code>mysql -u [username] -p[password] YourDatabase "<"" YourDatabase.sql</code></pre>

<h4>3. PostgreSQL Restore</h4>
<p>
    To restore a PostgreSQL database from a backup created with <code>pg_dump</code>:
</p>
<pre><code>psql YourDatabase "<" YourDatabase.sql</code></pre>

<h3>Best Practices for Database Backup</h3>
<p>
    To ensure effective database backup and recovery, consider the following best practices:
</p>
<ul>
    <li>Schedule regular backups (daily, weekly, etc.) based on the frequency of data changes.</li>
    <li>Test backup and restore procedures to ensure data integrity and recoverability.</li>
    <li>Store backups in multiple locations (e.g., on-site and off-site) to protect against data loss.</li>
    <li>Maintain a backup retention policy to manage the storage of old backups.</li>
    <li>Monitor backup jobs and set up alerts for failures.</li>
</ul>

<h3>Conclusion</h3>
<p>
    Database backups are an essential part of data management, providing a safety net against data loss and ensuring business continuity. 
    By understanding the types of backups, methods of implementation, and best practices, organizations can protect their valuable data effectively.
</p>

</body>
</html>

            `;
            break;
        case 'security':
            contentArea.innerHTML = `
         <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Security</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
        }
        h3 {
            color: #2980b9;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 3px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #e36363;
        }
    </style>
</head>
<body>

<h2>SQL Security</h2>

<h3>Importance of SQL Security</h3>
<p>
    SQL security is crucial for protecting sensitive data stored in a database from unauthorized access, 
    data breaches, and malicious attacks. Effective security measures ensure:
</p>
<ul>
    <li>Confidentiality: Preventing unauthorized access to sensitive information.</li>
    <li>Integrity: Ensuring data accuracy and preventing unauthorized modifications.</li>
    <li>Availability: Ensuring that data is accessible to authorized users when needed.</li>
</ul>
<p>
    SQL security is essential for maintaining trust and compliance with data protection regulations such as GDPR and HIPAA.
</p>

<h3>Types of SQL Security</h3>
<p>
    SQL security can be categorized into several types:
</p>
<ul>
    <li><strong>Authentication:</strong> Verifying the identity of users accessing the database.</li>
    <li><strong>Authorization:</strong> Granting permissions to users based on their roles and responsibilities.</li>
    <li><strong>Encryption:</strong> Protecting data by converting it into a secure format that can only be read by authorized users.</li>
    <li><strong>Auditing:</strong> Monitoring and logging database activities to detect unauthorized access or anomalies.</li>
</ul>

<h3>Methods to Implement SQL Security</h3>
<p>
    There are various methods and techniques to enhance SQL security, including:
</p>

<h4>1. User Authentication</h4>
<p>
    Implementing strong authentication mechanisms is the first line of defense. 
    This can include using usernames and passwords, multi-factor authentication (MFA), and single sign-on (SSO).
</p>
<pre><code>CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'securepassword';</code></pre>

<h4>2. User Authorization</h4>
<p>
    Granting appropriate permissions to users is essential for maintaining security. 
    Use the principle of least privilege, where users are given only the permissions necessary for their role.
</p>
<pre><code>GRANT SELECT, INSERT ON YourDatabase.YourTable TO 'newuser'@'localhost';</code></pre>

<h4>3. Data Encryption</h4>
<p>
    Encrypt sensitive data to protect it from unauthorized access. 
    SQL Server, MySQL, and PostgreSQL provide built-in encryption functions.
</p>
<pre><code>-- Example of encrypting data in SQL Server
CREATE TABLE YourTable (
    Id INT PRIMARY KEY,
    SensitiveData VARBINARY(MAX)
);
INSERT INTO YourTable (Id, SensitiveData)
VALUES (1, EncryptByPassPhrase('YourPassphrase', 'Sensitive Information'));</code></pre>

<h4>4. Regular Auditing</h4>
<p>
    Implement auditing to track user activity and detect suspicious behavior. 
    Most DBMS offer auditing features that log user actions.
</p>
<pre><code>-- Example of creating an audit in SQL Server
CREATE SERVER AUDIT YourAudit
TO FILE (FILEPATH = 'C:\Audit\')
WITH (ON_FAILURE = CONTINUE);
CREATE DATABASE AUDIT SPECIFICATION YourDBAuditSpec
FOR SERVER AUDIT YourAudit
ADD (SELECT ON YourTable BY [public]);</code></pre>

<h3>SQL Injection Prevention</h3>
<p>
    SQL injection is a common attack where malicious SQL code is injected into queries. 
    To prevent SQL injection:
</p>
<ul>
    <li>Use parameterized queries or prepared statements to separate SQL code from data.</li>
    <li>Validate and sanitize user input to ensure it adheres to expected formats.</li>
    <li>Limit database permissions to minimize potential damage from an attack.</li>
</ul>

<h3>Best Practices for SQL Security</h3>
<p>
    To enhance SQL security, consider implementing the following best practices:
</p>
<ul>
    <li>Regularly update database software and apply security patches.</li>
    <li>Conduct security audits and vulnerability assessments.</li>
    <li>Implement network security measures, such as firewalls and intrusion detection systems.</li>
    <li>Educate employees on security awareness and best practices.</li>
</ul>

<h3>Conclusion</h3>
<p>
    SQL security is a vital aspect of database management that protects sensitive data from unauthorized access and attacks. 
    By understanding the various types of security measures and implementing best practices, organizations can safeguard their databases and maintain trust with their stakeholders.
</p>

</body>
</html>

            `;
            break;
        case 'performance':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Performance Tuning</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
        }
        h3 {
            color: #2980b9;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 3px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h2>SQL Performance Tuning</h2>
<p>
    SQL Performance Tuning is the process of optimizing SQL queries and database performance to improve 
    the execution speed and efficiency of database operations. This is essential for ensuring that applications 
    run smoothly, especially when dealing with large datasets or high user loads.
</p>

<h3>Importance of Performance Tuning</h3>
<ul>
    <li>
        <strong>Efficiency:</strong> Ensures that SQL queries run in the shortest time possible, utilizing minimal resources.
    </li>
    <li>
        <strong>Scalability:</strong> Helps maintain performance levels as the database size and user load increase.
    </li>
    <li>
        <strong>Cost-Effectiveness:</strong> Reduces the need for additional hardware by optimizing existing resources.
    </li>
    <li>
        <strong>User Experience:</strong> Enhances user satisfaction by providing faster responses and a more responsive application.
    </li>
</ul>

<h2>Common Techniques for SQL Performance Tuning</h2>

<h3>1. Indexing</h3>
<p>
    Indexing is one of the most effective ways to improve database performance. An index is a data structure 
    that improves the speed of data retrieval operations on a database table at the cost of additional space 
    and some overhead on data modification.
</p>
<pre>
<code>
CREATE INDEX idx_employee_lastname ON employees (last_name);
</code>
</pre>
<p>This command creates an index on the <code>last_name</code> column of the <code>employees</code> table, 
which speeds up queries that filter by last name.</p>

<h3>2. Query Optimization</h3>
<p>Optimizing SQL queries involves rewriting queries for better performance. Here are some tips:</p>
<ul>
    <li>
        Use <code>JOIN</code> instead of subqueries where possible.
    </li>
    <li>
        Avoid using <code>SELECT *</code> and specify only the necessary columns.
    </li>
    <li>
        Filter records using <code>WHERE</code> clauses as early as possible.
    </li>
</ul>
<p>For example:</p>
<pre>
<code>
SELECT first_name, last_name
FROM employees
WHERE department = 'IT';
</code>
</pre>

<h3>3. Analyzing Query Execution Plans</h3>
<p>
    An execution plan provides insights into how a SQL query will be executed by the database. Analyzing 
    execution plans can help identify bottlenecks and suggest improvements.
</p>
<pre>
<code>
EXPLAIN SELECT first_name, last_name
FROM employees
WHERE department = 'IT';
</code>
</pre>
<p>The output of this command shows how the SQL engine will execute the query, indicating potential areas 
    for optimization.</p>

<h3>4. Using Stored Procedures</h3>
<p>
    Stored procedures can encapsulate complex logic and reduce the amount of data transferred over the 
    network, enhancing performance.
</p>
<pre>
<code>
CREATE PROCEDURE GetEmployeesByDepartment(IN dept_name VARCHAR(50))
BEGIN
    SELECT first_name, last_name
    FROM employees
    WHERE department = dept_name;
END;
</code>
</pre>

<h3>5. Database Normalization</h3>
<p>
    Normalization is the process of organizing a database to reduce redundancy and improve data integrity. 
    This can lead to better performance by minimizing the amount of data that needs to be processed.
</p>

<h3>6. Database Configuration</h3>
<p>
    Tuning the database configuration settings (e.g., memory allocation, connection pooling) can also 
    enhance performance. Ensure that your database server has optimal settings based on its workload.
</p>

<h2>Example of Performance Tuning</h2>
<p>Consider a scenario where we have the following <code>orders</code> table:</p>
<table>
    <thead>
        <tr>
            <th>order_id</th>
            <th>customer_id</th>
            <th>order_date</th>
            <th>total_amount</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>101</td>
            <td>2024-10-01</td>
            <td>150.00</td>
        </tr>
        <tr>
            <td>2</td>
            <td>102</td>
            <td>2024-10-02</td>
            <td>200.00</td>
        </tr>
        <tr>
            <td>3</td>
            <td>101</td>
            <td>2024-10-03</td>
            <td>300.00</td>
        </tr>
    </tbody>
</table>

<p>Initially, if we run the following query to find orders for customer 101:</p>
<pre>
<code>
SELECT * FROM orders WHERE customer_id = 101;
</code>
</pre>
<p>This might be slow if the <code>customer_id</code> column is not indexed. To improve performance, we can 
create an index:</p>
<pre>
<code>
CREATE INDEX idx_customer_id ON orders (customer_id);
</code>
</pre>

<p>Now, executing the same query will yield results faster due to the index on <code>customer_id</code>.</p>

<h2>Conclusion</h2>
<p>SQL performance tuning is crucial for maintaining efficient database operations. By applying various techniques such as indexing, query optimization, and analyzing execution plans, developers can significantly enhance the performance of SQL queries and improve the overall user experience.</p>

</body>
</html>

            `;
            break;
            case "advancedfunctions":
                contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced SQL Functions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
        }
        h3 {
            color: #2980b9;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 3px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h2>Advanced SQL Functions</h2>

<h3>1. Window Functions</h3>
<p>
    Window functions perform calculations across a set of table rows that are related to the current row. Unlike regular aggregate functions, window functions do not group rows into a single output row; instead, they return a result for each row.
</p>

<h4>Example: ROW_NUMBER()</h4>
<p>
    The <code>ROW_NUMBER()</code> function assigns a unique number to each row according to the specified order.
</p>
<pre><code>SELECT 
    EmployeeID, 
    FirstName, 
    LastName, 
    ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RowNum
FROM Employees;</code></pre>

<table>
    <tr>
        <th>EmployeeID</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Salary</th>
        <th>RowNum</th>
    </tr>
    <tr>
        <td>1</td>
        <td>John</td>
        <td>Doe</td>
        <td>60000</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Jane</td>
        <td>Smith</td>
        <td>55000</td>
        <td>2</td>
    </tr>
</table>

<h4>Example: SUM() OVER()</h4>
<p>
    The <code>SUM()</code> function can also be used as a window function to calculate a running total.
</p>
<pre><code>SELECT 
    OrderID, 
    OrderDate, 
    Amount, 
    SUM(Amount) OVER (ORDER BY OrderDate) AS RunningTotal
FROM Orders;</code></pre>

<h3>2. Common Table Expressions (CTEs)</h3>
<p>
    A Common Table Expression (CTE) provides a way to define a temporary result set that can be referenced within a <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code> statement. CTEs improve readability and allow for recursive queries.
</p>

<h4>Example of a Simple CTE</h4>
<pre><code>WITH EmployeeCTE AS (
    SELECT 
        EmployeeID, 
        FirstName, 
        LastName
    FROM Employees
)
SELECT * FROM EmployeeCTE;</code></pre>

<h4>Example of a Recursive CTE</h4>
<p>
    Recursive CTEs allow you to perform operations such as traversing hierarchical data. 
</p>
<pre><code>WITH RecursiveCTE AS (
    SELECT 
        EmployeeID, 
        ManagerID, 
        FirstName, 
        LastName
    FROM Employees
    WHERE ManagerID IS NULL
    UNION ALL
    SELECT 
        e.EmployeeID, 
        e.ManagerID, 
        e.FirstName, 
        e.LastName
    FROM Employees e
    INNER JOIN RecursiveCTE r ON e.ManagerID = r.EmployeeID
)
SELECT * FROM RecursiveCTE;</code></pre>

<h3>3. Aggregate Functions</h3>
<p>
    Aggregate functions perform calculations on multiple values and return a single value. They are often used with the <code>GROUP BY</code> clause.
</p>

<h4>Common Aggregate Functions</h4>
<ul>
    <li><code>SUM()</code>: Calculates the total sum of a numeric column.</li>
    <li><code>AVG()</code>: Calculates the average value of a numeric column.</li>
    <li><code>COUNT()</code>: Counts the number of rows that match a specified condition.</li>
    <li><code>MAX()</code>: Returns the maximum value of a specified column.</li>
    <li><code>MIN()</code>: Returns the minimum value of a specified column.</li>
</ul>

<h4>Example: Aggregate Functions</h4>
<pre><code>SELECT 
    DepartmentID, 
    COUNT(*) AS NumberOfEmployees, 
    AVG(Salary) AS AverageSalary
FROM Employees
GROUP BY DepartmentID;</code></pre>

<table>
    <tr>
        <th>DepartmentID</th>
        <th>NumberOfEmployees</th>
        <th>AverageSalary</th>
    </tr>
    <tr>
        <td>1</td>
        <td>10</td>
        <td>55000</td>
    </tr>
    <tr>
        <td>2</td>
        <td>5</td>
        <td>62000</td>
    </tr>
</table>

<h3>Conclusion</h3>
<p>
    Advanced SQL functions like window functions, CTEs, and aggregate functions enhance the capability of SQL queries, allowing for complex data analysis and reporting. Understanding these functions is crucial for effective data manipulation and retrieval in SQL databases.
</p>

</body>
</html>
`;
                break;
            case "optimization":
                contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Optimizations</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
        }
        h3 {
            color: #2980b9;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 3px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #cf5151;
        }
    </style>
</head>
<body>

<h2>SQL Optimizations</h2>

<p>
    SQL optimization involves a series of strategies and techniques aimed at improving the performance of SQL queries and ensuring efficient database operation. Effective optimization helps reduce query execution time, enhances data retrieval speed, and increases overall database efficiency.
</p>

<h3>1. Indexing</h3>
<p>
    Indexing is one of the most effective ways to optimize query performance. An index is a database object that improves the speed of data retrieval operations on a table at the cost of additional space and slower writes.
</p>

<h4>Types of Indexes</h4>
<ul>
    <li><code>B-tree Index</code>: The most common type of index, suitable for equality and range queries.</li>
    <li><code>Bitmap Index</code>: Efficient for columns with low cardinality, commonly used in data warehousing.</li>
    <li><code>Unique Index</code>: Ensures that all values in a column are unique.</li>
</ul>

<h4>Example: Creating an Index</h4>
<pre><code>CREATE INDEX idx_employee_lastname ON Employees(LastName);</code></pre>

<h3>2. Query Optimization</h3>
<p>
    Optimizing the SQL queries themselves is crucial for improving performance. This includes rewriting queries for efficiency and ensuring proper use of SQL functions.
</p>

<h4>Best Practices</h4>
<ul>
    <li>Use <code>SELECT *</code> only when necessary; specify required columns instead.</li>
    <li>Avoid unnecessary calculations in the <code>WHERE</code> clause.</li>
    <li>Use <code>JOIN</code> instead of subqueries when possible, as they are often more efficient.</li>
    <li>Limit the result set using <code>LIMIT</code> or <code>TOP</code> clauses.</li>
</ul>

<h4>Example: Optimizing a Query</h4>
<pre><code>SELECT 
    FirstName, 
    LastName 
FROM Employees 
WHERE DepartmentID = 1;</code></pre>

<h3>3. Database Design</h3>
<p>
    Proper database design significantly impacts query performance. Normalization reduces redundancy, while denormalization can sometimes improve performance in read-heavy applications.
</p>

<h4>Normalization</h4>
<p>
    Normalization involves organizing data to minimize redundancy. This process typically includes dividing large tables into smaller ones and defining relationships among them.
</p>

<h4>Denormalization</h4>
<p>
    Denormalization is the process of combining tables to reduce the number of joins, which can improve read performance in certain scenarios.
</p>

<h3>4. Partitioning</h3>
<p>
    Partitioning is a technique where large tables are divided into smaller, more manageable pieces, while still being treated as a single table. This can lead to improved performance for certain queries and maintenance tasks.
</p>

<h4>Types of Partitioning</h4>
<ul>
    <li><code>Range Partitioning</code>: Divides data based on a range of values (e.g., dates).</li>
    <li><code>List Partitioning</code>: Divides data based on a list of values.</li>
    <li><code>Hash Partitioning</code>: Divides data based on a hashing algorithm.</li>
</ul>

<h4>Example: Creating a Partitioned Table</h4>
<pre><code>CREATE TABLE Sales (
    SaleID INT,
    SaleDate DATE,
    Amount DECIMAL(10, 2)
)
PARTITION BY RANGE (YEAR(SaleDate)) (
    PARTITION p2020 VALUES LESS THAN (2021),
    PARTITION p2021 VALUES LESS THAN (2022)
);</code></pre>

<h3>5. Caching</h3>
<p>
    Caching frequently accessed data in memory reduces the need for repeated database queries, improving performance. Application-level caching and database caching techniques can be employed.
</p>

<h4>Example: Using Caching</h4>
<p>
    Applications can store the results of common queries in memory to quickly retrieve data without hitting the database every time.
</p>

<h3>Conclusion</h3>
<p>
    SQL optimization is a crucial aspect of database management that enhances query performance and overall system efficiency. By employing techniques such as indexing, query optimization, proper database design, partitioning, and caching, developers can significantly improve the responsiveness and performance of their SQL queries.
</p>

</body>
</html>
`;
                break;
            case "acl":
                contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Access Control in SQL</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
        }
        h3 {
            color: #2980b9;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 3px;
        }
        ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #dc6565;
        }
    </style>
</head>
<body>

<h2>Access Control in SQL</h2>

<p>
    Access control in SQL refers to the mechanisms that regulate who can view or use resources in a database system. It is essential for maintaining data security and ensuring that sensitive information is only accessible to authorized users.
</p>

<h3>1. Importance of Access Control</h3>
<p>
    Access control helps to:
</p>
<ul>
    <li>Protect sensitive data from unauthorized access.</li>
    <li>Maintain data integrity by preventing unauthorized modifications.</li>
    <li>Ensure compliance with regulations and standards.</li>
    <li>Control user privileges based on roles or needs.</li>
</ul>

<h3>2. Access Control Mechanisms</h3>
<p>
    SQL provides several mechanisms for access control, including:
</p>
<ul>
    <li><strong>Privileges:</strong> Specific rights granted to users to perform actions on database objects.</li>
    <li><strong>Roles:</strong> Collections of privileges that can be assigned to users, simplifying management.</li>
    <li><strong>Authentication:</strong> The process of verifying the identity of a user or application attempting to access the database.</li>
    <li><strong>Authorization:</strong> The process of granting or denying access rights to resources based on user permissions.</li>
</ul>

<h3>3. Types of Privileges</h3>
<p>
    Privileges in SQL can be broadly classified into two categories:
</p>
<ul>
    <li><strong>System Privileges:</strong> Permissions to perform administrative tasks (e.g., creating tables, managing users).</li>
    <li><strong>Object Privileges:</strong> Permissions to perform specific actions on database objects (e.g., SELECT, INSERT, UPDATE, DELETE).</li>
</ul>

<h4>Example: Granting Privileges</h4>
<pre><code>GRANT SELECT, INSERT ON Employees TO user1;</code></pre>

<h3>4. Roles in SQL</h3>
<p>
    Roles simplify the management of privileges by allowing groups of privileges to be assigned to users. A user can have multiple roles, and roles can also be granted to other roles.
</p>

<h4>Example: Creating and Assigning Roles</h4>
<pre><code>CREATE ROLE manager_role;
GRANT SELECT, UPDATE ON Employees TO manager_role;
GRANT manager_role TO user1;</code></pre>

<h3>5. Authentication and Authorization</h3>
<p>
    Authentication verifies the identity of users attempting to access the database, while authorization determines what resources and operations those users are permitted to access or perform.
</p>

<h4>Example: Creating a User with Authentication</h4>
<pre><code>CREATE USER user1 IDENTIFIED BY 'password123';</code></pre>

<h4>Example: Authorizing a User</h4>
<pre><code>GRANT EXECUTE ON procedure_name TO user1;</code></pre>

<h3>6. Revoking Access</h3>
<p>
    SQL also allows for the revocation of privileges and roles to restrict access as necessary.
</p>

<h4>Example: Revoking Privileges</h4>
<pre><code>REVOKE INSERT ON Employees FROM user1;</code></pre>

<h3>7. Best Practices for Access Control</h3>
<p>
    To ensure effective access control, consider the following best practices:
</p>
<ul>
    <li>Follow the principle of least privilege, granting only necessary permissions.</li>
    <li>Regularly review and audit user privileges and roles.</li>
    <li>Use strong authentication methods to protect user identities.</li>
    <li>Implement separation of duties to prevent unauthorized access.</li>
</ul>

<h3>Conclusion</h3>
<p>
    Access control is a vital aspect of database management that helps safeguard sensitive data from unauthorized access and misuse. By implementing proper access control mechanisms such as privileges, roles, authentication, and authorization, organizations can enhance their data security and maintain the integrity of their databases.
</p>

</body>
</html>
`;

                break;
                case "rank":
                    contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comparison of RANK and DENSE_RANK Functions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        h2 {
            color: #2c3e50;
        }
        h3 {
            color: #2980b9;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f8f8f8;
            padding: 2px 4px;
            border-radius: 3px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #b44545;
        }
    </style>
</head>
<body>
    <h2>SQL RANK and DENSE_RANK Functions</h2>

<p>
    The <code>RANK()</code> and <code>DENSE_RANK()</code> functions are used in SQL to assign a unique rank to each row within a partition of a result set. These functions are particularly useful for ranking data based on specific criteria.
</p>

<h3>1. RANK() Function</h3>
<p>
    The <code>RANK()</code> function assigns a rank to each row within a partition of a result set. The rank starts at 1 for the first row within each partition and increments by 1 for each subsequent row. If there are duplicate values, the same rank is assigned to the duplicate values, and the next rank is skipped.
</p>

<h4>Example of RANK()</h4>
<p>
    Consider a table named <code>Scores</code> with the following data:
</p>

<table>
    <tr>
        <th>Student</th>
        <th>Score</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>85</td>
    </tr>
    <tr>
        <td>Bob</td>
        <td>90</td>
    </tr>
    <tr>
        <td>Charlie</td>
        <td>90</td>
    </tr>
    <tr>
        <td>David</td>
        <td>80</td>
    </tr>
</table>

<p>
    The SQL query using <code>RANK()</code> to rank students based on their scores would be:
</p>
<pre><code>SELECT Student, Score, RANK() OVER (ORDER BY Score DESC) AS Rank
FROM Scores;</code></pre>

<p>
    The result would be:
</p>

<table>
    <tr>
        <th>Student</th>
        <th>Score</th>
        <th>Rank</th>
    </tr>
    <tr>
        <td>Bob</td>
        <td>90</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Charlie</td>
        <td>90</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Alice</td>
        <td>85</td>
        <td>3</td>
    </tr>
    <tr>
        <td>David</td>
        <td>80</td>
        <td>4</td>
    </tr>
</table>

<h3>2. DENSE_RANK() Function</h3>
<p>
    The <code>DENSE_RANK()</code> function is similar to <code>RANK()</code>, but it does not skip ranks when there are duplicate values. Each distinct value is assigned a unique rank, and the next rank follows immediately, regardless of how many duplicates there are.
</p>

<h4>Example of DENSE_RANK()</h4>
<p>
    Using the same <code>Scores</code> table, the SQL query using <code>DENSE_RANK()</code> to rank students would be:
</p>
<pre><code>SELECT Student, Score, DENSE_RANK() OVER (ORDER BY Score DESC) AS DenseRank
FROM Scores;</code></pre>

<p>
    The result would be:
</p>

<table>
    <tr>
        <th>Student</th>
        <th>Score</th>
        <th>DenseRank</th>
    </tr>
    <tr>
        <td>Bob</td>
        <td>90</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Charlie</td>
        <td>90</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Alice</td>
        <td>85</td>
        <td>2</td>
    </tr>
    <tr>
        <td>David</td>
        <td>80</td>
        <td>3</td>
    </tr>
</table>

<h3>3. Key Differences Between RANK() and DENSE_RANK()</h3>
<table>
    <tr>
        <th>Criteria</th>
        <th>RANK()</th>
        <th>DENSE_RANK()</th>
    </tr>
    <tr>
        <td>Handling Duplicates</td>
        <td>Skips rank numbers for duplicates</td>
        <td>No gaps in rank numbers</td>
    </tr>
    <tr>
        <td>Example Result</td>
        <td>1, 1, 3, 4</td>
        <td>1, 1, 2, 3</td>
    </tr>
</table>

<h3>Conclusion</h3>
<p>
    Both <code>RANK()</code> and <code>DENSE_RANK()</code> functions are powerful tools for ranking data in SQL. The choice between them depends on how you want to handle ties in your data. Use <code>RANK()</code> if you need to maintain gaps in ranks and <code>DENSE_RANK()</code> if you want continuous ranking without skips.
</p>

<h2>Comparison of RANK and DENSE_RANK Functions</h2>

<h3>1. Definitions</h3>
<p>
    The <code>RANK()</code> function assigns a rank to each row within a partition of a result set. The rank starts at 1 for the first row within each partition and increments by 1 for each subsequent row. If there are duplicate values, the same rank is assigned to the duplicate values, and the next rank is skipped.
</p>
<p>
    The <code>DENSE_RANK()</code> function is similar to <code>RANK()</code>, but it does not skip ranks when there are duplicate values. Each distinct value is assigned a unique rank, and the next rank follows immediately, regardless of how many duplicates there are.
</p>

<h3>2. Key Differences</h3>
<table>
    <tr>
        <th>Criteria</th>
        <th>RANK()</th>
        <th>DENSE_RANK()</th>
    </tr>
    <tr>
        <td>Handling Duplicates</td>
        <td>Skips rank numbers for duplicates</td>
        <td>No gaps in rank numbers</td>
    </tr>
    <tr>
        <td>Example Result for Ties</td>
        <td>1, 1, 3, 4</td>
        <td>1, 1, 2, 3</td>
    </tr>
    <tr>
        <td>Use Case</td>
        <td>Use when gaps in ranking are acceptable</td>
        <td>Use when continuous ranking is preferred</td>
    </tr>
</table>

<h3>3. Example Comparison</h3>
<p>
    Consider a table named <code>Scores</code> with the following data:
</p>
<table>
    <tr>
        <th>Student</th>
        <th>Score</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>85</td>
    </tr>
    <tr>
        <td>Bob</td>
        <td>90</td>
    </tr>
    <tr>
        <td>Charlie</td>
        <td>90</td>
    </tr>
    <tr>
        <td>David</td>
        <td>80</td>
    </tr>
</table>

<h4>Using RANK()</h4>
<pre><code>SELECT Student, Score, RANK() OVER (ORDER BY Score DESC) AS Rank
FROM Scores;</code></pre>
<p>
    The result would be:
</p>
<table>
    <tr>
        <th>Student</th>
        <th>Score</th>
        <th>Rank</th>
    </tr>
    <tr>
        <td>Bob</td>
        <td>90</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Charlie</td>
        <td>90</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Alice</td>
        <td>85</td>
        <td>3</td>
    </tr>
    <tr>
        <td>David</td>
        <td>80</td>
        <td>4</td>
    </tr>
</table>

<h4>Using DENSE_RANK()</h4>
<pre><code>SELECT Student, Score, DENSE_RANK() OVER (ORDER BY Score DESC) AS DenseRank
FROM Scores;</code></pre>
<p>
    The result would be:
</p>
<table>
    <tr>
        <th>Student</th>
        <th>Score</th>
        <th>DenseRank</th>
    </tr>
    <tr>
        <td>Bob</td>
        <td>90</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Charlie</td>
        <td>90</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Alice</td>
        <td>85</td>
        <td>2</td>
    </tr>
    <tr>
        <td>David</td>
        <td>80</td>
        <td>3</td>
    </tr>
</table>

<h3>4. Conclusion</h3>
<p>
    Both <code>RANK()</code> and <code>DENSE_RANK()</code> functions are powerful tools for ranking data in SQL. The choice between them depends on how you want to handle ties in your data. Use <code>RANK()</code> if you need to maintain gaps in ranks and <code>DENSE_RANK()</code> if you want continuous ranking without skips.
</p>

</body>
</html>
`
                    ;
                    break;
        default:
            contentArea.innerHTML = `
                <h1>Welcome to SQL Learning</h1>
                <p>Select a SQL topic from the left to get started.</p>
            `;
            break;
    }
}
