'use strict';

// const bookings = [];
// // Default Parameters
// const createBooking = function(flightNum, numPassengers=1,price =100 * numPassengers){

//     // //ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 100;
//     const booking ={
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }
 
// createBooking('LH123');
// createBooking('LH123',5,700);
// createBooking('LH123',3,400);
// createBooking('LH123',3);
// createBooking('LH123',5);
// createBooking('LH123', undefined,1000);


// ////////////////////////////////////////////////////////////////
// //Value vs Reference

// const flight = 'LH234';
// const suraj = {
//     name: 'Suraj',
//     age: 25,
//     city: 'Bangalore',
//     passport:245678935
// };

// const checkIn = function(flightNum,passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;
    
//     if(passenger.passport === 245678935){
//         alert('Check in')
//     } else {
//         alert('Invalid Passport');
//     }
// }

// checkIn(flight,suraj);
// console.log(flight);
// console.log(suraj);

// const newPassport = function(person){
//     person.passport = Math.floor(Math.random() *10000000000);
// }

// newPassport(suraj);
// checkIn(flight,suraj);
// console.log(suraj);

// ////////////////////////////////////////////////////////////////


// ////////////////////////////////////////////////////////////////
// //First Class Functions and Higher Order Functions
// /*
// In JavaScript, first-class functions and higher-order functions are core concepts that enable functional programming paradigms.

// First-Class Functions:
// In JavaScript, functions are treated as first-class citizens, which means they can be treated like any other data type, such as strings or numbers. This allows functions to be assigned to variables, passed as arguments to other functions, and returned from other functions.
// */

// // Assigning a function to a variable
// const greet = function(name) {
//     console.log(`Hello, ${name}!`);
// };

// // Passing a function as an argument to another function
// function sayHello(func, name) {
//     func(name);
// }

// sayHello(greet, 'John'); // Output: Hello, John!

// /*
// Real-Time Scenario:
// Consider a scenario where you want to filter a list of numbers based on a condition. You can use the filter higher-order function which accepts a predicate function.
//  */
// const numbers = [1, 2, 3, 4, 5];

// function isEven(num) {
//     return num % 2 === 0;
// }

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers); // Output: [2, 4]


// /*
// Higher-Order Functions:
// A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. In other words, a higher-order function either accepts functions as parameters, returns a function, or does both.
//  */

// // Higher-order function
// function operation(func, a, b) {
//     return func(a, b);
// }

// // Functions to be passed as arguments
// function add(x, y) {
//     return x + y;
// }

// function subtract(x, y) {
//     return x - y;
// }

// console.log(operation(add, 5, 3)); // Output: 8
// console.log(operation(subtract, 5, 3)); // Output: 2

// /*
// Real-Time Scenario:
// Suppose you have an array of numbers, and you want to perform different operations (like adding, subtracting, multiplying, etc.) on them based on user input. You can use a higher-order function to dynamically choose the operation to perform.
//  */
// function calculate(operation, x, y) {
//     return operation(x, y);
// }

// function add(x, y) {
//     return x + y;
// }

// function subtract(x, y) {
//     return x - y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// const result1 = calculate(add, 10, 5);
// const result2 = calculate(subtract, 10, 5);
// const result3 = calculate(multiply, 10, 5);

// console.log(result1); // Output: 15
// console.log(result2); // Output: 5
// console.log(result3); // Output: 50

// ////////////////////////////////////////////////////////////////

////////////////////////////////
//Functions Accepting Callbacks Functions

/*
In JavaScript, a callback function is a function that is passed as an argument to another function and is invoked after some operation is completed. Callback functions are a fundamental concept in asynchronous programming, allowing you to handle tasks that take time to complete without blocking the execution of other code.

// Example of a function with a callback
function doSomethingAsync(callback) {
    setTimeout(function() {
        console.log("Async operation done.");
        callback();
    }, 2000); // Simulating an asynchronous operation that takes 2 seconds
}

// Callback function
function callbackFunction() {
    console.log("Callback function executed.");
}

// Invoking the function with the callback
doSomethingAsync(callbackFunction);

In the example above:
doSomethingAsync is a function that performs an asynchronous operation (here, simulated with setTimeout).
It takes a callback function callback as an argument.
After the asynchronous operation is complete, it invokes the callback function.


Real-Time Scenario:
Consider a scenario where you need to fetch data from a server and perform some operation on that data once it's retrieved.
// Simulated function to fetch data from a server
function fetchDataFromServer(callback) {
    setTimeout(function() {
        const data = { id: 1, name: "John Doe", age: 30 };
        callback(data);
    }, 2000); // Simulating fetching data from a server
}

// Callback function to process the fetched data
function processData(data) {
    console.log("Data received:", data);
    console.log("Processing data...");
    // Perform some operation on the data
}

// Fetch data from server and process it using callback
fetchDataFromServer(processData);

In this scenario:

fetchDataFromServer is a function that mimics fetching data from a server asynchronously.
It takes a callback function callback as an argument.
After the data is fetched, it invokes the callback function with the fetched data.
processData is the callback function that processes the fetched data once it's received.


Callback functions are extensively used in JavaScript for handling asynchronous operations such as AJAX requests, file I/O, event handling, and more. They allow for non-blocking execution and enable better handling of asynchronous tasks in JavaScript applications.
*/
const oneWord = function (str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str){
    const [firstWord, ...otherWords] = str.split(' ');
    return [firstWord.toUpperCase(), ...otherWords].join(' ');
}

//Higher-order functions
const transformer = function (str,fn){
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed By: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function (){
    console.log('👋');
}

document.body.addEventListener('click',high5);

[2,4,7].forEach(high5);