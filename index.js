
const resultsAns = document.getElementById("results");
const humanHands = document.getElementById("humanHands");
const computerHands = document.getElementById("computerHands");
const aiHandsArray = [
    "./assests/AIrock.png",
    "./assests/AIpaper.png",
    "./assests/AIscissors.png"
];

let humanScore = document.getElementById("humanScore")
let aiScore = document.getElementById("aiScore")

let hScore = 0;
let aScore = 0;

// Initialize score display (two digits)
humanScore.textContent = hScore.toString().padStart(2, '0');
aiScore.textContent = aScore.toString().padStart(2, '0');

function choosenRock() {
    humanHands.src = "./assests/HUMANrock.png"
    const aiChoice = Math.floor(Math.random() * 3) + 1
    computerHands.src = aiHandsArray[aiChoice - 1]
    if (aiChoice === 1) {
        resultsAns.textContent = "Result : It's a Tie! 😐";
        resultsAns.style.color = "orange";
        // No score changes on a tie
    } else if (aiChoice === 2) {
        resultsAns.textContent = "Result : You Lose! 😔";
        resultsAns.style.color = "red";
        aScore++;
        aiScore.textContent = aScore.toString().padStart(2, '0');
    } else {
        resultsAns.textContent = "Result : You Win! 😎";
        resultsAns.style.color = "green";
        hScore++;
        humanScore.textContent = hScore.toString().padStart(2, '0');
    }
}

function choosenPaper() {
    humanHands.src = "./assests/HUMANpaper.png";
    const aiChoice = Math.floor(Math.random() * 3) + 1;
    computerHands.src = aiHandsArray[aiChoice - 1];
    if (aiChoice === 2) {
        resultsAns.textContent = "Result : It's a Tie! 😐";
        resultsAns.style.color = "orange";
        // No score changes on a tie
    } else if (aiChoice === 3) {
        resultsAns.textContent = "Result : You Lose! 😔";
        resultsAns.style.color = "red";
        aScore++;
        aiScore.textContent = aScore.toString().padStart(2, '0');
    } else {
        resultsAns.textContent = "Result : You Win! 😎";
        resultsAns.style.color = "green";
        hScore++;
        humanScore.textContent = hScore.toString().padStart(2, '0');
    }
}

function choosenScissor() {
    humanHands.src = "./assests/HUMANscissors.png";
    const aiChoice = Math.floor(Math.random() * 3) + 1;
    computerHands.src = aiHandsArray[aiChoice - 1];
    if (aiChoice === 3) {
        resultsAns.textContent = "Result : It's a Tie! 😐";
        resultsAns.style.color = "orange";
        // No score changes on a tie
    } else if (aiChoice === 1) {
        resultsAns.textContent = "Result : You Lose! 😔";
        resultsAns.style.color = "red";
        aScore++;
        aiScore.textContent = aScore.toString().padStart(2, '0');
    } else {
        resultsAns.textContent = "Result : You Win! 😎";
        resultsAns.style.color = "green";
        hScore++;
        humanScore.textContent = hScore.toString().padStart(2, '0');
    }
}