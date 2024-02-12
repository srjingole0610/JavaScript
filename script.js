'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
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
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderpasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },

  orderPizza : function(mainIng, ...otherIng){
    console.log(mainIng);
    console.log(otherIng);
  }
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

//Logical Assignment Operators

const rest1 = {
  name : '1221',
  // numGuests :20
  numGuests :0
// };
};

const rest2 = {
  name : 'SilverSpoon',
  owner : 'Suraj Ingole'
};

//OR Assignment Operators
rest1.numGuests ||=10;
rest2.numGuests ||=10;
console.log(rest1);
console.log(rest2);

//Nullish Assignment Operators
rest1.numGuests ??=10;
rest2.numGuests ??=10;
console.log(rest1);
console.log(rest2);


//AND Assignment Operator
rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'
console.log(rest1);
console.log(rest2);
