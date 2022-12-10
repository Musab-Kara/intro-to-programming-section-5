const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('num-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber;
let attempts = 0;
let maxNumberOfAttempts = 5;

function hideAllMessages() {

  for (let i = 0; i < messages.length; i++) {
    const element = messages[i];
    element.style.display = "none"

  }


}
hideAllMessages();

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  attempts = attempts + 1;

  console.log(guessInput)

  hideAllMessages();

  if (isNaN(guess) == true) {


    alert("please insert a number");
    maxNumberOfAttempts += 1;


  }

  else {

    if (guess === targetNumber) {
      numberOfGuessesMessage.style.display = 'inline';

      numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

      correctMessage.style.display = 'inline';


      submitButton.disabled = true;
      guessInput.disabled = true;
    }

    if (guess !== targetNumber) {

      if (guess < targetNumber) {

        tooLowMessage.style.display = 'inline';

      } else {

        tooHighMessage.style.display = 'inline';

      }

      let remainingAttempts = maxNumberOfAttempts - attempts;

      numberOfGuessesMessage.style.display = 'inline';

      numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining <br>`;
    }

    if (attempts === maxNumberOfAttempts) {
      submitButton.disabled = true;
      guessInput.disabled = true;
    }

    // guessInput.value = '';
    guessInput.value = '';

    // resetButton.style.display = '';
    resetButton.style.display = 'inline';
  }

}

function setup() {

  hideAllMessages();

  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  maxNumberOfAttempts = 5;
  attempts = 0;

  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;



  resetButton.style.display = 'none';


}


submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
