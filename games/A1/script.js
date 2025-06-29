function loadContent(topic) {
    const contentArea = document.getElementById('contentArea');
    
    switch(topic) {
        case 'chess':
            contentArea.innerHTML = `<h2>Chess Strategies</h2><p>Learn advanced tactics and strategies to improve your chess game.</p>`;
            break;
        case 'checkers':
            contentArea.innerHTML = `<h2>Checkers Tips</h2><p>Explore tips to become a checkers champion.</p>`;
            break;
        case 'poker':
            contentArea.innerHTML = `<h2>Poker Techniques</h2><p>Understand the strategies that top poker players use.</p>`;
            break;
        case 'game_dev':
            contentArea.innerHTML = `<h2>Game Development Basics</h2><p>Learn the basics of creating your own games.</p>`;
            break;
        case 'game_design':
            contentArea.innerHTML = `<h2>Game Design Principles</h2><p>Discover key principles of effective game design.</p>`;
            break;
        case 'skills':
            contentArea.innerHTML = `<h2>Improving Your Gaming Skills</h2><p>Tips and techniques to enhance your overall gaming performance.</p>`;
            break;
        case 'practice':
            contentArea.innerHTML = `<h2>Practice Techniques</h2><p>Explore various methods to practice and improve your skills.</p>`;
            break;
        case 'resources':
            contentArea.innerHTML = `<h2>Online Resources</h2><p>Access useful resources for enhancing your gaming skills.</p>`;
            break;
        case 'communities':
            contentArea.innerHTML = `<h2>Gaming Communities</h2><p>Join communities to connect with other gamers.</p>`;
            break;
        default:
            contentArea.innerHTML = `<h1>Welcome to Gaming Skills Enhancement</h1><p>Select a gaming topic from the left to get started.</p>`;
    }
}
