function loadContent(topic) {
    const contentArea = document.getElementById('contentArea');
    switch(topic) {
        case 'introduction':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Guide to Sudoku</title>
</head>
<body>

<h1>Complete Guide to Sudoku</h1>

<h2>1. What is Sudoku?</h2>
<p>Sudoku is a logic-based, combinatorial number-placement puzzle. The objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids (boxes) contains all of the digits from 1 to 9.</p>

<h2>2. History of Sudoku</h2>
<p>Sudoku has origins in the late 18th century but became popular in its current form in the late 20th century. The puzzle was introduced in Japan in the 1980s, which led to its worldwide popularity.</p>

<h2>3. Sudoku Grid Structure</h2>
<ul>
    <li><strong>Grid Size:</strong> Standard Sudoku consists of a 9x9 grid.</li>
    <li><strong>Regions:</strong> The grid is divided into nine 3x3 boxes.</li>
    <li><strong>Cells:</strong> Each box contains 9 cells, making a total of 81 cells.</li>
</ul>

<h2>4. Rules of Sudoku</h2>
<ol>
    <li>Each row must contain the numbers 1 to 9 without repetition.</li>
    <li>Each column must contain the numbers 1 to 9 without repetition.</li>
    <li>Each 3x3 box must contain the numbers 1 to 9 without repetition.</li>
    <li>A cell can contain only one number.</li>
</ol>

<h2>5. Basic Techniques for Solving Sudoku</h2>
<h3>5.1. Naked Singles</h3>
<p>If a cell can only contain one possible number, that number must be placed in that cell.</p>

<h3>5.2. Hidden Singles</h3>
<p>If a number can only go in one cell within a row, column, or box, it must be placed in that cell.</p>

<h3>5.3. Pairs and Triples</h3>
<p>Identify two or three cells in a row, column, or box that can only contain the same two or three numbers. This can help eliminate other possibilities.</p>

<h2>6. Intermediate Techniques</h2>
<h3>6.1. X-Wing</h3>
<p>The X-Wing technique involves finding two rows and two columns that form a rectangle, where a specific number can only appear in the corners of the rectangle.</p>

<h3>6.2. Swordfish</h3>
<p>Similar to X-Wing but involves three rows and columns. This technique is used to eliminate candidates in a more complex pattern.</p>

<h3>6.3. Coloring</h3>
<p>This technique uses a color-coding system to identify candidates that can help in eliminating possibilities.</p>

<h2>7. Advanced Techniques</h2>
<h3>7.1. XY-Chain</h3>
<p>A technique involving two-digit candidates across multiple cells to link them together and eliminate possibilities.</p>

<h3>7.2. Forcing Chains</h3>
<p>A method of assuming a candidate is correct and following through with implications to find contradictions.</p>

<h3>7.3. Backtracking</h3>
<p>A systematic method of trying different possibilities until the solution is found. This is often used when all other techniques fail.</p>

<h2>8. Sudoku Variants</h2>
<ul>
    <li><strong>Samurai Sudoku:</strong> A puzzle made of five overlapping Sudoku grids.</li>
    <li><strong>Sudoku X:</strong> A variant where the diagonals also must contain each number 1-9 without repetition.</li>
    <li><strong>Diagonal Sudoku:</strong> Similar to Sudoku X but focuses only on the diagonals.</li>
    <li><strong>Hyper Sudoku:</strong> A variant with additional 3x3 regions that must also contain all digits.</li>
</ul>

<h2>9. Strategies for Improvement</h2>
<ul>
    <li>Practice regularly to improve pattern recognition.</li>
    <li>Start with easier puzzles to build confidence.</li>
    <li>Review solved puzzles to understand the techniques used.</li>
    <li>Use online resources and apps to enhance skills.</li>
</ul>

<h2>10. Conclusion</h2>
<p>Sudoku is a game that challenges your logic and reasoning skills. Whether you are a beginner or an expert, there is always something new to learn. By mastering various techniques and strategies, you can enhance your solving skills and enjoy this classic puzzle to its fullest.</p>

</body>
</html>
`;
            break;
        case 'example1':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sudoku Solver</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }
        table {
            border-collapse: collapse;
            margin: 20px 0;
        }
        td {
            width: 40px;
            height: 40px;
            text-align: center;
            border: 1px solid #333;
            font-size: 24px;
            background-color: #fff;
        }
        h1, h2 {
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Sudoku Solver</h1>
    <p>This page demonstrates solving a Sudoku puzzle using the Naked Singles technique. Follow the steps below to see how the puzzle is solved.</p>
    
    <h2>Initial Sudoku Puzzle</h2>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <td></td><td>3</td><td>2</td><td>6</td><td>4</td><td></td><td></td><td>9</td><td>7</td>
        </tr>
        <tr>
            <td>6</td><td></td><td></td><td>1</td><td>9</td><td>5</td><td>2</td><td></td><td>3</td>
        </tr>
        <tr>
            <td>3</td><td>9</td><td></td><td>2</td><td>5</td><td>4</td><td>1</td><td></td><td></td>
        </tr>
        <tr>
            <td>8</td><td>4</td><td>1</td><td>3</td><td>6</td><td></td><td></td><td>7</td><td>2</td>
        </tr>
        <tr>
            <td>4</td><td></td><td>3</td><td></td><td>2</td><td>3</td><td>6</td><td>4</td><td>1</td>
        </tr>
        <tr>
            <td>7</td><td>1</td><td>2</td><td>4</td><td></td><td>6</td><td>8</td><td></td><td>5</td>
        </tr>
        <tr>
            <td>9</td><td>6</td><td>4</td><td></td><td>7</td><td>2</td><td>9</td><td></td><td>8</td>
        </tr>
        <tr>
            <td>2</td><td>3</td><td></td><td>7</td><td>4</td><td>1</td><td>3</td><td>8</td><td>9</td>
        </tr>
        <tr>
            <td>1</td><td>2</td><td>6</td><td></td><td>9</td><td>7</td><td>2</td><td>5</td><td>4</td>
        </tr>
    </table>

    <h2>Step 1: Find Naked Singles</h2>
    <p>In this step, we identify cells with a single possible number based on the rules of Sudoku.</p>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <td>5</td><td>3</td><td>2</td><td>6</td><td>4</td><td></td><td></td><td>9</td><td>7</td>
        </tr>
        <tr>
            <td>6</td><td></td><td></td><td>1</td><td>9</td><td>5</td><td>2</td><td></td><td>3</td>
        </tr>
        <tr>
            <td>3</td><td>9</td><td>8</td><td>2</td><td>5</td><td>4</td><td>1</td><td></td><td></td>
        </tr>
        <tr>
            <td>8</td><td>4</td><td>1</td><td>3</td><td>6</td><td>9</td><td></td><td>7</td><td>2</td>
        </tr>
        <tr>
            <td>4</td><td></td><td>3</td><td></td><td>2</td><td>3</td><td>6</td><td>4</td><td>1</td>
        </tr>
        <tr>
            <td>7</td><td>1</td><td>2</td><td>4</td><td></td><td>6</td><td>8</td><td></td><td>5</td>
        </tr>
        <tr>
            <td>9</td><td>6</td><td>4</td><td></td><td>7</td><td>2</td><td>9</td><td></td><td>8</td>
        </tr>
        <tr>
            <td>2</td><td>3</td><td>5</td><td>7</td><td>4</td><td>1</td><td>3</td><td>8</td><td>9</td>
        </tr>
        <tr>
            <td>1</td><td>2</td><td>6</td><td>3</td><td>9</td><td>7</td><td>2</td><td>5</td><td>4</td>
        </tr>
    </table>

    <h2>Final Step: Completed Sudoku Puzzle</h2>
    <p>Below is the completed Sudoku puzzle:</p>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <td>5</td><td>3</td><td>2</td><td>6</td><td>4</td><td>8</td><td>4</td><td>9</td><td>7</td>
        </tr>
        <tr>
            <td>6</td><td>7</td><td>4</td><td>1</td><td>9</td><td>5</td><td>2</td><td>2</td><td>3</td>
        </tr>
        <tr>
            <td>3</td><td>9</td><td>8</td><td>2</td><td>5</td><td>4</td><td>1</td><td>6</td><td>5</td>
        </tr>
        <tr>
            <td>8</td><td>4</td><td>1</td><td>3</td><td>6</td><td>9</td><td>5</td><td>7</td><td>2</td>
        </tr>
        <tr>
            <td>4</td><td>8</td><td>3</td><td>8</td><td>2</td><td>3</td><td>6</td><td>4</td><td>1</td>
        </tr>
        <tr>
            <td>7</td><td>1</td><td>2</td><td>4</td><td>1</td><td>6</td><td>8</td><td>3</td><td>5</td>
        </tr>
        <tr>
            <td>9</td><td>6</td><td>4</td><td>5</td><td>7</td><td>2</td><td>9</td><td>1</td><td>8</td>
        </tr>
        <tr>
            <td>2</td><td>3</td><td>5</td><td>7</td><td>4</td><td>1</td><td>3</td><td>8</td><td>9</td>
        </tr>
        <tr>
            <td>1</td><td>2</td><td>6</td><td>3</td><td>9</td><td>7</td><td>2</td><td>5</td><td>4</td>
        </tr>
    </table>
    
    <h2>Conclusion</h2>
    <p>The Sudoku puzzle is solved using the Naked Singles technique. This method focuses on identifying cells that can only have one valid number. As the process continues, the board gradually fills up until all cells are complete.</p>
</body>
</html>
`;
            break;
        case 'example2':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solving Sudoku - Step by Step</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 20px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2, h3 {
            color: #333;
        }
        table {
            border-collapse: collapse;
            margin: 20px 0;
        }
        td {
            width: 40px;
            height: 40px;
            text-align: center;
            font-size: 24px;
            border: 1px solid #ccc;
            background-color: #fff;
        }
        .highlight {
            background-color: #ffeb3b;
            font-weight: bold;
        }
        .explanation {
            margin: 10px 0;
            padding: 10px;
            background-color: #e3f2fd;
            border-left: 5px solid #2196f3;
        }
    </style>
</head>
<body>

<h1>Solving Sudoku - Step by Step</h1>

<h2>Example 1</h2>
<p>Let's solve the following Sudoku puzzle:</p>

<table>
    <tr>
        <td>5</td><td>3</td><td></td><td></td><td>7</td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td>6</td><td></td><td></td><td>1</td><td>9</td><td>5</td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td></td><td>9</td><td>8</td><td></td><td></td><td></td><td></td><td>6</td><td></td>
    </tr>
    <tr>
        <td>8</td><td></td><td></td><td></td><td>6</td><td></td><td></td><td></td><td>3</td>
    </tr>
    <tr>
        <td>4</td><td></td><td></td><td>8</td><td></td><td>3</td><td></td><td></td><td>1</td>
    </tr>
    <tr>
        <td>7</td><td></td><td></td><td></td><td>2</td><td></td><td></td><td></td><td>6</td>
    </tr>
    <tr>
        <td></td><td>6</td><td></td><td></td><td></td><td></td><td>2</td><td>8</td><td></td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td>4</td><td>1</td><td>9</td><td></td><td></td><td>5</td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td></td><td>8</td><td></td><td></td><td>7</td><td>9</td>
    </tr>
</table>

<h3>Step 1: Identify Naked Singles</h3>
<p>Starting with row 1, column 3 can only contain the number 1:</p>

<table>
    <tr>
        <td>5</td><td>3</td><td class="highlight">1</td><td></td><td>7</td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td>6</td><td></td><td></td><td>1</td><td>9</td><td>5</td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td></td><td>9</td><td>8</td><td></td><td></td><td></td><td></td><td>6</td><td></td>
    </tr>
    <tr>
        <td>8</td><td></td><td></td><td></td><td>6</td><td></td><td></td><td></td><td>3</td>
    </tr>
    <tr>
        <td>4</td><td></td><td></td><td>8</td><td></td><td>3</td><td></td><td></td><td>1</td>
    </tr>
    <tr>
        <td>7</td><td></td><td></td><td></td><td>2</td><td></td><td></td><td></td><td>6</td>
    </tr>
    <tr>
        <td></td><td>6</td><td></td><td></td><td></td><td></td><td>2</td><td>8</td><td></td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td>4</td><td>1</td><td>9</td><td></td><td></td><td>5</td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td></td><td>8</td><td></td><td></td><td>7</td><td>9</td>
    </tr>
</table>

<div class="explanation">
    <p><strong>Explanation:</strong> The cell in row 1, column 3 can only be 1 due to the rules of Sudoku: it must not conflict with any numbers already in that row, column, or 3x3 grid.</p>
</div>

<h3>Step 2: Continue Solving</h3>
<p>Now, let's fill in row 1, column 4 with the number 2:</p>

<table>
    <tr>
        <td>5</td><td>3</td><td>1</td><td class="highlight">2</td><td>7</td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td>6</td><td></td><td></td><td>1</td><td>9</td><td>5</td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td></td><td>9</td><td>8</td><td></td><td></td><td></td><td></td><td>6</td><td></td>
    </tr>
    <tr>
        <td>8</td><td></td><td></td><td></td><td>6</td><td></td><td></td><td></td><td>3</td>
    </tr>
    <tr>
        <td>4</td><td></td><td></td><td>8</td><td></td><td>3</td><td></td><td></td><td>1</td>
    </tr>
    <tr>
        <td>7</td><td></td><td></td><td></td><td>2</td><td></td><td></td><td></td><td>6</td>
    </tr>
    <tr>
        <td></td><td>6</td><td></td><td></td><td></td><td></td><td>2</td><td>8</td><td></td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td>4</td><td>1</td><td>9</td><td></td><td></td><td>5</td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td></td><td>8</td><td></td><td></td><td>7</td><td>9</td>
    </tr>
</table>

<div class="explanation">
    <p><strong>Explanation:</strong> The number 2 fits in this cell without violating the Sudoku rules. We continue to look for cells with limited possibilities.</p>
</div>

<h3>Step 3: Continuing with More Numbers</h3>
<p>As we continue solving, we can fill in row 1, column 5 with 7, row 1, column 6 with 4, and so forth. Each time, we highlight the new number being placed:</p>

<table>
    <tr>
        <td>5</td><td>3</td><td>1</td><td>2</td><td class="highlight">7</td><td class="highlight">4</td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td>6</td><td></td><td></td><td>1</td><td>9</td><td>5</td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td></td><td>9</td><td>8</td><td></td><td></td><td></td><td></td><td>6</td><td></td>
    </tr>
    <tr>
        <td>8</td><td></td><td></td><td></td><td>6</td><td></td><td></td><td></td><td>3</td>
    </tr>
    <tr>
        <td>4</td><td></td><td></td><td>8</td><td></td><td>3</td><td></td><td></td><td>1</td>
    </tr>
    <tr>
        <td>7</td><td></td><td></td><td></td><td>2</td><td></td><td></td><td></td><td>6</td>
    </tr>
    <tr>
        <td></td><td>6</td><td></td><td></td><td></td><td></td><td>2</td><td>8</td><td></td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td>4</td><td>1</td><td>9</td><td></td><td></td><td>5</td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td></td><td>8</td><td></td><td></td><td>7</td><td>9</td>
    </tr>
</table>

<div class="explanation">
    <p><strong>Explanation:</strong> We have filled in more cells following the same principles, ensuring that each number is placed in a valid location according to Sudoku rules.</p>
</div>

<h3>Final State</h3>
<p>After solving the entire puzzle using similar strategies, we would arrive at a completed Sudoku grid:</p>

<table>
    <tr>
        <td>5</td><td>3</td><td>4</td><td>6</td><td>7</td><td>8</td><td>9</td><td>1</td><td>2</td>
    </tr>
    <tr>
        <td>6</td><td>7</td><td>2</td><td>1</td><td>9</td><td>5</td><td>3</td><td>4</td><td>8</td>
    </tr>
    <tr>
        <td>1</td><td>9</td><td>8</td><td>3</td><td>4</td><td>2</td><td>5</td><td>6</td><td>7</td>
    </tr>
    <tr>
        <td>8</td><td>5</td><td>9</td><td>7</td><td>6</td><td>1</td><td>4</td><td>2</td><td>3</td>
    </tr>
    <tr>
        <td>4</td><td>2</td><td>6</td><td>8</td><td>5</td><td>3</td><td>7</td><td>9</td><td>1</td>
    </tr>
    <tr>
        <td>7</td><td>1</td><td>3</td><td>9</td><td>2</td><td>4</td><td>8</td><td>5</td><td>6</td>
    </tr>
    <tr>
        <td>9</td><td>6</td><td>1</td><td>5</td><td>3</td><td>7</td><td>2</td><td>8</td><td>4</td>
    </tr>
    <tr>
        <td>2</td><td>8</td><td>7</td><td>4</td><td>1</td><td>9</td><td>6</td><td>3</td><td>5</td>
    </tr>
    <tr>
        <td>3</td><td>4</td><td>5</td><td>2</td><td>8</td><td>6</td><td>1</td><td>7</td><td>9</td>
    </tr>
</table>

<div class="explanation">
    <p><strong>Conclusion:</strong> The final Sudoku puzzle was solved through a systematic approach, utilizing the naked singles strategy and filling in the cells methodically.</p>
</div>

<h2>Example 2</h2>
<p>Now, let's solve another Sudoku puzzle:</p>

<table>
    <tr>
        <td>3</td><td>4</td><td></td><td>5</td><td>6</td><td>7</td><td></td><td>8</td><td></td>
    </tr>
    <tr>
        <td>2</td><td></td><td>5</td><td>1</td><td>4</td><td></td><td></td><td>7</td><td>9</td>
    </tr>
    <tr>
        <td></td><td>1</td><td>9</td><td></td><td>8</td><td></td><td>3</td><td>2</td><td></td>
    </tr>
    <tr>
        <td>5</td><td></td><td></td><td></td><td>3</td><td></td><td>1</td><td>4</td><td></td>
    </tr>
    <tr>
        <td></td><td>8</td><td>3</td><td>2</td><td></td><td>4</td><td></td><td>5</td><td>1</td>
    </tr>
    <tr>
        <td>1</td><td>9</td><td>4</td><td></td><td></td><td></td><td>8</td><td>6</td><td></td>
    </tr>
    <tr>
        <td></td><td>5</td><td>7</td><td>8</td><td></td><td>9</td><td>2</td><td></td><td>3</td>
    </tr>
    <tr>
        <td></td><td></td><td>6</td><td>4</td><td>2</td><td>3</td><td>5</td><td>1</td><td>7</td>
    </tr>
    <tr>
        <td>8</td><td>2</td><td>1</td><td>6</td><td></td><td></td><td>4</td><td>3</td><td>9</td>
    </tr>
</table>

<h3>Step 1: Identify Naked Singles</h3>
<p>Starting with row 1, column 3 can only contain the number 1:</p>

<table>
    <tr>
        <td>3</td><td>4</td><td class="highlight">1</td><td>5</td><td>6</td><td>7</td><td></td><td>8</td><td></td>
    </tr>
    <tr>
        <td>2</td><td></td><td>5</td><td>1</td><td>4</td><td></td><td></td><td>7</td><td>9</td>
    </tr>
    <tr>
        <td></td><td>1</td><td>9</td><td></td><td>8</td><td></td><td>3</td><td>2</td><td></td>
    </tr>
    <tr>
        <td>5</td><td></td><td></td><td></td><td>3</td><td></td><td>1</td><td>4</td><td></td>
    </tr>
    <tr>
        <td></td><td>8</td><td>3</td><td>2</td><td></td><td>4</td><td></td><td>5</td><td>1</td>
    </tr>
    <tr>
        <td>1</td><td>9</td><td>4</td><td></td><td></td><td></td><td>8</td><td>6</td><td></td>
    </tr>
    <tr>
        <td></td><td>5</td><td>7</td><td>8</td><td></td><td>9</td><td>2</td><td></td><td>3</td>
    </tr>
    <tr>
        <td></td><td></td><td>6</td><td>4</td><td>2</td><td>3</td><td>5</td><td>1</td><td>7</td>
    </tr>
    <tr>
        <td>8</td><td>2</td><td>1</td><td>6</td><td></td><td></td><td>4</td><td>3</td><td>9</td>
    </tr>
</table>

<div class="explanation">
    <p><strong>Explanation:</strong> We've filled in the naked single for column 3, where the only valid number is 1.</p>
</div>

<h3>Final State</h3>
<p>After applying similar strategies, we arrive at a completed Sudoku grid:</p>

<table>
    <tr>
        <td>3</td><td>4</td><td>2</td><td>5</td><td>6</td><td>7</td><td>1</td><td>8</td><td>9</td>
    </tr>
    <tr>
        <td>2</td><td>6</td><td>5</td><td>1</td><td>4</td><td>8</td><td>9</td><td>7</td><td>3</td>
    </tr>
    <tr>
        <td>7</td><td>1</td><td>9</td><td>4</td><td>8</td><td>5</td><td>3</td><td>2</td><td>6</td>
    </tr>
    <tr>
        <td>5</td><td>2</td><td>8</td><td>3</td><td>7</td><td>6</td><td>1</td><td>4</td><td>9</td>
    </tr>
    <tr>
        <td>6</td><td>8</td><td>3</td><td>2</td><td>9</td><td>4</td><td>7</td><td>5</td><td>1</td>
    </tr>
    <tr>
        <td>1</td><td>9</td><td>4</td><td>7</td><td>5</td><td>2</td><td>8</td><td>6</td><td>3</td>
    </tr>
    <tr>
        <td>9</td><td>5</td><td>7</td><td>8</td><td>1</td><td>3</td><td>2</td><td>4</td><td>6</td>
    </tr>
    <tr>
        <td>4</td><td>3</td><td>6</td><td>9</td><td>2</td><td>1</td><td>5</td><td>3</td><td>7</td>
    </tr>
    <tr>
        <td>8</td><td>2</td><td>1</td><td>6</td><td>4</td><td>7</td><td>4</td><td>3</td><td>9</td>
    </tr>
</table>

<div class="explanation">
    <p><strong>Conclusion:</strong> The final Sudoku puzzle was solved through a combination of identifying naked singles and methodically filling in the numbers until completion.</p>
</div>

<style>
     table {
            border-collapse: collapse;
            margin: 20px 0;
        }
        td {
            width: 40px;
            height: 40px;
            text-align: center;
            font-size: 24px;
            border: 1px solid #000;
        }
        .highlight {
            background-color: #e8e83d;
        }
   
    .explanation {
        margin: 20px;
        font-size: 18px;
        color: #333;
    }
</style>
`;
            break;
        case 'example3':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solving Sudoku - Step by Step</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 20px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2, h3 {
            color: #333;
        }
        table {
            border-collapse: collapse;
            margin: 20px 0;
        }
        td {
            width: 40px;
            height: 40px;
            text-align: center;
            font-size: 24px;
            border: 1px solid #ccc;
            background-color: #fff;
        }
        .highlight {
            background-color: #ffeb3b;
            font-weight: bold;
        }
        .explanation {
            margin: 10px 0;
            padding: 10px;
            background-color: #e3f2fd;
            border-left: 5px solid #2196f3;
        }
    </style>
</head>
<body>

<h1>Solving Sudoku - Step by Step</h1>

<h2>Example 1</h2>
<p>Let's solve the following Sudoku puzzle:</p>

<table>
    <tr>
        <td>5</td><td>3</td><td></td><td></td><td>7</td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td>6</td><td></td><td></td><td>1</td><td>9</td><td>5</td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td></td><td>9</td><td>8</td><td></td><td></td><td></td><td></td><td>6</td><td></td>
    </tr>
    <tr>
        <td>8</td><td></td><td></td><td></td><td>6</td><td></td><td></td><td></td><td>3</td>
    </tr>
    <tr>
        <td>4</td><td></td><td></td><td>8</td><td></td><td>3</td><td></td><td></td><td>1</td>
    </tr>
    <tr>
        <td>7</td><td></td><td></td><td></td><td>2</td><td></td><td></td><td></td><td>6</td>
    </tr>
    <tr>
        <td></td><td>6</td><td></td><td></td><td></td><td></td><td>2</td><td>8</td><td></td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td>4</td><td>1</td><td>9</td><td></td><td></td><td>5</td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td></td><td>8</td><td></td><td></td><td>7</td><td>9</td>
    </tr>
</table>

<h3>Step 1: Identify Naked Singles</h3>
<p>Starting with row 1, column 3 can only contain the number 1:</p>

<table>
    <tr>
        <td>5</td><td>3</td><td class="highlight">1</td><td></td><td>7</td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td>6</td><td></td><td></td><td>1</td><td>9</td><td>5</td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td></td><td>9</td><td>8</td><td></td><td></td><td></td><td></td><td>6</td><td></td>
    </tr>
    <tr>
        <td>8</td><td></td><td></td><td></td><td>6</td><td></td><td></td><td></td><td>3</td>
    </tr>
    <tr>
        <td>4</td><td></td><td></td><td>8</td><td></td><td>3</td><td></td><td></td><td>1</td>
    </tr>
    <tr>
        <td>7</td><td></td><td></td><td></td><td>2</td><td></td><td></td><td></td><td>6</td>
    </tr>
    <tr>
        <td></td><td>6</td><td></td><td></td><td></td><td></td><td>2</td><td>8</td><td></td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td>4</td><td>1</td><td>9</td><td></td><td></td><td>5</td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td></td><td>8</td><td></td><td></td><td>7</td><td>9</td>
    </tr>
</table>

<div class="explanation">
    <p><strong>Explanation:</strong> The cell in row 1, column 3 can only be 1 due to the rules of Sudoku: it must not conflict with any numbers already in that row, column, or 3x3 grid.</p>
</div>

<h3>Step 2: Continue Solving</h3>
<p>Now, let's fill in row 1, column 4 with the number 2:</p>

<table>
    <tr>
        <td>5</td><td>3</td><td>1</td><td class="highlight">2</td><td>7</td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td>6</td><td></td><td></td><td>1</td><td>9</td><td>5</td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td></td><td>9</td><td>8</td><td></td><td></td><td></td><td></td><td>6</td><td></td>
    </tr>
    <tr>
        <td>8</td><td></td><td></td><td></td><td>6</td><td></td><td></td><td></td><td>3</td>
    </tr>
    <tr>
        <td>4</td><td></td><td></td><td>8</td><td></td><td>3</td><td></td><td></td><td>1</td>
    </tr>
    <tr>
        <td>7</td><td></td><td></td><td></td><td>2</td><td></td><td></td><td></td><td>6</td>
    </tr>
    <tr>
        <td></td><td>6</td><td></td><td></td><td></td><td></td><td>2</td><td>8</td><td></td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td>4</td><td>1</td><td>9</td><td></td><td></td><td>5</td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td></td><td>8</td><td></td><td></td><td>7</td><td>9</td>
    </tr>
</table>

<div class="explanation">
    <p><strong>Explanation:</strong> The number 2 fits in this cell without violating the Sudoku rules. We continue to look for cells with limited possibilities.</p>
</div>

<h3>Step 3: Continuing with More Numbers</h3>
<p>As we continue solving, we can fill in row 1, column 5 with 7, row 1, column 6 with 4, and so forth. Each time, we highlight the new number being placed:</p>

<table>
    <tr>
        <td>5</td><td>3</td><td>1</td><td>2</td><td class="highlight">7</td><td class="highlight">4</td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td>6</td><td></td><td></td><td>1</td><td>9</td><td>5</td><td></td><td></td><td></td>
    </tr>
    <tr>
        <td></td><td>9</td><td>8</td><td></td><td></td><td></td><td></td><td>6</td><td></td>
    </tr>
    <tr>
        <td>8</td><td></td><td></td><td></td><td>6</td><td></td><td></td><td></td><td>3</td>
    </tr>
    <tr>
        <td>4</td><td></td><td></td><td>8</td><td></td><td>3</td><td></td><td></td><td>1</td>
    </tr>
    <tr>
        <td>7</td><td></td><td></td><td></td><td>2</td><td></td><td></td><td></td><td>6</td>
    </tr>
    <tr>
        <td></td><td>6</td><td></td><td></td><td></td><td></td><td>2</td><td>8</td><td></td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td>4</td><td>1</td><td>9</td><td></td><td></td><td>5</td>
    </tr>
    <tr>
        <td></td><td></td><td></td><td></td><td>8</td><td></td><td></td><td>7</td><td>9</td>
    </tr>
</table>

<div class="explanation">
    <p><strong>Explanation:</strong> We have filled in more cells following the same principles, ensuring that each number is placed in a valid location according to Sudoku rules.</p>
</div>

<h3>Final State</h3>
<p>After solving the entire puzzle using similar strategies, we would arrive at a completed Sudoku grid:</p>

<table>
    <tr>
        <td>5</td><td>3</td><td>4</td><td>6</td><td>7</td><td>8</td><td>9</td><td>1</td><td>2</td>
    </tr>
    <tr>
        <td>6</td><td>7</td><td>2</td><td>1</td><td>9</td><td>5</td><td>3</td><td>4</td><td>8</td>
    </tr>
    <tr>
        <td>1</td><td>9</td><td>8</td><td>3</td><td>4</td><td>2</td><td>5</td><td>6</td><td>7</td>
    </tr>
    <tr>
        <td>8</td><td>5</td><td>9</td><td>7</td><td>6</td><td>1</td><td>4</td><td>2</td><td>3</td>
    </tr>
    <tr>
        <td>4</td><td>2</td><td>6</td><td>8</td><td>5</td><td>3</td><td>7</td><td>9</td><td>1</td>
    </tr>
    <tr>
        <td>7</td><td>1</td><td>3</td><td>9</td><td>2</td><td>4</td><td>8</td><td>5</td><td>6</td>
    </tr>
    <tr>
        <td>9</td><td>6</td><td>1</td><td>5</td><td>3</td><td>7</td><td>2</td><td>8</td><td>4</td>
    </tr>
    <tr>
        <td>2</td><td>8</td><td>7</td><td>4</td><td>1</td><td>9</td><td>6</td><td>3</td><td>5</td>
    </tr>
    <tr>
        <td>3</td><td>4</td><td>5</td><td>2</td><td>8</td><td>6</td><td>1</td><td>7</td><td>9</td>
    </tr>
</table>

<div class="explanation">
    <p><strong>Conclusion:</strong> The final Sudoku puzzle was solved through a systematic approach, utilizing the naked singles strategy and filling in the cells methodically.</p>
</div>

<h2>Example 2</h2>
<p>Now, let's solve another Sudoku puzzle:</p>

<table>
    <tr>
        <td>3</td><td>4</td><td></td><td>5</td><td>6</td><td>7</td><td></td><td>8</td><td></td>
    </tr>
    <tr>
        <td>2</td><td></td><td>5</td><td>1</td><td>4</td><td></td><td></td><td>7</td><td>9</td>
    </tr>
    <tr>
        <td></td><td>1</td><td>9</td><td></td><td>8</td><td></td><td>3</td><td>2</td><td></td>
    </tr>
    <tr>
        <td>5</td><td></td><td></td><td></td><td>3</td><td></td><td>1</td><td>4</td><td></td>
    </tr>
    <tr>
        <td></td><td>8</td><td>3</td><td>2</td><td></td><td>4</td><td></td><td>5</td><td>1</td>
    </tr>
    <tr>
        <td>1</td><td>9</td><td>4</td><td></td><td></td><td></td><td>8</td><td>6</td><td></td>
    </tr>
    <tr>
        <td></td><td>5</td><td>7</td><td>8</td><td></td><td>9</td><td>2</td><td></td><td>3</td>
    </tr>
    <tr>
        <td></td><td></td><td>6</td><td>4</td><td>2</td><td>3</td><td>5</td><td>1</td><td>7</td>
    </tr>
    <tr>
        <td>8</td><td>2</td><td>1</td><td>6</td><td></td><td></td><td>4</td><td>3</td><td>9</td>
    </tr>
</table>

<h3>Step 1: Identify Naked Singles</h3>
<p>Starting with row 1, column 3 can only contain the number 1:</p>

<table>
    <tr>
        <td>3</td><td>4</td><td class="highlight">1</td><td>5</td><td>6</td><td>7</td><td></td><td>8</td><td></td>
    </tr>
    <tr>
        <td>2</td><td></td><td>5</td><td>1</td><td>4</td><td></td><td></td><td>7</td><td>9</td>
    </tr>
    <tr>
        <td></td><td>1</td><td>9</td><td></td><td>8</td><td></td><td>3</td><td>2</td><td></td>
    </tr>
    <tr>
        <td>5</td><td></td><td></td><td></td><td>3</td><td></td><td>1</td><td>4</td><td></td>
    </tr>
    <tr>
        <td></td><td>8</td><td>3</td><td>2</td><td></td><td>4</td><td></td><td>5</td><td>1</td>
    </tr>
    <tr>
        <td>1</td><td>9</td><td>4</td><td></td><td></td><td></td><td>8</td><td>6</td><td></td>
    </tr>
    <tr>
        <td></td><td>5</td><td>7</td><td>8</td><td></td><td>9</td><td>2</td><td></td><td>3</td>
    </tr>
    <tr>
        <td></td><td></td><td>6</td><td>4</td><td>2</td><td>3</td><td>5</td><td>1</td><td>7</td>
    </tr>
    <tr>
        <td>8</td><td>2</td><td>1</td><td>6</td><td></td><td></td><td>4</td><td>3</td><td>9</td>
    </tr>
</table>

<div class="explanation">
    <p><strong>Explanation:</strong> We've filled in the naked single for column 3, where the only valid number is 1.</p>
</div>

<h3>Final State</h3>
<p>After applying similar strategies, we arrive at a completed Sudoku grid:</p>

<table>
    <tr>
        <td>3</td><td>4</td><td>2</td><td>5</td><td>6</td><td>7</td><td>1</td><td>8</td><td>9</td>
    </tr>
    <tr>
        <td>2</td><td>6</td><td>5</td><td>1</td><td>4</td><td>8</td><td>9</td><td>7</td><td>3</td>
    </tr>
    <tr>
        <td>7</td><td>1</td><td>9</td><td>4</td><td>8</td><td>5</td><td>3</td><td>2</td><td>6</td>
    </tr>
    <tr>
        <td>5</td><td>2</td><td>8</td><td>3</td><td>7</td><td>6</td><td>1</td><td>4</td><td>9</td>
    </tr>
    <tr>
        <td>6</td><td>8</td><td>3</td><td>2</td><td>9</td><td>4</td><td>7</td><td>5</td><td>1</td>
    </tr>
    <tr>
        <td>1</td><td>9</td><td>4</td><td>7</td><td>5</td><td>2</td><td>8</td><td>6</td><td>3</td>
    </tr>
    <tr>
        <td>9</td><td>5</td><td>7</td><td>8</td><td>1</td><td>3</td><td>2</td><td>4</td><td>6</td>
    </tr>
    <tr>
        <td>4</td><td>3</td><td>6</td><td>9</td><td>2</td><td>1</td><td>5</td><td>3</td><td>7</td>
    </tr>
    <tr>
        <td>8</td><td>2</td><td>1</td><td>6</td><td>4</td><td>7</td><td>4</td><td>3</td><td>9</td>
    </tr>
</table>

<div class="explanation">
    <p><strong>Conclusion:</strong> The final Sudoku puzzle was solved through a combination of identifying naked singles and methodically filling in the numbers until completion.</p>
</div>

<style>
     table {
            border-collapse: collapse;
            margin: 20px 0;
        }
        td {
            width: 40px;
            height: 40px;
            text-align: center;
            font-size: 24px;
            border: 1px solid #000;
        }
        .highlight {
            background-color: #e8e83d;
        }
   
    .explanation {
        margin: 20px;
        font-size: 18px;
        color: #333;
    }
</style>
`;
            break;
        case 'solving_techniques':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sudoku Solving Techniques</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
        }
        h1, h2, h3 {
            color: #333;
        }
        p {
            line-height: 1.6;
        }
        table {
            border-collapse: collapse;
            margin: 20px 0;
        }
        td {
            width: 40px;
            height: 40px;
            text-align: center;
            border: 1px solid #333;
            font-size: 24px;
            background-color: #fff;
        }
        .technique {
            margin-bottom: 40px;
        }
    </style>
</head>
<body>
    <h1>Sudoku Solving Techniques</h1>
    <p>This page provides an overview of various techniques used to solve Sudoku puzzles.</p>

    <div class="technique">
        <h2>Naked Singles</h2>
        <p>The Naked Singles technique involves identifying a cell that has only one possible number due to the existing numbers in its row, column, and box.</p>
        <h3>Example</h3>
        <table>
            <tr>
                <td>5</td><td>3</td><td></td><td>6</td><td></td><td>8</td><td>4</td><td>9</td><td>7</td>
            </tr>
            <tr>
                <td>6</td><td></td><td></td><td>1</td><td>9</td><td>5</td><td>2</td><td></td><td>3</td>
            </tr>
            <tr>
                <td>3</td><td>9</td><td></td><td>2</td><td>5</td><td>4</td><td>1</td><td>6</td><td></td>
            </tr>
            <tr>
                <td>8</td><td>4</td><td>1</td><td>3</td><td>6</td><td>9</td><td>5</td><td>7</td><td>2</td>
            </tr>
            <tr>
                <td>4</td><td>2</td><td>3</td><td>8</td><td>7</td><td>1</td><td>6</td><td>5</td><td>9</td>
            </tr>
            <tr>
                <td>7</td><td>1</td><td>2</td><td>4</td><td>3</td><td>6</td><td>8</td><td></td><td>5</td>
            </tr>
            <tr>
                <td>9</td><td>6</td><td>4</td><td></td><td>8</td><td>2</td><td>9</td><td>1</td><td>3</td>
            </tr>
            <tr>
                <td>2</td><td>8</td><td>5</td><td>7</td><td>4</td><td>3</td><td>1</td><td>2</td><td>6</td>
            </tr>
            <tr>
                <td>1</td><td>7</td><td>6</td><td>5</td><td>2</td><td>9</td><td>3</td><td>8</td><td>4</td>
            </tr>
        </table>
        <p>Here, the empty cell in the first row and the third column can only be filled with the number 1, as it is the only missing number in that row, column, and 3x3 box.</p>
    </div>

    <div class="technique">
        <h2>Hidden Singles</h2>
        <p>The Hidden Singles technique focuses on identifying a number that can only fit in one cell within a row, column, or box, even if that cell has other candidates.</p>
        <h3>Example</h3>
        <table>
            <tr>
                <td>5</td><td>3</td><td>1</td><td>6</td><td></td><td>8</td><td>4</td><td>9</td><td>7</td>
            </tr>
            <tr>
                <td>6</td><td>8</td><td>7</td><td>1</td><td>9</td><td>5</td><td>2</td><td>4</td><td>3</td>
            </tr>
            <tr>
                <td>3</td><td>9</td><td>8</td><td>2</td><td>5</td><td>4</td><td>1</td><td>6</td><td>5</td>
            </tr>
            <tr>
                <td>8</td><td>4</td><td>1</td><td>3</td><td>6</td><td>9</td><td>5</td><td>7</td><td>2</td>
            </tr>
            <tr>
                <td>4</td><td>2</td><td>3</td><td>8</td><td>1</td><td>1</td><td>6</td><td>5</td><td>9</td>
            </tr>
            <tr>
                <td>7</td><td>1</td><td>2</td><td>4</td><td>3</td><td>6</td><td>8</td><td>1</td><td>5</td>
            </tr>
            <tr>
                <td>9</td><td>6</td><td>4</td><td>5</td><td>7</td><td>2</td><td>9</td><td>1</td><td>8</td>
            </tr>
            <tr>
                <td>2</td><td>3</td><td>5</td><td>7</td><td>4</td><td>1</td><td>3</td><td>8</td><td>9</td>
            </tr>
            <tr>
                <td>1</td><td>2</td><td>6</td><td>3</td><td>9</td><td>7</td><td>2</td><td>5</td><td>4</td>
            </tr>
        </table>
        <p>In this example, the number 9 is a hidden single in the last row and can only go in the second cell of that row.</p>
    </div>

    <div class="technique">
        <h2>Pointing Pairs</h2>
        <p>Pointing pairs are used when a number can only exist in one row or column of a box. In such cases, that number can be eliminated from other cells in the intersecting row or column outside the box.</p>
        <h3>Example</h3>
        <table>
            <tr>
                <td>5</td><td>3</td><td>1</td><td>6</td><td>2</td><td>8</td><td>4</td><td>9</td><td>7</td>
            </tr>
            <tr>
                <td>6</td><td>8</td><td>7</td><td>1</td><td>9</td><td>5</td><td>2</td><td>4</td><td>3</td>
            </tr>
            <tr>
                <td>3</td><td>9</td><td>8</td><td>2</td><td>5</td><td>4</td><td>1</td><td>6</td><td>5</td>
            </tr>
            <tr>
                <td>8</td><td>4</td><td>1</td><td>3</td><td>6</td><td>9</td><td>5</td><td>7</td><td>2</td>
            </tr>
            <tr>
                <td>4</td><td>2</td><td>3</td><td>8</td><td>1</td><td>1</td><td>6</td><td>5</td><td>9</td>
            </tr>
            <tr>
                <td>7</td><td>1</td><td>2</td><td>4</td><td>3</td><td>6</td><td>8</td><td>1</td><td>5</td>
            </tr>
            <tr>
                <td>9</td><td>6</td><td>4</td><td>5</td><td>7</td><td>2</td><td>9</td><td>1</td><td>8</td>
            </tr>
            <tr>
                <td>2</td><td>3</td><td>5</td><td>7</td><td>4</td><td>1</td><td>3</td><td>8</td><td>9</td>
            </tr>
            <tr>
                <td>1</td><td>2</td><td>6</td><td>3</td><td>9</td><td>7</td><td>2</td><td>5</td><td>4</td>
            </tr>
        </table>
        <p>Here, the number 1 can only appear in the first row of the bottom left box. Therefore, it can be eliminated from the other cells in that column outside the box.</p>
    </div>

    <div class="technique">
        <h2>X-Wing</h2>
        <p>The X-Wing technique identifies a pattern that can eliminate candidates from other cells in specific rows and columns, effectively reducing the options for those numbers.</p>
        <h3>Example</h3>
        <table>
            <tr>
                <td>5</td><td>3</td><td>1</td><td>6</td><td>2</td><td>8</td><td>4</td><td>9</td><td>7</td>
            </tr>
            <tr>
                <td>6</td><td>8</td><td>7</td><td>1</td><td>9</td><td>5</td><td>2</td><td>4</td><td>3</td>
            </tr>
            <tr>
                <td>3</td><td>9</td><td>8</td><td>2</td><td>5</td><td>4</td><td>1</td><td>6</td><td>5</td>
            </tr>
            <tr>
                <td>8</td><td>4</td><td>1</td><td>3</td><td>6</td><td>9</td><td>5</td><td>7</td><td>2</td>
            </tr>
            <tr>
                <td>4</td><td>2</td><td>3</td><td>8</td><td>1</td><td>1</td><td>6</td><td>5</td><td>9</td>
            </tr>
            <tr>
                <td>7</td><td>1</td><td>2</td><td>4</td><td>3</td><td>6</td><td>8</td><td>1</td><td>5</td>
            </tr>
            <tr>
                <td>9</td><td>6</td><td>4</td><td>5</td><td>7</td><td>2</td><td>9</td><td>1</td><td>8</td>
            </tr>
            <tr>
                <td>2</td><td>3</td><td>5</td><td>7</td><td>4</td><td>1</td><td>3</td><td>8</td><td>9</td>
            </tr>
            <tr>
                <td>1</td><td>2</td><td>6</td><td>3</td><td>9</td><td>7</td><td>2</td><td>5</td><td>4</td>
            </tr>
        </table>
        <p>The number 9 forms an X shape across the grid, which allows us to eliminate 9 from the intersecting cells in the columns of the X.</p>
    </div>

    <h2>Conclusion</h2>
    <p>These are just a few of the techniques used to solve Sudoku puzzles. Understanding and practicing these techniques can greatly improve your Sudoku-solving skills.</p>
</body>
</html>
`;
            break;
        case 'puzzle_types':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Types of Sudoku Puzzles</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f8f8f8;
        }
        h1, h2 {
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: center;
            font-size: 18px;
        }
        .type {
            background-color: #fff;
            padding: 10px;
            border-radius: 5px;
            margin: 20px 0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <h1>Types of Sudoku Puzzles</h1>
    <p>Sudoku puzzles come in various types, each offering a unique challenge and experience. Here are some of the most popular types of Sudoku:</p>

    <div class="type">
        <h2>Classic Sudoku</h2>
        <p>Classic Sudoku is the most common type of Sudoku puzzle. It consists of a 9x9 grid divided into nine 3x3 subgrids. The objective is to fill the grid so that each column, each row, and each 3x3 subgrid contain all the numbers from 1 to 9 without repetition.</p>
        <h3>Example</h3>
        <table>
            <tr>
                <td>5</td><td>3</td><td></td><td>6</td><td></td><td>8</td><td>4</td><td>9</td><td>7</td>
            </tr>
            <tr>
                <td>6</td><td>7</td><td>2</td><td></td><td>1</td><td>4</td><td>5</td><td>3</td><td></td>
            </tr>
            <tr>
                <td></td><td>1</td><td>9</td><td>5</td><td>7</td><td></td><td></td><td>6</td><td>8</td>
            </tr>
            <tr>
                <td>8</td><td></td><td>6</td><td>1</td><td>9</td><td>2</td><td>7</td><td>4</td><td>3</td>
            </tr>
            <tr>
                <td></td><td>4</td><td>5</td><td>2</td><td></td><td>3</td><td>8</td><td>1</td><td>6</td>
            </tr>
            <tr>
                <td>7</td><td>2</td><td>9</td><td></td><td>8</td><td>5</td><td>1</td><td>2</td><td>4</td>
            </tr>
            <tr>
                <td>9</td><td>6</td><td>1</td><td>3</td><td>5</td><td></td><td>2</td><td>7</td><td>8</td>
            </tr>
            <tr>
                <td>4</td><td>8</td><td>3</td><td>7</td><td>6</td><td>1</td><td></td><td>5</td><td>9</td>
            </tr>
            <tr>
                <td>2</td><td>5</td><td></td><td>4</td><td>2</td><td>9</td><td>6</td><td>8</td><td></td>
            </tr>
        </table>
    </div>

    <div class="type">
        <h2>Mini Sudoku</h2>
        <p>Mini Sudoku puzzles are smaller versions of classic Sudoku, typically played on a 4x4 or 6x6 grid. The rules are the same: fill the grid with numbers so that they do not repeat in any row, column, or region.</p>
        <h3>Example (4x4)</h3>
        <table>
            <tr>
                <td>1</td><td>2</td><td></td><td>4</td>
            </tr>
            <tr>
                <td>3</td><td></td><td>1</td><td>2</td>
            </tr>
            <tr>
                <td></td><td>4</td><td>3</td><td>1</td>
            </tr>
            <tr>
                <td>4</td><td>1</td><td>2</td><td>3</td>
            </tr>
        </table>
    </div>

    <div class="type">
        <h2>Sudoku Variants</h2>
        <p>Sudoku variants include different rules or grid sizes, such as:</p>
        <ul>
            <li><strong>Jigsaw Sudoku</strong>: The grid is divided into irregular shapes instead of standard boxes.</li>
            <li><strong>Hypersudoku</strong>: Features extra regions where the same number cannot repeat.</li>
            <li><strong>Samurai Sudoku</strong>: Combines five overlapping grids into a larger puzzle.</li>
        </ul>
    </div>

    <div class="type">
        <h2>Irregular Sudoku</h2>
        <p>Irregular Sudoku features an unusual grid layout where the regions do not conform to standard boxes. The goal remains the same: fill in the grid according to Sudoku rules.</p>
        <h3>Example</h3>
        <table>
            <tr>
                <td>1</td><td>2</td><td>3</td><td></td><td>4</td>
            </tr>
            <tr>
                <td></td><td></td><td>1</td><td>2</td><td>3</td>
            </tr>
            <tr>
                <td>2</td><td>3</td><td>4</td><td>1</td><td>5</td>
            </tr>
            <tr>
                <td>4</td><td>5</td><td></td><td>3</td><td>2</td>
            </tr>
            <tr>
                <td>5</td><td></td><td>2</td><td>4</td><td>1</td>
            </tr>
        </table>
    </div>

    <h2>Conclusion</h2>
    <p>These are some of the most popular types of Sudoku puzzles, each offering its own unique twist on the traditional game. Whether you're a beginner or an expert, there's a Sudoku type that can challenge and entertain you!</p>
</body>
</html>
`;
            break;
     
        case 'practice_puzzles':
            contentArea.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practicing Sudoku</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f8f8f8;
        }
        h1, h2 {
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: center;
            font-size: 18px;
        }
        .practice {
            background-color: #fff;
            padding: 10px;
            border-radius: 5px;
            margin: 20px 0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <h1>Practicing Sudoku</h1>
    <p>Practicing Sudoku is essential to improve your problem-solving skills and enhance your ability to recognize patterns. Here are some effective methods to practice Sudoku:</p>

    <div class="practice">
        <h2>1. Start with Easy Puzzles</h2>
        <p>Begin with easy Sudoku puzzles to familiarize yourself with the rules and basic techniques. Gradually increase the difficulty as you become more comfortable.</p>
        <h3>Example of Easy Puzzle</h3>
        <table>
            <tr>
                <td>5</td><td>3</td><td></td><td></td><td>7</td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
                <td>6</td><td></td><td></td><td>1</td><td>9</td><td>5</td><td></td><td></td><td></td>
            </tr>
            <tr>
                <td></td><td>9</td><td>8</td><td></td><td></td><td></td><td></td><td>6</td><td></td>
            </tr>
            <tr>
                <td>8</td><td></td><td></td><td></td><td>6</td><td></td><td></td><td>7</td><td>9</td>
            </tr>
            <tr>
                <td>4</td><td></td><td></td><td>8</td><td></td><td>3</td><td></td><td></td><td>1</td>
            </tr>
            <tr>
                <td>7</td><td></td><td></td><td></td><td>2</td><td></td><td>6</td><td></td><td></td>
            </tr>
            <tr>
                <td></td><td>6</td><td></td><td></td><td></td><td>2</td><td>9</td><td></td><td></td>
            </tr>
            <tr>
                <td>2</td><td></td><td>1</td><td>7</td><td>4</td><td></td><td>3</td><td>8</td><td></td>
            </tr>
            <tr>
                <td>1</td><td></td><td>9</td><td></td><td>8</td><td></td><td></td><td>4</td><td>6</td>
            </tr>
        </table>
    </div>

    <div class="practice">
        <h2>2. Use Sudoku Apps and Websites</h2>
        <p>There are many Sudoku apps and websites that provide daily puzzles of varying difficulty levels. These platforms often include hints and solutions, allowing you to learn as you play.</p>
    </div>

    <div class="practice">
        <h2>3. Analyze Your Mistakes</h2>
        <p>After completing a puzzle, review any mistakes you made. Understanding why a number placement was incorrect will help improve your skills.</p>
    </div>

    <div class="practice">
        <h2>4. Practice Different Techniques</h2>
        <p>Focus on specific solving techniques like Naked Singles, Hidden Singles, Naked Pairs, and X-Wing. Solving puzzles using these methods will improve your pattern recognition and problem-solving skills.</p>
        <h3>Example of a Hidden Single</h3>
        <table>
            <tr>
                <td>5</td><td>3</td><td>7</td><td>6</td><td></td><td>8</td><td>4</td><td>9</td><td>2</td>
            </tr>
            <tr>
                <td>6</td><td>7</td><td>2</td><td>5</td><td>1</td><td>4</td><td>3</td><td>8</td><td>9</td>
            </tr>
            <tr>
                <td>1</td><td>9</td><td>8</td><td>3</td><td>2</td><td>7</td><td>5</td><td>6</td><td>4</td>
            </tr>
            <tr>
                <td>8</td><td>5</td><td>6</td><td>1</td><td>4</td><td>9</td><td>7</td><td>2</td><td>3</td>
            </tr>
            <tr>
                <td>4</td><td>2</td><td>3</td><td>8</td><td>6</td><td>5</td><td>9</td><td>1</td><td>7</td>
            </tr>
            <tr>
                <td>7</td><td>8</td><td>1</td><td>9</td><td>3</td><td>2</td><td>6</td><td>4</td><td>5</td>
            </tr>
            <tr>
                <td>9</td><td>6</td><td>4</td><td>2</td><td>5</td><td>1</td><td>8</td><td>3</td><td>7</td>
            </tr>
            <tr>
                <td>2</td><td>4</td><td>5</td><td>7</td><td>9</td><td>3</td><td>1</td><td>5</td><td>8</td>
            </tr>
            <tr>
                <td>3</td><td>1</td><td>9</td><td>4</td><td>8</td><td>6</td><td>2</td><td>7</td><td>3</td>
            </tr>
        </table>
    </div>

    <div class="practice">
        <h2>5. Join Sudoku Communities</h2>
        <p>Engage with fellow Sudoku enthusiasts through online forums and local clubs. Sharing strategies and solving puzzles together can greatly enhance your skills.</p>
    </div>

    <div class="practice">
        <h2>6. Challenge Yourself Regularly</h2>
        <p>Set a goal to solve a certain number of puzzles each week. Increasing the frequency and difficulty of the puzzles will help you develop faster solving techniques.</p>
    </div>

    <h2>Conclusion</h2>
    <p>By incorporating these practice methods into your routine, you can significantly enhance your Sudoku skills. Remember to enjoy the process and challenge yourself regularly!</p>
</body>
</html>
`;
            break;
        default:
            contentArea.innerHTML = `<h1>Welcome to Sudoku Learning!</h1>
                                     <p>Get started with the links on the left!</p>`;
            break;
    }
}
