function displayContent(topic) {
    const contentDiv = document.getElementById('mainContent');
    
    // Define content for the intro topic
    const content = {
        intro: `
            <h2 style="color: blue;">Introduction to Programming</h2>
            <p style="font-size: 16px;">
                Programming is the process of creating a set of instructions that tell a computer how to perform a task. 
                It involves writing code in programming languages such as Python, Java, JavaScript, and more.
            </p>
            <p>
                The history of programming dates back to the early 19th century when Ada Lovelace created what is 
                considered the first algorithm intended for implementation on a machine. Modern programming has evolved 
                significantly since then, leading to the development of numerous programming languages, each designed 
                for specific tasks.
            </p>
            <p>
                Today, programming is a fundamental skill in many fields, from web development to artificial intelligence.
                Understanding programming basics is essential for aspiring developers, data scientists, and engineers.
            </p>
            <p>
                Real-time applications of programming include web applications, mobile apps, software tools, 
                data analysis, and machine learning systems. 
            </p>
        `
    };

    // Update the main content area with the selected topic's content
    contentDiv.innerHTML = content[topic];
}
