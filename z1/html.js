function loadContent(topic) {
    const contentArea = document.getElementById('contentArea');
    let content = '';

    switch (topic) {
        case 'intro':
            content = `<h3 class="heading">Introduction to HTML</h3>
    <div class="desc">
        HTML (HyperText Markup Language) is the standard markup language used to create web pages. It's the backbone of a website, providing the structure and content that the web browser renders to the user.
        <br> <br>
    </div>

    <h3 class="heading">History of HTML</h3>
    <div class="desc">
        HTML was first proposed in 1989 by Tim Berners-Lee, the inventor of the World Wide Web. The first publicly available description of HTML was published in 1991. Since then, HTML has evolved through several versions, with HTML5 being the current standard.
    </div>`;
            break;
            case "component":
                content=`<h3>Basic HTML Components</h3>
        <ol>
            <li><pre>Elements:</pre> HTML consists of elements, represented by tags (<>). Tags wrap around content and apply meaning to it.</li>
            <li><pre>Tags:</pre> Opening tag (<>) and closing tag (</>) surround content.</li>
            <li><pre>Attributes:</pre> Provide additional information about an element (e.g., href for links).</li>
            <li><pre>Nested elements:</pre> Elements can contain other elements.</li>
        </ol>
    </div>

    <br><br>`
    break;
    case "structure":
        content=`<h3>Basic Structure of HTML</h3>
    <div class="code">
        <pre>
            &lt;!DOCTYPE html&gt;
            &lt;html lang="en"&gt;
            &lt;head&gt;
                &lt;meta charset="UTF-8"&gt;
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                &lt;title&gt;Sample Page&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
            &lt;!-- This is a comment in HTML --&gt;
            &lt;!-- inside of body you can write main code --&gt;
            &lt;/body&gt;
            &lt;/html&gt;
        </pre>
    </div>

    <div class="desc">
        <ol>
            <li>
                <code>&lt;!DOCTYPE html&gt;</code>
                 <br>
                <strong>Purpose:</strong> Declares the document type and version of HTML (HTML5 in this case). This helps browsers understand how to interpret the document.
                <br><strong>Explanation:</strong> It must always be the first line in an HTML document, ensuring proper rendering by modern browsers.
            </li>

            <li>
                <code>&lt;html lang="en"&gt;</code>
                <br>
                <strong>Purpose:</strong> Defines the root of the HTML document.
                <br><strong>Attributes:</strong> <code>lang="en"</code> specifies the language of the content. This helps with accessibility and search engine optimization (SEO).
                <br><strong>Explanation:</strong> All HTML code is enclosed within the <code>&lt;html&gt;</code> tag. The <code>lang</code> attribute helps tools like screen readers and search engines understand the language of the document.
            </li>

            <li>
                <code>&lt;head&gt;</code>
                <br>
                <strong>Purpose:</strong> Contains metadata (information about the document) that is not displayed on the page itself but is crucial for how browsers and search engines handle the document.
                <br><strong>Explanation:</strong> The content inside the <code>&lt;head&gt;</code> tag typically includes links to stylesheets, meta tags, and the document’s title.
            </li>

            <li>
                <code>&lt;title&gt;Sample Page&lt;/title&gt;</code>
                <br>
                <strong>Purpose:</strong> Sets the title of the web page that appears in the browser tab or window.
                <br><strong>Explanation:</strong> The <code>&lt;title&gt;</code> is displayed in the browser’s title bar or tab and is also used as the title for search engine results. It's critical for SEO and user experience.
            </li>

            <li>
                <code>&lt;body&gt;</code>
                <br>
                <strong>Purpose:</strong> Contains the content of the HTML document that will be visible to users in the browser.
                <br><strong>Explanation:</strong> Everything that appears on the webpage (text, images, links, etc.) goes inside the <code>&lt;body&gt;</code> tag. The content within this tag is rendered by the browser.
            </li>

            <li>
                <code>&lt;!-- This is a comment in HTML --&gt;</code>
                <br>
                <strong>Purpose:</strong> Adds a comment in the HTML code that will not be displayed on the web page.
                <br><strong>Explanation:</strong> Comments are used by developers to annotate or explain the code. They are helpful for documentation, reminders, or leaving notes for other developers.
                <br><strong>Usage:</strong> <code>&lt;!-- comment --&gt;</code> is the syntax for writing comments in HTML.
            </li>

            <li>
                <code>&lt;/body&gt;</code>
                <strong>Purpose:</strong> Closes the <code>&lt;body&gt;</code> tag.
                <br><strong>Explanation:</strong> Marks the end of the body section of the HTML document. All the visible content should be written before this tag.
            </li>

            <li>
                <code>&lt;/html&gt;</code>
                <strong>Purpose:</strong> Closes the <code>&lt;html&gt;</code> tag.
                <br><strong>Explanation:</strong> This marks the end of the HTML document. After this tag, no more content should be written.
            </li>
        </ol>
    </div>`
    break
        case 'elements':
            content = `<<h1>HTML Headings</h1>
<p>Headings are used to define the structure and hierarchy of content. HTML has six levels of headings, from <code>
    &lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important).</p>

<pre><code>&lt;h1&gt;This is a Level 1 Heading&lt;/h1&gt;
&lt;h2&gt;This is a Level 2 Heading&lt;/h2&gt;
&lt;h3&gt;This is a Level 3 Heading&lt;/h3&gt;</code></pre>
<br>
<br>
<br>
<h1>HTML Paragraphs</h1>
<p>The <code>&lt;p&gt;</code> tag defines a paragraph of text. Browsers automatically add space before and after paragraphs.</p>
<pre><code>&lt;p&gt;This is the first paragraph of text. It introduces the topic.&lt;/p&gt;
&lt;p&gt;This is the second paragraph, providing more details about the topic.&lt;/p&gt;</code></pre>
<br>
<br>
<br>

<h1>HTML Images</h1>
<p>The <code>&lt;img&gt;</code> tag is used to embed images in a webpage. It requires the <code>src</code> attribute to specify the image source and the <code>alt</code> attribute for accessibility.</p>
<pre><code>&lt;img src="image.jpg" alt="A beautiful scenery"&gt;
&lt;img src="https://via.placeholder.com/150" alt="Placeholder Image"&gt;</code></pre>
<br>
<br>
<br>
<h1>HTML Links</h1>
<p>The <code>&lt;a&gt;</code> tag is used to create hyperlinks that link to other pages or resources.</p>
<pre><code>&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;
&lt;a href="#section1"&gt;Go to Section 1&lt;/a&gt;
&lt;a href="mailto:someone@example.com"&gt;Email Us&lt;/a&gt;</code></pre>
<br>
<p>Links: This document provides examples of using the &lt;a&gt; tag to create hyperlinks, including links to external websites, sections within the same page, and email links.</p>
<br>
<br>
<h1>HTML Lists</h1>
<p>Lists can be ordered (<code>&lt;ol&gt;</code>) or unordered (<code>&lt;ul&gt;</code>), and they contain list items (<code>&lt;li&gt;</code>).</p>
<pre><code>&lt;ul&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
    &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
    &lt;li&gt;First item&lt;/li&gt;
    &lt;li&gt;Second item&lt;/li&gt;
    &lt;li&gt;Third item&lt;/li&gt;
&lt;/ol&gt;</code></pre>
<br>
<p>Lists: This example explains the two types of lists: ordered and unordered. It shows how to create lists using &lt;ol&gt; and &lt;ul&gt;, with list items defined by&lt;li&gt;&lt;/li&gt;</p>
<br>`;
            break;
            case "block&inline":
                content=`<div class="content">
        <h2>Block Elements</h2>
        <p><strong>Definition:</strong> Block elements take up the full width available, and they always start on a new line. They are primarily used for larger chunks of content and layout purposes.</p>
        
        <h3>Characteristics:</h3>
        <ul>
            <li>Start on a new line.</li>
            <li>Take up the entire width of the parent container (if not specified otherwise with CSS).</li>
            <li>Can contain other block elements and inline elements.</li>
            <li>Typically used for structural purposes in HTML.</li>
        </ul>

        <h3>Examples of Block Elements:</h3>
        <p>&lt;div&gt;, &lt;p&gt;, &lt;h1&gt;, &lt;h2&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;, &lt;article&gt;, &lt;section&gt;, &lt;footer&gt;, &lt;header&gt;, &lt;blockquote&gt;, etc.</p>

        <h2>Inline Elements</h2>
        <p><strong>Definition:</strong> Inline elements do not start on a new line and only take up as much width as their content. They are primarily used for formatting smaller portions of text or other elements inside block elements.</p>
        
        <h3>Characteristics:</h3>
        <ul>
            <li>Do not start on a new line.</li>
            <li>Only take up as much width as necessary to display their content.</li>
            <li>Can contain only other inline elements or text.</li>
            <li>Used for formatting or embedding elements within text.</li>
        </ul>

        <h3>Examples of Inline Elements:</h3>
        <p>&lt;span&gt;, &lt;a&gt;, &lt;img&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;input&gt;, &lt;label&gt;, &lt;b&gt;, &lt;i&gt;, &lt;abbr&gt;, etc.</p>

        <h2>Comparison Between Block and Inline Elements</h2>
        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Block Elements</th>
                    <th>Inline Elements</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Layout Behavior</strong></td>
                    <td>Starts on a new line</td>
                    <td>Does not start on a new line</td>
                </tr>
                <tr>
                    <td><strong>Width</strong></td>
                    <td>Takes up the full width of the parent container</td>
                    <td>Only takes up as much width as needed to display the content</td>
                </tr>
                <tr>
                    <td><strong>Content</strong></td>
                    <td>Can contain both block and inline elements</td>
                    <td>Can only contain inline elements or text</td>
                </tr>
                <tr>
                    <td><strong>Use Cases</strong></td>
                    <td>Used for structuring large parts of the document</td>
                    <td>Used for styling or embedding content within text</td>
                </tr>
            </tbody>
        </table>

        <h2>Code Example</h2>
        <pre><code>
&lt;!-- Example of Block Elements --&gt;
&lt;div&gt;
    &lt;h1&gt;This is a heading (block element)&lt;/h1&gt;
    &lt;p&gt;This is a paragraph (block element). It takes the full width of the container.&lt;/p&gt;
&lt;/div&gt;

&lt;!-- Example of Inline Elements --&gt;
&lt;p&gt;This is a paragraph with &lt;strong&gt;bold text&lt;/strong&gt; and &lt;a href="#"&gt;a link&lt;/a&gt; (inline elements).&lt;/p&gt;
        </code></pre>
    </div>
    <div class="code-description">
        <h2>Block Element Code Example</h2>
        <p>This example shows the code for block elements:</p>
        <pre><code>&lt;div class="block"&gt;
    This is a block element (div).
&lt;/div&gt;

&lt;p class="block"&gt;
    This is a block element (p).
&lt;/p&gt;
        </code></pre>
    </div>

    <!-- Code Display Example for Inline Elements -->
    <div class="code-description">
        <h2>Inline Element Code Example</h2>
        <p>This example shows the code for inline elements:</p>
        <pre><code>&lt;span class="inline"&gt;
    This is an inline element (span).
&lt;/span&gt;

&lt;span class="inline"&gt;
    Another inline element (span).
&lt;/span&gt;
        </code></pre>
    </div>

    <!-- Visual Example Section -->
    <h2>Visual Example: Block vs Inline Elements</h2>
    <div class="block">
        This is a block element (&lt;div&gt;). Block elements take up the full width available and start on a new line.
    </div>

    <p class="block">
        This is another block element (&lt;p&gt;). It also starts on a new line and takes up the full width.
    </p>

    <p>
        <span class="inline">This is an inline element (&lt;span&gt;).</span>
        <span class="inline">Another inline element (&lt;span&gt;) staying on the same line.</span>
    </p>`
    break;
        case 'attributes':
            content = ` <h1>HTML Attributes</h1>
    <p>HTML attributes provide additional information about HTML elements. They are defined within the opening tag and come in name/value pairs.</p>

    <h1>Common HTML Attributes and Their Usage</h1>

    <!-- ID Attribute -->
    <div class="code-description">
        <h2>ID Attribute</h2>
        <pre><code>&lt;h1 id="header"&gt;This is a Heading&lt;/h1&gt;</code></pre>
        <p class="description">The <strong>id</strong> attribute specifies a unique identifier for an HTML element. It is used for styling and scripting.</p>
    </div>

    <!-- Class Attribute -->
    <div class="code-description">
        <h2>Class Attribute</h2>
        <pre><code>&lt;div class="main-content"&gt;Main Content Here&lt;/div&gt;</code></pre>
        <p class="description">The <strong>class</strong> attribute assigns one or more class names to an element for styling with CSS or manipulation with JavaScript.</p>
    </div>

    <!-- Href Attribute -->
    <div class="code-description">
        <h2>Href Attribute</h2>
        <pre><code>&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;</code></pre>
        <p class="description">The <strong>href</strong> attribute specifies the destination URL of a link (used in &lt;a&gt; elements).</p>
    </div>

    <!-- Src Attribute -->
    <div class="code-description">
        <h2>Src Attribute</h2>
        <pre><code>&lt;img src="image.jpg" alt="Description of image"&gt;</code></pre>
        <p class="description">The <strong>src</strong> attribute specifies the file path of an image (or other media) used in media elements like &lt;img&gt; and &lt;iframe&gt;.</p>
    </div>

    <!-- Alt Attribute -->
    <div class="code-description">
        <h2>Alt Attribute</h2>
        <pre><code>&lt;img src="image.jpg" alt="A beautiful scenery"&gt;</code></pre>
        <p class="description">The <strong>alt</strong> attribute provides alternative text for an image in case it cannot be displayed.</p>
    </div>

    <!-- Style Attribute -->
    <div class="code-description">
        <h2>Style Attribute</h2>
        <pre><code>&lt;p style="color: red; font-size: 20px;"&gt;This is a red paragraph.&lt;/p&gt;</code></pre>
        <p class="description">The <strong>style</strong> attribute is used for applying inline CSS styles to a specific element.</p>
    </div>

    <!-- Title Attribute -->
    <div class="code-description">
        <h2>Title Attribute</h2>
        <pre><code>&lt;a href="https://www.example.com" title="Click to visit Example"&gt;Visit Example&lt;/a&gt;</code></pre>
        <p class="description">The <strong>title</strong> attribute provides additional information about an element, often displayed as a tooltip.</p>
    </div>

    <!-- Disabled Attribute -->
    <div class="code-description">
        <h2>Disabled Attribute</h2>
        <pre><code>&lt;button disabled&gt;Submit&lt;/button&gt;</code></pre>
        <p class="description">The <strong>disabled</strong> attribute is used to disable form elements such as buttons or input fields.</p>
    </div>

    <!-- Placeholder Attribute -->
    <div class="code-description">
        <h2>Placeholder Attribute</h2>
        <pre><code>&lt;input type="text" placeholder="Enter your name"&gt;</code></pre>
        <p class="description">The <strong>placeholder</strong> attribute provides a hint to the user about the expected input within an input field.</p>
    </div>

    <!-- Required Attribute -->
    <div class="code-description">
        <h2>Required Attribute</h2>
        <pre><code>&lt;input type="email" required&gt;</code></pre>
        <p class="description">The <strong>required</strong> attribute indicates that an input field must be filled out before submitting the form.</p>
    </div>

    <!-- Value Attribute -->
    <div class="code-description">
        <h2>Value Attribute</h2>
        <pre><code>&lt;input type="text" value="Default text"&gt;</code></pre>
        <p class="description">The <strong>value</strong> attribute specifies the initial value of an input element.</p>
    </div>

    <!-- Maxlength Attribute -->
    <div class="code-description">
        <h2>Maxlength Attribute</h2>
        <pre><code>&lt;input type="text" maxlength="10"&gt;</code></pre>
        <p class="description">The <strong>maxlength</strong> attribute specifies the maximum number of characters allowed in an input field.</p>
    </div>

    <!-- Action Attribute -->
    <div class="code-description">
        <h2>Action Attribute</h2>
        <pre><code>&lt;form action="submit.php"&gt;&lt;/form&gt;</code></pre>
        <p class="description">The <strong>action</strong> attribute specifies where to send the form data when the form is submitted.</p>
    </div>

    <!-- Method Attribute -->
    <div class="code-description">
        <h2>Method Attribute</h2>
        <pre><code>&lt;form method="post"&gt;&lt;/form&gt;</code></pre>
        <p class="description">The <strong>method</strong> attribute specifies how to send form data (e.g., GET or POST).</p>
    </div>

    <!-- Target Attribute -->
    <div class="code-description">
        <h2>Target Attribute</h2>
        <pre><code>&lt;a href="https://www.example.com" target="_blank"&gt;Open in a new tab&lt;/a&gt;</code></pre>
        <p class="description">The <strong>target</strong> attribute specifies where to open the linked document (e.g., _blank opens in a new tab).</p>
    </div>

    <!-- Rel Attribute -->
    <div class="code-description">
        <h2>Rel Attribute</h2>
        <pre><code>&lt;a href="https://www.example.com" rel="noopener"&gt;Visit Example&lt;/a&gt;</code></pre>
        <p class="description">The <strong>rel</strong> attribute specifies the relationship between the current document and the linked document.</p>
    </div>

    <!-- For Attribute -->
    <div class="code-description">
        <h2>For Attribute</h2>
        <pre><code>&lt;label for="username"&gt;Username:&lt;/label&gt;&lt;input type="text" id="username"&gt;</code></pre>
        <p class="description">The <strong>for</strong> attribute associates a label with a specific input element, improving accessibility.</p>
    </div>

    <!-- Contenteditable Attribute -->
    <div class="code-description">
        <h2>Contenteditable Attribute</h2>
        <pre><code>&lt;div contenteditable="true"&gt;This text can be edited by the user.&lt;/div&gt;</code></pre>
        <p class="description">The <strong>contenteditable</strong> attribute specifies whether an element's content is editable by the user.</p>
    </div>

    <!-- Spellcheck Attribute -->
    <div class="code-description">
        <h2>Spellcheck Attribute</h2>
        <pre><code>&lt;input type="text" spellcheck="true"&gt;</code></pre>
        <p class="description">The <strong>spellcheck</strong> attribute specifies whether the element should have its spelling checked.</p>
    </div>

    <!-- Autocomplete Attribute -->
    <div class="code-description">
        <h2>Autocomplete Attribute</h2>
        <pre><code>&lt;input type="email" autocomplete="on"&gt;</code></pre>
        <p class="description">The <strong>autocomplete</strong> attribute specifies whether the browser should enable autocomplete for the input field.</p>
    </div>

    <!-- Multiple Attribute -->
    <div class="code-description">
        <h2>Multiple Attribute</h2>
        <pre><code>&lt;input type="file" multiple&gt;</code></pre>
        <p class="description">The <strong>multiple</strong> attribute allows the user to select multiple files in a file input.</p>
    </div>

    <!-- Checked Attribute -->
    <div class="code-description">
        <h2>Checked Attribute</h2>
        <pre><code>&lt;input type="checkbox" checked&gt;</code></pre>
        <p class="description">The <strong>checked</strong> attribute indicates that a checkbox or radio button is selected by default.</p>
    </div>

    <!-- Readonly Attribute -->
    <div class="code-description">
        <h2>Readonly Attribute</h2>
        <pre><code>&lt;input type="text" readonly&gt;</code></pre>
        <p class="description">The <strong>readonly</strong> attribute prevents the user from modifying the value of an input field.</p>
    </div>

    <!-- Data-* Attributes -->
    <div class="code-description">
        <h2>Data-* Attributes</h2>
        <pre><code>&lt;div data-user-id="123"&gt;User Info&lt;/div&gt;</code></pre>
        <p class="description">Custom data attributes (prefixed with <strong>data-</strong>) allow you to store extra information directly on an HTML element.</p>
    </div>

    <!-- Summary Attribute -->
    <div class="code-description">
        <h2>Summary Attribute</h2>
        <pre><code>&lt;details&gt;&lt;summary&gt;More Info&lt;/summary&gt;Here is more information.&lt;/details&gt;</code></pre>
        <p class="description">The <strong>summary</strong> attribute provides a summary or title for the <strong>details</strong> element.</p>
    </div>`;
            break;
        case 'forms':
            content = `<h1>HTML Forms</h1>
                       <p>HTML forms are used to collect user input. Here are two examples:</p>
                       <h2>Example 1: Basic Form</h2>
                       <pre><code>&lt;form&gt;
    &lt;label for="name"&gt;Name:&lt;/label&gt;
    &lt;input type="text" id="name" name="name"&gt;
    &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;</code></pre>
                       <h2>Example 2: Form with Select</h2>
                       <pre><code>&lt;form&gt;
    &lt;label for="color"&gt;Favorite Color:&lt;/label&gt;
    &lt;select id="color" name="color"&gt;
        &lt;option value="red"&gt;Red&lt;/option&gt;
        &lt;option value="blue"&gt;Blue&lt;/option&gt;
        &lt;option value="green"&gt;Green&lt;/option&gt;
    &lt;/select&gt;
    &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;</code></pre>
<br><br> 

    <!-- Section for displaying the form code -->
    <div class="description">
        <h3>Example 3:</h3>
        <pre><code>
&lt;form action="/submit_form" method="post"&gt;
    &lt;label for="name"&gt;Name:&lt;/label&gt;&lt;br&gt;
    &lt;input type="text" id="name" name="name" required&gt;&lt;br&gt;&lt;br&gt;

    &lt;label for="email"&gt;Email:&lt;/label&gt;&lt;br&gt;
    &lt;input type="email" id="email" name="email" required&gt;&lt;br&gt;&lt;br&gt;

    &lt;label for="message"&gt;Message:&lt;/label&gt;&lt;br&gt;
    &lt;textarea id="message" name="message" rows="4" cols="50" required&gt;&lt;/textarea&gt;&lt;br&gt;&lt;br&gt;

    &lt;label for="gender"&gt;Gender:&lt;/label&gt;&lt;br&gt;
    &lt;input type="radio" id="male" name="gender" value="male"&gt;
    &lt;label for="male"&gt;Male&lt;/label&gt;&lt;br&gt;
    &lt;input type="radio" id="female" name="gender" value="female"&gt;
    &lt;label for="female"&gt;Female&lt;/label&gt;&lt;br&gt;&lt;br&gt;

    &lt;label for="country"&gt;Country:&lt;/label&gt;&lt;br&gt;
    &lt;select id="country" name="country"&gt;
        &lt;option value="india"&gt;India&lt;/option&gt;
        &lt;option value="usa"&gt;USA&lt;/option&gt;
        &lt;option value="uk"&gt;UK&lt;/option&gt;
        &lt;option value="other"&gt;Other&lt;/option&gt;
    &lt;/select&gt;&lt;br&gt;&lt;br&gt;

    &lt;label for="subscribe"&gt;Subscribe to newsletter:&lt;/label&gt;
    &lt;input type="checkbox" id="subscribe" name="subscribe" value="yes"&gt;&lt;br&gt;&lt;br&gt;

    &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;
        </code></pre>
    </div>

    <!-- Section for describing each part of the form -->
    <div class="description">
        <h3>Description of the Form Elements:</h3>
        <p><code>&lt;form&gt;</code> tag creates an HTML form for collecting user input.</p>
        <p><code>&lt;input type="text"&gt;</code> creates a text box for users to enter their name. The <code>required</code> attribute makes this field mandatory.</p>
        <p><code>&lt;input type="email"&gt;</code> creates a field for email input, ensuring a valid email format.</p>
        <p><code>&lt;textarea&gt;</code> allows users to type a message over multiple lines.</p>
        <p><code>&lt;input type="radio"&gt;</code> creates radio buttons for gender selection, where only one option can be selected at a time.</p>
        <p><code>&lt;select&gt;</code> creates a dropdown for choosing a country, with options like India, USA, etc.</p>
        <p><code>&lt;input type="checkbox"&gt;</code> creates a checkbox to subscribe to the newsletter.</p>
        <p><code>&lt;input type="submit"&gt;</code> creates the button that submits the form data to the server for processing.</p>
    </div>`;
            break;
            case "form-elements":
                content=`<h2>HTML Forms Example</h2>

    <!-- 1. Form Element -->
    <div class="description">
        <h3>1. &lt;form&gt; Element</h3>
        <p>The <code>&lt;form&gt;</code> element creates a form that users can fill out to submit data. The form has an <code>action</code> attribute that defines where the data should be sent, and a <code>method</code> attribute that determines how the data will be sent (GET or POST).</p>
        <pre><code>
&lt;form action="/submit_form" method="post"&gt;
    <!-- Form content goes here -->
&lt;/form&gt;
        </code></pre>
        <p>In this case, the form sends data using the POST method to the server endpoint <code>/submit_form</code>.</p>
    </div>

    <!-- 2. Input Text Field -->
    <div class="description">
        <h3>2. &lt;input type="text"&gt; for Name</h3>
        <p>This element creates a single-line text field where the user can input text. It has attributes like <code>id</code> and <code>name</code> to identify it, and the <code>required</code> attribute ensures that the field cannot be left empty when the form is submitted.</p>
        <pre><code>
&lt;label for="name"&gt;Name:&lt;/label&gt;&lt;br&gt;
&lt;input type="text" id="name" name="name" required&gt;
        </code></pre>
        <p>Explanation:</p>
        <ul>
            <li><code>&lt;label&gt;</code>: Provides a text label for the input field.</li>
            <li><code>for</code> attribute: Links the label to the input field using its <code>id</code>.</li>
            <li><code>&lt;input type="text"&gt;</code>: Defines a text field for user input.</li>
            <li><code>required</code>: Ensures that this field must be filled before form submission.</li>
        </ul>
    </div>

    <!-- 3. Input Email Field -->
    <div class="description">
        <h3>3. &lt;input type="email"&gt; for Email</h3>
        <p>This input field is specifically designed for email addresses. The <code>type="email"</code> ensures that the input must follow the format of a valid email address (e.g., username@example.com).</p>
        <pre><code>
&lt;label for="email"&gt;Email:&lt;/label&gt;&lt;br&gt;
&lt;input type="email" id="email" name="email" required&gt;
        </code></pre>
        <p>Explanation:</p>
        <ul>
            <li><code>&lt;input type="email"&gt;</code>: Creates an email input field that automatically validates the format.</li>
            <li>The user cannot submit the form without providing a valid email address.</li>
        </ul>
    </div>

    <!-- 4. Textarea for Message -->
    <div class="description">
        <h3>4. &lt;textarea&gt; for Message</h3>
        <p>The <code>&lt;textarea&gt;</code> element is used for multi-line text input, such as a user message. The attributes <code>rows</code> and <code>cols</code> specify the visible dimensions of the text box.</p>
        <pre><code>
&lt;label for="message"&gt;Message:&lt;/label&gt;&lt;br&gt;
&lt;textarea id="message" name="message" rows="4" cols="50" required&gt;&lt;/textarea&gt;
        </code></pre>
        <p>Explanation:</p>
        <ul>
            <li><code>&lt;textarea&gt;</code>: Allows for multi-line input, ideal for messages or comments.</li>
            <li><code>rows</code> and <code>cols</code>: Define the visible size of the text area.</li>
        </ul>
    </div>

    <!-- 5. Radio Buttons -->
    <div class="description">
        <h3>5. &lt;input type="radio"&gt; for Gender</h3>
        <p>Radio buttons allow the user to select one option from a set. In this case, the user can select their gender. All radio buttons with the same <code>name</code> are grouped, so only one can be selected at a time.</p>
        <pre><code>
&lt;label for="gender"&gt;Gender:&lt;/label&gt;&lt;br&gt;
&lt;input type="radio" id="male" name="gender" value="male"&gt;
&lt;label for="male"&gt;Male&lt;/label&gt;&lt;br&gt;
&lt;input type="radio" id="female" name="gender" value="female"&gt;
&lt;label for="female"&gt;Female&lt;/label&gt;
        </code></pre>
        <p>Explanation:</p>
        <ul>
            <li><code>&lt;input type="radio"&gt;</code>: Creates a radio button input.</li>
            <li>Only one radio button from the group with the same <code>name</code> can be selected.</li>
        </ul>
    </div>

    <!-- 6. Dropdown Menu -->
    <div class="description">
        <h3>6. &lt;select&gt; Dropdown for Country</h3>
        <p>The <code>&lt;select&gt;</code> element creates a dropdown list. Each option in the dropdown is defined using the <code>&lt;option&gt;</code> tag.</p>
        <pre><code>
&lt;label for="country"&gt;Country:&lt;/label&gt;&lt;br&gt;
&lt;select id="country" name="country"&gt;
    &lt;option value="india"&gt;India&lt;/option&gt;
    &lt;option value="usa"&gt;USA&lt;/option&gt;
    &lt;option value="uk"&gt;UK&lt;/option&gt;
    &lt;option value="other"&gt;Other&lt;/option&gt;
&lt;/select&gt;
        </code></pre>
        <p>Explanation:</p>
        <ul>
            <li><code>&lt;select&gt;</code>: Defines a dropdown menu.</li>
            <li><code>&lt;option&gt;</code>: Specifies each item within the dropdown list.</li>
            <li>The user can select one option from the list.</li>
        </ul>
    </div>

    <!-- 7. Checkbox for Subscription -->
    <div class="description">
        <h3>7. &lt;input type="checkbox"&gt; for Newsletter Subscription</h3>
        <p>A checkbox allows the user to select or deselect an option. In this case, the checkbox determines whether the user wants to subscribe to the newsletter.</p>
        <pre><code>
&lt;label for="subscribe"&gt;Subscribe to newsletter:&lt;/label&gt;
&lt;input type="checkbox" id="subscribe" name="subscribe" value="yes"&gt;
        </code></pre>
        <p>Explanation:</p>
        <ul>
            <li><code>&lt;input type="checkbox"&gt;</code>: Creates a checkbox input.</li>
            <li>If checked, the value "yes" is submitted with the form.</li>
        </ul>
    </div>

    <!-- 8. Submit Button -->
    <div class="description">
        <h3>8. &lt;input type="submit"&gt; Button</h3>
        <p>The submit button is used to send the form data to the server. When clicked, it triggers the form submission.</p>
        <pre><code>
&lt;input type="submit" value="Submit"&gt;
        </code></pre>
        <p>Explanation:</p>
        <ul>
            <li><code>&lt;input type="submit"&gt;</code>: Creates a submit button.</li>
            <li>When clicked, it submits the form data to the server.</li>
        </ul>
    </div>`
    break;
    case "form-validation":
        content=`<h2>HTML Form Validation and Detailed Explanation</h2>

    <!-- 1. Required Field Validation -->
    <div class="description">
        <h3>1. Required Field Validation</h3>
        <p>The <code>required</code> attribute ensures that the user cannot submit the form without filling out a particular field. If the field is left empty, the browser will prevent form submission and show an error.</p>
        <pre><code>
&lt;form&gt;
    &lt;label for="username"&gt;Username:&lt;/label&gt;&lt;br&gt;
    &lt;input type="text" id="username" name="username" required&gt;&lt;br&gt;
    &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;
        </code></pre>
        <p>Explanation:</p>
        <ul>
            <li>The <code>required</code> attribute in the <code>&lt;input&gt;</code> element ensures that the user must fill out the field before submitting the form.</li>
            <li>If the user tries to submit without entering the username, the browser will display an error.</li>
        </ul>
    </div>

    <!-- 2. Email Validation -->
    <div class="description">
        <h3>2. Email Validation</h3>
        <p>The <code>type="email"</code> attribute in the <code>&lt;input&gt;</code> tag ensures that the user enters a valid email format. If the email format is incorrect, the browser will display an error.</p>
        <pre><code>
&lt;form&gt;
    &lt;label for="email"&gt;Email:&lt;/label&gt;&lt;br&gt;
    &lt;input type="email" id="email" name="email" required&gt;&lt;br&gt;
    &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;
        </code></pre>
        <p>Explanation:</p>
        <ul>
            <li>The browser automatically validates that the input matches the structure of a valid email address.</li>
            <li>If the user enters an invalid email format (e.g., "example.com"), the browser will display an error message.</li>
        </ul>
    </div>

    <!-- 3. Pattern Validation -->
    <div class="description">
        <h3>3. Pattern Validation</h3>
        <p>The <code>pattern</code> attribute allows you to specify a regular expression that the input must match for validation. This is useful for inputs like phone numbers, postal codes, or custom formats.</p>
        <pre><code>
&lt;form&gt;
    &lt;label for="zipcode"&gt;Zip Code:&lt;/label&gt;&lt;br&gt;
    &lt;input type="text" id="zipcode" name="zipcode" pattern="\d{5}" title="Please enter a 5-digit zip code." required&gt;&lt;br&gt;
    &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;
        </code></pre>
        <p>Explanation:</p>
        <ul>
            <li>The <code>pattern</code> attribute enforces that the input matches the provided regular expression. In this case, the zip code must be exactly 5 digits (<code>\d{5}</code>).</li>
            <li>If the user enters anything other than 5 digits, the browser will prevent the form submission and display the error message from the <code>title</code> attribute.</li>
        </ul>
    </div>

    <!-- 4. Number Range Validation -->
    <div class="description">
        <h3>4. Number Range Validation</h3>
        <p>For numeric inputs, the <code>min</code> and <code>max</code> attributes restrict the range of valid values. The <code>step</code> attribute defines the increment in which values can be chosen.</p>
        <pre><code>
&lt;form&gt;
    &lt;label for="age"&gt;Age (between 18 and 60):&lt;/label&gt;&lt;br&gt;
    &lt;input type="number" id="age" name="age" min="18" max="60" step="1" required&gt;&lt;br&gt;
    &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;
        </code></pre>
        <p>Explanation:</p>
        <ul>
            <li><code>min</code> and <code>max</code> attributes restrict the user to entering values between 18 and 60.</li>
            <li><code>step</code> defines the interval for valid values (e.g., stepping by 1). If the user enters a number outside this range, the browser will display an error.</li>
        </ul>
    </div>

    <!-- 5. Length Validation -->
    <div class="description">
        <h3>5. Length Validation</h3>
        <p>You can control the minimum and maximum number of characters allowed in text input using the <code>minlength</code> and <code>maxlength</code> attributes.</p>
        <pre><code>
&lt;form&gt;
    &lt;label for="password"&gt;Password (8-16 characters):&lt;/label&gt;&lt;br&gt;
    &lt;input type="password" id="password" name="password" minlength="8" maxlength="16" required&gt;&lt;br&gt;
    &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;
        </code></pre>
        <p>Explanation:</p>
        <ul>
            <li>The <code>minlength</code> and <code>maxlength</code> attributes ensure that the password must be between 8 and 16 characters long.</li>
            <li>If the user tries to submit a password that is too short or too long, the browser will display an error.</li>
        </ul>
    </div>

    <!-- 6. Custom Error Messages (Using JavaScript) -->
    <div class="description">
        <h3>6. Custom Error Messages with JavaScript</h3>
        <p>You can also provide custom validation messages using JavaScript. The <code>setCustomValidity()</code> method is used to define a custom error message that appears when validation fails.</p>
        <pre><code>
&lt;form id="myForm"&gt;
    &lt;label for="usernameCustom"&gt;Username:&lt;/label&gt;&lt;br&gt;
    &lt;input type="text" id="usernameCustom" name="usernameCustom" required&gt;&lt;br&gt;
    &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;

&lt;script&gt;
    const form = document.getElementById('myForm');
    const usernameField = document.getElementById('usernameCustom');

    form.addEventListener('submit', function(event) {
        if (usernameField.value === '') {
            usernameField.setCustomValidity('Please enter your username.');
        } else {
            usernameField.setCustomValidity(''); // Reset the message
        }
    });
&lt;/script&gt;
        </code></pre>
        <p>Explanation:</p>
        <ul>
            <li>The JavaScript function listens for the form's <code>submit</code> event.</li>
            <li>If the username field is empty, a custom error message ("Please enter your username") is shown.</li>
            <li><code>setCustomValidity()</code> is used to set and clear custom error messages.</li>
        </ul>
    </div>
`
break;
        case 'semantic':
            content = `<h2>Semantic HTML and Detailed Explanation</h2>

            <!-- 1. The <header> Tag -->
            <div class="description">
                <h3>1. The <code>&lt;header&gt;</code> Tag</h3>
                <p>The <code>&lt;header&gt;</code> element represents the introductory content or navigational links of a page. It's used for the top section, including logos, navigation bars, or introductory content.</p>
                <pre><code>
        &lt;header&gt;
            &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
            &lt;nav&gt;
                &lt;ul&gt;
                    &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/nav&gt;
        &lt;/header&gt;
                </code></pre>
                <p>Explanation:</p>
                <ul>
                    <li>The <code>&lt;header&gt;</code> tag is used to contain introductory elements such as the website title and navigation.</li>
                    <li>This tag improves accessibility by clearly defining the header section for both browsers and assistive technologies like screen readers.</li>
                </ul>
            </div>
        
            <!-- 2. The <nav> Tag -->
            <div class="description">
                <h3>2. The <code>&lt;nav&gt;</code> Tag</h3>
                <p>The <code>&lt;nav&gt;</code> tag defines a section of navigation links. This tag is specifically for grouping links that help users navigate through the website.</p>
                <pre><code>
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#services"&gt;Services&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
                </code></pre>
                <p>Explanation:</p>
                <ul>
                    <li>The <code>&lt;nav&gt;</code> element is used to define a set of navigation links for easy browsing across the site.</li>
                    <li>This tag enhances the accessibility and structure of the site, letting search engines and assistive tools know that the links belong to the navigation system.</li>
                </ul>
            </div>
        
            <!-- 3. The <main> Tag -->
            <div class="description">
                <h3>3. The <code>&lt;main&gt;</code> Tag</h3>
                <p>The <code>&lt;main&gt;</code> element represents the dominant content of the <code>&lt;body&gt;</code> section. It's used to house the core content of a webpage, excluding headers, footers, and sidebars.</p>
                <pre><code>
        &lt;main&gt;
            &lt;article&gt;
                &lt;h2&gt;Article Title&lt;/h2&gt;
                &lt;p&gt;This is the main content of the webpage.&lt;/p&gt;
            &lt;/article&gt;
        &lt;/main&gt;
                </code></pre>
                <p>Explanation:</p>
                <ul>
                    <li>The <code>&lt;main&gt;</code> tag is meant to contain the most relevant content of the page, helping search engines and accessibility tools understand what the main focus is.</li>
                    <li>It should be used only once per page and should not contain repeated content like headers or footers.</li>
                </ul>
            </div>
        
            <!-- 4. The <article> Tag -->
            <div class="description">
                <h3>4. The <code>&lt;article&gt;</code> Tag</h3>
                <p>The <code>&lt;article&gt;</code> element defines a self-contained piece of content that could be distributed independently, such as a blog post or news article.</p>
                <pre><code>
        &lt;article&gt;
            &lt;h2&gt;Understanding HTML Semantics&lt;/h2&gt;
            &lt;p&gt;Semantic HTML improves accessibility and search engine optimization by using meaningful tags.&lt;/p&gt;
        &lt;/article&gt;
                </code></pre>
                <p>Explanation:</p>
                <ul>
                    <li>The <code>&lt;article&gt;</code> tag is used to contain content that can stand alone, like a blog post or news story.</li>
                    <li>It helps structure content so that search engines and accessibility tools can easily identify independent sections.</li>
                </ul>
            </div>
        
            <!-- 5. The <section> Tag -->
            <div class="description">
                <h3>5. The <code>&lt;section&gt;</code> Tag</h3>
                <p>The <code>&lt;section&gt;</code> element defines a thematic grouping of content, usually with a heading. Sections are used for different parts of a document, such as chapters or parts of an article.</p>
                <pre><code>
        &lt;section&gt;
            &lt;h2&gt;Benefits of Semantic HTML&lt;/h2&gt;
            &lt;p&gt;Using semantic HTML improves SEO and accessibility for your website.&lt;/p&gt;
        &lt;/section&gt;
                </code></pre>
                <p>Explanation:</p>
                <ul>
                    <li>The <code>&lt;section&gt;</code> tag is used for grouping related content with a thematic structure, making it easier for readers to follow.</li>
                    <li>Search engines and screen readers use this tag to understand the grouping of related content.</li>
                </ul>
            </div>
        
            <!-- 6. The <aside> Tag -->
                <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Aside Tag Example</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                pre {
                    background-color: #f9f9f9;
                    padding: 10px;
                    border: 1px solid #ddd;
                    overflow-x: auto;
                }
                code {
                    font-family: monospace;
                    color: #d14;
                }
            </style>
        </head>
        <body>
        
            <h3>6 The<code>&lt;aside&gt;</code> Tag </h3>
        
            <pre><code>
        &lt;aside&gt;
            &lt;h2&gt;Related Information&lt;/h2&gt;
            &lt;p&gt;The following resources provide additional context and insights related to the main topic:&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Introduction to HTML Tags&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Understanding Semantic HTML&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Web Accessibility Best Practices&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        
            &lt;h2&gt;Quick Fact&lt;/h2&gt;
            &lt;p&gt;Using semantic HTML, like the &lt;code&gt;&lt;aside&gt;&lt;/code&gt; tag, not only enhances SEO but also makes your web pages more accessible for users with disabilities.&lt;/p&gt;
        &lt;/aside&gt;
            </code></pre>
        
        </body>
        </html>
        
                <p>Explanation:</p>
                <ul>
                    <li>The <code>&lt;aside&gt;</code> tag is used for content related to the main article but not crucial to its understanding, like sidebars, quotes, or related links.</li>
                    <li>This content is generally supplemental or additional information that enhances the main topic.</li>
                </ul>
            </div>
        
            <!-- 7. The <footer> Tag -->
            <div class="description">
                <h3>7. The <code>&lt;footer&gt;</code> Tag</h3>
                <p>The <code>&lt;footer&gt;</code> element defines the footer section of a document or section. It typically contains information like author details, copyright info, or links to related content.</p>
                <pre><code>
        &lt;footer&gt;
            &lt;p&gt;Copyright &copy; 2024. All rights reserved.&lt;/p&gt;
        &lt;/footer&gt;
                </code></pre>
                <p>Explanation:</p>
                <ul>
                    <li>The <code>&lt;footer&gt;</code> tag is used to wrap content at the bottom of the page, like copyright information, social media links, or disclaimers.</li>
                    <li>This tag helps separate the footer content from the main content, making it easier for screen readers and search engines to understand.</li>
                </ul>
            </div>`;
            break;
        case 'media':
            content = ` <h1>Displaying Media Tags in HTML</h1>

    <h2>1. The <code>&lt;audio&gt;</code> Tag</h2>
    <p>The <code>&lt;audio&gt;</code> tag is used to embed sound content in web pages. It allows for audio playback and can include multiple sources to support different audio formats.</p>
    <pre><code>
&lt;audio controls autoplay loop muted preload=&quot;auto&quot;&gt;
    &lt;source src=&quot;https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3&quot; type=&quot;audio/mpeg&quot;&gt;
    Your browser does not support the audio element.
&lt;/audio&gt;
    </code></pre>
    <p>Example Audio Player:</p>
    <audio controls autoplay loop muted preload="auto">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>

    <h3>Attributes of the <code>&lt;audio&gt;</code> Tag:</h3>
    <ul>
        <li><code>controls</code>: Displays audio controls (play, pause, volume) for user interaction.</li>
        <li><code>autoplay</code>: Automatically starts playing the audio when the page loads.</li>
        <li><code>loop</code>: Replays the audio automatically when it ends.</li>
        <li><code>muted</code>: Starts the audio muted by default.</li>
        <li><code>preload</code>: Specifies how the audio should be loaded when the page loads. Possible values:
            <ul>
                <li><code>none</code>: Do not preload audio.</li>
                <li><code>metadata</code>: Load only audio metadata (duration, dimensions).</li>
                <li><code>auto</code>: Load the entire audio file when the page loads.</li>
            </ul>
        </li>
    </ul>

    <h2>2. The <code>&lt;video&gt;</code> Tag</h2>
    <p>The <code>&lt;video&gt;</code> tag is used to embed video content in web pages. It provides various attributes to control playback, dimensions, and more.</p>
    <pre><code>
&lt;video controls autoplay loop muted preload=&quot;auto&quot; width=&quot;640&quot; height=&quot;360&quot;&gt;
    &lt;source src=&quot;https://www.w3schools.com/html/mov_bbb.mp4&quot; type=&quot;video/mp4&quot;&gt;
    Your browser does not support the video element.
&lt;/video&gt;
    </code></pre>
    <p>Example Video Player:</p>
    <video controls autoplay loop muted preload="auto" width="640" height="360">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        Your browser does not support the video element.
    </video>

    <h3>Attributes of the <code>&lt;video&gt;</code> Tag:</h3>
    <ul>
        <li><code>controls</code>: Displays video controls (play, pause, volume) for user interaction.</li>
        <li><code>autoplay</code>: Automatically starts playing the video when the page loads.</li>
        <li><code>loop</code>: Replays the video automatically when it ends.</li>
        <li><code>muted</code>: Starts the video muted by default.</li>
        <li><code>preload</code>: Specifies how the video should be loaded when the page loads. Possible values:
            <ul>
                <li><code>none</code>: Do not preload video.</li>
                <li><code>metadata</code>: Load only video metadata (duration, dimensions).</li>
                <li><code>auto</code>: Load the entire video file when the page loads.</li>
            </ul>
        </li>
        <li><code>width</code>: Sets the width of the video player in pixels.</li>
        <li><code>height</code>: Sets the height of the video player in pixels.</li>
    </ul>`;
            break;
        case 'links':
            content = `<h1>Displaying HTML Links and Buttons</h1>

    <h2>1. HTML Links</h2>
    <p>The <code>&lt;a&gt;</code> (anchor) tag is used to create hyperlinks that link to another page or a specific section within a page.</p>
    <pre><code>
&lt;a href=&quot;https://www.example.com&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;&gt;Visit Example.com&lt;/a&gt;
    </code></pre>
    <p>Example Link:</p>
    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Visit Example.com</a>

    <h3>Attributes of the <code>&lt;a&gt;</code> Tag:</h3>
    <ul>
        <li><code>href</code>: Specifies the URL of the page the link goes to.</li>
        <li><code>target</code>: Specifies where to open the linked document. Common values:
            <ul>
                <li><code>_blank</code>: Opens the link in a new tab or window.</li>
                <li><code>_self</code>: Opens the link in the same frame (default).</li>
                <li><code>_parent</code>: Opens the link in the parent frame.</li>
                <li><code>_top</code>: Opens the link in the full body of the window.</li>
            </ul>
        </li>
        <li><code>rel</code>: Specifies the relationship between the current document and the linked document. Common values include:
            <ul>
                <li><code>noopener</code>: Prevents the new page from being able to access the window.opener property.</li>
                <li><code>noreferrer</code>: Prevents the browser from sending the HTTP referer header.</li>
            </ul>
        </li>
    </ul>

    <h2>2. HTML Buttons</h2>
    <p>The <code>&lt;button&gt;</code> tag is used to create clickable buttons that can trigger actions, such as submitting forms or executing JavaScript functions.</p>
    <pre><code>
&lt;button type=&quot;button&quot; onclick=&quot;alert('Button clicked!')&quot;&gt;Click Me&lt;/button&gt;
    </code></pre>
    <p>Example Button:</p>
    <button type="button" onclick="alert('Button clicked!')">Click Me</button>

    <h3>Attributes of the <code>&lt;button&gt;</code> Tag:</h3>
    <ul>
        <li><code>type</code>: Specifies the type of button. Possible values:
            <ul>
                <li><code>button</code>: A clickable button that does not submit a form.</li>
                <li><code>submit</code>: A button that submits the form.</li>
                <li><code>reset</code>: A button that resets the form to its initial values.</li>
            </ul>
        </li>
        <li><code>onclick</code>: JavaScript event that executes when the button is clicked.</li>
        <li><code>disabled</code>: Boolean attribute that disables the button, preventing user interaction.</li>
    </ul>`;
            break;
        case 'lists':
            content = `<h1>Displaying HTML Lists</h1>

    <h2>1. Unordered List (<code>&lt;ul&gt;</code>)</h2>
    <p>An unordered list is used to create a list of items without a specific order. Items are typically marked with bullet points.</p>
    <pre><code>
&lt;ul&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
    &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;
    </code></pre>
    <p>Example Unordered List:</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <h3>Attributes of the <code>&lt;ul&gt;</code> Tag:</h3>
    <ul>
        <li><code>type</code>: Specifies the bullet style of the list items. Possible values:
            <ul>
                <li><code>disc</code>: Filled circle (default).</li>
                <li><code>circle</code>: Hollow circle.</li>
                <li><code>square</code>: Filled square.</li>
            </ul>
        </li>
    </ul>

    <h2>2. Ordered List (<code>&lt;ol&gt;</code>)</h2>
    <p>An ordered list is used to create a list of items in a specific order, usually numbered.</p>
    <pre><code>
&lt;ol&gt;
    &lt;li&gt;First Item&lt;/li&gt;
    &lt;li&gt;Second Item&lt;/li&gt;
    &lt;li&gt;Third Item&lt;/li&gt;
&lt;/ol&gt;
    </code></pre>
    <p>Example Ordered List:</p>
    <ol>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
    </ol>

    <h3>Attributes of the <code>&lt;ol&gt;</code> Tag:</h3>
    <ul>
        <li><code>type</code>: Specifies the numbering style. Possible values:
            <ul>
                <li><code>1</code>: Decimal numbers (default).</li>
                <li><code>A</code>: Uppercase letters.</li>
                <li><code>a</code>: Lowercase letters.</li>
                <li><code>I</code>: Uppercase Roman numerals.</li>
                <li><code>i</code>: Lowercase Roman numerals.</li>
            </ul>
        </li>
        <li><code>start</code>: Specifies the starting number of the list. For example, <code>start=&quot;5&quot;</code> will begin the list at 5.</li>
        <li><code>reversed</code>: If present, the list will be displayed in descending order.</li>
    </ul>

    <h2>3. Description List (<code>&lt;dl&gt;</code>)</h2>
    <p>A description list is used to group terms and descriptions. It is useful for defining terms or items.</p>
    <pre><code>
&lt;dl&gt;
    &lt;dt&gt;Term 1&lt;/dt&gt;
    &lt;dd&gt;Description for Term 1&lt;/dd&gt;
    &lt;dt&gt;Term 2&lt;/dt&gt;
    &lt;dd&gt;Description for Term 2&lt;/dd&gt;
&lt;/dl&gt;
    </code></pre>
    <p>Example Description List:</p>
    <dl>
        <dt>Term 1</dt>
        <dd>Description for Term 1</dd>
        <dt>Term 2</dt>
        <dd>Description for Term 2</dd>
    </dl>

    <h3>Attributes of the <code>&lt;dl&gt;</code> Tag:</h3>
    <ul>
        <li>The <code>&lt;dl&gt;</code> tag does not have specific attributes that apply to the list itself. However, the <code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code> tags can be styled with CSS.</li>
    </ul>`;
            break;
        case 'tables':
            content = `<h1>Displaying HTML Tables</h1>

    <h2>1. Basic Table</h2>
    <p>This is a simple table that uses basic HTML structure without any additional attributes.</p>
    
    <pre><code>
&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;Header 1&lt;/th&gt;
        &lt;th&gt;Header 2&lt;/th&gt;
        &lt;th&gt;Header 3&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Data 1&lt;/td&gt;
        &lt;td&gt;Data 2&lt;/td&gt;
        &lt;td&gt;Data 3&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Data 4&lt;/td&gt;
        &lt;td&gt;Data 5&lt;/td&gt;
        &lt;td&gt;Data 6&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
    </code></pre>

    <h3>Example Basic Table:</h3>
    <table>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
        </tr>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
        </tr>
        <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
        </tr>
    </table>

    <h3>Attributes of the Basic Table:</h3>
    <ul>
        <li><code>&lt;table&gt;</code>: No specific attributes used.</li>
        <li><code>&lt;tr&gt;</code>: Defines a row in the table.</li>
        <li><code>&lt;th&gt;</code>: Defines a header cell, which is bold and centered by default.</li>
        <li><code>&lt;td&gt;</code>: Defines a standard data cell.</li>
    </ul>

    <h2>2. Advanced Table with Attributes</h2>
    <p>This table uses various attributes to demonstrate its flexibility and capabilities.</p>
    
    <pre><code>
&lt;table border=&quot;1&quot; cellspacing=&quot;0&quot; cellpadding=&quot;10&quot; width=&quot;100%&quot;&gt;
    &lt;tr bgcolor=&quot;#f9f9f9&quot;&gt;
        &lt;th colspan=&quot;2&quot; rowspan=&quot;2&quot; scope=&quot;colgroup&quot;&gt;Merged Header&lt;/th&gt;
        &lt;th scope=&quot;col&quot;&gt;Header 1&lt;/th&gt;
        &lt;th scope=&quot;col&quot;&gt;Header 2&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td colspan=&quot;2&quot; bgcolor=&quot;#e0e0e0&quot;&gt;Sub Header&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Data A&lt;/td&gt;
        &lt;td&gt;Data B&lt;/td&gt;
        &lt;td&gt;Data C&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
    </code></pre>

    <h3>Example Advanced Table:</h3>
    <table border="1" cellspacing="0" cellpadding="10" width="100%">
        <tr bgcolor="#f9f9f9">
            <th colspan="2" rowspan="2" scope="colgroup">Merged Header</th>
            <th scope="col">Header 1</th>
            <th scope="col">Header 2</th>
        </tr>
        <tr>
            <td colspan="2" bgcolor="#e0e0e0">Sub Header</td>
        </tr>
        <tr>
            <td>Data A</td>
            <td>Data B</td>
            <td>Data C</td>
        </tr>
    </table>

    <h3>Attributes of the Advanced Table:</h3>
    <ul>
        <li><code>border</code>: Defines the width of the table border. A value of "1" creates a one-pixel border around the table.</li>
        <li><code>cellspacing</code>: Specifies the space between the table cells. A value of "0" means no spacing between cells.</li>
        <li><code>cellpadding</code>: Specifies the space between cell content and cell border. A value of "10" adds padding around cell content.</li>
        <li><code>width</code>: Sets the width of the table. A value of "100%" makes the table span the full width of its container.</li>
        <li><code>bgcolor</code>: Sets the background color of the row or cell. The color can be specified using color names or hex codes.</li>
        <li><code>colspan</code>: Allows a header or data cell to span multiple columns. In this example, the merged header spans two columns.</li>
        <li><code>rowspan</code>: Allows a header or data cell to span multiple rows. In this example, the merged header spans two rows.</li>
        <li><code>scope</code>: Enhances accessibility by indicating the context of the header. Possible values include <code>col</code>, <code>row</code>, <code>colgroup</code>, and <code>rowgroup</code>.</li>
    </ul>`;
            break;
        case 'css':
            content = `<<h1>Combining HTML with CSS and JavaScript</h1>

    <div class="box">
        <h2>1. HTML with CSS</h2>
        <p>This section demonstrates how to style HTML elements using CSS.</p>
        
        <pre><code>
&lt;style&gt;
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
    }
    h1 {
        color: #333;
    }
    .box {
        background-color: #fff;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
&lt;/style&gt;

&lt;h1&gt;Hello, World!&lt;/h1&gt;
&lt;div class=&quot;box&quot;&gt;
    &lt;p&gt;This is a styled box using CSS.&lt;/p&gt;
&lt;/div&gt;
        </code></pre>

        <h3>Example with CSS:</h3>
        <h1>Hello, World!</h1>
        <div class="box">
            <p>This is a styled box using CSS.</p>
        </div>
    </div>

    <div class="box">
        <h2>2. HTML with JavaScript</h2>
        <p>This section demonstrates how to add interactivity to HTML using JavaScript.</p>
        
        <pre><code>
&lt;button class=&quot;button&quot; onclick=&quot;displayMessage()&quot;&gt;Click Me!&lt;/button&gt;

&lt;script&gt;
    function displayMessage() {
        alert(&quot;Hello, this is a JavaScript alert!&quot;);
    }
&lt;/script&gt;
        </code></pre>

        <h3>Example with JavaScript:</h3>
        <button class="button" onclick="displayMessage()">Click Me!</button>

        <script>
            function displayMessage() {
                alert("Hello, this is a JavaScript alert!");
            }
        </script>
    </div>

    <h3>What is HTML with CSS and JavaScript?</h3>
    <p>HTML (HyperText Markup Language) is the standard language for creating web pages, providing the structure of the content.</p>
    <p>CSS (Cascading Style Sheets) is used to style the HTML content, allowing developers to change the layout, colors, and fonts, making the web pages visually appealing.</p>
    <p>JavaScript is a programming language that adds interactivity to HTML, enabling dynamic behavior such as responding to user actions, validating forms, and creating animations.</p>

    <h3> Use  of HTML with CSS and JavaScript?</h3>
    <ul>
        <li><strong>Separation of Concerns</strong>: HTML handles the structure, CSS manages the presentation, and JavaScript adds behavior, promoting organized and maintainable code.</li>
        <li><strong>Improved User Experience</strong>: CSS enhances the aesthetics of the web page, while JavaScript provides interactive features that engage users.</li>
        <li><strong>Responsive Design</strong>: CSS allows for layouts that adapt to different screen sizes and devices, ensuring a consistent experience for users.</li>
        <li><strong>Enhanced Functionality</strong>: JavaScript can manipulate the HTML and CSS in real-time, allowing for rich user interfaces and experiences.</li>
    </ul>`;
            break;
        default:
            content = `<h1>Error</h1><p>Content not found.</p>`;
    }

    contentArea.innerHTML = content; // Load the selected content
}
