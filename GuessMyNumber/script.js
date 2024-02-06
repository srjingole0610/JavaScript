'use strict';

// Generate a random secret number between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initialize the player's score to 20
let score = 20;

// Display the secret number on the web page (for debugging purposes)
document.querySelector('.number').textContent = secretNumber;

// Log the secret number to the console (for debugging purposes)
console.log(secretNumber);

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
