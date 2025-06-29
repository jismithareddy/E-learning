// checkers.js

// Function to load content based on the selected topic
function loadContent(topic) {
    const contentArea = document.getElementById("contentArea");
    let content = '';

    switch(topic) {
        case 'introduction':
            content = `
       <h1>Introduction to Checkers</h1>
<p>
    Checkers, also known as draughts, is a classic board game that has captivated players for centuries with its blend of strategy and simplicity. Played on an 8x8 square board, the game is typically enjoyed by two players who each control twelve pieces, usually colored dark and light. The objective of checkers is to capture all of your opponent's pieces or block them so they can no longer make a legal move.
    
</p>
<div>
<div> 
    <h3>checkers board</h3><img src="checkers images/board.png" alt="checkers board"></div>

<div><h3>capturing</h3>
<img src="checkers images/kill.png" alt="kill" style="width:18%;height: auto;"></div>
    <div><h3>initial moving chances</h3>
    <img src="checkers images/board1.png" alt=" movements" style="width:18%;height: auto;">
</div>
</div>

<h2>History</h2>
<p>
    The origins of checkers can be traced back to ancient civilizations, with versions of the game believed to have been played in Mesopotamia around 3000 BC. The modern version of checkers that we know today evolved from various regional variants, becoming popular in Europe in the 12th century. The game has since spread worldwide, with numerous adaptations and rulesets tailored to different cultures.
</p>
            `;
            break;
        case 'game_rules':
            content = `
                <h1>Game Rules</h1>
                <p>Each player starts with 12 pieces placed on the three rows closest to them. Players move their pieces diagonally and capture opponent pieces by jumping over them.</p>
                <p>Once a piece reaches the opponent's back row, it is crowned and becomes a "king," gaining the ability to move both forward and backward.</p>
                <h2>Game Setup</h2>
    <img src="checkers images/board.png" alt="checkers board">
    <p>
        The game board consists of 64 squares arranged in an alternating color pattern. Each player starts with their pieces positioned on the three rows closest to them, occupying only the dark squares. The pieces move diagonally, and the initial setup is crucial for strategic positioning as the game progresses.
    </p>
    <h2>Basic Rules</h2>
    <p>
        <strong>Movement:</strong> Players take turns moving their pieces diagonally forward to an adjacent unoccupied dark square. If a player's piece lands on a square occupied by an opponent's piece, they must capture it by jumping over it to the next empty square directly beyond. The captured piece is then removed from the board.
        
    </p><img src="checkers images/rules.png" alt="rules" style="width:30%;height: auto;">
    <p>
        <strong>King Me:</strong> When a piece reaches the farthest row from its starting position, it is "kinged." This piece is then stacked with another piece of the same color, signifying its new status. Kings can move both forward and backward diagonally, giving them more mobility and strategic options.
    </p>
    <p>
        <strong>Winning the Game:</strong> A player wins by capturing all of their opponent's pieces or by blocking their opponent in such a way that they cannot make any legal moves. If a player has no legal moves remaining, they forfeit the game.
    </p>
            `;
            break;
        case 'strategies':
            content = `
                <h1>Strategies</h1>
                <p>To excel in checkers, players should aim to control the center of the board, protect their pieces, and create opportunities for double jumps.</p>
                <p>Remember to think ahead and anticipate your opponent's moves!</p>
                <h2>Strategies for Success</h2>
    <p>
        <strong>Control the Center:</strong> Dominating the central squares of the board provides greater mobility and options for both offense and defense.
    </p>
    <p>
        <strong>Piece Safety:</strong> Avoid leaving pieces vulnerable to easy captures. It's often beneficial to keep pieces together to support one another.
    </p>
    <p>
        <strong>Create Kings:</strong> Prioritize advancing your pieces to the last row. Kings are powerful and can change the dynamics of the game.
    </p>
    <p>
        <strong>Force Captures:</strong> Sometimes, creating a situation where your opponent must capture can lead to advantageous trades or setups for future moves.
    </p>
    <p>
        <strong>Endgame Awareness:</strong> As the board empties, the dynamics change significantly. Focus on maximizing your remaining pieces while minimizing your opponent's options.
    </p>
            `;
            break;
        case 'examples':
            content = `
                <h1>Examples of Gameplay</h1>
                <p>Here are some common moves and strategies:</p>
                <ul>
                    <li>Opening Move: Start by advancing your pieces towards the center.</li>
                    <li>Defensive Play: Position your pieces to block opponent moves.</li>
                    <li>Jumping Strategy: Look for opportunities to make double jumps.</li>
                </ul>
            `;
            break;
        case 'practice_games':
            content = `
                <h1>Practice Games</h1>
                <p>Try playing against a friend or using an online platform to enhance your skills. The more you practice, the better you'll become!</p>
            `;
            break;
            case 'chainse':
                content=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How to Play Chinese Checkers</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
            color: #333;
        }
        h1, h2 {
            color: #444;
        }
        h3 {
            color: #555;
        }
        .image-container {
            text-align: center;
            margin: 20px 0;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        ul {
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <h1>How to Play Chinese Checkers</h1>

    <h2>Objective of the Game</h2>
    <p>
        The goal of Chinese Checkers is to move all of your pieces across the board to the opposite star point before your opponents do. 
        Players must strategize to not only advance their pieces but also to block their opponents.
    </p>
    
    <div class="image-container">
        <img src="checkers images/chainnes-checkers.png" alt="Chinese Checkers Board" />
        <p>Image: The Chinese Checkers board showing the star-shaped layout.</p>
    </div>

    <h2>Game Setup</h2>
    <p>
        To set up the game:
    </p>
    <ul>
        <li>Each player chooses a color and places their ten pieces in one of the star points (the triangle at their base).</li>
        <li>The game can be played with 2 to 6 players.</li>
        <li>Players take turns moving their pieces toward the opposite star point.</li>
    </ul>

    <div class="image-container">
        <img src="checkers images/setup.png" alt="Setup of Chinese Checkers" />
        <p>Image: An example of the setup for Chinese Checkers.</p>
    </div>

    <h2>Basic Rules</h2>
    <p>Players take turns in a clockwise direction. During a turn, a player can:</p>
    <ul>
        <li>Move one piece to an adjacent empty hole.</li>
        <li>Jump over an adjacent piece (either their own or an opponent's) into an empty hole directly on the opposite side. This can be repeated multiple times in a single turn, as long as each jump lands in an empty hole.</li>
        <li>Pieces can only move forward or sideways, not backward.</li>
    </ul>

    <div class="image-container">
        <img src="checkers images/jump.png" alt="Chinese Checkers Jumping" />
        <p>Image: A visual showing how to jump over pieces in Chinese Checkers.</p>
    </div>

    <h2>Winning the Game</h2>
    <p>
        The first player to move all of their pieces into the star point directly across from their starting point is the winner. 
        Players must strategize to make efficient moves while preventing opponents from progressing.
    </p>

   

    <h2>Basic Strategies</h2>
    <ul>
        <li>Try to jump over your own pieces to create chains of jumps.</li>
        <li>Position your pieces to block opponents from advancing.</li>
        <li>Always look for multiple jumps to maximize your movement each turn.</li>
        <li>Stay aware of your opponent's positions and plan your moves accordingly.</li>
    </ul>

    

    <h2>Conclusion</h2>
    <p>
        Chinese Checkers is a fun and engaging game that combines strategy with excitement. With practice, players can develop skills to enhance their gameplay and enjoy the competition with friends and family.
    </p>

</body>
</html>
`;
break;
        default:
            content = `<h1>Error: Topic not found</h1>`;
            break;
    }

    // Update the content area with the new content
    contentArea.innerHTML = content;
}


