function loadContent(topic) {
    let content = '';

    switch (topic) {
        case 'intro':
            content=`<h1>Introduction to CSS</h1>
    <p>
        <strong>CSS (Cascading Style Sheets)</strong> is a stylesheet language used to control the presentation and layout of web pages. It allows developers to apply styles (like colors, fonts, spacing) to HTML documents, ensuring that content is displayed consistently and attractively across different devices and browsers.
    </p>

    <h2>History of CSS</h2>
    <p>
        CSS was first proposed by <strong>Håkon Wium Lie</strong> on October 10, 1994, while he was working with Tim Berners-Lee at CERN, the birthplace of the web. Prior to CSS, web pages were styled directly within the HTML code using inline styles, leading to cluttered, difficult-to-maintain code.
    </p>
    <p>
        The first official version of CSS, <strong>CSS1</strong>, was released by the World Wide Web Consortium (W3C) in 1996. It introduced basic styling rules for text, margins, and positioning. As the web evolved, new versions of CSS were developed, with <strong>CSS2</strong> arriving in 1998 and <strong>CSS3</strong> being split into modules to allow for more rapid updates. CSS3 introduced advanced features like media queries for responsive design, animations, and flexible layouts.
    </p>

    <h2>Why Do We Need CSS?</h2>
    <p>
        Before CSS, all styling had to be done within the HTML using presentational tags like <code>&lt;font&gt;</code>, <code>&lt;b&gt;</code>, and tables for layouts. This approach made web development complex and inefficient, especially for larger websites. CSS solves this by separating the structure (HTML) from the design (CSS). Here are the key benefits of CSS:
    </p>
    <ul>
        <li><strong>Separation of Concerns:</strong> HTML is used for content, and CSS is used for styling. This separation makes it easier to maintain and update websites.</li>
        <li><strong>Consistency:</strong> CSS allows you to apply the same style to multiple pages by linking a single stylesheet, ensuring a consistent look and feel across the site.</li>
        <li><strong>Responsive Design:</strong> With CSS, you can create web pages that adapt to different screen sizes, making them mobile-friendly.</li>
        <li><strong>Reusability:</strong> CSS classes and external stylesheets can be reused across multiple pages, reducing redundancy and making updates more efficient.</li>
        <li><strong>Customization:</strong> CSS offers advanced styling options like animations, transitions, and flexible layouts, giving developers greater control over the visual aspects of a website.</li>
    </ul>

    <h2>How to Connect CSS with HTML</h2>
    <p>
        There are three main ways to connect CSS with an HTML document:
    </p>

    <h3>1. Inline CSS</h3>
    <p>
        Inline CSS is written directly inside an HTML element using the <code>style</code> attribute. This method is suitable for small changes but is not recommended for styling entire websites due to poor scalability and maintainability.
    </p>
    <pre><code>
    &lt;p style="color: blue; font-size: 20px;"&gt;This is a styled paragraph.&lt;/p&gt;
    </code></pre>

    <h3>2. Internal CSS</h3>
    <p>
        Internal CSS is added within a <code>&lt;style&gt;</code> element in the <code>&lt;head&gt;</code> section of an HTML document. This method is useful for applying styles to a single page, but it still mixes structure (HTML) and design (CSS) in the same file.
    </p>
    <pre><code>
    &lt;head&gt;
        &lt;style&gt;
            p {
                color: green;
                font-size: 18px;
            }
        &lt;/style&gt;
    &lt;/head&gt;
    </code></pre>

    <h3>3. External CSS</h3>
    <p>
        External CSS is stored in a separate '.css' file and linked to an HTML document using the <code>&lt;link&gt;</code> element. This is the most efficient and scalable way to apply styles across multiple web pages, as changes in the external CSS file will be reflected on all linked pages.
    </p>
    <pre><code>
    &lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;
    </code></pre>

    <p>The external stylesheet might look like this:</p>
    <pre><code>
    /* External CSS File (styles.css) */
    p {
        color: purple;
        font-size: 16px;
    }
    </code></pre>

    <p>
        By separating HTML and CSS, we ensure that content and design are easier to maintain, scalable, and flexible across different platforms and devices. This makes CSS an essential tool for modern web development.
    </p>
` ;break;
        case 'syntax':
            content = `
                 <h1>CSS Syntax</h1>
    <p>CSS (Cascading Style Sheets) is used to style and layout web pages. CSS syntax consists of a set of rules that dictate how HTML elements should be displayed.</p>

    <h2>Basic Syntax</h2>
    <p>The basic syntax of CSS is:</p>
    <pre><code>selector {
    property: value;
}</code></pre>
    <p>Each rule consists of a <strong>selector</strong> that targets the HTML element you want to style, followed by a set of <strong>properties</strong> and their corresponding <strong>values</strong>.</p>

    <h2>Example of CSS Syntax</h2>
    <div class="example">
        <h3>Example 1: Styling a Heading</h3>
        <pre><code>h1 {
    color: blue; 
    font-size: 24px; 
}</code></pre>
        <p>This CSS code styles all <code>&lt;h1&gt;</code> elements to have blue text and a font size of 24 pixels.</p>
    </div>

    <h2>Selectors</h2>
    <p>Selectors are patterns used to select the elements you want to style. There are several types of selectors:</p>
    <ul>
        <li><strong>Type Selector:</strong> Selects all elements of a given type, e.g., <code>p</code> selects all paragraphs.</li>
        <li><strong>Class Selector:</strong> Selects elements with a specific class, e.g., <code>.classname</code> selects all elements with class "classname."</li>
        <li><strong>ID Selector:</strong> Selects a single element with a specific ID, e.g., <code>#idname</code> selects the element with ID "idname."</li>
    </ul>

    <h2>Example of Selectors</h2>
    <div class="example">
        <h3>Example 2: Class and ID Selectors</h3>
        <pre><code>.myClass {
    color: green; 
}

#myId {
    font-weight: bold; 
}</code></pre>
        <p>This CSS code styles all elements with the class <code>myClass</code> to have green text and the element with ID <code>myId</code> to be bold.</p>
    </div>

    <h2>Properties and Values</h2>
    <p>Each property is followed by a colon and a value. Here are some common properties:</p>
    <ul>
        <li><code>color</code>: Sets the text color.</li>
        <li><code>font-size</code>: Sets the size of the font.</li>
        <li><code>background-color</code>: Sets the background color of an element.</li>
        <li><code>margin</code>: Sets the space around elements.</li>
        <li><code>padding</code>: Sets the space inside elements.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Understanding CSS syntax is crucial for styling web pages effectively. Use selectors to target elements and properties to define their styles.</p>
`;
            break;

        case 'selectors':
            content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Selectors Explained</title>
    <style>
        /* Basic styling for the code display */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto;
        }
        code {
            color: #333;
        }
        h2 {
            color: #0056b3;
        }
        .description {
            margin-top: 10px;
            font-style: italic;
        }
        .selector {
            font-weight: bold;
            color: darkred;
        }
    </style>
</head>
<body>

    <h1>CSS Selectors Explained</h1>

    <h2>Types of CSS Selectors</h2>
    <ul>
        <li><span class="selector">Type Selector:</span> Selects all elements of a given type (e.g., <code>p</code>, <code>h1</code>).</li>
        <li><span class="selector">Class Selector:</span> Selects elements with a specific class (e.g., <code>.className</code>).</li>
        <li><span class="selector">ID Selector:</span> Selects an element with a specific ID (e.g., <code>#idName</code>).</li>
        <li><span class="selector">Universal Selector:</span> Selects all elements in the document (e.g., <code>*</code>).</li>
        <li><span class="selector">Attribute Selector:</span> Selects elements with a specific attribute (e.g., <code>[type="text"]</code>).</li>
        <li><span class="selector">Pseudo-Class Selector:</span> Selects elements based on their state (e.g., <code>:hover</code>, <code>:first-child</code>).</li>
    </ul>

    <h2>Example 1: Basic Text Styling</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Basic Text Styling&lt;/title&gt;
    &lt;style&gt;
        /* Type Selector for paragraph */
        p {
            color: darkblue;         /* Text color */
            font-size: 18px;        /* Font size */
            font-family: Arial, sans-serif; /* Font family */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Basic Text Styling Example&lt;/h1&gt;
    &lt;p&gt;This paragraph is styled with dark blue text, 18px font size, and the Arial font family.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates how to style a paragraph using a <span class="selector">Type Selector</span>. 
        The <code>p</code> selector targets all <code>&lt;p&gt;</code> elements on the page. 
        The styles applied include:
        <ul>
            <li><code>color: darkblue;</code> - Sets the text color to dark blue.</li>
            <li><code>font-size: 18px;</code> - Sets the font size to 18 pixels.</li>
            <li><code>font-family: Arial, sans-serif;</code> - Uses the Arial font family with a fallback to a generic sans-serif font.</li>
        </ul>
    </div>

    <h2>Example 2: Class Selector for Highlighting</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Class Selector Example&lt;/title&gt;
    &lt;style&gt;
        /* Class Selector */
        .highlight {
            background-color: yellow; /* Highlight color */
            font-weight: bold;        /* Bold text */
            padding: 10px;           /* Space inside the element */
            border-radius: 5px;      /* Rounded corners */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Class Selector Example&lt;/h1&gt;
    &lt;p class="highlight"&gt;This paragraph is highlighted using a class selector.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example illustrates the use of a <span class="selector">Class Selector</span>. 
        The <code>.highlight</code> selector targets any element with the class "highlight". 
        The styles applied include:
        <ul>
            <li><code>background-color: yellow;</code> - Sets the background color to yellow.</li>
            <li><code>font-weight: bold;</code> - Makes the text bold.</li>
            <li><code>padding: 10px;</code> - Adds 10 pixels of padding inside the element, creating space around the text.</li>
            <li><code>border-radius: 5px;</code> - Rounds the corners of the element.</li>
        </ul>
    </div>

    <h2>Example 3: ID Selector for Unique Styling</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;ID Selector Example&lt;/title&gt;
    &lt;style&gt;
        /* ID Selector */
        #unique-heading {
            color: darkgreen;      /* Text color */
            font-size: 28px;      /* Font size */
            text-align: center;    /* Center alignment */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1 id="unique-heading"&gt;This is a Unique Heading&lt;/h1&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example shows how to use an <span class="selector">ID Selector</span> for unique styling. 
        The <code>#unique-heading</code> selector targets the element with the specific ID "unique-heading". 
        The styles applied include:
        <ul>
            <li><code>color: darkgreen;</code> - Sets the text color to dark green.</li>
            <li><code>font-size: 28px;</code> - Sets the font size to 28 pixels.</li>
            <li><code>text-align: center;</code> - Centers the text horizontally within its container.</li>
        </ul>
    </div>

    <h2>Example 4: Grouping Selectors</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Grouping Selectors Example&lt;/title&gt;
    &lt;style&gt;
        /* Grouping Selectors */
        h1, h2, h3 {
            color: darkred;      /* Text color for headings */
            margin-bottom: 10px; /* Space below each heading */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Heading 1&lt;/h1&gt;
    &lt;h2&gt;Heading 2&lt;/h2&gt;
    &lt;h3&gt;Heading 3&lt;/h3&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates <span class="selector">Grouping Selectors</span> in CSS, allowing the same styles to be applied to multiple elements. 
        The <code>h1, h2, h3</code> selector targets all <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, and <code>&lt;h3&gt;</code> elements. 
        The styles applied include:
        <ul>
            <li><code>color: darkred;</code> - Sets the text color for all headings to dark red.</li>
            <li><code>margin-bottom: 10px;</code> - Adds 10 pixels of space below each heading.</li>
        </ul>
    </div>

    <h2>Example 5: Pseudo-Class Selector for Hover Effects</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Pseudo-Class Selector Example&lt;/title&gt;
    &lt;style&gt;
        /* Pseudo-Class Selector */
        a {
            text-decoration: none; /* No underline */
            color: blue;          /* Default link color */
        }
        a:hover {
            color: red;           /* Change color on hover */
            text-decoration: underline; /* Underline on hover */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Pseudo-Class Selector Example&lt;/h1&gt;
    &lt;a href="#"&gt;Hover over this link&lt;/a&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example showcases a <span class="selector">Pseudo-Class Selector</span> for links. 
        The <code>a</code> selector targets all anchor tags, while the <code>a:hover</code> selector targets links when the mouse hovers over them. 
        The styles applied include:
        <ul>
            <li><code>text-decoration: none;</code> - Removes the underline from the link.</li>
            <li><code>color: blue;</code> - Sets the default link color to blue.</li>
            <li><code>a:hover { color: red; }</code> - Changes the link color to red when hovered over.</li>
            <li><code>a:hover { text-decoration: underline; }</code> - Adds an underline to the link when hovered over.</li>
        </ul>
    </div>

</body>
</html>
`;
            break;
            case "box-model":
                content=`<h1>CSS Box Model</h1>
    <p>The CSS box model describes the rectangular boxes generated for elements in the document tree. It consists of margins, borders, padding, and the actual content.</p>

    <h2>Components of the Box Model</h2>
    <ul>
        <li><strong>Content:</strong> The actual content of the box, where text and images appear.</li>
        <li><strong>Padding:</strong> The space between the content and the border. It is transparent.</li>
        <li><strong>Border:</strong> A border that surrounds the padding (if any) and content. It can be styled (solid, dashed, etc.).</li>
        <li><strong>Margin:</strong> The outermost space that separates the box from other elements. It is also transparent.</li>
    </ul>

    <h2>Box Model Example</h2>
    <div class="box">
        This is a box model example.
    </div>

    <div class="box-explanation">
        <h3>Example Code</h3>
        <pre><code>
.box {
    margin: 10px;        /* Space outside the box */
    border: 5px solid #333; /* Solid border */
    padding: 20px;       /* Space between content and border */
    background-color: #4CAF50; /* Background color */
}
        </code></pre>
        <p>This code styles a box model example with margin, border, padding, and background color.</p>
    </div>

    <h2>Visualizing the Box Model</h2>
    <p>Here's a visual representation of the box model:</p>
    <pre><code>
+-------------------+   <-- Margin
| +-------------+ |   
| |  Border     | |   <-- Border
| | +-------+   | |   
| | |       |   | |   <-- Padding
| | |Content|   | |
| | |       |   | |
| | +-------+   | |
| +-------------+ |
+-------------------+</code></pre>

    <h2>Conclusion</h2>
    <p>Understanding the CSS box model is essential for designing web pages effectively. By adjusting margins, borders, padding, and content, you can control the layout of elements on a page.</p>

                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Box Model Explained</title>
    <style>
        /* Basic styling for the code display */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto;
        }
        code {
            color: #333;
        }
        h2 {
            color: #0056b3;
        }
        .description {
            margin-top: 10px;
            font-style: italic;
        }
        .box {
            border: 2px solid blue; /* Border for the box */
            padding: 20px;          /* Space inside the box */
            margin: 10px;           /* Space outside the box */
            background-color: #e6f7ff; /* Light background for the box */
            width: 300px;           /* Width of the box */
        }
    </style>
</head>
<body>

    <h1>CSS Box Model Explained</h1>

    <h2>What is the CSS Box Model?</h2>
    <p>The CSS Box Model describes the rectangular boxes generated for elements in the document tree and how they interact with each other. Each box consists of four areas: content, padding, border, and margin.</p>
    <ul>
        <li><strong>Content:</strong> The actual content of the box, where text and images appear.</li>
        <li><strong>Padding:</strong> The space between the content and the border; it's inside the box and does not affect the box's position.</li>
        <li><strong>Border:</strong> The area surrounding the padding (if any) and the content. It can be styled with colors and thickness.</li>
        <li><strong>Margin:</strong> The space outside the border that separates the box from other elements; it affects the position of the box.</li>
    </ul>

    <h2>Example 1: Box Model Demonstration</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Box Model Example&lt;/title&gt;
    &lt;style&gt;
        .box {
            border: 2px solid blue;  /* Border for the box */
            padding: 20px;           /* Space inside the box */
            margin: 10px;            /* Space outside the box */
            background-color: #e6f7ff; /* Light background for the box */
            width: 300px;            /* Width of the box */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;CSS Box Model Example&lt;/h1&gt;
    &lt;div class="box"&gt;
        This is a box model demonstration.
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates the CSS Box Model using a simple <code>div</code> element. 
        The <code>.box</code> class applies styles to the box, which includes:
        <ul>
            <li><code>border: 2px solid blue;</code> - Creates a solid blue border around the box.</li>
            <li><code>padding: 20px;</code> - Adds 20 pixels of padding inside the box, creating space between the content and the border.</li>
            <li><code>margin: 10px;</code> - Adds 10 pixels of margin outside the box, creating space between this box and other elements on the page.</li>
            <li><code>background-color: #e6f7ff;</code> - Sets a light blue background color for the box.</li>
            <li><code>width: 300px;</code> - Defines the width of the box.</li>
        </ul>
    </div>

    <h2>Example 2: Visualizing Box Model Components</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Box Model Visualization&lt;/title&gt;
    &lt;style&gt;
        .outer-box {
            border: 4px solid green; /* Outer border */
            padding: 10px;           /* Padding inside the outer box */
        }
        .inner-box {
            border: 2px dashed orange; /* Inner border */
            padding: 20px;             /* Padding inside the inner box */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Visualizing the Box Model Components&lt;/h1&gt;
    &lt;div class="outer-box"&gt;
        Outer Box
        &lt;div class="inner-box"&gt;
            Inner Box
        &lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example illustrates how nested boxes work in the CSS Box Model. 
        The <code>.outer-box</code> and <code>.inner-box</code> classes demonstrate how the box model layers work together:
        <ul>
            <li><code>.outer-box</code> has a <code>border: 4px solid green;</code> that defines its outer border, with <code>padding: 10px;</code> for space inside it.</li>
            <li><code>.inner-box</code> has a <code>border: 2px dashed orange;</code> that defines its inner border, with <code>padding: 20px;</code> for space around its content.</li>
        </ul>
        This demonstrates how the outer box encompasses the inner box, highlighting the relationship between the different layers of the box model.
    </div>

    <h2>Example 3: Adjusting Box Size with Box Sizing</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Box Sizing Example&lt;/title&gt;
    &lt;style&gt;
        .box-sizing {
            box-sizing: border-box;  /* Include padding and border in element's total width and height */
            width: 300px;            /* Total width including padding and border */
            padding: 20px;           /* Padding inside the box */
            border: 2px solid red;   /* Border for the box */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Adjusting Box Size with Box Sizing&lt;/h1&gt;
    &lt;div class="box-sizing"&gt;
        This box uses border-box sizing.
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example illustrates the use of the <code>box-sizing</code> property. 
        The <code>.box-sizing</code> class uses <code>box-sizing: border-box;</code>, which changes the default box model behavior. 
        The styles applied include:
        <ul>
            <li><code>box-sizing: border-box;</code> - Includes the padding and border in the total width and height of the element, so the specified width is the final width.</li>
            <li><code>width: 300px;</code> - Sets the total width of the box, including padding and border.</li>
            <li><code>padding: 20px;</code> - Adds 20 pixels of padding inside the box.</li>
            <li><code>border: 2px solid red;</code> - Creates a solid red border around the box.</li>
        </ul>
    </div>

</body>
</html>
`;
break;

        case 'display':
            content = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Display and Positioning Explained</title>
    <style>
        /* Basic styling for the code display */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto;
        }
        code {
            color: #333;
        }
        h2 {
            color: #0056b3;
        }
        .box {
            padding: 20px;
            margin: 10px 0;
            border: 2px solid blue;
            background-color: #e6f7ff;
        }
    </style>
</head>
<body>

    <h1>CSS Display and Positioning Explained</h1>

    <h2>Understanding CSS Display Property</h2>
    <p>The <code>display</code> property in CSS specifies the display behavior of an element. It can take several values, such as <code>block</code>, <code>inline</code>, <code>inline-block</code>, and <code>none</code>.</p>
    <ul>
        <li><strong>block:</strong> The element occupies the full width available, and a new line is created before and after the element.</li>
        <li><strong>inline:</strong> The element does not start on a new line and only occupies the space bounded by its content.</li>
        <li><strong>inline-block:</strong> Similar to <code>inline</code>, but allows setting width and height.</li>
        <li><strong>none:</strong> The element is not displayed at all (it has no effect on the layout).</li>
    </ul>

    <h2>Example 1: Block vs Inline Elements</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Display Example&lt;/title&gt;
    &lt;style&gt;
        .block {
            display: block; /* Block element */
            background-color: #f2f2f2;
            padding: 10px;
            margin: 5px 0;
        }
        .inline {
            display: inline; /* Inline element */
            background-color: #cce5ff;
            padding: 10px;
            margin: 5px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Block vs Inline Elements&lt;/h1&gt;
    &lt;div class="block"&gt;I am a block element.&lt;/div&gt;
    &lt;span class="inline"&gt;I am an inline element.&lt;/span&gt;
    &lt;span class="inline"&gt;I am another inline element.&lt;/span&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates the difference between block and inline elements:
        <ul>
            <li>The <code>div</code> with class <code>block</code> takes the full width and starts on a new line.</li>
            <li>The <code>span</code> elements with class <code>inline</code> only take the width of their content and do not start on a new line.</li>
        </ul>
    </div>

    <h2>Example 2: Inline-Block Elements</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Inline-Block Example&lt;/title&gt;
    &lt;style&gt;
        .box {
            display: inline-block; /* Inline-block element */
            width: 100px;
            height: 100px;
            background-color: #cce5ff;
            margin: 5px;
            vertical-align: top; /* Aligns the boxes to the top */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Inline-Block Elements&lt;/h1&gt;
    &lt;div class="box"&gt;Box 1&lt;/div&gt;
    &lt;div class="box"&gt;Box 2&lt;/div&gt;
    &lt;div class="box"&gt;Box 3&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example illustrates the use of <code>inline-block</code> elements:
        <ul>
            <li>Each <code>div</code> with class <code>box</code> behaves like an inline element, but allows you to set width and height.</li>
            <li>The <code>vertical-align: top;</code> property aligns the boxes to the top of their containing line.</li>
        </ul>
    </div>

    <h2>Understanding CSS Position Property</h2>
    <p>The <code>position</code> property specifies the type of positioning method used for an element. It can take values like <code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>, and <code>sticky</code>.</p>
    <ul>
        <li><strong>static:</strong> The default positioning; elements are positioned according to the normal flow of the document.</li>
        <li><strong>relative:</strong> The element is positioned relative to its normal position, allowing for adjustments using <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>.</li>
        <li><strong>absolute:</strong> The element is positioned relative to its closest positioned ancestor (not static).</li>
        <li><strong>fixed:</strong> The element is positioned relative to the viewport; it does not move when scrolling.</li>
        <li><strong>sticky:</strong> The element is treated as relative until it crosses a specified threshold, after which it becomes fixed.</li>
    </ul>

    <h2>Example 3: Relative Positioning</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Relative Positioning Example&lt;/title&gt;
    &lt;style&gt;
        .relative {
            position: relative; /* Relative positioning */
            top: 10px;          /* Moves the box down by 10 pixels */
            left: 10px;         /* Moves the box right by 10 pixels */
            background-color: #cce5ff;
            padding: 20px;
            border: 2px solid blue;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Relative Positioning&lt;/h1&gt;
    &lt;div class="relative"&gt;I am a relatively positioned box.&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates relative positioning:
        <ul>
            <li>The <code>div</code> with class <code>relative</code> is moved down and to the right by 10 pixels from its original position.</li>
            <li>This does not affect the layout of surrounding elements; they remain in their original positions.</li>
        </ul>
    </div>

    <h2>Example 4: Absolute Positioning</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Absolute Positioning Example&lt;/title&gt;
    &lt;style&gt;
        .container {
            position: relative; /* Positioned ancestor for the absolute element */
            width: 300px;
            height: 200px;
            border: 2px solid green;
        }
        .absolute {
            position: absolute; /* Absolute positioning */
            top: 20px;         /* 20 pixels from the top of the container */
            right: 20px;       /* 20 pixels from the right of the container */
            background-color: #ffcccb;
            padding: 10px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Absolute Positioning&lt;/h1&gt;
    &lt;div class="container"&gt;
        &lt;div class="absolute"&gt;I am an absolutely positioned box.&lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example shows absolute positioning:
        <ul>
            <li>The <code>div</code> with class <code>absolute</code> is positioned 20 pixels from the top and right of its positioned ancestor (the container).</li>
            <li>This positioning does not affect the surrounding elements; they flow normally.</li>
        </ul>
    </div>

    <h2>Example 5: Fixed Positioning</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Fixed Positioning Example&lt;/title&gt;
    &lt;style&gt;
        body {
            height: 1500px; /* To demonstrate scrolling */
        }
        .fixed {
            position: fixed; /* Fixed positioning */
            bottom: 20px;    /* 20 pixels from the bottom */
            right: 20px;     /* 20 pixels from the right */
            background-color: #ffff99;
            padding: 10px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Fixed Positioning&lt;/h1&gt;
    &lt;div class="fixed"&gt;I am a fixed positioned box.&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example illustrates fixed positioning:
        <ul>
            <li>The <code>div</code> with class <code>fixed</code> remains 20 pixels from the bottom and right of the viewport, regardless of scrolling.</li>
            <li>This element stays in the same position on the screen as you scroll through the page.</li>
        </ul>
    </div>

</body>
</html>
`;
            break;

        case 'flexbox':
            content = `
                <h1>CSS Flexbox </h1>

    <h2>Understanding the Flexbox Property</h2>
    <p>The <code>flex</code> property in CSS is a powerful layout tool that provides an efficient way to arrange items within a container. It enables responsive design and helps to align items in a predictable way across different screen sizes.</p>
    <ul>
        <li><strong>display: flex:</strong> Activates Flexbox on the container, enabling flex properties for its children.</li>
        <li><strong>flex-direction:</strong> Defines the direction flex items are placed in the flex container (row or column).</li>
        <li><strong>justify-content:</strong> Aligns flex items along the main axis (horizontal or vertical depending on flex-direction).</li>
        <li><strong>align-items:</strong> Aligns flex items along the cross axis (perpendicular to the main axis).</li>
        <li><strong>flex-wrap:</strong> Determines whether flex items should wrap onto multiple lines.</li>
    </ul>

    <h2>Example 1: Basic Flexbox Layout</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Flexbox Example&lt;/title&gt;
    &lt;style&gt;
        .flex-container {
            display: flex; /* Enables Flexbox layout */
            justify-content: space-around; /* Spaces items evenly */
            align-items: center; /* Centers items vertically */
            height: 200px; /* Sets height for the container */
            border: 2px solid green; /* Border for visibility */
        }
        .flex-item {
            padding: 10px;
            margin: 5px;
            background-color: #cce5ff;
            border: 1px solid #007bff;
            flex: 1; /* Allows items to grow and shrink */
            text-align: center; /* Centers text inside items */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Basic Flexbox Layout&lt;/h1&gt;
    &lt;div class="flex-container"&gt;
        &lt;div class="flex-item"&gt;Item 1&lt;/div&gt;
        &lt;div class="flex-item"&gt;Item 2&lt;/div&gt;
        &lt;div class="flex-item"&gt;Item 3&lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates a basic Flexbox layout:
        <ul>
            <li>The <code>flex-container</code> is a Flexbox container with items displayed in a row.</li>
            <li>The <code>justify-content: space-around;</code> property spaces the items evenly along the main axis.</li>
            <li>The <code>align-items: center;</code> property centers the items vertically within the container.</li>
        </ul>
    </div>

    <h2>Example 2: Flexbox with Different Directions</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Flexbox Direction Example&lt;/title&gt;
    &lt;style&gt;
        .flex-container {
            display: flex; /* Enables Flexbox layout */
            flex-direction: column; /* Stacks items vertically */
            justify-content: center; /* Centers items vertically */
            height: 300px; /* Sets height for the container */
            border: 2px solid green; /* Border for visibility */
        }
        .flex-item {
            padding: 10px;
            margin: 5px;
            background-color: #cce5ff;
            border: 1px solid #007bff;
            text-align: center; /* Centers text inside items */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Flexbox with Different Directions&lt;/h1&gt;
    &lt;div class="flex-container"&gt;
        &lt;div class="flex-item"&gt;Item 1&lt;/div&gt;
        &lt;div class="flex-item"&gt;Item 2&lt;/div&gt;
        &lt;div class="flex-item"&gt;Item 3&lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example shows how to use Flexbox to stack items vertically:
        <ul>
            <li>The <code>flex-direction: column;</code> property stacks the items on top of each other.</li>
            <li>The <code>justify-content: center;</code> property centers the items within the flex container vertically.</li>
        </ul>
    </div>

    <h2>Example 3: Flexbox Wrapping</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Flexbox Wrap Example&lt;/title&gt;
    &lt;style&gt;
        .flex-container {
            display: flex; /* Enables Flexbox layout */
            flex-wrap: wrap; /* Allows items to wrap onto multiple lines */
            justify-content: space-between; /* Spaces items evenly */
            border: 2px solid green; /* Border for visibility */
        }
        .flex-item {
            padding: 10px;
            margin: 5px;
            background-color: #cce5ff;
            border: 1px solid #007bff;
            flex: 0 1 150px; /* Allows items to grow and shrink, with a base width of 150px */
            text-align: center; /* Centers text inside items */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Flexbox Wrapping&lt;/h1&gt;
    &lt;div class="flex-container"&gt;
        &lt;div class="flex-item"&gt;Item 1&lt;/div&gt;
        &lt;div class="flex-item"&gt;Item 2&lt;/div&gt;
        &lt;div class="flex-item"&gt;Item 3&lt;/div&gt;
        &lt;div class="flex-item"&gt;Item 4&lt;/div&gt;
        &lt;div class="flex-item"&gt;Item 5&lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates the wrapping feature of Flexbox:
        <ul>
            <li>The <code>flex-wrap: wrap;</code> property allows items to wrap onto the next line when there isn’t enough space.</li>
            <li>Each <code>flex-item</code> has a base width of 150px, but can grow and shrink as needed.</li>
        </ul>
    </div>
`;
            break;

        case 'grid':
            content = `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid Explained</title>
    <style>
        /* Basic styling for the code display */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto;
        }
        code {
            color: #333;
        }
        h2 {
            color: #0056b3;
        }
        .box {
            padding: 20px;
            margin: 10px 0;
            border: 2px solid blue;
            background-color: #e6f7ff;
        }
        .grid-container {
            display: grid; /* Enables Grid layout */
            grid-template-columns: repeat(3, 1fr); /* Defines 3 equal columns */
            grid-gap: 10px; /* Space between grid items */
            border: 2px solid green; /* Border for visibility */
            margin: 20px 0;
        }
        .grid-item {
            padding: 10px;
            margin: 5px;
            background-color: #cce5ff;
            border: 1px solid #007bff;
            text-align: center; /* Centers text inside items */
        }
        .visualization {
            display: grid; /* Enables Grid layout */
            grid-template-columns: repeat(3, 1fr); /* Defines 3 equal columns */
            grid-gap: 5px; /* Space between grid items */
            margin: 20px 0;
        }
        .visualization div {
            border: 1px dashed #000;
            padding: 20px;
            text-align: center;
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>

    <h1>CSS Grid Explained</h1>

    <h2>Understanding the CSS Grid Property</h2>
    <p>The <code>grid</code> property in CSS is a powerful layout system that allows for the creation of complex web layouts in a more efficient way. It enables two-dimensional layout control, where both rows and columns can be defined.</p>
    <ul>
        <li><strong>display: grid:</strong> Activates Grid layout on the container, enabling grid properties for its children.</li>
        <li><strong>grid-template-columns:</strong> Defines the number and size of columns in the grid.</li>
        <li><strong>grid-template-rows:</strong> Defines the number and size of rows in the grid.</li>
        <li><strong>grid-gap:</strong> Sets the spacing between grid items.</li>
        <li><strong>grid-area:</strong> Specifies a grid item’s position within the grid.</li>
    </ul>

    <h2>Example 1: Basic Grid Layout</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Grid Example&lt;/title&gt;
    &lt;style&gt;
        .grid-container {
            display: grid; /* Enables Grid layout */
            grid-template-columns: repeat(3, 1fr); /* Defines 3 equal columns */
            grid-gap: 10px; /* Space between grid items */
            border: 2px solid green; /* Border for visibility */
        }
        .grid-item {
            padding: 10px;
            margin: 5px;
            background-color: #cce5ff;
            border: 1px solid #007bff;
            text-align: center; /* Centers text inside items */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Basic Grid Layout&lt;/h1&gt;
    &lt;div class="grid-container"&gt;
        &lt;div class="grid-item"&gt;Item 1&lt;/div&gt;
        &lt;div class="grid-item"&gt;Item 2&lt;/div&gt;
        &lt;div class="grid-item"&gt;Item 3&lt;/div&gt;
        &lt;div class="grid-item"&gt;Item 4&lt;/div&gt;
        &lt;div class="grid-item"&gt;Item 5&lt;/div&gt;
        &lt;div class="grid-item"&gt;Item 6&lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates a basic Grid layout:
        <ul>
            <li>The <code>grid-container</code> is a Grid container with items arranged in a three-column layout.</li>
            <li>The <code>grid-gap</code> property adds space between the grid items.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="visualization">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
    </div>

    <h2>Example 2: Defining Rows and Columns</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Grid Rows and Columns Example&lt;/title&gt;
    &lt;style&gt;
        .grid-container {
            display: grid; /* Enables Grid layout */
            grid-template-columns: 1fr 2fr; /* Defines 2 columns with different widths */
            grid-template-rows: auto; /* Rows will adjust based on content */
            grid-gap: 10px; /* Space between grid items */
            border: 2px solid green; /* Border for visibility */
        }
        .grid-item {
            padding: 10px;
            margin: 5px;
            background-color: #cce5ff;
            border: 1px solid #007bff;
            text-align: center; /* Centers text inside items */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Defining Rows and Columns&lt;/h1&gt;
    &lt;div class="grid-container"&gt;
        &lt;div class="grid-item"&gt;Item 1&lt;/div&gt;
        &lt;div class="grid-item"&gt;Item 2&lt;/div&gt;
        &lt;div class="grid-item"&gt;Item 3&lt;/div&gt;
        &lt;div class="grid-item"&gt;Item 4&lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example illustrates how to define specific column and row sizes:
        <ul>
            <li>The <code>grid-template-columns: 1fr 2fr;</code> property defines two columns, with the second column being twice as wide as the first.</li>
            <li>The rows automatically adjust their height based on the content.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="visualization" style="grid-template-columns: 1fr 2fr;">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
    </div>

    <h2>Example 3: Grid Item Positioning</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Grid Item Positioning Example&lt;/title&gt;
    &lt;style&gt;
        .grid-container {
            display: grid; /* Enables Grid layout */
            grid-template-columns: repeat(3, 1fr); /* Defines 3 equal columns */
            grid-gap: 10px; /* Space between grid items */
            border: 2px solid green; /* Border for visibility */
        }
        .grid-item {
            padding: 10px;
            margin: 5px;
            background-color: #cce5ff;
            border: 1px solid #007bff;
            text-align: center; /* Centers text inside items */
        }
        .item1 {
            grid-column: 1 / 3; /* Spans the first two columns */
            grid-row: 1; /* Stays in the first row */
        }
        .item2 {
            grid-column: 3; /* Occupies the third column */
            grid-row: 1; /* Stays in the first row */
        }
        .item3 {
            grid-column: 1 / -1; /* Spans all columns */
            grid-row: 2; /* Moves to the second row */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Grid Item Positioning&lt;/h1&gt;
    &lt;div class="grid-container"&gt;
        &lt;div class="grid-item item1"&gt;Item 1&lt;/div&gt;
        &lt;div class="grid-item item2"&gt;Item 2&lt;/div&gt;
        &lt;div class="grid-item item3"&gt;Item 3&lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example shows how to position grid items within the grid:
        <ul>
            <li>The <code>item1</code> class spans the first two columns of the first row.</li>
            <li>The <code>item2</code> class occupies the third column of the first row.</li>
            <li>The <code>item3</code> class spans all columns in the second row.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="visualization">
        <div style="grid-column: 1 / 3;">Item 1</div>
        <div style="grid-column: 3;">Item 2</div>
        <div style="grid-column: 1 / -1;">Item 3</div>
    </div>

</body>
</html>
`;
            break;

        case 'responsive':
            content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design Explained</title>
    <style>
        /* Basic styling for the page */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto;
        }
        code {
            color: #333;
        }
        h2 {
            color: #0056b3;
        }
        .box {
            padding: 20px;
            margin: 10px 0;
            border: 2px solid blue;
            background-color: #e6f7ff;
        }
        .container {
            display: flex; /* Enables Flexbox layout */
            flex-wrap: wrap; /* Allows items to wrap onto the next line */
            gap: 10px; /* Space between items */
            border: 2px solid green; /* Border for visibility */
            margin: 20px 0;
        }
        .item {
            background-color: #cce5ff;
            border: 1px solid #007bff;
            padding: 20px;
            flex: 1; /* Allows items to grow equally */
            min-width: 200px; /* Minimum width for items */
            text-align: center; /* Centers text inside items */
        }
        .visualization {
            display: flex; /* Enables Flexbox layout */
            flex-wrap: wrap; /* Allows items to wrap */
            gap: 5px; /* Space between items */
            margin: 20px 0;
        }
        .visualization div {
            border: 1px dashed #000;
            padding: 20px;
            text-align: center;
            background-color: #f9f9f9;
            flex: 1; /* Allows items to grow equally */
            min-width: 100px; /* Minimum width for visualization items */
        }
    </style>
</head>
<body>

    <h1>Responsive Design Explained</h1>

    <h2>What is Responsive Design?</h2>
    <p>Responsive design is an approach to web design that allows web pages to render well on various devices and window or screen sizes. It ensures a seamless user experience on desktops, tablets, and smartphones.</p>
    
    <h2>Key Principles of Responsive Design</h2>
    <ul>
        <li><strong>Fluid Grids:</strong> Layouts that use percentage-based widths to adapt to different screen sizes.</li>
        <li><strong>Flexible Images:</strong> Images that resize within their containing elements to prevent overflow.</li>
        <li><strong>Media Queries:</strong> CSS techniques that apply styles based on the device's characteristics, such as width, height, and resolution.</li>
    </ul>

    <h2>Example 1: Basic Responsive Layout</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Responsive Layout Example&lt;/title&gt;
    &lt;style&gt;
        .container {
            display: flex; /* Enables Flexbox layout */
            flex-wrap: wrap; /* Allows items to wrap onto the next line */
            gap: 10px; /* Space between items */
            border: 2px solid green; /* Border for visibility */
        }
        .item {
            background-color: #cce5ff;
            border: 1px solid #007bff;
            padding: 20px;
            flex: 1; /* Allows items to grow equally */
            min-width: 200px; /* Minimum width for items */
            text-align: center; /* Centers text inside items */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Basic Responsive Layout&lt;/h1&gt;
    &lt;div class="container"&gt;
        &lt;div class="item"&gt;Item 1&lt;/div&gt;
        &lt;div class="item"&gt;Item 2&lt;/div&gt;
        &lt;div class="item"&gt;Item 3&lt;/div&gt;
        &lt;div class="item"&gt;Item 4&lt;/div&gt;
        &lt;div class="item"&gt;Item 5&lt;/div&gt;
        &lt;div class="item"&gt;Item 6&lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates a basic responsive layout:
        <ul>
            <li>The <code>container</code> uses Flexbox to create a fluid layout.</li>
            <li>The <code>flex: 1;</code> property allows items to grow equally, while <code>min-width: 200px;</code> ensures items do not shrink below a certain width.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="visualization">
        <div style="min-width: 200px;">Item 1</div>
        <div style="min-width: 200px;">Item 2</div>
        <div style="min-width: 200px;">Item 3</div>
        <div style="min-width: 200px;">Item 4</div>
        <div style="min-width: 200px;">Item 5</div>
        <div style="min-width: 200px;">Item 6</div>
    </div>

    <h2>Example 2: Media Queries</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Media Queries Example&lt;/title&gt;
    &lt;style&gt;
        .container {
            display: flex; /* Enables Flexbox layout */
            flex-wrap: wrap; /* Allows items to wrap onto the next line */
            gap: 10px; /* Space between items */
        }
        .item {
            background-color: #cce5ff;
            border: 1px solid #007bff;
            padding: 20px;
            flex: 1; /* Allows items to grow equally */
            min-width: 200px; /* Minimum width for items */
            text-align: center; /* Centers text inside items */
        }
        /* Media Queries */
        @media (max-width: 600px) {
            .item {
                flex-basis: 100%; /* Stacks items on small screens */
            }
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Media Queries Example&lt;/h1&gt;
    &lt;div class="container"&gt;
        &lt;div class="item"&gt;Item 1&lt;/div&gt;
        &lt;div class="item"&gt;Item 2&lt;/div&gt;
        &lt;div class="item"&gt;Item 3&lt;/div&gt;
        &lt;div class="item"&gt;Item 4&lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example shows how to use media queries to make a layout responsive:
        <ul>
            <li>The media query checks if the viewport width is 600px or less.</li>
            <li>When this condition is met, the <code>flex-basis: 100%;</code> property is applied to stack items vertically.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="visualization">
        <div style="min-width: 200px;">Item 1</div>
        <div style="min-width: 200px;">Item 2</div>
        <div style="min-width: 200px;">Item 3</div>
        <div style="min-width: 200px;">Item 4</div>
    </div>

    <h2>Example 3: Flexible Images</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Flexible Images Example&lt;/title&gt;
    &lt;style&gt;
        img {
            max-width: 100%; /* Ensures images are responsive */
            height: auto; /* Maintains aspect ratio */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Flexible Images Example&lt;/h1&gt;
    &lt;img src="path-to-your-image.jpg" alt="A descriptive alt text"&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example shows how to create responsive images:
        <ul>
            <li>Setting <code>max-width: 100%;</code> makes the image scale down if needed while maintaining its aspect ratio.</li>
            <li>The <code>height: auto;</code> rule keeps the image proportions intact.</li>
        </ul>
    </div>

</body>
</html>
`;
            break;
            case "media-queries":
                content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Queries Explained</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto;
        }
        code {
            color: #333;
        }
        h2 {
            color: #0056b3;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 20px 0;
        }
        .item {
            background-color: #cce5ff;
            border: 1px solid #007bff;
            padding: 20px;
            flex: 1;
            min-width: 200px;
            text-align: center;
        }
    </style>
</head>
<body>

    <h1>Media Queries Explained</h1>

    <h2>What are Media Queries?</h2>
    <p>Media queries are a CSS technique used to apply styles based on the characteristics of the device, such as width, height, resolution, and orientation. They allow developers to create responsive designs that adapt to different screen sizes and orientations.</p>

    <h2>Example 1: Basic Media Query</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Basic Media Query Example&lt;/title&gt;
    &lt;style&gt;
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .item {
            background-color: #cce5ff;
            border: 1px solid #007bff;
            padding: 20px;
            flex: 1;
            min-width: 200px;
            text-align: center;
        }

        /* Media Query */
        @media (max-width: 600px) {
            .item {
                flex-basis: 100%; /* Stack items on small screens */
            }
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Basic Media Query Example&lt;/h1&gt;
    &lt;div class="container"&gt;
        &lt;div class="item"&gt;Item 1&lt;/div&gt;
        &lt;div class="item"&gt;Item 2&lt;/div&gt;
        &lt;div class="item"&gt;Item 3&lt;/div&gt;
        &lt;div class="item"&gt;Item 4&lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates a basic media query:
        <ul>
            <li>The media query applies styles when the viewport width is 600 pixels or less.</li>
            <li>Inside the media query, the <code>flex-basis: 100%;</code> property stacks the items vertically, making them full-width on smaller screens.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="container">
        <div class="item" style="min-width: 200px;">Item 1</div>
        <div class="item" style="min-width: 200px;">Item 2</div>
        <div class="item" style="min-width: 200px;">Item 3</div>
        <div class="item" style="min-width: 200px;">Item 4</div>
    </div>

    <h2>Example 2: Media Query for Different Screen Resolutions</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Different Resolutions Example&lt;/title&gt;
    &lt;style&gt;
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .item {
            background-color: #cce5ff;
            border: 1px solid #007bff;
            padding: 20px;
            flex: 1;
            min-width: 200px;
            text-align: center;
        }

        /* Media Queries */
        @media (min-width: 601px) and (max-width: 1200px) {
            .item {
                background-color: #99ccff; /* Change background color for medium screens */
            }
        }
        @media (min-width: 1201px) {
            .item {
                background-color: #3399ff; /* Change background color for large screens */
            }
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Different Resolutions Example&lt;/h1&gt;
    &lt;div class="container"&gt;
        &lt;div class="item"&gt;Item 1&lt;/div&gt;
        &lt;div class="item"&gt;Item 2&lt;/div&gt;
        &lt;div class="item"&gt;Item 3&lt;/div&gt;
        &lt;div class="item"&gt;Item 4&lt;/div&gt;
    &lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates media queries for different screen resolutions:
        <ul>
            <li>The first media query applies to devices with a width between 601px and 1200px, changing the background color of the items to a lighter shade.</li>
            <li>The second media query applies to devices wider than 1201px, changing the background color to a darker shade, enhancing visual clarity.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="container">
        <div class="item" style="min-width: 200px;">Item 1</div>
        <div class="item" style="min-width: 200px;">Item 2</div>
        <div class="item" style="min-width: 200px;">Item 3</div>
        <div class="item" style="min-width: 200px;">Item 4</div>
    </div>

</body>
</html>
`;
break;
case "pseudo":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pseudo-Classes Explained</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto;
        }
        code {
            color: #333;
        }
        h2 {
            color: #0056b3;
        }
        .button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        .button:hover {
            background-color: #0056b3; /* Hover effect */
        }
        .button:active {
            background-color: #003d80; /* Active effect */
        }
        .input-field {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            width: 200px;
            margin-bottom: 20px;
        }
        .highlight {
            font-weight: bold;
            color: #007bff;
        }
        .container {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 20px 0;
        }
    </style>
</head>
<body>

    <h1>Pseudo-Classes Explained</h1>

    <h2>What are Pseudo-Classes?</h2>
    <p>Pseudo-classes are special keywords added to selectors that specify a special state of the selected elements. They allow you to apply styles based on user interaction, the structure of the document, or the state of the element. Pseudo-classes start with a colon <code>:</code> followed by the pseudo-class name.</p>

    <h2>Common Pseudo-Classes</h2>
    <p>Here are some of the most commonly used pseudo-classes:</p>
    <ul>
        <li><code>:hover</code> - Applies styles when the user hovers over an element.</li>
        <li><code>:active</code> - Applies styles when an element is being activated (e.g., clicked).</li>
        <li><code>:focus</code> - Applies styles when an element (usually an input) is focused.</li>
        <li><code>:first-child</code> - Applies styles to the first child of a parent element.</li>
        <li><code>:last-child</code> - Applies styles to the last child of a parent element.</li>
        <li><code>:nth-child(n)</code> - Applies styles to the nth child of a parent element.</li>
        <li><code>:not(selector)</code> - Applies styles to elements that do not match the given selector.</li>
    </ul>

    <h2>Example 1: Hover and Active Pseudo-Classes</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Hover and Active Pseudo-Classes&lt;/title&gt;
    &lt;style&gt;
        .button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        .button:hover {
            background-color: #0056b3; /* Change color on hover */
        }
        .button:active {
            background-color: #003d80; /* Change color when active */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Hover and Active Pseudo-Classes&lt;/h1&gt;
    &lt;button class="button"&gt;Hover and Click Me&lt;/button&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates the use of the <code>:hover</code> and <code>:active</code> pseudo-classes:
        <ul>
            <li>The <code>:hover</code> pseudo-class applies a different background color when the user hovers over the button.</li>
            <li>The <code>:active</code> pseudo-class changes the button's background color when it is clicked or tapped.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <button class="button">Hover and Click Me</button>

    <h2>Example 2: Focus and First-Child Pseudo-Classes</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Focus and First-Child Pseudo-Classes&lt;/title&gt;
    &lt;style&gt;
        input {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            width: 200px;
        }
        input:focus {
            border-color: #007bff; /* Change border color on focus */
            outline: none; /* Remove default outline */
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li:first-child {
            font-weight: bold; /* Make the first list item bold */
            color: #007bff;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Focus and First-Child Pseudo-Classes&lt;/h1&gt;
    &lt;input type="text" placeholder="Type here..." /&gt;

    &lt;h2&gt;List of Items&lt;/h2&gt;
    &lt;ul&gt;
        &lt;li&gt;First Item&lt;/li&gt;
        &lt;li&gt;Second Item&lt;/li&gt;
        &lt;li&gt;Third Item&lt;/li&gt;
    &lt;/ul&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates the use of the <code>:focus</code> and <code>:first-child</code> pseudo-classes:
        <ul>
            <li>The <code>:focus</code> pseudo-class styles the input field by changing the border color when the field is active (focused).</li>
            <li>The <code>:first-child</code> pseudo-class applies a bold font style to the first item in the list, highlighting it for the user.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <input type="text" placeholder="Type here..." />

    <h2>Example 3: Nth-Child and Not Pseudo-Classes</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Nth-Child and Not Pseudo-Classes&lt;/title&gt;
    &lt;style&gt;
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 10px;
            background-color: #e9ecef;
            margin: 5px 0;
            border-radius: 5px;
        }
        li:nth-child(2n) {
            background-color: #007bff; /* Style every second item */
            color: white;
        }
        li:not(:first-child) {
            font-style: italic; /* Style all items except the first */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Nth-Child and Not Pseudo-Classes&lt;/h1&gt;
    &lt;h2&gt;List of Items&lt;/h2&gt;
    &lt;ul&gt;
        &lt;li&gt;Item 1&lt;/li&gt;
        &lt;li&gt;Item 2&lt;/li&gt;
        &lt;li&gt;Item 3&lt;/li&gt;
        &lt;li&gt;Item 4&lt;/li&gt;
    &lt;/ul&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates the use of the <code>:nth-child(n)</code> and <code>:not(selector)</code> pseudo-classes:
        <ul>
            <li>The <code>:nth-child(2n)</code> pseudo-class styles every second list item with a different background color.</li>
            <li>The <code>:not(:first-child)</code> pseudo-class applies italic styling to all list items except the first one.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>

</body>
</html>
`;
break;

    case "animations":
        content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations Explained</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto;
        }
        code {
            color: #333;
        }
        h2 {
            color: #0056b3;
        }
        .box {
            width: 100px;
            height: 100px;
            background-color: #007bff;
            margin: 20px 0;
            border-radius: 10px;
            animation: moveBox 2s infinite; /* Apply animation */
        }
        /* Define the animation keyframes */
        @keyframes moveBox {
            0% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(200px);
            }
            100% {
                transform: translateX(0);
            }
        }

        /* Example for fade animation */
        .fade-box {
            width: 100px;
            height: 100px;
            background-color: #28a745;
            margin: 20px 0;
            border-radius: 10px;
            animation: fadeInOut 4s infinite; /* Apply animation */
        }
        @keyframes fadeInOut {
            0%, 100% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
        }
    </style>
</head>
<body>

    <h1>CSS Animations Explained</h1>

    <h2>What are CSS Animations?</h2>
    <p>CSS animations allow you to animate transitions from one style configuration to another. They can animate properties such as color, size, position, and more, creating engaging visual effects on your website.</p>

    <h2>How CSS Animations Work</h2>
    <p>Animations are created using two main components:</p>
    <ol>
        <li><strong>@keyframes:</strong> Defines the stages of the animation, specifying the styles at each point (percentages).</li>
        <li><strong>Animation Properties:</strong> Specifies how the animation should run, including the duration, timing, and repetition.</li>
    </ol>

    <h2>Example 1: Simple Movement Animation</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Simple Movement Animation&lt;/title&gt;
    &lt;style&gt;
        .box {
            width: 100px;
            height: 100px;
            background-color: #007bff;
            border-radius: 10px;
            animation: moveBox 2s infinite; /* Apply animation */
        }
        @keyframes moveBox {
            0% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(200px);
            }
            100% {
                transform: translateX(0);
            }
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Simple Movement Animation&lt;/h1&gt;
    &lt;div class="box"&gt;&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates a basic movement animation using the following:
        <ul>
            <li>The <code>@keyframes</code> rule defines the animation's stages, where the box moves 200px to the right at 50%, and returns to its original position at 100%.</li>
            <li>The <code>animation</code> property applies the animation to the <code>.box</code> class, with a duration of 2 seconds and an infinite loop.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="box"></div>

    <h2>Example 2: Fade In and Out Animation</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Fade In and Out Animation&lt;/title&gt;
    &lt;style&gt;
        .fade-box {
            width: 100px;
            height: 100px;
            background-color: #28a745;
            border-radius: 10px;
            animation: fadeInOut 4s infinite; /* Apply animation */
        }
        @keyframes fadeInOut {
            0%, 100% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Fade In and Out Animation&lt;/h1&gt;
    &lt;div class="fade-box"&gt;&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example shows a fading animation effect:
        <ul>
            <li>The <code>@keyframes</code> rule defines the stages of the animation, setting the opacity to 0% at the start and end (0% and 100%), and 100% at the midpoint (50%).</li>
            <li>The <code>animation</code> property applies the animation to the <code>.fade-box</code> class, with a duration of 4 seconds and an infinite loop.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="fade-box"></div>

    <h2>Understanding Key Animation Properties</h2>
    <p>Here are some important properties you can use when applying CSS animations:</p>
    <ul>
        <li><code>animation-name</code> – Specifies the name of the <code>@keyframes</code> you want to use.</li>
        <li><code>animation-duration</code> – Specifies how long the animation should take to complete (e.g., 2s for 2 seconds).</li>
        <li><code>animation-timing-function</code> – Specifies the speed curve of the animation. Common values include <code>ease</code>, <code>linear</code>, <code>ease-in</code>, <code>ease-out</code>, and <code>ease-in-out</code>.</li>
        <li><code>animation-delay</code> – Specifies a delay before the animation starts.</li>
        <li><code>animation-iteration-count</code> – Specifies how many times the animation should repeat. Can be a number (e.g., 1, 2, 3) or <code>infinite</code>.</li>
        <li><code>animation-direction</code> – Specifies whether the animation should play forwards, backwards, or alternate between both.</li>
    </ul>

    <h2>Example 3: Animation with Delay and Iterations</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Animation with Delay and Iterations&lt;/title&gt;
    &lt;style&gt;
        .delay-box {
            width: 100px;
            height: 100px;
            background-color: #ffc107;
            margin: 20px 0;
            border-radius: 10px;
            animation: growBox 2s ease-in-out 3s infinite; /* Apply animation with delay and infinite loop */
        }
        @keyframes growBox {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.5);
            }
            100% {
                transform: scale(1);
            }
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Animation with Delay and Iterations&lt;/h1&gt;
    &lt;div class="delay-box"&gt;&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates an animation with a delay and multiple iterations:
        <ul>
            <li>The <code>@keyframes</code> rule scales the element up to 1.5 times its size at 50% and returns to its original size at 100%.</li>
            <li>The <code>animation</code> property specifies a 3-second delay before the animation starts, with an infinite loop.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="delay-box"></div>

</body>
</html>
`;
break;
case "transitions":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transitions Explained</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto;
        }
        code {
            color: #333;
        }
        h2 {
            color: #0056b3;
        }
        .box {
            width: 100px;
            height: 100px;
            background-color: #007bff;
            margin: 20px 0;
            border-radius: 10px;
            transition: background-color 0.5s ease, transform 0.5s ease; /* Apply transition */
        }
        /* Change background color and scale on hover */
        .box:hover {
            background-color: #28a745;
            transform: scale(1.2);
        }

        /* Example with delay */
        .delayed-box {
            width: 100px;
            height: 100px;
            background-color: #ffc107;
            margin: 20px 0;
            border-radius: 10px;
            transition: background-color 1s, width 1s;
        }
        .delayed-box:hover {
            background-color: #dc3545;
            width: 150px;
        }
    </style>
</head>
<body>

    <h1>CSS Transitions Explained</h1>

    <h2>What are CSS Transitions?</h2>
    <p>CSS transitions allow you to change property values smoothly over a given duration, making it easy to animate changes to CSS properties when elements are interacted with, such as when they are hovered over, focused, or clicked.</p>

    <h2>How CSS Transitions Work</h2>
    <p>CSS transitions are defined using the <code>transition</code> property. This property allows you to specify which CSS property you want to animate, how long the transition should take, and what timing function to use (e.g., ease, linear, etc.).</p>

    <h2>Example 1: Basic Hover Transition</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Basic Hover Transition&lt;/title&gt;
    &lt;style&gt;
        .box {
            width: 100px;
            height: 100px;
            background-color: #007bff;
            border-radius: 10px;
            transition: background-color 0.5s ease, transform 0.5s ease; /* Apply transition */
        }
        .box:hover {
            background-color: #28a745;
            transform: scale(1.2);
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Basic Hover Transition&lt;/h1&gt;
    &lt;div class="box"&gt;&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> In this example, a basic hover transition is applied to a box element:
        <ul>
            <li>The <code>transition</code> property is used to specify which CSS properties will be animated (background-color and transform).</li>
            <li>When the user hovers over the box, the background color smoothly changes from blue to green over 0.5 seconds, and the box also scales up by 20%.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="box"></div>

    <h2>Example 2: Transition with Delay</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Transition with Delay&lt;/title&gt;
    &lt;style&gt;
        .delayed-box {
            width: 100px;
            height: 100px;
            background-color: #ffc107;
            border-radius: 10px;
            transition: background-color 1s, width 1s;
        }
        .delayed-box:hover {
            background-color: #dc3545;
            width: 150px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Transition with Delay&lt;/h1&gt;
    &lt;div class="delayed-box"&gt;&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates how to apply a transition with both a duration and delay:
        <ul>
            <li>The <code>transition</code> property is applied to both the <code>background-color</code> and <code>width</code> properties with a duration of 1 second.</li>
            <li>When the user hovers over the box, the background color transitions from yellow to red, and the width increases from 100px to 150px over 1 second.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="delayed-box"></div>

    <h2>Understanding Key Transition Properties</h2>
    <p>Here are some important properties that control how CSS transitions behave:</p>
    <ul>
        <li><code>transition-property</code> – Specifies which CSS property (or properties) to animate. Examples: <code>background-color</code>, <code>transform</code>, etc.</li>
        <li><code>transition-duration</code> – Specifies how long the transition should take. Example: <code>1s</code> (for 1 second).</li>
        <li><code>transition-timing-function</code> – Specifies the speed curve of the transition. Common values include <code>ease</code>, <code>linear</code>, <code>ease-in</code>, <code>ease-out</code>, and <code>ease-in-out</code>.</li>
        <li><code>transition-delay</code> – Specifies the delay before the transition starts.</li>
        <li><code>transition</code> – A shorthand property for all the above properties combined (e.g., <code>transition: background-color 0.5s ease;</code>).</li>
    </ul>

    <h2>Example 3: Transition with Multiple Properties</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Transition with Multiple Properties&lt;/title&gt;
    &lt;style&gt;
        .multi-box {
            width: 100px;
            height: 100px;
            background-color: #6c757d;
            margin: 20px 0;
            border-radius: 10px;
            transition: background-color 0.4s ease, transform 0.4s ease;
        }
        .multi-box:hover {
            background-color: #17a2b8;
            transform: rotate(45deg);
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Transition with Multiple Properties&lt;/h1&gt;
    &lt;div class="multi-box"&gt;&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates how to transition multiple properties at the same time:
        <ul>
            <li>The <code>transition</code> property is used to animate both the <code>background-color</code> and <code>transform</code> properties simultaneously.</li>
            <li>When the user hovers over the box, the background color transitions from gray to blue, and the box rotates by 45 degrees.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="multi-box"></div>

</body>
</html>
`;
break;
case "variables":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Variables Explained</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto;
        }
        code {
            color: #333;
        }
        h2 {
            color: #0056b3;
        }
        .box {
            width: 150px;
            height: 150px;
            background-color: var(--main-bg-color, #007bff); /* Using CSS variable */
            border-radius: 10px;
            color: var(--text-color, #fff); /* Fallback in case variable is undefined */
            margin: 20px 0;
            padding: 10px;
            transition: background-color 0.5s ease;
        }

        /* Define variables in the root */
        :root {
            --main-bg-color: #28a745;
            --text-color: #fff;
            --hover-bg-color: #17a2b8;
        }

        /* On hover, change the background using variables */
        .box:hover {
            background-color: var(--hover-bg-color);
        }

        /* Example with variable overwriting */
        .box-secondary {
            --main-bg-color: #ffc107;
            --hover-bg-color: #dc3545;
        }
    </style>
</head>
<body>

    <h1>CSS Variables Explained</h1>

    <h2>What are CSS Variables?</h2>
    <p>CSS variables, also known as custom properties, are entities defined by CSS authors that contain specific values. These variables can be reused throughout a stylesheet, allowing for more flexible, maintainable, and dynamic designs.</p>

    <h2>How CSS Variables Work</h2>
    <p>CSS variables are defined using the <code>--variable-name</code> syntax. They are often defined in the <code>:root</code> selector, making them available globally, or can be scoped to specific elements.</p>

    <h2>Example 1: Basic Use of CSS Variables</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Basic Use of CSS Variables&lt;/title&gt;
    &lt;style&gt;
        :root {
            --main-bg-color: #28a745;
            --text-color: #fff;
            --hover-bg-color: #17a2b8;
        }

        .box {
            width: 150px;
            height: 150px;
            background-color: var(--main-bg-color);
            color: var(--text-color);
            border-radius: 10px;
            padding: 10px;
            transition: background-color 0.5s ease;
        }

        .box:hover {
            background-color: var(--hover-bg-color);
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Basic Use of CSS Variables&lt;/h1&gt;
    &lt;div class="box"&gt;Hover over me!&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example shows how to use CSS variables to dynamically style elements:
        <ul>
            <li>The variables <code>--main-bg-color</code>, <code>--text-color</code>, and <code>--hover-bg-color</code> are defined inside the <code>:root</code> selector, making them available globally.</li>
            <li>The box element uses the <code>--main-bg-color</code> for its background color and the <code>--text-color</code> for the text color.</li>
            <li>When the user hovers over the box, the background color transitions to <code>--hover-bg-color</code>.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="box">Hover over me!</div>

    <h2>Example 2: Variable Overwriting</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Variable Overwriting&lt;/title&gt;
    &lt;style&gt;
        :root {
            --main-bg-color: #28a745;
            --text-color: #fff;
            --hover-bg-color: #17a2b8;
        }

        .box {
            width: 150px;
            height: 150px;
            background-color: var(--main-bg-color);
            color: var(--text-color);
            border-radius: 10px;
            padding: 10px;
            transition: background-color 0.5s ease;
        }

        .box-secondary {
            --main-bg-color: #ffc107;
            --hover-bg-color: #dc3545;
        }

        .box:hover {
            background-color: var(--hover-bg-color);
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Variable Overwriting&lt;/h1&gt;
    &lt;div class="box"&gt;Primary Box&lt;/div&gt;
    &lt;div class="box box-secondary"&gt;Secondary Box&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates how you can overwrite CSS variables at the element level:
        <ul>
            <li>The <code>--main-bg-color</code> and <code>--hover-bg-color</code> are overwritten inside the <code>.box-secondary</code> class.</li>
            <li>The primary box uses the globally defined variables, while the secondary box uses its own local versions.</li>
            <li>On hover, both boxes change their background color, but each box uses its respective variable for the hover effect.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="box">Primary Box</div>
    <div class="box box-secondary">Secondary Box</div>

    <h2>Why Use CSS Variables?</h2>
    <p>CSS variables are extremely useful for simplifying and maintaining a consistent style across your website. They allow for easy reuse and make it simpler to update values in one place, especially when working on larger projects.</p>

    <h3>Benefits of CSS Variables</h3>
    <ul>
        <li>**Global or Local Scope**: CSS variables can be scoped to either a global level (using <code>:root</code>) or locally to specific elements.</li>
        <li>**Reusability**: Variables can be reused across multiple elements, avoiding duplication and ensuring consistency.</li>
        <li>**Dynamic Updates**: Changing the value of a CSS variable updates it everywhere the variable is used, making it easy to modify themes or styles.</li>
        <li>**Faster Prototyping**: Using variables accelerates prototyping and styling adjustments across different sections.</li>
    </ul>

    <h2>Understanding Key Concepts</h2>
    <p>Here are some important concepts when working with CSS variables:</p>
    <ul>
        <li><code>--variable-name</code> – The syntax used to define a CSS variable. It should always start with two dashes (<code>--</code>).</li>
        <li><code>:root</code> – This pseudo-class targets the document's root element and is commonly used to define global variables.</li>
        <li><code>var(--variable-name)</code> – The function used to retrieve the value of a CSS variable.</li>
        <li>**Fallback Values**: CSS variables can have fallback values in case a variable isn't defined or is invalid. Example: <code>var(--main-bg-color, #007bff)</code>.</li>
    </ul>

    <h2>Example 3: Fallback Value in CSS Variables</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Fallback Value Example&lt;/title&gt;
    &lt;style&gt;
        .box {
            width: 150px;
            height: 150px;
            background-color: var(--non-existent-color, #007bff); /* Fallback to blue */
            color: #fff;
            border-radius: 10px;
            padding: 10px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Fallback Value Example&lt;/h1&gt;
    &lt;div class="box"&gt;I’m Blue!&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> In this example, the variable <code>--non-existent-color</code> does not exist. The browser falls back to the specified color, <code>#007bff</code> (blue).
    </div>

    <h3>Visualization</h3>
    <div class="box">I’m Blue!</div>

</body>
</html>
`;
break;
case "selectors-advanced":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced CSS Selectors Explained</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto;
        }
        code {
            color: #333;
        }
        h2 {
            color: #0056b3;
        }
        .box {
            width: 150px;
            height: 150px;
            background-color: #28a745;
            color: white;
            border-radius: 10px;
            padding: 10px;
            margin: 20px 0;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .box:nth-child(2) {
            background-color: #ffc107;
        }
        .box:nth-of-type(odd) {
            background-color: #17a2b8;
        }
        .box:first-of-type {
            background-color: #dc3545;
        }
        .parent > .box:first-child {
            background-color: #007bff;
        }
        [data-custom="special"] {
            background-color: #6f42c1;
        }
    </style>
</head>
<body>

    <h1>Advanced CSS Selectors Explained</h1>

    <h2>What are CSS Selectors?</h2>
    <p>CSS selectors are patterns used to select and style elements on a web page. In addition to basic selectors (like class and ID selectors), CSS provides a range of advanced selectors to target elements based on their attributes, position, and relationships to other elements.</p>

    <h2>Example 1: Attribute Selector</h2>
    <p>CSS allows you to select elements based on the presence or value of an attribute using attribute selectors. Below is an example where we use the <code>[attribute=value]</code> syntax to select an element with a specific data attribute:</p>
    <pre><code>
&lt;div class="box" data-custom="special"&gt;I am special&lt;/div&gt;

&lt;style&gt;
    [data-custom="special"] {
        background-color: #6f42c1;
    }
&lt;/style&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong>
        The attribute selector <code>[data-custom="special"]</code> targets the element with a <code>data-custom</code> attribute having the value "special." It changes the background color of that element.
    </div>

    <h3>Visualization</h3>
    <div class="box" data-custom="special">I am special</div>

    <h2>Example 2: Child Combinator Selector</h2>
    <p>The child combinator selector (<code>&gt;</code>) selects direct children of a parent element. In the example below, only the first child of the <code>.parent</code> element is selected:</p>
    <pre><code>
&lt;div class="parent"&gt;
    &lt;div class="box"&gt;First Child&lt;/div&gt;
    &lt;div class="box"&gt;Second Child&lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
    .parent &gt; .box:first-child {
        background-color: #007bff;
    }
&lt;/style&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> The child combinator selector <code>.parent &gt; .box:first-child</code> selects only the first direct child of the <code>.parent</code> element and applies the specified styles.
    </div>

    <h3>Visualization</h3>
    <div class="parent">
        <div class="box">First Child</div>
        <div class="box">Second Child</div>
    </div>

    <h2>Example 3: Pseudo-Class Selectors</h2>
    <p>Pseudo-class selectors target elements in specific states or positions. Here, we use <code>:nth-child()</code>, <code>:nth-of-type()</code>, and <code>:first-of-type()</code> to style elements based on their order:</p>
    <pre><code>
&lt;div class="box"&gt;First Box&lt;/div&gt;
&lt;div class="box"&gt;Second Box&lt;/div&gt;
&lt;div class="box"&gt;Third Box&lt;/div&gt;

&lt;style&gt;
    .box:nth-child(2) {
        background-color: #ffc107;
    }

    .box:nth-of-type(odd) {
        background-color: #17a2b8;
    }

    .box:first-of-type {
        background-color: #dc3545;
    }
&lt;/style&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong>
        <ul>
            <li><code>:nth-child(2)</code> selects the second child in the parent and applies styles to it.</li>
            <li><code>:nth-of-type(odd)</code> selects elements based on their order within the group of elements of the same type (odd elements in this case).</li>
            <li><code>:first-of-type</code> targets the first element of its type within its parent.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="box">First Box</div>
    <div class="box">Second Box</div>
    <div class="box">Third Box</div>

    <h2>Example 4: Universal Selector</h2>
    <p>The universal selector (<code>*</code>) selects all elements on the page. This can be useful for applying a base style to all elements or resetting default styles:</p>
    <pre><code>
&lt;style&gt;
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
&lt;/style&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> The universal selector targets all elements on the page, resetting their margins and paddings and setting <code>box-sizing</code> to <code>border-box</code>.
    </div>

    <h2>Example 5: Grouping Selector</h2>
    <p>The grouping selector allows you to apply the same styles to multiple selectors by separating them with a comma:</p>
    <pre><code>
&lt;style&gt;
    h1, h2, p {
        color: #0056b3;
        font-family: Arial, sans-serif;
    }
&lt;/style&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> The grouping selector <code>h1, h2, p</code> applies the same styles (text color and font family) to all <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, and <code>&lt;p&gt;</code> elements.
    </div>

</body>
</html>
`;
break;
case "units":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Units Explained</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h2 {
            color: #0056b3;
        }
        .unit-example {
            padding: 10px;
            border: 2px solid #333;
            margin: 10px 0;
        }
        .px-example {
            width: 150px;
            height: 150px;
            background-color: #28a745;
        }
        .em-example {
            width: 10em;
            height: 10em;
            background-color: #ffc107;
        }
        .rem-example {
            width: 10rem;
            height: 10rem;
            background-color: #17a2b8;
        }
        .vh-example {
            width: 50vw;
            height: 50vh;
            background-color: #dc3545;
        }
        .percent-example {
            width: 50%;
            height: 50%;
            background-color: #6f42c1;
        }
        .ch-example {
            width: 20ch;
            height: 20ch;
            background-color: #007bff;
        }
    </style>
</head>
<body>

    <h1>CSS Units Explained</h1>

    <h2>What are CSS Units?</h2>
    <p>CSS units are measurements used to define the size of elements in web design. Different units allow for flexibility and responsiveness in layout design, catering to different devices and screen sizes.</p>

    <h2>Types of CSS Units</h2>

    <h3>1. Absolute Units</h3>
    <p>Absolute units are fixed and do not change based on other elements. Common absolute units include:</p>
    <ul>
        <li><strong>Pixels (px):</strong> A fixed size unit, commonly used in web design.</li>
        <li><strong>Points (pt):</strong> Primarily used in print media; 1pt is 1/72 of an inch.</li>
        <li><strong>Inches (in):</strong> Represents physical inches, often used in print styles.</li>
        <li><strong>Centimeters (cm):</strong> Represents physical centimeters, also used in print styles.</li>
        <li><strong>Millimeters (mm):</strong> Represents physical millimeters.</li>
    </ul>

    <div class="unit-example px-example">Width: 150px</div>
    <p>Example of an element with a width of 150px (absolute unit).</p>

    <h3>2. Relative Units</h3>
    <p>Relative units are based on the size of other elements or the viewport, allowing for responsive designs. Common relative units include:</p>
    <ul>
        <li><strong>Em (em):</strong> Relative to the font size of the element (1em equals the current font size).</li>
        <li><strong>Rem (rem):</strong> Relative to the font size of the root element (typically the <code>&lt;html&gt;</code> element).</li>
        <li><strong>Viewport Width (vw):</strong> 1vw equals 1% of the width of the viewport.</li>
        <li><strong>Viewport Height (vh):</strong> 1vh equals 1% of the height of the viewport.</li>
        <li><strong>Percentage (%):</strong> Relative to the parent element's size.</li>
        <li><strong>Character (ch):</strong> Relative to the width of the "0" (zero) character in the current font.</li>
    </ul>

    <div class="unit-example em-example">Width: 10em</div>
    <p>Example of an element with a width of 10em (relative to the font size).</p>

    <div class="unit-example rem-example">Width: 10rem</div>
    <p>Example of an element with a width of 10rem (relative to the root font size).</p>

    <div class="unit-example vh-example">Width: 50vw, Height: 50vh</div>
    <p>Example of an element with width as 50% of the viewport width and height as 50% of the viewport height.</p>

    <div class="unit-example percent-example">Width: 50%</div>
    <p>Example of an element with a width of 50% of its parent container.</p>

    <div class="unit-example ch-example">Width: 20ch</div>
    <p>Example of an element with a width of 20 characters.</p>

    <h2>Choosing the Right Units</h2>
    <p>Choosing the appropriate units depends on the design goals:</p>
    <ul>
        <li>Use <strong>px</strong> for fixed sizes that should not change.</li>
        <li>Use <strong>em</strong> or <strong>rem</strong> for scalable text and components.</li>
        <li>Use <strong>vw</strong> and <strong>vh</strong> for responsive layouts based on the viewport.</li>
        <li>Use <strong>%</strong> for flexible elements that should adapt to their parent.</li>
    </ul>

</body>
</html>
`;
break;
case "typography":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typography in CSS Explained</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1 {
            font-size: 2.5em;
            color: #0056b3;
        }
        h2 {
            font-size: 2em;
            color: #007bff;
        }
        h3 {
            font-size: 1.75em;
            color: #17a2b8;
        }
        p {
            font-size: 1em;
            line-height: 1.5;
            margin-bottom: 20px;
        }
        .example {
            padding: 10px;
            border: 2px solid #333;
            margin: 10px 0;
            background-color: #e9ecef;
        }
    </style>
</head>
<body>

    <h1>Typography in CSS Explained</h1>

    <h2>What is Typography in CSS?</h2>
    <p>Typography in CSS refers to the style and appearance of text on a web page. It encompasses various elements, including font selection, size, weight, spacing, and line height. Proper typography enhances readability and improves the overall aesthetic of web design.</p>

    <h2>Key Typography Properties</h2>

    <h3>1. Font Family</h3>
    <p>The <code>font-family</code> property specifies the typeface used for text. You can set a specific font or a fallback font stack.</p>
    <div class="example" style="font-family: 'Georgia', serif;">This text uses the Georgia font.</div>

    <h3>2. Font Size</h3>
    <p>The <code>font-size</code> property defines the size of the text. It can be set using different units such as <code>px</code>, <code>em</code>, <code>rem</code>, and <code>%</code>.</p>
    <div class="example" style="font-size: 20px;">This text is 20 pixels in size.</div>

    <h3>3. Font Weight</h3>
    <p>The <code>font-weight</code> property specifies the thickness of the font. Common values are <code>normal</code>, <code>bold</code>, <code>bolder</code>, and numerical values (100 to 900).</p>
    <div class="example" style="font-weight: bold;">This text is bold.</div>

    <h3>4. Line Height</h3>
    <p>The <code>line-height</code> property controls the space between lines of text, which can significantly impact readability.</p>
    <div class="example" style="line-height: 1.5;">This text has a line height of 1.5, creating more space between lines.</div>

    <h3>5. Text Align</h3>
    <p>The <code>text-align</code> property defines the alignment of the text within its container. Possible values include <code>left</code>, <code>right</code>, <code>center</code>, and <code>justify</code>.</p>
    <div class="example" style="text-align: center;">This text is centered.</div>

    <h3>6. Text Decoration</h3>
    <p>The <code>text-decoration</code> property adds decoration to text, such as underlines, overlines, or strikethroughs.</p>
    <div class="example" style="text-decoration: underline;">This text has an underline.</div>

    <h2>Choosing Fonts</h2>
    <p>When selecting fonts, consider using web-safe fonts (like Arial, Times New Roman) or web fonts (like Google Fonts) to ensure consistency across devices.</p>
    
    <h2>Example of Typography in Action</h2>
    <h3>CSS Example:</h3>
    <pre>
        <code>
        body {
            font-family: 'Helvetica', sans-serif;
            font-size: 16px;
            line-height: 1.6;
            color: #333;
        }
        h1 {
            font-size: 2.5em;
            font-weight: bold;
            color: #0056b3;
        }
        p {
            font-size: 1em;
            text-align: justify;
        }
        </code>
    </pre>
    
</body>
</html>
`;
break;
case 'colors':
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Colors and Backgrounds Explained</title>
    <style>
        /* Basic styling for the code display */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4; /* Light gray background for the body */
        }
        pre {
            background-color: #fff; /* White background for code blocks */
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto;
        }
        code {
            color: #333;
        }
        h1, h2 {
            color: #0056b3; /* Dark blue for headings */
        }
        .color-box, .background-box {
            height: 100px;
            width: 150px; /* Adjusted width for consistency */
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            margin: 10px;
            border-radius: 5px; /* Rounded corners */
            text-align: center;
        }
        .visualization {
            display: flex;
            flex-wrap: wrap; /* Allow wrapping of boxes */
            gap: 10px; /* Space between boxes */
        }
        .named { background-color: red; }
        .hex { background-color: #ff5733; }
        .rgb { background-color: rgb(0, 123, 255); }
        .rgba { background-color: rgba(0, 123, 255, 0.5); color: black; } /* Black text for better visibility */
        .hsl { background-color: hsl(120, 100%, 50%); }
        .hsla { background-color: hsla(120, 100%, 50%, 0.5); color: black; }
        .background-box {
            background-color: lightblue;
            color: black;
            border: 2px solid #007bff;
        }
        .gradient-box {
            height: 100px; /* Consistent height */
            width: 150px; /* Consistent width */
            background: linear-gradient(to right, #ff7e5f, #feb47b);
            color: black;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px; /* Rounded corners */
        }
    </style>
</head>
<body>

    <h1>CSS Colors and Backgrounds Explained</h1>

    <h2>Understanding Colors in CSS</h2>
    <p>Colors can be defined in CSS using different formats, including named colors, HEX, RGB, RGBA, HSL, and HSLA.</p>
    <ul>
        <li><strong>Named Colors:</strong> Colors like <code>red</code>, <code>blue</code>, etc.</li>
        <li><strong>HEX:</strong> A six-digit code representing the color (e.g., <code>#ff5733</code>).</li>
        <li><strong>RGB:</strong> Specifies colors using the red, green, and blue color model (e.g., <code>rgb(255, 87, 51)</code>).</li>
        <li><strong>RGBA:</strong> Similar to RGB, but includes an alpha channel for transparency (e.g., <code>rgba(255, 87, 51, 0.5)</code>).</li>
        <li><strong>HSL:</strong> Specifies colors based on hue, saturation, and lightness (e.g., <code>hsl(9, 100%, 60%)</code>).</li>
        <li><strong>HSLA:</strong> Similar to HSL, but includes an alpha channel for transparency (e.g., <code>hsla(9, 100%, 60%, 0.5)</code>).</li>
    </ul>

    <h2>Example 1: Using Different Color Formats</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Color Example&lt;/title&gt;
    &lt;style&gt;
        body {
            background-color: #f4f4f4; /* Light gray background */
        }
        .color-box {
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            margin: 10px;
        }
        .named { background-color: red; }
        .hex { background-color: #ff5733; }
        .rgb { background-color: rgb(0, 123, 255); }
        .rgba { background-color: rgba(0, 123, 255, 0.5); color: black; }
        .hsl { background-color: hsl(120, 100%, 50%); }
        .hsla { background-color: hsla(120, 100%, 50%, 0.5); color: black; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Different Color Formats&lt;/h1&gt;
    &lt;div class="color-box named"&gt;Named Color: Red&lt;/div&gt;
    &lt;div class="color-box hex"&gt;HEX Color: #ff5733&lt;/div&gt;
    &lt;div class="color-box rgb"&gt;RGB Color: rgb(0, 123, 255)&lt;/div&gt;
    &lt;div class="color-box rgba"&gt;RGBA Color: rgba(0, 123, 255, 0.5)&lt;/div&gt;
    &lt;div class="color-box hsl"&gt;HSL Color: hsl(120, 100%, 50%)&lt;/div&gt;
    &lt;div class="color-box hsla"&gt;HSLA Color: hsla(120, 100%, 50%, 0.5)&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example demonstrates various color formats in CSS:
        <ul>
            <li>Each color box uses a different method to define the background color.</li>
            <li>The text inside the boxes shows the format used.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="visualization">
        <div class="color-box named">Named Color:<br>Red</div>
        <div class="color-box hex">HEX Color:<br>#ff5733</div>
        <div class="color-box rgb">RGB Color:<br>rgb(0, 123, 255)</div>
        <div class="color-box rgba">RGBA Color:<br>rgba(0, 123, 255, 0.5)</div>
        <div class="color-box hsl">HSL Color:<br>hsl(120, 100%, 50%)</div>
        <div class="color-box hsla">HSLA Color:<br>hsla(120, 100%, 50%, 0.5)</div>
    </div>

    <h2>Understanding Backgrounds in CSS</h2>
    <p>CSS provides several properties to control the background of elements:</p>
    <ul>
        <li><strong>background-color:</strong> Sets the background color of an element.</li>
        <li><strong>background-image:</strong> Sets an image as the background.</li>
        <li><strong>background-repeat:</strong> Controls the repetition of the background image.</li>
        <li><strong>background-position:</strong> Sets the starting position of a background image.</li>
        <li><strong>background-size:</strong> Defines the size of the background image.</li>
        <li><strong>background:</strong> A shorthand property that allows you to set all background properties at once.</li>
    </ul>
    <p>Using these properties, you can create visually appealing elements that enhance the user experience on your webpage.</p>

    <h2>Example 2: Using Background Properties</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Background Example&lt;/title&gt;
    &lt;style&gt;
        body {
            background-color: #f4f4f4; /* Light gray background */
        }
        .background-box {
            height: 150px;
            margin: 10px 0;
            background-color: lightblue;
            border: 2px solid #007bff;
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        .gradient-box {
            height: 150px;
            background: linear-gradient(to right, #ff7e5f, #feb47b);
            color: black;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Background Properties&lt;/h1&gt;
    &lt;div class="background-box"&gt;Background Color: Light Blue&lt;/div&gt;
    &lt;div class="gradient-box"&gt;Linear Gradient Background&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <div class="description">
        <strong>Explanation:</strong> This example illustrates how to use different background properties in CSS:
        <ul>
            <li>The first box shows a solid background color.</li>
            <li>The second box shows a linear gradient background.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="visualization">
        <div class="background-box">Background Color:<br>Light Blue</div>
        <div class="gradient-box">Linear Gradient Background</div>
    </div>

</body>
</html>
`;
break;
case "shadows":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Shadows Explained</title>
    <style>
        /* Basic styling for the body */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4; /* Light gray background for the body */
        }
        pre {
            background-color: #fff; /* White background for code blocks */
            border: 1px solid #ccc; /* Light gray border around code blocks */
            padding: 10px; /* Padding inside the code block */
            overflow-x: auto; /* Allow horizontal scrolling for long lines */
        }
        code {
            color: #333; /* Dark gray color for code text */
        }
        h1, h2 {
            color: #0056b3; /* Dark blue color for headings */
        }
        .shadow-box {
            height: 100px; /* Fixed height for shadow boxes */
            width: 150px; /* Fixed width for shadow boxes */
            display: flex; /* Flexbox for centering content */
            align-items: center; /* Center items vertically */
            justify-content: center; /* Center items horizontally */
            color: white; /* White text color */
            font-weight: bold; /* Bold text */
            margin: 10px; /* Margin around boxes */
            border-radius: 5px; /* Rounded corners for the boxes */
            text-align: center; /* Center text alignment */
        }
        .visualization {
            display: flex; /* Flexbox for visualization layout */
            flex-wrap: wrap; /* Allow boxes to wrap onto the next line */
            gap: 10px; /* Space between boxes */
        }
        .box-shadow {
            background-color: #007bff; /* Blue background for box shadow example */
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); /* Standard box shadow */
        }
        .text-shadow {
            background-color: #28a745; /* Green background for text shadow example */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Text shadow effect */
        }
    </style>
</head>
<body>

    <h1>CSS Shadows Explained</h1>

    <h2>Understanding Shadows in CSS</h2>
    <p>CSS allows you to create shadows for both boxes and text using the following properties:</p>
    <ul>
        <li><strong>box-shadow:</strong> Adds shadow effects around an element's frame.</li>
        <li><strong>text-shadow:</strong> Applies shadow effects to text, giving it a three-dimensional appearance.</li>
    </ul>

    <h2>Example 1: Using Box Shadow</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Box Shadow Example&lt;/title&gt;
    &lt;style&gt;
        .box-shadow {
            height: 100px; /* Fixed height for the box */
            width: 150px; /* Fixed width for the box */
            background-color: #007bff; /* Background color of the box (blue) */
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); /* Creates a shadow effect:
                                                            - 5px horizontal offset (right)
                                                            - 5px vertical offset (down)
                                                            - 10px blur radius (softness of the shadow)
                                                            - rgba(0, 0, 0, 0.5) color (semi-transparent black) */
            display: flex; /* Use flexbox for centering content */
            align-items: center; /* Center items vertically within the box */
            justify-content: center; /* Center items horizontally within the box */
            color: white; /* Text color (white) */
            font-weight: bold; /* Bold text */
            border-radius: 5px; /* Rounded corners for the box */
            margin: 10px; /* Margin around the box */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Box Shadow&lt;/h1&gt;
    &lt;div class="box-shadow"&gt;Box Shadow&lt;/div&gt; <!-- Box with shadow effect -->

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>

    <div class="description">
        <strong>Explanation:</strong> 
        This example demonstrates how to use the <code>box-shadow</code> property to create a shadow effect around a box. 
        The <code>box-shadow</code> property takes several values:
        <ul>
            <li><strong>Horizontal Offset:</strong> <code>5px</code> - This value shifts the shadow to the right. Positive values move the shadow to the right, while negative values move it to the left.</li>
            <li><strong>Vertical Offset:</strong> <code>5px</code> - This value shifts the shadow downward. Positive values move the shadow down, while negative values move it up.</li>
            <li><strong>Blur Radius:</strong> <code>10px</code> - This value determines how blurry the shadow will be. A larger value results in a softer, more diffused shadow, while a value of <code>0</code> gives a sharp shadow.</li>
            <li><strong>Color:</strong> <code>rgba(0, 0, 0, 0.5)</code> - This value specifies the color of the shadow. Using RGBA allows for transparency, with the last value (0.5) indicating the opacity of the shadow.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="visualization">
        <div class="box-shadow">Box Shadow</div> <!-- Visual representation of box shadow -->
    </div>

    <h2>Example 2: Using Text Shadow</h2>
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Text Shadow Example&lt;/title&gt;
    &lt;style&gt;
        .text-shadow {
            background-color: #28a745; /* Background color of the box (green) */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Creates a shadow effect:
                                                            - 2px horizontal offset (right)
                                                            - 2px vertical offset (down)
                                                            - 4px blur radius (softness of the shadow)
                                                            - rgba(0, 0, 0, 0.6) color (semi-transparent black) */
            height: 100px; /* Fixed height for the box */
            width: 150px; /* Fixed width for the box */
            display: flex; /* Use flexbox for centering content */
            align-items: center; /* Center items vertically within the box */
            justify-content: center; /* Center items horizontally within the box */
            color: white; /* Text color (white) */
            font-weight: bold; /* Bold text */
            border-radius: 5px; /* Rounded corners for the box */
            margin: 10px; /* Margin around the box */
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Text Shadow&lt;/h1&gt;
    &lt;div class="text-shadow"&gt;Text Shadow&lt;/div&gt; <!-- Box with text shadow effect -->

&lt;/body&gt;
&lt;/html&gt;
    </code></pre>

    <div class="description">
        <strong>Explanation:</strong> 
        This example illustrates how to use the <code>text-shadow</code> property to create a shadow effect behind the text. 
        The <code>text-shadow</code> property also takes several values:
        <ul>
            <li><strong>Horizontal Offset:</strong> <code>2px</code> - This value shifts the shadow to the right of the text.</li>
            <li><strong>Vertical Offset:</strong> <code>2px</code> - This value shifts the shadow below the text.</li>
            <li><strong>Blur Radius:</strong> <code>4px</code> - This value determines the softness of the shadow; a larger number results in a more diffused shadow.</li>
            <li><strong>Color:</strong> <code>rgba(0, 0, 0, 0.6)</code> - This value specifies the color of the text shadow, allowing for transparency.</li>
        </ul>
    </div>

    <h3>Visualization</h3>
    <div class="visualization">
        <div class="text-shadow">Text Shadow</div> <!-- Visual representation of text shadow -->
    </div>

</body>
</html>

`;
break;
case "frameworks":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Frameworks Explained</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        pre {
            background-color: #f4f4f4;
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto;
        }
        code {
            color: #333;
        }
        h2 {
            color: #0056b3;
        }
        .framework {
            padding: 20px;
            margin: 10px 0;
            border: 2px solid blue;
            background-color: #e6f7ff;
        }
        .example {
            padding: 10px;
            margin: 5px;
            background-color: #cce5ff;
            border: 1px solid #007bff;
            text-align: center;
        }
        .visualization {
            display: flex;
            gap: 10px;
            margin: 20px 0;
        }
        .visualization div {
            flex: 1;
            border: 1px dashed #000;
            padding: 20px;
            text-align: center;
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>

    <h1>CSS Frameworks Explained</h1>

    <h2>What is a CSS Framework?</h2>
    <p>A CSS framework is a pre-prepared library that is meant to be used as a base for starting your web projects. It provides a collection of CSS styles and classes, making it easier to build responsive and visually appealing web applications without having to write all the CSS from scratch.</p>
    <ul>
        <li><strong>Predefined Styles:</strong> CSS frameworks come with a set of predefined styles for common HTML elements.</li>
        <li><strong>Responsive Design:</strong> Many frameworks include grid systems and responsive utilities to create layouts that adapt to various screen sizes.</li>
        <li><strong>Customizable:</strong> Most frameworks allow you to customize the styles according to your project's needs.</li>
    </ul>

    <h2>Example 1: Using Bootstrap</h2>
    <div class="framework">
        <h3>Bootstrap</h3>
        <p>Bootstrap is a popular CSS framework that provides a responsive grid system, pre-designed components, and utility classes. You can easily style your web pages by applying Bootstrap's classes to your HTML elements.</p>
        
        <p>To use Bootstrap, include the following CDN link in your HTML file:</p>
        <pre><code>
&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"&gt;
        </code></pre>
        
        <p>Here’s a simple example of styling with Bootstrap:</p>
        <pre><code>
&lt;div class="container"&gt;
    &lt;h1 class="text-center"&gt;Hello, Bootstrap!&lt;/h1&gt;
    &lt;button class="btn btn-primary"&gt;Click Me&lt;/button&gt;
&lt;/div&gt;
        </code></pre>
        
        <div class="visualization">
            <div>
                <strong>Visualization:</strong>
                <h1 class="text-center">Hello, Bootstrap!</h1>
                <button class="btn btn-primary">Click Me</button>
            </div>
        </div>
        
        <p>**How to Style with Bootstrap**: You can apply various classes like <code>container</code> for responsive layouts, <code>text-center</code> for center-aligned text, and <code>btn btn-primary</code> for styled buttons. Bootstrap also offers numerous components, such as cards, modals, and navigation bars, that can enhance the styling of your web pages.</p>
    </div>

    <h2>Example 2: Using Tailwind CSS</h2>
    <div class="framework">
        <h3>Tailwind CSS</h3>
        <p>Tailwind CSS is a utility-first CSS framework that allows you to create custom designs without having to leave your HTML. It provides a set of utility classes that you can use to style your components directly in your HTML markup.</p>
        
        <p>To use Tailwind CSS, include the following CDN link in your HTML file:</p>
        <pre><code>
&lt;link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"&gt;
        </code></pre>
        
        <p>Here’s a simple example of styling with Tailwind CSS:</p>
        <pre><code>
&lt;div class="flex flex-col items-center"&gt;
    &lt;h1 class="text-3xl font-bold"&gt;Hello, Tailwind CSS!&lt;/h1&gt;
    &lt;button class="bg-blue-500 text-white font-bold py-2 px-4 rounded"&gt;Click Me&lt;/button&gt;
&lt;/div&gt;
        </code></pre>
        
        <div class="visualization">
            <div>
                <strong>Visualization:</strong>
                <div class="flex flex-col items-center">
                    <h1 class="text-3xl font-bold">Hello, Tailwind CSS!</h1>
                    <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">Click Me</button>
                </div>
            </div>
        </div>
        
        <p>**How to Style with Tailwind CSS**: Use utility classes like <code>flex</code> for layout, <code>text-3xl</code> for font size, and <code>bg-blue-500</code> for background color. Tailwind CSS encourages a more modular approach to styling, allowing you to apply multiple classes directly to elements to achieve the desired design.</p>
    </div>

    <h2>Example 3: Using Bulma</h2>
    <div class="framework">
        <h3>Bulma</h3>
        <p>Bulma is a modern CSS framework based on Flexbox, which makes it easy to create responsive layouts and components. It uses simple class names and provides a clean syntax for styling.</p>
        
        <p>To use Bulma, include the following CDN link in your HTML file:</p>
        <pre><code>
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css"&gt;
        </code></pre>
        
        <p>Here’s a simple example of styling with Bulma:</p>
        <pre><code>
&lt;div class="container"&gt;
    &lt;h1 class="title has-text-centered"&gt;Hello, Bulma!&lt;/h1&gt;
    &lt;button class="button is-primary"&gt;Click Me&lt;/button&gt;
&lt;/div&gt;
        </code></pre>
        
        <div class="visualization">
            <div>
                <strong>Visualization:</strong>
                <div class="container">
                    <h1 class="title has-text-centered">Hello, Bulma!</h1>
                    <button class="button is-primary">Click Me</button>
                </div>
            </div>
        </div>
        
        <p>**How to Style with Bulma**: Apply classes like <code>container</code> for layout, <code>title</code> for headings, and <code>button is-primary</code> for styled buttons. Bulma's approach is intuitive, allowing you to create responsive designs using Flexbox without needing to write any custom CSS.</p>
    </div>

</body>
</html>
`;
break;
case "reset":
    content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Normalization</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1 {
            color: blue;
            margin: 20px 0;
        }
        p {
            margin: 10px 0;
        }
        pre {
            background-color: #eee;
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>

    <h1>Understanding CSS Normalization</h1>
    <p>CSS normalization is the practice of using a stylesheet (like <code>normalize.css</code>) to create a consistent look and feel across different web browsers. Each browser has its default styles for HTML elements, which can lead to inconsistencies when displaying the same HTML across different platforms. Normalization helps to reduce these differences.</p>

    <h2>Benefits of CSS Normalization</h2>
    <ul>
        <li><strong>Consistency:</strong> Ensures that elements appear more uniform across browsers.</li>
        <li><strong>Improved Accessibility:</strong> By standardizing styles, normalized layouts can improve accessibility features.</li>
        <li><strong>Better Foundation:</strong> Provides a clean slate for custom styles, making it easier to develop a coherent design.</li>
    </ul>

    <h2>How to Use Normalize.css</h2>
    <p>To use <code>normalize.css</code> in your HTML, you can include it in your <code>&lt;head&gt;</code> section as follows:</p>
    <pre>&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"&gt;</pre>

    <h2>Example 1: Basic HTML Structure Without Normalization</h2>
    <p>Below is a simple HTML structure without normalization:</p>
    <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Without Normalization&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: blue;
            margin: 20px 0;
        }
        p {
            margin: 10px 0;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Title Without Normalization&lt;/h1&gt;
    &lt;p&gt;This is a paragraph. Different browsers may render this differently.&lt;/p&gt;
    &lt;p&gt;Notice the spacing and font size variations between browsers.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;
    </pre>

    <h2>Visualization of Example 1</h2>
    <p>In this example, different browsers may render the spacing and font sizes differently.</p>

    <h2>Example 2: HTML Structure With Normalize.css</h2>
    <p>Now let’s see how to normalize styles using <code>normalize.css</code>:</p>
    <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;With Normalize.css&lt;/title&gt;
    &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: blue;
            margin: 20px 0;
        }
        p {
            margin: 10px 0;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;Title With Normalize.css&lt;/h1&gt;
    &lt;p&gt;This is a paragraph. Notice how the spacing and styles are more consistent across browsers.&lt;/p&gt;
    &lt;p&gt;The visual appearance should be uniform now.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;
    </pre>

    <h2>Visualization of Example 2</h2>
    <p>In this example, the fonts and margins should look more alike across different browsers, reducing visual discrepancies.</p>

    <h2>Key Adjustments Made by Normalize.css</h2>
    <ul>
        <li><strong>Headings:</strong> Normalizes margins and font sizes.</li>
        <li><strong>Paragraphs:</strong> Ensures consistent spacing.</li>
        <li><strong>Lists:</strong> Resets default list styling to maintain uniformity.</li>
        <li><strong>Forms:</strong> Standardizes input elements for consistency.</li>
    </ul>

    <h2>How to Implement Normalization in Your Projects</h2>
    <p>To ensure that your webpages display consistently across browsers, always include <code>normalize.css</code> in your project. By providing a clean slate, you can develop your styles with confidence that they will look the same in every browser.</p>

</body>
</html>
`;
break;
    }

    document.getElementById('contentArea').innerHTML = content;
}
