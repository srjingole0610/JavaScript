'use strict';

// Selects the element in the document with the class 'modal' and assigns it to the variable 'modal'
const modal = document.querySelector('.modal');
// Selects the element in the document with the class 'overlay' and assigns it to the variable 'overlay'
const overlay = document.querySelector('.overlay');
// Selects the element in the document with the class 'hidden' and assigns it to the variable 'hidden'
const hidden = document.querySelector('.hidden');
// Selects the element in the document with the class 'close-modal' and assigns it to the variable 'btnCloseModel'
const btnCloseModel = document.querySelector('.close-modal');
// Selects all elements in the document with the class 'show-modal' and assigns them to the variable 'btnOpenModel'
const btnOpenModel = document.querySelectorAll('.show-modal');

const openModal = function(){
    // Remove the 'hidden' class from the modal element
    modal.classList.remove('hidden');
        
    // Remove the 'hidden' class from the overlay element
    overlay.classList.remove('hidden');
}

// Define a function named 'closeModal' that adds the 'hidden' class to the modal and overlay elements
const closeModal = function() {
    // Add the 'hidden' class to the modal element
    modal.classList.add('hidden');
    // Add the 'hidden' class to the overlay element
    overlay.classList.add('hidden');
}

// Loop through each element with the class 'show-modal'
for (let i = 0; i < btnOpenModel.length; i++) {
    // Add a click event listener to the current element
    btnOpenModel[i].addEventListener('click', openModal);
}

// Add a click event listener to the  'btnCloseModal' element.
// When clicked, the 'closeModal' function will be called.
btnCloseModel.addEventListener('click', closeModal);

// Add a click event listener to the 'overlay' element.
// When clicked, the 'closeModal' function will be called.
overlay.addEventListener('click', closeModal);


// Add a 'keydown' event listener to the document object
document.addEventListener('keydown', function(e) {
    // Check if the key pressed is 'Escape' and if the modal is currently not hidden
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        // If both conditions are met, call the 'closeModal' function to hide the modal
        closeModal();
    }
});
