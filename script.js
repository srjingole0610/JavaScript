'use strict'; // Enable strict mode for better error handling and preventing common programming mistakes

// DOM element selectors
const score0El = document.querySelector('#score--0'); // Selects the element displaying Player 1's total score
const score1El = document.getElementById('score--1'); // Selects the element displaying Player 2's total score
const diceEl = document.querySelector('.dice'); // Selects the element displaying the dice
const btnNew = document.querySelector('.btn--new'); // Selects the "New Game" button
const btnRoll = document.querySelector('.btn--roll'); // Selects the "Roll Dice" button
const btnHold = document.querySelector('.btn--hold'); // Selects the "Hold" button
const current0El = document.getElementById('current--0'); // Selects the element displaying Player 1's current score
const current1El = document.getElementById('current--1'); // Selects the element displaying Player 2's current score
const player0El = document.querySelector('.player--0'); // Selects the element representing Player 1
const player1El = document.querySelector('.player--1'); // Selects the element representing Player 2

// Game variables
let score, currentScore, activePlayer, playing;

// Function to initialize the game state
const init = function () {
  score = [0, 0]; // Initializes the scores for both players to 0
  activePlayer = 0; // Sets the initial active player to Player 1
  currentScore = 0; // Initializes the current score to 0
  playing = true; // Indicates that the game is in progress

  // Reset scores and UI
  score0El.textContent = 0; // Sets Player 1's total score to 0 on the UI
  score1El.textContent = 0; // Sets Player 2's total score to 0 on the UI
  current0El.textContent = 0; // Sets Player 1's current score to 0 on the UI
  current1El.textContent = 0; // Sets Player 2's current score to 0 on the UI

  diceEl.classList.add('hidden'); // Hides the dice element
  player0El.classList.remove('player--winner'); // Removes the winner styling from Player 1
  player1El.classList.remove('player--winner'); // Removes the winner styling from Player 2
  player0El.classList.add('player--active'); // Adds the active player styling to Player 1
  player1El.classList.remove('player--active'); // Removes the active player styling from Player 2
};

init(); // Initializes the game when the script is first run

// Function to switch players
const switchPlayers = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // Resets the current score for the active player to 0
  currentScore = 0; // Resets the current score to 0
  activePlayer = activePlayer === 0 ? 1 : 0; // Switches the active player (0 to 1, or 1 to 0)
  player0El.classList.toggle('player--active'); // Toggles the active player styling for Player 1
  player1El.classList.toggle('player--active'); // Toggles the active player styling for Player 2
};

// Event listener for rolling the dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Checks if the game is still in progress
    const dice = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6 for the dice roll
    diceEl.classList.remove('hidden'); // Displays the dice element
    diceEl.src = `dice-${dice}.png`; // Displays the appropriate dice image based on the rolled number

    if (dice !== 1) {
      // Checks if the rolled number is not 1
      currentScore += dice; // Adds the rolled number to the current score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // Updates the current score on the UI
    } else {
      switchPlayers(); // Switches to the next player if the rolled number is 1
    }
  }
});

// Event listener for holding the current score
btnHold.addEventListener('click', function () {
  if (playing) {
    // Checks if the game is still in progress
    score[activePlayer] += currentScore; // Adds the current score to the active player's total score
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer]; // Updates the total score on the UI for the active player

    // Checks if the active player has won
    if (score[activePlayer] >= 100) {
      // Modify this threshold according to the game rules
      playing = false; // Ends the game
      diceEl.classList.add('hidden'); // Hides the dice element
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner'); // Adds the winner styling to the active player
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); // Removes the active player styling from the winner
    } else {
      switchPlayers(); // Switches to the next player if the game is not over
    }
  }
});

// Event listener for starting a new game
btnNew.addEventListener('click', function () {
  init(); // Initializes a new game
});
