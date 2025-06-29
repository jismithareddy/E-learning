// Function to load content based on the selected topic
function loadContent(topic) {
    let contentArea = document.getElementById('contentArea');
    let content = '';

    switch (topic) {
        case 'intro':
            content = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #3498db;
        }
        h2 {
            color: #e67e22;
        }
        .code-description {
            margin-bottom: 20px;
        }
        code {
            background-color: #f4f4f4;
            padding: 10px;
            display: block;
            border: 1px solid #ccc;
        }
        .description {
            margin-top: 10px;
            color: #2c3e50;
        }
    </style>
</head>
<body>

    <h1>Introduction to JavaScript</h1>

    <div class="code-description">
        <h2>What is JavaScript?</h2>
        <pre><code>// JavaScript is a high-level, dynamic programming language
// that is widely used for both client-side and server-side development.
// It allows you to create interactive and dynamic web pages.

console.log("Hello, World!");</code></pre>
        <p class="description">JavaScript is a powerful programming language that enables web developers to build interactive and dynamic features like animations, form validation, and content updates without needing to reload the page. It is a core technology alongside HTML and CSS in web development.</p>
    </div>

    <div class="code-description">
        <h2>History of JavaScript</h2>
        <pre><code>/* JavaScript was created by Brendan Eich in 1995 while he was 
working at Netscape Communications Corporation. Initially, it was developed 
as a scripting language for the Netscape Navigator web browser. */

// Milestones in JavaScript's history:
// - 1995: JavaScript was created and released as Mocha.
// - 1996: Officially renamed JavaScript.
// - 1997: Standardized as ECMAScript (ES1).
// - 2009: ECMAScript 5 introduced new features like strict mode.
// - 2015: ECMAScript 6 (ES6) brought major improvements like arrow functions, 
//         classes, and modules.</code></pre>
        <p class="description">JavaScript was created in just 10 days in 1995 by Brendan Eich while working for Netscape. Since then, it has become the most popular programming language for building web applications. ECMAScript is the standardized version of JavaScript, with ES6 (2015) being a pivotal release that modernized the language.</p>
    </div>

    <div class="code-description">
        <h2>Why JavaScript?</h2>
        <pre><code>/* JavaScript has become essential for modern web development
for several reasons:

1. Ubiquity: Every major web browser supports JavaScript.
2. Versatility: Can be used on both the front-end and back-end.
3. Rich Ecosystem: Thousands of libraries and frameworks like React, Angular, and Node.js.
4. Performance: Runs directly in the browser, providing fast interaction.
5. Asynchronous programming: Supports async operations with promises, async/await, etc. */

// Example: Displaying a dynamic greeting based on time
const greeting = (hour) => {
    if (hour < 12) {
        return "Good morning!";
    } else if (hour < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
};
console.log(greeting(new Date().getHours()));</code></pre>
        <p class="description">JavaScript is highly versatile and can be used for both front-end (client-side) and back-end (server-side) development. It enables the creation of rich, interactive user interfaces and performs asynchronously, making it crucial for fast, dynamic web experiences.</p>
    </div>

    <div class="code-description">
        <h2>Platforms where JavaScript is used</h2>
        <pre><code>/* JavaScript runs on a wide variety of platforms, including:

1. Web Browsers: JavaScript is natively supported by all major browsers (Chrome, Firefox, Safari).
2. Server-side: Using platforms like Node.js, JavaScript can power back-end logic.
3. Mobile Development: With frameworks like React Native, JavaScript can be used to develop mobile apps.
4. Desktop Applications: Platforms like Electron allow developers to build cross-platform desktop apps.
5. Game Development: JavaScript is used in game development using libraries like Phaser.js. */

// Example: Using Node.js for a simple server
const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Node.js server!');
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});</code></pre>
        <p class="description">JavaScript's reach extends beyond just web browsers. With Node.js, it can handle server-side applications. It also powers mobile apps, desktop apps (through Electron), and even game development. This makes JavaScript an incredibly versatile tool in the hands of developers.</p>
    </div>

    <h2>Conclusion</h2>
    <p>JavaScript is a key technology that drives the web and powers a wide range of applications. Its ability to work across platforms makes it an indispensable part of modern development.</p>

</body>
</html>

            `;
            break;

        case 'variables':
            content = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables in JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #3498db;
        }
        h2 {
            color: #e67e22;
        }
        .code-description {
            margin-bottom: 20px;
        }
        code {
            background-color: #f4f4f4;
            padding: 10px;
            display: block;
            border: 1px solid #ccc;
        }
        .description {
            margin-top: 10px;
            color: #2c3e50;
        }
    </style>
</head>
<body>

    <h1>Variables in JavaScript</h1>

    <div class="code-description">
        <h2>Introduction to Variables</h2>
        <pre><code>// Variables in JavaScript are containers that hold data values.
// You can create variables using var, let, or const keywords.

var name = "John";  // var is function-scoped and can be redeclared.
let age = 25;       // let is block-scoped and cannot be redeclared within the same scope.
const country = "USA";  // const is block-scoped, cannot be redeclared, and its value cannot be changed.

console.log(name);
console.log(age);
console.log(country);</code></pre>
        <p class="description">
            In JavaScript, variables are used to store data values. The <strong>var</strong>, <strong>let</strong>, and <strong>const</strong> keywords are used to declare variables. The choice between them depends on the scope and whether the value will change:
            <ul>
                <li><strong>var</strong> allows redeclaration and is function-scoped.</li>
                <li><strong>let</strong> is block-scoped and does not allow redeclaration within the same scope.</li>
                <li><strong>const</strong> is also block-scoped but cannot be reassigned or redeclared.</li>
            </ul>
        </p>
    </div>

    <div class="code-description">
        <h2>Difference between var, let, and const</h2>
        <pre><code>/* 1. 'var' allows redeclaration and hoisting.
   2. 'let' is block-scoped and prevents redeclaration within the same scope.
   3. 'const' must be initialized at declaration and cannot be reassigned. */

var exampleVar = "I can be redeclared!";
console.log(exampleVar);

let exampleLet = "Block scoped variable";
//let exampleLet = "Cannot redeclare"; // Uncommenting this will throw an error

const exampleConst = "This value is constant";
//exampleConst = "Error"; // Uncommenting this will throw an error</code></pre>
        <p class="description">
            <strong>var</strong> allows you to redeclare a variable multiple times within the same function. However, <strong>let</strong> and <strong>const</strong> do not allow redeclaration in the same block. Additionally, <strong>const</strong> must be initialized when declared and its value cannot be changed later.
        </p>
    </div>

    <div class="code-description">
        <h2>Scope of Variables</h2>
        <pre><code>/* Scope refers to the region where the variable can be accessed.
   var has function scope, while let and const have block scope. */

function varScope() {
    var varVariable = "I'm a var variable";
    if (true) {
        var varVariable = "I can be redeclared in the same function!";
        console.log(varVariable);  // Output: I can be redeclared in the same function!
    }
    console.log(varVariable);      // Output: I can be redeclared in the same function!
}

function letScope() {
    let letVariable = "I'm a let variable";
    if (true) {
        let letVariable = "I'm block-scoped!";
        console.log(letVariable);  // Output: I'm block-scoped!
    }
    console.log(letVariable);      // Output: I'm a let variable
}

varScope();
letScope();</code></pre>
        <p class="description">
            Variables declared with <strong>var</strong> are function-scoped, meaning they are available throughout the function, even if declared inside a block (like <code>if</code> or <code>for</code> loops). In contrast, <strong>let</strong> and <strong>const</strong> are block-scoped, meaning they are only available within the block they are declared in.
        </p>
    </div>

    <div class="code-description">
        <h2>Hoisting in JavaScript</h2>
        <pre><code>/* Hoisting is JavaScript's behavior of moving variable 
   declarations to the top of their scope before code execution. 
   Only 'var' is hoisted, not 'let' and 'const'. */

console.log(hoistedVar);  // Output: undefined (var is hoisted)
var hoistedVar = "I'm hoisted!";

//console.log(hoistedLet);  // Uncommenting this will throw an error (let is not hoisted)
let hoistedLet = "I am not hoisted!";</code></pre>
        <p class="description">
            <strong>Hoisting</strong> is JavaScript's default behavior of moving declarations to the top of the scope before executing the code. Only <strong>var</strong> declarations are hoisted, meaning they can be referenced before the line where they are defined. <strong>let</strong> and <strong>const</strong> do not have this behavior and will throw a <code>ReferenceError</code> if used before being declared.
        </p>
    </div>

    <h2>Conclusion</h2>
    <p>Understanding variables and their scope, hoisting behavior, and how to use <strong>var</strong>, <strong>let</strong>, and <strong>const</strong> is essential for writing efficient and bug-free JavaScript code. Choosing the correct keyword ensures that your code behaves as expected in different situations.</p>

</body>
</html>

            `;
            break;

        case 'data-types':
            content = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Data Types</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #3498db;
        }
        h2 {
            color: #e67e22;
        }
        .code-description {
            margin-bottom: 20px;
        }
        code {
            background-color: #f4f4f4;
            padding: 10px;
            display: block;
            border: 1px solid #ccc;
        }
        .description {
            margin-top: 10px;
            color: #2c3e50;
        }
    </style>
</head>
<body>

    <h1>Data Types in JavaScript</h1>

    <div class="code-description">
        <h2>Introduction to Data Types</h2>
        <pre><code>// JavaScript has several data types categorized as:
// 1. Primitive Types: String, Number, Boolean, Undefined, Null, Symbol, BigInt
// 2. Reference Types: Object (Array, Function, Date, etc.)

let name = "John";        // String
let age = 25;             // Number
let isStudent = true;     // Boolean
let course;               // Undefined
let salary = null;        // Null

console.log(name, age, isStudent, course, salary);</code></pre>
        <p class="description">
            JavaScript has two main categories of data types:
            <ul>
                <li><strong>Primitive Types:</strong> These include String, Number, Boolean, Undefined, Null, Symbol, and BigInt.</li>
                <li><strong>Reference Types:</strong> These include Objects, Arrays, and Functions.</li>
            </ul>
            The example above demonstrates the use of common primitive types: <code>String</code>, <code>Number</code>, <code>Boolean</code>, <code>Undefined</code>, and <code>Null</code>.
        </p>
    </div>

    <div class="code-description">
        <h2>Primitive Data Types</h2>
        <pre><code>// 1. String: Used for textual data
let greeting = "Hello, World!";
console.log(greeting);

// 2. Number: Used for numerical data (both integers and floats)
let price = 19.99;
console.log(price);

// 3. Boolean: Represents logical values, true or false
let isLoggedIn = false;
console.log(isLoggedIn);</code></pre>
        <p class="description">
            <strong>Primitive data types</strong> are the most basic data types in JavaScript:
            <ul>
                <li><strong>String:</strong> Represents textual data (e.g., "Hello").</li>
                <li><strong>Number:</strong> Represents numbers (both integers and floating-point numbers).</li>
                <li><strong>Boolean:</strong> Represents logical values: <code>true</code> or <code>false</code>.</li>
            </ul>
        </p>
    </div>

    <div class="code-description">
        <h2>Undefined and Null</h2>
        <pre><code>// 4. Undefined: A variable that has been declared but not assigned a value
let user;
console.log(user); // Output: undefined

// 5. Null: Represents an intentional absence of a value
let discount = null;
console.log(discount); // Output: null</code></pre>
        <p class="description">
            <strong>Undefined</strong> indicates that a variable has been declared but not yet assigned a value, whereas <strong>Null</strong> is used to explicitly indicate the absence of any value.
        </p>
    </div>

    <div class="code-description">
        <h2>Object Data Type (Reference Type)</h2>
        <pre><code>// Objects in JavaScript are collections of key-value pairs.

let user = {
    name: "Alice",
    age: 30,
    isAdmin: true
};
console.log(user);

// Arrays are also objects, but store values in an indexed list.
let colors = ["Red", "Green", "Blue"];
console.log(colors);</code></pre>
        <p class="description">
            <strong>Objects</strong> in JavaScript are used to store collections of data. An object can store values in the form of key-value pairs. Arrays, which are a type of object, store multiple values in an ordered, indexed list.
        </p>
    </div>

    <div class="code-description">
        <h2>BigInt and Symbol</h2>
        <pre><code>// 6. BigInt: Used for very large integers that exceed the safe limit for regular numbers.
let largeNumber = BigInt(9007199254740991);
console.log(largeNumber);

// 7. Symbol: Used for creating unique identifiers.
let id = Symbol("id");
console.log(id);</code></pre>
        <p class="description">
            <strong>BigInt</strong> is used for integers that are too large to be represented by the <code>Number</code> type, while <strong>Symbol</strong> is used to create unique, immutable identifiers.
        </p>
    </div>

    <div class="code-description">
        <h2>Type Checking with typeof</h2>
        <pre><code>// You can check the type of any variable using the 'typeof' operator.

let score = 100;
console.log(typeof score);    // Output: number

let userName = "Alice";
console.log(typeof userName); // Output: string

let isActive = true;
console.log(typeof isActive); // Output: boolean</code></pre>
        <p class="description">
            The <code>typeof</code> operator is used to determine the type of a variable. It returns a string indicating the data type (e.g., <code>"number"</code>, <code>"string"</code>, or <code>"boolean"</code>).
        </p>
    </div>

    <h2>Conclusion</h2>
    <p>JavaScript data types can be broadly classified into primitive and reference types. Understanding these data types is key to writing efficient and bug-free code in JavaScript. Each data type serves a different purpose, from handling text to numbers, and even complex objects.</p>

</body>
</html>

            `;
            break;

        case 'operators':
            content = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Operators</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #3498db;
        }
        h2 {
            color: #e67e22;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ccc;
            white-space: pre-wrap;
        }
        p {
            color: #2c3e50;
            margin-top: 10px;
        }
        .output {
            color: #27ae60;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>JavaScript Operators</h1>

    <h2>What are Operators?</h2>
    <p>
        Operators are special symbols in JavaScript that perform operations on variables and values. They allow you to manipulate data and variables, making it possible to create expressions and execute calculations. JavaScript supports several types of operators, each serving a different purpose.
    </p>

    <h2>1. Arithmetic Operators</h2>
    <pre><code>
let a = 10;
let b = 5;

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;

document.write('Addition: ' + addition + '<br>');
document.write('Subtraction: ' + subtraction + '<br>');
document.write('Multiplication: ' + multiplication + '<br>');
document.write('Division: ' + division + '<br>');
    </code></pre>
    <p>
        Arithmetic operators perform basic math operations:
        <ul>
            <li> + : Addition</li>
            <li> - : Subtraction</li>
            <li> * : Multiplication</li>
            <li> / : Division</li>
        </ul>
    </p>
    <h3>Output:</h3>
    <p class="output">Addition: 15<br>Subtraction: 5<br>Multiplication: 50<br>Division: 2</p>

    <h2>2. Assignment Operators</h2>
    <pre><code>
let x = 10;
x += 5; // x = x + 5
x -= 2; // x = x - 2

document.write('Value of x after assignments: ' + x + '<br>');
    </code></pre>
    <p>
        Assignment operators are used to assign values to variables. 
        For example, += adds a value and reassigns the variable.
    </p>
    <h3>Output:</h3>
    <p class="output">Value of x after assignments: 13</p>

    <h2>3. Comparison Operators</h2>
    <pre><code>
let num1 = 10;
let num2 = 5;

let isEqual = num1 == num2;
let isGreater = num1 > num2;

document.write('Is Equal: ' + isEqual + '<br>');
document.write('Is Greater: ' + isGreater + '<br>');
    </code></pre>
    <p>
        Comparison operators compare two values:
        <ul>
            <li> == : Equal to</li>
            <li> != : Not equal to</li>
            <li> > : Greater than</li>
            <li> < : Less than</li>
        </ul>
    </p>
    <h3>Output:</h3>
    <p class="output">Is Equal: false<br>Is Greater: true</p>

    <h2>4. Logical Operators</h2>
    <pre><code>
let a = true;
let b = false;

let andOperator = a && b;
let orOperator = a || b;

document.write('AND Operator: ' + andOperator + '<br>');
document.write('OR Operator: ' + orOperator + '<br>');
    </code></pre>
    <p>
        Logical operators are used to perform logical operations:
        <ul>
            <li> && : AND operator (returns true if both are true)</li>
            <li> || : OR operator (returns true if one is true)</li>
        </ul>
    </p>
    <h3>Output:</h3>
    <p class="output">AND Operator: false<br>OR Operator: true</p>

    <script>
        // JavaScript code goes here to execute the operators
        let a = 10;
        let b = 5;

        let addition = a + b;
        let subtraction = a - b;
        let multiplication = a * b;
        let division = a / b;

        document.write('Addition: ' + addition + '<br>');
        document.write('Subtraction: ' + subtraction + '<br>');
        document.write('Multiplication: ' + multiplication + '<br>');
        document.write('Division: ' + division + '<br>');

        let x = 10;
        x += 5; // x = x + 5
        x -= 2; // x = x - 2

        document.write('Value of x after assignments: ' + x + '<br>');

        let num1 = 10;
        let num2 = 5;

        let isEqual = num1 == num2;
        let isGreater = num1 > num2;

        document.write('Is Equal: ' + isEqual + '<br>');
        document.write('Is Greater: ' + isGreater + '<br>');

        let a = true;
        let b = false;

        let andOperator = a && b;
        let orOperator = a || b;

        document.write('AND Operator: ' + andOperator + '<br>');
        document.write('OR Operator: ' + orOperator + '<br>');
    </script>

</body>
</html>
`;
            break;

        case "functions":
            content = `
              <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Functions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>JavaScript Functions</h1>
<p>A <strong>function</strong> is a block of code designed to perform a specific task. Functions are fundamental building blocks in JavaScript, allowing for code reuse, organization, and clarity. They can take inputs (parameters), execute code, and return a value.</p>

<h2>1. Function Declaration</h2>
<p>A function can be declared using the <code>function</code> keyword followed by a name, parentheses, and curly braces.</p>

<pre><code>function functionName(parameters) {
    // code to be executed
}</code></pre>

<h3>Example 1: Basic Function</h3>
<pre><code>// Function declaration
function sayHello() {
    console.log("Hello, world!"); // Prints a greeting to the console
}

// Calling the function
sayHello(); // Output: Hello, world!</code></pre>
<p><strong>Explanation:</strong> This example shows a simple function named <code>sayHello</code> that prints "Hello, world!" to the console when called. It's a basic demonstration of how functions can encapsulate behavior.</p>

<h2>2. Function with Parameters</h2>
<p>Functions can accept parameters, allowing you to pass values into the function.</p>

<h3>Example 2: Adding Two Numbers</h3>
<pre><code>// Function that adds two numbers
function add(a, b) {
    return a + b; // Returns the sum of a and b
}

// Calling the function with arguments
let sum = add(5, 3);
console.log(sum); // Output: 8</code></pre>
<p><strong>Explanation:</strong> In this example, the <code>add</code> function takes two parameters <code>a</code> and <code>b</code>, adds them, and returns the result. When called with the arguments <code>5</code> and <code>3</code>, it returns <code>8</code>.</p>

<h3>Example 3: Function Returning a Value</h3>
<p>Functions can return a value using the <code>return</code> statement.</p>
<pre><code>// Function that multiplies two numbers
function multiply(a, b) {
    return a * b; // Returns the product of a and b
}

// Calling the function
let product = multiply(4, 5);
console.log(product); // Output: 20</code></pre>
<p><strong>Explanation:</strong> The <code>multiply</code> function takes two parameters and returns their product. It demonstrates how functions can process input and produce output.</p>

<h2>3. Function with Default Parameters</h2>
<p>You can set default values for parameters in functions.</p>

<h3>Example 4: Default Parameter</h3>
<pre><code>// Function with a default parameter
function greet(name = "Guest") {
    return "Hello, " + name + "!"; // Greets the user
}

// Calling the function
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!</code></pre>
<p><strong>Explanation:</strong> The <code>greet</code> function has a default parameter <code>name</code>. If no argument is provided, it uses "Guest" as the default. This feature enhances flexibility in function calls.</p>

<h2>4. Function Expression</h2>
<p>Functions can also be defined using function expressions.</p>

<h3>Example 5: Function Expression</h3>
<pre><code>// Function expression
const subtract = function(a, b) {
    return a - b; // Returns the difference of a and b
};

// Calling the function
console.log(subtract(10, 4)); // Output: 6</code></pre>
<p><strong>Explanation:</strong> In this case, the <code>subtract</code> function is defined as a variable using a function expression. This method allows functions to be treated like any other variable.</p>

<h2>5. Arrow Functions</h2>
<p>Arrow functions provide a more concise syntax for writing functions.</p>

<h3>Example 6: Arrow Function</h3>
<pre><code>// Arrow function to divide two numbers
const divide = (a, b) => {
    return a / b; // Returns the quotient of a and b
};

// Calling the function
console.log(divide(10, 2)); // Output: 5</code></pre>
<p><strong>Explanation:</strong> The <code>divide</code> function is defined using the arrow function syntax. This concise syntax makes the code easier to read and write, especially for simple functions.</p>

<h2>6. Immediately Invoked Function Expression (IIFE)</h2>
<p>An IIFE is a function that runs as soon as it is defined.</p>

<h3>Example 7: IIFE</h3>
<pre><code>// Immediately Invoked Function Expression
(function() {
    console.log("This is an IIFE!"); // Runs immediately
})();</code></pre>
<p><strong>Explanation:</strong> This example demonstrates an Immediately Invoked Function Expression (IIFE), which executes immediately after its definition. IIFEs are useful for creating a new scope and avoiding global variable pollution.</p>

<h2>7. Function with Object Parameter</h2>
<p>You can pass objects as parameters to functions.</p>

<h3>Example 8: Function with Object</h3>
<pre><code>// Function that takes an object as a parameter
function printPerson(person) {
    console.log("Name: " + person.name + ", Age: " + person.age);
}

// Creating an object
const person = {
    name: "John",
    age: 30
};

// Calling the function
printPerson(person); // Output: Name: John, Age: 30</code></pre>
<p><strong>Explanation:</strong> The <code>printPerson</code> function takes an object as a parameter and accesses its properties. This example highlights how functions can handle complex data types like objects.</p>

</body>
</html>

 `;
            break;
            case "objects":
                content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Objects</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
        .visualization {
            width: 100%;
            max-width: 600px;
            margin: 10px 0;
        }
    </style>
</head>
<body>

<h1>JavaScript Objects</h1>
<p>In JavaScript, an <strong>object</strong> is a collection of key-value pairs. Objects are one of the most important data structures in JavaScript, allowing you to group related data and functions together. They can represent real-world entities and are used extensively in JavaScript programming.</p>

<h2>1. Creating an Object</h2>
<p>You can create an object using either object literal syntax or the <code>new Object()</code> constructor.</p>

<h3>Example 1: Object Literal Syntax</h3>
<pre><code>// Creating an object using object literal syntax
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

// Accessing object properties
console.log(car.make); // Output: Toyota</code></pre>
<img src="https://via.placeholder.com/600x300.png?text=Object+Literal+Syntax" alt="Object Literal Syntax" class="visualization">
<p><strong>Explanation:</strong> This example demonstrates creating an object named <code>car</code> using object literal syntax. The object has properties: <code>make</code>, <code>model</code>, and <code>year</code>. You can access these properties using dot notation.</p>

<h2>2. Adding and Modifying Properties</h2>
<p>You can add or modify properties of an object using dot notation or bracket notation.</p>

<h3>Example 2: Adding and Modifying Properties</h3>
<pre><code>const person = {
    name: "Alice",
    age: 25
};

// Adding a new property
person.city = "New York";

// Modifying an existing property
person.age = 26;

console.log(person); // Output: { name: 'Alice', age: 26, city: 'New York' }</code></pre>
<img src="https://via.placeholder.com/600x300.png?text=Adding+and+Modifying+Properties" alt="Adding and Modifying Properties" class="visualization">
<p><strong>Explanation:</strong> In this example, a <code>person</code> object is created with properties <code>name</code> and <code>age</code>. A new property <code>city</code> is added, and the <code>age</code> property is modified. The updated object reflects these changes.</p>

<h2>3. Deleting Properties</h2>
<p>You can delete properties from an object using the <code>delete</code> operator.</p>

<h3>Example 3: Deleting Properties</h3>
<pre><code>const book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};

// Deleting a property
delete book.year;

console.log(book); // Output: { title: '1984', author: 'George Orwell' }</code></pre>
<img src="https://via.placeholder.com/600x300.png?text=Deleting+Properties" alt="Deleting Properties" class="visualization">
<p><strong>Explanation:</strong> This example shows how to delete the <code>year</code> property from the <code>book</code> object using the <code>delete</code> operator. After deletion, the object only contains the <code>title</code> and <code>author</code> properties.</p>

<h2>4. Object Methods</h2>
<p>Objects can have methods, which are functions defined within the object.</p>

<h3>Example 4: Object with Methods</h3>
<pre><code>const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

// Calling object methods
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2</code></pre>
<img src="https://via.placeholder.com/600x300.png?text=Object+Methods" alt="Object Methods" class="visualization">
<p><strong>Explanation:</strong> In this example, the <code>calculator</code> object contains two methods: <code>add</code> and <code>subtract</code>. These methods perform arithmetic operations and can be called using dot notation.</p>

<h2>5. Nested Objects</h2>
<p>Objects can contain other objects, creating a nested structure.</p>

<h3>Example 5: Nested Objects</h3>
<pre><code>const student = {
    name: "John",
    age: 21,
    courses: {
        math: 90,
        science: 85
    }
};

// Accessing nested object properties
console.log(student.courses.math); // Output: 90</code></pre>
<img src="https://via.placeholder.com/600x300.png?text=Nested+Objects" alt="Nested Objects" class="visualization">
<p><strong>Explanation:</strong> This example demonstrates a <code>student</code> object that contains a nested <code>courses</code> object. You can access properties of the nested object using dot notation.</p>

<h2>6. Object Constructor</h2>
<p>You can create objects using constructors, which allow you to create multiple objects of the same type.</p>

<h3>Example 6: Object Constructor</h3>
<pre><code>// Object constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating new objects using the constructor
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1); // Output: Person { name: 'Alice', age: 30 }
console.log(person2); // Output: Person { name: 'Bob', age: 25 }</code></pre>
<img src="https://via.placeholder.com/600x300.png?text=Object+Constructor" alt="Object Constructor" class="visualization">
<p><strong>Explanation:</strong> This example defines an object constructor function <code>Person</code>, which initializes <code>name</code> and <code>age</code> properties. You can create new instances of the <code>Person</code> object using the <code>new</code> keyword.</p>

<h2>7. Object Destructuring</h2>
<p>Destructuring allows you to extract properties from objects and assign them to variables.</p>

<h3>Example 7: Object Destructuring</h3>
<pre><code>const car = {
    make: "Tesla",
    model: "Model S",
    year: 2022
};

// Destructuring the object
const { make, model } = car;

console.log(make); // Output: Tesla
console.log(model); // Output: Model S</code></pre>
<img src="https://via.placeholder.com/600x300.png?text=Object+Destructuring" alt="Object Destructuring" class="visualization">
<p><strong>Explanation:</strong> In this example, object destructuring is used to extract the <code>make</code> and <code>model</code> properties from the <code>car</code> object. This syntax simplifies the process of accessing properties from an object.</p>

</body>
</html>
`;
break;
case "arrays":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Arrays</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>JavaScript Arrays</h1>
<p>An <strong>array</strong> in JavaScript is a special variable that can hold multiple values at once. Arrays are used to store collections of data and can contain elements of different types, including numbers, strings, and even other objects. Arrays are indexed, meaning each element can be accessed using its numerical index, starting from zero.</p>

<h2>1. Creating an Array</h2>
<p>You can create an array using either array literal syntax or the <code>new Array()</code> constructor.</p>

<h3>Example 1: Array Literal Syntax</h3>
<pre><code>// Creating an array using array literal syntax
const fruits = ["Apple", "Banana", "Cherry"];

// Accessing array elements
console.log(fruits[0]); // Output: Apple</code></pre>
<p><strong>Explanation:</strong> This example demonstrates creating an array named <code>fruits</code> using array literal syntax. The array contains three elements: <code>Apple</code>, <code>Banana</code>, and <code>Cherry</code>. You can access these elements using their index.</p>

<h2>2. Adding Elements</h2>
<p>You can add elements to an array using the <code>push()</code> method or by specifying an index.</p>

<h3>Example 2: Adding Elements</h3>
<pre><code>const numbers = [1, 2, 3];

// Adding an element using push()
numbers.push(4); // Adds 4 to the end of the array

// Adding an element at a specific index
numbers[1] = 5; // Changes the second element

console.log(numbers); // Output: [1, 5, 3, 4]</code></pre>
<p><strong>Explanation:</strong> In this example, an array named <code>numbers</code> is created. The <code>push()</code> method adds the number <code>4</code> to the end of the array, while directly accessing index <code>1</code> modifies the second element to <code>5</code>.</p>

<h2>3. Removing Elements</h2>
<p>You can remove elements from an array using the <code>pop()</code> or <code>splice()</code> method.</p>

<h3>Example 3: Removing Elements</h3>
<pre><code>const colors = ["Red", "Green", "Blue"];

// Removing the last element using pop()
colors.pop(); // Removes "Blue"

// Removing an element at a specific index using splice()
colors.splice(0, 1); // Removes "Red" (index 0)

console.log(colors); // Output: ["Green"]</code></pre>
<p><strong>Explanation:</strong> This example shows how to remove elements from an array named <code>colors</code>. The <code>pop()</code> method removes the last element, while <code>splice()</code> is used to remove an element at a specific index.</p>

<h2>4. Iterating Over Arrays</h2>
<p>You can use loops, such as <code>for</code> and <code>forEach()</code>, to iterate over array elements.</p>

<h3>Example 4: Iterating Over Arrays</h3>
<pre><code>const animals = ["Cat", "Dog", "Elephant"];

// Using for loop
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// Using forEach method
animals.forEach(animal => {
    console.log(animal);
});</code></pre>
<p><strong>Explanation:</strong> In this example, two methods are shown for iterating over the <code>animals</code> array. The first uses a traditional <code>for</code> loop, while the second uses the <code>forEach()</code> method to execute a function for each element in the array.</p>

<h2>5. Array Length</h2>
<p>You can find the number of elements in an array using the <code>length</code> property.</p>

<h3>Example 5: Array Length</h3>
<pre><code>const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length); // Output: 3</code></pre>
<p><strong>Explanation:</strong> This example demonstrates how to access the <code>length</code> property of an array. The <code>length</code> property returns the number of elements in the <code>fruits</code> array.</p>

<h2>6. Array Methods</h2>
<p>JavaScript provides several built-in methods for manipulating arrays, such as <code>map()</code>, <code>filter()</code>, and <code>reduce()</code>.</p>

<h3>Example 6: Array Methods</h3>
<pre><code>const numbers = [1, 2, 3, 4];

// Using map() to create a new array with squared values
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16]

// Using filter() to create a new array with even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]</code></pre>
<p><strong>Explanation:</strong> In this example, the <code>map()</code> method creates a new array with squared values of the <code>numbers</code> array. The <code>filter()</code> method creates a new array that only contains even numbers.</p>

<h2>7. Multi-dimensional Arrays</h2>
<p>JavaScript allows the creation of multi-dimensional arrays, which can be thought of as arrays of arrays.</p>

<h3>Example 7: Multi-dimensional Arrays</h3>
<pre><code>const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Accessing an element in a multi-dimensional array
console.log(matrix[1][2]); // Output: 6</code></pre>
<p><strong>Explanation:</strong> This example shows how to create and access elements in a multi-dimensional array called <code>matrix</code>. The element at the second row and third column (index [1][2]) is accessed and printed.</p>

</body>
</html>
`;
break;
case "loops":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Loops</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>JavaScript Loops</h1>
<p>Loops are used in programming to execute a block of code repeatedly as long as a specified condition is true. In JavaScript, there are several types of loops, including <code>for</code>, <code>while</code>, and <code>do...while</code>. Each loop has its own use cases and syntax.</p>

<h2>1. For Loop</h2>
<p>The <code>for</code> loop is used when the number of iterations is known. It consists of three parts: initialization, condition, and increment/decrement.</p>

<h3>Example 1: For Loop</h3>
<pre><code>for (let i = 0; i < 5; i++) {
    console.log(i);
}</code></pre>
<p><strong>Explanation:</strong> This example demonstrates a <code>for</code> loop that iterates from <code>0</code> to <code>4</code> (5 iterations). The variable <code>i</code> is initialized to <code>0</code>, and on each iteration, it is incremented by <code>1</code>. The value of <code>i</code> is printed to the console during each iteration.</p>

<h2>2. While Loop</h2>
<p>The <code>while</code> loop continues to execute as long as the specified condition is true. It's useful when the number of iterations is not known in advance.</p>

<h3>Example 2: While Loop</h3>
<pre><code>let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}</code></pre>
<p><strong>Explanation:</strong> In this example, a <code>while</code> loop is used to print numbers from <code>0</code> to <code>4</code>. The loop continues to run as long as <code>count</code> is less than <code>5</code>. Inside the loop, <code>count</code> is incremented by <code>1</code> after each iteration.</p>

<h2>3. Do...While Loop</h2>
<p>The <code>do...while</code> loop is similar to the <code>while</code> loop, but it guarantees that the code block will be executed at least once, as the condition is evaluated after the code block.</p>

<h3>Example 3: Do...While Loop</h3>
<pre><code>let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);</code></pre>
<p><strong>Explanation:</strong> In this example, a <code>do...while</code> loop is used to print numbers from <code>0</code> to <code>4</code>. The code block inside the <code>do</code> statement executes first, and then the condition is checked. If <code>num</code> is less than <code>5</code>, the loop continues.</p>

<h2>4. For...Of Loop</h2>
<p>The <code>for...of</code> loop is a modern way to iterate over iterable objects, such as arrays or strings, allowing you to access each element directly.</p>

<h3>Example 4: For...Of Loop</h3>
<pre><code>const colors = ["Red", "Green", "Blue"];
for (const color of colors) {
    console.log(color);
}</code></pre>
<p><strong>Explanation:</strong> This example demonstrates the <code>for...of</code> loop, which iterates over the <code>colors</code> array. Each element in the array is accessed and printed directly to the console.</p>

<h2>5. For...In Loop</h2>
<p>The <code>for...in</code> loop is used to iterate over the properties of an object.</p>

<h3>Example 5: For...In Loop</h3>
<pre><code>const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
    console.log(key + ": " + person[key]);
}</code></pre>
<p><strong>Explanation:</strong> In this example, the <code>for...in</code> loop iterates over the properties of the <code>person</code> object. For each property, it prints the key and its corresponding value to the console.</p>

<h2>6. Nested Loops</h2>
<p>You can use loops inside other loops to perform more complex operations.</p>

<h3>Example 6: Nested Loops</h3>
<pre><code>for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log("i: " + i + ", j: " + j);
    }
}</code></pre>
<p><strong>Explanation:</strong> This example demonstrates nested loops. The outer loop runs three times, and for each iteration of the outer loop, the inner loop runs two times. The values of <code>i</code> and <code>j</code> are printed during each iteration.</p>

<h2>7. Breaking and Continuing Loops</h2>
<p>You can use <code>break</code> to exit a loop prematurely and <code>continue</code> to skip the current iteration and proceed to the next one.</p>

<h3>Example 7: Break and Continue</h3>
<pre><code>for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip the number 2
    }
    if (i === 4) {
        break; // Exit the loop when i is 4
    }
    console.log(i);
}</code></pre>
<p><strong>Explanation:</strong> In this example, the loop prints numbers from <code>0</code> to <code>4</code>. When <code>i</code> is <code>2</code>, the <code>continue</code> statement skips the current iteration. When <code>i</code> is <code>4</code>, the <code>break</code> statement exits the loop entirely.</p>

</body>
</html>
`;
break;
case "condition":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Conditional Statements</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>JavaScript Conditional Statements</h1>
<p>Conditional statements are used in programming to perform different actions based on different conditions. In JavaScript, the most common conditional statements are <code>if</code>, <code>else</code>, <code>else if</code>, and <code>switch</code>. These statements allow you to control the flow of your code based on specified conditions.</p>

<h2>1. If Statement</h2>
<p>The <code>if</code> statement evaluates a condition and executes a block of code if the condition is true.</p>

<h3>Example 1: If Statement</h3>
<pre><code>let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}</code></pre>
<p><strong>Explanation:</strong> In this example, the <code>if</code> statement checks if the variable <code>age</code> is greater than or equal to <code>18</code>. If the condition is true, it prints "You are an adult." to the console.</p>

<h2>2. If...Else Statement</h2>
<p>The <code>if...else</code> statement executes one block of code if the condition is true and another block if it is false.</p>

<h3>Example 2: If...Else Statement</h3>
<pre><code>let age = 16;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}</code></pre>
<p><strong>Explanation:</strong> This example uses an <code>if...else</code> statement to check if <code>age</code> is greater than or equal to <code>18</code>. If true, it prints "You are an adult." Otherwise, it prints "You are a minor."</p>

<h2>3. If...Else If Statement</h2>
<p>The <code>if...else if</code> statement allows you to check multiple conditions sequentially.</p>

<h3>Example 3: If...Else If Statement</h3>
<pre><code>let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}</code></pre>
<p><strong>Explanation:</strong> In this example, the program checks the <code>score</code> against several thresholds. It prints the corresponding grade based on the highest true condition.</p>

<h2>4. Switch Statement</h2>
<p>The <code>switch</code> statement evaluates an expression and executes code blocks based on matching case values.</p>

<h3>Example 4: Switch Statement</h3>
<pre><code>let fruit = "Apple";
switch (fruit) {
    case "Apple":
        console.log("You selected an apple.");
        break;
    case "Banana":
        console.log("You selected a banana.");
        break;
    default:
        console.log("Unknown fruit.");
}</code></pre>
<p><strong>Explanation:</strong> This example uses a <code>switch</code> statement to check the value of <code>fruit</code>. It executes the corresponding case block that matches the value. The <code>break</code> statement prevents fall-through to the next case.</p>

<h2>5. Ternary Operator</h2>
<p>The ternary operator is a shorthand way to write simple <code>if...else</code> statements.</p>

<h3>Example 5: Ternary Operator</h3>
<pre><code>let age = 20;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);</code></pre>
<p><strong>Explanation:</strong> In this example, the ternary operator checks if <code>age</code> is greater than or equal to <code>18</code>. If true, it assigns "Eligible to vote" to the variable <code>eligibility</code>; otherwise, it assigns "Not eligible to vote."</p>

<h2>6. Short-Circuit Evaluation</h2>
<p>Logical operators such as <code>&&</code> (AND) and <code>||</code> (OR) can also be used for conditional checks.</p>

<h3>Example 6: Short-Circuit Evaluation</h3>
<pre><code>let isMember = true;
let discount = isMember && "10% discount";
console.log(discount);</code></pre>
<p><strong>Explanation:</strong> In this example, the <code>&&</code> operator checks if <code>isMember</code> is true. If it is, the value "10% discount" is assigned to <code>discount</code>. If false, <code>discount</code> will be <code>false</code>.</p>

<h2>7. Nested Conditional Statements</h2>
<p>You can nest conditional statements to perform more complex evaluations.</p>

<h3>Example 7: Nested Conditional Statements</h3>
<pre><code>let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("You can enter the club.");
    } else {
        console.log("You need an ID to enter.");
    }
} else {
    console.log("You are too young to enter.");
}</code></pre>
<p><strong>Explanation:</strong> In this example, the outer <code>if</code> checks if the person is at least <code>18</code> years old. If true, it checks if the person has an ID with a nested <code>if</code>. The appropriate message is printed based on the conditions.</p>

</body>
</html>
`;
break;
case "events":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Events</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>JavaScript Events</h1>
<p>Events are actions or occurrences that happen in the browser, which can be detected and handled using JavaScript. Events can be triggered by user interactions, such as clicking a button, or by other actions, like loading a page. JavaScript provides various ways to handle these events and respond to them effectively.</p>

<h2>1. Click Event</h2>
<p>The <code>click</code> event occurs when an element is clicked by the user.</p>

<h3>Example 1: Click Event</h3>
<pre><code>&lt;button id="myButton"&gt;Click Me!&lt;/button&gt;
&lt;script&gt;
    document.getElementById("myButton").addEventListener("click", function() {
        alert("Button was clicked!");
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> In this example, when the button with the ID <code>myButton</code> is clicked, an alert box is displayed with the message "Button was clicked!" The <code>addEventListener</code> method is used to attach the event handler.</p>

<h2>2. Mouseover Event</h2>
<p>The <code>mouseover</code> event occurs when the mouse pointer is over an element.</p>

<h3>Example 2: Mouseover Event</h3>
<pre><code>&lt;div id="hoverDiv" style="width: 100px; height: 100px; background-color: lightblue;"&gt;Hover over me!&lt;/div&gt;
&lt;script&gt;
    document.getElementById("hoverDiv").addEventListener("mouseover", function() {
        this.style.backgroundColor = "lightgreen";
    });
    document.getElementById("hoverDiv").addEventListener("mouseout", function() {
        this.style.backgroundColor = "lightblue";
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> This example changes the background color of a <code>&lt;div&gt;</code> element when the mouse hovers over it. The <code>mouseout</code> event resets the color when the mouse leaves the element.</p>

<h2>3. Keydown Event</h2>
<p>The <code>keydown</code> event occurs when a key is pressed down.</p>

<h3>Example 3: Keydown Event</h3>
<pre><code>&lt;input type="text" id="textInput" placeholder="Type something..."&gt;
&lt;script&gt;
    document.getElementById("textInput").addEventListener("keydown", function(event) {
        console.log("Key pressed: " + event.key);
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> In this example, when a key is pressed while the input field is focused, the key that was pressed is logged to the console. The <code>event.key</code> property returns the value of the key pressed.</p>

<h2>4. Change Event</h2>
<p>The <code>change</code> event occurs when the value of an input element changes.</p>

<h3>Example 4: Change Event</h3>
<pre><code>&lt;select id="mySelect"&gt;
    &lt;option value="apple"&gt;Apple&lt;/option&gt;
    &lt;option value="banana"&gt;Banana&lt;/option&gt;
    &lt;option value="orange"&gt;Orange&lt;/option&gt;
&lt;/select&gt;
&lt;script&gt;
    document.getElementById("mySelect").addEventListener("change", function() {
        alert("You selected: " + this.value);
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> This example shows a dropdown menu. When the user selects an option, an alert box displays the selected value. The <code>change</code> event is triggered when the user makes a selection.</p>

<h2>5. Form Submission Event</h2>
<p>The <code>submit</code> event occurs when a form is submitted.</p>

<h3>Example 5: Form Submission Event</h3>
<pre><code>&lt;form id="myForm"&gt;
    &lt;input type="text" placeholder="Enter your name" required&gt;
    &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
&lt;script&gt;
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        alert("Form submitted!");
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> In this example, when the form is submitted, an alert box appears with the message "Form submitted!" The <code>event.preventDefault()</code> method prevents the default form submission action.</p>

<h2>6. Load Event</h2>
<p>The <code>load</code> event occurs when a document or resource is fully loaded.</p>

<h3>Example 6: Load Event</h3>
<pre><code>&lt;script&gt;
    window.addEventListener("load", function() {
        console.log("Page fully loaded!");
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> This example uses the <code>load</code> event to execute a function when the entire page is fully loaded. The message "Page fully loaded!" is logged to the console.</p>

<h2>7. Focus and Blur Events</h2>
<p>The <code>focus</code> event occurs when an input element gains focus, while the <code>blur</code> event occurs when it loses focus.</p>

<h3>Example 7: Focus and Blur Events</h3>
<pre><code>&lt;input type="text" id="focusInput" placeholder="Focus on me!"&gt;
&lt;script&gt;
    const input = document.getElementById("focusInput");
    input.addEventListener("focus", function() {
        console.log("Input field is focused.");
    });
    input.addEventListener("blur", function() {
        console.log("Input field lost focus.");
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> In this example, messages are logged to the console when the input field gains or loses focus. The <code>focus</code> event is triggered when the user clicks on the input field, while the <code>blur</code> event occurs when the user clicks away from it.</p>

</body>
</html>
`;
break;
case "dom":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation in JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>DOM Manipulation in JavaScript</h1>
<p>The Document Object Model (DOM) represents the structure of a web page. It allows JavaScript to manipulate HTML and CSS, enabling dynamic updates to the content and style of a web page. DOM manipulation involves adding, removing, or modifying elements and their attributes.</p>

<h2>1. Selecting Elements</h2>
<p>JavaScript provides several methods to select elements from the DOM.</p>

<h3>Example 1: Selecting an Element by ID</h3>
<pre><code>&lt;div id="myDiv"&gt;Hello, World!&lt;/div&gt;
&lt;script&gt;
    const element = document.getElementById("myDiv");
    console.log(element.innerHTML); // Outputs: Hello, World!
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> In this example, the <code>getElementById</code> method selects the <code>&lt;div&gt;</code> with the ID <code>myDiv</code> and logs its inner HTML to the console.</p>

<h2>2. Changing Content</h2>
<p>Once an element is selected, its content can be modified.</p>

<h3>Example 2: Changing Text Content</h3>
<pre><code>&lt;div id="myDiv"&gt;Original Text&lt;/div&gt;
&lt;button id="changeText"&gt;Change Text&lt;/button&gt;
&lt;script&gt;
    document.getElementById("changeText").addEventListener("click", function() {
        document.getElementById("myDiv").innerHTML = "Text Changed!";
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> This example uses an event listener to change the text content of the <code>&lt;div&gt;</code> when the button is clicked. The <code>innerHTML</code> property is used to update the content.</p>

<h2>3. Adding Elements</h2>
<p>New elements can be created and added to the DOM.</p>

<h3>Example 3: Adding a New Element</h3>
<pre><code>&lt;button id="addElement"&gt;Add Element&lt;/button&gt;
&lt;div id="elementContainer"&gt;&lt;/div&gt;
&lt;script&gt;
    document.getElementById("addElement").addEventListener("click", function() {
        const newElement = document.createElement("p");
        newElement.innerHTML = "New Paragraph Added!";
        document.getElementById("elementContainer").appendChild(newElement);
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> In this example, a new paragraph element is created and added to the <code>&lt;div&gt;</code> with the ID <code>elementContainer</code> when the button is clicked. The <code>createElement</code> and <code>appendChild</code> methods are used to add the new element.</p>

<h2>4. Removing Elements</h2>
<p>Elements can also be removed from the DOM.</p>

<h3>Example 4: Removing an Element</h3>
<pre><code>&lt;div id="removeDiv"&gt;This will be removed&lt;/div&gt;
&lt;button id="removeElement"&gt;Remove Element&lt;/button&gt;
&lt;script&gt;
    document.getElementById("removeElement").addEventListener("click", function() {
        const element = document.getElementById("removeDiv");
        element.parentNode.removeChild(element);
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> This example demonstrates how to remove an element from the DOM. When the button is clicked, the <code>removeChild</code> method is called on the parent node of the <code>&lt;div&gt;</code> to remove it.</p>

<h2>5. Modifying Attributes</h2>
<p>The attributes of an element can be modified as well.</p>

<h3>Example 5: Changing Attributes</h3>
<pre><code>&lt;img id="myImage" src="image.jpg" alt="My Image"&gt;
&lt;button id="changeSrc"&gt;Change Image Source&lt;/button&gt;
&lt;script&gt;
    document.getElementById("changeSrc").addEventListener("click", function() {
        document.getElementById("myImage").setAttribute("src", "new-image.jpg");
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> In this example, clicking the button changes the <code>src</code> attribute of an image element using the <code>setAttribute</code> method, updating the displayed image.</p>

<h2>6. Changing Styles</h2>
<p>The styles of an element can be altered through JavaScript.</p>

<h3>Example 6: Changing Styles</h3>
<pre><code>&lt;div id="styleDiv" style="width: 100px; height: 100px; background-color: blue;"&gt;&lt;/div&gt;
&lt;button id="changeStyle"&gt;Change Style&lt;/button&gt;
&lt;script&gt;
    document.getElementById("changeStyle").addEventListener("click", function() {
        const div = document.getElementById("styleDiv");
        div.style.backgroundColor = "red";
        div.style.width = "200px";
        div.style.height = "200px";
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> This example changes the background color, width, and height of a <code>&lt;div&gt;</code> element when the button is clicked, using the <code>style</code> property.</p>

<h2>7. Class Manipulation</h2>
<p>Classes can be added or removed from elements to change their styles or behavior.</p>

<h3>Example 7: Adding and Removing Classes</h3>
<pre><code>&lt;div id="classDiv" class="box"&gt;I am a box!&lt;/div&gt;
&lt;button id="toggleClass"&gt;Toggle Class&lt;/button&gt;
&lt;script&gt;
    document.getElementById("toggleClass").addEventListener("click", function() {
        const div = document.getElementById("classDiv");
        div.classList.toggle("highlight");
    });
&lt;/script&gt;
&lt;style&gt;
    .box { width: 100px; height: 100px; background-color: gray; }
    .highlight { background-color: yellow; }
&lt;/style&gt;</code></pre>
<p><strong>Explanation:</strong> This example toggles a class on the <code>&lt;div&gt;</code> when the button is clicked. If the class <code>highlight</code> is added, the background color changes to yellow.</p>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Methods in JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>DOM Methods in JavaScript</h1>
<p>The Document Object Model (DOM) provides a structured representation of the document as a tree of objects, allowing JavaScript to manipulate the content, structure, and styles of web pages. Here are some commonly used DOM methods.</p>

<h2>1. <code>getElementById()</code></h2>
<p>This method selects an element by its unique ID.</p>

<h3>Example 1: Selecting an Element by ID</h3>
<pre><code>&lt;div id="myDiv"&gt;Hello, World!&lt;/div&gt;
&lt;script&gt;
    const element = document.getElementById("myDiv");
    console.log(element.innerHTML); // Outputs: Hello, World!
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> The <code>getElementById()</code> method returns the element with the specified ID.</p>

<h2>2. <code>getElementsByClassName()</code></h2>
<p>This method selects all elements that have a specific class name.</p>

<h3>Example 2: Selecting Elements by Class Name</h3>
<pre><code>&lt;div class="myClass"&gt;Element 1&lt;/div&gt;
&lt;div class="myClass"&gt;Element 2&lt;/div&gt;
&lt;script&gt;
    const elements = document.getElementsByClassName("myClass");
    console.log(elements[0].innerHTML); // Outputs: Element 1
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> The <code>getElementsByClassName()</code> method returns a live HTMLCollection of elements with the specified class name.</p>

<h2>3. <code>getElementsByTagName()</code></h2>
<p>This method selects all elements with a specific tag name.</p>

<h3>Example 3: Selecting Elements by Tag Name</h3>
<pre><code>&lt;p&gt;Paragraph 1&lt;/p&gt;
&lt;p&gt;Paragraph 2&lt;/p&gt;
&lt;script&gt;
    const paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs.length); // Outputs: 2
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> The <code>getElementsByTagName()</code> method returns a live HTMLCollection of elements with the specified tag name.</p>

<h2>4. <code>querySelector()</code></h2>
<p>This method selects the first element that matches a specified CSS selector.</p>

<h3>Example 4: Selecting an Element with a CSS Selector</h3>
<pre><code>&lt;div class="container"&gt;&lt;p&gt;First Paragraph&lt;/p&gt;&lt;/div&gt;
&lt;script&gt;
    const firstParagraph = document.querySelector(".container p");
    console.log(firstParagraph.innerHTML); // Outputs: First Paragraph
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> The <code>querySelector()</code> method returns the first element that matches the specified CSS selector.</p>

<h2>5. <code>querySelectorAll()</code></h2>
<p>This method selects all elements that match a specified CSS selector.</p>

<h3>Example 5: Selecting All Elements with a CSS Selector</h3>
<pre><code>&lt;div class="item"&gt;Item 1&lt;/div&gt;
&lt;div class="item"&gt;Item 2&lt;/div&gt;
&lt;script&gt;
    const items = document.querySelectorAll(".item");
    console.log(items.length); // Outputs: 2
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> The <code>querySelectorAll()</code> method returns a static NodeList of all elements that match the specified CSS selector.</p>

<h2>6. <code>createElement()</code></h2>
<p>This method creates a new element with a specified tag name.</p>

<h3>Example 6: Creating a New Element</h3>
<pre><code>&lt;button id="addElement"&gt;Add Element&lt;/button&gt;
&lt;div id="container"&gt;&lt;/div&gt;
&lt;script&gt;
    document.getElementById("addElement").addEventListener("click", function() {
        const newElement = document.createElement("p");
        newElement.innerHTML = "New Paragraph Added!";
        document.getElementById("container").appendChild(newElement);
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> The <code>createElement()</code> method creates a new element that can then be added to the DOM.</p>

<h2>7. <code>appendChild()</code></h2>
<p>This method adds a new child node to a specified parent node.</p>

<h3>Example 7: Appending a Child Element</h3>
<pre><code>&lt;div id="parent"&gt;&lt;/div&gt;
&lt;script&gt;
    const child = document.createElement("span");
    child.innerHTML = "I am a child!";
    document.getElementById("parent").appendChild(child);
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> The <code>appendChild()</code> method adds the newly created child element to the specified parent element.</p>

<h2>8. <code>removeChild()</code></h2>
<p>This method removes a specified child node from a parent node.</p>

<h3>Example 8: Removing a Child Element</h3>
<pre><code>&lt;div id="removeMe"&gt;Remove Me&lt;/div&gt;
&lt;button id="removeButton"&gt;Remove Element&lt;/button&gt;
&lt;script&gt;
    document.getElementById("removeButton").addEventListener("click", function() {
        const element = document.getElementById("removeMe");
        element.parentNode.removeChild(element);
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> The <code>removeChild()</code> method removes a specified child node from its parent node.</p>

<h2>9. <code>setAttribute()</code></h2>
<p>This method sets a specified attribute and value for an element.</p>

<h3>Example 9: Setting an Attribute</h3>
<pre><code>&lt;img id="myImage" src="image.jpg" alt="My Image"&gt;
&lt;button id="changeSrc"&gt;Change Image Source&lt;/button&gt;
&lt;script&gt;
    document.getElementById("changeSrc").addEventListener("click", function() {
        document.getElementById("myImage").setAttribute("src", "new-image.jpg");
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> The <code>setAttribute()</code> method sets the value of a specified attribute for an element.</p>

<h2>10. <code>style</code></h2>
<p>The <code>style</code> property allows you to change the inline CSS styles of an element.</p>

<h3>Example 10: Changing Styles</h3>
<pre><code>&lt;div id="myDiv" style="width: 100px; height: 100px; background-color: blue;"&gt;&lt;/div&gt;
&lt;button id="changeStyle"&gt;Change Style&lt;/button&gt;
&lt;script&gt;
    document.getElementById("changeStyle").addEventListener("click", function() {
        const div = document.getElementById("myDiv");
        div.style.backgroundColor = "red";
        div.style.width = "200px";
        div.style.height = "200px";
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> The <code>style</code> property can be used to modify the CSS styles of an element dynamically.</p>

<h2>11. <code>classList</code></h2>
<p>The <code>classList</code> property provides methods to add, remove, and toggle classes of an element.</p>

<h3>Example 11: Adding and Removing Classes</h3>
<pre><code>&lt;div id="classDiv" class="box"&gt;I am a box!&lt;/div&gt;
&lt;button id="toggleClass"&gt;Toggle Class&lt;/button&gt;
&lt;script&gt;
    document.getElementById("toggleClass").addEventListener("click", function() {
        const div = document.getElementById("classDiv");
        div.classList.toggle("active");
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> The <code>classList</code> property allows for easy manipulation of classes on an element.</p>

<h2>12. <code>innerHTML</code></h2>
<p>The <code>innerHTML</code> property allows you to get or set the HTML content of an element.</p>

<h3>Example 12: Using innerHTML</h3>
<pre><code>&lt;div id="content"&gt;Original Content&lt;/div&gt;
&lt;button id="updateContent"&gt;Update Content&lt;/button&gt;
&lt;script&gt;
    document.getElementById("updateContent").addEventListener("click", function() {
        document.getElementById("content").innerHTML = "Updated Content!";
    });
&lt;/script&gt;</code></pre>
<p><strong>Explanation:</strong> The <code>innerHTML</code> property can be used to set or get the HTML content within an element.</p>

<h2>Conclusion</h2>
<p>These are some of the most commonly used DOM methods in JavaScript. Understanding these methods will help you manipulate HTML elements effectively and create dynamic web applications.</p>

</body>
</html>

`;
break;
case "promises":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promises in JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>Promises in JavaScript</h1>
<p>A <strong>Promise</strong> is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner alternative to using callbacks for handling asynchronous code.</p>

<h2>Promise States</h2>
<p>A Promise can be in one of three states:</p>
<ul>
    <li><strong>Pending:</strong> The initial state, neither fulfilled nor rejected.</li>
    <li><strong>Fulfilled:</strong> The operation completed successfully.</li>
    <li><strong>Rejected:</strong> The operation failed.</li>
</ul>

<h2>Creating a Promise</h2>
<p>You can create a Promise using the <code>Promise</code> constructor.</p>

<h3>Example 1: Basic Promise Creation</h3>
<pre><code>const myPromise = new Promise((resolve, reject) =&gt; {
    const success = true; // Change this to false to see rejection
    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed!");
    }
});</code></pre>
<p><strong>Explanation:</strong> The <code>Promise</code> constructor takes a function with two parameters: <code>resolve</code> and <code>reject</code>. You call <code>resolve</code> if the operation is successful and <code>reject</code> if it fails. In this example, we simulate success with a boolean variable.</p>

<h2>Using Promises</h2>
<p>Once you have a Promise, you can use the <code>then()</code> and <code>catch()</code> methods to handle its fulfillment and rejection.</p>

<h3>Example 2: Handling Promise Resolution</h3>
<pre><code>myPromise
    .then(result =&gt; {
        console.log(result); // Outputs: Operation succeeded!
    })
    .catch(error =&gt; {
        console.log(error);
    });</code></pre>
<p><strong>Explanation:</strong> The <code>then()</code> method is called when the Promise is fulfilled, and it receives the resolved value as an argument. The <code>catch()</code> method is called when the Promise is rejected, and it receives the error message.</p>

<h2>Promise Chaining</h2>
<p>You can chain Promises together to handle multiple asynchronous operations in sequence.</p>

<h3>Example 3: Chaining Promises</h3>
<pre><code>const promiseChain = new Promise((resolve) =&gt; {
    resolve("First operation complete.");
});

promiseChain
    .then(result =&gt; {
        console.log(result); // Outputs: First operation complete.
        return "Second operation complete.";
    })
    .then(result =&gt; {
        console.log(result); // Outputs: Second operation complete.
    });</code></pre>
<p><strong>Explanation:</strong> Each <code>then()</code> returns a new Promise, allowing you to continue the chain. The return value from one <code>then()</code> can be passed to the next.</p>

<h2>Promise.all()</h2>
<p>The <code>Promise.all()</code> method takes an array of Promises and resolves when all of the Promises have resolved or when the array is empty.</p>

<h3>Example 4: Using Promise.all()</h3>
<pre><code>const promise1 = Promise.resolve("Promise 1 resolved.");
const promise2 = Promise.resolve("Promise 2 resolved.");
const promise3 = Promise.reject("Promise 3 rejected.");

Promise.all([promise1, promise2])
    .then(results =&gt; {
        console.log(results); // Outputs: ["Promise 1 resolved.", "Promise 2 resolved."]
    })
    .catch(error =&gt; {
        console.log(error); // Will not execute because all promises resolved
    });

Promise.all([promise1, promise3])
    .then(results =&gt; {
        console.log(results); // Will not execute because one promise rejected
    })
    .catch(error =&gt; {
        console.log(error); // Outputs: Promise 3 rejected.
    });</code></pre>
<p><strong>Explanation:</strong> <code>Promise.all()</code> resolves when all Promises in the array are resolved. If any Promise is rejected, it immediately rejects, and the error message can be handled in the <code>catch()</code> method.</p>

<h2>Promise.race()</h2>
<p>The <code>Promise.race()</code> method returns a Promise that resolves or rejects as soon as one of the Promises in the array resolves or rejects.</p>

<h3>Example 5: Using Promise.race()</h3>
<pre><code>const promiseA = new Promise((resolve) =&gt; {
    setTimeout(() =&gt; resolve("Promise A resolved!"), 2000);
});
const promiseB = new Promise((resolve) =&gt; {
    setTimeout(() =&gt; resolve("Promise B resolved!"), 1000);
});

Promise.race([promiseA, promiseB])
    .then(result =&gt; {
        console.log(result); // Outputs: Promise B resolved!
    });</code></pre>
<p><strong>Explanation:</strong> <code>Promise.race()</code> resolves or rejects based on the first Promise that settles, regardless of the others. In this case, Promise B resolves before Promise A.</p>

<h2>Async/Await</h2>
<p>Async/await is a modern way to work with Promises that allows for writing asynchronous code in a more synchronous style.</p>

<h3>Example 6: Using Async/Await</h3>
<pre><code>const asyncFunction = async () =&gt; {
    const result = await myPromise;
    console.log(result); // Outputs: Operation succeeded!
};

asyncFunction();</code></pre>
<p><strong>Explanation:</strong> The <code>async</code> keyword defines an asynchronous function, and the <code>await</code> keyword pauses execution until the Promise resolves. This makes the code easier to read and understand.</p>

<h2>Conclusion</h2>
<p>Promises are a powerful feature in JavaScript that allows for better management of asynchronous operations. They help avoid the "callback hell" problem and provide a cleaner, more manageable way to work with asynchronous code.</p>

</body>
</html>
`;
break;
case "async":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async/Await in JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>Async/Await in JavaScript</h1>
<p><strong>Async/await</strong> is a modern way to handle asynchronous operations in JavaScript. It allows you to write asynchronous code in a more synchronous fashion, making it easier to read and understand. Async functions always return a Promise, and the <code>await</code> keyword can be used to pause the execution of the async function until the Promise is resolved.</p>

<h2>Understanding Async Functions</h2>
<p>An <code>async</code> function is a function that is declared with the <code>async</code> keyword. This indicates that the function will contain asynchronous code that returns a Promise.</p>

<h3>Example 1: Basic Async Function</h3>
<pre><code>async function myAsyncFunction() {
    return "Hello, Async!";
}</code></pre>
<p><strong>Explanation:</strong> This function, <code>myAsyncFunction</code>, is an async function that will implicitly return a Promise. When called, it resolves with the string "Hello, Async!".</p>

<h2>Using Await</h2>
<p>The <code>await</code> keyword is used to wait for a Promise to resolve or reject. It can only be used inside an async function.</p>

<h3>Example 2: Using Await with Promises</h3>
<pre><code>async function fetchData() {
    const promise = new Promise((resolve) =&gt; {
        setTimeout(() =&gt; resolve("Data fetched!"), 2000);
    });

    const result = await promise;
    console.log(result); // Outputs: Data fetched!
}</code></pre>
<p><strong>Explanation:</strong> In this example, <code>fetchData</code> is an async function that creates a Promise that resolves after 2 seconds. The <code>await</code> keyword pauses the execution of <code>fetchData</code> until the Promise resolves, then logs the result.</p>

<h2>Error Handling with Try/Catch</h2>
<p>You can use a <code>try/catch</code> block to handle errors when using async/await.</p>

<h3>Example 3: Error Handling</h3>
<pre><code>async function fetchWithError() {
    const promise = new Promise((_, reject) =&gt; {
        setTimeout(() =&gt; reject("Error fetching data!"), 2000);
    });

    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error); // Outputs: Error fetching data!
    }
}</code></pre>
<p><strong>Explanation:</strong> In this example, <code>fetchWithError</code> simulates an error when fetching data. The <code>try/catch</code> block allows us to catch the error when the Promise is rejected and log the error message.</p>

<h2>Combining Async/Await with Other Functions</h2>
<p>You can combine async/await with regular functions to improve code readability and maintainability.</p>

<h3>Example 4: Combining Functions</h3>
<pre><code>function simulateFetch() {
    return new Promise((resolve) =&gt; {
        setTimeout(() =&gt; resolve("Fetched Data!"), 1500);
    });
}

async function fetchAndLog() {
    const data = await simulateFetch();
    console.log(data); // Outputs: Fetched Data!
}</code></pre>
<p><strong>Explanation:</strong> Here, <code>simulateFetch</code> is a regular function that returns a Promise. The async function <code>fetchAndLog</code> uses <code>await</code> to get the fetched data and log it to the console.</p>

<h2>Async/Await with Promise.all()</h2>
<p>You can use async/await with <code>Promise.all()</code> to handle multiple asynchronous operations concurrently.</p>

<h3>Example 5: Using Promise.all() with Async/Await</h3>
<pre><code>async function fetchMultipleData() {
    const promise1 = new Promise((resolve) =&gt; setTimeout(() =&gt; resolve("Data 1"), 1000));
    const promise2 = new Promise((resolve) =&gt; setTimeout(() =&gt; resolve("Data 2"), 2000));
    const promise3 = new Promise((resolve) =&gt; setTimeout(() =&gt; resolve("Data 3"), 1500));

    const results = await Promise.all([promise1, promise2, promise3]);
    console.log(results); // Outputs: ["Data 1", "Data 2", "Data 3"]
}</code></pre>
<p><strong>Explanation:</strong> In this example, <code>fetchMultipleData</code> uses <code>Promise.all()</code> to wait for multiple Promises to resolve. The results are logged once all Promises have resolved.</p>

<h2>Returning Values from Async Functions</h2>
<p>Async functions can return values just like regular functions, but they will always return a Promise.</p>

<h3>Example 6: Returning Values</h3>
<pre><code>async function getValue() {
    return "Returned Value!";
}

getValue().then(value =&gt; {
    console.log(value); // Outputs: Returned Value!
});</code></pre>
<p><strong>Explanation:</strong> The async function <code>getValue</code> returns a string. When called, it returns a Promise that resolves with that string, which can then be accessed using <code>then()</code>.</p>

<h2>Conclusion</h2>
<p>Async/await simplifies working with asynchronous code in JavaScript. By allowing you to write code that looks synchronous, it improves readability and makes error handling easier. Understanding async/await is essential for modern JavaScript development, especially when dealing with asynchronous operations like API calls and data fetching.</p>

</body>
</html>
`;
break;
case "json":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON Format in JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>JSON Format in JavaScript</h1>
<p><strong>JSON</strong> (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is primarily used to transmit data between a server and a web application as an alternative to XML.</p>

<h2>Basic Structure of JSON</h2>
<p>JSON data is represented in key/value pairs. Keys are strings, and values can be strings, numbers, objects, arrays, booleans, or null.</p>

<h3>Example 1: Basic JSON Structure</h3>
<pre><code>{
    "name": "Alice",
    "age": 30,
    "isStudent": false
}</code></pre>
<p><strong>Explanation:</strong> This JSON object represents a person with three properties: <code>name</code>, <code>age</code>, and <code>isStudent</code>. The keys are strings, and the values include a string, a number, and a boolean.</p>

<h2>JSON Arrays</h2>
<p>JSON can also represent arrays, which are ordered lists of values.</p>

<h3>Example 2: JSON Array</h3>
<pre><code>{
    "students": [
        {
            "name": "Alice",
            "age": 30
        },
        {
            "name": "Bob",
            "age": 25
        }
    ]
}</code></pre>
<p><strong>Explanation:</strong> In this example, the <code>students</code> key contains an array of objects. Each object represents a student with a <code>name</code> and <code>age</code>.</p>

<h2>JSON Nested Objects</h2>
<p>JSON allows for nesting of objects within objects.</p>

<h3>Example 3: Nested JSON Objects</h3>
<pre><code>{
    "company": {
        "name": "Tech Solutions",
        "employees": [
            {
                "name": "Alice",
                "position": "Developer"
            },
            {
                "name": "Bob",
                "position": "Designer"
            }
        ]
    }
}</code></pre>
<p><strong>Explanation:</strong> Here, the <code>company</code> key contains an object with a <code>name</code> and an array of <code>employees</code>, each of which is an object with a <code>name</code> and <code>position</code>.</p>

<h2>Converting JSON to JavaScript Objects</h2>
<p>JavaScript provides methods to convert JSON strings into JavaScript objects and vice versa.</p>

<h3>Example 4: JSON.parse()</h3>
<pre><code>const jsonString = '{"name": "Alice", "age": 30}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name); // Outputs: Alice</code></pre>
<p><strong>Explanation:</strong> The <code>JSON.parse()</code> method is used to convert a JSON string into a JavaScript object. In this example, we parse the <code>jsonString</code> to create <code>jsonObj</code>, from which we can access the <code>name</code> property.</p>

<h3>Example 5: JSON.stringify()</h3>
<pre><code>const obj = { name: "Alice", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Outputs: {"name":"Alice","age":30}</code></pre>
<p><strong>Explanation:</strong> The <code>JSON.stringify()</code> method converts a JavaScript object into a JSON string. In this example, we convert the <code>obj</code> object into a JSON string.</p>

<h2>JSON with API Requests</h2>
<p>JSON is often used in API requests to send and receive data from a server.</p>

<h3>Example 6: Sending JSON in an API Request</h3>
<pre><code>const data = {
    name: "Alice",
    age: 30
};

fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response =&gt; response.json())
.then(data =&gt; console.log(data));</code></pre>
<p><strong>Explanation:</strong> In this example, we send a JSON object as the body of a POST request using the Fetch API. The object is converted to a JSON string with <code>JSON.stringify()</code> before being sent.</p>

<h2>Conclusion</h2>
<p>JSON is a widely-used format for data interchange that is simple to understand and use in JavaScript. It allows you to easily structure data for use in web applications and APIs. Mastering JSON is essential for modern web development.</p>

</body>
</html>
`;
break;
case "es6":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES6 Features in JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>ES6 Features in JavaScript</h1>
<p>ES6, also known as ECMAScript 2015, introduced many new features to JavaScript that make coding easier and more efficient. Below are some key ES6 features explained with examples.</p>

<h2>1. let and const</h2>
<p><code>let</code> and <code>const</code> provide block-scoped variables, whereas <code>var</code> is function-scoped.</p>

<h3>Example 1: let vs const vs var</h3>
<pre><code>// let: block-scoped
let x = 10;
if (true) {
    let x = 20;
    console.log(x); // Outputs: 20
}
console.log(x); // Outputs: 10

// const: block-scoped and immutable
const y = 30;
// y = 40; // Error: Assignment to constant variable
</code></pre>
<p><strong>Explanation:</strong> <code>let</code> allows reassigning the variable, but it's block-scoped, so changes inside the block do not affect the outer scope. <code>const</code> declares a constant variable that cannot be reassigned.</p>

<h2>2. Arrow Functions</h2>
<p>Arrow functions provide a more concise syntax for writing functions and do not bind their own <code>this</code> value.</p>

<h3>Example 2: Arrow Function</h3>
<pre><code>// Traditional function
function greet(name) {
    return "Hello " + name;
}

// Arrow function
const greet = (name) => "Hello " + name;

console.log(greet("Alice")); // Outputs: Hello Alice
</code></pre>
<p><strong>Explanation:</strong> Arrow functions are shorter and automatically return the value if the body is a single expression, making them ideal for simple callbacks and operations.</p>

<h2>3. Template Literals</h2>
<p>Template literals allow for easier string interpolation and multi-line strings using double quotes or single quotes, instead of complex concatenation.</p>

<h3>Example 3: Template Literals (without backticks)</h3>
<pre><code>const name = "Alice";
const greeting = "Hello, " + name + "! Welcome to ES6.";

console.log(greeting); // Outputs: Hello, Alice! Welcome to ES6.
</code></pre>
<p><strong>Explanation:</strong> Instead of backticks, you can concatenate strings using the plus operator (<code>+</code>). This is less clean, but it avoids the use of backticks.</p>

<h2>4. Default Parameters</h2>
<p>Functions can have default values for parameters in ES6, which makes function calls simpler.</p>

<h3>Example 4: Default Parameters</h3>
<pre><code>function greet(name = "Guest") {
    return "Hello, " + name + "!";
}

console.log(greet()); // Outputs: Hello, Guest!
console.log(greet("Alice")); // Outputs: Hello, Alice!
</code></pre>
<p><strong>Explanation:</strong> The parameter <code>name</code> has a default value of <code>"Guest"</code>. If no argument is provided, it uses the default value; otherwise, it uses the passed argument.</p>

<h2>5. Destructuring Assignment</h2>
<p>Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.</p>

<h3>Example 5: Destructuring Arrays and Objects</h3>
<pre><code>// Array destructuring
const [a, b] = [10, 20];
console.log(a); // Outputs: 10
console.log(b); // Outputs: 20

// Object destructuring
const person = { name: "Alice", age: 30 };
const { name, age } = person;
console.log(name); // Outputs: Alice
console.log(age); // Outputs: 30
</code></pre>
<p><strong>Explanation:</strong> Destructuring simplifies extracting values from arrays or objects without the need for multiple variable assignments.</p>

<h2>6. Spread and Rest Operators</h2>
<p>The spread operator (<code>...</code>) allows you to spread elements of an array or object, and the rest operator (<code>...</code>) collects remaining elements into an array.</p>

<h3>Example 6: Spread and Rest Operators</h3>
<pre><code>// Spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Outputs: [1, 2, 3, 4, 5]

// Rest operator in function
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num);
}

console.log(sum(1, 2, 3)); // Outputs: 6
</code></pre>
<p><strong>Explanation:</strong> The spread operator is used to combine arrays or objects, while the rest operator gathers all remaining arguments into an array.</p>

<h2>7. Classes</h2>
<p>ES6 introduces classes, a syntactical sugar over JavaScript’s existing prototype-based inheritance. They make object-oriented programming more intuitive in JavaScript.</p>

<h3>Example 7: Classes in ES6</h3>
<pre><code>class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
    }
}

const alice = new Person("Alice", 30);
console.log(alice.greet()); // Outputs: Hello, my name is Alice and I am 30 years old.
</code></pre>
<p><strong>Explanation:</strong> The <code>class</code> keyword simplifies creating objects and handling inheritance in JavaScript, making it look similar to other object-oriented languages like Java and C#.</p>

<h2>Conclusion</h2>
<p>ES6 introduces several new features and improvements that make JavaScript more powerful and easier to work with. These features provide modern ways to handle variables, functions, strings, objects, arrays, and even object-oriented programming with classes.</p>

</body>
</html>
`;
break;
case "closures":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Closures</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>JavaScript Closures</h1>
<p>A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables — a scope chain. This includes:</p>
<ul>
    <li>The variables of its own scope</li>
    <li>Variables of the outer function's scope</li>
    <li>Global variables</li>
</ul>
<p>This concept allows functions to "remember" the environment in which they were created, even after the outer function has finished executing.</p>

<h2>Example 1: Basic Closure</h2>
<pre><code>function outerFunction() {
    let outerVariable = "I am outside!";
    
    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable inside the inner function
    }
    
    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Outputs: I am outside!
</code></pre>
<p><strong>Explanation:</strong> In this example, <code>innerFunction</code> has access to <code>outerVariable</code>, even though <code>outerFunction</code> has already returned. This is because <code>innerFunction</code> forms a closure, retaining access to the outer function’s scope.</p>

<h2>Example 2: Closure with Parameters</h2>
<pre><code>function createCounter(start) {
    let count = start;

    return function() {
        count += 1;
        console.log(count);
    };
}

const counter = createCounter(5);
counter(); // Outputs: 6
counter(); // Outputs: 7
counter(); // Outputs: 8
</code></pre>
<p><strong>Explanation:</strong> The closure formed inside <code>createCounter</code> retains access to the <code>count</code> variable, which is initialized with the parameter <code>start</code>. Each time the returned function is called, the closure updates and logs the new value of <code>count</code>.</p>

<h2>Example 3: Private Variables with Closures</h2>
<pre><code>function secretHolder(secret) {
    return {
        getSecret: function() {
            console.log(secret); // Accesses the private secret variable
        },
        setSecret: function(newSecret) {
            secret = newSecret; // Modifies the private secret variable
        }
    };
}

const mySecret = secretHolder("Hidden message");
mySecret.getSecret(); // Outputs: Hidden message
mySecret.setSecret("New secret");
mySecret.getSecret(); // Outputs: New secret
</code></pre>
<p><strong>Explanation:</strong> Here, closures are used to create private variables. The <code>secret</code> variable is not accessible outside the function, but can be accessed or modified using the <code>getSecret</code> and <code>setSecret</code> methods, effectively creating "private" variables in JavaScript.</p>

<h2>Example 4: Closures in Loops (Common Mistake)</h2>
<pre><code>for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log("i:", i); // Outputs the final value of i, which is 4 (not what we expected)
    }, 1000);
}
</code></pre>
<p><strong>Explanation:</strong> In this example, we expected the loop to print 1, 2, and 3. However, since <code>var</code> is function-scoped, the <code>i</code> variable is shared across all the iterations. By the time the <code>setTimeout</code> callbacks are executed, <code>i</code> has already reached 4, hence all the functions print 4.</p>

<h2>Example 5: Correcting Closures in Loops</h2>
<pre><code>for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log("i:", i); // Outputs: 1, 2, 3 as expected
    }, 1000);
}
</code></pre>
<p><strong>Explanation:</strong> Using <code>let</code> (block-scoped) ensures that each iteration of the loop gets its own separate copy of <code>i</code>, so the closures created inside <code>setTimeout</code> retain the correct value of <code>i</code>.</p>

<h2>Example 6: Closures with Function Factory</h2>
<pre><code>function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // Outputs: 10

const triple = multiplyBy(3);
console.log(triple(5)); // Outputs: 15
</code></pre>
<p><strong>Explanation:</strong> The <code>multiplyBy</code> function creates a closure that "remembers" the value of <code>factor</code> passed into it. The inner function then uses this factor to multiply any number passed into it. This is a common pattern for function factories.</p>

<h2>Example 7: Closure for Caching (Memoization)</h2>
<pre><code>function memoize(fn) {
    let cache = {};
    
    return function(arg) {
        if (cache[arg]) {
            console.log("Fetching from cache");
            return cache[arg];
        } else {
            console.log("Calculating result");
            const result = fn(arg);
            cache[arg] = result;
            return result;
        }
    };
}

function square(n) {
    return n * n;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(4)); // Calculating result: 16
console.log(memoizedSquare(4)); // Fetching from cache: 16
</code></pre>
<p><strong>Explanation:</strong> This example shows how closures can be used to implement caching. The <code>memoize</code> function creates a closure that holds a <code>cache</code> object. When the memoized function is called, it first checks the cache. If the result is already in the cache, it returns it without recalculating; otherwise, it calculates the result and stores it in the cache for future use.</p>

<h2>Conclusion</h2>
<p>Closures are an important and powerful feature in JavaScript. They allow functions to retain access to the scope in which they were created, even after that scope has closed. This makes them extremely useful for tasks such as creating private variables, function factories, and caching results.</p>

</body>
</html>
`;
break;
case "hoisting":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Hoisting</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>JavaScript Hoisting</h1>
<p>Hoisting is a behavior in JavaScript where variable and function declarations are moved (or "hoisted") to the top of their scope before the code execution. However, only the declarations are hoisted, not the initializations.</p>

<p>This means you can refer to variables and functions before they are declared in the code, but their values will not be assigned until the actual point of initialization.</p>

<h2>Example 1: Hoisting with Variables (var)</h2>
<pre><code>console.log(x); // Outputs: undefined
var x = 5;
console.log(x); // Outputs: 5
</code></pre>
<p><strong>Explanation:</strong> In this example, the variable <code>x</code> is hoisted to the top of its scope, but the value <code>5</code> is not assigned to it until the line <code>var x = 5;</code> is reached. Before that, <code>x</code> is <code>undefined</code>.</p>

<h2>Example 2: Hoisting with let and const</h2>
<pre><code>console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Outputs: 10
</code></pre>
<p><strong>Explanation:</strong> Unlike <code>var</code>, variables declared with <code>let</code> and <code>const</code> are not initialized until the line where they are declared is executed. This is why trying to access <code>y</code> before its declaration throws a <code>ReferenceError</code>.</p>

<h2>Example 3: Hoisting with Functions</h2>
<pre><code>console.log(add(2, 3)); // Outputs: 5

function add(a, b) {
    return a + b;
}
</code></pre>
<p><strong>Explanation:</strong> Function declarations are fully hoisted. This means that you can call the <code>add</code> function even before it is declared in the code, and it will work without any issues because the entire function declaration is hoisted.</p>

<h2>Example 4: Hoisting with Function Expressions</h2>
<pre><code>console.log(multiply(2, 3)); // TypeError: multiply is not a function

var multiply = function(a, b) {
    return a * b;
};
</code></pre>
<p><strong>Explanation:</strong> Function expressions are not hoisted like function declarations. Only the variable <code>multiply</code> is hoisted, but its value (the function) is assigned later in the code. Until that point, <code>multiply</code> is <code>undefined</code>, leading to a <code>TypeError</code> when trying to call it before its definition.</p>

<h2>Example 5: Hoisting within Functions</h2>
<pre><code>function showMessage() {
    console.log(message); // Outputs: undefined
    var message = "Hello, World!";
    console.log(message); // Outputs: Hello, World!
}

showMessage();
</code></pre>
<p><strong>Explanation:</strong> Inside the <code>showMessage</code> function, the variable <code>message</code> is hoisted to the top of the function's scope. Before the assignment, its value is <code>undefined</code>. After the assignment, the correct value is displayed.</p>

<h2>Example 6: Hoisting in Block Scope</h2>
<pre><code>function testBlockScope() {
    console.log(a); // Outputs: undefined
    console.log(b); // ReferenceError: Cannot access 'b' before initialization

    var a = 10;
    let b = 20;
}

testBlockScope();
</code></pre>
<p><strong>Explanation:</strong> <code>var</code> is hoisted and initialized with <code>undefined</code> at the top of its function scope. However, <code>let</code> (and <code>const</code>) are block-scoped, and they are not initialized until their declaration line is executed, leading to a <code>ReferenceError</code> when accessed before declaration.</p>

<h2>Example 7: Hoisting and Temporal Dead Zone (TDZ)</h2>
<pre><code>console.log(x); // ReferenceError: Cannot access 'x' before initialization

let x = 5;
</code></pre>
<p><strong>Explanation:</strong> In the case of <code>let</code> and <code>const</code>, there is a concept called the <strong>Temporal Dead Zone (TDZ)</strong>. The TDZ is the time between entering a scope and the point where a variable is declared. During this time, trying to access the variable throws a <code>ReferenceError</code>.</p>

<h2>Conclusion</h2>
<p>Hoisting is an essential concept in JavaScript that moves variable and function declarations to the top of their scope. Understanding how hoisting works, especially with <code>var</code>, <code>let</code>, <code>const</code>, and function declarations, helps prevent unexpected behavior and errors in code.</p>

</body>
</html>
`;
break;
case "this":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript - this Keyword</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>JavaScript "this" Keyword</h1>
<p>In JavaScript, the <code>this</code> keyword refers to the object that is currently executing the code. Its value depends on how and where it is used, making it a bit tricky but powerful once understood.</p>

<h2>Example 1: "this" in the Global Context</h2>
<pre><code>console.log(this); // Outputs the global object (window in browsers)
</code></pre>
<p><strong>Explanation:</strong> When <code>this</code> is used in the global context (outside of any function), it refers to the global object. In a browser, this global object is the <code>window</code> object.</p>

<h2>Example 2: "this" Inside a Function</h2>
<pre><code>function showThis() {
    console.log(this);
}

showThis(); // Outputs: the global object (window in browsers)
</code></pre>
<p><strong>Explanation:</strong> When a regular function is invoked, <code>this</code> refers to the global object. This behavior is different if the function is invoked as part of an object (as a method).</p>

<h2>Example 3: "this" in an Object Method</h2>
<pre><code>const person = {
    name: 'John',
    greet: function() {
        console.log(this.name);
    }
};

person.greet(); // Outputs: John
</code></pre>
<p><strong>Explanation:</strong> When <code>this</code> is used inside an object method, it refers to the object itself. In this case, <code>this</code> refers to the <code>person</code> object, so <code>this.name</code> returns 'John'.</p>

<h2>Example 4: "this" in a Constructor Function</h2>
<pre><code>function Car(make, model) {
    this.make = make;
    this.model = model;
}

const myCar = new Car('Toyota', 'Camry');
console.log(myCar.make); // Outputs: Toyota
</code></pre>
<p><strong>Explanation:</strong> In a constructor function, <code>this</code> refers to the new object being created. When we use <code>new</code> to instantiate the <code>Car</code> object, <code>this</code> inside the function refers to the newly created object.</p>

<h2>Example 5: "this" in an Arrow Function</h2>
<pre><code>const arrowFunc = () => {
    console.log(this);
};

arrowFunc(); // Outputs: global object (window in browsers)
</code></pre>
<p><strong>Explanation:</strong> Arrow functions do not have their own <code>this</code>. Instead, they inherit <code>this</code> from their surrounding (lexical) context. In this case, since the arrow function is defined in the global scope, <code>this</code> refers to the global object.</p>

<h2>Example 6: "this" in Event Handlers</h2>
<pre><code>const button = document.createElement('button');
button.textContent = 'Click Me';
document.body.appendChild(button);

button.addEventListener('click', function() {
    console.log(this); // Outputs: the button element
});
</code></pre>
<p><strong>Explanation:</strong> In an event handler, <code>this</code> refers to the element that received the event. In this case, <code>this</code> inside the event listener refers to the <code>button</code> element that triggered the click event.</p>

<h2>Example 7: Manually Setting "this" using call(), apply(), and bind()</h2>
<pre><code>const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

function greet() {
    console.log('Hello, ' + this.name);
}

greet.call(person1); // Outputs: Hello, Alice
greet.apply(person2); // Outputs: Hello, Bob

const boundGreet = greet.bind(person1);
boundGreet(); // Outputs: Hello, Alice
</code></pre>
<p><strong>Explanation:</strong> The <code>call()</code> and <code>apply()</code> methods allow you to explicitly set the value of <code>this</code> inside a function. The <code>bind()</code> method creates a new function with <code>this</code> permanently set to the specified value (in this case, <code>person1</code>).</p>

<h2>Conclusion</h2>
<p>The <code>this</code> keyword in JavaScript is dynamic and its value depends on how and where it is used. Understanding its behavior in different contexts (global, object methods, constructors, arrow functions, event handlers) is essential for mastering JavaScript.</p>

</body>
</html>
`;
case "scope":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript - Scope</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>JavaScript Scope</h1>
<p>In JavaScript, <strong>scope</strong> determines the accessibility (visibility) of variables. There are three types of scope in JavaScript: global scope, function scope, and block scope.</p>

<h2>Example 1: Global Scope</h2>
<pre><code>var globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // Outputs: I am global
}

showGlobal();
console.log(globalVar); // Outputs: I am global
</code></pre>
<p><strong>Explanation:</strong> Variables declared outside of any function or block have a <strong>global scope</strong>. This means they can be accessed anywhere in the code, even inside functions.</p>

<h2>Example 2: Function Scope</h2>
<pre><code>function showLocal() {
    var localVar = "I am local";
    console.log(localVar); // Outputs: I am local
}

showLocal();
console.log(localVar); // Error: localVar is not defined
</code></pre>
<p><strong>Explanation:</strong> Variables declared inside a function have <strong>function scope</strong>. This means they can only be accessed inside the function where they were declared, and not outside.</p>

<h2>Example 3: Block Scope with let</h2>
<pre><code>if (true) {
    let blockVar = "I am block-scoped";
    console.log(blockVar); // Outputs: I am block-scoped
}

console.log(blockVar); // Error: blockVar is not defined
</code></pre>
<p><strong>Explanation:</strong> Variables declared with <code>let</code> (or <code>const</code>) inside a block (e.g., <code>if</code> or <code>for</code> statement) have <strong>block scope</strong>. They can only be accessed within the block they are defined in.</p>

<h2>Example 4: Block Scope with var</h2>
<pre><code>if (true) {
    var blockVar = "I am block-scoped";
    console.log(blockVar); // Outputs: I am block-scoped
}

console.log(blockVar); // Outputs: I am block-scoped
</code></pre>
<p><strong>Explanation:</strong> Variables declared with <code>var</code> do not have block scope. Instead, they are hoisted to the function scope (or global scope if outside any function). Therefore, <code>blockVar</code> is still accessible outside the <code>if</code> block.</p>

<h2>Example 5: Function Scope vs. Block Scope</h2>
<pre><code>function checkScope() {
    if (true) {
        var functionScoped = "I am function-scoped";
        let blockScoped = "I am block-scoped";
    }
    console.log(functionScoped); // Outputs: I am function-scoped
    console.log(blockScoped); // Error: blockScoped is not defined
}

checkScope();
</code></pre>
<p><strong>Explanation:</strong> Variables declared with <code>var</code> inside a block are function-scoped, while variables declared with <code>let</code> (or <code>const</code>) are block-scoped. In this example, <code>functionScoped</code> is accessible outside the block, but <code>blockScoped</code> is not.</p>

<h2>Example 6: Nested Function Scope</h2>
<pre><code>function outerFunction() {
    var outerVar = "I am outer";
    
    function innerFunction() {
        var innerVar = "I am inner";
        console.log(outerVar); // Outputs: I am outer
        console.log(innerVar); // Outputs: I am inner
    }

    innerFunction();
    console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
</code></pre>
<p><strong>Explanation:</strong> In JavaScript, inner functions have access to variables from their outer function’s scope (closure). However, the outer function does not have access to variables declared inside the inner function.</p>

<h2>Example 7: Scope in Loops</h2>
<pre><code>for (let i = 0; i < 3; i++) {
    console.log(i); // Outputs: 0, 1, 2
}

console.log(i); // Error: i is not defined
</code></pre>
<p><strong>Explanation:</strong> When using <code>let</code> in a loop, the variable <code>i</code> is block-scoped and can only be accessed within the loop. After the loop ends, <code>i</code> is no longer available.</p>

<h2>Conclusion</h2>
<p>Understanding JavaScript scope is crucial for managing variable visibility and avoiding conflicts. There are three main types of scope:</p>
<ul>
    <li><strong>Global scope:</strong> Variables are accessible everywhere.</li>
    <li><strong>Function scope:</strong> Variables are accessible only inside the function where they were declared.</li>
    <li><strong>Block scope:</strong> Variables declared with <code>let</code> or <code>const</code> are accessible only within the block where they are defined.</li>
</ul>

</body>
</html>
`;
break;
case "classes":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript - Classes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #eef;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background-color: #eef;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

<h1>JavaScript Classes</h1>
<p>In JavaScript, a <strong>class</strong> is a blueprint for creating objects with predefined properties and methods. It is a template that simplifies object creation and enhances code organization. Classes were introduced in ES6.</p>

<h2>Example 1: Defining a Class</h2>
<pre><code>class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}

const john = new Person('John', 25);
john.greet(); // Outputs: Hello, my name is John and I am 25 years old.
</code></pre>
<p><strong>Explanation:</strong> In this example, we define a <em>Person</em> class with a constructor that initializes the properties <em>name</em> and <em>age</em>. The <em>greet</em> method prints a message introducing the person. We create an instance of the class using the <em>new</em> keyword and call the <em>greet</em> method.</p>

<h2>Example 2: Adding Methods to a Class</h2>
<pre><code>class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    displayDetails() {
        return this.brand + ' ' + this.model;
    }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.displayDetails()); // Outputs: Toyota Corolla
</code></pre>
<p><strong>Explanation:</strong> We can add methods to a class to define behaviors. In this example, the <em>Car</em> class has a method <em>displayDetails</em> that returns a string with the car’s brand and model.</p>

<h2>Example 3: Class Inheritance</h2>
<pre><code>class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

const dog = new Dog('Buddy');
dog.speak(); // Outputs: Buddy barks.
</code></pre>
<p><strong>Explanation:</strong> Classes support <strong>inheritance</strong> using the <em>extends</em> keyword. In this example, <em>Dog</em> is a subclass of <em>Animal</em>. The <em>Dog</em> class overrides the <em>speak</em> method to provide a different behavior.</p>

<h2>Example 4: Static Methods</h2>
<pre><code>class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.add(5, 3)); // Outputs: 8
</code></pre>
<p><strong>Explanation:</strong> Static methods are defined on the class itself, rather than on instances of the class. In this example, the <em>add</em> method is static, and it can be called directly using the class name without creating an instance.</p>

<h2>Example 5: Getters and Setters</h2>
<pre><code>class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get area() {
        return this._width * this._height;
    }

    set width(value) {
        this._width = value;
    }
}

const rect = new Rectangle(10, 20);
console.log(rect.area); // Outputs: 200
rect.width = 15;
console.log(rect.area); // Outputs: 300
</code></pre>
<p><strong>Explanation:</strong> Getters and setters allow us to control how a property is accessed or modified. In this example, the <em>area</em> getter calculates the area of the rectangle, while the <em>width</em> setter allows us to update the width.</p>

<h2>Example 6: Private Fields (ES2022)</h2>
<pre><code>class User {
    #password;

    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    checkPassword(password) {
        return this.#password === password;
    }
}

const user = new User('Alice', '12345');
console.log(user.checkPassword('12345')); // Outputs: true
//console.log(user.#password); // Error: Private field '#password' must be declared in an enclosing class
</code></pre>
<p><strong>Explanation:</strong> Private fields are declared with <em>#</em> and can only be accessed within the class. In this example, the <em>password</em> is private, so it cannot be accessed directly from outside the class.</p>

<h2>Example 7: Class Expression</h2>
<pre><code>const Animal = class {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a sound.');
    }
};

const cat = new Animal('Whiskers');
cat.speak(); // Outputs: Whiskers makes a sound.
</code></pre>
<p><strong>Explanation:</strong> Just like functions, classes can also be defined as expressions and assigned to variables. In this example, we define the <em>Animal</em> class as an expression and create an instance of it.</p>

<h2>Conclusion</h2>
<p>JavaScript classes provide a powerful and clean way to create and manage objects, allowing for better organization of code through constructors, methods, inheritance, and encapsulation.</p>
<ul>
    <li><strong>Classes</strong> are templates for creating objects.</li>
    <li><strong>Constructor</strong> method initializes properties when an instance is created.</li>
    <li><strong>Methods</strong> define the behaviors of the object.</li>
    <li>Classes support <strong>inheritance</strong> through the <em>extends</em> keyword.</li>
    <li><strong>Static methods</strong> are called on the class itself.</li>
    <li><strong>Getters and setters</strong> manage property access and updates.</li>
    <li>Private fields are supported with the <em>#</em> syntax (ES2022).</li>
</ul>

</body>
</html>
`;
break;

        // Add more topics similarly...

        default:
            content = '<p>Select a JavaScript topic from the list.</p>';
    }

    // Update the content area with the selected topic's content
    contentArea.innerHTML = content;
}
