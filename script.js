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

////////////////////////////////////
// Operator Precedence

// Assign values to variables z and y using chained subtraction.
// The expression is evaluated from left to right: 25 - 10 - 5.
// Result: z = y = 10
let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

// Calculate the average age using the sum of ageSuraj and agePriyanka divided by 2.
// Operator precedence ensures that the addition is performed before division.
const averageAge = (ageSuraj + agePriyanka) / 2;
console.log(ageSuraj, agePriyanka, averageAge);
////////////////////////////////////


////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.76 m tall.
TEST DATA 2: Marks weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

//SOLUTION
// Part 1 
// Store Mark's and John's mass and height in variables.
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.76;

// Part 2
// Calculate both Mark's and John's BMIs using the formula.
const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);

// Part 3
// Create a boolean variable 'markHigherBMI' to compare their BMIs.
markHigherBMI = BMIMark > BMIJohn;

// Print the calculated BMIs and the result of the comparison to the console.
console.log(BMIMark, BMIJohn, markHigherBMI);
////////////////////////////////////


////////////////////////////////////
// Strings and Template Literals

// Declare variables for name, job, birth year, and current year.
const _firstName = 'Suraj';
const myNewJob = 'Developer';
const myBirthYear = 1996;
const currentYear = 2023;

// Concatenate strings using the traditional method.
const myDetails = "I'm " + _firstName + ', a ' + (currentYear - myBirthYear) + ' years old ' + myNewJob; 
console.log(myDetails);

// Use template literals for string interpolation, providing a cleaner and more readable syntax.
const myNewDetails = `I'm ${_firstName}, a ${currentYear - myBirthYear} years old ${myNewJob}`;
console.log(myNewDetails);

// Demonstrate a simple template literal without variables.
console.log(`Just a regular string...`);

// Compare creating a string with multiple lines using traditional backslashes and with template literals.
console.log('String with \n\
multiple \n\
lines');

// Utilize template literals for a string with multiple lines in a more concise manner.
console.log(`String
multiple
lines`);
////////////////////////////////////


////////////////////////////////////
// Taking Decisions: if / else Statements

// Declare a variable representing a new age and create a boolean indicating if the person is old enough.
const newAge = 19;
const isOldEnough = newAge >= 18;

// Use an if/else statement to check if Suraj is old enough to opt for a driving license.
if (isOldEnough) {
    console.log('Suraj can opt for a driving license 🚗');
} else {
    // If not old enough, calculate the number of years left and display a message.
    const yearsLeft = 18 - newAge;
    console.log(`Suraj cannot opt for a driving license. He is too young. Wait another ${yearsLeft} years. 🥲`);
}

// Declare a variable for a new birth year and determine the century based on a conditional statement.
const newBirthYear = 1995;
let century;

if (newBirthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

// Print the determined century to the console.
console.log(century);
////////////////////////////////////


////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// SOLUTION
// PART 1
// Declare variables for the new masses and heights of Mark and John.
const newMassMark = 78;
const newHeightMark = 1.69;
const newMassJohn = 92;
const newHeightJohn = 1.76;

// Calculate the new BMIs for Mark and John.
const newBMIMark = newMassMark / (newHeightMark ** 2);
const newBMIJohn = newMassJohn / (newHeightJohn ** 2);

// Determine if Mark has a higher BMI than John.
const newHigherBMI = newBMIMark > newBMIJohn;

// Part 2
// Use an if/else statement to print a message about who has the higher BMI, including the BMI values.
if (newHigherBMI) {
    // Print a message when Mark has a higher BMI.
    console.log(`Mark's BMI (${newBMIMark}) is higher than John's (${newBMIJohn})!`);
} else {
    // Print a message when John has a higher BMI.
    console.log(`John's BMI (${newBMIJohn}) is higher than Mark's (${newBMIMark})!`);
}
////////////////////////////////////
