function loadContent(topic) {
    let contentArea = document.getElementById('contentArea');

    // Clear existing content
    contentArea.innerHTML = '';

    // Switch-case structure to load content based on the selected topic
    switch (topic) {
        case 'intro':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to Java</title>
    
</head>
<body>



<main>
    <h1>What is Java?</h1>
    <p class="intro">Java is a high-level, object-oriented, and platform-independent programming language developed by James Gosling and his team at Sun Microsystems in 1995.</p>
    <p>Java follows the principle of "Write Once, Run Anywhere" (WORA), which means Java programs can run on any device that has the Java Virtual Machine (JVM) without modification.</p>

    <h2>Key Features of Java</h2>
    <ul class="features">
        <li>Platform Independence: Java code is compiled into bytecode that can be executed on any platform with a JVM.</li>
        <li>Object-Oriented: Java promotes code reuse and modularity through classes, objects, inheritance, polymorphism, encapsulation, and abstraction.</li>
        <li>Automatic Memory Management: Java has built-in garbage collection to handle memory management, reducing the burden on developers.</li>
        <li>Multithreading: Java supports multithreading for efficient, concurrent execution of tasks.</li>
        <li>Security: Java provides security mechanisms such as the sandbox model and bytecode verification.</li>
    </ul>

    <h2>History of Java</h2>
    <p class="history">Java was initially developed as a small project called Oak in 1991 by Sun Microsystems. It was later renamed to Java in 1995. Java quickly became popular due to its portability and ease of use in web-based applications. In 2009, Sun Microsystems was acquired by Oracle Corporation, which now maintains Java.</p>

    <h2>Why Use Java?</h2>
    <p>Java is used for a wide range of applications, including:</p>
    <ul class="features">
        <li>Web Development: Java is used for creating dynamic web applications using technologies like JSP, Servlets, and frameworks like Spring.</li>
        <li>Mobile Development: Java is the main language for building Android apps.</li>
        <li>Enterprise Applications: Java is widely used in large-scale enterprise-level applications for financial systems, CRM systems, and more.</li>
        <li>Big Data: Java is also used in big data frameworks like Apache Hadoop and Apache Spark.</li>
    </ul>

    <h2>Java Ecosystem</h2>
    <p>The Java ecosystem includes a variety of tools and platforms to build different kinds of applications:</p>
    <ul class="ecosystem">
        <li>Java Standard Edition (Java SE): Provides core libraries and APIs for general-purpose applications.</li>
        <li>Java Enterprise Edition (Java EE): Used for building large-scale, distributed, multi-tier applications.</li>
        <li>Java Micro Edition (Java ME): Used for building applications on embedded devices and mobile platforms.</li>
        <li>JavaFX: For building rich client-side applications with graphical user interfaces.</li>
    </ul>

    <h2>Platforms for Writing and Running Java Code</h2>
    <p>There are several platforms and tools that developers can use to write, compile, and run Java code:</p>
    <ul class="platforms">
        <li><b>IDE (Integrated Development Environment):</b> IDEs provide a complete environment to code, compile, and run Java programs with advanced features such as debugging, code completion, and version control.</li>
        <li><b>IntelliJ IDEA:</b> A popular Java IDE known for its powerful features and user-friendly interface. It offers smart code completion and extensive support for Java frameworks.</li>
        <li><b>Eclipse:</b> Another widely-used IDE, Eclipse is open-source and highly customizable. It supports Java, along with many other languages, and has a vast library of plugins.</li>
        <li><b>NetBeans:</b> An open-source IDE that provides support for Java development, with a focus on simplicity and ease of use.</li>
        <li><b>Command Line (Terminal):</b> You can also write, compile, and run Java programs using the Java Development Kit (JDK) from the terminal or command line interface. This is more basic but ideal for learning and practicing Java.</li>
        <li><b>Online Platforms:</b> Platforms like <a href="https://repl.it" target="_blank">Repl.it</a>, <a href="https://www.jdoodle.com/" target="_blank">JDoodle</a>, and <a href="https://ideone.com/" target="_blank">Ideone</a> allow you to write and run Java code directly in your browser without the need for any installations.</li>
    </ul>
</main>



</body>
</html>
`;
            break;
        case 'syntax':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How to Write Java Code</title>
</head>
<body>

    <h1>How to Write Java Code</h1>

    <p>Java is a powerful, object-oriented programming language used to build various types of applications. Writing Java code involves understanding the basic structure and syntax. Below is the general format of a Java program.</p>

    <h2>1. Package Declaration (Optional)</h2>
    <p>The first line of a Java program is the <strong>package declaration</strong> (if used). Packages group related classes and avoid name conflicts. It is optional, but recommended in larger projects.</p>
    
    <pre><code>package com.example.myprogram;</code></pre>

    <h2>2. Import Statements (Optional)</h2>
    <p>Import statements allow the use of classes from other packages in your program. For example, to use classes like <code>Scanner</code> from <code>java.util</code>, you must import the package first.</p>

    <pre><code>import java.util.Scanner;</code></pre>

    <h2>3. Class Declaration</h2>
    <p>Every Java program must contain at least one class. The class is the foundation of the program. The class name should follow the CamelCase convention (starting with an uppercase letter).</p>

    <pre><code>public class HelloWorld {</code></pre>

    <h2>4. Main Method</h2>
    <p>The <strong>main method</strong> is the entry point of any Java application. It must be defined as <code>public static void main(String[] args)</code>. When the program runs, the execution starts from this method.</p>
    
    <pre><code>public static void main(String[] args) {</code></pre>

    <h2>5. Statements and Expressions</h2>
    <p>Inside the main method or any other method, you define actions using statements and expressions. These can include variable declarations, method calls, and control structures.</p>

    <pre><code>System.out.println("Hello, World!");</code></pre>

    <h2>6. Variables</h2>
    <p>Variables store data that your program will use. Every variable needs to be declared with a specific data type. For example, <code>int</code> is used for integer numbers, and <code>String</code> is used for text.</p>
    
    <pre><code>int number = 10;</code></pre>

    <h2>7. Closing the Class and Program</h2>
    <p>The program is closed with the curly braces <code>{ }</code> to end the class and method declarations.</p>

    <pre><code>}</code></pre>

    <h2>Complete Java Program Example</h2>
    <p>Here's an example of a complete Java program that includes all of the above elements:</p>

    <pre><code>
        package com.example.helloworld;

        import java.util.Scanner;

        public class HelloWorld {
            public static void main(String[] args) {
                Scanner scanner = new Scanner(System.in);
                System.out.print("Enter your name: ");
                String name = scanner.nextLine();
                System.out.println("Hello, " + name + "!");
                scanner.close();
            }
        }
    </code></pre>

</body>
</html>
`;
            break;
            case "jvm":
                contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JDK and JVM Explanation</title>
    <style>
        /* Styling for the table */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        /* General page styling */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }

        h1, h2, h3 {
            color: #333;
        }

        ul {
            margin: 10px 0;
            padding: 0;
            list-style: none;
        }

        ul li {
            margin: 5px 0;
        }
    </style>
</head>
<body>

    <h1>Introduction to JDK and JVM</h1>

    <h2>JDK (Java Development Kit)</h2>
    <p>The <strong>JDK</strong> is a software development kit used to develop Java applications. It provides all the tools necessary to develop Java programs, including the compiler, Java Runtime Environment (JRE), and various development tools such as debuggers, documentation generators, and more.</p>

    <h3>Components of JDK:</h3>
    <ul>
        <li><strong>JRE (Java Runtime Environment):</strong> This is included in JDK and is necessary to run Java applications. It contains the JVM and other libraries needed for execution.</li>
        <li><strong>Java Compiler (javac):</strong> The compiler that translates Java source code into bytecode.</li>
        <li><strong>Java Debugger (jdb):</strong> A tool to debug Java programs.</li>
        <li><strong>Java Doc:</strong> A tool for generating API documentation for your Java code in HTML format.</li>
        <li><strong>JVM:</strong> The <strong>Java Virtual Machine</strong>, which is part of the JRE, is responsible for running Java bytecode.</li>
        <li><strong>Tools like jar (Java ARchive):</strong> It packages applications into archives for distribution.</li>
    </ul>

    <h3>Key Features of JDK:</h3>
    <ul>
        <li>It allows developers to write, compile, debug, and execute Java applications.</li>
        <li>It provides both development and runtime tools.</li>
        <li>It supports various IDEs (Integrated Development Environments) such as Eclipse, IntelliJ IDEA, NetBeans, etc.</li>
    </ul>

    <h2>JVM (Java Virtual Machine)</h2>
    <p>The <strong>JVM</strong> is a part of the JRE and is responsible for running Java programs. It is platform-independent, meaning it enables Java programs to run on any operating system or hardware architecture without needing to rewrite the code.</p>

    <h3>Components of JVM:</h3>
    <ul>
        <li><strong>Class Loader Subsystem:</strong> Loads Java classes into the JVM.</li>
        <li><strong>Runtime Data Areas:</strong> Various memory areas like heap, stack, method area, etc., used for program execution.</li>
        <li><strong>Execution Engine:</strong> Executes the bytecode instructions.</li>
        <li><strong>Garbage Collector:</strong> Handles automatic memory management by reclaiming unused memory.</li>
        <li><strong>Native Method Interface (JNI):</strong> Interface to call libraries and native code (written in languages like C or C++).</li>
        <li><strong>Java Native Interface (JNI):</strong> A framework that allows Java code to interact with native applications written in other languages.</li>
    </ul>

    <h3>Key Features of JVM:</h3>
    <ul>
        <li><strong>Platform-independent:</strong> JVM enables the principle of "Write Once, Run Anywhere (WORA)," as Java bytecode can run on any system that has a JVM.</li>
        <li><strong>Interpretation of Bytecode:</strong> JVM reads and executes Java bytecode.</li>
        <li><strong>Memory Management:</strong> JVM manages memory using a heap and stack for variables and object storage.</li>
        <li><strong>Garbage Collection:</strong> Automatically frees memory by removing unused objects from the heap.</li>
    </ul>

    <h2>Difference Between JDK and JVM</h2>
    <table>
        <tr>
            <th>Aspect</th>
            <th>JDK (Java Development Kit)</th>
            <th>JVM (Java Virtual Machine)</th>
        </tr>
        <tr>
            <td>Definition</td>
            <td>JDK is a software development kit that includes tools for Java development (compiler, debugger, etc.).</td>
            <td>JVM is an engine that runs Java bytecode and makes Java platform-independent.</td>
        </tr>
        <tr>
            <td>Role</td>
            <td>JDK is used for developing and testing Java applications.</td>
            <td>JVM is used for running Java applications.</td>
        </tr>
        <tr>
            <td>Contains</td>
            <td>Contains JRE, Java compiler (javac), Java debugger, and other tools.</td>
            <td>Contains the JVM itself, which is part of the JRE.</td>
        </tr>
        <tr>
            <td>Purpose</td>
            <td>Provides the necessary tools to develop Java applications.</td>
            <td>Executes the bytecode generated by the Java compiler.</td>
        </tr>
        <tr>
            <td>Environment</td>
            <td>Used by developers to write, compile, and debug Java code.</td>
            <td>Used to execute Java bytecode on any platform.</td>
        </tr>
    </table>

</body>
</html>
`;break;
        case 'variables':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables and Data Types in Java</title>
    <style>
        /* Styling for the table */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        /* General page styling */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }

        h1, h2, h3 {
            color: #333;
        }

        ul {
            margin: 10px 0;
            padding: 0;
            list-style: none;
        }

        ul li {
            margin: 5px 0;
        }
    </style>
</head>
<body>

    <h1>Variables and Data Types in Java</h1>

    <h2>Variables in Java</h2>
    <p>A <strong>variable</strong> in Java is a container that holds a value. Each variable must be declared with a specific data type. Once declared, the variable can store values of that data type. Variables help in storing, processing, and retrieving data in a program.</p>

    <h3>Declaration and Initialization</h3>
    <p>In Java, variables are declared using the following syntax:</p>
    <pre><code>data_type variable_name = value;</code></pre>
    <ul>
        <li><strong>data_type:</strong> Specifies the type of data the variable will store (e.g., int, String, double, etc.).</li>
        <li><strong>variable_name:</strong> The name of the variable (e.g., num, name, etc.).</li>
        <li><strong>value:</strong> The actual value the variable holds (optional during declaration, but can be initialized immediately).</li>
    </ul>

    <h3>Types of Variables</h3>
    <ul>
        <li><strong>Local Variables:</strong> Declared inside a method or block, and can only be used within that method or block.</li>
        <li><strong>Instance Variables:</strong> Declared inside a class but outside any method. These variables are associated with an object.</li>
        <li><strong>Class Variables:</strong> Declared with the static keyword. These variables are shared across all instances of the class.</li>
    </ul>

    <h2>Data Types in Java</h2>
    <p>Java provides two main types of data types: <strong>Primitive data types</strong> and <strong>Reference data types</strong>.</p>

    <h3>Primitive Data Types</h3>
    <p>Primitive data types are the most basic data types in Java. They store simple values, such as numbers or characters. Java provides 8 primitive data types:</p>

    <table>
        <tr>
            <th>Data Type</th>
            <th>Size</th>
            <th>Default Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>byte</td>
            <td>1 byte</td>
            <td>0</td>
            <td>Stores integer values from -128 to 127.</td>
        </tr>
        <tr>
            <td>short</td>
            <td>2 bytes</td>
            <td>0</td>
            <td>Stores integer values from -32,768 to 32,767.</td>
        </tr>
        <tr>
            <td>int</td>
            <td>4 bytes</td>
            <td>0</td>
            <td>Stores integer values from -2^31 to 2^31-1.</td>
        </tr>
        <tr>
            <td>long</td>
            <td>8 bytes</td>
            <td>0L</td>
            <td>Stores larger integer values than int, up to 2^63-1.</td>
        </tr>
        <tr>
            <td>float</td>
            <td>4 bytes</td>
            <td>0.0f</td>
            <td>Stores floating-point values with single precision.</td>
        </tr>
        <tr>
            <td>double</td>
            <td>8 bytes</td>
            <td>0.0d</td>
            <td>Stores floating-point values with double precision.</td>
        </tr>
        <tr>
            <td>char</td>
            <td>2 bytes</td>
            <td>'\u0000'</td>
            <td>Stores a single 16-bit Unicode character.</td>
        </tr>
        <tr>
            <td>boolean</td>
            <td>1 bit</td>
            <td>false</td>
            <td>Stores either true or false.</td>
        </tr>
    </table>

    <h3>Reference Data Types</h3>
    <p>Reference data types are used to store references (addresses) to objects in memory. Unlike primitive types, reference types can point to complex objects such as arrays, classes, or interfaces.</p>

    <h4>1. Arrays</h4>
    <p>An <strong>array</strong> is a collection of variables that are of the same type. In Java, arrays are objects, and their size is fixed once defined.</p>
    <p>Arrays allow us to store multiple values in a single variable. For example, we can store an array of integers, strings, or any other objects.</p>
    
    <h5>Operations on Arrays:</h5>
    <ul>
        <li>Declaring an array: <code>int[] arr;</code></li>
        <li>Creating an array: <code>arr = new int[5];</code></li>
        <li>Accessing array elements: <code>arr[0] = 10;</code></li>
        <li>Iterating through an array: <code>for(int i = 0; i < arr.length; i++)</code></li>
    </ul>

    <h4>2. Classes</h4>
    <p>A <strong>class</strong> in Java is a reference data type that defines the properties (fields) and behavior (methods) of an object. A class serves as a blueprint for creating objects (instances).</p>
    <p>Classes allow you to model real-world entities, like a "Car" class that may have fields like color, make, and model, and methods like drive() and stop().</p>

    <h5>Operations on Classes:</h5>
    <ul>
        <li>Creating an object from a class: <code>Car myCar = new Car();</code></li>
        <li>Accessing fields and methods of the object: <code>myCar.drive();</code></li>
        <li>Modifying object properties: <code>myCar.color = "Red";</code></li>
    </ul>

    <h4>3. Interfaces</h4>
    <p>An <strong>interface</strong> is a reference data type in Java that defines a contract of methods that a class must implement. Interfaces allow multiple inheritance of method signatures, enabling the decoupling of functionality.</p>
    
    <h5>Operations on Interfaces:</h5>
    <ul>
        <li>Declaring an interface: <code>interface Animal { }</code></li>
        <li>Implementing an interface in a class: <code>class Dog implements Animal { }</code></li>
        <li>Accessing implemented methods: <code>Dog dog = new Dog();</code></li>
    </ul>

    <h2>Example of Using Reference Data Types</h2>
    <pre><code>
        // Example with Arrays
        public class Main {
            public static void main(String[] args) {
                // Creating and initializing an array
                int[] numbers = {1, 2, 3, 4, 5};
                
                // Accessing elements in the array
                System.out.println("First element: " + numbers[0]);

                // Looping through the array
                for(int i = 0; i < numbers.length; i++) {
                    System.out.println("Element " + i + ": " + numbers[i]);
                }
            }
        }

        // Example with Classes
        class Car {
            String color;
            String make;
            String model;

            void drive() {
                System.out.println("The car is driving.");
            }
        }

        public class Main {
            public static void main(String[] args) {
                // Creating an object of Car class
                Car myCar = new Car();
                myCar.color = "Red";
                myCar.drive();
            }
        }
    </code></pre>

</body>
</html>
`;
            break;
        case 'operators':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operators in Java</title>
    <style>
        /* Styling for the table */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        /* General page styling */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }

        h1, h2, h3 {
            color: #333;
        }

        pre {
            background-color: #f4f4f4;
            padding: 15px;
            border: 1px solid #ddd;
            overflow-x: auto;
            white-space: pre-wrap;
        }

        code {
            font-family: monospace;
            color: #333;
        }
    </style>
</head>
<body>

    <h1>Operators in Java</h1>

    <p>In Java, operators are special symbols that perform operations on variables and values. Java supports several types of operators, including arithmetic, relational, logical, bitwise, assignment, and others.</p>

    <h2>1. Arithmetic Operators</h2>
    <p>Arithmetic operators are used to perform basic mathematical operations such as addition, subtraction, multiplication, division, and modulus.</p>

    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>+</td>
            <td>Addition</td>
            <td><code>int sum = 5 + 3;</code></td>
        </tr>
        <tr>
            <td>-</td>
            <td>Subtraction</td>
            <td><code>int difference = 10 - 4;</code></td>
        </tr>
        <tr>
            <td>*</td>
            <td>Multiplication</td>
            <td><code>int product = 6 * 2;</code></td>
        </tr>
        <tr>
            <td>/</td>
            <td>Division</td>
            <td><code>int quotient = 9 / 3;</code></td>
        </tr>
        <tr>
            <td>%</td>
            <td>Modulus (Remainder)</td>
            <td><code>int remainder = 10 % 3;</code></td>
        </tr>
    </table>

    <h3>Example:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int a = 10, b = 5;
                System.out.println("Addition: " + (a + b));
                System.out.println("Subtraction: " + (a - b));
                System.out.println("Multiplication: " + (a * b));
                System.out.println("Division: " + (a / b));
                System.out.println("Modulus: " + (a % b));
            }
        }
    </code></pre>

    <h2>2. Relational Operators</h2>
    <p>Relational operators are used to compare two values or variables. They return a boolean result: <code>true</code> or <code>false</code>.</p>

    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>==</td>
            <td>Equal to</td>
            <td><code>if (a == b) {}</code></td>
        </tr>
        <tr>
            <td>!=</td>
            <td>Not equal to</td>
            <td><code>if (a != b) {}</code></td>
        </tr>
        <tr>
            <td>&gt;</td>
            <td>Greater than</td>
            <td><code>if (a &gt; b) {}</code></td>
        </tr>
        <tr>
            <td>&lt;</td>
            <td>Less than</td>
            <td><code>if (a &lt; b) {}</code></td>
        </tr>
        <tr>
            <td>&gt;=</td>
            <td>Greater than or equal to</td>
            <td><code>if (a &gt;= b) {}</code></td>
        </tr>
        <tr>
            <td>&lt;=</td>
            <td>Less than or equal to</td>
            <td><code>if (a &lt;= b) {}</code></td>
        </tr>
    </table>

    <h3>Example:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int a = 10, b = 5;
                if (a > b) {
                    System.out.println("a is greater than b");
                }
                if (a != b) {
                    System.out.println("a is not equal to b");
                }
            }
        }
    </code></pre>

    <h2>3. Logical Operators</h2>
    <p>Logical operators are used to combine multiple boolean expressions. They return <code>true</code> or <code>false</code> based on the logical operations.</p>

    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>&&</td>
            <td>Logical AND</td>
            <td><code>if (a > 0 && b > 0) {}</code></td>
        </tr>
        <tr>
            <td>||</td>
            <td>Logical OR</td>
            <td><code>if (a > 0 || b > 0) {}</code></td>
        </tr>
        <tr>
            <td>!</td>
            <td>Logical NOT</td>
            <td><code>if (!(a > 0)) {}</code></td>
        </tr>
    </table>

    <h3>Example:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int a = 10, b = 5;
                if (a > 0 && b > 0) {
                    System.out.println("Both a and b are positive");
                }
                if (a > 0 || b > 0) {
                    System.out.println("At least one of a or b is positive");
                }
            }
        }
    </code></pre>

    <h2>4. Bitwise Operators</h2>
    <p>Bitwise operators perform operations on individual bits of integer values. They are mainly used in low-level programming.</p>

    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>&amp;</td>
            <td>Bitwise AND</td>
            <td><code>int result = a &amp; b;</code></td>
        </tr>
        <tr>
            <td>|</td>
            <td>Bitwise OR</td>
            <td><code>int result = a | b;</code></td>
        </tr>
        <tr>
            <td>^</td>
            <td>Bitwise XOR</td>
            <td><code>int result = a ^ b;</code></td>
        </tr>
        <tr>
            <td>~</td>
            <td>Bitwise NOT</td>
            <td><code>int result = ~a;</code></td>
        </tr>
        <tr>
            <td>&lt;&lt;</td>
            <td>Left shift</td>
            <td><code>int result = a &lt;&lt; 2;</code></td>
        </tr>
        <tr>
            <td>&gt;&gt;</td>
            <td>Right shift</td>
            <td><code>int result = a &gt;&gt; 2;</code></td>
        </tr>
    </table>

    <h3>Example:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int a = 5, b = 3;
                System.out.println("Bitwise AND: " + (a & b));
                System.out.println("Bitwise OR: " + (a | b));
                System.out.println("Bitwise XOR: " + (a ^ b));
                System.out.println("Left shift: " + (a << 1));
                System.out.println("Right shift: " + (a >> 1));
            }
        }
    </code></pre>

    <h2>5. Assignment Operators</h2>
    <p>Assignment operators are used to assign values to variables.</p>

    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>=</td>
            <td>Simple assignment</td>
            <td><code>int a = 10;</code></td>
        </tr>
        <tr>
            <td>+=</td>
            <td>Add and assign</td>
            <td><code>a += 5;</code></td>
        </tr>
        <tr>
            <td>-=</td>
            <td>Subtract and assign</td>
            <td><code>a -= 3;</code></td>
        </tr>
        <tr>
            <td>*=</td>
            <td>Multiply and assign</td>
            <td><code>a *= 2;</code></td>
        </tr>
        <tr>
            <td>/=</td>
            <td>Divide and assign</td>
            <td><code>a /= 4;</code></td>
        </tr>
        <tr>
            <td>%=</td>
            <td>Modulus and assign</td>
            <td><code>a %= 3;</code></td>
        </tr>
    </table>

    <h3>Example:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int a = 10;
                a += 5; // a = a + 5
                System.out.println("After +=: " + a);
                a -= 3; // a = a - 3
                System.out.println("After -=: " + a);
            }
        }
    </code></pre>

</body>
</html>
`;
            break;
            case "input":
                contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input and Output in Java</title>
    <style>
        /* Styling for the table */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        /* General page styling */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }

        h1, h2, h3 {
            color: #333;
        }

        pre {
            background-color: #f4f4f4;
            padding: 15px;
            border: 1px solid #ddd;
            overflow-x: auto;
            white-space: pre-wrap;
        }

        code {
            font-family: monospace;
            color: #333;
        }
    </style>
</head>
<body>

    <h1>Input and Output in Java</h1>

    <p>In Java, input and output (I/O) are handled through various classes provided in the Java API. The primary classes used for input and output in Java are part of the <strong>java.io</strong> package.</p>

    <h2>1. Output in Java</h2>
    <p>Output is the process of displaying data to the user. In Java, the most common way to display data is using the <code>System.out</code> object, which represents the standard output stream.</p>

    <h3>1.1. Using <code>System.out.print()</code> and <code>System.out.println()</code></h3>
    <p>Both <code>System.out.print()</code> and <code>System.out.println()</code> are used to output text to the console. The difference is that <code>System.out.println()</code> moves the cursor to a new line after printing, while <code>System.out.print()</code> does not.</p>

    <table>
        <tr>
            <th>Method</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td><code>System.out.print()</code></td>
            <td>Displays the output on the same line.</td>
            <td><code>System.out.print("Hello ");</code></td>
        </tr>
        <tr>
            <td><code>System.out.println()</code></td>
            <td>Displays the output and moves to a new line.</td>
            <td><code>System.out.println("World!");</code></td>
        </tr>
    </table>

    <h3>Example:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                System.out.print("Hello ");
                System.out.println("World!");
            }
        }
    </code></pre>

    <h2>2. Input in Java</h2>
    <p>Input is the process of receiving data from the user. The most commonly used class for input in Java is <code>Scanner</code>, which is part of the <strong>java.util</strong> package.</p>

    <h3>2.1. Using <code>Scanner</code> Class</h3>
    <p>The <code>Scanner</code> class is used to read input from the user. You need to import the <code>java.util.Scanner</code> package before using it.</p>

    <table>
        <tr>
            <th>Method</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td><code>nextLine()</code></td>
            <td>Reads a line of text from the user.</td>
            <td><code>String input = scanner.nextLine();</code></td>
        </tr>
        <tr>
            <td><code>nextInt()</code></td>
            <td>Reads an integer value from the user.</td>
            <td><code>int num = scanner.nextInt();</code></td>
        </tr>
        <tr>
            <td><code>nextDouble()</code></td>
            <td>Reads a double value from the user.</td>
            <td><code>double value = scanner.nextDouble();</code></td>
        </tr>
    </table>

    <h3>Example:</h3>
    <pre><code>
        import java.util.Scanner;

        public class Main {
            public static void main(String[] args) {
                Scanner scanner = new Scanner(System.in);
                
                System.out.print("Enter your name: ");
                String name = scanner.nextLine();
                
                System.out.print("Enter your age: ");
                int age = scanner.nextInt();
                
                System.out.println("Hello, " + name + "! You are " + age + " years old.");
            }
        }
    </code></pre>

    <h2>3. Handling Different Data Types</h2>
    <p>The <code>Scanner</code> class provides methods for inputting various types of data such as strings, integers, doubles, etc.</p>

    <h3>3.1. Reading Strings</h3>
    <p>To read a string input, use <code>nextLine()</code>.</p>
    <pre><code>
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
    </code></pre>

    <h3>3.2. Reading Integers</h3>
    <p>To read an integer, use <code>nextInt()</code>.</p>
    <pre><code>
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
    </code></pre>

    <h3>3.3. Reading Doubles</h3>
    <p>To read a double, use <code>nextDouble()</code>.</p>
    <pre><code>
        System.out.print("Enter your salary: ");
        double salary = scanner.nextDouble();
    </code></pre>

    <h2>4. Error Handling in Input</h2>
    <p>When using the <code>Scanner</code> class, it is important to handle input errors, especially when the user inputs an unexpected data type.</p>

    <h3>4.1. Handling Invalid Input</h3>
    <p>You can use a <code>try-catch</code> block to handle exceptions like <code>InputMismatchException</code> if the user enters an incorrect type of input.</p>

    <pre><code>
        try {
            int age = scanner.nextInt();
        } catch (InputMismatchException e) {
            System.out.println("Invalid input. Please enter an integer.");
        }
    </code></pre>

    <h2>5. Closing the Scanner</h2>
    <p>It is a good practice to close the <code>Scanner</code> object once it is no longer needed to free up resources. Use <code>scanner.close();</code> to close the scanner.</p>

    <pre><code>
        scanner.close();
    </code></pre>

</body>
</html>
`;break;
        case 'controlflow':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Control Flow Statements in Java</title>
    <style>
        /* Styling for the table */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        /* General page styling */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }

        h1, h2, h3 {
            color: #333;
        }

        pre {
            background-color: #f4f4f4;
            padding: 15px;
            border: 1px solid #ddd;
            overflow-x: auto;
            white-space: pre-wrap;
        }

        code {
            font-family: monospace;
            color: #333;
        }
    </style>
</head>
<body>

    <h1>Control Flow Statements in Java</h1>

    <p>Control flow statements in Java allow us to dictate the order in which code is executed. They include conditional statements, looping statements, and branching statements. In this section, we'll explain these control flow statements in detail, along with examples for each type.</p>

    <h2>1. Conditional Statements</h2>
    <p>Conditional statements allow us to execute different sections of code based on whether a condition is true or false.</p>

    <h3>1.1. if Statement</h3>
    <p>The <code>if</code> statement evaluates a condition and executes a block of code if the condition is true.</p>

    <pre><code>
        if (condition) {
            // block of code
        }
    </code></pre>

    <h3>Example 1:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int age = 18;
                if (age >= 18) {
                    System.out.println("You are eligible to vote.");
                }
            }
        }
    </code></pre>
    <p>In this example, we check if the value of <code>age</code> is greater than or equal to 18. If true, the program prints "You are eligible to vote." Since the age is 18, the output will be displayed.</p>

    <h3>Example 2:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int score = 75;
                if (score >= 50) {
                    System.out.println("You passed the exam.");
                }
            }
        }
    </code></pre>
    <p>This example checks if the <code>score</code> is greater than or equal to 50. If true, it prints "You passed the exam." Since the score is 75, the message is printed to the console.</p>

    <h3>1.2. if-else Statement</h3>
    <p>The <code>if-else</code> statement allows you to specify an alternative block of code to execute if the condition is false.</p>

    <pre><code>
        if (condition) {
            // block of code if condition is true
        } else {
            // block of code if condition is false
        }
    </code></pre>

    <h3>Example 1:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int num = 10;
                if (num % 2 == 0) {
                    System.out.println("The number is even.");
                } else {
                    System.out.println("The number is odd.");
                }
            }
        }
    </code></pre>
    <p>This example checks whether the number <code>num</code> is even or odd using the modulo operator (%). If the number is divisible by 2 (i.e., the remainder is 0), the message "The number is even" is printed. Otherwise, "The number is odd" is printed.</p>

    <h3>Example 2:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int age = 16;
                if (age >= 18) {
                    System.out.println("You can drive.");
                } else {
                    System.out.println("You are too young to drive.");
                }
            }
        }
    </code></pre>
    <p>This example checks if the value of <code>age</code> is greater than or equal to 18. Since the age is 16, the condition is false, and the output will be "You are too young to drive."</p>

    <h2>2. Looping Statements</h2>
    <p>Looping statements allow us to repeatedly execute a block of code until a condition is met.</p>

    <h3>2.1. for Loop</h3>
    <p>The <code>for</code> loop is used to repeat a block of code a specific number of times.</p>

    <pre><code>
        for (initialization; condition; increment/decrement) {
            // block of code
        }
    </code></pre>

    <h3>Example 1:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                for (int i = 1; i <= 5; i++) {
                    System.out.println("The value of i is: " + i);
                }
            }
        }
    </code></pre>
    <p>This <code>for</code> loop runs from 1 to 5. Each time it runs, the current value of <code>i</code> is printed. The loop will execute 5 times, and the numbers 1 to 5 will be printed to the console.</p>

    <h3>Example 2:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                for (int i = 1; i <= 10; i++) {
                    if (i % 2 == 0) {
                        System.out.println(i + " is even.");
                    } else {
                        System.out.println(i + " is odd.");
                    }
                }
            }
        }
    </code></pre>
    <p>This <code>for</code> loop runs from 1 to 10. For each iteration, the program checks if <code>i</code> is even or odd using the modulo operator (%). The corresponding message is printed based on the result.</p>

    <h3>2.2. while Loop</h3>
    <p>The <code>while</code> loop repeats a block of code as long as a condition is true.</p>

    <pre><code>
        while (condition) {
            // block of code
        }
    </code></pre>

    <h3>Example 1:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int i = 1;
                while (i <= 5) {
                    System.out.println("The value of i is: " + i);
                    i++;
                }
            }
        }
    </code></pre>
    <p>This <code>while</code> loop prints the value of <code>i</code> as long as <code>i <= 5</code>. The value of <code>i</code> starts from 1 and is incremented by 1 on each iteration, printing values from 1 to 5.</p>

    <h3>Example 2:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int num = 10;
                while (num > 0) {
                    System.out.println("Countdown: " + num);
                    num--;
                }
            }
        }
    </code></pre>
    <p>This <code>while</code> loop continues printing the value of <code>num</code> and decrements it on each iteration. The loop stops when <code>num</code> becomes 0.</p>

    <h3>2.3. do-while Loop</h3>
    <p>The <code>do-while</code> loop is similar to the <code>while</code> loop, but it guarantees that the loop will execute at least once, even if the condition is false initially.</p>

    <pre><code>
        do {
            // block of code
        } while (condition);
    </code></pre>

    <h3>Example 1:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int i = 1;
                do {
                    System.out.println("The value of i is: " + i);
                    i++;
                } while (i <= 5);
            }
        }
    </code></pre>
    <p>This <code>do-while</code> loop prints values of <code>i</code> from 1 to 5. Since the condition is checked after the loop's body, the loop will execute at least once, even if <code>i</code> starts at a higher value.</p>

    <h3>Example 2:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int num = 5;
                do {
                    System.out.println("Countdown: " + num);
                    num--;
                } while (num > 0);
            }
        }
    </code></pre>
    <p>This <code>do-while</code> loop decrements <code>num</code> and prints the countdown values until <code>num</code> becomes 0. The loop will execute at least once.</p>

    <h2>3. Branching Statements</h2>
    <p>Branching statements allow us to transfer control to other parts of the program, typically based on conditions.</p>

    <h3>3.1. break Statement</h3>
    <p>The <code>break</code> statement is used to exit a loop or switch statement prematurely.</p>

    <pre><code>
        break;
    </code></pre>

    <h3>Example 1:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                for (int i = 1; i <= 5; i++) {
                    if (i == 3) {
                        break;
                    }
                    System.out.println("i = " + i);
                }
            }
        }
    </code></pre>
    <p>This loop runs from 1 to 5, but when <code>i == 3</code>, the <code>break</code> statement is executed, exiting the loop prematurely.</p>

    <h3>Example 2:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int num = 1;
                while (num <= 5) {
                    if (num == 3) {
                        break;
                    }
                    System.out.println("num = " + num);
                    num++;
                }
            }
        }
    </code></pre>
    <p>This example shows how the <code>break</code> statement can exit a loop when a condition is met, stopping the iteration at <code>num == 3</code>.</p>

    <h3>3.2. continue Statement</h3>
    <p>The <code>continue</code> statement is used to skip the current iteration of a loop and move to the next iteration.</p>

    <pre><code>
        continue;
    </code></pre>

    <h3>Example 1:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                for (int i = 1; i <= 5; i++) {
                    if (i == 3) {
                        continue;
                    }
                    System.out.println("i = " + i);
                }
            }
        }
    </code></pre>
    <p>This example demonstrates the use of <code>continue</code> in a loop. When <code>i == 3</code>, the loop skips the current iteration and proceeds to the next one, so "i = 3" is not printed.</p>

    <h3>Example 2:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int num = 1;
                while (num <= 5) {
                    if (num == 3) {
                        num++;
                        continue;
                    }
                    System.out.println("num = " + num);
                    num++;
                }
            }
        }
    </code></pre>
    <p>In this example, the loop skips the iteration when <code>num == 3</code>, so "num = 3" is not printed.</p>

    <h3>3.3. return Statement</h3>
    <p>The <code>return</code> statement is used to exit a method and optionally return a value.</p>

    <pre><code>
        return;
        return value;
    </code></pre>

    <h3>Example 1:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                System.out.println("Before return statement.");
                return;
                System.out.println("This will not be executed.");
            }
        }
    </code></pre>
    <p>The program will print "Before return statement." and then exit the method. The second <code>System.out.println()</code> statement will never be executed.</p>

    <h3>Example 2:</h3>
    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int result = add(5, 10);
                System.out.println("Result: " + result);
            }

            public static int add(int a, int b) {
                return a + b;
            }
        }
    </code></pre>
    <p>This example defines a method that returns the sum of two numbers. The <code>add()</code> method returns the result, which is printed in the <code>main()</code> method.</p>

</body>
</html>
`;
            break;
        case 'loops':
            contentArea.innerHTML = '<h1>Loops</h1><p>Java provides various looping mechanisms such as for, while, and do-while loops.</p>';
            break;
        case 'methods':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Methods in Java</title>
    <style>
        /* Styling for the table */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        /* General page styling */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }

        h1, h2, h3 {
            color: #333;
        }

        pre {
            background-color: #f4f4f4;
            padding: 15px;
            border: 1px solid #ddd;
            overflow-x: auto;
            white-space: pre-wrap;
        }

        code {
            font-family: monospace;
            color: #333;
        }
    </style>
</head>
<body>

    <h1>Methods in Java</h1>
    <p>In Java, a method is a block of code that performs a specific task, typically to execute a particular action or compute a value. Methods allow us to reuse code, improve program organization, and make our code modular. In this section, we will cover the basics of methods in Java, including different types of methods, and provide examples for better understanding.</p>

    <h2>1. Method Basics</h2>
    <p>A method in Java consists of the following components:</p>
    <ul>
        <li><b>Access Modifier:</b> Defines the visibility of the method (e.g., public, private).</li>
        <li><b>Return Type:</b> Specifies what type of value the method will return (e.g., int, void, String). The method can also return no value, in which case the return type is <code>void</code>.</li>
        <li><b>Method Name:</b> The name used to refer to the method.</li>
        <li><b>Parameters:</b> A list of inputs to the method, enclosed in parentheses.</li>
        <li><b>Method Body:</b> The block of code that defines what the method does, enclosed in curly braces <code>{ }</code>.</li>
    </ul>

    <h2>2. Method Declaration and Definition</h2>
    <p>A simple method is declared as follows:</p>

    <pre><code>
        accessModifier returnType methodName(parameters) {
            // Method body
        }
    </code></pre>

    <h2>3. Example 1: A Simple Method</h2>
    <p>Here is an example of a simple method that prints a greeting message:</p>

    <pre><code>
        public class Main {
            // Method declaration
            public static void greet() {
                System.out.println("Hello, welcome to Java methods!");
            }

            public static void main(String[] args) {
                greet(); // Calling the method
            }
        }
    </code></pre>
    <p>The <code>greet()</code> method is declared with the access modifier <code>public</code>, the return type <code>void</code> (since it doesn't return anything), and no parameters. It is called in the <code>main()</code> method, which will display "Hello, welcome to Java methods!" when executed.</p>

    <h2>4. Example 2: Method with Parameters</h2>
    <p>Methods can accept parameters to perform operations with them. Here is an example:</p>

    <pre><code>
        public class Main {
            // Method with parameters
            public static void greetUser(String name) {
                System.out.println("Hello, " + name + "!");
            }

            public static void main(String[] args) {
                greetUser("Alice");
            }
        }
    </code></pre>
    <p>The method <code>greetUser(String name)</code> takes a single parameter <code>name</code> and prints a personalized greeting. In this case, the output will be "Hello, Alice!".</p>

    <h2>5. Example 3: Method with Return Type</h2>
    <p>Methods can return values using the <code>return</code> keyword. Here is an example of a method that returns a value:</p>

    <pre><code>
        public class Main {
            // Method with return type
            public static int add(int a, int b) {
                return a + b;
            }

            public static void main(String[] args) {
                int result = add(5, 3); // Calling the method
                System.out.println("The sum is: " + result);
            }
        }
    </code></pre>
    <p>The <code>add(int a, int b)</code> method accepts two integer parameters and returns their sum. The method returns an integer value, which is stored in the <code>result</code> variable and printed to the console.</p>

    <h2>6. Example 4: Method Overloading</h2>
    <p>Method overloading allows you to define multiple methods with the same name but different parameter lists. Here's an example:</p>

    <pre><code>
        public class Main {
            // Overloaded method with two parameters
            public static int add(int a, int b) {
                return a + b;
            }

            // Overloaded method with three parameters
            public static int add(int a, int b, int c) {
                return a + b + c;
            }

            public static void main(String[] args) {
                System.out.println("Sum of two numbers: " + add(2, 3));
                System.out.println("Sum of three numbers: " + add(2, 3, 4));
            }
        }
    </code></pre>
    <p>The two <code>add()</code> methods have the same name but differ in the number of parameters. The appropriate method is chosen based on the number of arguments passed during the method call.</p>

    <h2>7. Example 5: Recursive Method</h2>
    <p>Recursive methods call themselves to solve smaller instances of the same problem. Here's an example of a factorial method:</p>

    <pre><code>
        public class Main {
            // Recursive method for calculating factorial
            public static int factorial(int n) {
                if (n == 0) {
                    return 1;
                }
                return n * factorial(n - 1);
            }

            public static void main(String[] args) {
                System.out.println("Factorial of 5: " + factorial(5));
            }
        }
    </code></pre>
    <p>The <code>factorial()</code> method calls itself until it reaches the base case <code>n == 0</code>, at which point it returns 1. For <code>factorial(5)</code>, the method will return 120.</p>

    <h2>8. Example 6: Method with Multiple Parameters</h2>
    <p>Methods can accept multiple parameters. Here's an example:</p>

    <pre><code>
        public class Main {
            // Method with multiple parameters
            public static void displayInfo(String name, int age) {
                System.out.println("Name: " + name);
                System.out.println("Age: " + age);
            }

            public static void main(String[] args) {
                displayInfo("Alice", 25);
            }
        }
    </code></pre>
    <p>The method <code>displayInfo(String name, int age)</code> takes two parameters: a String <code>name</code> and an integer <code>age</code>, and displays both values when called.</p>

    <h2>9. Example 7: Method with Varargs (Variable Length Arguments)</h2>
    <p>Varargs allows you to pass a variable number of arguments to a method. Here's an example:</p>

    <pre><code>
        public class Main {
            // Method with varargs
            public static void printNumbers(int... numbers) {
                for (int num : numbers) {
                    System.out.println(num);
                }
            }

            public static void main(String[] args) {
                printNumbers(1, 2, 3, 4, 5); // Passing multiple arguments
            }
        }
    </code></pre>
    <p>The method <code>printNumbers(int... numbers)</code> uses varargs to accept any number of integer arguments, which are iterated over in the method body.</p>

    <h2>10. Example 8: Static Method</h2>
    <p>A static method belongs to the class rather than an instance of the class. Here's an example:</p>

    <pre><code>
        public class Main {
            // Static method
            public static void displayMessage() {
                System.out.println("This is a static method.");
            }

            public static void main(String[] args) {
                displayMessage(); // Calling the static method
            }
        }
    </code></pre>
    <p>The method <code>displayMessage()</code> is declared as static and can be called without creating an instance of the class. Static methods are typically used for utility functions.</p>

    <h2>11. Example 9: Instance Method</h2>
    <p>An instance method is tied to an object of the class. Here's an example:</p>

    <pre><code>
        public class Main {
            // Instance method
            public void greet() {
                System.out.println("Hello from the instance method!");
            }

            public static void main(String[] args) {
                Main obj = new Main();
                obj.greet(); // Calling the instance method
            }
        }
    </code></pre>
    <p>The method <code>greet()</code> is an instance method, meaning it is called on an object of the class. The object <code>obj</code> is created and the method is invoked.</p>

    <h2>12. Example 10: Method with Return and Parameters</h2>
    <p>This method accepts parameters, performs a computation, and returns the result:</p>

    <pre><code>
        public class Main {
            // Method that accepts parameters and returns a value
            public static int multiply(int a, int b) {
                return a * b;
            }

            public static void main(String[] args) {
                int result = multiply(4, 6);
                System.out.println("Product: " + result);
            }
        }
    </code></pre>
    <p>The method <code>multiply(int a, int b)</code> returns the product of two integers. The result is printed in the <code>main()</code> method.</p>

</body>
</html>
`;
            break;
        case 'arrays':
            contentArea.innerHTML =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrays in Java</title>
    <style>
        /* Styling for the table */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        /* General page styling */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }

        h1, h2, h3 {
            color: #333;
        }

        pre {
            background-color: #f4f4f4;
            padding: 15px;
            border: 1px solid #ddd;
            overflow-x: auto;
            white-space: pre-wrap;
        }

        code {
            font-family: monospace;
            color: #333;
        }
    </style>
</head>
<body>

    <h1>Arrays in Java</h1>
    <p>In Java, an array is a data structure that allows us to store multiple values of the same type in a single variable. Arrays are useful when we want to store a collection of related data and perform operations on it.</p>

    <h2>1. What is an Array?</h2>
    <p>An array is a container object that holds a fixed number of values of a single type. Each element in an array is accessed by its index, starting from 0.</p>
    <p>Arrays in Java are objects, which means they have a length and can be passed to methods or assigned to variables like other objects.</p>

    <h2>2. Declaring an Array</h2>
    <p>To declare an array in Java, we specify the type of elements the array will hold, followed by square brackets <code>[]</code>, and then the variable name.</p>

    <pre><code>
        int[] numbers; // Declares an array of integers
        String[] names; // Declares an array of Strings
    </code></pre>

    <p>After declaration, we must initialize the array using the <code>new</code> keyword.</p>

    <pre><code>
        numbers = new int[5]; // Initializes the array to hold 5 integers
        names = new String[3]; // Initializes the array to hold 3 strings
    </code></pre>

    <h2>3. Initializing an Array</h2>
    <p>We can initialize an array during its declaration using an initializer list:</p>

    <pre><code>
        int[] numbers = {1, 2, 3, 4, 5}; // Array with 5 elements
        String[] names = {"Alice", "Bob", "Charlie"}; // Array with 3 elements
    </code></pre>

    <p>This creates an array and assigns values to it in a single line.</p>

    <h2>4. Accessing Array Elements</h2>
    <p>Each element in an array is accessed using its index. The index starts from 0 for the first element. Here's an example of accessing array elements:</p>

    <pre><code>
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println(numbers[0]); // Accesses the first element (1)
        System.out.println(numbers[3]); // Accesses the fourth element (4)
    </code></pre>

    <p>In this example, <code>numbers[0]</code> accesses the first element, and <code>numbers[3]</code> accesses the fourth element.</p>

    <h2>5. Length of an Array</h2>
    <p>To get the length of an array, you can use the <code>length</code> property, which returns the number of elements in the array:</p>

    <pre><code>
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println("Length of the array: " + numbers.length); // Prints 5
    </code></pre>

    <p>The length property gives the total number of elements in the array.</p>

    <h2>6. Example 1: Simple Array</h2>
    <p>Here’s an example of a simple array containing integers:</p>

    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int[] numbers = {1, 2, 3, 4, 5};
                for (int i = 0; i < numbers.length; i++) {
                    System.out.println(numbers[i]);
                }
            }
        }
    </code></pre>

    <p>This example declares an integer array and uses a loop to print all the elements of the array. The <code>numbers.length</code> is used to determine the number of iterations for the loop.</p>

    <h2>7. Operations on Arrays</h2>
    <p>There are several common operations that we can perform on arrays in Java:</p>

    <ul>
        <li><b>Accessing Elements:</b> Using indices to get or set values in an array.</li>
        <li><b>Iterating Through an Array:</b> Using loops to process each element.</li>
        <li><b>Sorting an Array:</b> Using the <code>Arrays.sort()</code> method to sort elements.</li>
        <li><b>Copying Arrays:</b> Using <code>System.arraycopy()</code> or <code>Arrays.copyOf()</code> to copy arrays.</li>
        <li><b>Searching in an Array:</b> Searching for an element using loops or the <code>Arrays.binarySearch()</code> method.</li>
    </ul>

    <h2>8. Example 2: Iterating Through an Array</h2>
    <p>Here’s an example of iterating through an array using a <code>for-each</code> loop:</p>

    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int[] numbers = {10, 20, 30, 40, 50};
                for (int num : numbers) {
                    System.out.println(num);
                }
            }
        }
    </code></pre>

    <p>This example uses a <code>for-each</code> loop to iterate through the elements of the array and print each element.</p>

    <h2>9. Example 3: Sorting an Array</h2>
    <p>Here’s how to sort an array using the <code>Arrays.sort()</code> method:</p>

    <pre><code>
        import java.util.Arrays;

        public class Main {
            public static void main(String[] args) {
                int[] numbers = {5, 2, 8, 1, 3};
                Arrays.sort(numbers);
                System.out.println("Sorted array: " + Arrays.toString(numbers));
            }
        }
    </code></pre>

    <p>The <code>Arrays.sort()</code> method sorts the elements of the array in ascending order. The sorted array is then printed using <code>Arrays.toString()</code>.</p>

    <h2>10. Example 4: Copying an Array</h2>
    <p>Here’s an example of copying an array using <code>System.arraycopy()</code>:</p>

    <pre><code>
        public class Main {
            public static void main(String[] args) {
                int[] original = {1, 2, 3, 4, 5};
                int[] copy = new int[5];
                System.arraycopy(original, 0, copy, 0, original.length);
                System.out.println("Copied array: " + Arrays.toString(copy));
            }
        }
    </code></pre>

    <p>The <code>System.arraycopy()</code> method copies elements from the <code>original</code> array to the <code>copy</code> array. The parameters specify the source and destination arrays, starting positions, and the number of elements to copy.</p>

    <h2>11. Example 5: Searching in an Array</h2>
    <p>Here’s how you can search for an element in an array using <code>Arrays.binarySearch()</code>:</p>

    <pre><code>
        import java.util.Arrays;

        public class Main {
            public static void main(String[] args) {
                int[] numbers = {1, 2, 3, 4, 5};
                int index = Arrays.binarySearch(numbers, 3); // Searching for 3
                System.out.println("Index of 3: " + index);
            }
        }
    </code></pre>

    <p>The <code>Arrays.binarySearch()</code> method searches for a specific element in a sorted array. If the element is found, it returns the index of the element; otherwise, it returns a negative value.</p>

</body>
</html>
`;
            break;
        case 'strings':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strings in Java</title>
    <style>
        /* Styling for the table */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        /* General page styling */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }

        h1, h2, h3 {
            color: #333;
        }

        pre {
            background-color: #f4f4f4;
            padding: 15px;
            border: 1px solid #ddd;
            overflow-x: auto;
            white-space: pre-wrap;
        }

        code {
            font-family: monospace;
            color: #333;
        }
    </style>
</head>
<body>

    <h1>Strings in Java</h1>
    <p>Strings in Java are objects of the <code>String</code> class. Strings are immutable, which means once created, their content cannot be changed.</p>

    <h2>Example 1: String Declaration</h2>
    <p>To declare a string in Java, you can use the <code>String</code> class followed by the variable name:</p>

    <pre><code>
        public class StringExample {
            public static void main(String[] args) {
                String greeting = "Hello, World!";
                System.out.println(greeting);
            }
        }
    </code></pre>

    <p>This example declares a string variable <code>greeting</code> and initializes it with the value "Hello, World!". The string is then printed to the console using <code>System.out.println()</code>.</p>

    <h2>Example 2: String Concatenation</h2>
    <p>In Java, you can concatenate strings using the <code>+</code> operator:</p>

    <pre><code>
        public class StringConcatenation {
            public static void main(String[] args) {
                String firstName = "Alice";
                String lastName = "Smith";
                String fullName = firstName + " " + lastName;
                System.out.println(fullName);
            }
        }
    </code></pre>

    <p>In this example, we concatenate <code>firstName</code> and <code>lastName</code> with a space between them, and store the result in <code>fullName</code>. The result is printed as "Alice Smith".</p>

    <h2>Example 3: Finding the Length of a String</h2>
    <p>To find the length of a string, use the <code>length()</code> method:</p>

    <pre><code>
        public class StringLength {
            public static void main(String[] args) {
                String message = "Hello!";
                int length = message.length();
                System.out.println("Length of message: " + length);
            }
        }
    </code></pre>

    <p>The <code>length()</code> method returns the number of characters in the string, which includes letters, spaces, and punctuation. In this case, the length of "Hello!" is 6.</p>

    <h2>Example 4: Accessing Characters in a String</h2>
    <p>You can access individual characters in a string using the <code>charAt()</code> method:</p>

    <pre><code>
        public class AccessCharacter {
            public static void main(String[] args) {
                String message = "Hello!";
                char firstChar = message.charAt(0);
                System.out.println("First character: " + firstChar);
            }
        }
    </code></pre>

    <p>The <code>charAt(0)</code> method retrieves the first character of the string (index 0), which is "H".</p>

    <h2>Example 5: String Comparison</h2>
    <p>Use the <code>equals()</code> method to compare strings:</p>

    <pre><code>
        public class StringComparison {
            public static void main(String[] args) {
                String str1 = "apple";
                String str2 = "apple";
                String str3 = "banana";
                
                System.out.println(str1.equals(str2)); // True
                System.out.println(str1 == str3);       // False
            }
        }
    </code></pre>

    <p>The <code>equals()</code> method compares the content of two strings. The <code>==</code> operator compares whether two string references point to the same object in memory.</p>

    <h2>Example 6: Convert to Uppercase</h2>
    <p>To convert a string to uppercase, use the <code>toUpperCase()</code> method:</p>

    <pre><code>
        public class ToUpperCaseExample {
            public static void main(String[] args) {
                String message = "hello";
                String upperMessage = message.toUpperCase();
                System.out.println(upperMessage);
            }
        }
    </code></pre>

    <p>The <code>toUpperCase()</code> method converts all characters of the string to uppercase. The output will be "HELLO".</p>

    <h2>Example 7: Substring Example</h2>
    <p>Use the <code>substring()</code> method to extract a part of the string:</p>

    <pre><code>
        public class SubstringExample {
            public static void main(String[] args) {
                String message = "Hello, World!";
                String subMessage = message.substring(7, 12);
                System.out.println(subMessage);
            }
        }
    </code></pre>

    <p>The <code>substring(7, 12)</code> method extracts a portion of the string starting at index 7 (inclusive) and ending at index 12 (exclusive). The output is "World".</p>

    <h2>Example 8: Replacing Substring</h2>
    <p>To replace a part of a string, use the <code>replace()</code> method:</p>

    <pre><code>
        public class ReplaceExample {
            public static void main(String[] args) {
                String message = "I love Java";
                String newMessage = message.replace("love", "enjoy");
                System.out.println(newMessage);
            }
        }
    </code></pre>

    <p>The <code>replace()</code> method replaces all occurrences of the specified substring with a new substring. In this example, "love" is replaced with "enjoy". The output will be "I enjoy Java".</p>

    <h2>Example 9: Trim Whitespace</h2>
    <p>The <code>trim()</code> method removes leading and trailing whitespace from a string:</p>

    <pre><code>
        public class TrimExample {
            public static void main(String[] args) {
                String message = "   Hello World!   ";
                String trimmedMessage = message.trim();
                System.out.println(trimmedMessage);
            }
        }
    </code></pre>

    <p>The <code>trim()</code> method removes extra spaces before and after the string. The output will be "Hello World!".</p>

    <h2>Example 10: String Conversion</h2>
    <p>Strings can be converted to integers and vice versa:</p>

    <pre><code>
        public class StringConversion {
            public static void main(String[] args) {
                String numberString = "123";
                int number = Integer.parseInt(numberString);
                System.out.println(number);
                
                int num = 456;
                String numString = String.valueOf(num);
                System.out.println(numString);
            }
        }
    </code></pre>

    <p>The <code>Integer.parseInt()</code> method converts a string to an integer, while <code>String.valueOf()</code> converts an integer to a string.</p>

    <h2>Summary of String Operations</h2>
    <table>
        <tr>
            <th>Operation</th>
            <th>Method</th>
            <th>Example</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>Convert to Uppercase</td>
            <td><code>toUpperCase()</code></td>
            <td><code>"hello".toUpperCase()</code></td>
            <td>HELLO</td>
        </tr>
        <tr>
            <td>Extract Substring</td>
            <td><code>substring()</code></td>
            <td><code>"hello".substring(1, 4)</code></td>
            <td>ell</td>
        </tr>
        <tr>
            <td>Replace Text</td>
            <td><code>replace()</code></td>
            <td><code>"I love Java".replace("love", "enjoy")</code></td>
            <td>I enjoy Java</td>
        </tr>
        <tr>
            <td>Trim Whitespace</td>
            <td><code>trim()</code></td>
            <td><code>"  Hello World!  ".trim()</code></td>
            <td>Hello World!</td>
        </tr>
        <tr>
            <td>Convert to Integer</td>
            <td><code>Integer.parseInt()</code></td>
            <td><code>Integer.parseInt("123")</code></td>
            <td>123</td>
        </tr>
    </table>

</body>
</html>
`;
            break;
        case 'exception':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exception Handling in Java</title>
    <style>
        /* Styling for the table */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #4CAF50;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        /* General page styling */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }

        h1, h2, h3 {
            color: #333;
        }

        pre {
            background-color: #f4f4f4;
            padding: 15px;
            border: 1px solid #ddd;
            overflow-x: auto;
            white-space: pre-wrap;
        }

        code {
            font-family: monospace;
            color: #333;
        }
    </style>
</head>
<body>

    <h1>Exception Handling in Java</h1>
    <p>Exception handling is a mechanism in Java that allows a program to deal with runtime errors, ensuring that the program can continue executing even when an unexpected situation arises. In Java, exceptions are represented by objects, and they can be handled using <code>try</code>, <code>catch</code>, <code>finally</code>, and <code>throw</code> blocks.</p>

    <h2>What is an Exception?</h2>
    <p>An exception is an event that disrupts the normal flow of a program. It occurs at runtime and can be caused by various reasons such as invalid user input, unavailable resources, or errors in logic. When an exception occurs, the program creates an exception object and looks for a block of code that handles the exception.</p>

    <h2>Types of Exceptions</h2>
    <p>There are two main types of exceptions in Java:</p>
    <ul>
        <li><strong>Checked Exceptions</strong>: These are exceptions that are checked at compile-time. Example: <code>IOException</code>, <code>SQLException</code>.</li>
        <li><strong>Unchecked Exceptions</strong>: These are exceptions that occur at runtime and are not checked during compile-time. Example: <code>ArithmeticException</code>, <code>NullPointerException</code>.</li>
    </ul>

    <h2>Checked Exceptions</h2>
    <p>Checked exceptions are exceptions that are checked during the compilation process. They must either be caught using a <code>catch</code> block or declared using the <code>throws</code> keyword. Below is a list of common checked exceptions:</p>
    <ul>
        <li><code>IOException</code>: Signals that an I/O exception has occurred (e.g., file not found).</li>
        <li><code>SQLException</code>: Signals an error in SQL query processing.</li>
        <li><code>ClassNotFoundException</code>: Occurs when an application tries to load a class that is not found.</li>
        <li><code>FileNotFoundException</code>: Occurs when an application tries to open a file that does not exist.</li>
        <li><code>InterruptedException</code>: Signals that a thread has been interrupted.</li>
    </ul>

    <h2>Unchecked Exceptions</h2>
    <p>Unchecked exceptions are exceptions that are not checked at compile-time. These exceptions are typically caused by programming errors. Below is a list of common unchecked exceptions:</p>
    <ul>
        <li><code>ArithmeticException</code>: Occurs when an arithmetic operation fails (e.g., division by zero).</li>
        <li><code>NullPointerException</code>: Occurs when a program attempts to access an object reference that is null.</li>
        <li><code>ArrayIndexOutOfBoundsException</code>: Occurs when trying to access an index of an array that does not exist.</li>
        <li><code>ClassCastException</code>: Occurs when trying to cast an object to a class that it is not an instance of.</li>
        <li><code>NumberFormatException</code>: Occurs when a string cannot be parsed into a numeric type.</li>
    </ul>

    <h2>Example 1: Handling ArithmeticException</h2>
    <p>In this example, we handle a division by zero exception:</p>

    <pre><code>
        public class ArithmeticExample {
            public static void main(String[] args) {
                try {
                    int result = 10 / 0; // This will cause an ArithmeticException
                } catch (ArithmeticException e) {
                    System.out.println("Error: Division by zero is not allowed.");
                }
            }
        }
    </code></pre>

    <p>Explanation: The code tries to perform division by zero. When an <code>ArithmeticException</code> occurs, the exception is caught by the <code>catch</code> block, and a message is displayed.</p>

    <h2>Example 2: Handling Multiple Exceptions</h2>
    <p>Java allows handling multiple exceptions in a single <code>catch</code> block:</p>

    <pre><code>
        public class MultipleExceptions {
            public static void main(String[] args) {
                try {
                    String str = null;
                    System.out.println(str.length()); // This will cause a NullPointerException
                    int[] arr = new int[5];
                    arr[10] = 20; // This will cause an ArrayIndexOutOfBoundsException
                } catch (NullPointerException | ArrayIndexOutOfBoundsException e) {
                    System.out.println("Caught an exception: " + e.getMessage());
                }
            }
        }
    </code></pre>

    <p>Explanation: This example demonstrates handling two different types of exceptions—<code>NullPointerException</code> and <code>ArrayIndexOutOfBoundsException</code>—using a multi-catch block.</p>

    <h2>Example 3: Using Finally Block</h2>
    <p>The <code>finally</code> block executes whether an exception is thrown or not. It is often used for cleanup activities:</p>

    <pre><code>
        public class FinallyExample {
            public static void main(String[] args) {
                try {
                    System.out.println("Inside try block");
                    int result = 10 / 2;
                    System.out.println("Result: " + result);
                } catch (ArithmeticException e) {
                    System.out.println("Caught an exception.");
                } finally {
                    System.out.println("Finally block executed.");
                }
            }
        }
    </code></pre>

    <p>Explanation: The <code>finally</code> block is always executed after the <code>try</code> and <code>catch</code> blocks, even if no exception occurs. In this case, "Finally block executed." will be printed regardless of whether an exception was thrown.</p>

    <h2>Example 4: Throwing an Exception</h2>
    <p>In Java, you can throw your own exceptions using the <code>throw</code> keyword:</p>

    <pre><code>
        public class ThrowExample {
            public static void main(String[] args) {
                try {
                    checkAge(15);
                } catch (Exception e) {
                    System.out.println(e.getMessage());
                }
            }

            public static void checkAge(int age) throws Exception {
                if (age < 18) {
                    throw new Exception("You are not eligible for voting.");
                } else {
                    System.out.println("You are eligible for voting.");
                }
            }
        }
    </code></pre>

    <p>Explanation: The method <code>checkAge()</code> throws an exception if the age is less than 18. The exception is then caught in the <code>catch</code> block in the <code>main</code> method.</p>

    <h2>Example 5: Custom Exception Handling</h2>
    <p>You can define your own exception by extending the <code>Exception</code> class:</p>

    <pre><code>
        class InvalidAgeException extends Exception {
            public InvalidAgeException(String message) {
                super(message);
            }
        }

        public class CustomExceptionExample {
            public static void main(String[] args) {
                try {
                    checkAge(17);
                } catch (InvalidAgeException e) {
                    System.out.println(e.getMessage());
                }
            }

            public static void checkAge(int age) throws InvalidAgeException {
                if (age < 18) {
                    throw new InvalidAgeException("Age is below 18, not eligible.");
                }
            }
        }
    </code></pre>

    <p>Explanation: Here, we create a custom exception <code>InvalidAgeException</code> and use it to throw an error when the age is less than 18.</p>

    <h2>Conclusion</h2>
    <p>Exception handling in Java is a powerful tool to improve the robustness of a program by gracefully handling errors. Understanding checked and unchecked exceptions and how to handle them appropriately is key to writing reliable Java applications.</p>

</body>
</html>
`;
            break;
        case 'fileio':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File I/O in Java</title>
</head>
<body>

    <h1>File I/O in Java</h1>
    <p>Java provides a set of APIs for performing input and output operations on files. These are part of the Java I/O package <code>java.io</code>. File I/O in Java can be performed using classes such as <code>File</code>, <code>FileInputStream</code>, <code>FileOutputStream</code>, <code>BufferedReader</code>, <code>BufferedWriter</code>, and more.</p>

    <h2>Reading and Writing Files in Java</h2>
    <p>In Java, file input/output (I/O) operations allow us to read and write data to files. There are different classes in Java to handle file operations such as reading data from and writing data to files, depending on the file format (e.g., text files or binary files).</p>

    <h2>File Handling in Java</h2>
    <p>The basic process of file handling in Java involves the following steps:</p>
    <ol>
        <li>Creating or opening a file.</li>
        <li>Reading data from the file (Input Operations).</li>
        <li>Writing data to the file (Output Operations).</li>
        <li>Closing the file to free up resources.</li>
    </ol>

    <h2>File Input and Output Using <code>FileInputStream</code> and <code>FileOutputStream</code></h2>

    <h3>Example 1: Reading Data from a File</h3>
    <p>The <code>FileInputStream</code> class is used to read bytes from a file. Here is an example:</p>

    <pre><code>
        import java.io.FileInputStream;
        import java.io.IOException;

        public class FileInputExample {
            public static void main(String[] args) {
                FileInputStream inputStream = null;
                try {
                    inputStream = new FileInputStream("example.txt");
                    int data;
                    while ((data = inputStream.read()) != -1) {
                        System.out.print((char) data);  // Prints the content of the file
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    try {
                        if (inputStream != null) {
                            inputStream.close();  // Closing the stream
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    </code></pre>

    <p>Explanation: This code reads data byte-by-byte from the file <code>example.txt</code> and prints it to the console. The <code>FileInputStream</code> class is used for input operations on files.</p>

    <h3>Example 2: Writing Data to a File</h3>
    <p>The <code>FileOutputStream</code> class is used to write bytes to a file. Here’s an example:</p>

    <pre><code>
        import java.io.FileOutputStream;
        import java.io.IOException;

        public class FileOutputExample {
            public static void main(String[] args) {
                FileOutputStream outputStream = null;
                try {
                    outputStream = new FileOutputStream("output.txt");
                    String content = "This is an example of file writing in Java.";
                    outputStream.write(content.getBytes());  // Writing bytes to the file
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    try {
                        if (outputStream != null) {
                            outputStream.close();  // Closing the stream
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    </code></pre>

    <p>Explanation: This example writes a string to the file <code>output.txt</code> using the <code>FileOutputStream</code> class. The string is first converted to a byte array using <code>getBytes()</code>, and then written to the file.</p>

    <h2>File Reader and Writer for Text Files</h2>
    <p>Java provides <code>FileReader</code> and <code>FileWriter</code> classes for reading and writing text files. These classes are more suitable for character-based I/O than <code>FileInputStream</code> and <code>FileOutputStream</code>.</p>

    <h3>Example 3: Reading from a Text File Using <code>FileReader</code></h3>

    <pre><code>
        import java.io.FileReader;
        import java.io.IOException;

        public class FileReaderExample {
            public static void main(String[] args) {
                FileReader reader = null;
                try {
                    reader = new FileReader("textfile.txt");
                    int data;
                    while ((data = reader.read()) != -1) {
                        System.out.print((char) data);  // Reads and prints character by character
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    try {
                        if (reader != null) {
                            reader.close();  // Closing the reader
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    </code></pre>

    <p>Explanation: This code uses <code>FileReader</code> to read a text file character by character and prints the content to the console. It’s more convenient for character-based data than <code>FileInputStream</code>.</p>

    <h3>Example 4: Writing to a Text File Using <code>FileWriter</code></h3>

    <pre><code>
        import java.io.FileWriter;
        import java.io.IOException;

        public class FileWriterExample {
            public static void main(String[] args) {
                FileWriter writer = null;
                try {
                    writer = new FileWriter("outputfile.txt");
                    String content = "Writing to a text file in Java using FileWriter.";
                    writer.write(content);  // Writing string to the file
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    try {
                        if (writer != null) {
                            writer.close();  // Closing the writer
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    </code></pre>

    <p>Explanation: This example uses <code>FileWriter</code> to write a string to a text file. The <code>write()</code> method writes the string directly to the file.</p>

    <h2>Buffered I/O for Efficient File Handling</h2>
    <p>Buffered I/O can improve performance by reducing the number of I/O operations. The <code>BufferedReader</code> and <code>BufferedWriter</code> classes are used to efficiently read and write characters from and to files, respectively.</p>

    <h3>Example 5: Reading from a File Using <code>BufferedReader</code></h3>

    <pre><code>
        import java.io.BufferedReader;
        import java.io.FileReader;
        import java.io.IOException;

        public class BufferedReaderExample {
            public static void main(String[] args) {
                BufferedReader reader = null;
                try {
                    reader = new BufferedReader(new FileReader("textfile.txt"));
                    String line;
                    while ((line = reader.readLine()) != null) {
                        System.out.println(line);  // Reads the file line by line
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    try {
                        if (reader != null) {
                            reader.close();  // Closing the reader
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    </code></pre>

    <p>Explanation: This code uses <code>BufferedReader</code> to read a text file line by line. BufferedReader is faster than <code>FileReader</code> because it reduces the number of read operations.</p>

    <h3>Example 6: Writing to a File Using <code>BufferedWriter</code></h3>

    <pre><code>
        import java.io.BufferedWriter;
        import java.io.FileWriter;
        import java.io.IOException;

        public class BufferedWriterExample {
            public static void main(String[] args) {
                BufferedWriter writer = null;
                try {
                    writer = new BufferedWriter(new FileWriter("outputfile.txt"));
                    String content = "Writing to a file efficiently using BufferedWriter.";
                    writer.write(content);  // Writes to the file
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    try {
                        if (writer != null) {
                            writer.close();  // Closing the writer
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    </code></pre>

    <p>Explanation: <code>BufferedWriter</code> is used for efficient writing. It buffers the data and writes it in larger chunks, improving performance compared to <code>FileWriter</code>.</p>

    <h2>Conclusion</h2>
    <p>File I/O in Java is an essential part of many applications, enabling us to read and write data from or to files. The use of different input/output streams like <code>FileInputStream</code>, <code>FileOutputStream</code>, and buffered streams like <code>BufferedReader</code> and <code>BufferedWriter</code> provides efficient ways to handle files.</p>

</body>
</html>
`;
            break;
        case 'classes':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Classes and Objects in Java</title>
</head>
<body>

    <h1>Classes and Objects in Java</h1>
    <p>Java is an object-oriented programming (OOP) language, which means that it focuses on using classes and objects to structure the code. Understanding how to define classes and create objects is essential for mastering Java.</p>

    <h2>What is a Class?</h2>
    <p>A <strong>class</strong> in Java is a blueprint or prototype from which objects are created. A class defines the properties (data members) and behaviors (methods) that the objects created from the class will have. It is a user-defined data type in Java.</p>

    <h3>Class Syntax:</h3>
    <pre><code>
        class ClassName {
            // Data members (variables)
            // Methods (functions)
        }
    </code></pre>

    <p>In this syntax, <code>ClassName</code> represents the name of the class, and inside the class, we define variables (data members) and methods (behaviors) associated with the class.</p>

    <h2>What is an Object?</h2>
    <p>An <strong>object</strong> is an instance of a class. When a class is defined, no memory is allocated until an object of the class is created. An object has a state (data members) and behavior (methods).</p>
    
    <p>Objects are created using the <code>new</code> keyword followed by the class constructor.</p>

    <h3>Object Syntax:</h3>
    <pre><code>
        ClassName obj = new ClassName();
    </code></pre>

    <p>This code creates an object <code>obj</code> of the class <code>ClassName</code>.</p>

    <h2>Example 1: Defining a Class and Creating an Object</h2>
    <p>Let’s define a class <code>Car</code> with two properties: <code>brand</code> and <code>speed</code>. Then we’ll create an object of this class and assign values to these properties.</p>

    <pre><code>
        // Define the class
        class Car {
            // Data members (properties)
            String brand;
            int speed;

            // Method to display car details
            void displayDetails() {
                System.out.println("Brand: " + brand);
                System.out.println("Speed: " + speed + " km/h");
            }
        }

        public class Main {
            public static void main(String[] args) {
                // Create an object of the Car class
                Car myCar = new Car();
                
                // Assign values to the object's properties
                myCar.brand = "Tesla";
                myCar.speed = 120;

                // Call the method to display details
                myCar.displayDetails();
            }
        }
    </code></pre>

    <p>Explanation: In this example, we define a class <code>Car</code> with two data members: <code>brand</code> and <code>speed</code>. We then create an object <code>myCar</code> and set the values of the data members using dot notation (<code>myCar.brand</code>, <code>myCar.speed</code>). Finally, we call the method <code>displayDetails()</code> to print the car's details.</p>

    <h2>Constructors in Java</h2>
    <p>In Java, constructors are special methods used to initialize objects. A constructor is automatically called when an object of a class is created.</p>

    <h3>Constructor Syntax:</h3>
    <pre><code>
        class ClassName {
            // Constructor
            public ClassName() {
                // Initialization code
            }
        }
    </code></pre>

    <p>Constructor rules:
    <ul>
        <li>A constructor has the same name as the class.</li>
        <li>A constructor does not have a return type, not even <code>void</code>.</li>
        <li>Constructors are invoked implicitly when an object is created.</li>
    </ul></p>

    <h3>Example 2: Using a Constructor</h3>
    <p>Here’s an example that uses a constructor to initialize the properties of the <code>Car</code> class.</p>

    <pre><code>
        class Car {
            String brand;
            int speed;

            // Constructor
            public Car(String b, int s) {
                brand = b;
                speed = s;
            }

            void displayDetails() {
                System.out.println("Brand: " + brand);
                System.out.println("Speed: " + speed + " km/h");
            }
        }

        public class Main {
            public static void main(String[] args) {
                // Create an object of the Car class and pass values to the constructor
                Car myCar = new Car("Tesla", 150);

                // Call the method to display car details
                myCar.displayDetails();
            }
        }
    </code></pre>

    <p>Explanation: In this example, the <code>Car</code> class has a constructor that accepts two parameters: <code>brand</code> and <code>speed</code>. These values are assigned to the object's data members when the object is created. The constructor initializes the object with the values provided during object creation.</p>

    <h2>Access Modifiers in Java</h2>
    <p>Java provides four access modifiers that control the visibility of classes, methods, and variables. These are:</p>
    <ul>
        <li><strong>public</strong>: Accessible from anywhere.</li>
        <li><strong>private</strong>: Accessible only within the class.</li>
        <li><strong>protected</strong>: Accessible within the package and subclasses.</li>
        <li><strong>default</strong>: Accessible only within the package (no modifier).</li>
    </ul>

    <h3>Example 3: Using Access Modifiers</h3>
    <pre><code>
        class Car {
            public String brand;   // Public field
            private int speed;     // Private field

            // Public method to access private field
            public void setSpeed(int s) {
                if (s > 0) {
                    speed = s;
                } else {
                    System.out.println("Speed must be positive.");
                }
            }

            public void displayDetails() {
                System.out.println("Brand: " + brand);
                System.out.println("Speed: " + speed + " km/h");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Car myCar = new Car();
                myCar.brand = "Tesla";     // Accessing public member
                myCar.setSpeed(120);       // Using a public method to set private field
                myCar.displayDetails();
            }
        }
    </code></pre>

    <p>Explanation: In this example, the <code>brand</code> is a public field, so it can be accessed directly. However, <code>speed</code> is private and can only be accessed using the public method <code>setSpeed()</code>. This demonstrates encapsulation, a key concept in OOP where data is hidden within a class and accessed through methods.</p>

    <h2>Inheritance in Java</h2>
    <p>Java supports inheritance, which allows a class (child class) to inherit the properties and methods of another class (parent class). Inheritance helps promote code reuse and establishes a hierarchy.</p>

    <h3>Example 4: Inheritance</h3>
    <pre><code>
        // Parent class
        class Vehicle {
            String brand;

            public void displayBrand() {
                System.out.println("Brand: " + brand);
            }
        }

        // Child class
        class Car extends Vehicle {
            int speed;

            public void displaySpeed() {
                System.out.println("Speed: " + speed + " km/h");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Car myCar = new Car();
                myCar.brand = "Tesla";
                myCar.speed = 150;
                myCar.displayBrand();    // Inherited method
                myCar.displaySpeed();    // Method of the child class
            }
        }
    </code></pre>

    <p>Explanation: In this example, the <code>Car</code> class inherits from the <code>Vehicle</code> class. The child class <code>Car</code> can use the inherited method <code>displayBrand()</code> from the parent class <code>Vehicle</code>, as well as its own method <code>displaySpeed()</code>.</p>

    <h2>Conclusion</h2>
    <p>Classes and objects form the backbone of object-oriented programming in Java. By defining classes and creating objects, we can model real-world entities, and by utilizing constructors, access modifiers, and inheritance, we can implement encapsulation and reuse code efficiently.</p>

</body>
</html>
`;
            break;
        case 'inheritance':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inheritance and This Keyword in Java</title>
</head>
<body>

    <h1>Inheritance in Java</h1>

    <p>Inheritance is a fundamental concept in Object-Oriented Programming (OOP), which allows one class (called the child or subclass) to inherit the properties and behaviors (fields and methods) from another class (called the parent or superclass). Inheritance promotes code reuse and establishes a natural hierarchy between classes.</p>

    <h2>Why is Inheritance Important?</h2>
    <p>Inheritance allows us to:
        <ul>
            <li>Reuse existing code, thus promoting code reusability.</li>
            <li>Establish a hierarchical relationship between classes.</li>
            <li>Implement polymorphism, one of the key concepts of OOP.</li>
        </ul>
    </p>

    <h2>Types of Inheritance in Java</h2>
    <p>Java supports the following types of inheritance:
        <ul>
            <li><strong>Single Inheritance</strong>: A class inherits from only one superclass.</li>
            <li><strong>Multilevel Inheritance</strong>: A class inherits from a superclass, and another class inherits from the first class.</li>
            <li><strong>Hierarchical Inheritance</strong>: Multiple classes inherit from a single superclass.</li>
            <li><strong>Multiple Inheritance (through interfaces)</strong>: Java does not support multiple inheritance using classes (a class inheriting from multiple classes), but it can be achieved through interfaces.</li>
        </ul>
    </p>

    <h2>Single Inheritance</h2>
    <p>Single inheritance occurs when a class inherits from one parent class. This is the most common form of inheritance.</p>

    <h3>Example of Single Inheritance:</h3>
    <pre><code>
        // Parent class
        class Animal {
            public void sound() {
                System.out.println("Animals make sounds");
            }
        }

        // Child class inheriting from Animal
        class Dog extends Animal {
            public void display() {
                System.out.println("Dog barks");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Dog myDog = new Dog();
                myDog.sound();   // Method inherited from Animal
                myDog.display(); // Method from Dog class
            }
        }
    </code></pre>

    <p>Explanation: In this example, the <code>Dog</code> class extends (inherits from) the <code>Animal</code> class. The <code>Dog</code> class has access to the <code>sound()</code> method from the parent class <code>Animal</code> and can also define its own method, <code>display()</code>.</p>

    <h2>Multilevel Inheritance</h2>
    <p>Multilevel inheritance occurs when a class is derived from another derived class. This creates a chain of inheritance.</p>

    <h3>Example of Multilevel Inheritance:</h3>
    <pre><code>
        // Parent class
        class Animal {
            public void sound() {
                System.out.println("Animals make sounds");
            }
        }

        // Child class inheriting from Animal
        class Mammal extends Animal {
            public void feed() {
                System.out.println("Mammals feed milk to their young");
            }
        }

        // Subclass inheriting from Mammal
        class Dog extends Mammal {
            public void display() {
                System.out.println("Dog barks");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Dog myDog = new Dog();
                myDog.sound();  // Inherited from Animal
                myDog.feed();   // Inherited from Mammal
                myDog.display(); // Method from Dog class
            }
        }
    </code></pre>

    <p>Explanation: The <code>Dog</code> class inherits from <code>Mammal</code>, and <code>Mammal</code> inherits from <code>Animal</code>. The <code>Dog</code> class inherits methods from both the parent and grandparent classes, allowing access to <code>sound()</code> and <code>feed()</code> methods, in addition to its own <code>display()</code> method.</p>

    <h2>Hierarchical Inheritance</h2>
    <p>Hierarchical inheritance occurs when multiple classes inherit from a single parent class.</p>

    <h3>Example of Hierarchical Inheritance:</h3>
    <pre><code>
        // Parent class
        class Animal {
            public void sound() {
                System.out.println("Animals make sounds");
            }
        }

        // Child class 1 inheriting from Animal
        class Dog extends Animal {
            public void display() {
                System.out.println("Dog barks");
            }
        }

        // Child class 2 inheriting from Animal
        class Cat extends Animal {
            public void display() {
                System.out.println("Cat meows");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Dog myDog = new Dog();
                myDog.sound();   // Inherited from Animal
                myDog.display(); // Method from Dog class

                Cat myCat = new Cat();
                myCat.sound();   // Inherited from Animal
                myCat.display(); // Method from Cat class
            }
        }
    </code></pre>

    <p>Explanation: In this example, both <code>Dog</code> and <code>Cat</code> inherit from the parent class <code>Animal</code>. This demonstrates how multiple subclasses can share common functionality (inherited from the parent class) while also having their own specific behavior.</p>

    <h2>Method Overriding in Inheritance</h2>
    <p>When a subclass provides its own implementation of a method that is already present in its superclass, it is called method overriding. This allows the subclass to provide specific behavior while maintaining the same method signature.</p>

    <h3>Example of Method Overriding:</h3>
    <pre><code>
        // Parent class
        class Animal {
            public void sound() {
                System.out.println("Animals make sounds");
            }
        }

        // Child class overriding the method
        class Dog extends Animal {
            @Override
            public void sound() {
                System.out.println("Dog barks");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Animal myAnimal = new Animal();
                myAnimal.sound();  // Calls the parent class method

                Dog myDog = new Dog();
                myDog.sound();     // Calls the overridden method in Dog class
            }
        }
    </code></pre>

    <p>Explanation: In this example, the <code>sound()</code> method in the parent class <code>Animal</code> is overridden in the child class <code>Dog</code>. When we call <code>sound()</code> on an object of the <code>Dog</code> class, it executes the overridden method in the <code>Dog</code> class instead of the method in the parent class.</p>

    <h2>Multiple Inheritance in Java (Interfaces)</h2>
    <p>Java does not support multiple inheritance using classes, meaning a class cannot inherit from more than one class directly. However, multiple inheritance can be achieved through interfaces, which allow a class to implement more than one interface.</p>

    <h3>Example of Multiple Inheritance Using Interfaces:</h3>
    <pre><code>
        interface Animal {
            void sound();
        }

        interface Vehicle {
            void move();
        }

        class Car implements Animal, Vehicle {
            public void sound() {
                System.out.println("Car honks");
            }

            public void move() {
                System.out.println("Car moves on the road");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Car myCar = new Car();
                myCar.sound(); // From Animal interface
                myCar.move();  // From Vehicle interface
            }
        }
    </code></pre>

    <p>Explanation: In this example, the <code>Car</code> class implements two interfaces, <code>Animal</code> and <code>Vehicle</code>. This allows it to inherit behaviors from both interfaces and provide specific implementations of the methods defined in them.</p>

    <h2>Accessing Parent Class Members in Java</h2>
    <p>In Java, you can access the parent class's fields and methods from a subclass using the <code>super</code> keyword. It is used to refer to the immediate parent class and can be used to call the parent class's constructor, methods, and fields.</p>

    <h3>Example of Using Super Keyword:</h3>
    <pre><code>
        class Animal {
            public void sound() {
                System.out.println("Animal makes a sound");
            }
        }

        class Dog extends Animal {
            public void sound() {
                super.sound(); // Calls the parent class method
                System.out.println("Dog barks");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Dog myDog = new Dog();
                myDog.sound(); // Calls method in Dog class and super class
            }
        }
    </code></pre>

    <p>Explanation: The <code>super.sound()</code> in the <code>Dog</code> class calls the <code>sound()</code> method of the parent class <code>Animal</code> before executing the child class method.</p>

    <h2>The <code>this</code> Keyword in Java</h2>
    <p>The <code>this</code> keyword in Java refers to the current object. It is commonly used to refer to the current instance of a class within a method or constructor. It can also be used to differentiate between class fields and parameters with the same name.</p>

    <h3>Example of Using <code>this</code> Keyword:</h3>
    <pre><code>
        class Student {
            String name;
            int age;

            // Constructor
            Student(String name, int age) {
                this.name = name; // 'this' refers to the current object's name field
                this.age = age;   // 'this' refers to the current object's age field
            }

            void display() {
                System.out.println("Name: " + this.name);
                System.out.println("Age: " + this.age);
            }
        }

        public class Main {
            public static void main(String[] args) {
                Student student = new Student("John", 20);
                student.display(); // Displays the name and age using 'this'
            }
        }
    </code></pre>

    <p>Explanation: The <code>this</code> keyword is used to refer to the instance variables <code>name</code> and <code>age</code> of the current object. It differentiates between the parameters passed to the constructor and the instance variables.</p>

</body>
</html>
`;
            break;
        case 'polymorphism':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Polymorphism, Method Overloading, Method Overriding, Static and Dynamic Binding</title>
</head>
<body>

    <h1>Polymorphism, Method Overloading, Method Overriding, Static and Dynamic Binding in Java</h1>

    <h2>1. What is Polymorphism?</h2>
    <p>Polymorphism is one of the key concepts in Object-Oriented Programming (OOP) that allows an object to take many forms. In Java, polymorphism allows objects to be treated as instances of their parent class, and the specific method that gets called depends on the actual object type at runtime.</p>

    <p>Polymorphism allows a method to do different things based on the object it is acting upon. This makes Java a powerful and flexible language, as it enables code reusability and scalability.</p>

    <h3>Types of Polymorphism:</h3>
    <ul>
        <li><b>Compile-time Polymorphism:</b> Achieved through method overloading.</li>
        <li><b>Run-time Polymorphism:</b> Achieved through method overriding.</li>
    </ul>

    <p>Let's now look at the two forms of polymorphism in more detail:</p>

    <h2>2. Method Overloading (Compile-time Polymorphism)</h2>
    <p>Method Overloading is an example of <i>compile-time polymorphism</i>. It occurs when two or more methods in the same class have the same name but different parameters (either by type, number, or both). Java uses method overloading to determine which method to call based on the method arguments at compile time.</p>

    <h3>Example of Method Overloading:</h3>
    <pre><code>
        class Calculator {
            public int add(int a, int b) {
                return a + b;
            }

            public int add(int a, int b, int c) {
                return a + b + c;
            }

            public double add(double a, double b) {
                return a + b;
            }
        }

        public class Main {
            public static void main(String[] args) {
                Calculator calc = new Calculator();
                System.out.println("Sum of two integers: " + calc.add(10, 20));
                System.out.println("Sum of three integers: " + calc.add(10, 20, 30));
                System.out.println("Sum of two doubles: " + calc.add(10.5, 20.5));
            }
        }
    </code></pre>

    <p>Explanation: In this example, the method <code>add()</code> is overloaded with different parameter lists. The method that gets called is determined by the number and type of parameters passed, and this decision is made at compile time.</p>

    <h2>3. Method Overriding (Run-time Polymorphism)</h2>
    <p>Method Overriding is an example of <i>run-time polymorphism</i>. It occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. The version of the method that is called is determined at runtime based on the actual object type.</p>

    <h3>Example of Method Overriding:</h3>
    <pre><code>
        class Animal {
            public void sound() {
                System.out.println("Animals make sounds");
            }
        }

        class Dog extends Animal {
            @Override
            public void sound() {
                System.out.println("Dog barks");
            }
        }

        class Cat extends Animal {
            @Override
            public void sound() {
                System.out.println("Cat meows");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Animal myAnimal = new Animal();
                myAnimal.sound();

                Animal myDog = new Dog();
                myDog.sound();

                Animal myCat = new Cat();
                myCat.sound();
            }
        }
    </code></pre>

    <p>Explanation: In this example, we have a superclass <code>Animal</code> with a method <code>sound()</code>. Both <code>Dog</code> and <code>Cat</code> subclasses provide their specific implementations of this method, which are invoked at runtime. This is an example of method overriding and run-time polymorphism.</p>

    <h2>4. Static Binding vs Dynamic Binding</h2>
    <p>In Java, there are two types of binding—Static Binding and Dynamic Binding. These bindings refer to how method calls are resolved:</p>

    <h3>Static Binding (Compile-time Binding)</h3>
    <p>Static binding happens at compile time. The method to be executed is determined when the code is compiled. Method overloading is resolved using static binding. The compiler decides which overloaded method to call based on the method signature and arguments.</p>

    <h3>Example of Static Binding:</h3>
    <pre><code>
        class Calculator {
            public int multiply(int a, int b) {
                return a * b;
            }
        }

        public class Main {
            public static void main(String[] args) {
                Calculator calc = new Calculator();
                System.out.println("Multiplication: " + calc.multiply(5, 10));
            }
        }
    </code></pre>

    <p>Explanation: The method <code>multiply(int, int)</code> is chosen by the compiler based on the arguments passed. This is a clear example of static binding or compile-time binding.</p>

    <h3>Dynamic Binding (Run-time Binding)</h3>
    <p>Dynamic binding happens at runtime. The method to be executed is determined when the program is running, which happens in method overriding. In dynamic binding, the actual method that gets called depends on the object type (i.e., the instance of the class) at runtime.</p>

    <h3>Example of Dynamic Binding:</h3>
    <pre><code>
        class Animal {
            public void sound() {
                System.out.println("Animal makes sound");
            }
        }

        class Dog extends Animal {
            public void sound() {
                System.out.println("Dog barks");
            }
        }

        class Main {
            public static void main(String[] args) {
                Animal myDog = new Dog();
                myDog.sound(); // Dynamic binding
            }
        }
    </code></pre>

    <p>Explanation: Even though the reference variable is of type <code>Animal</code>, the method <code>sound()</code> from the subclass <code>Dog</code> is called, which is determined at runtime. This is an example of dynamic binding or run-time binding.</p>

    <h2>Key Differences Between Static Binding and Dynamic Binding:</h2>
    <table border="1">
        <tr>
            <th>Aspect</th>
            <th>Static Binding</th>
            <th>Dynamic Binding</th>
        </tr>
        <tr>
            <td>Binding Time</td>
            <td>Resolved at compile time.</td>
            <td>Resolved at runtime.</td>
        </tr>
        <tr>
            <td>Polymorphism Type</td>
            <td>Method Overloading (Compile-time Polymorphism).</td>
            <td>Method Overriding (Run-time Polymorphism).</td>
        </tr>
        <tr>
            <td>Method Call</td>
            <td>The compiler determines which method to call.</td>
            <td>The JVM determines which method to call based on the object type.</td>
        </tr>
        <tr>
            <td>Example</td>
            <td>Method Overloading</td>
            <td>Method Overriding</td>
        </tr>
    </table>

    <h2>Conclusion</h2>
    <p>In summary, polymorphism is a core concept in object-oriented programming that allows methods to perform different tasks based on the objects they are acting upon. Method overloading and method overriding are two ways polymorphism is implemented in Java, with static binding occurring in method overloading and dynamic binding occurring in method overriding.</p>

</body>
</html>
`;
            break;
        case 'abstraction':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abstraction in Java - 7 Examples</title>
</head>
<body>
    <h1>Abstraction in Java</h1>
    <p>Abstraction is one of the key principles of Object-Oriented Programming (OOP). It allows you to hide complex implementation details and show only the essential features of an object. In Java, abstraction is achieved using <strong>abstract classes</strong> and <strong>interfaces</strong>.</p>

    <h2>Examples of Abstraction in Java</h2>
    
    <h3>Example 1: Abstract Class with Abstract Method</h3>
    <pre><code>
    // Abstract class
    abstract class Animal {
        abstract void sound();
    }

    class Dog extends Animal {
        public void sound() {
            System.out.println("Dog barks");
        }
    }

    class Cat extends Animal {
        public void sound() {
            System.out.println("Cat meows");
        }
    }

    public class Main {
        public static void main(String[] args) {
            Animal dog = new Dog();
            dog.sound();  // Output: Dog barks

            Animal cat = new Cat();
            cat.sound();  // Output: Cat meows
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> This example demonstrates an abstract class <code>Animal</code> with an abstract method <code>sound()</code>. The subclasses <code>Dog</code> and <code>Cat</code> provide implementations for the <code>sound()</code> method. Abstraction allows you to define the method structure without implementation in the parent class.</p>

    <h3>Example 2: Abstract Class with Regular Method</h3>
    <pre><code>
    abstract class Vehicle {
        abstract void start();
        
        public void fuel() {
            System.out.println("Fueling the vehicle");
        }
    }

    class Car extends Vehicle {
        public void start() {
            System.out.println("Car is starting");
        }
    }

    class Bike extends Vehicle {
        public void start() {
            System.out.println("Bike is starting");
        }
    }

    public class Main {
        public static void main(String[] args) {
            Vehicle car = new Car();
            car.start();  // Output: Car is starting
            car.fuel();   // Output: Fueling the vehicle
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The abstract class <code>Vehicle</code> contains an abstract method <code>start()</code> and a regular method <code>fuel()</code>. Subclasses must implement the abstract method, while they inherit the <code>fuel()</code> method.</p>

    <h3>Example 3: Interface for Abstraction</h3>
    <pre><code>
    interface Shape {
        double area();
    }

    class Circle implements Shape {
        double radius;

        public Circle(double radius) {
            this.radius = radius;
        }

        public double area() {
            return Math.PI * radius * radius;
        }
    }

    class Rectangle implements Shape {
        double length, width;

        public Rectangle(double length, double width) {
            this.length = length;
            this.width = width;
        }

        public double area() {
            return length * width;
        }
    }

    public class Main {
        public static void main(String[] args) {
            Shape circle = new Circle(5);
            System.out.println("Circle area: " + circle.area());  // Output: Circle area: 78.53981633974483

            Shape rectangle = new Rectangle(5, 4);
            System.out.println("Rectangle area: " + rectangle.area());  // Output: Rectangle area: 20.0
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> In this example, the interface <code>Shape</code> defines an abstract method <code>area()</code>. Both <code>Circle</code> and <code>Rectangle</code> implement the interface and provide their own implementation of the <code>area()</code> method.</p>

    <h3>Example 4: Abstract Class with Constructor</h3>
    <pre><code>
    abstract class Animal {
        String name;

        public Animal(String name) {
            this.name = name;
        }

        abstract void sound();

        public void displayInfo() {
            System.out.println("Animal: " + name);
        }
    }

    class Dog extends Animal {
        public Dog(String name) {
            super(name);
        }

        public void sound() {
            System.out.println("Dog barks");
        }
    }

    public class Main {
        public static void main(String[] args) {
            Animal dog = new Dog("Bulldog");
            dog.displayInfo();  // Output: Animal: Bulldog
            dog.sound();        // Output: Dog barks
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The abstract class <code>Animal</code> has a constructor to initialize the name of the animal. The method <code>displayInfo()</code> is a non-abstract method, while <code>sound()</code> remains abstract.</p>

    <h3>Example 5: Abstract Class with Multiple Abstract Methods</h3>
    <pre><code>
    abstract class Appliance {
        abstract void turnOn();
        abstract void turnOff();
    }

    class Fan extends Appliance {
        public void turnOn() {
            System.out.println("Fan is turned on");
        }

        public void turnOff() {
            System.out.println("Fan is turned off");
        }
    }

    public class Main {
        public static void main(String[] args) {
            Appliance fan = new Fan();
            fan.turnOn();  // Output: Fan is turned on
            fan.turnOff(); // Output: Fan is turned off
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> In this example, the abstract class <code>Appliance</code> defines two abstract methods: <code>turnOn()</code> and <code>turnOff()</code>. The subclass <code>Fan</code> implements both methods.</p>

    <h3>Example 6: Using Abstract Class for Abstraction in Banking</h3>
    <pre><code>
    abstract class Bank {
        abstract void getBalance();
        abstract void deposit(double amount);
    }

    class SavingsAccount extends Bank {
        double balance;

        public SavingsAccount(double balance) {
            this.balance = balance;
        }

        public void getBalance() {
            System.out.println("Savings Account Balance: " + balance);
        }

        public void deposit(double amount) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        }
    }

    public class Main {
        public static void main(String[] args) {
            Bank account = new SavingsAccount(1000);
            account.getBalance();  // Output: Savings Account Balance: 1000.0
            account.deposit(500);  // Output: Deposited: 500.0
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The abstract class <code>Bank</code> defines two abstract methods: <code>getBalance()</code> and <code>deposit()</code>. The subclass <code>SavingsAccount</code> implements these methods, allowing it to interact with bank account data.</p>

    <h3>Example 7: Interface and Multiple Inheritance</h3>
    <pre><code>
    interface Swimmable {
        void swim();
    }

    interface Flyable {
        void fly();
    }

    class Duck implements Swimmable, Flyable {
        public void swim() {
            System.out.println("Duck swims");
        }

        public void fly() {
            System.out.println("Duck flies");
        }
    }

    public class Main {
        public static void main(String[] args) {
            Duck duck = new Duck();
            duck.swim();  // Output: Duck swims
            duck.fly();   // Output: Duck flies
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> In this example, the interfaces <code>Swimmable</code> and <code>Flyable</code> define abstract methods <code>swim()</code> and <code>fly()</code>. The class <code>Duck</code> implements both interfaces and provides implementations for these methods.</p>

</body>
</html>
`;
            break;
        case 'encapsulation':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encapsulation in Java - Examples</title>
</head>
<body>
    <h1>Encapsulation in Java</h1>
    <p>Encapsulation is a fundamental concept in Object-Oriented Programming (OOP). It refers to the bundling of data (variables) and methods (functions) that operate on the data into a single unit, usually a class. Encapsulation also involves restricting access to the data and providing controlled access via getter and setter methods.</p>

    <h2>What is Encapsulation?</h2>
    <p>Encapsulation helps achieve data hiding by making fields private and allowing access through public methods (getters and setters). This ensures that the internal state of an object is hidden from the outside world and can only be modified in a controlled manner.</p>

    <h2>Examples of Encapsulation in Java</h2>

    <h3>Example 1: Basic Encapsulation</h3>
    <pre><code>
    class Person {
        // Private fields
        private String name;
        private int age;

        // Constructor
        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        // Getter for name
        public String getName() {
            return name;
        }

        // Setter for name
        public void setName(String name) {
            this.name = name;
        }

        // Getter for age
        public int getAge() {
            return age;
        }

        // Setter for age
        public void setAge(int age) {
            this.age = age;
        }
    }

    public class Main {
        public static void main(String[] args) {
            Person person = new Person("John", 25);
            System.out.println("Name: " + person.getName());  // Output: Name: John
            System.out.println("Age: " + person.getAge());    // Output: Age: 25

            // Changing the name and age
            person.setName("Mike");
            person.setAge(30);
            System.out.println("Updated Name: " + person.getName());  // Output: Updated Name: Mike
            System.out.println("Updated Age: " + person.getAge());    // Output: Updated Age: 30
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> In this example, the fields <code>name</code> and <code>age</code> are made <code>private</code>, which restricts access to them from outside the class. The public methods <code>getName()</code> and <code>setName()</code> provide controlled access to these fields. This is a simple example of encapsulation.</p>

    <h3>Example 2: Encapsulation for Banking System</h3>
    <pre><code>
    class Account {
        // Private fields
        private int accountNumber;
        private double balance;

        // Constructor
        public Account(int accountNumber, double balance) {
            this.accountNumber = accountNumber;
            this.balance = balance;
        }

        // Getter for accountNumber
        public int getAccountNumber() {
            return accountNumber;
        }

        // Getter for balance
        public double getBalance() {
            return balance;
        }

        // Method to deposit money
        public void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
                System.out.println("Deposited: " + amount);
            } else {
                System.out.println("Invalid deposit amount");
            }
        }

        // Method to withdraw money
        public void withdraw(double amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                System.out.println("Withdrawn: " + amount);
            } else {
                System.out.println("Insufficient balance or invalid withdrawal amount");
            }
        }
    }

    public class Main {
        public static void main(String[] args) {
            Account account = new Account(12345, 1000.00);
            System.out.println("Account Number: " + account.getAccountNumber());  // Output: Account Number: 12345
            System.out.println("Balance: " + account.getBalance());               // Output: Balance: 1000.0

            account.deposit(500);  // Output: Deposited: 500.0
            account.withdraw(200); // Output: Withdrawn: 200.0

            System.out.println("Updated Balance: " + account.getBalance());      // Output: Updated Balance: 1300.0
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> In this example, the <code>Account</code> class encapsulates the account details like <code>accountNumber</code> and <code>balance</code>. These fields are private, and the methods <code>deposit()</code> and <code>withdraw()</code> allow controlled updates to the account balance. Encapsulation ensures that users can only modify the balance through valid operations.</p>

    <h3>Example 3: Encapsulation with Validation</h3>
    <pre><code>
    class Product {
        // Private fields
        private String name;
        private double price;

        // Constructor
        public Product(String name, double price) {
            this.name = name;
            setPrice(price);  // Using setter with validation
        }

        // Getter for name
        public String getName() {
            return name;
        }

        // Getter for price
        public double getPrice() {
            return price;
        }

        // Setter for price with validation
        public void setPrice(double price) {
            if (price > 0) {
                this.price = price;
            } else {
                System.out.println("Invalid price");
            }
        }
    }

    public class Main {
        public static void main(String[] args) {
            Product product = new Product("Laptop", 1500.00);
            System.out.println("Product: " + product.getName());  // Output: Product: Laptop
            System.out.println("Price: " + product.getPrice());   // Output: Price: 1500.0

            // Trying to set an invalid price
            product.setPrice(-500);  // Output: Invalid price
            System.out.println("Updated Price: " + product.getPrice());  // Output: Updated Price: 1500.0
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> This example demonstrates encapsulation with validation in the setter method. The price of the product can only be set if it's positive, ensuring that the data remains valid. Encapsulation hides the internal logic of data validation from the outside world.</p>

    <h3>Example 4: Using Encapsulation with Getter and Setter</h3>
    <pre><code>
    class Student {
        private String name;
        private int age;

        // Constructor
        public Student(String name, int age) {
            this.name = name;
            this.age = age;
        }

        // Getter for name
        public String getName() {
            return name;
        }

        // Setter for name
        public void setName(String name) {
            this.name = name;
        }

        // Getter for age
        public int getAge() {
            return age;
        }

        // Setter for age
        public void setAge(int age) {
            if (age >= 0) {
                this.age = age;
            }
        }
    }

    public class Main {
        public static void main(String[] args) {
            Student student = new Student("Alice", 20);
            System.out.println("Name: " + student.getName());  // Output: Name: Alice
            System.out.println("Age: " + student.getAge());    // Output: Age: 20

            student.setName("Bob");
            student.setAge(25);
            System.out.println("Updated Name: " + student.getName());  // Output: Updated Name: Bob
            System.out.println("Updated Age: " + student.getAge());    // Output: Updated Age: 25
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The <code>Student</code> class encapsulates the student's details, allowing access to them via public getter and setter methods. The setter method <code>setAge()</code> ensures that only valid age values are accepted.</p>

</body>
</html>
`;
            break;
        case 'interfaces':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interfaces in Java - Detailed Explanation</title>
</head>
<body>
    <h1>Interfaces in Java</h1>
    <p>In Java, an <strong>interface</strong> is a reference type, similar to a class, that can contain only constants, method signatures, default methods, static methods, and nested types. Interfaces cannot contain instance fields or constructors.</p>

    <h2>What is an Interface?</h2>
    <p>An interface defines a contract of methods that the implementing classes must provide. It is used to achieve abstraction and multiple inheritance in Java. The classes that implement the interface must provide concrete implementations of all methods declared in the interface.</p>

    <h2>Why Use Interfaces?</h2>
    <ul>
        <li>To achieve loose coupling between classes.</li>
        <li>To implement multiple inheritance, which Java does not support directly with classes.</li>
        <li>To provide a contract that implementing classes must follow.</li>
        <li>To allow different classes to implement the same interface but provide different implementations.</li>
    </ul>

    <h2>Basic Syntax of Interface</h2>
    <pre><code>
    interface InterfaceName {
        // Constant declarations (if needed)
        // Abstract method declarations (without body)
        void method1();
        void method2();
    }
    </code></pre>
    <p><strong>Explanation:</strong> The <code>interface</code> keyword is used to declare an interface. It can have abstract methods (methods without a body) that must be implemented by the implementing classes.</p>

    <h2>Example of a Simple Interface</h2>
    <pre><code>
    interface Animal {
        // Abstract method (no body)
        void sound();
    }

    class Dog implements Animal {
        // Providing implementation of the sound() method
        public void sound() {
            System.out.println("Dog barks");
        }
    }

    class Cat implements Animal {
        // Providing implementation of the sound() method
        public void sound() {
            System.out.println("Cat meows");
        }
    }

    public class Main {
        public static void main(String[] args) {
            Animal dog = new Dog();
            Animal cat = new Cat();

            dog.sound();  // Output: Dog barks
            cat.sound();  // Output: Cat meows
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The <code>Animal</code> interface defines an abstract method <code>sound()</code>. Both <code>Dog</code> and <code>Cat</code> implement the <code>Animal</code> interface and provide their specific implementations of the <code>sound()</code> method.</p>

    <h2>Types of Interfaces</h2>
    <ul>
        <li><strong>Normal Interface:</strong> Declares abstract methods that need to be implemented.</li>
        <li><strong>Functional Interface:</strong> Contains exactly one abstract method. It can be used as the target for lambda expressions.</li>
        <li><strong>Marker Interface:</strong> Has no methods. It is used to indicate some property or behavior to the implementing classes.</li>
        <li><strong>Default Methods:</strong> Can have a body and provide a default implementation.</li>
        <li><strong>Static Methods:</strong> Can be defined within an interface with a body.</li>
    </ul>

    <h2>Example 1: Functional Interface</h2>
    <pre><code>
    @FunctionalInterface
    interface Add {
        // Single abstract method
        int sum(int a, int b);

        // Default method
        default void printMessage() {
            System.out.println("Performing addition...");
        }
    }

    public class Main {
        public static void main(String[] args) {
            // Lambda expression
            Add addition = (a, b) -> a + b;
            System.out.println("Sum: " + addition.sum(5, 10));  // Output: Sum: 15
            addition.printMessage();  // Output: Performing addition...
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The <code>Add</code> interface is a functional interface with a single abstract method <code>sum()</code>. The lambda expression <code>(a, b) -> a + b</code> provides the implementation for this method. A default method <code>printMessage()</code> is also defined in the interface.</p>

    <h2>Example 2: Marker Interface</h2>
    <pre><code>
    interface Serializable {}

    class Person implements Serializable {
        private String name;
        private int age;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }

        public void display() {
            System.out.println("Name: " + name + ", Age: " + age);
        }
    }

    public class Main {
        public static void main(String[] args) {
            Person person = new Person("John", 25);
            person.display();  // Output: Name: John, Age: 25
            // The person object can be serialized as it implements the Serializable interface
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The <code>Serializable</code> interface is a marker interface, meaning it has no methods. By implementing this interface, the <code>Person</code> class indicates that its objects can be serialized.</p>

    <h2>Example 3: Default Method in Interface</h2>
    <pre><code>
    interface Shape {
        // Abstract method
        void draw();

        // Default method with body
        default void defaultShape() {
            System.out.println("This is a default shape");
        }
    }

    class Circle implements Shape {
        public void draw() {
            System.out.println("Drawing a circle");
        }
    }

    public class Main {
        public static void main(String[] args) {
            Circle circle = new Circle();
            circle.draw();  // Output: Drawing a circle
            circle.defaultShape();  // Output: This is a default shape
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The <code>Shape</code> interface defines both an abstract method <code>draw()</code> and a default method <code>defaultShape()</code>. The <code>Circle</code> class implements the <code>Shape</code> interface and provides its own implementation of the <code>draw()</code> method while inheriting the default implementation of the <code>defaultShape()</code> method.</p>

    <h2>Differences Between Interface and Abstract Class</h2>
    <table border="1">
        <tr>
            <th>Aspect</th>
            <th>Interface</th>
            <th>Abstract Class</th>
        </tr>
        <tr>
            <td>Implementation</td>
            <td>Can have abstract methods and default/static methods</td>
            <td>Can have abstract and non-abstract methods</td>
        </tr>
        <tr>
            <td>Inheritance</td>
            <td>A class can implement multiple interfaces</td>
            <td>A class can inherit only one abstract class</td>
        </tr>
        <tr>
            <td>Access Modifiers</td>
            <td>Methods are implicitly public</td>
            <td>Methods can have any access modifier (private, protected, public)</td>
        </tr>
        <tr>
            <td>Constructors</td>
            <td>Cannot have constructors</td>
            <td>Can have constructors</td>
        </tr>
        <tr>
            <td>Fields</td>
            <td>Can only have constants (public, static, final)</td>
            <td>Can have instance fields and static fields</td>
        </tr>
    </table>
    <p><strong>Explanation:</strong> The table highlights the key differences between an interface and an abstract class. An interface is more focused on defining a contract for classes to follow, while an abstract class can provide partial implementation and have more flexible characteristics.</p>

</body>
</html>
`;
            break;
        case 'lambda':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lambda Expressions in Java - Detailed Explanation</title>
</head>
<body>
    <h1>Lambda Expressions in Java</h1>
    
    <h2>Introduction to Lambda Expressions</h2>
    <p>Lambda expressions, introduced in Java 8, provide a clear and concise way to express instances of single-method interfaces (functional interfaces). Lambda expressions help in reducing boilerplate code and can be used primarily to define the behavior of methods passed as parameters.</p>

    <p>Before Java 8, anonymous classes were used to achieve similar functionality, but lambda expressions provide a more readable and succinct way to write code.</p>

    <h2>Basic Syntax of Lambda Expression</h2>
    <pre><code>
    (parameters) -> expression
    </code></pre>
    <p><strong>Explanation:</strong> Lambda expressions consist of:</p>
    <ul>
        <li><strong>Parameters:</strong> These are the inputs to the lambda expression. They can be zero or more.</li>
        <li><strong>Arrow Operator ("->"):</strong> Separates the parameters from the body of the lambda expression.</li>
        <li><strong>Expression/Body:</strong> The body can be a single expression or a block of statements.</li>
    </ul>

    <h2>Functional Interface</h2>
    <p>A functional interface is an interface with a single abstract method. Lambda expressions can be used to provide the implementation of the method defined in a functional interface.</p>
    <pre><code>
    @FunctionalInterface
    interface MyFunctionalInterface {
        void display();
    }
    </code></pre>
    <p>The above interface has a single abstract method <code>display()</code>. Lambda expressions can be used to provide its implementation.</p>

    <h2>Example 1: Simple Lambda Expression</h2>
    <pre><code>
    @FunctionalInterface
    interface MyFunctionalInterface {
        void greet(String name);
    }

    public class Main {
        public static void main(String[] args) {
            // Lambda expression to implement the greet method
            MyFunctionalInterface greet = (name) -> System.out.println("Hello, " + name);
            
            greet.greet("John");  // Output: Hello, John
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The lambda expression <code>(name) -> System.out.println("Hello, " + name);</code> provides the implementation of the <code>greet()</code> method from the functional interface <code>MyFunctionalInterface</code>.</p>

    <h2>Lambda Expressions with Multiple Parameters</h2>
    <pre><code>
    @FunctionalInterface
    interface Calculator {
        int add(int a, int b);
    }

    public class Main {
        public static void main(String[] args) {
            // Lambda expression with two parameters
            Calculator calc = (a, b) -> a + b;

            System.out.println("Sum: " + calc.add(5, 10));  // Output: Sum: 15
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The lambda expression <code>(a, b) -> a + b</code> provides the implementation of the <code>add()</code> method in the <code>Calculator</code> interface, which adds two integers.</p>

    <h2>Lambda Expressions with Multiple Statements</h2>
    <pre><code>
    @FunctionalInterface
    interface MathOperation {
        void performOperation(int a, int b);
    }

    public class Main {
        public static void main(String[] args) {
            // Lambda expression with multiple statements
            MathOperation operation = (a, b) -> {
                int sum = a + b;
                int difference = a - b;
                System.out.println("Sum: " + sum);
                System.out.println("Difference: " + difference);
            };

            operation.performOperation(10, 5);  
            // Output:
            // Sum: 15
            // Difference: 5
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The lambda expression <code>(a, b) -> { ... }</code> includes multiple statements, such as calculating the sum and difference of two numbers. The results are printed within the body of the lambda expression.</p>

    <h2>Types of Lambda Expressions</h2>
    <ul>
        <li><strong>Simple Lambda:</strong> A lambda expression with a single statement or a single expression.</li>
        <li><strong>Multiple Statements Lambda:</strong> A lambda expression that contains a block of code with multiple statements.</li>
    </ul>

    <h2>Use of Lambda Expressions with Collections</h2>
    <p>Lambda expressions are widely used in Java 8 with the new Stream API, which allows us to process collections in a functional style.</p>

    <h3>Example 2: Using Lambda with Collections</h3>
    <pre><code>
    import java.util.ArrayList;
    import java.util.List;

    public class Main {
        public static void main(String[] args) {
            List<String> names = new ArrayList<>();
            names.add("Alice");
            names.add("Bob");
            names.add("Charlie");

            // Using lambda expression to print names
            names.forEach(name -> System.out.println(name));
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The <code>forEach()</code> method of the <code>List</code> interface accepts a lambda expression that iterates over each element in the list and prints it. Here, the lambda expression <code>name -> System.out.println(name)</code> performs the action.</p>

    <h2>Advantages of Lambda Expressions</h2>
    <ul>
        <li><strong>Conciseness:</strong> Lambda expressions reduce the amount of boilerplate code, especially when passing behavior as parameters.</li>
        <li><strong>Readability:</strong> Code becomes cleaner and more readable compared to anonymous class implementations.</li>
        <li><strong>Enables Functional Programming:</strong> Lambda expressions are key components in functional programming and allow operations on collections using Streams.</li>
        <li><strong>Lazy Evaluation:</strong> When used with Streams, lambda expressions help in lazy evaluation, which improves performance in certain scenarios.</li>
    </ul>

    <h2>Common Functional Interfaces in Java</h2>
    <ul>
        <li><code>Runnable:</code> Represents a task that can be executed in a separate thread.</li>
        <li><code>Predicate:</code> Represents a boolean-valued function of one argument.</li>
        <li><code>Function:</code> Represents a function that accepts one argument and produces a result.</li>
        <li><code>Consumer:</code> Represents an operation that accepts a single input argument and returns no result.</li>
        <li><code>Supplier:</code> Represents a function that supplies a result without taking any input.</li>
    </ul>

    <h3>Example 3: Using Lambda with Predicate</h3>
    <pre><code>
    import java.util.function.Predicate;

    public class Main {
        public static void main(String[] args) {
            // Predicate to check if a number is even
            Predicate<Integer> isEven = num -> num % 2 == 0;

            System.out.println("Is 4 even? " + isEven.test(4));  // Output: Is 4 even? true
            System.out.println("Is 5 even? " + isEven.test(5));  // Output: Is 5 even? false
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The <code>Predicate</code> functional interface represents a boolean-valued function. The lambda expression <code>num -> num % 2 == 0</code> checks if a number is even.</p>

    <h2>Static and Instance Methods in Lambda Expressions</h2>
    <p>You can also reference static and instance methods in lambda expressions. For example:</p>

    <h3>Example 4: Static Method Reference</h3>
    <pre><code>
    class Calculator {
        public static int add(int a, int b) {
            return a + b;
        }
    }

    public class Main {
        public static void main(String[] args) {
            // Using a static method reference
            BinaryOperator<Integer> adder = Calculator::add;

            System.out.println("Sum: " + adder.apply(5, 10));  // Output: Sum: 15
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The static method <code>add()</code> from the <code>Calculator</code> class is referenced in the lambda expression using the method reference syntax <code>Calculator::add</code>.</p>

    <h2>Conclusion</h2>
    <p>Lambda expressions make it easier to write code that is concise, readable, and expressive. They are an essential feature introduced in Java 8, especially for functional programming and operations on collections.</p>

</body>
</html>
`;
            break;
        case 'collections':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Collections Framework in Java - Detailed Explanation</title>
</head>
<body>
    <h1>Java Collections Framework</h1>
    
    <h2>Introduction to Collections Framework</h2>
    <p>The Java Collections Framework (JCF) provides a set of interfaces, classes, and algorithms that help store, retrieve, and manipulate data efficiently. It is a unified architecture for representing and manipulating collections, allowing us to work with groups of objects.</p>
    
    <p>The JCF simplifies data management tasks such as sorting, searching, and modifying collections, and also defines commonly used data structures such as lists, sets, and maps.</p>
    
    <h2>Core Interfaces of the Collections Framework</h2>
    <p>The core interfaces of the Collections Framework are:</p>
    <ul>
        <li><code>Collection</code>: The root interface for all collection types. It defines basic operations such as adding, removing, and querying elements.</li>
        <li><code>List</code>: An ordered collection that allows duplicate elements. Elements can be accessed by their position in the list.</li>
        <li><code>Set</code>: A collection that does not allow duplicate elements. It models the mathematical set.</li>
        <li><code>Queue</code>: A collection designed for holding elements before processing. It follows FIFO (First In First Out) order.</li>
        <li><code>Map</code>: A collection that stores key-value pairs. It maps keys to values and does not allow duplicate keys.</li>
    </ul>

    <h2>Collection Hierarchy</h2>
    <pre><code>
    java.util.Collection
        ├── List
        ├── Set
        └── Queue

    java.util.Map (Not part of Collection interface but closely related)
    </code></pre>
    <p>The Collection hierarchy consists of several interfaces, with <code>Collection</code> at the top. Below that are various specific collections such as <code>List</code>, <code>Set</code>, and <code>Queue</code>, each offering different functionalities.</p>

    <h2>Implementations of Collection Interfaces</h2>
    <p>Java provides various classes that implement the core interfaces of the Collections Framework. Some of the commonly used implementations are:</p>
    
    <h3>List Implementations</h3>
    <ul>
        <li><code>ArrayList</code>: A resizable array implementation of the List interface. It allows fast random access and dynamic resizing.</li>
        <li><code>LinkedList</code>: A doubly-linked list implementation of the List interface. It allows fast insertion and removal of elements.</li>
        <li><code>Vector</code>: A synchronized, resizable array implementation that is considered legacy.</li>
    </ul>
    
    <h3>Set Implementations</h3>
    <ul>
        <li><code>HashSet</code>: An unordered, unsorted set that does not allow duplicates.</li>
        <li><code>LinkedHashSet</code>: A set that maintains the insertion order of elements while ensuring no duplicates.</li>
        <li><code>TreeSet</code>: A set that stores elements in a sorted order based on their natural ordering or a custom comparator.</li>
    </ul>
    
    <h3>Queue Implementations</h3>
    <ul>
        <li><code>PriorityQueue</code>: A queue that orders its elements according to their natural ordering or based on a custom comparator.</li>
        <li><code>LinkedList</code>: Also implements the Queue interface, providing FIFO behavior.</li>
    </ul>
    
    <h3>Map Implementations</h3>
    <ul>
        <li><code>HashMap</code>: A hash table implementation of the Map interface. It allows null keys and values and provides constant-time performance for basic operations.</li>
        <li><code>LinkedHashMap</code>: A hash table implementation that maintains the insertion order of keys.</li>
        <li><code>TreeMap</code>: A map that stores keys in sorted order, based on their natural ordering or a custom comparator.</li>
    </ul>

    <h2>Example 1: Using ArrayList (List Implementation)</h2>
    <pre><code>
    import java.util.ArrayList;
    import java.util.List;

    public class Main {
        public static void main(String[] args) {
            List<String> names = new ArrayList<>();
            names.add("Alice");
            names.add("Bob");
            names.add("Charlie");

            System.out.println("Names: " + names);  // Output: Names: [Alice, Bob, Charlie]

            names.remove("Bob");

            System.out.println("After Removal: " + names);  // Output: After Removal: [Alice, Charlie]
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> In this example, an <code>ArrayList</code> is used to store names. The <code>add()</code> method is used to add elements, and the <code>remove()</code> method removes an element by value. The resulting list is printed before and after removal.</p>

    <h2>Example 2: Using HashSet (Set Implementation)</h2>
    <pre><code>
    import java.util.HashSet;
    import java.util.Set;

    public class Main {
        public static void main(String[] args) {
            Set<Integer> numbers = new HashSet<>();
            numbers.add(1);
            numbers.add(2);
            numbers.add(3);
            numbers.add(3);  // Duplicate element

            System.out.println("Numbers: " + numbers);  // Output: Numbers: [1, 2, 3]
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> In this example, a <code>HashSet</code> is used to store integers. Even though the value 3 is added twice, the set ensures that no duplicates are present, resulting in a set with unique elements.</p>

    <h2>Example 3: Using HashMap (Map Implementation)</h2>
    <pre><code>
    import java.util.HashMap;
    import java.util.Map;

    public class Main {
        public static void main(String[] args) {
            Map<String, Integer> ages = new HashMap<>();
            ages.put("Alice", 25);
            ages.put("Bob", 30);
            ages.put("Charlie", 35);

            System.out.println("Ages: " + ages);  // Output: Ages: {Alice=25, Bob=30, Charlie=35}

            ages.put("Alice", 26);  // Update Alice's age

            System.out.println("Updated Ages: " + ages);  // Output: Updated Ages: {Alice=26, Bob=30, Charlie=35}
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> In this example, a <code>HashMap</code> is used to store key-value pairs representing names and ages. The <code>put()</code> method is used to add or update entries, and the updated map is printed.</p>

    <h2>Iterator Interface</h2>
    <p>The <code>Iterator</code> interface provides methods to iterate over collections. It defines three primary methods: <code>hasNext()</code>, <code>next()</code>, and <code>remove()</code>.</p>

    <h3>Example 4: Using Iterator to Traverse a List</h3>
    <pre><code>
    import java.util.ArrayList;
    import java.util.Iterator;
    import java.util.List;

    public class Main {
        public static void main(String[] args) {
            List<String> names = new ArrayList<>();
            names.add("Alice");
            names.add("Bob");
            names.add("Charlie");

            Iterator<String> iterator = names.iterator();
            while (iterator.hasNext()) {
                System.out.println(iterator.next());
            }
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> In this example, an <code>Iterator</code> is used to traverse through a list. The <code>hasNext()</code> method checks if more elements are present, and <code>next()</code> retrieves the next element.</p>

    <h2>Common Algorithms in Collections Framework</h2>
    <p>Java provides several algorithms in the <code>Collections</code> class to operate on collections. Some of the most commonly used methods are:</p>
    <ul>
        <li><code>sort(List)</code>: Sorts a list using its natural ordering or a custom comparator.</li>
        <li><code>reverse(List)</code>: Reverses the elements of a list.</li>
        <li><code>shuffle(List)</code>: Randomly shuffles the elements of a list.</li>
        <li><code>binarySearch(List, key)</code>: Searches for a key in a sorted list using binary search.</li>
        <li><code>min(Collection)</code>: Returns the minimum element from a collection.</li>
        <li><code>max(Collection)</code>: Returns the maximum element from a collection.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>The Java Collections Framework provides a flexible and efficient way to handle data. It allows developers to work with various data structures, providing a wide range of functionalities and algorithms for manipulating collections.</p>

</body>
</html>
`;
            break;
        case 'streams':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Streams API in Java - Detailed Explanation</title>
</head>
<body>
    <h1>Java Streams API</h1>
    
    <h2>Introduction to Streams API</h2>
    <p>The Streams API in Java, introduced in Java 8, provides a powerful and efficient way to process collections of objects in a functional style. Streams allow developers to perform operations such as filtering, mapping, reducing, and collecting data without modifying the underlying collection.</p>
    
    <p>Streams are a sequence of elements that can be processed in parallel or sequentially. Unlike collections, streams do not store data, they convey elements from a source such as a collection, array, or I/O channel through a pipeline of computational operations.</p>
    
    <h2>Streams vs Collections</h2>
    <p>Collections are data structures that store data, whereas streams are sequences of data that are processed. The key differences are:</p>
    <ul>
        <li><strong>Collections:</strong> Store data in memory and can be modified.</li>
        <li><strong>Streams:</strong> Do not store data, are read-only, and typically process data in a functional manner.</li>
    </ul>
    
    <h2>Key Concepts of Streams API</h2>
    <ul>
        <li><strong>Source:</strong> The stream is created from a source such as a collection, array, or file.</li>
        <li><strong>Intermediate Operations:</strong> Operations that transform the stream into another stream (e.g., <code>filter()</code>, <code>map()</code>, <code>sorted()</code>). These operations are lazy and are not executed until a terminal operation is invoked.</li>
        <li><strong>Terminal Operations:</strong> Operations that produce a result or a side-effect (e.g., <code>collect()</code>, <code>forEach()</code>, <code>reduce()</code>). A stream can only be traversed once, and terminal operations consume the stream.</li>
    </ul>

    <h2>Example 1: Creating a Stream from a Collection</h2>
    <pre><code>
    import java.util.List;
    import java.util.stream.Collectors;

    public class Main {
        public static void main(String[] args) {
            List<String> names = List.of("Alice", "Bob", "Charlie", "David");

            // Create a stream and filter names starting with 'A'
            List<String> filteredNames = names.stream()
                                              .filter(name -> name.startsWith("A"))
                                              .collect(Collectors.toList());

            System.out.println("Filtered Names: " + filteredNames);  // Output: [Alice]
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> In this example, a stream is created from a list of names using the <code>stream()</code> method. The <code>filter()</code> intermediate operation is used to select names that start with "A", and the result is collected into a new list using <code>collect()</code>.</p>

    <h2>Intermediate Operations</h2>
    <p>Intermediate operations return a new stream and are lazy. They are not executed until a terminal operation is invoked. Some commonly used intermediate operations are:</p>
    <ul>
        <li><code>filter()</code>: Filters elements based on a condition.</li>
        <li><code>map()</code>: Transforms each element using a given function.</li>
        <li><code>sorted()</code>: Sorts the stream based on natural ordering or a custom comparator.</li>
        <li><code>distinct()</code>: Removes duplicate elements from the stream.</li>
        <li><code>limit()</code>: Limits the stream to a specific number of elements.</li>
    </ul>

    <h3>Example 2: Using map and sorted</h3>
    <pre><code>
    import java.util.List;
    import java.util.stream.Collectors;

    public class Main {
        public static void main(String[] args) {
            List<String> names = List.of("Alice", "Bob", "Charlie", "David");

            // Convert names to uppercase and sort them
            List<String> processedNames = names.stream()
                                              .map(String::toUpperCase)
                                              .sorted()
                                              .collect(Collectors.toList());

            System.out.println("Processed Names: " + processedNames);  // Output: [ALICE, BOB, CHARLIE, DAVID]
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The <code>map()</code> operation is used to convert each name to uppercase, and <code>sorted()</code> sorts the names alphabetically. The final list is collected using <code>collect()</code>.</p>

    <h2>Terminal Operations</h2>
    <p>Terminal operations produce a result or a side-effect, such as collecting elements into a new collection or iterating over them. Some commonly used terminal operations are:</p>
    <ul>
        <li><code>collect()</code>: Collects elements into a collection (e.g., List, Set).</li>
        <li><code>forEach()</code>: Performs an action for each element in the stream.</li>
        <li><code>reduce()</code>: Combines the elements of the stream into a single result.</li>
        <li><code>count()</code>: Returns the number of elements in the stream.</li>
        <li><code>anyMatch(), allMatch(), noneMatch()</code>: Checks if any, all, or none of the elements match a given condition.</li>
    </ul>

    <h3>Example 3: Using forEach and reduce</h3>
    <pre><code>
    import java.util.List;
    import java.util.stream.Collectors;

    public class Main {
        public static void main(String[] args) {
            List<Integer> numbers = List.of(1, 2, 3, 4, 5);

            // Print each number using forEach
            numbers.stream().forEach(System.out::println);

            // Sum of all numbers using reduce
            int sum = numbers.stream().reduce(0, (a, b) -> a + b);
            System.out.println("Sum: " + sum);  // Output: Sum: 15
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The <code>forEach()</code> method iterates over the stream and prints each number. The <code>reduce()</code> method combines the elements of the stream by summing them.</p>

    <h2>Parallel Streams</h2>
    <p>Streams can be processed sequentially (one element at a time) or in parallel (using multiple threads). To process a stream in parallel, you can use the <code>parallelStream()</code> method. Parallel streams are particularly useful for large data sets that can be processed concurrently.</p>

    <h3>Example 4: Using parallelStream</h3>
    <pre><code>
    import java.util.List;

    public class Main {
        public static void main(String[] args) {
            List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

            // Using parallelStream to process elements in parallel
            numbers.parallelStream().forEach(System.out::println);
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The <code>parallelStream()</code> method allows the stream to be processed in parallel. Each element is processed by different threads, which can improve performance when dealing with large data sets.</p>

    <h2>Common Operations in Streams API</h2>
    <p>The Streams API provides several useful operations for processing streams. Here are some of the most common:</p>
    <ul>
        <li><code>filter()</code>: Filters elements based on a condition.</li>
        <li><code>map()</code>: Transforms elements.</li>
        <li><code>reduce()</code>: Combines elements into a single result.</li>
        <li><code>collect()</code>: Collects elements into a collection.</li>
        <li><code>forEach()</code>: Performs an action on each element.</li>
        <li><code>anyMatch(), allMatch(), noneMatch()</code>: Check if a condition is met.</li>
        <li><code>distinct()</code>: Removes duplicate elements.</li>
        <li><code>sorted()</code>: Sorts elements.</li>
        <li><code>limit()</code>: Limits the number of elements.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>The Streams API provides a functional approach to processing collections, making it more readable, expressive, and concise. It enables developers to work with data in a pipeline fashion and supports both sequential and parallel operations, allowing better performance for large-scale data processing.</p>

</body>
</html>
`;
            break;
        case 'multithreading':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multithreading in Java - Detailed Explanation</title>
</head>
<body>
    <h1>Multithreading in Java</h1>
    
    <h2>Introduction to Multithreading</h2>
    <p>Multithreading is a core concept in Java that allows the execution of two or more threads concurrently. A thread is the smallest unit of execution in a program. Java supports multithreading, which allows for the development of highly responsive and efficient applications that can perform multiple tasks simultaneously.</p>

    <p>In Java, multithreading is a technique where multiple threads run in parallel, sharing the same resources such as memory, CPU, etc. Each thread is a lightweight process and can execute a part of a program independently of others.</p>

    <h2>Why Use Multithreading?</h2>
    <p>Multithreading provides several benefits, including:</p>
    <ul>
        <li><strong>Improved performance:</strong> Multithreading allows parallel execution, which helps in making better use of CPU resources and improving the overall performance of the application.</li>
        <li><strong>Resource Sharing:</strong> Multiple threads can share resources, such as memory and data, which reduces resource consumption.</li>
        <li><strong>Responsiveness:</strong> Multithreading is essential for applications that need to remain responsive, such as graphical user interfaces (GUIs) and web applications.</li>
        <li><strong>Better utilization of multi-core processors:</strong> It takes full advantage of multi-core processors by distributing the workload across multiple CPU cores.</li>
    </ul>

    <h2>Creating Threads in Java</h2>
    <p>In Java, you can create threads in two ways:</p>
    <ul>
        <li><strong>By extending the Thread class:</strong> You create a new class that extends the <code>Thread</code> class and overrides its <code>run()</code> method.</li>
        <li><strong>By implementing the Runnable interface:</strong> You create a class that implements the <code>Runnable</code> interface and overrides its <code>run()</code> method.</li>
    </ul>

    <h3>Example 1: Creating a Thread by Extending the Thread Class</h3>
    <pre><code>
    class MyThread extends Thread {
        public void run() {
            for (int i = 0; i < 5; i++) {
                System.out.println("Thread is running: " + i);
            }
        }

        public static void main(String[] args) {
            MyThread t1 = new MyThread();
            t1.start();  // Starts the thread
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> In this example, the <code>MyThread</code> class extends the <code>Thread</code> class. The <code>run()</code> method contains the code that will be executed in the new thread. The thread is started using the <code>start()</code> method, which internally invokes the <code>run()</code> method in a separate thread of execution.</p>

    <h3>Example 2: Creating a Thread by Implementing the Runnable Interface</h3>
    <pre><code>
    class MyRunnable implements Runnable {
        public void run() {
            for (int i = 0; i < 5; i++) {
                System.out.println("Runnable thread is running: " + i);
            }
        }

        public static void main(String[] args) {
            MyRunnable myRunnable = new MyRunnable();
            Thread t1 = new Thread(myRunnable);
            t1.start();  // Starts the thread
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> In this example, the <code>MyRunnable</code> class implements the <code>Runnable</code> interface. The <code>run()</code> method is implemented in the class. A thread is created by passing an instance of <code>MyRunnable</code> to the <code>Thread</code> constructor. The thread is then started using the <code>start()</code> method.</p>

    <h2>Thread Lifecycle</h2>
    <p>A thread in Java can be in one of the following states during its lifecycle:</p>
    <ul>
        <li><strong>New:</strong> A thread that has been created but has not yet started.</li>
        <li><strong>Runnable:</strong> A thread that is ready to run, but the CPU has not yet given it time to execute.</li>
        <li><strong>Running:</strong> A thread that is currently executing.</li>
        <li><strong>Blocked:</strong> A thread that is waiting for a resource (e.g., I/O or a lock) and cannot proceed until the resource becomes available.</li>
        <li><strong>Terminated:</strong> A thread that has completed its execution.</li>
    </ul>

    <h2>Thread Methods</h2>
    <p>Java provides several methods to manage threads. Some commonly used methods are:</p>
    <ul>
        <li><code>start()</code>: Starts a thread and calls the <code>run()</code> method.</li>
        <li><code>run()</code>: Contains the code that is executed by the thread.</li>
        <li><code>sleep()</code>: Pauses the execution of the current thread for a specified time.</li>
        <li><code>join()</code>: Waits for a thread to finish its execution before allowing the main thread to continue.</li>
        <li><code>interrupt()</code>: Interrupts the thread, causing it to stop its execution.</li>
    </ul>

    <h2>Example 3: Using sleep and join Methods</h2>
    <pre><code>
    class MyThread extends Thread {
        public void run() {
            for (int i = 0; i < 5; i++) {
                System.out.println("Running: " + i);
                try {
                    Thread.sleep(1000);  // Pauses for 1 second
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }

        public static void main(String[] args) {
            MyThread t1 = new MyThread();
            t1.start();
            try {
                t1.join();  // Main thread waits for t1 to finish
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("Main thread continues after t1 has finished.");
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The <code>sleep()</code> method pauses the thread for a specified duration (1 second in this case). The <code>join()</code> method allows the main thread to wait for the <code>MyThread</code> thread to finish before continuing execution.</p>

    <h2>Thread Synchronization</h2>
    <p>In multithreading, multiple threads can access shared resources at the same time, leading to data inconsistency. To prevent this, synchronization is used. Synchronization ensures that only one thread can access a particular resource at a time.</p>

    <h3>Example 4: Synchronized Method</h3>
    <pre><code>
    class Counter {
        private int count = 0;

        public synchronized void increment() {
            count++;
        }

        public int getCount() {
            return count;
        }

        public static void main(String[] args) {
            Counter counter = new Counter();
            Thread t1 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) {
                    counter.increment();
                }
            });
            Thread t2 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) {
                    counter.increment();
                }
            });

            t1.start();
            t2.start();
            try {
                t1.join();
                t2.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("Final count: " + counter.getCount());
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> The <code>synchronized</code> keyword ensures that only one thread can execute the <code>increment()</code> method at a time, preventing data inconsistency when multiple threads update the count simultaneously.</p>

    <h2>Thread Priorities</h2>
    <p>Java allows threads to have different priorities, which determines the order in which they are scheduled for execution. The priority of a thread is set using the <code>setPriority()</code> method and can be one of the following constants:</p>
    <ul>
        <li><code>Thread.MIN_PRIORITY</code> (1)</li>
        <li><code>Thread.NORM_PRIORITY</code> (5)</li>
        <li><code>Thread.MAX_PRIORITY</code> (10)</li>
    </ul>
    <p>By default, all threads have <code>NORM_PRIORITY</code>.</p>
    <h1>Thread Priority in Java</h1>

    <h2>Understanding Thread Priority</h2>
    <p>Java allows assigning priorities to threads, which helps the operating system determine when to schedule each thread for execution. Threads can have priorities from 1 to 10, where 1 is the lowest priority and 10 is the highest priority.</p>

    <h3>Key Methods for Thread Priority</h3>
    <ul>
        <li><strong>setPriority(int priority):</strong> Used to set the priority of a thread.</li>
        <li><strong>getPriority():</strong> Retrieves the current priority of the thread.</li>
        <li><strong>Thread.MIN_PRIORITY (1):</strong> The minimum priority.</li>
        <li><strong>Thread.NORM_PRIORITY (5):</strong> The default priority.</li>
        <li><strong>Thread.MAX_PRIORITY (10):</strong> The maximum priority.</li>
    </ul>

    <!-- Example: Thread Priority Example -->
    <h3>Example: Using Thread Priority</h3>
    <pre><code>
    class MyThread extends Thread {
        public void run() {
            for (int i = 0; i < 5; i++) {
                System.out.println(Thread.currentThread().getName() + " is executing with priority: " + Thread.currentThread().getPriority());
            }
        }

        public static void main(String[] args) {
            MyThread t1 = new MyThread();
            MyThread t2 = new MyThread();
            MyThread t3 = new MyThread();

            // Setting priorities
            t1.setPriority(Thread.MIN_PRIORITY);    // Low priority
            t2.setPriority(Thread.NORM_PRIORITY);  // Normal priority
            t3.setPriority(Thread.MAX_PRIORITY);    // High priority

            t1.start();
            t2.start();
            t3.start();

            try {
                t1.join();
                t2.join();
                t3.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
    </code></pre>
    <p><strong>Explanation:</strong> In this example, three threads are created, and their priorities are set to low, normal, and high using <code>setPriority()</code>. The output shows the thread name and priority during execution.</p>

    <h2>Thread Priority Behavior</h2>
    <p>Although threads are assigned priorities, it doesn't guarantee the order of execution. The operating system's thread scheduler decides when a thread should run based on several factors, including priority. However, threads with higher priorities will generally get more CPU time.</p>


    <h2>Conclusion</h2>
    <p>Multithreading in Java is a powerful concept that allows for concurrent execution of tasks, improving performance and responsiveness. It is essential for developing applications that require efficient resource management and responsiveness, such as GUIs, real-time applications, and server-side programming.</p>
</body>
</html>
`;
            break;
        case 'garbage':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Garbage Collection in Java</title>
</head>
<body>
    <h1>Garbage Collection in Java</h1>
    <p>
        Garbage Collection (GC) in Java is an automatic process used to reclaim memory by deleting objects 
        that are no longer in use. In Java, developers do not need to manually manage memory allocation 
        and deallocation; the Java Virtual Machine (JVM) handles memory management and garbage collection.
    </p>

    <h2>Key Concepts</h2>
    <ul>
        <li><strong>Garbage Collector (GC)</strong>: The GC is responsible for finding and deleting objects 
            that are no longer referenced, releasing their memory back to the heap.</li>
        <li><strong>Heap Memory</strong>: The heap is a region of memory used for dynamic memory allocation. 
            It contains objects created during runtime.</li>
        <li><strong>Reachable vs. Unreachable Objects</strong>: An object is "reachable" if it can be accessed 
            via a chain of references from active threads or static fields. If no such chain exists, the object 
            becomes "unreachable" and can be collected by the GC.</li>
    </ul>

    <h2>How Garbage Collection Works</h2>
    <p>
        Java Garbage Collection works using the Mark and Sweep Algorithm. The process includes two phases:
        <ol>
            <li><strong>Mark:</strong> The GC identifies all live objects (reachable objects) and marks them.</li>
            <li><strong>Sweep:</strong> The GC removes all unmarked objects (unreachable objects) and frees the memory.</li>
        </ol>
    </p>

    <h2>Types of Garbage Collectors</h2>
    <ul>
        <li><strong>Serial Garbage Collector</strong>: Used in single-threaded environments.</li>
        <li><strong>Parallel Garbage Collector</strong>: Uses multiple threads to speed up garbage collection.</li>
        <li><strong>Concurrent Mark-Sweep (CMS) Collector</strong>: Minimizes pause times by performing most of its work concurrently with the application threads.</li>
        <li><strong>G1 Garbage Collector</strong>: Used in large applications, with a goal of low pause times and high throughput.</li>
    </ul>

    <h2>Examples of Garbage Collection</h2>

    <h3>Example 1: Simple Example of Garbage Collection</h3>
    <pre>
public class GCExample {
    public static void main(String[] args) {
        Employee e1 = new Employee("John", 25);
        Employee e2 = new Employee("Jane", 28);

        // After the object reference is set to null, the object becomes eligible for garbage collection.
        e1 = null;

        System.gc(); // Requesting garbage collection manually (not recommended for real-world use)
    }
}

class Employee {
    String name;
    int age;

    Employee(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    protected void finalize() throws Throwable {
        System.out.println("Garbage collected for " + name);
        super.finalize();
    }
}
    </pre>
    <p>
        In this example, the object <strong>e1</strong> becomes eligible for garbage collection when it is set to <strong>null</strong>. The 
        <strong>finalize()</strong> method is called when the object is garbage collected, printing a message indicating that the 
        object has been cleaned up.
    </p>

    <h3>Example 2: Demonstrating Unreachable Objects</h3>
    <pre>
public class UnreachableExample {
    public static void main(String[] args) {
        String str = new String("Hello");
        str = null; // Now str is unreachable

        // Requesting garbage collection
        System.gc(); 
    }
}
    </pre>
    <p>
        When the reference <strong>str</strong> is set to <strong>null</strong>, the object it refers to becomes unreachable. The object becomes 
        eligible for garbage collection.
    </p>

    <h3>Example 3: Object Creation and GC Notification</h3>
    <pre>
public class ObjectGC {
    public static void main(String[] args) {
        Employee e1 = new Employee("Mike", 30);
        Employee e2 = new Employee("Sara", 22);

        // Employee e1 is no longer needed
        e1 = null;

        System.gc(); // Requesting garbage collection
    }
}
    </pre>
    <p>
        After setting <strong>e1</strong> to <strong>null</strong>, the object is eligible for garbage collection. The GC will clean it up when it runs.
    </p>

    <h3>Example 4: Automatically Called <code>finalize()</code></h3>
    <pre>
class Test {
    @Override
    protected void finalize() throws Throwable {
        System.out.println("Object is being garbage collected.");
        super.finalize();
    }

    public static void main(String[] args) {
        Test obj = new Test();
        obj = null;  // Making the object eligible for GC
        System.gc();  // Manually invoking GC
    }
}
    </pre>
    <p>
        The <strong>finalize()</strong> method is invoked when the object is garbage collected. This method allows you to define 
        cleanup actions before the object is collected.
    </p>

    <h3>Example 5: Garbage Collection with Multiple Objects</h3>
    <pre>
public class MultiObjectGC {
    public static void main(String[] args) {
        Employee e1 = new Employee("Alice", 30);
        Employee e2 = new Employee("Bob", 25);

        e1 = null;  // e1 object becomes unreachable
        e2 = null;  // e2 object becomes unreachable

        System.gc(); // Requesting garbage collection
    }
}
    </pre>
    <p>
        Both objects <strong>e1</strong> and <strong>e2</strong> are made unreachable, so they will be garbage collected when the GC runs.
    </p>

    <h3>Example 6: Preventing Garbage Collection with Strong Reference</h3>
    <pre>
public class PreventGC {
    public static void main(String[] args) {
        Employee e1 = new Employee("Jake", 35);

        // e1 has a strong reference, and the object will not be garbage collected
        System.gc();  // Garbage collection is requested, but the object will not be collected
    }
}
    </pre>
    <p>
        The object <strong>e1</strong> still has a strong reference, so it will not be garbage collected, even when GC is manually requested.
    </p>

    <h3>Example 7: Soft Reference Example</h3>
    <pre>
import java.lang.ref.SoftReference;

public class SoftReferenceExample {
    public static void main(String[] args) {
        Employee e1 = new Employee("Luke", 28);

        // Soft reference to the object
        SoftReference<Employee> softRef = new SoftReference<>(e1);

        // The object can be garbage collected when memory is low
        e1 = null;

        // Suggest garbage collection
        System.gc();
    }
}
    </pre>
    <p>
        A soft reference holds a reference to the object. The object can be collected when the JVM is running out of memory.
    </p>

    <h2>Conclusion</h2>
    <p>
        In Java, Garbage Collection is an automatic process that helps to manage memory by deleting objects that are 
        no longer reachable. Java provides different types of collectors, such as the Serial GC, Parallel GC, CMS GC, 
        and G1 GC. It is important to note that while we can request garbage collection, we cannot force it to happen 
        at any specific time, and it is not recommended to manually invoke GC in production code.
    </p>

</body>
</html>
`;
            break;
        case 'jdbc':
            contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JDBC and Database Connection</title>
</head>
<body>
    <h1>JDBC and Database Connection</h1>

    <p>
        Java Database Connectivity (JDBC) is an API that allows Java applications to interact with databases. It provides a standard interface for connecting to relational databases, executing SQL queries, and retrieving results. JDBC enables Java programs to perform database operations such as inserting, updating, deleting, and querying data.
    </p>

    <h2>Key Concepts</h2>
    <ul>
        <li><strong>Driver Manager:</strong> A class that manages a list of database drivers.</li>
        <li><strong>Connection:</strong> A connection between the Java application and the database.</li>
        <li><strong>Statement:</strong> Used to execute SQL queries.</li>
        <li><strong>ResultSet:</strong> Represents the result set obtained from querying a database.</li>
        <li><strong>PreparedStatement:</strong> A special kind of statement used for executing parameterized queries.</li>
    </ul>

    <h2>Steps to Connect to a Database using JDBC</h2>
    <ol>
        <li>Load the database driver class.</li>
        <li>Establish a connection to the database.</li>
        <li>Create a statement object to execute SQL queries.</li>
        <li>Execute the query and process the result set.</li>
        <li>Close the connection and clean up resources.</li>
    </ol>

    <h2>JDBC Example Code</h2>

    <h3>Example 1: Loading JDBC Driver</h3>
    <pre>
public class JDBCExample {
    public static void main(String[] args) {
        try {
            // Loading the JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("JDBC Driver loaded successfully");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
    </pre>
    <p>
        This example demonstrates how to load a JDBC driver using the <code>Class.forName()</code> method. 
        In this case, we are loading the MySQL driver.
    </p>

    <h3>Example 2: Establishing a Database Connection</h3>
    <pre>
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCConnection {
    public static void main(String[] args) {
        Connection connection = null;
        try {
            // Establishing a connection to the database
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "username", "password");
            System.out.println("Connected to the database successfully");
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (connection != null) {
                    connection.close(); // Closing the connection
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
    </pre>
    <p>
        This example demonstrates how to establish a connection to a MySQL database using the JDBC <code>DriverManager</code>.
        The database URL specifies the database location, and the username and password are used for authentication.
    </p>

    <h3>Example 3: Executing a SQL Query</h3>
    <pre>
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.SQLException;

public class ExecuteQuery {
    public static void main(String[] args) {
        Connection connection = null;
        Statement statement = null;
        try {
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "username", "password");
            statement = connection.createStatement();

            // Executing an SQL query to insert data
            String query = "INSERT INTO employees (id, name, salary) VALUES (1, 'John', 1000)";
            int result = statement.executeUpdate(query);
            System.out.println(result + " record(s) inserted");
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
    </pre>
    <p>
        In this example, we execute an SQL <code>INSERT</code> query using a <code>Statement</code> object. 
        After executing the query, the number of affected rows is printed.
    </p>

    <h3>Example 4: Retrieving Data Using ResultSet</h3>
    <pre>
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class RetrieveData {
    public static void main(String[] args) {
        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;
        try {
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "username", "password");
            statement = connection.createStatement();

            // Executing a query to fetch data
            String query = "SELECT id, name, salary FROM employees";
            resultSet = statement.executeQuery(query);

            // Iterating through the result set
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                double salary = resultSet.getDouble("salary");
                System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
    </pre>
    <p>
        This example demonstrates how to retrieve data from a database using a <code>ResultSet</code>. 
        We iterate through the <code>ResultSet</code> to fetch data from the "employees" table.
    </p>

    <h3>Example 5: Using PreparedStatement for Parameterized Queries</h3>
    <pre>
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class PreparedStatementExample {
    public static void main(String[] args) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "username", "password");

            // Using PreparedStatement for inserting data
            String query = "INSERT INTO employees (id, name, salary) VALUES (?, ?, ?)";
            preparedStatement = connection.prepareStatement(query);

            // Setting parameters
            preparedStatement.setInt(1, 2);
            preparedStatement.setString(2, "Alice");
            preparedStatement.setDouble(3, 1200);

            // Executing the query
            int result = preparedStatement.executeUpdate();
            System.out.println(result + " record(s) inserted");
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
    </pre>
    <p>
        In this example, we use a <code>PreparedStatement</code> to insert data into the database. 
        PreparedStatement helps avoid SQL injection attacks and improves performance for repeated queries.
    </p>

    <h3>Example 6: Using Batch Processing with JDBC</h3>
    <pre>
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class BatchProcessingExample {
    public static void main(String[] args) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "username", "password");

            String query = "INSERT INTO employees (id, name, salary) VALUES (?, ?, ?)";
            preparedStatement = connection.prepareStatement(query);

            // Adding multiple insert statements to the batch
            preparedStatement.setInt(1, 3);
            preparedStatement.setString(2, "Bob");
            preparedStatement.setDouble(3, 1500);
            preparedStatement.addBatch();

            preparedStatement.setInt(1, 4);
            preparedStatement.setString(2, "Charlie");
            preparedStatement.setDouble(3, 1800);
            preparedStatement.addBatch();

            // Executing the batch
            int[] result = preparedStatement.executeBatch();
            System.out.println("Batch executed, " + result.length + " records inserted.");
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
    </pre>
    <p>
        This example demonstrates how to use batch processing with <code>PreparedStatement</code> to execute multiple SQL statements efficiently.
    </p>

    <h3>Example 7: Handling SQL Exceptions</h3>
    <pre>
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class SQLExceptionHandlingExample {
    public static void main(String[] args) {
        Connection connection = null;
        Statement statement = null;
        try {
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "username", "password");
            statement = connection.createStatement();

            // Executing a query with a potential error
            String query = "SELECT * FROM non_existing_table";
            statement.executeQuery(query);
        } catch (SQLException e) {
            // Handling SQL exceptions
            System.err.println("SQL Exception: " + e.getMessage());
            e.printStackTrace();
        } finally {
            try {
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
    </pre>
    <p>
        This example demonstrates how to handle SQL exceptions in JDBC. If an SQL error occurs, 
        the exception message and stack trace are printed for debugging purposes.
    </p>
</body>
</html>
`;
            break;
        case 'annotations':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Annotations in Java</title>
</head>
<body>
    <h1>Annotations in Java</h1>

    <p>
        In Java, annotations are special types of metadata that provide data about a program but do not change its behavior. Annotations are used to provide additional information to the compiler or at runtime. They can be applied to classes, methods, fields, parameters, and other elements of a Java program.
    </p>

    <h2>Common Uses of Annotations</h2>
    <ul>
        <li><strong>Compile-time checking:</strong> Annotations can be used to provide information that is used by the compiler during compilation.</li>
        <li><strong>Runtime processing:</strong> Some annotations are available at runtime and can be processed using reflection.</li>
        <li><strong>Code generation:</strong> Annotations are commonly used in frameworks and libraries to automate code generation (e.g., in Hibernate, Spring).</li>
    </ul>

    <h2>Types of Annotations</h2>
    <p>
        There are several types of annotations in Java:
    </p>
    <ul>
        <li><strong>Marker annotations:</strong> These annotations do not have any members. Example: <code>@Override</code></li>
        <li><strong>Single-value annotations:</strong> These annotations contain a single element. Example: <code>@FunctionalInterface</code></li>
        <li><strong>Multi-value annotations:</strong> These annotations contain multiple elements. Example: <code>@Entity</code></li>
    </ul>

    <h2>Example 1: Using the @Override Annotation</h2>
    <pre>
public class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }

    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.makeSound();
    }
}
    </pre>
    <p>
        The <code>@Override</code> annotation tells the compiler that the method in the subclass is intended to override a method in the superclass. If the method signature in the subclass doesn't match the method in the superclass, the compiler will throw an error.
    </p>

    <h2>Example 2: Using the @Deprecated Annotation</h2>
    <pre>
public class OldClass {
    @Deprecated
    public void oldMethod() {
        System.out.println("This method is deprecated.");
    }

    public static void main(String[] args) {
        OldClass obj = new OldClass();
        obj.oldMethod();
    }
}
    </pre>
    <p>
        The <code>@Deprecated</code> annotation marks a method as deprecated. It indicates that the method is outdated and might be removed in future versions. The compiler generates a warning if you use a deprecated method.
    </p>

    <h2>Example 3: Creating a Custom Annotation</h2>
    <pre>
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface MyCustomAnnotation {
    String value() default "Custom Annotation";
}

public class MyClass {
    @MyCustomAnnotation(value = "Test Method")
    public void myMethod() {
        System.out.println("This method has a custom annotation");
    }

    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.myMethod();
    }
}
    </pre>
    <p>
        In this example, we define a custom annotation <code>@MyCustomAnnotation</code>. It is applied to the method <code>myMethod</code>, and we can use reflection to process this annotation during runtime.
    </p>

    <h2>Example 4: Using the @SuppressWarnings Annotation</h2>
    <pre>
public class WarningExample {
    @SuppressWarnings("unchecked")
    public void useUncheckedCode() {
        List list = new ArrayList();
        list.add("Unchecked warning");
    }

    public static void main(String[] args) {
        WarningExample example = new WarningExample();
        example.useUncheckedCode();
    }
}
    </pre>
    <p>
        The <code>@SuppressWarnings</code> annotation is used to suppress compiler warnings. In this case, we suppress the "unchecked" warning when using a raw type for the <code>ArrayList</code>.
    </p>

    <h2>Example 5: Using the @Entity Annotation (Common in ORM frameworks)</h2>
    <pre>
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    private int id;
    private String name;

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
    </pre>
    <p>
        The <code>@Entity</code> annotation is used in Java Persistence API (JPA) to mark a class as an entity. This class will be mapped to a table in the database. The <code>@Id</code> annotation marks the primary key of the entity.
    </p>

    <h2>Example 6: Using the @FunctionalInterface Annotation</h2>
    <pre>
@FunctionalInterface
public interface MyFunctionalInterface {
    void myMethod();

    // The following method would cause a compilation error since it violates the functional interface rule
    // void anotherMethod();
}
    </pre>
    <p>
        The <code>@FunctionalInterface</code> annotation ensures that the interface is a functional interface, which means it must have exactly one abstract method. It can have multiple default or static methods.
    </p>

    <h2>Example 7: Using @Retention and @Target in Custom Annotations</h2>
    <pre>
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.lang.annotation.ElementType;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface MyFieldAnnotation {
    String description() default "No description";
}

public class MyClass {
    @MyFieldAnnotation(description = "This is a custom annotation on a field")
    private String myField;

    public static void main(String[] args) {
        MyClass obj = new MyClass();
        System.out.println(obj.myField);
    }
}
    </pre>
    <p>
        In this example, the <code>@Retention</code> annotation defines whether the annotation should be available at runtime or compile time. The <code>@Target</code> annotation specifies where the annotation can be applied (e.g., to methods, fields, etc.).
    </p>

    <h2>Conclusion</h2>
    <p>
        Annotations play an important role in modern Java programming, especially in frameworks and libraries like Spring, Hibernate, and JPA. They help developers add metadata to their code, which can be processed at compile-time or runtime for various purposes such as validation, logging, and ORM mapping.
    </p>
</body>
</html>
`;
            break;
        case 'reflection':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reflection in Java</title>
</head>
<body>
    <h1>Reflection in Java</h1>

    <p>
        Reflection in Java is a powerful feature that allows you to inspect and manipulate classes, methods, fields, and other elements of a Java program during runtime. Through reflection, you can retrieve metadata about classes and even invoke methods or modify fields dynamically.
    </p>

    <h2>Why Use Reflection?</h2>
    <p>
        Reflection provides a way to inspect or modify the structure of a class dynamically. It is often used in frameworks like Spring, Hibernate, and JUnit for dependency injection, object-relational mapping, and test automation. However, reflection should be used carefully, as it can impact performance and security if misused.
    </p>

    <h2>Key Components of Reflection</h2>
    <p>
        Reflection provides several classes in the <code>java.lang.reflect</code> package to inspect and manipulate classes at runtime. The key components are:
    </p>
    <ul>
        <li><strong>Class</strong>: Represents the metadata of a class.</li>
        <li><strong>Field</strong>: Represents a field in a class.</li>
        <li><strong>Method</strong>: Represents a method in a class.</li>
        <li><strong>Constructor</strong>: Represents a constructor of a class.</li>
    </ul>

    <h2>Example 1: Getting Class Information</h2>
    <pre>
public class MyClass {
    public void myMethod() {
        System.out.println("Method called");
    }

    public static void main(String[] args) throws ClassNotFoundException {
        MyClass obj = new MyClass();
        Class<?> myClass = obj.getClass(); // Getting class information
        System.out.println("Class name: " + myClass.getName());
    }
}
    </pre>
    <p>
        In this example, we use the <code>getClass()</code> method to get the class information at runtime. The <code>getName()</code> method returns the name of the class.
    </p>

    <h2>Example 2: Accessing Methods Using Reflection</h2>
    <pre>
import java.lang.reflect.Method;

public class MyClass {
    public void myMethod() {
        System.out.println("Method called");
    }

    public static void main(String[] args) throws Exception {
        MyClass obj = new MyClass();
        Method method = obj.getClass().getMethod("myMethod"); // Accessing method by name
        method.invoke(obj); // Invoking method dynamically
    }
}
    </pre>
    <p>
        In this example, we use reflection to dynamically access and invoke the <code>myMethod</code> method. The <code>getMethod()</code> method retrieves the method by its name, and the <code>invoke()</code> method calls it on the object instance.
    </p>

    <h2>Example 3: Accessing Fields Using Reflection</h2>
    <pre>
import java.lang.reflect.Field;

public class MyClass {
    private String myField = "Hello, Reflection!";

    public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {
        MyClass obj = new MyClass();
        Field field = obj.getClass().getDeclaredField("myField"); // Accessing field
        field.setAccessible(true); // Make private field accessible
        String value = (String) field.get(obj); // Getting value of the field
        System.out.println("Field value: " + value);
    }
}
    </pre>
    <p>
        Here, we access the private field <code>myField</code> using reflection. The <code>getDeclaredField()</code> method retrieves the field, and <code>setAccessible(true)</code> allows us to bypass access modifiers. We then retrieve its value using <code>get()</code>.
    </p>

    <h2>Example 4: Accessing Constructors Using Reflection</h2>
    <pre>
import java.lang.reflect.Constructor;

public class MyClass {
    private String name;

    public MyClass(String name) {
        this.name = name;
    }

    public static void main(String[] args) throws Exception {
        Constructor<MyClass> constructor = MyClass.class.getConstructor(String.class); // Access constructor
        MyClass obj = constructor.newInstance("Reflection Constructor"); // Creating instance using constructor
        System.out.println("Object created with name: " + obj.name);
    }
}
    </pre>
    <p>
        In this example, we use reflection to access the constructor of <code>MyClass</code> that takes a String argument. The <code>getConstructor()</code> method retrieves the constructor, and <code>newInstance()</code> creates a new instance of the class.
    </p>

    <h2>Example 5: Modifying Fields Using Reflection</h2>
    <pre>
import java.lang.reflect.Field;

public class MyClass {
    private String myField = "Initial Value";

    public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {
        MyClass obj = new MyClass();
        Field field = obj.getClass().getDeclaredField("myField");
        field.setAccessible(true); // Make the private field accessible
        field.set(obj, "Modified Value"); // Set new value to the field
        System.out.println("Modified field value: " + obj.myField);
    }
}
    </pre>
    <p>
        Here, we use reflection to modify the value of a private field <code>myField</code>. We access the field using <code>getDeclaredField()</code>, and modify its value using <code>set()</code>.
    </p>

    <h2>Example 6: Invoking Private Methods Using Reflection</h2>
    <pre>
import java.lang.reflect.Method;

public class MyClass {
    private void privateMethod() {
        System.out.println("Private method invoked");
    }

    public static void main(String[] args) throws Exception {
        MyClass obj = new MyClass();
        Method method = obj.getClass().getDeclaredMethod("privateMethod");
        method.setAccessible(true); // Make private method accessible
        method.invoke(obj); // Invoke private method
    }
}
    </pre>
    <p>
        In this example, we use reflection to invoke a private method <code>privateMethod</code>. We use <code>getDeclaredMethod()</code> to access the private method, and <code>setAccessible(true)</code> allows us to bypass access control. Finally, we invoke the method using <code>invoke()</code>.
    </p>

    <h2>Example 7: Using Reflection for Array Manipulation</h2>
    <pre>
import java.lang.reflect.Array;

public class ArrayReflection {
    public static void main(String[] args) {
        int[] arr = (int[]) Array.newInstance(int.class, 5); // Create array using reflection
        Array.set(arr, 0, 10); // Set value in array
        Array.set(arr, 1, 20);
        System.out.println("Array element at index 0: " + Array.get(arr, 0)); // Get value from array
        System.out.println("Array element at index 1: " + Array.get(arr, 1));
    }
}
    </pre>
    <p>
        Reflection allows us to create and manipulate arrays dynamically. The <code>Array.newInstance()</code> method creates a new array of a specified type and length. We can use <code>Array.set()</code> to set values and <code>Array.get()</code> to retrieve values.
    </p>

    <h2>Reflection Performance Consideration</h2>
    <p>
        While reflection is powerful, it comes with performance overhead. Reflection operations are slower than regular code because it involves types being resolved at runtime. Reflection should be used carefully, especially in performance-critical applications.
    </p>

    <h2>Conclusion</h2>
    <p>
        Reflection is a versatile and powerful feature of Java, enabling introspection and manipulation of classes, fields, methods, and constructors at runtime. It is heavily used in frameworks like Spring and Hibernate for tasks such as dependency injection and ORM mapping. However, developers should be cautious of the performance and security implications when using reflection in their applications.
    </p>
</body>
</html>
`;
            break;
        case 'designpatterns':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design Patterns in Java</title>
</head>
<body>
    <h1>Design Patterns in Java</h1>

    <p>
        Design patterns are proven solutions to common software design problems. They provide a reusable and efficient approach to solving problems that arise during software development. In Java, design patterns help improve code readability, maintainability, and scalability.
    </p>

    <h2>Types of Design Patterns</h2>
    <p>
        Design patterns are generally categorized into three types:
    </p>
    <ul>
        <li><strong>Creational Patterns:</strong> Deal with object creation mechanisms.</li>
        <li><strong>Structural Patterns:</strong> Deal with object composition and organization.</li>
        <li><strong>Behavioral Patterns:</strong> Deal with communication between objects and how they interact.</li>
    </ul>

    <h2>1. Creational Design Patterns</h2>
    <p>
        Creational patterns deal with object creation mechanisms. They help create objects in a way that is suitable to the situation. This reduces the complexity of the object creation process and increases code flexibility.
    </p>

    <h3>Example 1: Singleton Pattern</h3>
    <pre>
public class Singleton {
    private static Singleton instance;

    private Singleton() { }

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}

public class Main {
    public static void main(String[] args) {
        Singleton obj1 = Singleton.getInstance();
        Singleton obj2 = Singleton.getInstance();
        System.out.println(obj1 == obj2); // Output: true (both are the same instance)
    }
}
    </pre>
    <p>
        The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. This is useful in cases where we need to control access to a shared resource.
    </p>

    <h3>Example 2: Factory Pattern</h3>
    <pre>
interface Shape {
    void draw();
}

class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing a Circle");
    }
}

class Rectangle implements Shape {
    public void draw() {
        System.out.println("Drawing a Rectangle");
    }
}

class ShapeFactory {
    public static Shape getShape(String shapeType) {
        if(shapeType == null) {
            return null;
        }
        if(shapeType.equalsIgnoreCase("CIRCLE")) {
            return new Circle();
        } else if(shapeType.equalsIgnoreCase("RECTANGLE")) {
            return new Rectangle();
        }
        return null;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape1 = ShapeFactory.getShape("CIRCLE");
        shape1.draw();

        Shape shape2 = ShapeFactory.getShape("RECTANGLE");
        shape2.draw();
    }
}
    </pre>
    <p>
        The Factory pattern allows the creation of objects without specifying the exact class of object that will be created. In this example, the ShapeFactory creates different shapes based on the input.
    </p>

    <h2>2. Structural Design Patterns</h2>
    <p>
        Structural patterns deal with object composition and help ensure that objects are composed in a way that provides flexibility and efficiency in solving design problems.
    </p>

    <h3>Example 3: Adapter Pattern</h3>
    <pre>
interface MediaPlayer {
    void play(String audioType, String fileName);
}

class AudioPlayer implements MediaPlayer {
    public void play(String audioType, String fileName) {
        if(audioType.equalsIgnoreCase("mp3")) {
            System.out.println("Playing mp3 file. Name: " + fileName);
        } else {
            System.out.println("Invalid media. " + audioType + " format not supported.");
        }
    }
}

class MediaAdapter implements MediaPlayer {
    AdvancedMediaPlayer advancedMusicPlayer;

    public MediaAdapter(String audioType) {
        if(audioType.equalsIgnoreCase("vlc") ){
            advancedMusicPlayer = new VlcPlayer();
        }
        else if(audioType.equalsIgnoreCase("mp4")){
            advancedMusicPlayer = new Mp4Player();
        }
    }

    public void play(String audioType, String fileName) {
        if(audioType.equalsIgnoreCase("vlc")) {
            advancedMusicPlayer.playVlc(fileName);
        }
        else if(audioType.equalsIgnoreCase("mp4")) {
            advancedMusicPlayer.playMp4(fileName);
        }
    }
}

interface AdvancedMediaPlayer {
    void playVlc(String fileName);
    void playMp4(String fileName);
}

class VlcPlayer implements AdvancedMediaPlayer {
    public void playVlc(String fileName) {
        System.out.println("Playing vlc file. Name: " + fileName);
    }
    public void playMp4(String fileName) {
        // do nothing
    }
}

class Mp4Player implements AdvancedMediaPlayer {
    public void playVlc(String fileName) {
        // do nothing
    }
    public void playMp4(String fileName) {
        System.out.println("Playing mp4 file. Name: " + fileName);
    }
}

public class Main {
    public static void main(String[] args) {
        AudioPlayer audioPlayer = new AudioPlayer();
        audioPlayer.play("mp3", "beyond the horizon.mp3");

        audioPlayer.play("mp4", "alone.mp4");  // Invalid media, should use MediaAdapter to support mp4
    }
}
    </pre>
    <p>
        The Adapter pattern allows us to "adapt" an incompatible interface to a compatible one. In this example, we adapt different media players to a unified media player interface.
    </p>

    <h3>Example 4: Decorator Pattern</h3>
    <pre>
interface Car {
    void assemble();
}

class BasicCar implements Car {
    public void assemble() {
        System.out.println("Basic Car.");
    }
}

class SportsCar implements Car {
    private Car car;

    public SportsCar(Car car) {
        this.car = car;
    }

    public void assemble() {
        car.assemble();
        System.out.println("Adding features of Sports Car.");
    }
}

class LuxuryCar implements Car {
    private Car car;

    public LuxuryCar(Car car) {
        this.car = car;
    }

    public void assemble() {
        car.assemble();
        System.out.println("Adding features of Luxury Car.");
    }
}

public class Main {
    public static void main(String[] args) {
        Car sportsCar = new SportsCar(new BasicCar());
        sportsCar.assemble();

        System.out.println("\n*****\n");

        Car sportsLuxuryCar = new SportsCar(new LuxuryCar(new BasicCar()));
        sportsLuxuryCar.assemble();
    }
}
    </pre>
    <p>
        The Decorator pattern allows us to add new behavior to an object without modifying its structure. In this example, we decorate a basic car with additional features like sports and luxury aspects.
    </p>

    <h2>3. Behavioral Design Patterns</h2>
    <p>
        Behavioral patterns deal with the communication between objects and how they interact with each other. They define the responsibilities of objects and how they collaborate to accomplish a task.
    </p>

    <h3>Example 5: Observer Pattern</h3>
    <pre>
import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(String message);
}

class ConcreteObserver implements Observer {
    private String name;

    public ConcreteObserver(String name) {
        this.name = name;
    }

    public void update(String message) {
        System.out.println(name + " received message: " + message);
    }
}

class Subject {
    private List<Observer> observers = new ArrayList<>();

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void notifyObservers(String message) {
        for (Observer observer : observers) {
            observer.update(message);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Subject subject = new Subject();

        Observer observer1 = new ConcreteObserver("Observer 1");
        Observer observer2 = new ConcreteObserver("Observer 2");

        subject.addObserver(observer1);
        subject.addObserver(observer2);

        subject.notifyObservers("New message");
    }
}
    </pre>
    <p>
        The Observer pattern allows objects (observers) to be notified automatically when the state of another object (subject) changes. In this example, the subject notifies its observers when a new message is available.
    </p>

    <h3>Example 6: Strategy Pattern</h3>
    <pre>
interface PaymentStrategy {
    void pay(int amount);
}

class CreditCardPayment implements PaymentStrategy {
    public void pay(int amount) {
        System.out.println("Paid " + amount + " using Credit Card.");
    }
}

class PayPalPayment implements PaymentStrategy {
    public void pay(int amount) {
        System.out.println("Paid " + amount + " using PayPal.");
    }
}

class PaymentContext {
    private PaymentStrategy strategy;

    public PaymentContext(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void executePayment(int amount) {
        strategy.pay(amount);
    }
}

public class Main {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext(new CreditCardPayment());
        context.executePayment(5000);

        context = new PaymentContext(new PayPalPayment());
        context.executePayment(1000);
    }
}
    </pre>
    <p>
        The Strategy pattern allows for the selection of an algorithm or behavior at runtime. In this example, the payment method can be dynamically chosen at runtime, either Credit Card or PayPal.
    </p>

</body>
</html>
`;
            break;
        default:
            contentArea.innerHTML = '<h1>Topic not found</h1><p>Select a valid Java topic from the sidebar.</p>';
            break;
    }
}
