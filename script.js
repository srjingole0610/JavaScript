'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

///////////////////////////////////////
//Sets
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza', 
  'Risotto', 
  'Pasta']);

console.log(orderSet);

console.log(new Set('Jonas'));
console.log(new Set());
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);

for (const order of orderSet){
  console.log(order);
}

//RT Example
const staff = ['Waiter','Chef', 'Waiter', 'Manager', 'Chef','Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

///////////////////////////////////////