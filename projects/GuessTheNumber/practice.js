let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuess = [];
let numGuesses = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}
function validateGuess(guess) {
    // this function checks if the user input is valid
    if(guess < 1 || guess > 10 || isNaN(guess)) {
        alert("Please enter a number between 1 and 10");
    } else {
        previousGuess.push(guess);
        numGuesses++;
        if(numGuesses === 11){
            displayGuesses(guess);
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuesses(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess) {
    // this function checks if the user input matches the random number
    if(guess === randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numGuesses} tries!`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage("Too low! Try again.");
        numGuesses++;
    } else if(guess > randomNumber){
        displayMessage("Too high! Try again.");
        numGuesses++;
    }
}

function displayGuesses(guess) {
    // this function displays the previous guesses
    userInput.value = ""; // this clears the input field
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${11 - numGuesses} guesses remaining`;
}

function displayMessage(message) {
    // this function displays messages to the user
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
    // this function ends the game and disables input
    userInput.value = "";
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    // this function resets the game to start a new round
    const newGameButton = document.getElementById('newGame');
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt(Math.random() * 10 + 1)
        previousGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `10 guesses remaining`;
        lowOrHi.innerHTML = "";
        startOver.removeChild(p);
        userInput.removeAttribute('disabled');
        playGame = true;
    });
}


