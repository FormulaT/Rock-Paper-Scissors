const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = Array.from(document.getElementsByClassName('button'));
let userChoice, computerChoice, result;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.setAttribute('src',`img/${userChoice}.png`);
    generateComputerChoice()
    getResult();
}))

function generateComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    computerChoice = possibleChoices[randomIndex].id;
    computerChoiceDisplay.setAttribute('src',`img/${computerChoice}.png`);
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a draw!';
    }else if (
        (computerChoice === 'rock' && userChoice === 'paper') || 
        (computerChoice === 'paper' && userChoice === 'scissors') || 
        (computerChoice === 'scissors' && userChoice === 'rock')) 
    {
        result = 'You win!';
    }else if (
        (computerChoice === 'paper' && userChoice === 'rock') || 
        (computerChoice === 'scissors' && userChoice === 'paper') || 
        (computerChoice === 'rock' && userChoice === 'scissors'))
    {
        result = 'You lose!';
    }
    resultDisplay.innerHTML = result;
}