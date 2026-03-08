let randomNumber = parseInt(Math.random() * 100 + 1);

const Submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.Guesses')
const Remaining = document.querySelector('.lastResult')
const low0rhi = document.querySelector('.low0rhi')
const startOver = document.querySelector('.resultparas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    Submit.addEventListener('click', function(e){
        e.preventDefault()
       const guess = parseInt(userInput.value)
       console.log(guess);
       validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter a number more than 1')
    } else if(guess > 100){
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess < randomNumber){
        displayMessage(`Number is Tooo low`)
    } else if (guess > randomNumber){
        displayMessage(`Number is Tooo high`)
        
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numGuess++;
    Remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    low0rhi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame" class="restartBtn">Start New Game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        Remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

