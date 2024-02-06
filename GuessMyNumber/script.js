'use strict';

// Generate a random secret number between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initialize the player's score to 20
let score = 20;

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
        // Display the secret number on the web page (for debugging purposes)
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
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
    // Set the message to prompt the player to start guessing
    document.querySelector('.message').textContent = 'Start guessing...';
    // Reset the score displayed on the web page
    document.querySelector('.score').textContent = score;
    // Clear the input field for the player's guess
    document.querySelector('.guess').value = '';
    // Hide the secret number displayed on the web page
    document.querySelector('.number').textContent = '?';
    // Reset the background color of the webpage to default
    document.querySelector('body').style.backgroundColor = '#222';
    // Reset the width of the secret number display box
    document.querySelector('.number').style.width = '15rem';
});
