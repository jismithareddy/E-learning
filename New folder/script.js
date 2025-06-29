function loadContent(topic) {
    let contentArea = document.getElementById('contentArea');
    let content = '';

    switch (topic) {
        case 'computer':
                        content = `<header>
            <h1>Introduction to Computers</h1>
            </header>
            <main>
            <section>
            <h2>What is a Computer?</h2>
            <p>A <strong>computer</strong> is an electronic device designed to process, store, and retrieve data. Computers follow specific instructions (programs) to perform a wide range of tasks, making them invaluable in today's digital age. They are used for various purposes such as communication, data processing, entertainment, education, and much more.</p>
            <p>Computers can solve complex problems and perform repetitive tasks more efficiently than humans, making them essential tools in almost every industry.</p>
            </section>
            <aside>
            <h2>Did You Know?</h2>
            <p>Computers can perform billions of calculations per second, thanks to their powerful processors.</p>
            </aside>
            </main>`;
            break;

        case "key_com_computer":
                        content = `<h2>Key Components of a Computer</h2>
            <ul>
                <li><strong>Central Processing Unit (CPU):</strong> The CPU is often referred to as the "brain" of the computer...</li>
                <li><strong>Random Access Memory (RAM):</strong> RAM is the computer's short-term memory...</li>
                <li><strong>Storage (Hard Drive or Solid-State Drive):</strong> Storage devices are where data is saved permanently...</li>
                <li><strong>Input Devices:</strong> Input devices allow users to interact with the computer...</li>
                <li><strong>Output Devices:</strong> Output devices display or produce the results of the computer's processes...</li>
            </ul>
            <aside>
            <h2>Tip:</h2>
            <p>Upgrading your RAM can significantly improve your computer's performance.</p>
            </aside>`;
                        break;

        case 'all_computer':
                        content = `<section>
            <h2>Types of Computers</h2>
            <ul>
                <li><strong>Personal Computers (PCs):</strong> Personal computers are designed for individual use...</li>
                <li><strong>Workstations:</strong> Workstations are high-performance PCs optimized for tasks that require greater processing power...</li>
                <li><strong>Tablets and Smartphones:</strong> Tablets and smartphones are portable devices that integrate computing power...</li>
                <li><strong>Servers:</strong> Servers are powerful machines that provide data, services, or applications...</li>
                <li><strong>Mainframes:</strong> Mainframes are large, high-performance computers used for bulk data processing...</li>
                <li><strong>Supercomputers:</strong> Supercomputers are the fastest and most powerful computers in existence...</li>
            </ul>
            <img src="Types-of-Computer.jpg" alt="Different computers">
            <aside>
            <h2>Fun Fact:</h2>
            <p>The first computer was invented in the 1940s and took up an entire room!</p>
            </aside>
            </section>`;
            break;

        case "use":
                    content = `<section>
        <h2>Common Uses of Computers</h2>
        <ul>
            <li><strong>Communication:</strong> Computers enable users to communicate seamlessly...</li>
            <li><strong>Entertainment:</strong> Computers serve as hubs for entertainment...</li>
            <li><strong>Productivity and Work:</strong> In professional environments, computers are essential...</li>
            <li><strong>Education and Learning:</strong> Computers provide access to vast educational resources...</li>
            <li><strong>Data Analysis:</strong> Computers are indispensable for processing and analyzing large datasets...</li>
        </ul>
        <aside>
        <h2>Quick Tip:</h2>
        <p>Utilizing cloud services can enhance your data storage and accessibility!</p>
        </aside>
        </section>`;
            break;

        case 'intro':
                        content = `<div class="main-div">
            <h4 class="head">Introduction About Programming</h4>
            <div class="des">
            <section></section>
            <h6>What is Programming?</h6>
            <p>Programming is the process of creating a set of instructions...</p>
            <p>Programming is fundamental to the operation of modern technology...</p>
            </section>
            <section class="code">
            <code></code>
            </section>
            <section class="des"></section>
            <br><br>
            <section class="code">
            <code></code>
            </section>
            <section class="des"></section>
            </div>
            <aside>
            <h2>Note:</h2>
            <p>Understanding programming basics can significantly enhance your tech skills!</p>
            </aside>
            </div>`;
            break;

        case 'why':
                        content = `<div>
            <h1>Why Programming Matters</h1>
            <h2>1. Make Life Easier</h2>
            <p>Programming can make computers handle boring or difficult tasks...</p>
            <h2>2. Create Cool Stuff</h2>
            <p>We can use programming to make apps, websites, games, and robots...</p>
            <h2>3. Solve Problems</h2>
            <p>It helps us find new ways to fix problems...</p>
            <h2>4. Talk to Computers</h2>
            <p>Computers don’t understand our language...</p>
            <h2>5. Get Good Jobs</h2>
            <p>Knowing how to program opens up lots of job options...</p>
            <p>In short, programming helps us make computers do things that make our lives better...</p>
            </div>
            <aside>
            <h2>Did You Know?</h2>
            <p>Programming jobs are among the most in-demand in the tech industry!</p>
            </aside>`;
            break;

        case 'structure':
            content = `
<h1>Structure of a Program</h1>
<p>A well-structured program is easier to read and maintain...</p>
<ul>
    <li><strong>Variables:</strong> Used to store data values.</li>
    <li><strong>Functions:</strong> Blocks of code designed to perform a particular task.</li>
    <li><strong>Control Flow:</strong> Determines the order in which instructions are executed.</li>
</ul>
<p>Here's an example:</p>
<pre><code>function greet() {
console.log("Hello, World!");
}
greet(); // Calls the function</code></pre>
<aside>
<h2>Helpful Tip:</h2>
<p>Organizing your code into functions can improve readability and maintenance!</p>
</aside>
`;
            break;

        case "comp":
                        content = `<header>
            <h1>Compilers and Interpreters</h1>
            </header>
            <article>
            <h2>What is a Compiler?</h2>
            <p>A compiler is a special program that translates a programming language's source code into machine code...</p>
            <h3>Characteristics of Compilers:</h3>
            <ul>
            <li>Processes the entire program at once.</li>
            <li>Produces an object code file...</li>
            <li>Generally, faster execution time...</li>
            <li>Debugging can be more difficult...</li>
            </ul>
            <h3>Examples of Compilers:</h3>
            <ul>
            <li>GCC (GNU Compiler Collection)</li>
            <li>Clang</li>
            <li>Microsoft Visual C++</li>
            </ul>
            </article>
            <article>
            <h2>What is an Interpreter?</h2>
            <p>An interpreter is a program that directly executes instructions...</p>
            <h3>Characteristics of Interpreters:</h3>
            <ul>
            <li>Processes the program one line at a time.</li>
            <li>No object code file is generated...</li>
            <li>Generally, slower execution time...</li>
            <li>Debugging is easier...</li>
            </ul>
            <h3>Examples of Interpreters:</h3>
            <ul>
            <li>Python Interpreter</li>
            <li>Ruby Interpreter</li>
            <li>JavaScript Engine (like V8)</li>
            </ul>
            </article>
            <article>
            <h2>Compiler vs. Interpreter</h2>
            <table style="width:100%; border-collapse: collapse;">
            <tr>
                <th style="border: 1px solid #ddd; padding: 8px;">Aspect</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Compiler</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Interpreter</th>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Translation Method</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Whole program at once</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Line by line</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Execution Speed</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Faster</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Slower</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">Error Detection</td>
                <td style="border: 1px solid #ddd; padding: 8px;">Before execution</td>
                <td style="border: 1px solid #ddd; padding: 8px;">During execution</td>
            </tr>
            </table>
            </article>
            <aside>
            <h2>In Conclusion:</h2>
            <p>Both compilers and interpreters play crucial roles in programming, and understanding their differences is essential for any programmer!</p>
            </aside>`;
            break;

        case "code":
                        content = `<header>
            <h1>Introduction to Coding</h1>
            </header>
            <main>
            <section>
            <h2>What is Coding?</h2>
            <p>Coding is the process of writing instructions for a computer to execute...</p>
            </section>
            <section>
            <h2>Benefits of Learning to Code</h2>
            <ul>
                <li><strong>Problem-Solving Skills:</strong> Coding enhances analytical thinking and problem-solving abilities...</li>
                <li><strong>Career Opportunities:</strong> Knowledge of coding opens doors to numerous career paths...</li>
                <li><strong>Creativity:</strong> Coding allows you to create unique solutions and products...</li>
            </ul>
            </section>
            <aside>
            <h2>Quick Fact:</h2>
            <p>Many successful entrepreneurs started their careers as programmers!</p>
            </aside>
            </main>`;
            break;

        default:
            content = `<h2>Please select a topic to learn more!</h2>`;
    }

    contentArea.innerHTML = content;
}
