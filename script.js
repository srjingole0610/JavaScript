'use strict';

////////////////////////////////
// // Default Parameters
/*
    In JavaScript, default parameters allow you to initialize function parameters with default values if no argument or an undefined value is passed during the function call. Default parameters provide flexibility and allow functions to handle a variety of scenarios without explicitly checking for undefined or missing arguments.

    function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
    }

    greet(); // Output: Hello, Guest!
    greet('John'); // Output: Hello, John!
    In the example above:

    The greet function has a default parameter name set to 'Guest'.
    If no argument is passed during the function call, or if undefined is passed, the default value 'Guest' is used.
    If an argument is provided during the function call, it overrides the default value.


    Real-Time Scenario:
    Consider a scenario where you have a function to create a user profile. You want to provide default values for some of the user's attributes if they are not provided.
    function createUserProfile(name, age = 18, email = 'example@example.com') {
    console.log('User Profile:');
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Email:', email);
    }

    createUserProfile('John');
    In this scenario:

    The function createUserProfile takes three parameters: name, age, and email.
    If age and email are not provided during the function call, they default to 18 and 'example@example.com' respectively.
    If only name is provided during the function call, the default values for age and email are used.

    Default parameters help simplify function definitions and make the code more concise by providing sensible defaults for function arguments. They are especially useful when defining functions that are likely to be called with missing or undefined arguments in certain scenarios.
*/
// const bookings = [];
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

/*
    Passing by Value:
    When you pass a primitive data type (such as numbers, strings, or booleans) to a function, it's passed by value. This means a copy of the actual value is passed to the function, and any modifications made to the parameter inside the function do not affect the original variable. 
    function increment(num) {
    num++;
    console.log("Inside function:", num);
    }

    let count = 10;
    increment(count);
    console.log("Outside function:", count);
    In this example:
    count is a variable holding a primitive value (a number).
    When count is passed to the increment function, a copy of its value (10) is passed.
    Inside the function, num is incremented, but this change doesn't affect the original count variable.


    Passing by Reference:
    When you pass an object (including arrays and functions) to a function, it's passed by reference. This means the memory address of the object is passed to the function, not a copy of the object itself. Therefore, any changes made to the object inside the function will reflect in the original object.

    function addProperty(obj) {
    obj.newProperty = "Hello";
    console.log("Inside function:", obj);
    }

    let person = { name: "John" };
    addProperty(person);
    console.log("Outside function:", person);

    In this example:
    person is an object.
    When person is passed to the addProperty function, it's passed by reference.
    Inside the function, a new property newProperty is added to the person object. This change reflects outside the function as well.

*/

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

// ////////////////////////////////
// //Functions Accepting Callbacks Functions

// /*
// In JavaScript, a callback function is a function that is passed as an argument to another function and is invoked after some operation is completed. Callback functions are a fundamental concept in asynchronous programming, allowing you to handle tasks that take time to complete without blocking the execution of other code.

// // Example of a function with a callback
// function doSomethingAsync(callback) {
//     setTimeout(function() {
//         console.log("Async operation done.");
//         callback();
//     }, 2000); // Simulating an asynchronous operation that takes 2 seconds
// }

// // Callback function
// function callbackFunction() {
//     console.log("Callback function executed.");
// }

// // Invoking the function with the callback
// doSomethingAsync(callbackFunction);

// In the example above:
// doSomethingAsync is a function that performs an asynchronous operation (here, simulated with setTimeout).
// It takes a callback function callback as an argument.
// After the asynchronous operation is complete, it invokes the callback function.

// Real-Time Scenario:
// Consider a scenario where you need to fetch data from a server and perform some operation on that data once it's retrieved.
// // Simulated function to fetch data from a server
// function fetchDataFromServer(callback) {
//     setTimeout(function() {
//         const data = { id: 1, name: "John Doe", age: 30 };
//         callback(data);
//     }, 2000); // Simulating fetching data from a server
// }

// // Callback function to process the fetched data
// function processData(data) {
//     console.log("Data received:", data);
//     console.log("Processing data...");
//     // Perform some operation on the data
// }

// // Fetch data from server and process it using callback
// fetchDataFromServer(processData);

// In this scenario:

// fetchDataFromServer is a function that mimics fetching data from a server asynchronously.
// It takes a callback function callback as an argument.
// After the data is fetched, it invokes the callback function with the fetched data.
// processData is the callback function that processes the fetched data once it's received.

// Callback functions are extensively used in JavaScript for handling asynchronous operations such as AJAX requests, file I/O, event handling, and more. They allow for non-blocking execution and enable better handling of asynchronous tasks in JavaScript applications.
// */

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [firstWord, ...otherWords] = str.split(' ');
//   return [firstWord.toUpperCase(), ...otherWords].join(' ');
// };

// //Higher-order functions
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed By: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// [2, 4, 7].forEach(high5);

// // ////////////////////////////////////////////////////////////////
// //Functions Returning Functions

// /*
//     In JavaScript, functions can return not only traditional data types like numbers or strings but also other functions. When a function returns another function, it's known as a function returning a function, and it enables powerful techniques such as closures and higher-order functions.
//     function greetMaker(greeting) {
//     return function(name) {
//         console.log(`${greeting}, ${name}!`);
//     };
//     }

//     const greetHello = greetMaker('Hello');
//     const greetGoodbye = greetMaker('Goodbye');

//     greetHello('John'); // Output: Hello, John!
//     greetGoodbye('Jane'); // Output: Goodbye, Jane!
//     In this example:
//     The greetMaker function takes a greeting parameter and returns another function.
//     The returned function takes a name parameter and logs the greeting along with the name.
//     greetHello and greetGoodbye are functions returned by greetMaker, each initialized with a different greeting.

//     Real-Time Scenario:
//     Consider a scenario where you want to create various discount calculators based on different conditions, such as membership status, purchase history, or seasonal promotions.
//     function discountCalculator(discountPercentage) {
//     return function(amount) {
//         const discountAmount = (amount * discountPercentage) / 100;
//         return amount - discountAmount;
//     };
//     }

//     const regularCustomerDiscount = discountCalculator(10);
//     const premiumCustomerDiscount = discountCalculator(20);

//     const regularBillAmount = regularCustomerDiscount(100); // Regular customer gets 10% off
//     console.log("Regular Bill Amount:", regularBillAmount);

//     const premiumBillAmount = premiumCustomerDiscount(100); // Premium customer gets 20% off
//     console.log("Premium Bill Amount:", premiumBillAmount);

//     In this scenario:
//     The discountCalculator function returns a function that calculates the discounted amount based on the provided discount percentage.
//     regularCustomerDiscount and premiumCustomerDiscount are functions returned by discountCalculator, each with a different discount percentage.
//     You can then use these functions to calculate the discounted bill amount for regular and premium customers.
// */

// const greet = function (greetings) {
//   return function (name) {
//     console.log(`${greetings} ${name}`);
//   };
// };

// const greetHey = greet('Hey');
// greetHey('Suraj');
// greetHey('Priyanka');
// greetHey('Yash');

// greet('Hello')('Suraj');

// //Challenge
// const greetArr = greetingss => name => console.log(`${greetingss} ${name}`);
// greetArr('Hello')('Suraj');
// ////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////
// //Call and Apply Methods

// /*
//     In JavaScript, both the call() and apply() methods are used to invoke a function with a specified context (the value of this) and arguments. They are similar but differ in how they accept arguments.

//     call() Method:
//     The call() method calls a function with a given this value and arguments provided individually.
//     const person = {
//     fullName: function(city, country) {
//         return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
//     }
//     };

//     const person1 = {
//     firstName: 'John',
//     lastName: 'Doe'
//     };

//     const person2 = {
//     firstName: 'Jane',
//     lastName: 'Doe'
//     };

//     console.log(person.fullName.call(person1, 'New York', 'USA')); // Output: John Doe, New York, USA
//     console.log(person.fullName.call(person2, 'London', 'UK')); // Output: Jane Doe, London, UK
//     In the example above:
//     We have a person object with a fullName method.
//     The call() method is used to invoke the fullName method with different contexts (person1 and person2) and arguments (city and country).

//     apply() Method:
//     The apply() method is similar to call(), but it accepts arguments as an array.
//     const person = {
//     fullName: function(city, country) {
//         return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
//     }
//     };

//     const person1 = {
//     firstName: 'John',
//     lastName: 'Doe'
//     };

//     const person2 = {
//     firstName: 'Jane',
//     lastName: 'Doe'
//     };

//     console.log(person.fullName.apply(person1, ['New York', 'USA'])); // Output: John Doe, New York, USA
//     console.log(person.fullName.apply(person2, ['London', 'UK'])); // Output: Jane Doe, London, UK

//     Real-Time Scenario:
//     A common real-time scenario for using call() and apply() methods is in the context of inheritance and method borrowing.
//     Consider a scenario where you have a base object with a method, and you want to reuse that method in another object:
//     const baseObject = {
//     greet: function() {
//         return 'Hello, ' + this.name;
//     }
// }   ;

//     const person1 = {
//     name: 'John'
//     };

//     const person2 = {
//     name: 'Jane'
//     };

//     // Using call to borrow the method from baseObject
//     console.log(baseObject.greet.call(person1)); // Output: Hello, John
//     console.log(baseObject.greet.call(person2)); // Output: Hello, Jane

// */
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight:`${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Suraj Ingole');
// lufthansa.book(635, 'John Harry');
// console.log(lufthansa);

// const eurowings ={
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book;
// // //Does not support
// // book(23, 'Sarah Williams');
// book.call(eurowings,23,'Sarah Williams');
// console.log(eurowings);
// book.call(lufthansa,243,'Nicolas Smith');
// console.log(lufthansa);

// const swiss ={
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// }

// book.call(swiss,583, 'Mary Cooper');
// console.log(swiss);

// const flightData = [583, 'George Cooper'];
// book.apply(swiss,flightData);
// console.log(swiss);

// ////////////////////////////////////////////////

// ////////////////////////////////////////////////
// //Bind Methods

// /*
//     In JavaScript, the bind() method is used to create a new function with a specified this value, and optionally, initial arguments. It's particularly useful when you want to set a specific context for a function that will be invoked later.

//     const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     };

//     const printFullName = person.fullName; // Assigning the method to a variable
//     const boundPrintFullName = printFullName.bind(person); // Binding the 'this' value to 'person'
//     console.log(boundPrintFullName()); // Output: John Doe
//     In this example:
//     We have an object person with properties firstName, lastName, and a method fullName.
//     When we assign person.fullName to printFullName, printFullName loses its context (this), so calling printFullName() would return undefined undefined.
//     By using bind(person) on printFullName, we bind the this context to the person object, creating a new function boundPrintFullName.
//     Now, when we call boundPrintFullName(), it returns the expected result with the correct context.

//     Real-Time Scenario:
//     Consider a scenario where you want to add event listeners to HTML elements and handle events with methods defined in a JavaScript object.
//     const button = document.getElementById('myButton');
//     const handler = {
//         message: 'Button clicked!',
//         handleClick: function(event) {
//             console.log(this.message);
//         }
//     };
//     button.addEventListener('click', handler.handleClick.bind(handler));
//     In this scenario:
//     We have an object handler with a method handleClick that logs a message.
//     We bind handler to the handleClick method using bind(handler).
//     When the button is clicked, the handleClick method is invoked with the correct context (handler), and it logs the message defined in the object.

// */
// const bookEw = book.bind(eurowings);
// const bookSw = book.bind(swiss);
// const bookLH = book.bind(lufthansa);
// bookEw(23, 'Steven Williams');
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings,23);
// bookEW23('Steven sharper');
// console.log(eurowings);

// const bookEW23Suraj = book.bind(eurowings,23,'Suraj');
// bookEW23Suraj();
// console.log(eurowings);

// //With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// };

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// ////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favorite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    const answers = prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write Option Number)`
    );
    if (!isNaN(answers) && answers < this.answers.length) {
      this.answers[answers] += 1;
      this.displayResults();
      this.displayResults('string');
    }
  },
  displayResults(type ='array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type ==='string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

///////////////////////////////////////