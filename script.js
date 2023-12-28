// Declare a variable 'js' and assign the string value 'amazing' to it.
let js = 'amazing'; 

// Print the result of the multiplication 40 * 12 to the console.
console.log(40 * 12);


////////////////////////////////////
// Values and Variables
// Print the string 'jonas' to the console.
console.log("jonas");
// Print the number 23 to the console.
console.log(23);
// Declare a variable 'firstName' and assign the string value 'suraj' to it.
let firstName = "suraj";
// Print the value of the variable 'firstName' to the console.
console.log(firstName);

// Variable name conventions
// Avoid using underscores in variable names; prefer camelCase for better readability.
let jonas_matilda = "JM"; 

// 'function' is a reserved keyword in JavaScript; consider using a different name.
// let function = 27; // Incorrect usage, choose a different variable name.
let $function = 27; 

// Use descriptive variable names; 'person' represents a person's name in this context.
let person = "jonas"; 

// Constants, like PI (the mathematical constant), should be in uppercase with underscores.
let PI = 3.1415; 

// Use camelCase for multi-word variable names; provide clear names for better code understanding.
let myFirstJob = "Coder"; // Represents the first job of a person.
let myCurrentJob = "Teacher"; // Represents the current job of a person.

// Generic variable names like 'job1' and 'job2' are less descriptive; consider using more meaningful names.
let job1 = "programmer"; 
let job2 = "teacher"; 

// Print the value of the variable 'myFirstJob' to the console.
console.log(myFirstJob); 

// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console


let country = 'India';
let continent = 'Asia';
let Population = 330000000;
console.log(country,continent,Population);
////////////////////////////////////


////////////////////////////////////
// Data Types
// Declare a variable 'javascriptIsFun' and assign a boolean value 'true' to it.
let javascriptIsFun = true;
console.log(javascriptIsFun);

// Print the data type of the boolean value 'true' to the console.
console.log(typeof true);

// Print the data type of the string 'Suraj' to the console.
console.log(typeof 'Suraj');

// Print the data type of the variable 'javascriptIsFun' (boolean) to the console.
console.log(typeof javascriptIsFun);

// Print the data type of the number '23' to the console.
console.log(typeof 23);

// Change the value of 'javascriptIsFun' to 23, showcasing dynamic typing in JavaScript.
javascriptIsFun = 23;
console.log(typeof javascriptIsFun);

// Declare a variable 'year' without assigning a value.
let year;
console.log(year);

// Print the data type of the variable 'year', which is currently undefined.
console.log(typeof year);

// Assign the value 1996 to the variable 'year'.
year = 1996;
console.log(year);

// Print the data type of the variable 'year', which is now a number.
console.log(typeof year);

// Print the data type of the value 'null' to the console.
console.log(typeof null);
////////////////////////////////////


////////////////////////////////////
// let, const, and var

// Declare a variable 'age' using 'let' and assign the value 30 to it.
let age = 30;

// Modify the value of 'age' to 31, demonstrating that 'let' allows reassignment.
age = 31;

// Declare a constant variable 'birthYear' using 'const' and assign the value 1991 to it.
const birthYear = 1991;

// Attempting to reassign 'birthYear' to 1990 will result in an error because it is a constant.
// Uncommenting the next line will lead to a TypeError.
// birthYear = 1990;

// Declaring a constant variable 'job' without assigning a value will result in an error.
// Uncommenting the next line will lead to a SyntaxError.
// const job;

// Declare a variable 'myJob' using 'var' and assign the string value 'programmer' to it.
var myJob = 'programmer';

// Modify the value of 'myJob' to 'Full Stack Developer', showcasing 'var' allows reassignment.
myJob = 'Full Stack Developer';

// Assigning a value to 'lastName' without using 'let', 'const', or 'var' implicitly declares a global variable.
lastName = 'Ingole';

// Print the value of 'lastName' to the console.
console.log(lastName);
////////////////////////////////////


////////////////////////////////////
// Basic Operators
// Math operators

// Calculate the age of Suraj and Priyanka based on their birth years.
const ageSuraj = 2023 - 1995;
const agePriyanka = 2023 - 1996;

// Print the calculated ages to the console.
console.log(ageSuraj);
console.log(agePriyanka);

// Print both ages in a single line to the console.
console.log(ageSuraj, agePriyanka);

// Calculate the ages of Akash and Priya based on the current year.
const now = 2023;
const ageAkash = now - 1990;
const agePriya = now - 1999;

// Print the ages of Akash and Priya to the console.
console.log(ageAkash, agePriya);

// Perform various mathematical operations and print the results to the console.
console.log(ageSuraj * 2, ageSuraj / 10, 2 ** 3);

// Concatenate strings to form the full name and print to the console.
const myFirstName = 'Suraj';
const myLastName = 'Ingole';
console.log(myFirstName + myLastName);
console.log(myFirstName + ' ' + myLastName);

// Assignment operators

// Perform addition and print the result.
let x = 10 + 5;
console.log(x);

// Use the compound assignment operator '+=' and print the updated value.
x += 10;
console.log(x);

// Use the compound assignment operator '*=' and print the updated value.
x *= 4;
console.log(x);

// Increment x by 1 using the increment operator '++' and print the updated value.
x++;
console.log(x);

// Decrement x by 1 using the decrement operator '--' and print the updated value.
x--;
console.log(x);

// Comparison operators

// Compare ages and print the results to the console.
console.log(ageSuraj > agePriyanka);
console.log(ageSuraj > ageAkash);

// Check if Priya is full age (18 or older) and print the result.
const isFullAge = agePriya >= 18;
console.log(isFullAge);

// Compare birth years and print the result to the console.
console.log(now - 1991 > now - 2018);
////////////////////////////////////
