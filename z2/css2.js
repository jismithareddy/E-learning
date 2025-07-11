function loadContent(topic) {
    let content = '';

    switch (topic) {


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
}

document.getElementById('contentArea').innerHTML = content;
}