/*
Game function
-Player must guess between min and max number
player gets an amount og guessers
notify player of guesses
notify the player of the correct answer if loose
let player choose to play again
*/

//Game values
let min = 1, max = 10,
    winningNum = getRandomNum(min, max)
    , guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'), //Id game
    minNum = document.querySelector('.min-num'),   //Classes
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


//PLay again event listerner
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();//reload
    }
});

//Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    //Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`)
    }
    //Check if won
    if (guess == winningNum) {
        // //Disable input
        // guessInput.disabled = true;
        // //Change border color
        // guessInput.style.borderColor = 'green';
        // //Set message
        // setMessage(`${winningNum} is correct, YOU WIN`, 'green');
        gameOver(true, `${winningNum} is correct, YOU WIN`);

    }
    else {
        //wrong number 
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            gameOver(false, `Game over you lost The correct number was ${winningNum}`, 'red')
            // //Game over
            // guessInput.disabled = true;
            // //change border color
            // guessInput.style.borderColor = 'red';
            // //clear input
            // guessInput.value = '';
            // //Set message
            // setMessage(`Game over you lost The correct number was ${winningNum}`);
        } else {
            //  Game continues
            //cahnage border color
            guessInput.style.borderColor = 'red';
            //clear inout
            guessInput.value = '';
            //Tell us the wrong number 
            setMessage(`${guess} is not correct. ${guessesLeft} guessesLeft`, 'red');

        }
    }
});

//Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;

}

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    //disable input
    guessInput.disabled = true;
    //Change border color
    guessInput.disabled = true;
    //Set text color
    message.style.color = color;
    setMessage(msg);

    //PLay again ?
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

//Get winning number
function getRandomNum(min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
}


