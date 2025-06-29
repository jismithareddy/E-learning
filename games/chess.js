function loadContent(topic) {
            const contentArea = document.getElementById('contentArea');
            let content = '';

            switch(topic) {
                case 'introduction':
                    content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to Chess</title>
    <style>
        /* General Styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }

       

        

        /* Main Content Area */
        #contentArea {
            padding: 20px;
            background-color: white;
            margin: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }

        h2 {
            color: #555;
        }

        p {
            line-height: 1.6;
            margin: 15px 0;
        }
        img{
            height: 300px;
            width:300px;
        }

        /* Footer styles */
        footer {
            background-color: black;
            color: rgb(212, 124, 15);
            padding: 20px;
            text-align: center;
            width: 100%;
            position: relative;
            bottom: 0;
        }
    </style>
</head>
<body>



<main id="contentArea">
    <h1>Introduction to Chess</h1>
    <h2>What is Chess?</h2>
    <img src="chess-images/chess-board.png" alt="Chessboard">
    <p>Chess is a two-player strategy board game that has been played for centuries. It is a game of skill and tactics, where players compete to checkmate their opponent's king while protecting their own. The game is played on an 8x8 grid known as the chessboard, featuring 64 squares of alternating colors.</p>

    <h2>History of Chess</h2>
    <img src="chess-images/history.png" alt="History of Chess">
    <p>The origins of chess date back to the 6th century in India, where it was known as Chaturanga. It spread to Persia, then to the Islamic world, and finally to Europe. Over the centuries, chess has evolved, with various rules and pieces changing along the way. Today, chess is recognized worldwide and has a vibrant competitive scene.</p>

    <h2>The Chess Pieces</h2>
    <img src="chess-images/peices.png" alt="Chess Pieces">
    <img src="chess-images/peices1.png" alt="Chess Pieces">
    <img src="chess-images/peices2.png" alt="Chess Pieces" style="width: 50%;height: auto;">
    <p>Each player begins with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and six pawns. Each type of piece has unique movements, contributing to the game's complexity:</p>
    <ul>
        <li><strong>King:</strong> Moves one square in any direction.</li>
        <li><strong>Queen:</strong> Moves any number of squares in any direction.</li>
        <li><strong>Rook:</strong> Moves any number of squares horizontally or vertically.</li>
        <li><strong>Bishop:</strong> Moves any number of squares diagonally.</li>
        <li><strong>Knight:</strong> Moves in an L-shape (two squares in one direction and one square perpendicular).</li>
        <li><strong>Pawn:</strong> Moves forward one square but captures diagonally.</li>
    </ul>

    <h2>How to Play Chess</h2>
    <img src="chess-images/play.png" alt="How to Play Chess">
    <p>The objective of chess is to checkmate your opponent's king, meaning the king is in a position to be captured and cannot escape. The game begins with each player positioning their pieces strategically. Players take turns making moves, with the goal of capturing pieces and creating threats to the opponent's king.</p>

    <h2>Conclusion</h2>
    <p>Chess is a game of endless possibilities, where each match presents a unique challenge. Whether you are a beginner or an experienced player, there is always something new to learn. Dive into the world of chess, and enjoy the journey of strategy and skill!</p>
</main>



</body>
</html>


`;
                    break;
                case 'opening':
                    content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chess: Opening Principles</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Chess: Opening Principles</h1>
    </header>
    <main>
        <section>
            <h2>Introduction</h2>
            <p>
                In chess, the opening phase is crucial as it sets the foundation for the entire game. Strong opening principles help players control key areas of the board, protect their king, and position their pieces effectively for the midgame. Following these principles ensures a balanced start and flexibility in the game.
            </p>
            <img src="chess-images/chess-open.png" alt="Chess Opening Image" style="width: 100%; height: auto;">
        </section>

        <section>
            <h2>Key Principles</h2>
            <ul>
                <li>
                    <h3>1. Control the Center</h3>
                    <p>
                        The central squares in chess – specifically d4, d5, e4, and e5 – are crucial because they allow pieces to influence large sections of the board. By occupying these squares with pawns or controlling them with pieces, you limit your opponent’s movement and open up options for your own pieces.
                        <em>Example:</em> A common first move in chess is to advance the e-pawn to e4 or the d-pawn to d4, establishing a central presence.
                    </p>
                    <p><strong>Why it matters:</strong> Control over the center makes it easier for your pieces to move freely across the board, providing better positioning and defensive options.</p>
                    <img src="chess-images/center-control.png" alt="Controlling the Center" style="width: 40%; height: auto;">
                    <img src="chess-images/chess-open1.png" alt="Controlling the Center" style="width: 30%; height: auto;">
                    
                </li>

                <li>
                    <h3>2. Develop Pieces Quickly</h3>
                    <p>
                        Development means bringing your pieces from their starting positions into active roles on the board. It’s especially important to develop the knights and bishops early because they can control central squares and prepare for attacks. Avoid moving the same piece multiple times in the opening phase, as this can waste time and leave you behind in development.
                    </p>
                    <p><em>Example:</em> Try to develop each knight and bishop by moves three to four, ideally placing them so they control central squares.</p>
                    <img src="chess-images/display-quick.png" alt="Developing Pieces" style="width: 30%; height: auto;">
                </li>

                <li>
                    <h3>3. Ensure King Safety</h3>
                    <p>
                        King safety is essential in every phase of chess, and in the opening, this is typically achieved by castling. Castling is a move that places the king behind a wall of pawns and activates a rook, positioning it in the center. This is one of the only moves in chess that allows you to move two pieces at once – the king and rook – and is a powerful way to safeguard the king.
                    </p>
                    <p><em>Tip:</em> Try to castle within the first ten moves unless there's a strong reason to delay, as an uncastled king can become a target.</p>
                    <img src="chess-images/castling.png" alt="King Castling" style="width: 40%; height: auto;">
                </li>

                <li>
                    <h3>4. Avoid Premature Queen Moves</h3>
                    <p>
                        Although the queen is the most powerful piece, moving it too early can lead to problems. An early queen move can make it an easy target for your opponent’s developing pieces. This often results in “tempo loss” where you’re forced to move the queen repeatedly to avoid attacks, rather than developing other pieces effectively.
                    </p>
                    <p><strong>Example:</strong> Instead of bringing out your queen, focus on knights and bishops, then consider moving the queen to a safe square after these pieces are developed.</p>
                    <img src="chess-images/earlyqueen.png" alt="Premature Queen Move" style="width: 40%; height: auto;">
                </li>

                <li>
                    <h3>5. Avoid Unnecessary Pawn Moves</h3>
                    <p>
                        Pawns are essential for controlling space and protecting your pieces, but each pawn move leaves a potential weakness. Moving too many pawns early in the game, or advancing pawns without a clear strategy, can leave holes in your defense and make it easier for your opponent to attack.
                    </p>
                    <p><strong>Tip:</strong> Use pawns primarily to control the center and to create space for piece development rather than as primary attackers in the opening phase.</p>
                    <img src="chess-images/pawn-structure.png" alt="Pawn Structure" style="width: 40%; height: auto;">
                </li>
            </ul>
        </section>

        <section>
            <h2>Additional Tips for a Strong Opening</h2>
            <ul>
                <li>
                    <strong>Think Ahead:</strong> Don’t just react to your opponent’s moves. Try to understand their goals and adjust your own moves to counter any threats.
                </li>
                <li>
                    <strong>Prepare for Common Openings:</strong> Learn a few standard openings, such as the "Ruy Lopez" for white or "Sicilian Defense" for black. Familiarity with common lines can help you make quicker, more informed moves.
                </li>
                <li>
                    <strong>Coordinate Your Pieces:</strong> Aim for a unified strategy where each piece contributes to your overall goal, whether it's controlling space, setting up an attack, or maintaining a strong defense.
                </li>
            </ul>
        </section>

        <section>
            <h2>Common Chess Openings</h2>
            <p>Here are a few popular chess openings that follow the principles described:</p>
            <ul>
                <li><strong>Ruy López:</strong> A classic opening for white, starting with 1.e4 e5 2.Nf3 Nc6 3.Bb5, focusing on controlling the center and applying pressure on black's defenses.</li>
                <li><strong>Sicilian Defense:</strong> Black’s response to 1.e4 with 1...c5, aiming to control the center indirectly and create counterattacking opportunities.</li>
                <li><strong>Queen’s Gambit:</strong> A highly respected opening for white, starting with 1.d4 d5 2.c4, where white temporarily sacrifices a pawn to gain better control of the center.</li>
            </ul>
            <img src="chess-images/way1.png" alt="Chess Openings Examples" style="width: 30%; height: auto; margin-right:80px ;">
            <img src="chess-images/way2.png" alt="Chess Openings Examples" style="width: 50%; height: auto;">
            <img src="chess-images/way3.png" alt="Chess Openings Examples" style="width: 40%; height: auto; margin-top: 10px;">
            <p>Practicing these openings helps develop a solid foundation for understanding chess strategy.</p>
        </section>
    </main>
</body>
</html>
`;
                    break;
                case 'casteling':
                    content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Castling in Chess</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Castling in Chess</h1>
    </header>
    <main>
        <section>
            <h2>Introduction to Castling</h2>
            <p>
                Castling is a unique move in chess that allows players to improve king safety while also activating a rook. It is the only move where a player moves two pieces simultaneously – the king and a rook. Castling is essential for protecting the king and often plays a vital role in chess strategy.
            </p>
            <img src="chess-images/castling.png" alt="Illustration of Castling Move" style="width: 40%; height: auto;">
        </section>

        <section>
            <h2>Rules for Castling</h2>
            <p>For castling to be legal, specific conditions must be met:</p>
            <ul>
                <li><strong>The King and Rook Must Not Have Moved:</strong> Neither the king nor the chosen rook should have moved at any point during the game.</li>
                <li><strong>No Pieces Between the King and Rook:</strong> The squares between the king and rook must be empty.</li>
                <li><strong>The King Cannot be in or Move Through Check:</strong> The king cannot castle if it is in check or if it would have to move through a square that is under attack.</li>
            </ul>
            <img src="chess-images/rules.png" alt="Illustration of Castling Conditions" style="width: 40%; height: auto;">
            <img src="chess-images/castling-rules1.png" alt="Illustration of Castling Conditions" style="width: 40%; height: auto;">
            <img src="chess-images/castling-rules.png" alt="Illustration of Castling Conditions" style="width: 30%; height: auto;">
        </section>

        <section>
            <h2>Types of Castling</h2>
            <p>There are two types of castling in chess:</p>
            <ul>
                <li>
                    <h3>Kingside Castling (Short Castling)</h3>
                    <p>
                        This occurs when the king castles towards the kingside (the side of the board where the king originally starts the game). In kingside castling, the king moves two squares towards the rook on its right, and the rook jumps over the king to the square next to it.
                    </p>
                    <img src="chess-images/king-side.png" alt="Kingside Castling Illustration" style="width: 40%; height: auto;">
                </li>
                <li>
                    <h3>Queenside Castling (Long Castling)</h3>
                    <p>
                        In queenside castling, the king moves two squares towards the rook on its left (the queenside), and the rook moves to the square right next to the king on its other side. This often takes longer to prepare because more pieces are usually in the way on the queenside.
                    </p>
                    <img src="chess-images/queenside-castling.png" alt="Queenside Castling Illustration" style="width: 30%; height: auto;">
                </li>
            </ul>
        </section>

        <section>
            <h2>Benefits of Castling</h2>
            <ul>
                <li><strong>Improved King Safety:</strong> Castling positions the king behind a wall of pawns, making it harder for the opponent to attack.</li>
                <li><strong>Rook Activation:</strong> Castling brings a rook closer to the center, increasing its range and influence on the board.</li>
                <li><strong>Flexibility for Future Moves:</strong> Castling early can allow other pieces to develop safely and provide a secure environment for planning future strategies.</li>
            </ul>
            
        </section>

        <section>
            <h2>When to Castle</h2>
            <p>
                It's generally advisable to castle within the first ten moves of a game unless there’s a strong reason not to. Delaying castling may leave the king vulnerable to attacks, especially if the center opens up. However, avoid castling if it places the king in danger or if castling on the other side of the board is safer.
            </p>
            
        </section>

        <section>
            <h2>Common Mistakes in Castling</h2>
            <p>These are typical mistakes players make when castling:</p>
            <ul>
                <li><strong>Castling Too Late:</strong> Waiting too long to castle can expose the king to threats as the game progresses and more pieces become active.</li>
                <li><strong>Ignoring Opponent’s Pieces:</strong> Not checking if castling will place the king in danger from the opponent’s active pieces.</li>
                <li><strong>Castling Into Danger:</strong> Sometimes, players will castle to a side that’s already under attack. Always consider the opponent’s positioning before castling.</li>
            </ul>
 
        </section>
    </main>
</body>
</html>
`;
                    break;
                case 'special_moves':
                    content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Special Moves in Chess</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Special Moves in Chess</h1>
    </header>
    <main>
        <section>
            <h2>Introduction to Special Moves</h2>
            <p>Aside from typical moves, chess has a few unique rules that make the game even more strategic and complex. Understanding these special moves can greatly improve your gameplay and add depth to your strategy.</p>
        </section>

        <section>
            <h2>1. En Passant</h2>
            <p>
                <em>En passant</em> is a special pawn capture that can occur when a pawn moves two squares forward from its starting position, landing beside an opponent’s pawn. The opponent can then capture it "in passing" as if the pawn had only moved one square.
            </p>
            <p>This move can only be made immediately after the opposing pawn's two-square move and cannot be used later.</p>
            
            <img src="chess-images/enapassent1.png" alt="Illustration of En Passant" style="width: 40%; height: auto;">
        </section>

        <section>
            <h2>2. Pawn Promotion</h2>
            
            <p>
                Pawn promotion occurs when a pawn reaches the opposite side of the board. At this point, the player must promote the pawn into a more powerful piece: usually a queen, but it can also become a rook, bishop, or knight. This decision can change the game’s dynamic significantly, especially in the endgame.
            </p>
            <p>The choice of promotion depends on the situation, but most players opt to promote to a queen, the most powerful piece.</p>
            <img src="chess-images/promotion.png" alt="Illustration of Pawn Promotion" style="width: 40%; height: auto;margin:10px;">
            <img src="chess-images/promotion1.png" alt="Illustration of Pawn Promotion" style="width: 40%; height: auto;margin:10px">
        </section>

        <section>
            <h2>3. Stalemate</h2>
            <p>
                Stalemate is a situation where a player has no legal moves and their king is not in check. When stalemate occurs, the game is considered a draw, regardless of the material advantage one player may have.
            </p>
            <p>Players should be cautious to avoid stalemate when they have a significant advantage, as it can turn a winning game into a draw.</p>
            <img src="chess-images/stalemate1.png" alt="Illustration of Stalemate" style="width: 40%; height: auto;margin:10px">
            <img src="chess-images/stalemate2.png" alt="Illustration of Stalemate" style="width: 40%; height: auto;margin:10px">
            <img src="chess-images/stalemate3.png" alt="Illustration of Stalemate" style="width: 40%; height: auto;margin:10px">
            <img src="chess-images/stalemate4.png" alt="Illustration of Stalemate" style="width: 40%; height: auto;margin:10px">
        </section>

        <section>
            <h2>Why These Moves Matter</h2>
            <p>
                Understanding these special moves not only allows players to use them strategically but also helps prevent falling into traps or missing opportunities during a game. Mastering them can be a game-changer in competitive play.
            </p>
        </section>
    </main>
</body>
</html>
`;
                    break;
                case 'basic_tactics':
                    content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Chess Tactics</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Basic Chess Tactics</h1>
    </header>
    <main>
        <section>
            <h2>Introduction to Chess Tactics</h2>
            <p>Chess tactics are short-term, calculated moves or sequences that achieve an immediate objective, such as winning material, delivering checkmate, or gaining a positional advantage. Mastering basic tactics will improve your ability to spot winning moves and increase your overall skill level.</p>
        </section>

        <section>
            <h2>1. Fork</h2>
            <p>A fork occurs when a single piece, often a knight or queen, simultaneously attacks two or more opponent pieces. This tactic is particularly effective because it forces the opponent to save only one of their pieces, usually resulting in a gain of material for you.</p>
            <p>For example, a knight can fork the opponent's king and rook, creating a double attack where the opponent can only respond to one threat.</p>
        </section>

        <section>
            <h2>2. Pin</h2>
            <p>A pin is a tactic where a piece is forced to stay on its square to avoid exposing a more valuable piece behind it to an attack. Pins can be used to restrict the opponent's movement and sometimes to capture pinned pieces. This tactic is commonly executed by bishops or rooks.</p>
            <p>For example, pinning a knight to the opponent's king prevents the knight from moving, as it would expose the king to check.</p>
        </section>

        <section>
            <h2>3. Skewer</h2>
            <p>A skewer is similar to a pin but in reverse. In a skewer, a valuable piece, such as a king or queen, is forced to move, exposing a less valuable piece behind it to an attack. This tactic often results in capturing the less valuable piece.</p>
            <p>For instance, a rook can execute a skewer by forcing the opponent's queen to move, exposing a pawn or knight behind it.</p>
        </section>

        <section>
            <h2>4. Discovered Attack</h2>
            <p>A discovered attack happens when one piece moves away, revealing an attack by another piece. This tactic is especially potent if it also results in a discovered check, where the opponent's king is placed in check, forcing a response and often allowing you to capture a piece.</p>
            <p>For example, if a knight moves to reveal a queen's attack on an opponent's bishop, the knight’s movement creates a double threat.</p>
        </section>

        <section>
            <h2>5. Discovered Check</h2>
            <p>A discovered check is a type of discovered attack that places the opponent’s king in check when one piece moves to reveal an attack. This tactic is highly effective as it forces the opponent to respond to the check, often allowing you to gain material or improve your position.</p>
            <p>For instance, moving a knight that reveals a check by a rook or bishop on the opponent's king can lead to powerful combinations.</p>
        </section>

        <section>
            <h2>6. Double Attack</h2>
            <p>A double attack involves threatening two pieces or threats simultaneously with one move. This often leaves the opponent unable to defend against both threats, resulting in a gain of material or a decisive advantage.</p>
            <p>For example, using the queen or a bishop to threaten a rook and a pawn at once often forces the opponent to concede one of the pieces.</p>
        </section>

        <section>
            <h2>7. Back Rank Checkmate</h2>
            <p>A back rank checkmate occurs when the opponent’s king is trapped on the back rank by its own pawns, and a rook or queen delivers checkmate along that rank. Ensuring that you have escape squares for your king or that you monitor your opponent’s back rank is essential for avoiding this tactic.</p>
            <p>For example, a rook moving to the back rank while the opponent’s king is trapped by its pawns can deliver a sudden checkmate.</p>
        </section>

        <section>
            <h2>Conclusion</h2>
            <p>Learning these basic tactics will help you recognize opportunities and potential threats more effectively. Practice these tactics regularly, as they form the foundation for more advanced chess combinations and strategies. Mastering tactics like the fork, pin, skewer, and discovered check will improve your game and give you an edge over opponents.</p>
        </section>
    </main>
</body>
</html>
`;
                    break;
               
                case 'endgame_strategies':
                    content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Endgame Strategies in Chess</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Endgame Strategies in Chess</h1>
    </header>
    <main>
        <section>
            <h2>Introduction to Endgame Strategies</h2>
            <p>The endgame is the final phase of a chess game when only a few pieces are left on the board. Proper endgame strategies are essential for converting an advantage into a victory or securing a draw in a difficult position. Here are some fundamental endgame principles to help you succeed.</p>
        </section>

        <section>
            <h2>1. King Activity</h2>
            <p>
                In the endgame, the king becomes a powerful piece. Unlike the opening and middle game phases, where the king is often shielded, it should actively participate in controlling key squares and supporting other pieces in the endgame.
            </p>
            <p>Bringing the king towards the center can improve control over the board and increase your chances of winning.</p>
        </section>

        <section>
            <h2>2. Pawn Promotion</h2>
            <p>
                Advancing pawns to promotion is one of the primary endgame goals. Successfully promoting a pawn into a queen or another piece can tip the balance in your favor. To achieve this, control the path of the pawn and prevent your opponent from blocking it.
            </p>
            <p>In many cases, it’s helpful to support the advancing pawn with the king or other pieces to prevent the opponent’s interference.</p>
        </section>

        <section>
            <h2>3. Opposition in King and Pawn Endgames</h2>
            <p>
                Opposition is a tactic where one king controls access to critical squares by directly opposing the other king. This maneuver is often used in pawn endgames to gain a positional advantage, forcing the opposing king into a less favorable position.
            </p>
            <p>Mastering opposition can help secure a path for a pawn to promote or prevent the opponent’s pawns from advancing.</p>
        </section>

        <section>
            <h2>4. Rook Endgames</h2>
            <p>
                Rook endgames are common and can be tricky. The key principle is to place your rook behind passed pawns, whether they are yours or your opponent's. This placement allows your rook to control the pawn’s movement effectively.
            </p>
            <p>Another useful tip is to keep the rook active and check from a distance, as rooks are more effective when given more space to operate.</p>
        </section>

        <section>
            <h2>5. Avoiding Stalemate</h2>
            <p>
                In the endgame, it’s crucial to avoid accidentally creating a stalemate, where your opponent has no legal moves but is not in check. This mistake can turn a winning game into a draw, especially when trying to deliver checkmate with only a few pieces.
            </p>
            <p>Practice patience and check each move to ensure your opponent has a legal move, thereby avoiding a stalemate situation.</p>
        </section>

        <section>
            <h2>When to Exchange Pieces</h2>
            <p>
                Knowing when to exchange pieces is vital in the endgame. Generally, it is advantageous to exchange pieces if you have a pawn advantage, as simplifying the board increases the likelihood of promoting your pawns. However, avoid exchanging if your opponent has a more active king or a passed pawn.
            </p>
            <p>Evaluate your position carefully before exchanging pieces, as unnecessary exchanges can reduce winning chances.</p>
        </section>

        <section>
            <h2>Conclusion</h2>
            <p>
                Endgame strategies are crucial for any serious chess player. By learning to activate your king, use opposition, promote pawns, manage rooks, avoid stalemates, and make effective exchanges, you can turn close games into victories. Practice these strategies to enhance your chess skills.
            </p>
        </section>
    </main>
</body>
</html>
`;
                    break;
                case 'advanced_strategies':
                    content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Chess Strategies</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Advanced Chess Strategies</h1>
    </header>
    <main>
        <section>
            <h2>Introduction to Advanced Strategies</h2>
            <p>Mastering advanced chess strategies is key to becoming a competitive player. Unlike basic tactics, which are often short-term moves, advanced strategies focus on long-term plans to control the board, improve piece coordination, and anticipate the opponent's play.</p>
        </section>

        <section>
            <h2>1. Pawn Structure</h2>
            <p>Pawns form the foundation of the chess board, and their structure impacts the game significantly. Key concepts include:</p>
            <ul>
                <li><strong>Isolated Pawns:</strong> A pawn with no friendly pawns on adjacent files is isolated and often vulnerable to attack. While isolated pawns control important squares, they are also weaknesses that need protection.</li>
                <li><strong>Doubled Pawns:</strong> Doubling occurs when two pawns occupy the same file, typically resulting from a capture. Doubled pawns can be weaknesses, limiting mobility and protection.</li>
                <li><strong>Passed Pawns:</strong> Pawns with no opposing pawns blocking their path to promotion are called passed pawns. They are valuable in endgames, as they threaten to promote to a queen or another piece.</li>
            </ul>
        </section>

        <section>
            <h2>2. Controlling the Center</h2>
            <p>Control of the central squares (d4, d5, e4, e5) is essential in all stages of the game. By controlling the center, you can limit your opponent’s options and allow your pieces more mobility. A strong central presence often leads to successful attacks and superior positioning.</p>
            <p>Developing pieces like knights and bishops toward the center, and advancing central pawns, help maintain control. Avoid moving pieces to the edges of the board too early, as they are less effective there.</p>
        </section>

        <section>
            <h2>3. Piece Activity and Coordination</h2>
            <p>Effective piece coordination ensures that your pieces work together harmoniously. Aim to position your pieces to support each other and create multiple threats simultaneously, maximizing their strength.</p>
            <p>Avoid placing pieces on squares where they have limited influence. Aim for squares where they control key lines or support critical areas of the board.</p>
        </section>

        <section>
            <h2>4. Weakness Exploitation</h2>
            <p>Identifying and exploiting weaknesses in your opponent’s position is crucial. Common weaknesses include isolated pawns, unprotected pieces, and exposed kings.</p>
            <p>For example, if your opponent has a weak pawn structure, focus on creating a plan to attack and capture these pawns. Alternatively, if their king is vulnerable, coordinate your pieces to launch an attack.</p>
        </section>

        <section>
            <h2>5. The Minority Attack</h2>
            <p>A minority attack occurs when you push a small number of pawns against a larger pawn structure on the opponent's side. This strategy can create weaknesses in their pawn structure, allowing you to infiltrate with more powerful pieces later.</p>
            <p>The minority attack is commonly used in pawn structures such as the Queen's Gambit Declined and is particularly effective when executed with supportive pieces.</p>
        </section>

        <section>
            <h2>6. Prophylaxis</h2>
            <p>Prophylaxis involves making moves that anticipate and prevent the opponent's plans before they materialize. This defensive strategy is essential for controlling the flow of the game and minimizing the opponent’s counterplay.</p>
            <p>For example, if your opponent is preparing to attack a weak square in your position, you might reinforce that square or move pieces to block the attack, thwarting their plan before it starts.</p>
        </section>

        <section>
            <h2>7. Open Files and Diagonals</h2>
            <p>Open files (for rooks) and open diagonals (for bishops and queens) are highly valuable in chess. Placing rooks on open or semi-open files maximizes their range, allowing them to support attacks and control important areas.</p>
            <p>Similarly, placing bishops on open diagonals enables long-range control, making it easier to attack weaknesses or restrict the opponent’s movement. Aim to position your pieces on open lines where they can exert maximum influence.</p>
        </section>

        <section>
            <h2>8. King Safety</h2>
            <p>Ensuring the safety of your king is paramount in every stage of the game. Strategies for king safety include:</p>
            <ul>
                <li><strong>Castling:</strong> Castling early is essential for safeguarding the king behind a wall of pawns.</li>
                <li><strong>Pawn Shields:</strong> Avoid moving pawns near your king unnecessarily, as this creates weaknesses and potential entry points for your opponent.</li>
                <li><strong>King Placement in Endgames:</strong> In endgames, the king becomes an active piece. However, always ensure it remains safe from potential checks.</li>
            </ul>
        </section>

        <section>
            <h2>Conclusion</h2>
            <p>Understanding and applying advanced strategies like pawn structure, center control, and prophylaxis will significantly improve your game. By mastering these concepts, you can develop a well-rounded approach to both offense and defense, enabling you to adapt to various opponents and board positions.</p>
        </section>
    </main>
</body>
</html>
`;
                    break;
                case 'chess_notation':
                    content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chess Notations Explained</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Chess Notations Explained</h1>
    </header>
    <main>
        <section>
            <h2>Introduction to Chess Notation</h2>
            <p>
                Chess notation is the standardized language used to record moves in chess. It allows players to document their games, analyze past games, and share strategies. Understanding chess notation is essential for anyone wanting to improve their chess skills, as it is used in books, tutorials, and competitive play.
            </p>
        </section>

        <section>
            <h2>Algebraic Notation</h2>
            <p>
                The most widely used notation in chess is the algebraic notation. It uses letters and numbers to represent the squares on the board and abbreviations to identify the pieces. Each move is written down in a format that shows which piece moved and to which square.
            </p>
            <ul>
                <li><strong>Files and Ranks:</strong> The vertical columns of the board are called files and are labeled a through h. The horizontal rows are called ranks and are numbered 1 to 8.</li>
                <li><strong>Piece Abbreviations:</strong> Each piece has an abbreviation in notation: King (K), Queen (Q), Rook (R), Bishop (B), and Knight (N). Pawns are not given a letter and are indicated by their destination square.</li>
                <li><strong>Move Format:</strong> A move typically consists of the piece abbreviation and the destination square (e.g., "Nf3" for a knight moving to f3). If a pawn moves to d4, it’s written simply as "d4."</li>
            </ul>
        </section>

        <section>
            <h2>Special Symbols and Moves</h2>
            <p>Chess notation includes symbols to describe unique moves and situations:</p>
            <ul>
                <li><strong>Castling:</strong> Kingside castling is noted as "O-O," while queenside castling is "O-O-O."</li>
                <li><strong>Captures:</strong> When a piece captures another, an "x" is used. For example, if a knight captures a piece on e5, it is written "Nxe5."</li>
                <li><strong>Checks:</strong> A "+" is added at the end of a move to indicate a check, e.g., "Qd5+".</li>
                <li><strong>Checkmate:</strong> A "#" symbol signifies checkmate, e.g., "Qd8#."</li>
                <li><strong>Promotion:</strong> When a pawn reaches the last rank and promotes, the new piece is indicated, e.g., "e8=Q" for a pawn promoting to a queen.</li>
            </ul>
        </section>

        <section>
            <h2>Annotating Chess Games</h2>
            <p>Annotations provide additional insights into moves, helping players understand the quality of moves and strategies:</p>
            <ul>
                <li><strong>Good Move:</strong> Noted with "!" (e.g., "Nf3!").</li>
                <li><strong>Excellent Move:</strong> Noted with "!!".</li>
                <li><strong>Questionable Move:</strong> Noted with "?" (e.g., "Nf3?").</li>
                <li><strong>Blunder:</strong> Noted with "??".</li>
                <li><strong>Interesting Move:</strong> Noted with "!?" indicating a creative move that might be risky.</li>
                <li><strong>Dubious Move:</strong> Noted with "?!" indicating a move that could lead to weaknesses.</li>
            </ul>
        </section>

        <section>
            <h2>Example of Recorded Game</h2>
            <p>
                Here’s an example of a chess game recorded in algebraic notation:
            </p>
            <p>
                1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6
            </p>
            <p>This notation shows a sequence of moves by both players, with each pair of moves recorded as a turn.</p>
        </section>

        <section>
            <h2>Descriptive Notation (Older Style)</h2>
            <p>
                Descriptive notation is an older form of recording moves, commonly used before algebraic notation became the standard. It describes moves based on piece type and starting square, but is less common today.
            </p>
            <ul>
                <li><strong>File Names:</strong> Files are named based on the piece that starts on them. For example, "K" for the king’s file, "Q" for the queen’s file, etc.</li>
                <li><strong>Move Format:</strong> Moves are recorded using file names and directions (e.g., "P-K4" for advancing the king’s pawn to the fourth rank).</li>
            </ul>
        </section>

        <section>
            <h2>Conclusion</h2>
            <p>Learning chess notation enhances your ability to study, analyze, and share chess games. Mastering this notation will allow you to follow professional games and improve your strategies by reviewing annotated games.</p>
        </section>
    </main>
</body>
</html>
`;
                    break;
                default:
                    content = '<h2>Welcome to Chess Learning!</h2><p>Select a topic from the sidebar to learn more.</p>';
            }

            contentArea.innerHTML = content;
        }