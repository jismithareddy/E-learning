function loadContent(topic) {
    let contentArea = document.getElementById('contentArea');
    switch (topic) {
        case 'intro':
            contentArea.innerHTML = ` <h1>Introduction to Python</h1>
        <p>Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. Created by Guido van Rossum and first released in 1991, Python has gained immense popularity in recent years due to its wide range of applications and ease of use.</p>
        
        <h2>History of Python</h2>
        <p>Python was conceived in the late 1980s and implemented by Guido van Rossum in December 1989. Its official release, Python 0.9.0, was in February 1991. Python’s design philosophy emphasizes code readability, and its syntax allows developers to express concepts in fewer lines of code than other languages.</p>
        <p>Python 2.0 was released in 2000, introducing many new features, including list comprehensions and garbage collection. In 2008, Python 3.0 was introduced with improvements in language design, but it was not backward-compatible with Python 2.x. Today, Python 3.x is the present and future of the language, with Python 2.x officially reaching its end-of-life in 2020.</p>

        <h2>Platforms Where Python is Used</h2>
        <p>Python is a cross-platform language, meaning it can run on multiple operating systems. Some platforms where Python is widely used include:</p>
        <ul>
            <li><strong>Web Development:</strong> Frameworks like Django, Flask, and Pyramid help build robust websites and web applications.</li>
            <li><strong>Data Science and Machine Learning:</strong> Python is a go-to language for data scientists, with libraries like Pandas, NumPy, and TensorFlow.</li>
            <li><strong>Automation and Scripting:</strong> Python is frequently used for automating tasks, writing scripts, and process automation.</li>
            <li><strong>Artificial Intelligence and Deep Learning:</strong> Python has become the standard for AI, with tools such as Keras and PyTorch.</li>
            <li><strong>Software Development:</strong> Python supports rapid application development and is used in desktop GUI applications, APIs, and more.</li>
            <li><strong>Game Development:</strong> Python is used for game prototyping and even in full-fledged games with engines like Pygame.</li>
        </ul>

        <h2>Why Python?</h2>
        <p>Python's popularity is attributed to several reasons:</p>
        <ul>
            <li><strong>Easy to Learn:</strong> Python's simple syntax mimics natural language, making it easy to learn and write.</li>
            <li><strong>Versatile:</strong> Python can be used for web development, data analysis, AI, scientific computing, and more.</li>
            <li><strong>Large Community:</strong> Python has an active, growing community, which means plenty of support, tutorials, and resources are available.</li>
            <li><strong>Rich Libraries:</strong> Python comes with an extensive standard library, and there are numerous third-party libraries for specialized tasks.</li>
            <li><strong>Cross-Platform:</strong> Python runs on various operating systems, including Windows, macOS, and Linux, without modification.</li>
            <li><strong>Open Source:</strong> Python is open-source and free to use, which promotes its widespread adoption in industries and education.</li>
        </ul>

        <h2>Features of Python</h2>
        <p>Python has several distinctive features that make it a powerful programming language:</p>
        <ul>
            <li><strong>Simple and Readable Syntax:</strong> Python emphasizes readability, allowing developers to write clean and understandable code.</li>
            <li><strong>Interpreted Language:</strong> Python does not need to be compiled before execution. The interpreter runs the code line by line, which helps in debugging.</li>
            <li><strong>Dynamically Typed:</strong> Python allows variables to change types during runtime, giving flexibility but also enforcing careful usage.</li>
            <li><strong>Object-Oriented:</strong> Python supports object-oriented programming (OOP) concepts such as inheritance, encapsulation, and polymorphism.</li>
            <li><strong>Extensive Library Support:</strong> Python has a wide range of libraries and frameworks that support different tasks like web development, data manipulation, and more.</li>
            <li><strong>Portable:</strong> Python code can run on any machine that has the Python interpreter installed, making it highly portable.</li>
            <li><strong>Extensible and Embeddable:</strong> Python can be extended by writing C/C++ code and can be embedded into other applications.</li>
            <li><strong>Automated Memory Management:</strong> Python handles memory management on its own using a built-in garbage collector.</li>
        </ul>

        <h2>Platforms to Write Python Code</h2>
        <p>There are several online and offline platforms where you can write and execute Python code:</p>
        <ul class="platforms">
            <li><a href="https://replit.com" target="_blank">Replit</a> - A collaborative online editor where you can run Python code directly in your browser.</li>
            <li><a href="https://colab.research.google.com" target="_blank">Google Colab</a> - A cloud-based Jupyter Notebook environment for running Python code with access to GPUs and TPUs.</li>
            <li><a href="https://jupyter.org/" target="_blank">Jupyter Notebooks</a> - A powerful tool used for data science, machine learning, and academic research.</li>
            <li><a href="https://www.anaconda.com/" target="_blank">Anaconda</a> - A Python distribution that comes with powerful tools like Jupyter Notebooks and Spyder for Python development.</li>
            <li><a href="https://www.jetbrains.com/pycharm/" target="_blank">PyCharm</a> - A full-fledged IDE for Python development by JetBrains, offering advanced features for professional coding.</li>
        </ul>

        <div class="editor">
            <h3>Try Python Online</h3>
            <p>You can try writing Python code online using the following embedded editor:</p>
            <p><a href="https://replit.com/@yourusername/python-editor" target="_blank">Open Replit Editor</a></p>
        </div>
    </div>

`;
            break;

        case 'syntax':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python Syntax Rules and Structure</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f0f8ff;
            color: #333;
        }
        h1, h2 {
            color: #0056b3;
        }
        code {
            background-color: #f9f9f9;
            padding: 10px;
            display: block;
            margin: 10px 0;
            border-left: 4px solid #ccc;
            white-space: pre-wrap;
        }
        ul, ol {
            margin-left: 20px;
        }
    </style>
</head>
<body>

    <h1>Python Syntax Rules and Program Structure</h1>

    <h2>1. Python Syntax Rules</h2>
    <p>Here are the key rules to follow while writing Python code:</p>

    <ul>
        <li><strong>Indentation:</strong> In Python, indentation is crucial for defining code blocks such as functions, loops, and conditionals. It uses 4 spaces per indentation level, and incorrect indentation will lead to errors.
            <code>
                if x > 0:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;print("Positive")
            </code>
        </li>

        <li><strong>Case Sensitivity:</strong> Python is case-sensitive. This means that variables like <code>MyVar</code>, <code>myvar</code>, and <code>MYVAR</code> are treated as distinct.
            <code>
                myvar = 10<br>
                MyVar = 20<br>
                print(myvar)  # Output: 10<br>
                print(MyVar)  # Output: 20
            </code>
        </li>

        <li><strong>Variable Naming:</strong> Variable names must start with a letter or an underscore (<code>_</code>), followed by letters, digits, or underscores. Avoid using reserved keywords like <code>if</code>, <code>else</code>, or <code>def</code> as variable names.
            <code>
                valid_name = "John"<br>
                _privateVar = 5<br>
                # Invalid names:<br>
                # 2ndName = "Invalid"<br>
                # def = 10
            </code>
        </li>

        <li><strong>Comments:</strong> Comments are ignored by Python and help explain the code. Use <code>#</code> for single-line comments and triple quotes (<code>'''...'''</code> or <code>"""..."""</code>) for multi-line comments or documentation.
            <code>
                # This is a single-line comment<br>
                '''<br>
                This is a multi-line comment<br>
                or a docstring.<br>
                '''
            </code>
        </li>

        <li><strong>Statement Termination:</strong> Python does not require a semicolon (<code>;</code>) to terminate statements like other languages. Newlines automatically end a statement, but semicolons can be used to separate multiple statements on a single line.
            <code>
                x = 10<br>
                y = 20<br>
                print(x); print(y)  # Multiple statements on one line
            </code>
        </li>

        <li><strong>Quotation Marks for Strings:</strong> Strings in Python can be enclosed in single quotes (<code>' '</code>) or double quotes (<code>" "</code>). Both are valid, but ensure consistency in string declaration.
            <code>
                str1 = 'Hello'<br>
                str2 = "World"<br>
                print(str1, str2)  # Output: Hello World
            </code>
        </li>

        <li><strong>Whitespace and Formatting:</strong> Python encourages readable code. While you can use spaces around operators and after commas, avoid excessive or unnecessary whitespace within expressions or at the end of lines.
            <code>
                # Good practice:<br>
                x = 10<br>
                y = x + 5<br>
                print(x, y)<br><br>
                # Avoid excessive spacing:<br>
                x     =  10<br>
                y     =x  +  5
            </code>
        </li>
    </ul>

    <h2>2. Structure of a Python Program</h2>
    <p>A Python program typically follows a specific structure to ensure proper functionality. Below is the basic structure of a Python program:</p>

    <ol>
        <li><strong>Shebang (Optional for Unix/Linux Systems):</strong> A shebang line tells the system which interpreter to use for the script. It's optional but commonly included in Unix/Linux environments. Windows users typically don't need this.
            <code>
                #!/usr/bin/env python3
            </code>
        </li>

        <li><strong>Import Statements:</strong> This section imports necessary libraries or modules. Always place import statements at the beginning of the script.
            <code>
                import os<br>
                import math
            </code>
        </li>

        <li><strong>Global Variables (Optional):</strong> Declare any global constants or variables that need to be accessed throughout the program. Keep these declarations at the top, so they are easy to find.
            <code>
                PI = 3.14159  # A global constant
            </code>
        </li>

        <li><strong>Function and Class Definitions:</strong> Define all functions and classes before using them. This section contains reusable blocks of code for performing specific tasks.
            <code>
                def greet(name):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;print("Hello, " + name)<br><br>
                class Circle:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, radius):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.radius = radius<br>
                &nbsp;&nbsp;&nbsp;&nbsp;def area(self):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return PI * self.radius ** 2
            </code>
        </li>

        <li><strong>Main Code:</strong> This is where the main program logic resides. You can place the program's execution inside an <code>if __name__ == "__main__":</code> block to ensure the code only runs when the file is executed as a script and not imported as a module.
            <code>
                if __name__ == "__main__":<br>
                &nbsp;&nbsp;&nbsp;&nbsp;greet("Alice")<br>
                &nbsp;&nbsp;&nbsp;&nbsp;circle = Circle(5)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;print("Area of the circle:", circle.area())
            </code>
        </li>
    </ol>

    <p>By following this structure, you ensure that your Python programs are clean, organized, and easy to read. Python’s focus on readability, coupled with strict syntax rules, helps you write clear and error-free code.</p>

</body>
</html>

            `;
            break;

        case 'variables':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python Variables</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f8f9fa;
            color: #333;
        }
        h1, h2 {
            color: #007bff;
        }
        code {
            background-color: #f1f1f1;
            padding: 10px;
            display: block;
            margin: 10px 0;
            border-left: 4px solid #007bff;
            white-space: pre-wrap;
        }
        ul, ol {
            margin-left: 20px;
        }
    </style>
</head>
<body>

    <h1>Understanding Python Variables</h1>

    <h2>1. What is a Variable?</h2>
    <p>In Python, a <strong>variable</strong> is a name that refers to a value stored in memory. Variables are used to store data such as numbers, strings, or objects that can be manipulated throughout the program. Unlike many programming languages, Python does not require an explicit declaration of variables before they are used.</p>

    <code>
        x = 5  # 'x' is a variable storing the value 5<br>
        name = "Alice"  # 'name' is a variable storing the string "Alice"
    </code>

    <h2>2. Variable Naming Rules</h2>
    <p>There are certain rules and conventions to follow when naming variables in Python:</p>
    <ul>
        <li><strong>Start with a letter or underscore:</strong> A variable name must begin with a letter (a-z, A-Z) or an underscore (_). It cannot start with a number.</li>
        <li><strong>Case-sensitive:</strong> Python is case-sensitive, meaning <code>myVariable</code> and <code>myvariable</code> are considered different variables.</li>
        <li><strong>No special characters:</strong> Only letters, numbers, and underscores are allowed. Special characters such as <code>@</code>, <code>$</code>, and <code>%</code> are not permitted.</li>
        <li><strong>Avoid keywords:</strong> Don't use Python reserved keywords (like <code>if</code>, <code>while</code>, <code>def</code>) as variable names.</li>
    </ul>

    <h3>Examples of valid and invalid variable names:</h3>
    <code>
        # Valid variable names:<br>
        my_variable = 10<br>
        _hidden_value = 20<br>
        user1 = "John"<br><br>
        # Invalid variable names:<br>
        1stName = "Invalid"  # Cannot start with a number<br>
        my-variable = 100  # Dashes are not allowed<br>
        def = "invalid"  # Reserved keywords cannot be used
    </code>

    <h2>3. Assigning Values to Variables</h2>
    <p>In Python, the assignment operator <code>=</code> is used to assign a value to a variable. The value can be changed at any time by assigning a new value to the same variable.</p>

    <code>
        age = 25  # Assign the integer 25 to the variable 'age'<br>
        age = 30  # Now 'age' is updated to 30
    </code>

    <h2>4. Dynamic Typing in Python</h2>
    <p>Python is a dynamically typed language, which means you don’t need to declare the data type of a variable explicitly. The type is automatically determined based on the value assigned to the variable. You can also change the type of a variable by assigning a value of a different type to the same variable.</p>

    <code>
        x = 10  # 'x' is an integer<br>
        x = "Hello"  # Now 'x' is a string<br>
        x = 5.5  # Now 'x' is a float
    </code>

    <h2>5. Data Types of Variables</h2>
    <p>Python supports various data types that can be stored in variables. The main built-in types are:</p>

    <ul>
        <li><strong>Integer (<code>int</code>):</strong> Represents whole numbers, such as 1, -5, 42.</li>
        <li><strong>Float (<code>float</code>):</strong> Represents decimal numbers, such as 3.14, 0.001, -23.5.</li>
        <li><strong>String (<code>str</code>):</strong> Represents sequences of characters, such as "Hello" or 'World'. Strings can be created using either single quotes (<code>' '</code>) or double quotes (<code>" "</code>).</li>
        <li><strong>Boolean (<code>bool</code>):</strong> Represents True or False values, used in logical operations and conditions.</li>
        <li><strong>List (<code>list</code>):</strong> A collection of ordered, mutable elements, like <code>[1, 2, 3]</code> or <code>["apple", "banana"]</code>.</li>
        <li><strong>Tuple (<code>tuple</code>):</strong> An ordered, immutable collection, such as <code>(1, 2, 3)</code> or <code>("red", "green")</code>.</li>
        <li><strong>Dictionary (<code>dict</code>):</strong> A collection of key-value pairs, like <code>{"name": "John", "age": 25}</code>.</li>
    </ul>

    <h3>Example of different data types:</h3>
    <code>
        age = 25  # Integer<br>
        price = 19.99  # Float<br>
        name = "Alice"  # String<br>
        is_active = True  # Boolean<br>
        colors = ["red", "green", "blue"]  # List<br>
        person = {"name": "John", "age": 25}  # Dictionary
    </code>

    <h2>6. Multiple Assignments</h2>
    <p>In Python, you can assign values to multiple variables in a single line. This is particularly useful for initializing multiple variables with related values.</p>

    <code>
        x, y, z = 5, 10, 15  # Multiple variables in one line<br>
        print(x, y, z)  # Output: 5 10 15
    </code>

    <h2>7. Constants</h2>
    <p>Although Python does not have built-in constant types, it's a convention to use all-uppercase variable names to define constants. These values should not be changed throughout the program.</p>

    <code>
        PI = 3.14159  # Treat as a constant<br>
        GRAVITY = 9.8
    </code>

    <h2>8. Deleting Variables</h2>
    <p>If you want to delete a variable, you can use the <code>del</code> keyword. Once deleted, the variable will no longer be available.</p>

    <code>
        name = "Alice"<br>
        del name  # Deletes the variable 'name'<br>
        print(name)  # This will raise an error, as 'name' is deleted
    </code>

    <h2>9. Type Conversion</h2>
    <p>Python allows you to convert one data type to another, known as type casting. The most common type conversion functions are:</p>
    <ul>
        <li><code>int()</code>: Converts to an integer</li>
        <li><code>float()</code>: Converts to a float</li>
        <li><code>str()</code>: Converts to a string</li>
        <li><code>list()</code>: Converts to a list</li>
    </ul>

    <h3>Example of type conversion:</h3>
    <code>
        x = 10.5<br>
        y = int(x)  # Converts float to integer<br>
        print(y)  # Output: 10<br><br>

        a = "123"<br>
        b = int(a)  # Converts string to integer<br>
        print(b)  # Output: 123
    </code>

    <h2>Conclusion</h2>
    <p>Python variables are a fundamental concept that allows developers to store and manipulate data. With dynamic typing, flexible naming rules, and various data types, Python makes it easy to work with variables. Remember to follow naming conventions and choose meaningful names to make your code more readable and maintainable.</p>

</body>
</html>

            `;
            break;
            case 'datatypes':
                contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python Data Types</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f8f9fa;
            color: #333;
        }
        h1, h2 {
            color: #007bff;
        }
        code {
            background-color: #f1f1f1;
            padding: 10px;
            display: block;
            margin: 10px 0;
            border-left: 4px solid #007bff;
            white-space: pre-wrap;
        }
        ul {
            margin-left: 20px;
        }
    </style>
</head>
<body>

    <h1>Understanding Python Data Types</h1>

    <p>In Python, every value has a type. Data types determine the kind of operations you can perform on a value and how the value is stored in memory. Python has several built-in data types that can be classified into different categories.</p>

    <h2>1. Numeric Data Types</h2>
    <p>Python supports three types of numeric values:</p>
    
    <ul>
        <li><strong>Integer (<code>int</code>)</strong>: Whole numbers, positive or negative, without a decimal point.</li>
        <li><strong>Float (<code>float</code>)</strong>: Numbers with a decimal point or in exponential (scientific) notation.</li>
        <li><strong>Complex (<code>complex</code>)</strong>: Numbers with a real and imaginary part, written as <code>a + bj</code>, where <code>a</code> is the real part and <code>b</code> is the imaginary part.</li>
    </ul>

    <h3>Examples of Numeric Data Types:</h3>
    <code>
        # Integer<br>
        x = 10  # Positive integer<br>
        y = -5  # Negative integer<br><br>

        # Float<br>
        a = 3.14  # Decimal point<br>
        b = 1e3  # Exponential notation (1000.0)<br><br>

        # Complex<br>
        c = 3 + 5j  # Complex number with real part 3 and imaginary part 5<br>
        print(c.real)  # Output: 3.0<br>
        print(c.imag)  # Output: 5.0
    </code>

    <h2>2. Sequence Data Types</h2>
    <p>Sequences are ordered collections of items. Python has three types of sequences:</p>

    <ul>
        <li><strong>String (<code>str</code>)</strong>: A sequence of characters, defined using either single, double, or triple quotes.</li>
        <li><strong>List (<code>list</code>)</strong>: An ordered, mutable collection of items. Lists can contain elements of different types.</li>
        <li><strong>Tuple (<code>tuple</code>)</strong>: An ordered, immutable collection of items. Once defined, the elements of a tuple cannot be changed.</li>
    </ul>

    <h3>Examples of Sequence Data Types:</h3>
    <code>
        # String<br>
        s = "Hello, World!"  # String with double quotes<br>
        print(s[0])  # Output: 'H' (strings are indexed)<br><br>

        # List<br>
        fruits = ["apple", "banana", "cherry"]  # List of strings<br>
        fruits[1] = "blueberry"  # Lists are mutable<br>
        print(fruits)  # Output: ['apple', 'blueberry', 'cherry']<br><br>

        # Tuple<br>
        colors = ("red", "green", "blue")  # Tuple of strings<br>
        print(colors[0])  # Output: 'red'<br>
        # colors[1] = "yellow"  # Error! Tuples are immutable
    </code>

    <h2>3. Boolean Data Type</h2>
    <p><strong>Boolean (<code>bool</code>)</strong> values represent truth values in Python. A boolean value can either be <code>True</code> or <code>False</code>. Boolean values are commonly used in conditional statements and logical operations.</p>

    <h3>Example of Boolean Data Type:</h3>
    <code>
        is_active = True  # Boolean value<br>
        print(is_active)  # Output: True<br><br>

        # Boolean in conditional statements<br>
        if is_active:<br>
            print("The account is active.")  # Output: The account is active.
    </code>

    <h2>4. Set Data Type</h2>
    <p><strong>Set (<code>set</code>)</strong> is an unordered collection of unique items. Sets do not allow duplicate values and are mutable, meaning you can add or remove items from them.</p>

    <h3>Example of Set Data Type:</h3>
    <code>
        # Create a set<br>
        my_set = {1, 2, 3, 4, 4}  # Duplicate values are ignored<br>
        print(my_set)  # Output: {1, 2, 3, 4}<br><br>

        # Adding and removing items<br>
        my_set.add(5)  # Add an item<br>
        print(my_set)  # Output: {1, 2, 3, 4, 5}<br>
        my_set.remove(2)  # Remove an item<br>
        print(my_set)  # Output: {1, 3, 4, 5}
    </code>

    <h2>5. Dictionary Data Type</h2>
    <p><strong>Dictionary (<code>dict</code>)</strong> is an unordered collection of key-value pairs. Each key must be unique, and values can be accessed by their keys. Dictionaries are mutable, allowing you to change, add, or remove key-value pairs.</p>

    <h3>Example of Dictionary Data Type:</h3>
    <code>
        # Create a dictionary<br>
        person = {"name": "John", "age": 25, "city": "New York"}<br>
        print(person["name"])  # Output: John<br><br>

        # Adding and updating key-value pairs<br>
        person["email"] = "john@example.com"  # Add a new key-value pair<br>
        person["age"] = 26  # Update the value for the key 'age'<br>
        print(person)  # Output: {'name': 'John', 'age': 26, 'city': 'New York', 'email': 'john@example.com'}
    </code>

    <h2>6. None Data Type</h2>
    <p><strong>None</strong> is a special constant in Python that represents the absence of a value or a null value. It's often used as a placeholder or default value.</p>

    <h3>Example of None Data Type:</h3>
    <code>
        x = None  # Assigning None to a variable<br>
        print(x)  # Output: None<br><br>

        if x is None:<br>
            print("x has no value.")  # Output: x has no value.
    </code>

    <h2>7. Type Checking</h2>
    <p>To check the type of a variable, you can use the built-in <code>type()</code> function. This function returns the type of the given object.</p>

    <h3>Example of Type Checking:</h3>
    <code>
        x = 42<br>
        print(type(x))  # Output: <class 'int'><br><br>

        y = [1, 2, 3]<br>
        print(type(y))  # Output: <class 'list'>
    </code>

    <h2>8. Type Casting</h2>
    <p>Python allows you to convert one data type to another, a process called type casting. You can cast data types using built-in functions like <code>int()</code>, <code>float()</code>, <code>str()</code>, and <code>list()</code>.</p>

    <h3>Example of Type Casting:</h3>
    <code>
        x = 3.14<br>
        y = int(x)  # Converts float to int<br>
        print(y)  # Output: 3<br><br>

        a = "123"<br>
        b = int(a)  # Converts string to int<br>
        print(b)  # Output: 123
    </code>

    <h2>Conclusion</h2>
    <p>Understanding Python data types is essential for writing efficient and effective programs. Python offers a wide range of data types, from simple types like integers and strings to more complex types like lists, dictionaries, and sets. Knowing when and how to use each type will help you work more effectively with data in your Python programs.</p>

</body>
</html>
`;
break;
case "input&output":
    contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python Input and Output Functions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #f0f0f0;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 10px 0;
            display: block;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style-type: square;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1>Python Input and Output Functions</h1>

    <h2>1. Input Function: </h2>
    <p>The input() function is used to take input from the user in Python. It reads input as a string and stores it in a variable. You can also provide a prompt to display a message to the user.</p>
    
    <h3>Syntax</h3>
    <code>
        input(prompt)
    </code>
    <ul>
        <li><strong>prompt</strong> (Optional): A string displayed as a message to the user before input is taken.</li>
    </ul>

    <h3>Example:</h3>
    <code>
        name = input("Enter your name: ")<br>
        print("Hello, " + name + "!")
    </code>
    <p>Here, the user is prompted to enter their name. The input is stored in the <code>name</code> variable, and then the program greets the user by their name.</p>

    <h2>2. Type Conversion in Input</h2>
    <p>By default, the input() function returns the input as a string. If you need the input in a different data type like an integer or float, you must use type casting.</p>

    <h3>Example:</h3>
    <code>
        age = input("Enter your age: ")  # Input is a string<br>
        age = int(age)  # Convert string to integer<br>
        print("You are", age, "years old.")
    </code>
    <p>Here, the user enters their age as a string, but it is converted to an integer using the <code>int()</code> function before printing.</p>

    <h2>3. Output Function: <code>print()</code></h2>
    <p>The print()function is used to display output to the console. It can take multiple values, separated by commas, and outputs them as strings.</p>

    <h3>Syntax</h3>
    <code>
        print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
    </code>

    <ul>
        <li><strong>objects</strong>: The values to print. Multiple values can be separated by commas.</li>
        <li><strong>sep</strong>: The separator between values. Default is a space.</li>
        <li><strong>end</strong>: The string appended after the last value. Default is a newline.</li>
        <li><strong>file</strong>: The output stream. Default is the console.</li>
        <li><strong>flush</strong>: If <code>True</code>, forces the stream to flush immediately.</li>
    </ul>

    <h3>Example:</h3>
    <code>
        print("Hello", "World", sep=", ", end="!")  # Output: Hello, World!
    </code>
    <p>In this example, <code>sep</code> is set to <code>, </code> to separate "Hello" and "World" with a comma, and <code>end</code> is set to <code>!</code> instead of the default newline.</p>

    <h2>4. Formatting Output</h2>
    <p>Python offers several ways to format output, including string concatenation, the <code>format()</code> method, and f-strings (for Python 3.6+).</p>

    <h3>String Concatenation</h3>
    <code>
        name = "Alice"<br>
        age = 25<br>
        print("My name is " + name + " and I am " + str(age) + " years old.")
    </code>
    <p>In this example, string concatenation is used to build the output message. The integer <code>age</code> is converted to a string before concatenation.</p>

    <h3>Using <code>format()</code> Method</h3>
    <code>
        name = "Alice"<br>
        age = 25<br>
        print("My name is {} and I am {} years old.".format(name, age))
    </code>
    <p>The <code>format()</code> method is a cleaner and more flexible way to format output. It replaces placeholders <code>{}</code> with the respective variables.</p>

    <h3>Using f-Strings</h3>
    <code>
        name = "Alice"<br>
        age = 25<br>
        print(f"My name is {name} and I am {age} years old.")
    </code>
    <p>f-Strings (available from Python 3.6) allow variables to be embedded directly in string literals, making them easier to read and write.</p>

    <h2>5. Writing Output to Files</h2>
    <p>Using the <code>file</code> parameter in the <code>print()</code> function, you can write output to a file instead of the console.</p>

    <h3>Example:</h3>
    <code>
        with open("output.txt", "w") as f:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("Hello, file!", file=f)
    </code>
    <p>This code opens the file <code>output.txt</code> in write mode and writes the string "Hello, file!" to it.</p>

    <h2>6. Flushing Output</h2>
    <p>Normally, output is buffered, meaning it may not appear immediately. You can force immediate output by setting the <code>flush</code> parameter to <code>True</code>.</p>

    <h3>Example:</h3>
    <code>
        import time<br>
        print("Loading...", end="", flush=True)<br>
        time.sleep(2)<br>
        print(" Done!")
    </code>
    <p>In this example, the message "Loading..." is printed immediately due to <code>flush=True</code>. The program then waits for 2 seconds before printing " Done!".</p>

    <h2>Conclusion</h2>
    <p>The <code>input()</code> and <code>print()</code> functions are fundamental for interacting with users in Python. Using them, you can gather input, display output, format the data, and even write to files. Mastering these functions is essential for building interactive Python applications.</p>

</body>
</html>
`;
break;

        case 'operators':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python Operators</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #f0f0f0;
            
            padding: 10px;
            margin: 10px 0;
            display: block;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style-type: square;
        }
        li {
            margin-bottom: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #e78b8b;
        }
    </style>
</head>
<body>

    <h1>Python Operators</h1>

    <p>In Python, operators are special symbols used to perform operations on variables and values. There are several types of operators in Python:</p>
    
    <ul>
        <li>Arithmetic Operators</li>
        <li>Comparison (Relational) Operators</li>
        <li>Assignment Operators</li>
        <li>Logical Operators</li>
        <li>Bitwise Operators</li>
        <li>Membership Operators</li>
        <li>Identity Operators</li>
    </ul>

    <h2>1. Arithmetic Operators</h2>
    <p>Arithmetic operators are used to perform common mathematical operations such as addition, subtraction, multiplication, etc.</p>

    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>+</td>
            <td>Addition</td>
            <td><code>5 + 3 = 8</code></td>
        </tr>
        <tr>
            <td>-</td>
            <td>Subtraction</td>
            <td><code>5 - 3 = 2</code></td>
        </tr>
        <tr>
            <td>*</td>
            <td>Multiplication</td>
            <td><code>5 * 3 = 15</code></td>
        </tr>
        <tr>
            <td>/</td>
            <td>Division</td>
            <td><code>5 / 2 = 2.5</code></td>
        </tr>
        <tr>
            <td>%</td>
            <td>Modulus (remainder)</td>
            <td><code>5 % 2 = 1</code></td>
        </tr>
        <tr>
            <td>**</td>
            <td>Exponentiation (power)</td>
            <td><code>5 ** 2 = 25</code></td>
        </tr>
        <tr>
            <td>//</td>
            <td>Floor division</td>
            <td><code>5 // 2 = 2</code></td>
        </tr>
    </table>

    <h3>Example:</h3>
    <code>
        a = 10<br>
        b = 3<br>
        print("Addition:", a + b)    # Output: 13<br>
        print("Subtraction:", a - b) # Output: 7<br>
        print("Multiplication:", a * b) # Output: 30<br>
        print("Division:", a / b)    # Output: 3.333<br>
        print("Modulus:", a % b)     # Output: 1<br>
        print("Exponentiation:", a ** b) # Output: 1000<br>
        print("Floor Division:", a // b) # Output: 3
    </code>

    <h2>2. Comparison (Relational) Operators</h2>
    <p>These operators compare two values and return either <code>True</code> or <code>False</code> based on the condition.</p>

    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>==</td>
            <td>Equal to</td>
            <td><code>5 == 3 (False)</code></td>
        </tr>
        <tr>
            <td>!=</td>
            <td>Not equal to</td>
            <td><code>5 != 3 (True)</code></td>
        </tr>
        <tr>
            <td>></td>
            <td>Greater than</td>
            <td><code>5 > 3 (True)</code></td>
        </tr>
        <tr>
            <td><</td>
            <td>Less than</td>
            <td><code>5 < 3 (False)</code></td>
        </tr>
        <tr>
            <td>>=</td>
            <td>Greater than or equal to</td>
            <td><code>5 >= 3 (True)</code></td>
        </tr>
        <tr>
            <td><=</td>
            <td>Less than or equal to</td>
            <td><code>5 <= 3 (False)</code></td>
        </tr>
    </table>

    <h3>Example:</h3>
    <code>
        a = 5<br>
        b = 3<br>
        print(a == b)  # False<br>
        print(a != b)  # True<br>
        print(a > b)   # True<br>
        print(a < b)   # False<br>
        print(a >= b)  # True<br>
        print(a <= b)  # False
    </code>

    <h2>3. Assignment Operators</h2>
    <p>Assignment operators are used to assign values to variables.</p>

    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>=</td>
            <td>Assign</td>
            <td><code>x = 5</code></td>
        </tr>
        <tr>
            <td>+=</td>
            <td>Add and assign</td>
            <td><code>x += 3 (x = x + 3)</code></td>
        </tr>
        <tr>
            <td>-=</td>
            <td>Subtract and assign</td>
            <td><code>x -= 3 (x = x - 3)</code></td>
        </tr>
        <tr>
            <td>*=</td>
            <td>Multiply and assign</td>
            <td><code>x *= 3 (x = x * 3)</code></td>
        </tr>
        <tr>
            <td>/=</td>
            <td>Divide and assign</td>
            <td><code>x /= 3 (x = x / 3)</code></td>
        </tr>
        <tr>
            <td>%=</td>
            <td>Modulus and assign</td>
            <td><code>x %= 3 (x = x % 3)</code></td>
        </tr>
        <tr>
            <td>//=</td>
            <td>Floor divide and assign</td>
            <td><code>x //= 3 (x = x // 3)</code></td>
        </tr>
        <tr>
            <td>**=</td>
            <td>Exponent and assign</td>
            <td><code>x **= 3 (x = x ** 3)</code></td>
        </tr>
    </table>

    <h3>Example:</h3>
    <code>
        x = 5<br>
        x += 3  # x = x + 3<br>
        print(x)  # Output: 8
    </code>

    <h2>4. Logical Operators</h2>
    <p>Logical operators are used to combine conditional statements and return <code>True</code> or <code>False</code>.</p>

    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>and</td>
            <td>Returns True if both statements are true</td>
            <td><code>x > 3 and x < 10 (True)</code></td>
        </tr>
        <tr>
            <td>or</td>
            <td>Returns True if one of the statements is true</td>
            <td><code>x > 3 or x < 4 (True)</code></td>
        </tr>
        <tr>
            <td>not</td>
            <td>Reverses the result, returns False if the result is true</td>
            <td><code>not(x > 3 and x < 10) (False)</code></td>
        </tr>
    </table>

    <h3>Example:</h3>
    <code>
        x = 5<br>
        print(x > 3 and x < 10)  # True<br>
        print(x > 3 or x < 4)    # True<br>
        print(not(x > 3 and x < 10))  # False
    </code>

    <h2>5. Bitwise Operators</h2>
    <p>Bitwise operators act on bits and perform bit-by-bit operations.</p>

    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>&</td>
            <td>Bitwise AND</td>
            <td><code>5 & 3 = 1</code></td>
        </tr>
        <tr>
            <td>|</td>
            <td>Bitwise OR</td>
            <td><code>5 | 3 = 7</code></td>
        </tr>
        <tr>
            <td>^</td>
            <td>Bitwise XOR</td>
            <td><code>5 ^ 3 = 6</code></td>
        </tr>
        <tr>
            <td>~</td>
            <td>Bitwise NOT</td>
            <td><code>~5 = -6</code></td>
        </tr>
        <tr>
            <td>&lt;&lt;</td>
            <td>Left Shift</td>
            <td><code>5 &lt;&lt; 2 = 20</code></td>
        </tr>
        <tr>
            <td>&gt;&gt;</td>
            <td>Right Shift</td>
            <td><code>5 &gt;&gt; 2 = 1</code></td>
        </tr>
    </table>

    <h2>6. Membership Operators</h2>
    <p>These operators test whether a value or variable is found in a sequence (string, list, tuple, etc.).</p>

    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>in</td>
            <td>Returns True if a value exists in the sequence</td>
            <td><code>"a" in "apple" (True)</code></td>
        </tr>
        <tr>
            <td>not in</td>
            <td>Returns True if a value does not exist in the sequence</td>
            <td><code>"x" not in "apple" (True)</code></td>
        </tr>
    </table>

    <h2>7. Identity Operators</h2>
    <p>Identity operators compare the memory location of two objects.</p>

    <table>
        <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>is</td>
            <td>Returns True if both variables are the same object</td>
            <td><code>x is y</code></td>
        </tr>
        <tr>
            <td>is not</td>
            <td>Returns True if both variables are not the same object</td>
            <td><code>x is not y</code></td>
        </tr>
    </table>

</body>
</html>

            `;
            break;

        case 'conditions':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conditional Statements in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1, h2 {
            color: #333;
        }
        .example-code {
            background-color: #f0f0f0;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 10px 0;
            display: block;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style-type: square;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1>Conditional Statements in Python</h1>

    <p>Conditional statements allow us to execute a block of code based on whether a condition is true or false. Python provides three primary conditional statements:</p>
    <ul>
        <li><strong>if</strong> statement</li>
        <li><strong>elif</strong> statement (else if)</li>
        <li><strong>else</strong> statement</li>
    </ul>

    <h2>1. The <strong>if</strong> Statement</h2>
    <p>The <strong>if</strong> statement is used to check a condition. If the condition evaluates to <strong>True</strong>, the code block inside the <strong>if</strong> statement is executed.</p>

    <h3>Syntax:</h3>
    <div class="example-code">
        if condition:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;# code to execute if condition is true
    </div>

    <h3>Example:</h3>
    <div class="example-code">
        x = 10<br>
        if x > 5:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("x is greater than 5")
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        x is greater than 5
    </div>

    <h2>2. The <strong>elif</strong> Statement</h2>
    <p>When using the <strong>if</strong> statement, you can check additional conditions using the <strong>elif</strong> (short for "else if") statement. If the <strong>if</strong> condition is false, the <strong>elif</strong> condition is checked, and so on.</p>

    <h3>Syntax:</h3>
    <div class="example-code">
        if condition_1:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;# code to execute if condition_1 is true<br>
        elif condition_2:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;# code to execute if condition_2 is true
    </div>

    <h3>Example:</h3>
    <div class="example-code">
        x = 10<br>
        if x > 15:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("x is greater than 15")<br>
        elif x > 5:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("x is greater than 5 but less than or equal to 15")
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        x is greater than 5 but less than or equal to 15
    </div>

    <h2>3. The <strong>else</strong> Statement</h2>
    <p>The <strong>else</strong> statement is used when all the preceding <strong>if</strong> and <strong>elif</strong> conditions are false. The code block inside the <strong>else</strong> statement is executed when none of the conditions are true.</p>

    <h3>Syntax:</h3>
    <div class="example-code">
        if condition_1:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;# code to execute if condition_1 is true<br>
        elif condition_2:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;# code to execute if condition_2 is true<br>
        else:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;# code to execute if all conditions are false
    </div>

    <h3>Example:</h3>
    <div class="example-code">
        x = 3<br>
        if x > 5:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("x is greater than 5")<br>
        elif x == 3:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("x is equal to 3")<br>
        else:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("x is less than 3")
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        x is equal to 3
    </div>

    <h2>4. Nested Conditional Statements</h2>
    <p>Conditional statements can be nested inside other conditional statements. This allows you to check multiple levels of conditions.</p>

    <h3>Example:</h3>
    <div class="example-code">
        x = 7<br>
        if x > 5:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;if x < 10:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("x is between 5 and 10")<br>
        &nbsp;&nbsp;&nbsp;&nbsp;else:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("x is greater than or equal to 10")<br>
        else:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("x is less than or equal to 5")
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        x is between 5 and 10
    </div>

    <h2>5. Using Logical Operators in Conditional Statements</h2>
    <p>You can combine conditions using logical operators such as <strong>and</strong>, <strong>or</strong>, and <strong>not</strong> in conditional statements.</p>

    <h3>Logical Operators:</h3>
    <ul>
        <li><strong>and</strong>: Returns <strong>True</strong> if both conditions are true.</li>
        <li><strong>or</strong>: Returns <strong>True</strong> if at least one of the conditions is true.</li>
        <li><strong>not</strong>: Reverses the result, returning <strong>True</strong> if the condition is false, and vice versa.</li>
    </ul>

    <h3>Example:</h3>
    <div class="example-code">
        x = 5<br>
        if x > 3 and x < 10:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("x is between 3 and 10")<br>
        elif x == 3 or x == 5:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("x is either 3 or 5")<br>
        else:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("x is not between 3 and 10")
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        x is either 3 or 5
    </div>

    <h2>6. The <strong>if-else</strong> Shortcut (Ternary Operator)</h2>
    <p>Python supports a shorthand version of <strong>if-else</strong> statements, known as the ternary operator. This allows you to write simple conditional expressions in a single line.</p>

    <h3>Syntax:</h3>
    <div class="example-code">
        result = value_if_true if condition else value_if_false
    </div>

    <h3>Example:</h3>
    <div class="example-code">
        x = 10<br>
        result = "x is greater than 5" if x > 5 else "x is less than or equal to 5"<br>
        print(result)
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        x is greater than 5
    </div>

    <h2>7. Conclusion</h2>
    <p>Conditional statements are an essential part of Python programming, allowing you to control the flow of execution based on dynamic conditions. By using <strong>if</strong>, <strong>elif</strong>, and <strong>else</strong>, along with logical operators, you can build complex decision-making processes into your Python programs.</p>

</body>
</html>

            `;
            break;

        case 'loops':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For and While Loops in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1, h2 {
            color: #333;
        }
        .example-code {
            background-color: #f0f0f0;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 10px 0;
            display: block;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style-type: square;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1>For and While Loops in Python</h1>

    <p>Loops are one of the most important control structures in Python. The <strong>for loop</strong> and <strong>while loop</strong> are used to repeat a block of code multiple times under certain conditions. Below, we explain both loops in detail, with examples and their usage.</p>

    <h2>1. For Loops in Python</h2>
    <p>The <strong>for loop</strong> is used to iterate over a sequence (like a list, string, or tuple) and executes a block of code for each item in the sequence.</p>

    <h3>1.1. Syntax of For Loops</h3>
    <p>The basic syntax of a <strong>for loop</strong> is:</p>
    <div class="example-code">
        for item in sequence:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;# code to execute for each item in sequence
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>item:</strong> A variable that takes the value of the current element from the sequence during each iteration.</li>
        <li><strong>sequence:</strong> An iterable object (like a list, tuple, string, or range) over which the loop iterates.</li>
        <li>The block of code inside the loop is executed once for each element in the sequence.</li>
    </ul>

    <h3>1.2. Using For Loops with Lists</h3>
    <p>Lists are a common data structure used with for loops. The loop iterates through each element in the list.</p>

    <h3>Example:</h3>
    <div class="example-code">
        fruits = ["apple", "banana", "cherry"]<br>
        for fruit in fruits:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print(fruit)
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        apple<br>
        banana<br>
        cherry
    </div>

    <p>In this example, the <strong>for</strong> loop iterates over each element in the <strong>fruits</strong> list. On each iteration, the variable <strong>fruit</strong> takes the value of the current element, and the <strong>print()</strong> function outputs it.</p>

    <h3>1.3. Using For Loops with Strings</h3>
    <p>For loops can also be used to iterate over the characters of a string, treating each character as an individual item.</p>

    <h3>Example:</h3>
    <div class="example-code">
        word = "Python"<br>
        for letter in word:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print(letter)
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        P<br>
        y<br>
        t<br>
        h<br>
        o<br>
        n
    </div>

    <h3>1.4. Using For Loops with Ranges</h3>
    <p>The <strong>range()</strong> function is often used with a <strong>for loop</strong> to generate a sequence of numbers. The range can be defined with a start value, a stop value, and an optional step value.</p>

    <h3>Example:</h3>
    <div class="example-code">
        for num in range(1, 6):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print(num)
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        1<br>
        2<br>
        3<br>
        4<br>
        5
    </div>

    <h3>1.5. Nested For Loops</h3>
    <p>Sometimes you need to use a <strong>for loop</strong> inside another <strong>for loop</strong>, which is known as a nested for loop.</p>

    <h3>Example:</h3>
    <div class="example-code">
        for i in range(1, 4):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;for j in range(1, 4):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(i, j)
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        1 1<br>
        1 2<br>
        1 3<br>
        2 1<br>
        2 2<br>
        2 3<br>
        3 1<br>
        3 2<br>
        3 3
    </div>

    <h2>2. While Loops in Python</h2>
    <p>The <strong>while loop</strong> repeats a block of code as long as a given condition is true. It is useful when you don't know how many times you need to repeat the code, but you know the condition that will stop the loop.</p>

    <h3>2.1. Syntax of While Loops</h3>
    <p>The syntax of a <strong>while loop</strong> is:</p>
    <div class="example-code">
        while condition:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;# code to execute while the condition is true
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>condition:</strong> An expression that is evaluated before each iteration of the loop. If it is <strong>True</strong>, the loop executes the block of code inside it. If it is <strong>False</strong>, the loop stops.</li>
        <li>The loop continues to execute as long as the condition remains true.</li>
    </ul>

    <h3>2.2. Example of a While Loop</h3>
    <p>The following example demonstrates how a while loop works by repeating the process of incrementing a variable until it reaches a specific value.</p>

    <h3>Example:</h3>
    <div class="example-code">
        count = 1<br>
        while count <= 5:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print(count)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;count += 1
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        1<br>
        2<br>
        3<br>
        4<br>
        5
    </div>

    <p>In this example, the loop will execute as long as <strong>count</strong> is less than or equal to 5. After each iteration, <strong>count</strong> is incremented by 1 until the condition becomes false, and the loop stops.</p>

    <h3>2.3. Infinite While Loops</h3>
    <p>Be cautious with while loops, as they can easily become infinite loops if the condition never becomes false. An infinite loop will run indefinitely, using up system resources and potentially crashing the program.</p>

    <h3>Example:</h3>
    <div class="example-code">
        count = 1<br>
        while count <= 5:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print(count)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;# missing count increment leads to an infinite loop
    </div>

    <p>In this case, since the increment of <strong>count</strong> is missing, the condition will always be true, resulting in an infinite loop.</p>

    <h3>2.4. Break and Continue in While Loops</h3>
    <p>Just like in for loops, you can use <strong>break</strong> and <strong>continue</strong> statements in while loops to control the flow of execution.</p>

    <h3>Break Example:</h3>
    <div class="example-code">
        count = 1<br>
        while count <= 5:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;if count == 3:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print(count)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;count += 1
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        1<br>
        2<br>
    </div>

    <p>The <strong>break</strong> statement stops the loop as soon as the condition <strong>count == 3</strong> is met, exiting the loop immediately.</p>

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
    <title>Functions in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1, h2 {
            color: #333;
        }
        .example-code {
            background-color: #f0f0f0;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 10px 0;
            display: block;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style-type: square;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1>Functions in Python</h1>

    <p>Functions are blocks of reusable code that allow you to perform specific tasks. They are one of the core components of Python programming, enabling code modularity and reuse.</p>

    <h2>1. What is a Function?</h2>
    <p>A <strong>function</strong> is a block of code that only runs when it is called. You can pass data, known as <strong>parameters</strong>, into a function, and it can return data as a result.</p>

    <p>Functions help to break down large programs into smaller, manageable parts, making the code easier to read, maintain, and debug.</p>

    <h2>2. Syntax of a Function</h2>
    <p>The basic syntax of a function in Python is:</p>
    <div class="example-code">
        def function_name(parameters):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;# block of code<br>
        &nbsp;&nbsp;&nbsp;&nbsp;return value
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>def:</strong> The keyword used to define a function.</li>
        <li><strong>function_name:</strong> The name you use to call the function later.</li>
        <li><strong>parameters:</strong> Optional input values you can pass into the function. These are also called arguments.</li>
        <li><strong>return:</strong> This keyword is used to return a result from the function. It is optional if the function doesn't need to return any value.</li>
    </ul>

    <h2>3. Example of a Simple Function</h2>
    <p>Here is an example of a simple function that adds two numbers and returns the sum:</p>
    <div class="example-code">
        def add_numbers(a, b):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;return a + b<br><br>
        result = add_numbers(5, 3)<br>
        print(result)
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        8
    </div>

    <p>In this example, the function <strong>add_numbers</strong> takes two parameters, <strong>a</strong> and <strong>b</strong>, and returns their sum. When we call the function with arguments 5 and 3, it returns 8.</p>

    <h2>4. Function Parameters</h2>
    <p>Functions can accept different types of parameters. These are the values you pass into a function when calling it. Here are some types of parameters:</p>

    <h3>4.1. Positional Parameters</h3>
    <p>Positional parameters are the most common type. The order in which arguments are passed to the function matters.</p>

    <div class="example-code">
        def greet(name, age):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("Hello", name, "You are", age, "years old.")<br><br>
        greet("Alice", 25)
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        Hello Alice You are 25 years old.
    </div>

    <p>In this example, the order of <strong>name</strong> and <strong>age</strong> matters. The function <strong>greet</strong> will print the greeting message with the values in the same order as they are passed.</p>

    <h3>4.2. Keyword Parameters</h3>
    <p>Keyword parameters allow you to pass arguments by explicitly naming them, which makes the order less important.</p>

    <div class="example-code">
        def greet(name, age):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("Hello", name, "You are", age, "years old.")<br><br>
        greet(age=25, name="Alice")
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        Hello Alice You are 25 years old.
    </div>

    <p>In this case, the parameters <strong>age</strong> and <strong>name</strong> are passed by their names, so the order doesn't matter.</p>

    <h3>4.3. Default Parameters</h3>
    <p>You can provide default values for parameters. If the function is called without a value for that parameter, it will use the default value.</p>

    <div class="example-code">
        def greet(name, age=18):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;print("Hello", name, "You are", age, "years old.")<br><br>
        greet("Alice")
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        Hello Alice You are 18 years old.
    </div>

    <p>In this example, the parameter <strong>age</strong> has a default value of 18. If the function is called without providing a value for <strong>age</strong>, the default value is used.</p>

    <h2>5. Return Statement</h2>
    <p>The <strong>return</strong> statement allows a function to return a value to the caller. This value can be used in expressions or assigned to a variable.</p>

    <div class="example-code">
        def square(number):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;return number * number<br><br>
        result = square(4)<br>
        print(result)
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        16
    </div>

    <p>In this example, the function <strong>square</strong> returns the square of a number. The value returned by the function is stored in the variable <strong>result</strong> and printed.</p>

    <h2>6. Function Scope</h2>
    <p>The scope of a variable is the region of the program where it is accessible. Variables declared inside a function are local to that function, meaning they can only be accessed within that function.</p>

    <h3>Example:</h3>
    <div class="example-code">
        def my_function():<br>
        &nbsp;&nbsp;&nbsp;&nbsp;message = "Hello from function!"<br><br>
        my_function()<br>
        # print(message)  # This will cause an error because 'message' is local to my_function.
    </div>

    <p>If you try to print <strong>message</strong> outside of the function, it will result in an error because it is local to <strong>my_function</strong>.</p>

    <h2>7. Recursion</h2>
    <p>Recursion is when a function calls itself. This technique is useful for solving problems that can be broken down into smaller subproblems.</p>

    <h3>Example:</h3>
    <div class="example-code">
        def factorial(n):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;if n == 0:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1<br>
        &nbsp;&nbsp;&nbsp;&nbsp;else:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return n * factorial(n - 1)<br><br>
        print(factorial(5))
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        120
    </div>

    <p>In this example, the function <strong>factorial</strong> calls itself until the base case (n == 0) is met. This calculates the factorial of a number.</p>

    <h2>8. Lambda Functions</h2>
    <p>Lambda functions are small, anonymous functions that are defined using the <strong>lambda</strong> keyword. They are used when you need a small function for a short period of time and do not want to formally define it using the <strong>def</strong> keyword.</p>

    <h3>Example:</h3>
    <div class="example-code">
        square = lambda x: x * x<br><br>
        print(square(5))
    </div>

    <h3>Output:</h3>
    <div class="example-code">
        25
    </div>

    <p>The lambda function <strong>square</strong> takes one parameter <strong>x</strong> and returns its square.</p>

</body>
</html>

            `;
            break;

        case 'modules':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python Modules: Detailed Guide with Examples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1, h2, h3 {
            color: #333;
        }
        .example-code {
            background-color: #f0f0f0;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 10px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style-type: square;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1>Python Modules: Detailed Guide with Examples</h1>

    <p>Python includes a rich set of built-in modules which provide functionalities such as file operations, data manipulation, mathematical calculations, and more. In this guide, we will cover some of the most commonly used modules in Python, providing detailed explanations, example code, and a breakdown of their key functions.</p>

    <!-- 1. math module -->
    <h2>1. The <code>math</code> Module</h2>
    <p>The <strong>math</strong> module provides mathematical functions such as power, logarithmic, and trigonometric functions. It's highly useful for performing complex mathematical computations in Python.</p>

    <h3>Key Functions in math Module:</h3>
    <ul>
        <li><strong>sqrt(x)</strong>: Returns the square root of x.</li>
        <li><strong>pow(x, y)</strong>: Returns x raised to the power of y.</li>
        <li><strong>factorial(x)</strong>: Returns the factorial of x.</li>
        <li><strong>sin(x)</strong>: Returns the sine of x (in radians).</li>
        <li><strong>cos(x)</strong>: Returns the cosine of x (in radians).</li>
        <li><strong>log(x, base)</strong>: Returns the logarithm of x to the given base.</li>
        <li><strong>exp(x)</strong>: Returns e raised to the power of x.</li>
        <li><strong>ceil(x)</strong>: Returns the smallest integer greater than or equal to x.</li>
        <li><strong>floor(x)</strong>: Returns the largest integer less than or equal to x.</li>
        <li><strong>degrees(x)</strong>: Converts radians to degrees.</li>
    </ul>

    <div class="example-code">
        import math<br><br>
        print(math.sqrt(16))  # Output: 4.0<br>
        print(math.pow(2, 3))  # Output: 8.0<br>
        print(math.factorial(5))  # Output: 120<br>
        print(math.sin(math.pi / 2))  # Output: 1.0<br>
        print(math.cos(math.pi))  # Output: -1.0<br>
        print(math.log(100, 10))  # Output: 2.0<br>
        print(math.exp(1))  # Output: 2.718281828459045<br>
        print(math.ceil(5.7))  # Output: 6<br>
        print(math.floor(5.7))  # Output: 5<br>
        print(math.degrees(math.pi))  # Output: 180.0<br>
    </div>

    <!-- 2. random module -->
    <h2>2. The <code>random</code> Module</h2>
    <p>The <strong>random</strong> module helps generate random numbers, shuffle sequences, and select random elements from lists. It's widely used in simulations, games, and testing scenarios.</p>

    <h3>Key Functions in random Module:</h3>
    <ul>
        <li><strong>randint(a, b)</strong>: Returns a random integer between a and b.</li>
        <li><strong>uniform(a, b)</strong>: Returns a random float between a and b.</li>
        <li><strong>choice(seq)</strong>: Returns a randomly selected element from a sequence.</li>
        <li><strong>shuffle(seq)</strong>: Shuffles the sequence in place.</li>
        <li><strong>sample(seq, k)</strong>: Returns a list of k unique elements randomly chosen from a sequence.</li>
        <li><strong>gauss(mu, sigma)</strong>: Returns a random number from a Gaussian distribution.</li>
        <li><strong>triangular(low, high, mode)</strong>: Returns a random number from a triangular distribution.</li>
        <li><strong>betavariate(alpha, beta)</strong>: Returns a random number from a beta distribution.</li>
        <li><strong>expovariate(lambd)</strong>: Returns a random number from an exponential distribution.</li>
        <li><strong>normalvariate(mu, sigma)</strong>: Returns a random number from a normal distribution.</li>
    </ul>

    <div class="example-code">
        import random<br><br>
        print(random.randint(1, 100))  # Output: Random integer between 1 and 100<br>
        print(random.uniform(1, 10))  # Output: Random float between 1 and 10<br>
        items = ['apple', 'banana', 'cherry']<br>
        print(random.choice(items))  # Output: Random item from list<br>
        random.shuffle(items)<br>
        print(items)  # Output: Shuffled list<br>
        print(random.sample(range(1, 100), 5))  # Output: 5 unique random numbers<br>
        print(random.gauss(0, 1))  # Output: Random number from Gaussian distribution<br>
        print(random.triangular(0, 10, 5))  # Output: Triangular distribution<br>
        print(random.betavariate(2, 3))  # Output: Beta distribution<br>
        print(random.expovariate(1))  # Output: Exponential distribution<br>
        print(random.normalvariate(0, 1))  # Output: Normal distribution<br>
    </div>

    <!-- 3. os module -->
    <h2>3. The <code>os</code> Module</h2>
    <p>The <strong>os</strong> module provides a way to interact with the operating system, allowing file and directory manipulation, path operations, and system-related tasks.</p>

    <h3>Key Functions in os Module:</h3>
    <ul>
        <li><strong>getcwd()</strong>: Returns the current working directory.</li>
        <li><strong>mkdir(path)</strong>: Creates a new directory.</li>
        <li><strong>rename(src, dst)</strong>: Renames a file or directory.</li>
        <li><strong>remove(path)</strong>: Removes a file.</li>
        <li><strong>listdir(path)</strong>: Returns a list of files and directories in a given directory.</li>
        <li><strong>path.exists(path)</strong>: Checks if a file or directory exists.</li>
        <li><strong>path.join(path, *paths)</strong>: Joins paths to form a complete file path.</li>
        <li><strong>path.abspath(path)</strong>: Returns the absolute path of a file.</li>
        <li><strong>rmdir(path)</strong>: Removes an empty directory.</li>
        <li><strong>environ</strong>: Returns a dictionary of the environment variables.</li>
    </ul>

    <div class="example-code">
        import os<br><br>
        print(os.getcwd())  # Output: Current working directory<br>
        os.mkdir('new_directory')  # Creates a new directory<br>
        os.rename('old_file.txt', 'new_file.txt')  # Renames a file<br>
        os.remove('file_to_delete.txt')  # Deletes a file<br>
        print(os.listdir())  # Output: List of files in the current directory<br>
        print(os.path.exists('file.txt'))  # Output: True if file exists<br>
        print(os.path.join('folder', 'file.txt'))  # Output: Joins paths<br>
        print(os.path.abspath('file.txt'))  # Output: Absolute path of a file<br>
        os.rmdir('old_directory')  # Removes a directory<br>
        print(os.environ)  # Output: Environment variables<br>
    </div>

    <!-- 4. sys module -->
    <h2>4. The <code>sys</code> Module</h2>
    <p>The <strong>sys</strong> module provides access to system-specific parameters and functions. It is used for handling command-line arguments and controlling runtime parameters.</p>

    <h3>Key Functions in sys Module:</h3>
    <ul>
        <li><strong>argv</strong>: Returns a list of command-line arguments passed to the script.</li>
        <li><strong>exit([status])</strong>: Exits the script with an optional exit status.</li>
        <li><strong>version</strong>: Returns the version of Python being used.</li>
        <li><strong>platform</strong>: Returns the platform identifier (e.g., 'win32', 'linux', etc.).</li>
        <li><strong>getsizeof(object)</strong>: Returns the memory size of an object.</li>
        <li><strong>path</strong>: Provides access to the module search path.</li>
    </ul>

    <div class="example-code">
        import sys<br><br>
        print(sys.argv)  # Output: List of command-line arguments<br>
        sys.exit(0)  # Exits the program<br>
        print(sys.version)  # Output: Python version<br>
        print(sys.platform)  # Output: Platform identifier<br>
        print(sys.getsizeof('Hello'))  # Output: Memory size of the string<br>
    </div>
    <h2>5. The <code>datetime</code> Module</h2>
    <p>The <strong>datetime</strong> module supplies classes for manipulating dates and times. It includes functions for working with both simple date/times and more complex operations like calculating time deltas.</p>

    <h3>Key Functions in datetime Module:</h3>
    <ul>
        <li><strong>datetime.now()</strong>: Returns the current local date and time.</li>
        <li><strong>datetime.date()</strong>: Returns the date part of a datetime object.</li>
        <li><strong>datetime.time()</strong>: Returns the time part of a datetime object.</li>
        <li><strong>datetime.strftime(format)</strong>: Formats a datetime object as a string.</li>
        <li><strong>datetime.strptime(date_string, format)</strong>: Parses a string into a datetime object.</li>
        <li><strong>timedelta(days, seconds, microseconds)</strong>: Represents the difference between two dates or times.</li>
        <li><strong>datetime.today()</strong>: Returns the current local date and time.</li>
        <li><strong>datetime.combine(date, time)</strong>: Combines a date and a time into a datetime object.</li>
    </ul>

    <div class="example-code">
        import datetime<br><br>
        print(datetime.datetime.now())  # Output: Current date and time<br>
        print(datetime.date(2024, 10, 19))  # Output: 2024-10-19<br>
        print(datetime.time(12, 30, 45))  # Output: 12:30:45<br>
        dt = datetime.datetime(2024, 10, 19, 12, 30)<br>
        print(dt.strftime('%Y-%m-%d %H:%M:%S'))  # Output: Formatted date string<br>
        date_str = '2024-10-19 12:30:00'<br>
        dt_obj = datetime.datetime.strptime(date_str, '%Y-%m-%d %H:%M:%S')<br>
        print(dt_obj)  # Output: Parsed datetime object<br>
        from datetime import timedelta<br>
        delta = timedelta(days=5)<br>
        print(datetime.datetime.now() + delta)  # Output: Date 5 days from now<br>
        date1 = datetime.date(2024, 1, 1)<br>
        time1 = datetime.time(10, 30)<br>
        print(datetime.datetime.combine(date1, time1))  # Output: Combined datetime<br>
    </div>

    <!-- 6. json module -->
    <h2>6. The <code>json</code> Module</h2>
    <p>The <strong>json</strong> module provides a way to work with JSON (JavaScript Object Notation) data. It allows easy parsing and generation of JSON data.</p>

    <h3>Key Functions in json Module:</h3>
    <ul>
        <li><strong>json.dumps(obj)</strong>: Converts a Python object to a JSON string.</li>
        <li><strong>json.loads(json_string)</strong>: Parses a JSON string into a Python object.</li>
        <li><strong>json.dump(obj, file)</strong>: Writes a Python object to a file in JSON format.</li>
        <li><strong>json.load(file)</strong>: Reads JSON data from a file and returns it as a Python object.</li>
    </ul>

    <div class="example-code">
        import json<br><br>
        data = {"name": "Alice", "age": 25}<br>
        json_data = json.dumps(data)<br>
        print(json_data)  # Output: '{"name": "Alice", "age": 25}'<br>
        parsed_data = json.loads(json_data)<br>
        print(parsed_data)  # Output: {'name': 'Alice', 'age': 25}<br>
        with open('data.json', 'w') as file:<br>
            json.dump(data, file)<br>
        with open('data.json', 'r') as file:<br>
            loaded_data = json.load(file)<br>
            print(loaded_data)  # Output: {'name': 'Alice', 'age': 25}<br>
    </div>

    <!-- 7. re module -->
    <h2>7. The <code>re</code> Module</h2>
    <p>The <strong>re</strong> module deals with regular expressions, which allow for pattern matching in strings. It provides various functions to search, match, and manipulate text using patterns.</p>

    <h3>Key Functions in re Module:</h3>
    <ul>
        <li><strong>re.match(pattern, string)</strong>: Checks if the pattern matches the beginning of the string.</li>
        <li><strong>re.search(pattern, string)</strong>: Searches the string for the first occurrence of the pattern.</li>
        <li><strong>re.findall(pattern, string)</strong>: Returns a list of all non-overlapping matches of the pattern in the string.</li>
        <li><strong>re.sub(pattern, repl, string)</strong>: Replaces occurrences of the pattern with a replacement string.</li>
        <li><strong>re.split(pattern, string)</strong>: Splits the string by the occurrences of the pattern.</li>
    </ul>

    <div class="example-code">
        import re<br><br>
        text = "The quick brown fox jumps over the lazy dog"<br>
        result = re.match(r"^The", text)<br>
        print(result.group())  # Output: The<br>
        result = re.search(r"fox", text)<br>
        print(result.group())  # Output: fox<br>
        words = re.findall(r"\b\w+\b", text)<br>
        print(words)  # Output: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']<br>
        new_text = re.sub(r"fox", "cat", text)<br>
        print(new_text)  # Output: The quick brown cat jumps over the lazy dog<br>
        split_text = re.split(r"\s+", text)<br>
        print(split_text)  # Output: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']<br>
    </div>

    <!-- 8. itertools module -->
    <h2>8. The <code>itertools</code> Module</h2>
    <p>The <strong>itertools</strong> module provides functions that create iterators for efficient looping. It includes tools for working with infinite sequences, permutations, combinations, and more.</p>

    <h3>Key Functions in itertools Module:</h3>
    <ul>
        <li><strong>count(start, step)</strong>: Returns an iterator that generates numbers starting from 'start' and increments by 'step' indefinitely.</li>
        <li><strong>cycle(iterable)</strong>: Cycles through an iterable indefinitely.</li>
        <li><strong>repeat(element, times)</strong>: Repeats an element a specified number of times.</li>
        <li><strong>permutations(iterable, r)</strong>: Returns all possible permutations of an iterable of length 'r'.</li>
        <li><strong>combinations(iterable, r)</strong>: Returns all possible combinations of an iterable of length 'r'.</li>
        <li><strong>product(iterable, repeat)</strong>: Returns the Cartesian product of input iterables.</li>
    </ul>

    <div class="example-code">
        import itertools<br><br>
        count_iter = itertools.count(10, 2)<br>
        print(next(count_iter))  # Output: 10<br>
        print(next(count_iter))  # Output: 12<br>
        cycle_iter = itertools.cycle([1, 2, 3])<br>
        print(next(cycle_iter))  # Output: 1<br>
        repeat_iter = itertools.repeat('a', 3)<br>
        print(list(repeat_iter))  # Output: ['a', 'a', 'a']<br>
        perm_iter = itertools.permutations([1, 2, 3])<br>
        print(list(perm_iter))  # Output: [(1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1)]<br>
    </div>
     <!-- 9. collections module -->
     <h2>9. The <code>collections</code> Module</h2>
     <p>The <strong>collections</strong> module provides alternatives to Python’s built-in collection types, such as lists, tuples, and dictionaries. It includes specialized container datatypes like namedtuples, deques, Counter, OrderedDict, defaultdict, and ChainMap.</p>
 
     <h3>Key Functions in collections Module:</h3>
     <ul>
         <li><strong>namedtuple()</strong>: Factory function for creating tuple subclasses with named fields.</li>
         <li><strong>deque()</strong>: Double-ended queue that allows appending and popping from both ends.</li>
         <li><strong>Counter()</strong>: A dict subclass for counting hashable objects.</li>
         <li><strong>OrderedDict()</strong>: A dict subclass that remembers the order items were inserted.</li>
         <li><strong>defaultdict()</strong>: A dict subclass that provides a default value for nonexistent keys.</li>
         <li><strong>ChainMap()</strong>: Combines multiple dictionaries into a single, updateable view.</li>
     </ul>
 
     <div class="example-code">
         from collections import namedtuple, deque, Counter, OrderedDict, defaultdict, ChainMap<br><br>
         # namedtuple<br>
         Point = namedtuple('Point', ['x', 'y'])<br>
         p = Point(10, 20)<br>
         print(p.x, p.y)  # Output: 10 20<br><br>
         # deque<br>
         d = deque([1, 2, 3])<br>
         d.appendleft(0)<br>
         d.append(4)<br>
         print(d)  # Output: deque([0, 1, 2, 3, 4])<br><br>
         # Counter<br>
         c = Counter('gallop')<br>
         print(c)  # Output: Counter({'g': 1, 'a': 1, 'l': 2, 'o': 1, 'p': 1})<br><br>
         # OrderedDict<br>
         o = OrderedDict([('a', 1), ('b', 2)])<br>
         print(o)  # Output: OrderedDict([('a', 1), ('b', 2)])<br><br>
         # defaultdict<br>
         dd = defaultdict(int)<br>
         dd['one'] += 1<br>
         print(dd)  # Output: defaultdict(<class 'int'>, {'one': 1})<br><br>
         # ChainMap<br>
         dict1 = {'x': 1, 'y': 2}<br>
         dict2 = {'z': 3}<br>
         cm = ChainMap(dict1, dict2)<br>
         print(cm)  # Output: ChainMap({'x': 1, 'y': 2}, {'z': 3})<br>
     </div>
 
     <!-- 10. subprocess module -->
     <h2>10. The <code>subprocess</code> Module</h2>
     <p>The <strong>subprocess</strong> module allows you to spawn new processes, connect to their input/output/error pipes, and obtain their return codes.</p>
 
     <h3>Key Functions in subprocess Module:</h3>
     <ul>
         <li><strong>subprocess.run()</strong>: Runs a command and waits for it to complete.</li>
         <li><strong>subprocess.Popen()</strong>: Spawns a new process.</li>
         <li><strong>subprocess.call()</strong>: Executes a command and returns the return code.</li>
         <li><strong>subprocess.check_output()</strong>: Runs a command and returns its output.</li>
     </ul>
 
     <div class="example-code">
         import subprocess<br><br>
         # Running a simple command<br>
         result = subprocess.run(['ls', '-l'], capture_output=True, text=True)<br>
         print(result.stdout)  # Output: Command output<br><br>
         # Running a command and capturing the output<br>
         output = subprocess.check_output(['echo', 'Hello, World!'], text=True)<br>
         print(output)  # Output: Hello, World!<br><br>
         # Spawning a new process<br>
         process = subprocess.Popen(['python3', '--version'], stdout=subprocess.PIPE)<br>
         stdout, stderr = process.communicate()<br>
         print(stdout.decode())  # Output: Python version info<br>
     </div>
 
     <!-- 11. sqlite3 module -->
     <h2>11. The <code>sqlite3</code> Module</h2>
     <p>The <strong>sqlite3</strong> module allows for interaction with SQLite databases. It provides an API for creating, reading, updating, and deleting data in SQLite databases.</p>
 
     <h3>Key Functions in sqlite3 Module:</h3>
     <ul>
         <li><strong>sqlite3.connect()</strong>: Connects to an SQLite database file.</li>
         <li><strong>cursor.execute()</strong>: Executes a SQL query.</li>
         <li><strong>cursor.fetchall()</strong>: Fetches all rows of a query result.</li>
         <li><strong>connection.commit()</strong>: Commits the transaction to the database.</li>
         <li><strong>connection.close()</strong>: Closes the connection to the database.</li>
     </ul>
 
     <div class="example-code">
         import sqlite3<br><br>
         conn = sqlite3.connect('example.db')<br>
         cursor = conn.cursor()<br>
         cursor.execute('''CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)''')<br>
         cursor.execute("INSERT INTO users (name) VALUES ('Alice')")<br>
         conn.commit()<br>
         cursor.execute("SELECT * FROM users")<br>
         rows = cursor.fetchall()<br>
         print(rows)  # Output: [(1, 'Alice')]<br>
         conn.close()<br>
     </div>
 
     <!-- 12. socket module -->
     <h2>12. The <code>socket</code> Module</h2>
     <p>The <strong>socket</strong> module provides a low-level interface for networking and communication between computers over the Internet. It allows for creating and using sockets for client-server communication.</p>
 
     <h3>Key Functions in socket Module:</h3>
     <ul>
         <li><strong>socket.socket()</strong>: Creates a socket object.</li>
         <li><strong>socket.bind()</strong>: Binds the socket to an address and port.</li>
         <li><strong>socket.listen()</strong>: Sets up the socket to listen for incoming connections.</li>
         <li><strong>socket.accept()</strong>: Accepts a connection from a client.</li>
         <li><strong>socket.connect()</strong>: Connects the socket to a remote address.</li>
         <li><strong>socket.send()</strong>: Sends data through the socket.</li>
         <li><strong>socket.recv()</strong>: Receives data from the socket.</li>
     </ul>
 
     <div class="example-code">
         import socket<br><br>
         # Create socket object<br>
         s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)<br>
         # Bind the socket to a host and port<br>
         s.bind(('localhost', 12345))<br>
         # Listen for connections<br>
         s.listen(1)<br>
         print("Waiting for connection...")<br>
         conn, addr = s.accept()<br>
         print('Connection from', addr)<br>
         conn.sendall(b'Hello, Client!')<br>
         conn.close()<br>
     </div>
 
     <!-- 13. csv module -->
     <h2>13. The <code>csv</code> Module</h2>
     <p>The <strong>csv</strong> module provides functionality for reading and writing CSV files. It helps you easily work with CSV data in Python.</p>
 
     <h3>Key Functions in csv Module:</h3>
     <ul>
         <li><strong>csv.reader()</strong>: Reads data from a CSV file.</li>
         <li><strong>csv.writer()</strong>: Writes data to a CSV file.</li>
         <li><strong>csv.DictReader()</strong>: Reads CSV files into dictionaries.</li>
         <li><strong>csv.DictWriter()</strong>: Writes dictionaries to a CSV file.</li>
     </ul>
 
     <div class="example-code">
         import csv<br><br>
         with open('data.csv', mode='w', newline='') as file:<br>
         &nbsp;&nbsp;&nbsp;&nbsp;writer = csv.writer(file)<br>
         &nbsp;&nbsp;&nbsp;&nbsp;writer.writerow(['Name', 'Age', 'Country'])<br>
         &nbsp;&nbsp;&nbsp;&nbsp;writer.writerow(['John', 28, 'USA'])<br><br>
         with open('data.csv', mode='r') as file:<br>
         &nbsp;&nbsp;&nbsp;&nbsp;reader = csv.reader(file)<br>
         &nbsp;&nbsp;&nbsp;&nbsp;for row in reader:<br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(row)<br>
     </div>

</body>
</html>


            `;
            break;
            case "packages":
                contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python Packages: Detailed Guide with Examples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1, h2, h3 {
            color: #333;
        }
        .example-code {
            background-color: #f0f0f0;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 10px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style-type: square;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1>Python Packages: Detailed Guide with Examples</h1>

    <p>In Python, a package is a collection of modules that are organized in directories. Packages help you organize your code in a more manageable and scalable way. This guide will explain the concept of packages, how to create them, and provide examples of some commonly used built-in and external packages.</p>

    <!-- 1. What is a Package? -->
    <h2>1. What is a Package?</h2>
    <p>A Python package is a directory that contains a special file called <code>__init__.py</code> and other Python modules or sub-packages. This allows you to organize related modules together, providing a clean and hierarchical structure for larger codebases. Packages can be imported into other modules just like individual modules.</p>

    <h3>Package Structure:</h3>
    <p>A typical package structure looks like this:</p>
    <div class="example-code">
        <code>
        mypackage/                    # Package directory<br>
        ├── __init__.py               # Initialization file for the package<br>
        ├── module1.py                # Module 1<br>
        ├── module2.py                # Module 2<br>
        └── subpackage/               # Sub-package<br>
            ├── __init__.py           # Initialization file for the sub-package<br>
            └── module3.py            # Module 3 inside sub-package<br>
        </code>
    </div>

    <p>The <code>__init__.py</code> file allows Python to recognize a directory as a package. This file can be empty, but it often contains initialization code for the package.</p>

    <!-- 2. Creating a Package -->
    <h2>2. Creating a Package</h2>
    <p>Creating a package involves organizing Python modules into directories with the <code>__init__.py</code> file. Here is an example of how to create a package:</p>

    <div class="example-code">
        <code>
        # Directory structure:<br>
        my_package/                    # Create a directory named my_package<br>
        ├── __init__.py               # This file marks the directory as a package<br>
        └── my_module.py              # A module inside the package<br><br>

        # Inside the __init__.py file:<br>
        print("my_package initialized")<br><br>

        # Inside my_module.py:<br>
        def my_function():<br>
        &nbsp;&nbsp;print("Hello from my_module")<br><br>

        # To use the package in another script:<br>
        import my_package.my_module<br>
        my_package.my_module.my_function()  # Output: Hello from my_module<br>
        </code>
    </div>

    <p>When you import a package in your Python code, Python executes the code in the <code>__init__.py</code> file, initializing the package.</p>

    <!-- 3. Installing External Packages -->
    <h2>3. Installing External Packages</h2>
    <p>Packages can also be installed from the Python Package Index (PyPI) using a package manager like <code>pip</code>. Some popular external packages include <code>requests</code>, <code>numpy</code>, and <code>pandas</code>.</p>

    <h3>Installing a Package:</h3>
    <div class="example-code">
        <code>
        # Install a package using pip:<br>
        pip install requests<br>
        pip install numpy<br>
        </code>
    </div>

    <p>Once a package is installed, you can import it and use its functionality in your project. For example:</p>

    <div class="example-code">
        <code>
        import requests<br>
        response = requests.get('https://api.github.com')<br>
        print(response.status_code)  # Output: 200 (OK)<br>
        </code>
    </div>

    <!-- 4. Popular Python Packages -->
    <h2>4. Popular Python Packages</h2>
    <h3>4.1 <code>requests</code></h3>
    <p>The <code>requests</code> module is a popular package for making HTTP requests in Python. It simplifies working with REST APIs and web services.</p>

    <div class="example-code">
        <code>
        import requests<br><br>
        response = requests.get('https://jsonplaceholder.typicode.com/posts/1')<br>
        data = response.json()<br>
        print(data)  # Output: JSON response from the API<br>
        </code>
    </div>

    <h3>4.2 <code>numpy</code></h3>
    <p>The <code>numpy</code> package is a library for numerical computing. It provides support for large multidimensional arrays and matrices, along with mathematical functions to operate on these arrays.</p>

    <div class="example-code">
        <code>
        import numpy as np<br><br>
        arr = np.array([1, 2, 3, 4, 5])<br>
        print(arr + 10)  # Output: [11 12 13 14 15]<br>
        </code>
    </div>

    <h3>4.3 <code>pandas</code></h3>
    <p>The <code>pandas</code> package is used for data manipulation and analysis. It provides data structures such as Series and DataFrames to work with structured data.</p>

    <div class="example-code">
        <code>
        import pandas as pd<br><br>
        data = pd.DataFrame({'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]})<br>
        print(data)  # Output: A DataFrame object<br>
        </code>
    </div>

    <h3>4.4 <code>matplotlib</code></h3>
    <p>The <code>matplotlib</code> package is a comprehensive library for creating static, animated, and interactive visualizations in Python.</p>

    <div class="example-code">
        <code>
        import matplotlib.pyplot as plt<br><br>
        x = [1, 2, 3, 4, 5]<br>
        y = [1, 4, 9, 16, 25]<br>
        plt.plot(x, y)<br>
        plt.show()  # This creates a line plot<br>
        </code>
    </div>

    <!-- 5. Organizing Code with Packages -->
    <h2>5. Organizing Code with Packages</h2>
    <p>Packages provide a way to structure your code in a modular fashion, especially in large projects. Here is an example of how to organize a project using packages:</p>

    <div class="example-code">
        <code>
        my_project/                    # Main project folder<br>
        ├── __init__.py               # Project initialization<br>
        ├── data/                     # Folder for data processing modules<br>
        │   ├── __init__.py           # Data module init file<br>
        │   └── process_data.py       # Code for processing data<br>
        ├── api/                      # API module for handling external requests<br>
        │   ├── __init__.py           # API module init file<br>
        │   └── api_requests.py       # Code for handling API requests<br>
        └── utils/                    # Utility functions<br>
            ├── __init__.py           # Utility init file<br>
            └── helpers.py            # Helper functions<br>
        </code>
    </div>

    <p>By organizing your project this way, each functionality (data processing, API handling, utilities) resides in its own package, making it easier to maintain and extend the project.</p>

    <h3>Key Benefits of Using Packages:</h3>
    <ul>
        <li>Better code organization and modularity.</li>
        <li>Improved reusability by isolating components into independent modules.</li>
        <li>Namespace management for avoiding naming conflicts.</li>
        <li>Scalability for large projects.</li>
    </ul>
    



    <h1>Most Used Python Packages</h1>
    <p>This section covers some of the most widely used Python packages. These packages are essential for various tasks, including web development, data analysis, machine learning, and automation.</p>

    <!-- 1. NumPy -->
    <h2>1. <code>NumPy</code></h2>
    <p><strong>NumPy</strong> is a fundamental package for numerical computations in Python. It provides support for large, multi-dimensional arrays and matrices, along with mathematical functions to operate on these arrays.</p>

    <h3>Key Features:</h3>
    <ul>
        <li>Provides the array object, which is faster and more efficient than Python lists.</li>
        <li>Supports element-wise operations on arrays and matrices.</li>
        <li>Includes powerful linear algebra, statistical, and Fourier transform functions.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        import numpy as np<br><br>
        # Create an array<br>
        arr = np.array([1, 2, 3, 4, 5])<br>
        print(arr + 10)  # Output: [11 12 13 14 15]<br><br>

        # Perform matrix multiplication<br>
        mat1 = np.array([[1, 2], [3, 4]])<br>
        mat2 = np.array([[5, 6], [7, 8]])<br>
        result = np.dot(mat1, mat2)<br>
        print(result)  # Output: [[19 22] [43 50]]<br>
        </code>
    </div>

    <!-- 2. Pandas -->
    <h2>2. <code>Pandas</code></h2>
    <p><strong>Pandas</strong> is a powerful library for data analysis and manipulation. It provides two main data structures: <code>DataFrame</code> and <code>Series</code>, which allow easy handling of structured data.</p>

    <h3>Key Features:</h3>
    <ul>
        <li>Provides fast, flexible, and expressive data structures for working with structured data.</li>
        <li>Supports data cleaning, transformation, and analysis.</li>
        <li>Can read and write data in multiple formats such as CSV, Excel, SQL databases, and JSON.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        import pandas as pd<br><br>
        # Create a DataFrame<br>
        data = pd.DataFrame({'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]})<br>
        print(data)<br><br>

        # Select specific column<br>
        print(data['Name'])  # Output: Alice, Bob, Charlie<br>
        </code>
    </div>

    <!-- 3. Matplotlib -->
    <h2>3. <code>Matplotlib</code></h2>
    <p><strong>Matplotlib</strong> is a comprehensive library for creating static, animated, and interactive visualizations in Python. It is widely used for plotting graphs and data visualization tasks.</p>

    <h3>Key Features:</h3>
    <ul>
        <li>Can create a variety of plots like line charts, bar charts, histograms, and scatter plots.</li>
        <li>Highly customizable with various options for style, color, and format.</li>
        <li>Integrates with other libraries like Pandas for data visualization.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        import matplotlib.pyplot as plt<br><br>
        # Data to plot<br>
        x = [1, 2, 3, 4, 5]<br>
        y = [1, 4, 9, 16, 25]<br><br>

        # Create a plot<br>
        plt.plot(x, y)<br>
        plt.xlabel('x-axis')<br>
        plt.ylabel('y-axis')<br>
        plt.title('Line Plot')<br>
        plt.show()<br>
        </code>
    </div>

    <!-- 4. Requests -->
    <h2>4. <code>Requests</code></h2>
    <p><strong>Requests</strong> is a simple HTTP library for Python, allowing you to send HTTP requests like GET and POST. It's commonly used for working with APIs and web scraping.</p>

    <h3>Key Features:</h3>
    <ul>
        <li>Simple API for making HTTP requests.</li>
        <li>Supports methods like GET, POST, PUT, DELETE, and more.</li>
        <li>Handles cookies, sessions, and request/response headers automatically.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        import requests<br><br>
        # Make a GET request<br>
        response = requests.get('https://jsonplaceholder.typicode.com/posts/1')<br>
        data = response.json()<br>
        print(data)  # JSON response from the API<br>
        </code>
    </div>

    <!-- 5. Scikit-learn -->
    <h2>5. <code>Scikit-learn</code></h2>
    <p><strong>Scikit-learn</strong> is a machine learning library for Python. It provides simple and efficient tools for data mining and data analysis, built on top of NumPy, SciPy, and matplotlib.</p>

    <h3>Key Features:</h3>
    <ul>
        <li>Provides a wide range of machine learning algorithms for classification, regression, clustering, and more.</li>
        <li>Includes tools for model selection, evaluation, and pre-processing.</li>
        <li>Works well with other libraries like NumPy and Pandas for data manipulation.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        from sklearn.datasets import load_iris<br>
        from sklearn.model_selection import train_test_split<br>
        from sklearn.tree import DecisionTreeClassifier<br><br>
        # Load dataset<br>
        iris = load_iris()<br>
        X = iris.data<br>
        y = iris.target<br><br>

        # Split data into training and testing sets<br>
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)<br><br>

        # Train model<br>
        clf = DecisionTreeClassifier()<br>
        clf.fit(X_train, y_train)<br>
        </code>
    </div>

    <!-- 6. Flask -->
    <h2>6. <code>Flask</code></h2>
    <p><strong>Flask</strong> is a micro web framework for Python that is used for building web applications. It provides the essentials needed for web development, such as routing, templates, and request handling.</p>

    <h3>Key Features:</h3>
    <ul>
        <li>Lightweight and simple to use for small to medium-sized web applications.</li>
        <li>Supports web templating with Jinja2 and form handling.</li>
        <li>Extensible through a variety of plugins and extensions.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        from flask import Flask<br><br>
        # Create a Flask app<br>
        app = Flask(__name__)<br><br>

        # Define a route<br>
        @app.route('/')<br>
        def home():<br>
        &nbsp;&nbsp;return "Hello, Flask!"<br><br>

        # Run the app<br>
        if __name__ == '__main__':<br>
        &nbsp;&nbsp;app.run(debug=True)<br>
        </code>
    </div>

    <!-- 7. Django -->
    <h2>7. <code>Django</code></h2>
    <p><strong>Django</strong> is a high-level web framework for building complex, database-driven websites. It encourages rapid development and clean, pragmatic design.</p>

    <h3>Key Features:</h3>
    <ul>
        <li>Built-in ORM for database management.</li>
        <li>Includes a templating engine and tools for routing, security, and form handling.</li>
        <li>Admin interface for managing your application data.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        from django.http import HttpResponse<br><br>
        def home(request):<br>
        &nbsp;&nbsp;return HttpResponse("Hello, Django!")<br><br>
        </code>
    </div>

</body>
</html>
`;
break;

        case 'lists':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detailed Explanation of Lists in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1, h2, h3 {
            color: #333;
        }
        .example-code {
            background-color: #f0f0f0;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 10px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style-type: square;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1>Python Lists - Detailed Explanation</h1>
    <p>In Python, lists are a built-in, versatile, and widely used data structure that allows us to store multiple items (of any data type) in a single variable. A list is an ordered collection, meaning the order of elements is maintained. Lists are mutable, meaning their content can be changed during runtime, making them flexible for various applications.</p>

    <h2>Key Features of Lists</h2>
    <ul>
        <li><strong>Ordered:</strong> Lists maintain the order of elements as they are added.</li>
        <li><strong>Mutable:</strong> Lists can be changed after creation—elements can be modified, added, or removed.</li>
        <li><strong>Indexed:</strong> Each element in a list is associated with an index, starting from 0.</li>
        <li><strong>Heterogeneous:</strong> A list can contain elements of different data types, such as integers, strings, booleans, floats, or even other lists.</li>
        <li><strong>Dynamic Size:</strong> Lists in Python can grow or shrink in size dynamically during the program's execution.</li>
    </ul>

    <h2>Creating Lists</h2>
    <p>Lists are created using square brackets <code>[ ]</code> and separating items with commas. The syntax for creating a list is:</p>
    <p><code>list_name = [item1, item2, item3, ...]</code></p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Creating a list with integers
        my_list = [1, 2, 3, 4, 5]
        print(my_list)  # Output: [1, 2, 3, 4, 5]

        # Creating a list with different data types
        mixed_list = [1, "apple", 3.14, True, [1, 2, 3]]
        print(mixed_list)  # Output: [1, 'apple', 3.14, True, [1, 2, 3]]
        </code>
    </div>

    <h2>Accessing Elements in a List</h2>
    <p>Elements in a list can be accessed by their index. The index starts from 0 for the first element. You can access individual items, as well as sublists (slicing).</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_list = ["apple", "banana", "cherry", "date"]

        # Accessing the first element
        print(my_list[0])  # Output: apple

        # Accessing the last element
        print(my_list[-1])  # Output: date

        # Slicing the list (getting a subset)
        print(my_list[1:3])  # Output: ['banana', 'cherry']
        </code>
    </div>

    <h2>Reverse Slicing</h2>
    <p>Reverse slicing allows you to extract elements from a list starting from the end, moving towards the beginning. You can achieve this by specifying a negative step value in the slicing operation.</p>
    <p>The general syntax for reverse slicing is:</p>
    <p><code>list[start:end:-step]</code></p>
    <p>Where:
        <ul>
            <li><code>start</code>: The index where the slice begins (inclusive).</li>
            <li><code>end</code>: The index where the slice ends (exclusive).</li>
            <li><code>step</code>: The step size, i.e., the number of elements to skip (negative for reverse order).</li>
        </ul>
    </p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        # Reverse slicing from index 8 to 3 (in reverse order)
        reverse_slice = my_list[8:2:-1]
        print(reverse_slice)  # Output: [9, 8, 7, 6, 5]

        # Reverse slicing with step of 2
        step_reverse_slice = my_list[7:1:-2]
        print(step_reverse_slice)  # Output: [8, 6, 4, 2]
        </code>
    </div>

    <h2>Adding Elements to a List</h2>
    <p>There are several ways to add elements to a list in Python:</p>
    <ul>
        <li><strong>append()</strong>: Adds an element to the end of the list.</li>
        <li><strong>insert()</strong>: Adds an element at a specified index.</li>
        <li><strong>extend()</strong>: Adds all the elements from another iterable (list, tuple, etc.) to the end of the list.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_list = [1, 2, 3]

        # Append an element to the end of the list
        my_list.append(4)
        print(my_list)  # Output: [1, 2, 3, 4]

        # Insert an element at a specific index
        my_list.insert(1, "a")
        print(my_list)  # Output: [1, 'a', 2, 3, 4]

        # Extend the list with another list
        my_list.extend([5, 6, 7])
        print(my_list)  # Output: [1, 'a', 2, 3, 4, 5, 6, 7]
        </code>
    </div>

    <h2>Removing Elements from a List</h2>
    <p>Elements can be removed using various methods:</p>
    <ul>
        <li><strong>remove()</strong>: Removes the first occurrence of a specific element.</li>
        <li><strong>pop()</strong>: Removes the element at a specified index (if no index is provided, it removes the last element).</li>
        <li><strong>clear()</strong>: Removes all the elements from the list.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_list = [1, 2, 3, 4, 5]

        # Remove a specific element
        my_list.remove(3)
        print(my_list)  # Output: [1, 2, 4, 5]

        # Remove and return the element at a specific index
        removed_element = my_list.pop(1)
        print(removed_element)  # Output: 2
        print(my_list)  # Output: [1, 4, 5]

        # Clear the entire list
        my_list.clear()
        print(my_list)  # Output: []
        </code>
    </div>

    <h2>List Slicing</h2>
    <p>List slicing allows you to extract a portion of a list by specifying a range of indices. The general syntax for slicing is:</p>
    <p><code>list[start:end:step]</code></p>
    <p>Where:
        <ul>
            <li><code>start</code>: The index where the slice starts (inclusive, default is 0).</li>
            <li><code>end</code>: The index where the slice ends (exclusive, default is the end of the list).</li>
            <li><code>step</code>: The step size, i.e., how many elements to skip (default is 1).</li>
        </ul>
    </p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        # Slicing from index 2 to 5
        sliced_list = my_list[2:6]
        print(sliced_list)  # Output: [3, 4, 5, 6]

        # Slicing with step
        step_list = my_list[1:8:2]
        print(step_list)  # Output: [2, 4, 6, 8]
        </code>
    </div>

    <h2>Conclusion</h2>
    <p>Lists are one of the most powerful data structures in Python, offering flexibility and a wide range of methods to work with data. By mastering list operations such as creation, accessing, modifying, slicing, and comprehensions, you can handle many different types of programming tasks efficiently.</p>

</body>
</html>

            `;
            break;

        case 'tuples':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detailed Explanation of Tuples in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1, h2, h3 {
            color: #333;
        }
        .example-code {
            background-color: #f0f0f0;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 10px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style-type: square;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1>Python Tuples - Detailed Explanation</h1>
    <p>In Python, tuples are a built-in, immutable data structure that allows us to store multiple items (of any data type) in a single variable. A tuple is an ordered collection, meaning the order of elements is preserved. Unlike lists, tuples are immutable, meaning once they are created, their content cannot be changed.</p>

    <h2>Key Features of Tuples</h2>
    <ul>
        <li><strong>Ordered:</strong> Tuples maintain the order of elements as they are added.</li>
        <li><strong>Immutable:</strong> Tuples cannot be changed once created. You cannot modify, add, or remove elements.</li>
        <li><strong>Indexed:</strong> Each element in a tuple is associated with an index, starting from 0.</li>
        <li><strong>Heterogeneous:</strong> A tuple can contain elements of different data types, such as integers, strings, booleans, floats, or even other tuples.</li>
        <li><strong>Hashable:</strong> Since tuples are immutable, they can be used as keys in dictionaries, unlike lists.</li>
    </ul>

    <h2>Creating Tuples</h2>
    <p>Tuples are created using parentheses <code>( )</code> and separating items with commas. The syntax for creating a tuple is:</p>
    <p><code>tuple_name = (item1, item2, item3, ...)</code></p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Creating a tuple with integers
        my_tuple = (1, 2, 3, 4, 5)
        print(my_tuple)  # Output: (1, 2, 3, 4, 5)

        # Creating a tuple with different data types
        mixed_tuple = (1, "apple", 3.14, True, (1, 2, 3))
        print(mixed_tuple)  # Output: (1, 'apple', 3.14, True, (1, 2, 3))
        </code>
    </div>

    <h2>Accessing Elements in a Tuple</h2>
    <p>Elements in a tuple can be accessed by their index. The index starts from 0 for the first element. You can access individual items, as well as sub-tuples (slicing).</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_tuple = ("apple", "banana", "cherry", "date")

        # Accessing the first element
        print(my_tuple[0])  # Output: apple

        # Accessing the last element
        print(my_tuple[-1])  # Output: date

        # Slicing the tuple (getting a subset)
        print(my_tuple[1:3])  # Output: ('banana', 'cherry')
        </code>
    </div>

    <h2>Reverse Slicing</h2>
    <p>Reverse slicing allows you to extract elements from a tuple starting from the end, moving towards the beginning. You can achieve this by specifying a negative step value in the slicing operation.</p>
    <p>The general syntax for reverse slicing is:</p>
    <p><code>tuple[start:end:-step]</code></p>
    <p>Where:
        <ul>
            <li><code>start</code>: The index where the slice begins (inclusive).</li>
            <li><code>end</code>: The index where the slice ends (exclusive).</li>
            <li><code>step</code>: The step size, i.e., the number of elements to skip (negative for reverse order).</li>
        </ul>
    </p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_tuple = (1, 2, 3, 4, 5, 6, 7, 8, 9)

        # Reverse slicing from index 8 to 3 (in reverse order)
        reverse_slice = my_tuple[8:2:-1]
        print(reverse_slice)  # Output: (9, 8, 7, 6, 5)

        # Reverse slicing with step of 2
        step_reverse_slice = my_tuple[7:1:-2]
        print(step_reverse_slice)  # Output: (8, 6, 4, 2)
        </code>
    </div>

    <h2>Immutability of Tuples</h2>
    <p>Unlike lists, tuples are immutable. This means once a tuple is created, it cannot be altered. You cannot modify, add, or remove elements from a tuple. For example:</p>
    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_tuple = (1, 2, 3)

        # Trying to change an element (will raise an error)
        try:
            my_tuple[1] = 4
        except TypeError as e:
            print(e)  # Output: 'tuple' object does not support item assignment
        </code>
    </div>

    <h2>Tuples and Nesting</h2>
    <p>Tuples can contain other tuples, and this can be useful for organizing data in a structured way. These are called nested tuples.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        nested_tuple = (1, 2, (3, 4, 5), 6)
        print(nested_tuple)  # Output: (1, 2, (3, 4, 5), 6)

        # Accessing elements in the nested tuple
        print(nested_tuple[2][1])  # Output: 4
        </code>
    </div>

    <h2>Tuple Operations</h2>
    <p>Tuples support a few operations, such as:</p>
    <ul>
        <li><strong>Concatenation (+):</strong> Combine two or more tuples using the plus operator.</li>
        <li><strong>Repetition (*):</strong> Repeat a tuple using the multiplication operator.</li>
        <li><strong>Membership (in, not in):</strong> Check if an element exists within a tuple.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        tuple1 = (1, 2, 3)
        tuple2 = (4, 5, 6)

        # Concatenating two tuples
        combined_tuple = tuple1 + tuple2
        print(combined_tuple)  # Output: (1, 2, 3, 4, 5, 6)

        # Repeating a tuple
        repeated_tuple = tuple1 * 2
        print(repeated_tuple)  # Output: (1, 2, 3, 1, 2, 3)

        # Membership test
        print(4 in tuple2)  # Output: True
        print(7 not in tuple2)  # Output: True
        </code>
    </div>

    <h2>Tuple Packing and Unpacking</h2>
    <p>Tuples are often used for packing and unpacking values. Packing is when multiple values are assigned to a tuple, while unpacking is the process of extracting values from a tuple.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Packing a tuple
        packed_tuple = 1, 2, 3

        # Unpacking a tuple
        a, b, c = packed_tuple
        print(a, b, c)  # Output: 1 2 3
        </code>
    </div>

    <h2>Conclusion</h2>
    <p>Tuples are a lightweight and efficient data structure in Python. Due to their immutability, they provide better performance and safety for certain operations, making them ideal for storing fixed collections of data. Mastering tuple operations like slicing, packing, and unpacking allows you to use tuples effectively in a wide range of applications.</p>

</body>
</html>

            `;
            break;

        case 'dictionaries':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detailed Explanation of Dictionaries in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1, h2, h3 {
            color: #333;
        }
        .example-code {
            background-color: #f0f0f0;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 10px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style-type: square;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1>Python Dictionaries - Detailed Explanation</h1>
    <p>In Python, a dictionary is an unordered collection of items. Each item is a key-value pair, where the key is unique, and the value can be any data type (list, string, integer, etc.). Dictionaries are commonly used when you need a fast lookup for associated values.</p>

    <h2>Key Features of Dictionaries</h2>
    <ul>
        <li><strong>Unordered:</strong> Items in dictionaries are not stored in any particular order.</li>
        <li><strong>Mutable:</strong> Dictionaries can be changed. You can add, modify, or remove items.</li>
        <li><strong>Key-Value Pairs:</strong> Each element consists of a key and a value. Keys must be unique and immutable (e.g., strings, numbers, tuples), while values can be any data type.</li>
        <li><strong>Efficient Lookup:</strong> Dictionaries provide an efficient way to store and retrieve data, making them ideal for fast lookups based on keys.</li>
    </ul>

    <h2>Creating a Dictionary</h2>
    <p>A dictionary can be created using curly braces <code>{}</code> or the <code>dict()</code> constructor. The key-value pairs are separated by a colon, and each pair is separated by a comma.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Creating a dictionary using curly braces
        my_dict = {'name': 'John', 'age': 25, 'city': 'New York'}
        print(my_dict)  # Output: {'name': 'John', 'age': 25, 'city': 'New York'}

        # Creating a dictionary using the dict() constructor
        another_dict = dict(name='Alice', age=30, city='Los Angeles')
        print(another_dict)  # Output: {'name': 'Alice', 'age': 30, 'city': 'Los Angeles'}
        </code>
    </div>

    <h2>Accessing Dictionary Elements</h2>
    <p>To access the value associated with a key, you can use the key inside square brackets <code>my_dict[key]</code> or the <code>get()</code> method.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_dict = {'name': 'John', 'age': 25, 'city': 'New York'}

        # Accessing value using key
        print(my_dict['name'])  # Output: John

        # Accessing value using get() method
        print(my_dict.get('age'))  # Output: 25
        </code>
    </div>

    <h2>Modifying and Adding Elements</h2>
    <p>You can modify an existing key's value or add new key-value pairs using simple assignment.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_dict = {'name': 'John', 'age': 25, 'city': 'New York'}

        # Modifying a value
        my_dict['age'] = 26
        print(my_dict)  # Output: {'name': 'John', 'age': 26, 'city': 'New York'}

        # Adding a new key-value pair
        my_dict['email'] = 'john@example.com'
        print(my_dict)  # Output: {'name': 'John', 'age': 26, 'city': 'New York', 'email': 'john@example.com'}
        </code>
    </div>

    <h2>Removing Elements from a Dictionary</h2>
    <p>Elements can be removed using the <code>del</code> statement, or with methods like <code>pop()</code>, <code>popitem()</code>, and <code>clear()</code>.</p>
    <ul>
        <li><strong><code>del</code>:</strong> Deletes a specific key-value pair.</li>
        <li><strong><code>pop()</code>:</strong> Removes and returns the value associated with the specified key.</li>
        <li><strong><code>popitem()</code>:</strong> Removes and returns the last inserted key-value pair.</li>
        <li><strong><code>clear()</code>:</strong> Removes all items from the dictionary.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_dict = {'name': 'John', 'age': 25, 'city': 'New York'}

        # Deleting an item using del
        del my_dict['age']
        print(my_dict)  # Output: {'name': 'John', 'city': 'New York'}

        # Popping a value using pop()
        city = my_dict.pop('city')
        print(city)  # Output: New York
        print(my_dict)  # Output: {'name': 'John'}

        # Removing the last item using popitem()
        last_item = my_dict.popitem()
        print(last_item)  # Output: ('name', 'John')
        print(my_dict)  # Output: {}
        </code>
    </div>

    <h2>Dictionary Methods</h2>
    <p>Python provides several methods for working with dictionaries:</p>
    <ul>
        <li><code>keys()</code>: Returns a view object that displays a list of all the keys in the dictionary.</li>
        <li><code>values()</code>: Returns a view object that displays a list of all the values in the dictionary.</li>
        <li><code>items()</code>: Returns a view object that displays a list of key-value tuple pairs.</li>
        <li><code>copy()</code>: Returns a shallow copy of the dictionary.</li>
        <li><code>update()</code>: Updates the dictionary with elements from another dictionary or an iterable of key-value pairs.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_dict = {'name': 'John', 'age': 25, 'city': 'New York'}

        # Getting all keys
        keys = my_dict.keys()
        print(keys)  # Output: dict_keys(['name', 'age', 'city'])

        # Getting all values
        values = my_dict.values()
        print(values)  # Output: dict_values(['John', 25, 'New York'])

        # Getting all items (key-value pairs)
        items = my_dict.items()
        print(items)  # Output: dict_items([('name', 'John'), ('age', 25), ('city', 'New York')])

        # Copying the dictionary
        new_dict = my_dict.copy()
        print(new_dict)  # Output: {'name': 'John', 'age': 25, 'city': 'New York'}

        # Updating the dictionary
        my_dict.update({'email': 'john@example.com'})
        print(my_dict)  # Output: {'name': 'John', 'age': 25, 'city': 'New York', 'email': 'john@example.com'}
        </code>
    </div>

    <h2>Nested Dictionaries</h2>
    <p>Dictionaries can also contain other dictionaries, which is called a nested dictionary. This allows you to store more complex data structures.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        nested_dict = {
            'person1': {'name': 'John', 'age': 25, 'city': 'New York'},
            'person2': {'name': 'Alice', 'age': 30, 'city': 'Los Angeles'}
        }

        # Accessing values in a nested dictionary
        print(nested_dict['person1']['name'])  # Output: John
        print(nested_dict['person2']['city'])  # Output: Los Angeles
        </code>
    </div>

    <h2>Conclusion</h2>
    <p>Dictionaries in Python are powerful and versatile data structures. They allow you to store key-value pairs, making them ideal for representing data where fast lookup and modification are required.</p>

</body>
</html>

            `;
            break;

        case 'sets':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detailed Explanation of Sets in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1, h2, h3 {
            color: #333;
        }
        .example-code {
            background-color: #f0f0f0;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 10px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style-type: square;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1>Python Sets - Detailed Explanation</h1>
    <p>In Python, a set is an unordered collection of unique elements. Sets are useful when you need to store multiple items and are concerned only with the presence of the items (i.e., duplicates are not allowed) and not their order.</p>

    <h2>Key Features of Sets</h2>
    <ul>
        <li><strong>Unordered:</strong> Sets do not maintain any order of elements.</li>
        <li><strong>Unique Elements:</strong> A set cannot contain duplicate items.</li>
        <li><strong>Mutable:</strong> Although sets are mutable, the elements within a set must be immutable.</li>
        <li><strong>Hashable:</strong> Elements of a set must be hashable, meaning you can store only immutable objects like numbers, strings, and tuples (not lists or dictionaries).</li>
    </ul>

    <h2>Creating Sets</h2>
    <p>Sets can be created using the <code>set()</code> constructor or by using curly braces <code>{}</code>.</p>
    <p>The syntax for creating a set is:</p>
    <p><code>my_set = {element1, element2, element3, ...}</code></p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Creating a set using curly braces
        my_set = {1, 2, 3, 4, 5}
        print(my_set)  # Output: {1, 2, 3, 4, 5}

        # Creating a set using the set() constructor
        another_set = set([10, 20, 30, 40])
        print(another_set)  # Output: {10, 20, 30, 40}
        </code>
    </div>

    <h2>Accessing Elements in a Set</h2>
    <p>Unlike lists and tuples, sets are unordered collections, meaning they do not support indexing or slicing. You can only access elements by iterating through the set using loops like <code>for</code>.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_set = {1, 2, 3, 4, 5}

        # Iterating through a set
        for item in my_set:
            print(item)

        # Output might be in any order, e.g., 1, 2, 3, 4, 5, but not in any specific order.
        </code>
    </div>

    <h2>Set Operations</h2>
    <p>Python provides several operations that can be performed on sets, including union, intersection, difference, and symmetric difference.</p>
    <ul>
        <li><strong>Union:</strong> Combines elements from two sets.</li>
        <li><strong>Intersection:</strong> Returns elements that are present in both sets.</li>
        <li><strong>Difference:</strong> Returns elements that are present in the first set but not in the second.</li>
        <li><strong>Symmetric Difference:</strong> Returns elements that are in either set, but not in both.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        set1 = {1, 2, 3, 4}
        set2 = {3, 4, 5, 6}

        # Union
        print(set1 | set2)  # Output: {1, 2, 3, 4, 5, 6}

        # Intersection
        print(set1 & set2)  # Output: {3, 4}

        # Difference
        print(set1 - set2)  # Output: {1, 2}

        # Symmetric Difference
        print(set1 ^ set2)  # Output: {1, 2, 5, 6}
        </code>
    </div>

    <h2>Adding and Removing Elements</h2>
    <p>Sets are mutable, so you can add and remove elements after the set is created. However, the elements themselves must be immutable.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_set = {1, 2, 3}

        # Adding an element to the set
        my_set.add(4)
        print(my_set)  # Output: {1, 2, 3, 4}

        # Removing an element from the set (if element is not present, it raises KeyError)
        my_set.remove(2)
        print(my_set)  # Output: {1, 3, 4}

        # Discarding an element (if element is not present, it does not raise an error)
        my_set.discard(10)  # No error, even though 10 is not in the set
        print(my_set)  # Output: {1, 3, 4}

        # Popping an arbitrary element from the set
        popped_item = my_set.pop()
        print(popped_item)  # Output: one of the elements in the set (random)
        print(my_set)  # Output: Remaining elements after popping
        </code>
    </div>

    <h2>Set Comprehension</h2>
    <p>Similar to list comprehensions, set comprehensions allow you to create sets in a concise way.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Creating a set using set comprehension
        square_set = {x*x for x in range(1, 6)}
        print(square_set)  # Output: {1, 4, 9, 16, 25}
        </code>
    </div>

    <h2>Set Methods</h2>
    <p>Python provides several methods to operate on sets, such as <code>copy()</code>, <code>clear()</code>, <code>pop()</code>, <code>union()</code>, <code>difference()</code>, etc.</p>

    <ul>
        <li><code>copy()</code>: Returns a shallow copy of the set.</li>
        <li><code>clear()</code>: Removes all elements from the set.</li>
        <li><code>pop()</code>: Removes and returns an arbitrary element from the set.</li>
        <li><code>discard()</code>: Removes an element if it exists, does nothing if the element is not found.</li>
        <li><code>add()</code>: Adds an element to the set.</li>
        <li><code>remove()</code>: Removes an element, raising a KeyError if the element is not found.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        my_set = {1, 2, 3, 4, 5}

        # Copying a set
        copied_set = my_set.copy()
        print(copied_set)  # Output: {1, 2, 3, 4, 5}

        # Clearing a set
        my_set.clear()
        print(my_set)  # Output: set()

        # Adding an element to the set
        copied_set.add(6)
        print(copied_set)  # Output: {1, 2, 3, 4, 5, 6}
        </code>
    </div>

    <h2>Conclusion</h2>
    <p>Sets are a powerful and efficient data structure in Python for handling collections of unique elements. They provide fast operations like union, intersection, and difference, making them suitable for various use cases such as removing duplicates and testing membership. Although sets are mutable, they do not allow duplicate elements and do not preserve order, which makes them different from lists and tuples.</p>

</body>
</html>

            `;
            break;

        case 'files':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detailed Explanation of File Handling in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1, h2, h3 {
            color: #333;
        }
        .example-code {
            background-color: #f0f0f0;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 10px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style-type: square;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1>File Handling in Python - Detailed Explanation</h1>
    <p>File handling in Python allows us to work with files on the filesystem. It is one of the most useful aspects of Python programming, allowing reading, writing, and updating files in different formats. Python provides built-in functions and methods to make file operations easy.</p>

    <h2>Opening a File</h2>
    <p>Before performing any file operation, you must first open the file using the <code>open()</code> function. The basic syntax for opening a file is:</p>
    <pre><code>file_object = open('filename', 'mode')</code></pre>
    <ul>
        <li><strong>filename</strong>: Name of the file to open.</li>
        <li><strong>mode</strong>: The mode in which the file is opened. It can be:</li>
        <ul>
            <li><code>'r'</code>: Read (default mode).</li>
            <li><code>'w'</code>: Write (creates a new file if it doesn't exist, or overwrites the file if it exists).</li>
            <li><code>'a'</code>: Append (writes to the end of the file without overwriting the existing content).</li>
            <li><code>'b'</code>: Binary mode.</li>
            <li><code>'x'</code>: Exclusive creation (fails if the file exists).</li>
            <li><code>'t'</code>: Text mode (default mode).</li>
        </ul>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Open a file in read mode
        file = open('example.txt', 'r')
        print(file.read())  # Output: Contents of the file
        file.close()
        </code>
    </div>

    <h2>Reading from a File</h2>
    <p>Once the file is opened, we can read its contents using various methods:</p>
    <ul>
        <li><code>read()</code>: Reads the entire file.</li>
        <li><code>readline()</code>: Reads the next line of the file.</li>
        <li><code>readlines()</code>: Reads all the lines of the file into a list.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Open the file in read mode
        file = open('example.txt', 'r')

        # Read the entire file
        content = file.read()
        print(content)  # Output: The entire content of the file

        # Read a single line
        file.seek(0)  # Rewind the file to the start
        first_line = file.readline()
        print(first_line)  # Output: The first line of the file

        # Read all lines as a list
        file.seek(0)
        lines = file.readlines()
        print(lines)  # Output: List of all lines in the file

        file.close()
        </code>
    </div>

    <h2>Writing to a File</h2>
    <p>To write data into a file, you need to open the file in write or append mode. If the file doesn’t exist, it will be created.</p>

    <ul>
        <li><code>write()</code>: Writes a string to a file.</li>
        <li><code>writelines()</code>: Writes a list of strings to a file.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Open a file in write mode
        file = open('output.txt', 'w')

        # Write a string to the file
        file.write('Hello, Python File Handling!\n')

        # Write multiple lines to the file
        lines = ['Line 1: First line\n', 'Line 2: Second line\n']
        file.writelines(lines)

        file.close()
        </code>
    </div>

    <h2>Appending to a File</h2>
    <p>If you want to add data to the end of a file, you can open the file in append mode <code>'a'</code>. The content will be added without overwriting the existing data.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Open a file in append mode
        file = open('output.txt', 'a')

        # Append text to the file
        file.write('Appended text: Adding more content!\n')

        file.close()
        </code>
    </div>

    <h2>Closing a File</h2>
    <p>Once the file operations are done, it's important to close the file using the <code>close()</code> method. This ensures that any changes made are saved, and system resources are freed.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Open a file
        file = open('example.txt', 'r')

        # Perform file operations

        # Close the file
        file.close()
        </code>
    </div>

    <h2>File Handling Using Context Manager</h2>
    <p>Instead of manually opening and closing files, Python provides a <code>with</code> statement, which automatically closes the file after exiting the block. This is known as a context manager.</p>
    <p>The <code>with</code> statement is considered the preferred way of handling files because it ensures that the file is always closed after use, even if an exception occurs within the block.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Using context manager to handle files
        with open('example.txt', 'r') as file:
            content = file.read()
            print(content)
        # File is automatically closed when exiting the 'with' block
        </code>
    </div>

    <h2>File Methods</h2>
    <p>Python provides several useful file methods to handle file operations more efficiently:</p>
    <ul>
        <li><code>seek(offset, whence)</code>: Moves the file pointer to a specific position in the file.</li>
        <li><code>tell()</code>: Returns the current position of the file pointer.</li>
        <li><code>flush()</code>: Flushes the internal buffer to the file.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Using seek() and tell()
        with open('example.txt', 'r') as file:
            file.seek(5)  # Move file pointer to position 5
            print(file.tell())  # Output: Current position of the file pointer

        # Flush file buffer
        with open('example.txt', 'w') as file:
            file.write('Some content')
            file.flush()
        </code>
    </div>

    <h2>Handling File Exceptions</h2>
    <p>When working with files, it's important to handle potential exceptions such as <code>FileNotFoundError</code> and <code>IOError</code>. Using <code>try-except</code> blocks helps to prevent crashes.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        try:
            file = open('non_existent_file.txt', 'r')
        except FileNotFoundError:
            print('File not found. Please check the file path.')

        try:
            with open('output.txt', 'w') as file:
                file.write('Some content')
        except IOError:
            print('Error writing to file')
        </code>
    </div>

    <h2>Conclusion</h2>
    <p>File handling is an essential aspect of Python programming, allowing you to read from and write to files easily. Python's built-in functions make file operations simple and flexible. Remember to handle exceptions and always close files after use. Using the <code>with</code> statement is a preferred practice for better resource management.</p>

</body>
</html>

            `;
            break;

        case 'exceptions':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exception Handling in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        h1, h2, h3 {
            color: #333;
        }
        .example-code {
            background-color: #f0f0f0;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 10px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        ul {
            list-style-type: square;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1>Exception Handling in Python - Detailed Explanation</h1>
    <p>Exceptions are runtime errors that can occur in a Python program. Instead of crashing the program, Python provides ways to handle these exceptions gracefully. Exception handling allows developers to manage these situations and control the program’s behavior in the presence of errors.</p>

    <h2>What is an Exception?</h2>
    <p>An exception is an event that disrupts the normal flow of the program’s instructions. It occurs during the execution of a program and can be handled using specific constructs like <code>try</code> and <code>except</code>.</p>

    <h2>Basic Syntax of Exception Handling</h2>
    <p>Python provides the following keywords for exception handling:</p>
    <ul>
        <li><code>try</code>: The block of code where exceptions might occur.</li>
        <li><code>except</code>: This block handles the exception if one is raised.</li>
        <li><code>else</code>: The code in this block is executed if no exception occurs.</li>
        <li><code>finally</code>: This block is executed no matter what, regardless of whether an exception occurred or not.</li>
    </ul>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        try:
            # Code that might raise an exception
            result = 10 / 0
        except ZeroDivisionError:
            # Handle the specific exception
            print("You cannot divide by zero.")
        else:
            # This block will be executed if no exception occurs
            print("Division was successful.")
        finally:
            # This block will always be executed
            print("This will always execute, regardless of an exception.")
        </code>
    </div>

    <h2>Types of Exceptions</h2>
    <p>Python has several built-in exceptions, some of the common ones are:</p>
    <ul>
        <li><code>ZeroDivisionError</code>: Raised when dividing by zero.</li>
        <li><code>ValueError</code>: Raised when a function receives the correct type but an invalid value.</li>
        <li><code>FileNotFoundError</code>: Raised when trying to open a file that does not exist.</li>
        <li><code>TypeError</code>: Raised when an operation or function is applied to an object of inappropriate type.</li>
        <li><code>KeyError</code>: Raised when trying to access a dictionary with a key that does not exist.</li>
    </ul>

    <h2>Handling Multiple Exceptions</h2>
    <p>You can handle multiple exceptions in the same block using multiple <code>except</code> clauses. Each exception is handled based on its type.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        try:
            number = int(input("Enter a number: "))
            result = 100 / number
        except ValueError:
            print("Invalid input! Please enter a number.")
        except ZeroDivisionError:
            print("You cannot divide by zero.")
        </code>
    </div>

    <h2>Catching Multiple Exceptions in One Block</h2>
    <p>You can also catch multiple exceptions using a single <code>except</code> block by specifying them as a tuple.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        try:
            number = int(input("Enter a number: "))
            result = 100 / number
        except (ValueError, ZeroDivisionError) as e:
            print(f"An error occurred: {e}")
        </code>
    </div>

    <h2>Using the <code>else</code> Clause</h2>
    <p>The <code>else</code> block is executed if no exception is raised. It is a good practice to use <code>else</code> for code that should run only if the <code>try</code> block is successful.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        try:
            number = int(input("Enter a number: "))
            result = 100 / number
        except ZeroDivisionError:
            print("You cannot divide by zero.")
        except ValueError:
            print("Invalid input!")
        else:
            print(f"Result: {result}")
        </code>
    </div>

    <h2>Using the <code>finally</code> Clause</h2>
    <p>The <code>finally</code> block is always executed, whether an exception occurs or not. It is typically used for cleanup operations, such as closing files or releasing resources.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        try:
            file = open('example.txt', 'r')
            content = file.read()
            print(content)
        except FileNotFoundError:
            print("File not found.")
        finally:
            file.close()
            print("File closed.")
        </code>
    </div>

    <h2>Custom Exceptions</h2>
    <p>Python allows you to create your own exceptions by deriving a new class from the built-in <code>Exception</code> class. Custom exceptions can be raised using the <code>raise</code> statement.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Define a custom exception
        class CustomError(Exception):
            def __init__(self, message):
                self.message = message

        # Raise the custom exception
        def check_value(value):
            if value < 0:
                raise CustomError("Negative value is not allowed.")
            else:
                print("Value is acceptable.")

        try:
            check_value(-1)
        except CustomError as e:
            print(e.message)
        </code>
    </div>

    <h2>The <code>raise</code> Statement</h2>
    <p>The <code>raise</code> statement allows you to raise an exception at any point in your code. It is useful when you want to signal that an error has occurred under certain conditions.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        def divide(a, b):
            if b == 0:
                raise ZeroDivisionError("You cannot divide by zero.")
            return a / b

        try:
            result = divide(10, 0)
        except ZeroDivisionError as e:
            print(e)
        </code>
    </div>

    <h2>Conclusion</h2>
    <p>Exception handling is a powerful feature in Python that allows you to handle errors in a graceful manner. It helps in writing more robust and fault-tolerant code by catching potential runtime errors. Use <code>try-except</code> blocks wherever there is a chance of errors, especially in file operations, user inputs, or resource-intensive operations.</p>

</body>
</html>

            `;
            break;
            case "class":
                contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to OOP, Classes, and Objects in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2, h3 {
            color: #333;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        .example-code {
            background-color: #f4f4f4;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 15px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        ul {
            list-style-type: square;
            margin-left: 20px;
        }
    </style>
</head>
<body>

    <h1>Introduction to Object-Oriented Programming (OOP)</h1>
    <p>Object-Oriented Programming (OOP) is a paradigm in Python and many other languages where everything is represented as objects. OOP organizes code in a way that groups data (attributes) and behavior (methods) into individual objects. The concept behind OOP is to create reusable and modular pieces of software by breaking problems down into entities (classes and objects).</p>

    <h2>Key Principles of OOP</h2>
    <ul>
        <li><strong>Encapsulation:</strong> This principle hides the internal state of the object and only exposes certain aspects to the outside world, typically through methods.</li>
        <li><strong>Abstraction:</strong> It focuses on hiding the complex details and showing only the essential features of the object.</li>
        <li><strong>Inheritance:</strong> Allows a new class to inherit attributes and methods from another class, promoting code reuse.</li>
        <li><strong>Polymorphism:</strong> Enables using the same method or function in different ways for different data types or classes.</li>
    </ul>

    <h2>What is a Class?</h2>
    <p>A <strong>class</strong> in Python is a blueprint or template for creating objects. It defines attributes (variables) and methods (functions) that the objects created from the class can use. Classes allow us to model real-world entities in our programs.</p>

    <h3>Defining a Class in Python</h3>
    <p>You can define a class in Python using the <code>class</code> keyword, followed by the class name and a colon. The class name should start with a capital letter by convention.</p>

    <div class="example-code">
        <code>
        class Car:
            # Class attributes and methods go here
            pass  # Use pass to define an empty class
        </code>
    </div>

    <p>In this case, we have defined a simple class named <code>Car</code>. The <code>pass</code> statement is used because we haven't added any attributes or methods yet.</p>

    <h2>What is an Object?</h2>
    <p>An <strong>object</strong> is an instance of a class. Once a class is defined, we can create objects from it. Each object can have its own attributes and behaviors defined by the class. For example, if <code>Car</code> is a class, then each specific car you create is an object of the <code>Car</code> class.</p>

    <h3>Creating an Object (Instance) of a Class</h3>
    <p>To create an object, you simply call the class as if it were a function. This is known as <strong>instantiation</strong>, which creates an instance of the class.</p>

    <div class="example-code">
        <code>
        car1 = Car()  # Create an instance of the Car class
        </code>
    </div>

    <p>Here, <code>car1</code> is an instance of the <code>Car</code> class. The class acts as a blueprint, and the object <code>car1</code> is an actual car based on that blueprint.</p>

    <h2>Class Attributes and Methods</h2>
    <p>A class typically contains two types of members:</p>
    <ul>
        <li><strong>Attributes:</strong> Variables that store information about the object.</li>
        <li><strong>Methods:</strong> Functions that define behaviors of the object.</li>
    </ul>

    <h3>Example: Adding Attributes and Methods to a Class</h3>
    <div class="example-code">
        <code>
        class Car:
            # The constructor method to initialize the object
            def __init__(self, brand, model, year):
                self.brand = brand
                self.model = model
                self.year = year

            # A method to display car details
            def display_info(self):
                print(f"Car: {self.brand} {self.model}, Year: {self.year}")

        # Create an object (instance) of the class
        car1 = Car("Toyota", "Camry", 2020)

        # Call the method
        car1.display_info()
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Constructor:</strong> The <code>__init__()</code> method is a special method (called the constructor) that is automatically invoked when an object is created. It initializes the attributes of the object.</li>
        <li><strong>Attributes:</strong> In the example, <code>brand</code>, <code>model</code>, and <code>year</code> are attributes that store information about each car object.</li>
        <li><strong>Methods:</strong> The <code>display_info()</code> method defines behavior and displays the details of the car object when called.</li>
        <li><strong>Object:</strong> The object <code>car1</code> is created by passing values to the class <code>Car</code>, and it holds the specific details of a Toyota Camry from 2020.</li>
    </ul>

    <h2>The <code>self</code> Keyword in Python</h2>
    <p>The <code>self</code> keyword is an important part of object-oriented programming in Python. It refers to the current instance of the class. By using <code>self</code>, we can access attributes and methods of the class from within the class itself.</p>

    <p>When defining methods in a class, <code>self</code> must be the first parameter. It is automatically passed to the method when the method is called on an object.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        class Dog:
            def __init__(self, name, breed):
                self.name = name  # Attribute
                self.breed = breed  # Attribute

            def bark(self):
                print(f"{self.name} is barking!")  # Method using self

        # Create an instance of the Dog class
        dog1 = Dog("Buddy", "Golden Retriever")

        # Call the bark method
        dog1.bark()
        </code>
    </div>

    <h3>Explanation:</h3>
    <p>In this example, the <code>Dog</code> class has two attributes, <code>name</code> and <code>breed</code>. The <code>bark()</code> method uses the <code>self</code> keyword to refer to the current instance, allowing it to access the <code>name</code> attribute. When we call <code>dog1.bark()</code>, the output will be <code>Buddy is barking!</code>.</p>

    <h2>More on Object Creation</h2>
    <p>Once we have a class defined, we can create as many objects (instances) as needed. Each object will have its own set of attributes based on the class definition.</p>

    <h3>Example Code:</h3>
    <div class="example-code">
        <code>
        # Create multiple instances of the Car class
        car1 = Car("Honda", "Accord", 2018)
        car2 = Car("Ford", "Mustang", 2021)

        # Call the method for each object
        car1.display_info()  # Output: Car: Honda Accord, Year: 2018
        car2.display_info()  # Output: Car: Ford Mustang, Year: 2021
        </code>
    </div>

    <p>Here, we created two objects: <code>car1</code> (a Honda Accord from 2018) and <code>car2</code> (a Ford Mustang from 2021). Each object has its own unique attribute values but shares the same behavior through the <code>display_info()</code> method.</p>

    <h2>Summary of OOP in Python</h2>
    <p>In Python, classes and objects are used to model real-world entities. The principles of OOP help to make code more modular, reusable, and easier to maintain. The key concepts include:</p>
    <ul>
        <li><strong>Class:</strong> A blueprint for creating objects.</li>
        <li><strong>Object:</strong> An instance of a class with its own attributes and behaviors.</li>
        <li><strong>self:</strong> Refers to the current instance and allows access to class attributes and methods.</li>
        <li><strong>Encapsulation, Inheritance, Polymorphism:</strong> Key principles that provide structure and flexibility in OOP.</li>
    </ul>

</body>
</html>
`;break;
case "abstract":
    contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abstraction in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2, h3 {
            color: #333;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        .example-code {
            background-color: #f4f4f4;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 15px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        ul {
            list-style-type: square;
            margin-left: 20px;
        }
    </style>
</head>
<body>

    <h1>Understanding Abstraction in Python</h1>
    <p><strong>Abstraction</strong> is one of the four fundamental concepts of Object-Oriented Programming (OOP), alongside encapsulation, inheritance, and polymorphism. In simple terms, abstraction is the concept of hiding the complex implementation details and only exposing the essential parts of an object or a function. It allows us to focus on what an object does rather than how it does it.</p>
    
    <p>By using abstraction, we can define a generic blueprint (abstract class) for a set of actions that different objects can perform, while the implementation of those actions is left to the child classes.</p>

    <h2>Key Concepts of Abstraction in Python</h2>
    <ul>
        <li><strong>Abstract Classes:</strong> A class that cannot be instantiated directly. It serves as a blueprint for other classes.</li>
        <li><strong>Abstract Methods:</strong> Methods declared in an abstract class that must be implemented by any subclass inheriting from it.</li>
        <li><strong>Hiding Details:</strong> Only the relevant functionality is exposed, while complex details are hidden from the user.</li>
    </ul>

    <h2>Why Use Abstraction?</h2>
    <p>Abstraction helps in managing the complexity of large systems by breaking down the system into more manageable parts. It also promotes the use of reusable and modular code. For example, when you use a car, you don’t need to understand how the engine works; you only need to know how to drive it. This is abstraction in real life.</p>

    <h2>Abstraction in Python</h2>
    <p>Python supports abstraction using abstract classes and methods. Python’s <code>abc</code> module provides tools to define abstract base classes. An abstract base class (ABC) can contain one or more abstract methods, which are methods that are declared but contain no implementation.</p>

    <h3>Example of an Abstract Class and Abstract Method</h3>
    <p>In the example below, we define an abstract class <code>Shape</code> with an abstract method <code>area()</code>. Any class that inherits from <code>Shape</code> must implement the <code>area()</code> method:</p>

    <div class="example-code">
        <code>
        from abc import ABC, abstractmethod

        # Define the abstract class
        class Shape(ABC):
            @abstractmethod
            def area(self):
                pass  # Abstract method (no implementation)

        # Subclass that implements the abstract method
        class Circle(Shape):
            def __init__(self, radius):
                self.radius = radius

            def area(self):
                return 3.14 * (self.radius ** 2)

        # Subclass that implements the abstract method
        class Rectangle(Shape):
            def __init__(self, length, width):
                self.length = length
                self.width = width

            def area(self):
                return self.length * self.width

        # Create objects of the subclasses
        circle = Circle(5)
        rectangle = Rectangle(4, 6)

        print("Area of Circle:", circle.area())  # Output: Area of Circle: 78.5
        print("Area of Rectangle:", rectangle.area())  # Output: Area of Rectangle: 24
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Abstract Class (Shape):</strong> The class <code>Shape</code> is abstract because it contains an abstract method <code>area()</code>. It cannot be instantiated directly.</li>
        <li><strong>Abstract Method (area):</strong> The <code>area()</code> method in the <code>Shape</code> class is defined as abstract using the <code>@abstractmethod</code> decorator. Any class inheriting from <code>Shape</code> must implement this method.</li>
        <li><strong>Subclasses:</strong> The <code>Circle</code> and <code>Rectangle</code> classes inherit from <code>Shape</code> and provide their own implementations of the <code>area()</code> method.</li>
    </ul>

    <h2>How to Use Abstraction in Python</h2>
    <p>In Python, abstraction is typically used in cases where you want to define a general blueprint for a group of related objects. For instance, if you are building an application that deals with multiple shapes (circle, rectangle, square), you might create an abstract class for a general shape, while the specific details are handled by each individual shape class.</p>

    <h3>Another Example: Payment System</h3>
    <p>Let’s take the example of a payment system. We can define an abstract class <code>Payment</code> that outlines the basic structure for any type of payment (credit card, debit card, PayPal). The specific implementation of how each payment method works will be defined by the subclasses.</p>

    <div class="example-code">
        <code>
        from abc import ABC, abstractmethod

        class Payment(ABC):
            @abstractmethod
            def pay(self, amount):
                pass  # Abstract method

        class CreditCardPayment(Payment):
            def pay(self, amount):
                print(f"Processing credit card payment of {amount} dollars.")

        class PayPalPayment(Payment):
            def pay(self, amount):
                print(f"Processing PayPal payment of {amount} dollars.")

        # Create instances of the payment types
        credit_payment = CreditCardPayment()
        paypal_payment = PayPalPayment()

        # Make payments
        credit_payment.pay(100)  # Output: Processing credit card payment of 100 dollars.
        paypal_payment.pay(200)  # Output: Processing PayPal payment of 200 dollars.
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li>The abstract class <code>Payment</code> defines an abstract method <code>pay()</code>.</li>
        <li>The <code>CreditCardPayment</code> and <code>PayPalPayment</code> classes inherit from <code>Payment</code> and provide their own implementations of the <code>pay()</code> method.</li>
        <li>We create objects of <code>CreditCardPayment</code> and <code>PayPalPayment</code> and call the <code>pay()</code> method on them to process payments.</li>
    </ul>

    <h2>Advantages of Abstraction</h2>
    <ul>
        <li><strong>Code Reusability:</strong> Abstract classes allow you to define a common interface for different types of objects, promoting code reuse.</li>
        <li><strong>Modularity:</strong> It helps in dividing complex systems into smaller, manageable parts, making the code modular and easy to maintain.</li>
        <li><strong>Maintainability:</strong> By focusing on what an object should do rather than how it does it, abstraction helps improve the maintainability of code.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Abstraction is a powerful concept in Python's Object-Oriented Programming, allowing developers to design more modular and reusable code. By defining abstract classes and methods, you can create a structured blueprint for different objects while leaving the specific details to the subclasses. It hides unnecessary complexity from the end user and helps keep code clean and easy to maintain.</p>

</body>
</html>
`;
break;
case "encapsulation":
    contentArea.innerHTML=`<!DOCTYPE html>
<html lang="="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encapsulation in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2, h3 {
            color: #333;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        .example-code {
            background-color: #f4f4f4;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 15px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        ul {
            list-style-type: square;
            margin-left: 20px;
        }
    </style>
</head>
<body>

    <h1>Understanding Encapsulation in Python</h1>
    <p><strong>Encapsulation</strong> is one of the fundamental principles of Object-Oriented Programming (OOP), which involves wrapping data (variables) and methods (functions) together as a single unit or class. Encapsulation helps protect the internal state of an object by restricting access to some of its components and only exposing a selected set of functionalities to the outside world. This ensures that the data is hidden and cannot be altered accidentally or without intention.</p>

    <h2>Key Concepts of Encapsulation in Python</h2>
    <ul>
        <li><strong>Public Access:</strong> Members (attributes and methods) are accessible from outside the class.</li>
        <li><strong>Protected Access:</strong> Members are marked as protected using a single underscore (_), indicating that they should not be accessed directly outside the class or by derived classes.</li>
        <li><strong>Private Access:</strong> Members are marked as private using a double underscore (__), indicating that they are strictly restricted and cannot be accessed outside the class.</li>
    </ul>

    <h2>Why Use Encapsulation?</h2>
    <p>Encapsulation helps in data hiding, which means that the sensitive data of an object can be hidden from the external world. It provides the following benefits:</p>
    <ul>
        <li><strong>Data Security:</strong> Protects data from being accidentally modified by unauthorized users or programs.</li>
        <li><strong>Data Integrity:</strong> Ensures that the internal state of an object can only be changed through well-defined methods.</li>
        <li><strong>Modularity:</strong> Makes code easier to manage by isolating specific parts and allowing updates or changes without affecting other parts of the system.</li>
    </ul>

    <h2>Encapsulation in Python</h2>
    <p>In Python, encapsulation is achieved by defining class members with specific levels of access: public, protected, or private. By default, all class attributes and methods are public unless explicitly defined as protected or private.</p>

    <h3>Example of Public, Protected, and Private Members</h3>
    <p>In the example below, we define a class <code>Person</code> with public, protected, and private attributes:</p>

    <div class="example-code">
        <code>
        class Person:
            def __init__(self, name, age):
                self.name = name  # Public attribute
                self._age = age   # Protected attribute
                self.__ssn = "123-45-6789"  # Private attribute

            def display_info(self):
                print(f"Name: {self.name}, Age: {self._age}, SSN: {self.__ssn}")

            def _protected_method(self):
                print("This is a protected method.")

            def __private_method(self):
                print("This is a private method.")

        # Create an instance of the Person class
        person = Person("John", 30)

        # Accessing public attribute
        print(person.name)  # Output: John

        # Accessing protected attribute (can be accessed, but discouraged)
        print(person._age)  # Output: 30

        # Accessing private attribute (will raise an AttributeError)
        try:
            print(person.__ssn)
        except AttributeError as e:
            print(e)  # Output: 'Person' object has no attribute '__ssn'

        # Accessing private attribute using name mangling
        print(person._Person__ssn)  # Output: 123-45-6789
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Public Attribute (name):</strong> The attribute <code>name</code> is public and can be accessed freely from outside the class.</li>
        <li><strong>Protected Attribute (_age):</strong> The attribute <code>_age</code> is protected. It can be accessed from outside the class but should be treated with caution. It is intended for use within the class and its subclasses.</li>
        <li><strong>Private Attribute (__ssn):</strong> The attribute <code>__ssn</code> is private and cannot be accessed directly from outside the class. Attempting to access it will result in an error. However, it can still be accessed using "name mangling" by prefixing it with <code>_ClassName</code>.</li>
        <li><strong>Protected and Private Methods:</strong> The methods <code>_protected_method</code> and <code>__private_method</code> demonstrate how methods can also be protected or private.</li>
    </ul>

    <h2>Encapsulation Using Getters and Setters</h2>
    <p>Encapsulation also involves restricting direct access to an attribute while allowing controlled access through getter and setter methods. This ensures that data is validated or processed before being accessed or modified.</p>

    <h3>Example: Using Getters and Setters</h3>
    <p>In this example, we define getter and setter methods for a private attribute <code>__balance</code> in a class <code>BankAccount</code>:</p>

    <div class="example-code">
        <code>
        class BankAccount:
            def __init__(self, balance):
                self.__balance = balance  # Private attribute

            # Getter method
            def get_balance(self):
                return self.__balance

            # Setter method
            def set_balance(self, amount):
                if amount < 0:
                    print("Invalid amount. Balance cannot be negative.")
                else:
                    self.__balance = amount

        # Create an instance of BankAccount
        account = BankAccount(5000)

        # Accessing the balance using the getter method
        print("Current Balance:", account.get_balance())  # Output: Current Balance: 5000

        # Updating the balance using the setter method
        account.set_balance(10000)
        print("Updated Balance:", account.get_balance())  # Output: Updated Balance: 10000

        # Attempting to set an invalid balance
        account.set_balance(-500)  # Output: Invalid amount. Balance cannot be negative.
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Private Attribute (__balance):</strong> The attribute <code>__balance</code> is private and cannot be accessed directly. We use getter and setter methods to interact with it.</li>
        <li><strong>Getter Method:</strong> The <code>get_balance()</code> method is used to retrieve the value of the private attribute <code>__balance</code>.</li>
        <li><strong>Setter Method:</strong> The <code>set_balance()</code> method is used to update the value of <code>__balance</code>. It also includes validation to ensure that the balance cannot be negative.</li>
    </ul>

    <h2>Advantages of Encapsulation</h2>
    <ul>
        <li><strong>Data Protection:</strong> Encapsulation allows you to protect important data by controlling access to it.</li>
        <li><strong>Modularity:</strong> It promotes modular code by isolating the implementation details and exposing only the necessary parts.</li>
        <li><strong>Flexibility and Maintainability:</strong> Changes made to the internal implementation of a class do not affect the external code that uses the class.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Encapsulation is a powerful concept in Object-Oriented Programming that helps protect an object's internal state from outside interference. It ensures that sensitive data is hidden and can only be accessed or modified in a controlled manner through public methods. By promoting data security, integrity, and modularity, encapsulation enhances the overall robustness of the code.</p>

</body>
</html>
`;
break;
case "inheritance":
    contentArea.innerHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inheritance in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2, h3 {
            color: #333;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        .example-code {
            background-color: #f4f4f4;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 15px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        ul {
            list-style-type: square;
            margin-left: 20px;
        }
    </style>
</head>
<body>

    <h1>Understanding Inheritance in Python</h1>
    <p><strong>Inheritance</strong> is a fundamental concept in Object-Oriented Programming (OOP) that allows a class (called the <em>child class</em> or <em>derived class</em>) to inherit properties and behaviors (attributes and methods) from another class (called the <em>parent class</em> or <em>base class</em>). This enables code reusability and the creation of hierarchical relationships between classes.</p>

    <h2>Key Concepts of Inheritance</h2>
    <ul>
        <li><strong>Parent Class (Base Class):</strong> The class whose properties and methods are inherited by another class.</li>
        <li><strong>Child Class (Derived Class):</strong> The class that inherits from the parent class and may override or extend its functionality.</li>
        <li><strong>Single Inheritance:</strong> A child class inherits from only one parent class.</li>
        <li><strong>Multiple Inheritance:</strong> A child class inherits from multiple parent classes.</li>
        <li><strong>Multilevel Inheritance:</strong> A class is derived from another derived class, forming a chain of inheritance.</li>
        <li><strong>Hierarchical Inheritance:</strong> Multiple child classes inherit from a single parent class.</li>
    </ul>

    <h2>Why Use Inheritance?</h2>
    <ul>
        <li><strong>Code Reusability:</strong> Inheritance allows you to reuse the functionality of existing classes, avoiding code duplication.</li>
        <li><strong>Extensibility:</strong> You can extend or modify the behavior of a base class without changing its original implementation.</li>
        <li><strong>Maintainability:</strong> It makes code easier to maintain, as changes in the base class automatically apply to all derived classes.</li>
    </ul>

    <h2>Single Inheritance in Python</h2>
    <p>In single inheritance, a child class inherits properties and methods from a single parent class. Here's an example:</p>

    <div class="example-code">
        <code>
        # Parent class
        class Animal:
            def __init__(self, name):
                self.name = name

            def speak(self):
                return f"{self.name} makes a sound."

        # Child class
        class Dog(Animal):
            def speak(self):
                return f"{self.name} barks."

        # Create an object of the Dog class
        my_dog = Dog("Buddy")
        print(my_dog.speak())  # Output: Buddy barks.
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Parent Class (Animal):</strong> The class <code>Animal</code> defines a constructor (<code>__init__()</code>) and a method <code>speak()</code> to represent a general animal behavior.</li>
        <li><strong>Child Class (Dog):</strong> The class <code>Dog</code> inherits from <code>Animal</code> and overrides the <code>speak()</code> method to provide a specific behavior for dogs.</li>
        <li><strong>Method Overriding:</strong> The child class can redefine or override methods from the parent class, as shown in the <code>speak()</code> method of the <code>Dog</code> class.</li>
    </ul>

    <h2>Multiple Inheritance in Python</h2>
    <p>In multiple inheritance, a class can inherit properties and methods from more than one parent class. Here's an example:</p>

    <div class="example-code">
        <code>
        # Parent class 1
        class Flyable:
            def fly(self):
                return "This animal can fly."

        # Parent class 2
        class Swimmable:
            def swim(self):
                return "This animal can swim."

        # Child class inheriting from both Flyable and Swimmable
        class Duck(Flyable, Swimmable):
            pass

        # Create an object of the Duck class
        my_duck = Duck()
        print(my_duck.fly())  # Output: This animal can fly.
        print(my_duck.swim())  # Output: This animal can swim.
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Multiple Parent Classes:</strong> The class <code>Duck</code> inherits from both <code>Flyable</code> and <code>Swimmable</code>, gaining the ability to fly and swim.</li>
        <li><strong>Multiple Inheritance:</strong> In Python, a class can inherit from multiple parent classes, as demonstrated in the example.</li>
    </ul>

    <h2>Multilevel Inheritance in Python</h2>
    <p>In multilevel inheritance, a class is derived from another derived class, forming a chain of inheritance. Here's an example:</p>

    <div class="example-code">
        <code>
        # Base class
        class Animal:
            def __init__(self, name):
                self.name = name

        # Derived class 1
        class Mammal(Animal):
            def speak(self):
                return f"{self.name} makes a sound."

        # Derived class 2
        class Dog(Mammal):
            def speak(self):
                return f"{self.name} barks."

        # Create an object of the Dog class
        my_dog = Dog("Buddy")
        print(my_dog.speak())  # Output: Buddy barks.
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Multilevel Inheritance:</strong> The class <code>Dog</code> inherits from <code>Mammal</code>, which in turn inherits from <code>Animal</code>. This creates a chain of inheritance.</li>
        <li><strong>Inheritance Hierarchy:</strong> In multilevel inheritance, each level of the hierarchy inherits from the previous level, allowing for more specialized behaviors as we go down the chain.</li>
    </ul>

    <h2>Hierarchical Inheritance in Python</h2>
    <p>In hierarchical inheritance, multiple child classes inherit from a single parent class. Here's an example:</p>

    <div class="example-code">
        <code>
        # Parent class
        class Animal:
            def __init__(self, name):
                self.name = name

            def speak(self):
                return f"{self.name} makes a sound."

        # Child class 1
        class Dog(Animal):
            def speak(self):
                return f"{self.name} barks."

        # Child class 2
        class Cat(Animal):
            def speak(self):
                return f"{self.name} meows."

        # Create objects of the Dog and Cat classes
        my_dog = Dog("Buddy")
        my_cat = Cat("Whiskers")

        print(my_dog.speak())  # Output: Buddy barks.
        print(my_cat.speak())  # Output: Whiskers meows.
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Hierarchical Inheritance:</strong> Both the <code>Dog</code> and <code>Cat</code> classes inherit from the <code>Animal</code> class, but each defines its own behavior.</li>
        <li><strong>Code Reusability:</strong> The common properties and methods of the <code>Animal</code> class are reused in both the <code>Dog</code> and <code>Cat</code> classes.</li>
    </ul>

    <h2>Types of Methods in Inheritance</h2>
    <ul>
        <li><strong>Instance Methods:</strong> These are the most common methods and can access both instance and class attributes.</li>
        <li><strong>Class Methods:</strong> These are defined using the <code>@classmethod</code> decorator and operate on class variables rather than instance variables.</li>
        <li><strong>Static Methods:</strong> Defined using the <code>@staticmethod</code> decorator, these methods do not depend on instance or class variables and are mainly utility functions.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Inheritance is a powerful concept in Python that allows for code reuse and creating complex relationships between classes. It enables more modular, maintainable, and readable code. Depending on your design needs, you can use single, multiple, multilevel, or hierarchical inheritance to model real-world problems effectively.</p>

</body>
</html>
`;
break;

        case 'polymorphism':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Polymorphism in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2, h3 {
            color: #333;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        .example-code {
            background-color: #f4f4f4;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 15px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        ul {
            list-style-type: square;
            margin-left: 20px;
        }
    </style>
</head>
<body>

    <h1>Understanding Polymorphism in Python</h1>
    <p><strong>Polymorphism</strong> is a key concept in Object-Oriented Programming (OOP) that allows different classes to implement methods that have the same name but behave differently depending on the type of object that calls the method. It allows us to define a method in a parent class and override it in child classes to perform different tasks.</p>

    <h2>Key Concepts of Polymorphism</h2>
    <ul>
        <li><strong>Polymorphism:</strong> The ability to use the same method name to perform different tasks in different classes.</li>
        <li><strong>Method Overriding:</strong> In polymorphism, child classes can override methods of their parent classes to provide specific implementations.</li>
        <li><strong>Duck Typing:</strong> In Python, polymorphism is often achieved through duck typing, where the type of an object is determined by its behavior (what methods it supports) rather than its class hierarchy.</li>
    </ul>

    <h2>Why Use Polymorphism?</h2>
    <ul>
        <li><strong>Flexibility:</strong> Polymorphism allows you to write flexible and reusable code that can work with objects of different classes without knowing their exact types.</li>
        <li><strong>Code Reusability:</strong> You can use polymorphic methods to avoid writing multiple functions for each object type, making the code more maintainable and scalable.</li>
        <li><strong>Maintainability:</strong> You can easily extend the functionality of your program by adding new classes that implement the same interface or method without modifying existing code.</li>
    </ul>

    <h2>Polymorphism Using Method Overriding</h2>
    <p>One of the most common forms of polymorphism is method overriding, where a child class provides a specific implementation of a method that was already defined in its parent class. Here's an example:</p>

    <div class="example-code">
        <code>
        # Parent class
        class Animal:
            def speak(self):
                return "This animal makes a sound."

        # Child class 1
        class Dog(Animal):
            def speak(self):
                return "Dog barks."

        # Child class 2
        class Cat(Animal):
            def speak(self):
                return "Cat meows."

        # Create instances of Dog and Cat
        dog = Dog()
        cat = Cat()

        print(dog.speak())  # Output: Dog barks.
        print(cat.speak())  # Output: Cat meows.
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Parent Class (Animal):</strong> The class <code>Animal</code> has a method <code>speak()</code> that provides a generic behavior for animals.</li>
        <li><strong>Child Classes (Dog and Cat):</strong> The <code>Dog</code> and <code>Cat</code> classes override the <code>speak()</code> method to provide specific behaviors for dogs and cats, respectively.</li>
        <li><strong>Polymorphism:</strong> Even though the method <code>speak()</code> is the same in both the parent and child classes, the output is different based on the object type (either <code>Dog</code> or <code>Cat</code>).</li>
    </ul>

    <h2>Polymorphism Without Inheritance (Duck Typing)</h2>
    <p>In Python, polymorphism can also be achieved through duck typing. This means that if an object implements a method, Python doesn't care what class the object is, as long as it has the expected behavior. Here’s an example:</p>

    <div class="example-code">
        <code>
        # Class 1
        class Bird:
            def fly(self):
                return "Bird can fly."

        # Class 2
        class Plane:
            def fly(self):
                return "Plane can fly."

        # Function that accepts any object with a 'fly' method
        def test_flying(obj):
            return obj.fly()

        bird = Bird()
        plane = Plane()

        print(test_flying(bird))   # Output: Bird can fly.
        print(test_flying(plane))  # Output: Plane can fly.
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Duck Typing:</strong> Even though <code>Bird</code> and <code>Plane</code> are not related by inheritance, both implement a <code>fly()</code> method. The <code>test_flying()</code> function can take any object that has a <code>fly()</code> method, showing polymorphism in action.</li>
        <li><strong>No Need for Inheritance:</strong> Python allows polymorphism even without a formal parent-child class relationship, as long as the object implements the required method.</li>
    </ul>

    <h2>Operator Polymorphism</h2>
    <p>Polymorphism in Python also extends to operators, where operators can behave differently depending on the data types involved. For example, the <code>+</code> operator can be used for addition of numbers or concatenation of strings:</p>

    <div class="example-code">
        <code>
        # Operator polymorphism with numbers
        print(5 + 3)  # Output: 8

        # Operator polymorphism with strings
        print("Hello, " + "world!")  # Output: Hello, world!
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Numeric Operation:</strong> The <code>+</code> operator adds two numbers.</li>
        <li><strong>String Operation:</strong> The same <code>+</code> operator concatenates two strings, showing operator overloading in Python.</li>
    </ul>

    <h2>Polymorphism with Abstract Classes</h2>
    <p>Polymorphism can also be used with abstract base classes (ABCs), where different classes implement abstract methods. Here's an example using the <code>abc</code> module:</p>

    <div class="example-code">
        <code>
        from abc import ABC, abstractmethod

        # Abstract base class
        class Shape(ABC):
            @abstractmethod
            def area(self):
                pass

        # Child class 1
        class Circle(Shape):
            def __init__(self, radius):
                self.radius = radius

            def area(self):
                return 3.14 * self.radius * self.radius

        # Child class 2
        class Square(Shape):
            def __init__(self, side):
                self.side = side

            def area(self):
                return self.side * self.side

        # Create instances of Circle and Square
        circle = Circle(5)
        square = Square(4)

        print(circle.area())  # Output: 78.5
        print(square.area())  # Output: 16
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Abstract Base Class (Shape):</strong> The abstract base class <code>Shape</code> defines an abstract method <code>area()</code>, which must be implemented by all subclasses.</li>
        <li><strong>Child Classes (Circle and Square):</strong> Both <code>Circle</code> and <code>Square</code> implement the <code>area()</code> method, providing specific implementations for their respective shapes.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Polymorphism is a powerful concept that allows different objects to respond to the same method call in different ways. This is achieved through method overriding, duck typing, and operator overloading in Python. Polymorphism enhances the flexibility, reusability, and scalability of your code by allowing objects of different types to be treated uniformly.</p>

</body>
</html>

            `;
            break;

        case 'decorators':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decorators in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2, h3 {
            color: #333;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        .example-code {
            background-color: #f4f4f4;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 15px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        ul {
            list-style-type: square;
            margin-left: 20px;
        }
    </style>
</head>
<body>

    <h1>Understanding Decorators in Python</h1>
    <p><strong>Decorators</strong> are a powerful and elegant tool in Python that allow you to modify the behavior of a function or method. They are often used to add functionality to existing functions without modifying their code directly. A decorator is essentially a function that takes another function as an argument and returns a new function that can enhance or modify the original one.</p>

    <h2>Key Concepts of Decorators</h2>
    <ul>
        <li><strong>Function as First-Class Objects:</strong> In Python, functions are first-class objects, meaning they can be passed as arguments to other functions.</li>
        <li><strong>Higher-Order Functions:</strong> A decorator is a higher-order function because it takes a function as an argument and returns a new function that enhances or alters the behavior of the original function.</li>
        <li><strong>Syntax of Decorators:</strong> Decorators are often used with the "@" symbol, making them syntactically cleaner and more readable.</li>
    </ul>

    <h2>How Decorators Work</h2>
    <p>Decorators are defined as functions that return other functions. They can be applied to any function or method. The decorator function accepts the original function as an argument and returns a modified version of it. Here's a basic example of how decorators work:</p>

    <div class="example-code">
        <code>
        # Simple decorator function
        def my_decorator(func):
            def wrapper():
                print("Before calling the function.")
                func()
                print("After calling the function.")
            return wrapper

        # Function to be decorated
        def say_hello():
            print("Hello!")

        # Applying the decorator
        decorated_function = my_decorator(say_hello)
        decorated_function()
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>my_decorator:</strong> The decorator function <code>my_decorator</code> takes another function <code>func</code> as an argument. Inside it, another function <code>wrapper</code> is defined which modifies the behavior of <code>func</code>.</li>
        <li><strong>Wrapper Function:</strong> The <code>wrapper</code> function executes code before and after calling the original function <code>func</code>.</li>
        <li><strong>Function Call:</strong> Instead of calling <code>say_hello</code> directly, it is passed through the decorator <code>my_decorator</code>, which returns a new function that behaves differently.</li>
    </ul>

    <h2>Using Decorators with the @ Symbol</h2>
    <p>Python allows the use of the "@" symbol to apply decorators in a more concise and readable way. Here's how it can be done:</p>

    <div class="example-code">
        <code>
        # Decorator function
        def my_decorator(func):
            def wrapper():
                print("Before calling the function.")
                func()
                print("After calling the function.")
            return wrapper

        # Applying the decorator using @ symbol
        @my_decorator
        def say_hello():
            print("Hello!")

        # Calling the decorated function
        say_hello()
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>@my_decorator:</strong> The decorator is applied to the <code>say_hello</code> function using the <code>@my_decorator</code> syntax. This is equivalent to <code>say_hello = my_decorator(say_hello)</code>.</li>
        <li><strong>Function Call:</strong> Now when we call <code>say_hello()</code>, the behavior is modified by the decorator, which adds print statements before and after the original function is executed.</li>
    </ul>

    <h2>Passing Arguments to Decorators</h2>
    <p>In many cases, you may want to pass arguments to the decorator or the decorated function. This can be done by defining the decorator to accept arbitrary arguments:</p>

    <div class="example-code">
        <code>
        # Decorator that accepts arguments
        def my_decorator(func):
            def wrapper(*args, **kwargs):
                print("Before calling the function.")
                result = func(*args, **kwargs)
                print("After calling the function.")
                return result
            return wrapper

        # Function to be decorated that accepts arguments
        @my_decorator
        def say_hello(name):
            print(f"Hello, {name}!")

        # Calling the function with arguments
        say_hello("John")
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Passing Arguments:</strong> The decorator <code>my_decorator</code> uses <code>*args</code> and <code>**kwargs</code> to pass any number of positional and keyword arguments to the wrapped function <code>func</code>.</li>
        <li><strong>Function with Arguments:</strong> The function <code>say_hello</code> accepts an argument <code>name</code>. When called, the decorator allows passing this argument through the wrapper, which ensures the correct behavior of the decorated function.</li>
    </ul>

    <h2>Chaining Decorators</h2>
    <p>It is also possible to apply multiple decorators to a single function. This is called chaining decorators. Decorators are applied from the innermost to the outermost:</p>

    <div class="example-code">
        <code>
        # Decorator 1
        def decorator_1(func):
            def wrapper():
                print("Decorator 1")
                func()
            return wrapper

        # Decorator 2
        def decorator_2(func):
            def wrapper():
                print("Decorator 2")
                func()
            return wrapper

        # Applying both decorators
        @decorator_1
        @decorator_2
        def say_hello():
            print("Hello!")

        say_hello()
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Decorator Order:</strong> When chaining decorators, <code>decorator_2</code> is applied first, followed by <code>decorator_1</code>. This is because decorators are executed from the bottom up (innermost to outermost).</li>
        <li><strong>Function Call:</strong> The output shows the messages from both decorators before the actual function execution.</li>
    </ul>

    <h2>Built-in Decorators in Python</h2>
    <p>Python provides several built-in decorators such as <code>@staticmethod</code>, <code>@classmethod</code>, and <code>@property</code>. These are used to modify the behavior of methods in a class. Here’s a brief look at some of them:</p>

    <ul>
        <li><strong>@staticmethod:</strong> Defines a static method that doesn't require access to the instance or class itself.</li>
        <li><strong>@classmethod:</strong> Defines a class method that takes the class as the first argument instead of the instance.</li>
        <li><strong>@property:</strong> Allows a method to be accessed like an attribute, providing a way to define read-only properties.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Decorators in Python are a powerful tool for modifying and enhancing the behavior of functions or methods. They promote code reuse and separation of concerns, allowing functionality to be added to functions dynamically. Understanding how to define and use decorators can significantly improve the flexibility and maintainability of your Python programs.</p>

</body>
</html>

            `;
            break;

        case 'generators':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generators in Python</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2, h3 {
            color: #333;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        .example-code {
            background-color: #f4f4f4;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 15px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        ul {
            list-style-type: square;
            margin-left: 20px;
        }
    </style>
</head>
<body>

    <h1>Understanding Generators in Python</h1>
    <p><strong>Generators</strong> are a special type of iterable in Python that allow you to iterate over a sequence of values one at a time without storing the entire sequence in memory. They provide an efficient way to handle large datasets or streams of data, especially when working with infinite sequences or memory-intensive operations.</p>

    <h2>Key Concepts of Generators</h2>
    <ul>
        <li><strong>Lazy Evaluation:</strong> Generators generate values on the fly, only when required, unlike lists that store all elements in memory at once.</li>
        <li><strong>Iterables:</strong> Generators are iterable objects, meaning you can iterate over them using loops like <code>for</code>.</li>
        <li><strong>Yield Keyword:</strong> Generators use the <code>yield</code> keyword to produce values, as opposed to <code>return</code> in regular functions. Once a generator function reaches a <code>yield</code>, the state of the function is saved and can be resumed later.</li>
    </ul>

    <h2>How Generators Work</h2>
    <p>To understand how generators work, let's first look at a simple example of a generator function. Unlike a normal function that returns a value and exits, a generator uses <code>yield</code> to return values one at a time, pausing execution and maintaining its state until the next value is requested.</p>

    <div class="example-code">
        <code>
        # Simple generator function
        def simple_generator():
            yield 1
            yield 2
            yield 3

        # Creating the generator object
        gen = simple_generator()

        # Iterating through the generator
        for value in gen:
            print(value)
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Generator Function:</strong> The function <code>simple_generator</code> uses <code>yield</code> to return values. When called, it returns a generator object.</li>
        <li><strong>Iterating Over Generator:</strong> The <code>for</code> loop automatically iterates over the generator, calling <code>next()</code> internally to retrieve each yielded value until the generator is exhausted.</li>
    </ul>

    <h2>Difference Between Generators and Lists</h2>
    <p>Generators are different from lists in the following ways:</p>
    <ul>
        <li><strong>Memory Efficiency:</strong> Lists store all elements in memory, while generators produce elements on-the-fly and only when needed, making them more memory-efficient for large datasets.</li>
        <li><strong>Lazy Evaluation:</strong> Lists are evaluated and populated all at once, whereas generators evaluate elements lazily, one at a time.</li>
        <li><strong>One-Time Iteration:</strong> Once a generator is exhausted, it cannot be re-used. Lists, on the other hand, can be iterated multiple times.</li>
    </ul>

    <h2>Example of Generator vs List</h2>
    <p>Here’s an example comparing a generator with a list:</p>

    <div class="example-code">
        <code>
        # List
        my_list = [1, 2, 3, 4, 5]

        # Generator
        def my_generator():
            for i in range(1, 6):
                yield i

        # Using the list
        print("List:")
        for item in my_list:
            print(item)

        # Using the generator
        print("Generator:")
        gen = my_generator()
        for item in gen:
            print(item)
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>List:</strong> The list <code>my_list</code> stores all values in memory at once.</li>
        <li><strong>Generator:</strong> The generator <code>my_generator</code> only produces each value when needed, conserving memory.</li>
    </ul>

    <h2>Using the <code>yield</code> Keyword</h2>
    <p>The <code>yield</code> keyword is what makes a function a generator. Each time <code>yield</code> is encountered, the function produces a value and suspends execution. When the generator is called again, it resumes execution from where it left off.</p>

    <div class="example-code">
        <code>
        def counter(limit):
            count = 1
            while count <= limit:
                yield count
                count += 1

        # Using the generator
        counter_gen = counter(3)
        print(next(counter_gen))  # Outputs: 1
        print(next(counter_gen))  # Outputs: 2
        print(next(counter_gen))  # Outputs: 3
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Yielding Values:</strong> The generator <code>counter</code> uses <code>yield</code> to return numbers one at a time. The state of the function is preserved between calls, so it continues where it left off.</li>
        <li><strong>Using <code>next()</code>: </strong>We call <code>next()</code> to get the next value from the generator. Each call resumes execution from the last <code>yield</code>.</li>
    </ul>

    <h2>Advantages of Generators</h2>
    <ul>
        <li><strong>Memory Efficiency:</strong> Generators are memory-efficient since they generate values one at a time and don’t require storing large datasets in memory.</li>
        <li><strong>Lazy Evaluation:</strong> You only compute values when required, which is useful for infinite sequences or large datasets.</li>
        <li><strong>Infinite Sequences:</strong> Generators can represent infinite sequences, like generating all natural numbers, because they don’t need to store all values at once.</li>
    </ul>

    <h2>Generators and Comprehensions</h2>
    <p>Python also supports generator comprehensions, which offer a concise syntax for creating generators. They are similar to list comprehensions but use parentheses instead of square brackets.</p>

    <div class="example-code">
        <code>
        # Generator comprehension
        gen = (x * x for x in range(1, 6))

        # Iterating over the generator
        for item in gen:
            print(item)
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Generator Comprehension:</strong> The generator comprehension syntax <code>(x * x for x in range(1, 6))</code> creates a generator that yields squares of numbers from 1 to 5.</li>
        <li><strong>Iterating:</strong> As with any generator, you can iterate over it using a <code>for</code> loop.</li>
    </ul>

    <h2>Using Generators with <code>send()</code></h2>
    <p>Generators can receive values during iteration using the <code>send()</code> method, which allows you to send data back to the generator function.</p>

    <div class="example-code">
        <code>
        def echo():
            while True:
                received = yield
                print(f"Received: {received}")

        # Create generator object
        gen = echo()

        # Start the generator
        next(gen)

        # Send values to the generator
        gen.send("Hello")
        gen.send("World")
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Generator with send:</strong> The generator function <code>echo</code> waits to receive values using the <code>yield</code> statement. The <code>send()</code> method is used to send data to the generator.</li>
        <li><strong>Iteration:</strong> After the generator is started using <code>next()</code>, you can use <code>send()</code> to send values, and the generator processes those values.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Generators are a powerful feature of Python that enable you to handle large datasets and sequences efficiently. They allow for lazy evaluation, saving memory and time, especially in scenarios involving infinite sequences or large volumes of data. Understanding and using generators properly can significantly enhance the performance and scalability of your Python programs.</p>

</body>
</html>

            `;
            break;

        case 'comprehensions':
            contentArea.innerHTML = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python Comprehensions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2, h3 {
            color: #333;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        .example-code {
            background-color: #f4f4f4;
            border-left: 4px solid #007bff;
            padding: 10px;
            margin: 15px 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        ul {
            list-style-type: square;
            margin-left: 20px;
        }
    </style>
</head>
<body>

    <h1>Understanding Python Comprehensions</h1>
    <p><strong>Comprehensions</strong> in Python provide a concise way to create collections like lists, sets, and dictionaries. They allow for the generation of these collections using a single line of code that is more readable and expressive compared to traditional loops.</p>

    <h2>Types of Comprehensions in Python</h2>
    <ul>
        <li><strong>List Comprehensions:</strong> Used to create lists.</li>
        <li><strong>Set Comprehensions:</strong> Used to create sets.</li>
        <li><strong>Dictionary Comprehensions:</strong> Used to create dictionaries.</li>
        <li><strong>Generator Comprehensions:</strong> Used to create generators (explained in the previous section).</li>
    </ul>

    <h2>List Comprehensions</h2>
    <p>List comprehensions provide an elegant way to generate lists by applying an expression to each element in an iterable (e.g., a list or range), with an optional condition to filter the elements.</p>

    <div class="example-code">
        <code>
        # List comprehension to create a list of squares
        squares = [x * x for x in range(1, 6)]
        print(squares)
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Expression:</strong> <code>x * x</code> generates the square of each number.</li>
        <li><strong>Iterable:</strong> <code>for x in range(1, 6)</code> iterates over numbers 1 to 5.</li>
        <li><strong>Output:</strong> The resulting list will be <code>[1, 4, 9, 16, 25]</code>.</li>
    </ul>

    <h3>Adding Conditionals to List Comprehensions</h3>
    <p>You can add a condition to filter the elements in a comprehension.</p>

    <div class="example-code">
        <code>
        # List comprehension with a condition to get even numbers
        even_squares = [x * x for x in range(1, 6) if x % 2 == 0]
        print(even_squares)
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Condition:</strong> <code>if x % 2 == 0</code> filters out odd numbers, so only even numbers are squared.</li>
        <li><strong>Output:</strong> The resulting list will be <code>[4, 16]</code>.</li>
    </ul>

    <h2>Set Comprehensions</h2>
    <p>Set comprehensions are similar to list comprehensions but create sets. Since sets are unordered collections with unique elements, any duplicate values will be removed automatically.</p>

    <div class="example-code">
        <code>
        # Set comprehension to create a set of squares
        square_set = {x * x for x in range(1, 6)}
        print(square_set)
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Expression:</strong> <code>x * x</code> calculates the square of each number.</li>
        <li><strong>Iterable:</strong> <code>for x in range(1, 6)</code> iterates over numbers 1 to 5.</li>
        <li><strong>Output:</strong> The resulting set will be <code>{1, 4, 9, 16, 25}</code>.</li>
    </ul>

    <h2>Dictionary Comprehensions</h2>
    <p>Dictionary comprehensions allow you to create dictionaries from iterables in a single line. You can specify both the key and the value for each item in the dictionary.</p>

    <div class="example-code">
        <code>
        # Dictionary comprehension to create a dictionary of numbers and their squares
        square_dict = {x: x * x for x in range(1, 6)}
        print(square_dict)
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Key-Value Pair:</strong> The key is <code>x</code> and the value is <code>x * x</code>.</li>
        <li><strong>Iterable:</strong> <code>for x in range(1, 6)</code> iterates over numbers 1 to 5.</li>
        <li><strong>Output:</strong> The resulting dictionary will be <code>{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</code>.</li>
    </ul>

    <h2>Nested Comprehensions</h2>
    <p>Comprehensions can be nested within each other, allowing for complex transformations of data.</p>

    <div class="example-code">
        <code>
        # List comprehension with a nested loop to create a matrix
        matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        flattened = [element for row in matrix for element in row]
        print(flattened)
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Nested Loop:</strong> The comprehension iterates through each row of the matrix and then through each element of the row.</li>
        <li><strong>Output:</strong> The resulting list will be <code>[1, 2, 3, 4, 5, 6, 7, 8, 9]</code>.</li>
    </ul>

    <h2>Advantages of Using Comprehensions</h2>
    <ul>
        <li><strong>Conciseness:</strong> Comprehensions allow you to write more concise and readable code.</li>
        <li><strong>Efficiency:</strong> List comprehensions, set comprehensions, and dictionary comprehensions are faster than traditional loops, especially for large datasets.</li>
        <li><strong>Readability:</strong> Comprehensions provide a clearer and more Pythonic way to generate collections.</li>
    </ul>

    <h2>Comprehensions vs Loops</h2>
    <p>Comprehensions often replace loops, but they are more efficient for generating collections. Here’s a comparison:</p>

    <div class="example-code">
        <code>
        # Loop version of list comprehension
        squares = []
        for x in range(1, 6):
            squares.append(x * x)
        print(squares)

        # List comprehension version
        squares_comp = [x * x for x in range(1, 6)]
        print(squares_comp)
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Loop Version:</strong> The loop approach is more verbose, requiring additional lines of code to append values to a list.</li>
        <li><strong>Comprehension Version:</strong> The list comprehension version is more concise and readable.</li>
    </ul>

    <h2>Advanced Usage of Comprehensions</h2>
    <p>Comprehensions can also include more complex conditions or multiple for-loops, making them suitable for more advanced use cases.</p>

    <div class="example-code">
        <code>
        # Set comprehension with multiple conditions
        even_squares = {x * x for x in range(1, 11) if x % 2 == 0 and x * x > 10}
        print(even_squares)
        </code>
    </div>

    <h3>Explanation:</h3>
    <ul>
        <li><strong>Multiple Conditions:</strong> In the example above, the comprehension filters for even numbers and their squares greater than 10.</li>
        <li><strong>Output:</strong> The resulting set will be <code>{16, 36, 64, 100}</code>.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Python comprehensions offer a powerful, concise way to generate and manipulate collections. They improve readability and efficiency while reducing the amount of boilerplate code. Mastering comprehensions is a key part of writing clean, Pythonic code, and they are a vital tool for any Python programmer.</p>

</body>
</html>

            `;
            break;

        default:
            contentArea.innerHTML = '<h1>Python Topic Not Found</h1>';
    }
}
