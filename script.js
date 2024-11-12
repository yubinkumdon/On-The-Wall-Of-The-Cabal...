// Configuration for flies
const flyCount = 10; // Number of flies
const phrases = [
    "Shit, ima need a new vape soon.",
    "Pump my bags LFG!",
    "WE FLYIN!!!",
    "I hope my mom gives me her credit card I think this ones a sendorrr.",
    "SHHH SHHH, they're about to talk about my bags.",
    "Mog is pretty dope ngl.",
    "On The Wall Of The Cabal.",
    "The trenches will love this one.",
    "I heard binance is listing this shit on gog on god no cap fr.",
    "TALK TOO EMMMMM"
];
const flyContainer = document.getElementById("fly-container");

// Random position generator
function getRandomPosition() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
}

// Randomly create and place flies on the screen
function createFlies() {
    for (let i = 0; i < flyCount; i++) {
        const fly = document.createElement("div");
        fly.classList.add("fly");

        // Add phrase text to the fly
        const phrase = document.createElement("span");
        phrase.classList.add("phrase");
        phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)];
        fly.appendChild(phrase);
        
        const { x, y } = getRandomPosition();
        fly.style.left = `${x}px`;
        fly.style.top = `${y}px`;
        
        // Assign random movement for each fly
        animateFly(fly);
        flyContainer.appendChild(fly);
    }
}

// Randomly move flies in random patterns
function animateFly(fly) {
    const moveInterval = Math.random() * 2000 + 1000; // Interval between moves

    setInterval(() => {
        const { x, y } = getRandomPosition();
        fly.style.transform = `translate(${x - fly.offsetLeft}px, ${y - fly.offsetTop}px)`;
        
        // Update phrase on each move
        const phrase = fly.querySelector(".phrase");
        phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    }, moveInterval);
}

// Initialize flies on page load
createFlies();
