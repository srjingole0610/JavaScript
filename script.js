'use strict';

// // Data needed for a later exercise
const weekdays = ['Sun', 'Mon', 'Tue', 'wed', 'Thu', 'Fri', 'Sat'];

const openingHours = {
  [weekdays[3]]: {
    open: 8,
    close: 22,
  },
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderpasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// //Desctructing Arrays
// const arr = [2, 3, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// let [mainCategory, , secondaryCategory] = restaurant.categories;
// console.log(mainCategory, secondaryCategory);

// [mainCategory, secondaryCategory] = [secondaryCategory, mainCategory];
// console.log(mainCategory, secondaryCategory);

// let order = restaurant.order(2, 0);
// console.log(order);
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// //Nested Array

// const nested = [2, 3, 4, [5, 6, 7], 8];
// // const [i, , ,   j] = nested;
// // console.log(i,j);

// const [i, , , [j, k, l]] = nested;
// console.log(i, j, k, l);

// //Destructuring Objects

// const { name, openingHours, closeHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //default value
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables

// let a1 = 111;
// let b2 = 999;

// const obj = {a1:23, b2:7, c1:14};
// ({a1, b2} = obj);
// console.log(a1,b2);

// //nested Object
// const {fri: {open:openTime,close:closeTime}} = openingHours;
// console.log(openTime,closeTime);

// restaurant.orderDelivery({
//   time : '22:30',
//   address: 'Via Angelo Tavanti 23, Firenze, Italy',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// //Spread Operators
// const array = [7,8,9];
// const newArray = [5,6, ...array];
// console.log(newArray);

// console.log(...newArray);

// const newMenu = [...restaurant.mainMenu, 'Gnooci'];
// console.log(newMenu);
// console.log(restaurant.mainMenu);

// //Shallow Copy
// const mainMenuCopy = [...restaurant.mainMenu,];

// //Join Two arrays
// const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(wholeMenu);

// const str = 'Restaurant';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3') ];
// restaurant.orderpasta(...ingredients);

// //Objects

// const newRestaurant = {...restaurant, founder: 'Suraj'};
// console.log(newRestaurant);

// //REST Parameters and Patterns
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(a, b, others);

// const [pizza, , Risotto, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, Risotto, otherFoods);

// //Objects
// const {sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers){
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// }

// add(2,3);
// add (5,3,7,2);
// add (8,2,5,3,2,1,4);

// const X = [23,5,7];
// add(...X);

// restaurant.orderPizza('mushrooms', 'onions', 'olives','spinach');
// restaurant.orderPizza('mushrooms');

// //Short Circuiting (||)
// console.log(3 || 'Suraj');
// console.log('' || 'Suraj');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || 'Suraj'|| 23);

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// //Short Circuiting (&&)
// console.log(3 && 'Suraj');
// console.log('' && 'Suraj');
// console.log(true && 0);
// console.log(undefined && null);

// console.log(undefined && 0 && 'Suraj' && 23);

// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms', 'onions', 'olives','spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onions');

// //Null Coalescing Operator
// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests? restaurant.numGuests : 10;
// console.log(guest1);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// //Logical Assignment Operators

// const rest1 = {
//   name : '1221',
//   // numGuests :20
//   numGuests :0
// // };
// };

// const rest2 = {
//   name : 'SilverSpoon',
//   owner : 'Suraj Ingole'
// };

// //OR Assignment Operators
// rest1.numGuests ||=10;
// rest2.numGuests ||=10;
// console.log(rest1);
// console.log(rest2);

// //Nullish Assignment Operators
// rest1.numGuests ??=10;
// rest2.numGuests ??=10;
// console.log(rest1);
// console.log(rest2);

// //AND Assignment Operator
// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'
// console.log(rest1);
// console.log(rest2);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //First
// const [players1,players2] = game.players;
//  console.log(players1, players2);

// //Second
// const [gkBM, ...fieldPlayersBM] = players1;
// console.log(gkBM, fieldPlayersBM);

// const [gkBD, ...fieldPlayersBD] = players2;
// console.log(gkBD, fieldPlayersBD);

// //Third
// const allPlayers = [...players1,...players2];
// console.log(allPlayers);

// //Fourth
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //Fifth
// const {odds: {team1,x,team2}} = game;
// console.log(team1, x, team2);

// //Sixth
// const printGoals = function(...players){
//   console.log(`${players.length} goals were scored`)
// };

// printGoals(...game.scored);

// //Seventh
// team1<team2 && console.log('Team 1 is more likely two win');
// team1>team2 && console.log('Team 2 is more likely two win');

// //FOR-OF Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
//  for(const item of menu) {
//    console.log(item);
//  }

//  for (const [i,el] of menu.entries()) {
//    console.log(`${i+1}: ${el}`);
//  }

//  console.log([...menu.entries()]);

///////////////////////////////////////
// //Enhanced Object Literals
// console.log(restaurant);
// console.log(openingHours);

// ///////////////////////////////////////
// //Optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days =['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// for(const day of days){
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Optional Chaining on Methods
// console.log(restaurant.order?.(0,1) ?? 'Methods not Exists');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Methods not Exists');

// //Arrays
// const users = [{name: 'John', email: 'john@example.com'}];
// console.log(users[0]?.name ?? 'User Array empty');

// ///////////////////////////////////////

// //Looping Objects
// const properties = Object.keys(openingHours)
// console.log(properties);

// let openStr = (`We are open on ${properties.length} days: `);

// const days =['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// for(const day of properties){
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property Values
// const values = Object.values(openingHours);
// console.log(values);

// //Property Entries
// const entries = Object.entries(openingHours);
// console.log(entries);

// for(const [key,{open, close}] of entries) {
//   console.log(`On ${key}, We open at ${open} and close at ${close}`);

// }

// ///////////////////////////////////////
// // Coding Challenge #2

// /*
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// GOOD LUCK 😀
// */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //First
// for (const [i, player] of  game.scored.entries()){
// console.log(`Goals ${i}: ${player}`);}

// //Second
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

// //Third
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// //Bonus
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// ///////////////////////////////////////

// ///////////////////////////////////////
// //Sets
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta']);

// console.log(orderSet);

// console.log(new Set('Jonas'));
// console.log(new Set());
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// console.log(orderSet);
// orderSet.delete('Risotto');
// console.log(orderSet);

// for (const order of orderSet){
//   console.log(order);
// }

// //RT Example
// const staff = ['Waiter','Chef', 'Waiter', 'Manager', 'Chef','Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// ///////////////////////////////////////

// ///////////////////////////////////////
// //Maps : Fundamentals
// const rest = new Map();
// rest.set('name', 'Le Stone');
// rest.set('location', 'Ravet');
// console.log(rest);

// rest
//   .set('category', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'we are closed');
// console.log(rest);

// console.log(rest.get(true));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('name'));
// // rest.delete('name');
// console.log(rest.size);
// // rest.clear();
// rest.set([1,2], 'Test');
// rest.set(document.querySelector('h1'),'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get([1,2]));

// // Maps: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// // const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// ///////////////////////////////////////

// ///////////////////////////////////////
// // Coding Challenge #3

// /*
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1.
// const events = [new Set(gameEvents.values())];
// console.log(events);

// //2.
// gameEvents.delete(64);
// console.log(gameEvents);

// //3.
// console.log(`An event happened, on average, every ${90 / gameEvents.size}  minutes`);

// //4.
// for (const [minute, event] of gameEvents) {
//   const half =  minute<=45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${minute}: ${event}`);
// }

// ////////////////////////////////
// //Strings
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
// console.log(airline.length);

// //IndexOf and LastIndexOf
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.indexOf('portugal'));

// //Slice
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7).length);
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// //check middle seat
// const checkMiddleseat = function (seat) {
//   //B and E are middle seat
//   const seats = seat.slice(-1);
//   if (seats === 'B' || seats === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got lucky🍀');
//   }
// };

// checkMiddleseat('11B');
// checkMiddleseat('31C');
// checkMiddleseat('15E');
// checkMiddleseat('1A');

// //UpperCase and LowerCase
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix Capitalization
// const passenger = 'jOnAS';
// const passengerName = passenger.toLowerCase();
// const passengerCorrectName =
//   passengerName[0].toUpperCase() + passengerName.slice(1);
// console.log(passengerCorrectName);

// //Comparing Emails
// const emailAddress = 'suraj.ingole@gmail.com';
// const loginEmail = '   Suraj.ingole@Gmail.com \n';
// // const lowercaseEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowercaseEmail.trim();
// // console.log(trimmedEmail);
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(emailAddress === normalizedEmail);

// //Replacing(replace and ReplaceAll)
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);
// const announcements =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcements.replaceAll('door', 'gate'));
// console.log(announcements.replace(/door/g, 'gate'));

// //Booleans
// const plane1 = 'AirBus A320neo';
// console.log(plane1.includes('A320'));
// console.log(plane1.includes('Boeing'));
// console.log(plane1.startsWith('Air'));
// console.log(plane1.endsWith('neo'));
// if (plane1.startsWith('AirBus') && plane1.endsWith('neo')) {
//   console.log('Part of the NEW AirBus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// //SPLIT
// console.log('a+very+nice+string'.split('+'));
// console.log('Suraj Ashok Ingole'.split(' '));

// const [first, last] = 'Suraj Ingole'.split(' ');
// console.log(first, last);

// //JOIN
// const newName = ['Mr.', first, last.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const upperNames = [];
//   for (const word of names) {
//     upperNames.push(word[0].toUpperCase() + word.slice(1));
//   }
//   console.log(upperNames.join(' '));
// };
// capitalizeName('suraj ingole');
// capitalizeName('priyanka ingole');

// //Padding
// const messages = 'Go to gate 23!';
// console.log(messages.padStart(25, '+').padEnd(35,'+'));

// const maskCreditCard = function(number){
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// }
// console.log(maskCreditCard(1234567890123423));
// console.log(maskCreditCard(1234567890123459));
// console.log(maskCreditCard(1234567890123756));

// // Repeat
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// ////////////////////////////////

// ///////////////////////////////////////
// // Coding Challenge #4

// /*
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀
// */

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

///////////////////////////////////////
// String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0,3).toUpperCase();
for (const flight of flights.split('+')) {
  const [types, from, to, time] = flight.split(';');
  const output = `${types.startsWith('_Delayed') ? '🔴' : ''}${types.replaceAll('_', ' ')} ${getCode(from)} to ${getCode(to)} ${time.replace(
    ':',
    'h'
  )}`.padStart(36);
  console.log(output);
}
