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

  orderDelivery:function ({starterIndex,mainIndex,time,address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
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

//Destructuring Objects

const { name, openingHours, closeHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);


//mutating variables

let a1 = 111;
let b2 = 999;

const obj = {a1:23, b2:7, c1:14};
({a1, b2} = obj);
console.log(a1,b2);

//nested Object
const {fri: {open:openTime,close:closeTime}} = openingHours;
console.log(openTime,closeTime);

restaurant.orderDelivery({
  time : '22:30',
  address: 'Via Angelo Tavanti 23, Firenze, Italy',
  mainIndex: 2,
  starterIndex: 2,
})
