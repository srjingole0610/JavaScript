'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// //Slice()
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(2,-1));
// console.log(arr.slice(1,-2));
// console.log(arr.slice());  //Shallow Copying

// //Splice
// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1,2);
// console.log(arr); //mutate the original array

// //reverse
// arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// const arr2 = ['j', 'i', 'h','g'];
// console.log(arr2.reverse());
// console.log(arr2); // mutate the original array

// //Concat
// arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// const arr3 = ['g', 'h', 'i', 'j'];
// console.log(arr.concat(arr3));
// console.log(arr3);

// //Join
// arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr.join(' - '));

// /////////////////////////////////////////////////

// /////////////////////////////////////////////////
// // New At Method
// const arr4 = [23,11,64];
// console.log(arr4[0]);
// console.log(arr4.at(0));

// console.log(arr4[arr4.length - 1]);
// console.log(arr4.slice(-1)[0]);
// console.log(arr4.at(-1));

// ////////////////////////////////////

// /////////////////////////////////////////////////
//forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //for of loop
// for (const mov of movements) {
//   if(mov>0){
//     console.log(`You Deposited: ${mov}`);
//   }
//   else{
//     console.log(`You Withdrew: ${mov}`);
//   }
// }

movements.forEach(function (mov, index, array) {
  if (mov > 0) {
    console.log(`Movement ${index + 1}: You Deposited: ${mov}`);
  } else {
    console.log(`Movement ${index + 1}: You Withdrew: ${Math.abs(mov)}`);
  }
});

//forEach for Maps and Sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);

});


const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'EURB']);
currenciesUnique.forEach((value, _, set) => {
  console.log(`${value}: ${value}`);
});
// /////////////////////////////////////////////////

