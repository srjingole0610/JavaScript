'use strict';

// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initialize the player's score to 20
let score = 20;
// Initialize the player's highscore to 0
let highScore = 0

// Add an event listener to the 'Check' button
document.querySelector('.check').addEventListener('click', function() {
    // Get the value of the input field, which is the player's guess
    const guess = Number(document.querySelector('.guess').value);

    // Check if the player has entered a number
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number !';
    }
    // Check if the guess matches the secret number
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🥇 Correct Number! 🥇';
        // Display the secret number on the web page 
        document.querySelector('.number').textContent = secretNumber;
        // Change the background color of the webpage to a green shade (#60b347) to provide positive feedback 
        document.querySelector('body').style.backgroundColor = '#60b347';
        // Increase the width of the element with class 'number' to 30rem (30 times the size of a default font),
        document.querySelector('.number').style.width = '30rem'

         // Check if the current score is greater than the existing high score.
        if (score > highScore) {
            // Set the high score to the current score.
            highScore = score;
             // Update the high score displayed on the webpage to reflect the new high score.
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // Check if the guess is higher than the secret number
    else if (guess > secretNumber) {
        // If the player still has score left
        if (score > 1) {
            document.querySelector('.message').textContent = '⬅️ Too High!';
            // Decrease the player's score by 1
            score--;
            // Update the score displayed on the web page
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#D12A3B';
        }
        // If the player has exhausted all attempts
        else {
            document.querySelector('.message').textContent = 'You lost the game 💥💥';
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
    // Check if the guess is lower than the secret number
    else if (guess < secretNumber) {
        // If the player still has score left
        if (score > 1) {
            document.querySelector('.message').textContent = '���️ Too Low!';
            // Decrease the player's score by 1
            score--;
            // Update the score displayed on the web page
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#D12A3B';
        }
        // If the player has exhausted all attempts
        else {
            document.querySelector('.message').textContent = 'You lost the game 💥💥';
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
});

// Add an event listener to the 'Again' button
document.querySelector('.again').addEventListener('click', function() {
    // Reset the player's score to 20
    score = 20;

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // Set the message to prompt the player to start guessing
    document.querySelector('.message').textContent = 'Start guessing...';
    // Reset the score displayed on the web page
    document.querySelector('.score').textContent = score;
    // Clear the input field for the player's guess
    document.querySelector('.guess').value = '';
    // Clear the input field for the player's highscore
    document.querySelector('.highscore').value = '';
    // Hide the secret number displayed on the web page
    document.querySelector('.number').textContent = '?';
    // Reset the background color of the webpage to default
    document.querySelector('body').style.backgroundColor = '#222';
    // Reset the width of the secret number display box
    document.querySelector('.number').style.width = '15rem';
});
