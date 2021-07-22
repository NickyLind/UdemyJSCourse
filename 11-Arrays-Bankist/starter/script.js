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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//! ~~~~~~~~~~ ARRAY METHODS ~~~~~~~~~~~~~~~~

let arr = ['a', 'b', 'c', 'd', 'e'];

//* SLICE
console.log(arr.slice(2))
// returns ['c', 'd', 'e']
console.log(arr.slice(2, 4));
// returns ['c', 'd']
console.log(arr.slice(-2));
// return ['d', 'e'] // negatives start at the end
console.log(arr.slice(1, -2));
// returns ['b', 'c']
console.log(arr.slice());
// returns shallow copy of original array

//* SPLICE
// console.log(arr.splice(2));
// //returns ['c', 'd', 'e']
// // destructive, will alter original array
arr.splice(-1)
// returns ['a', 'b', 'c', 'd']
arr.splice(1, 2);
// returns ['a', 'd']
console.log(arr);

//* REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse());
// reverse mutates the original arrays

//* CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // does the same thing
// concat doesn't mutate the original array

//* JOIN
console.log(letters.join('-'));

//! ~~~~~~~~~~~ Looping Arrays: forEach ~~~~~~~~~~~~~~

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//* ~~~~~~~for of loop~~~~~~~~
// for (const movement of movements) {
//   if(movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
//* OR
// for (const [i, movement] of movements.entries()) {
//   if(movement > 0) {
//     console.log(`Movement ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }
//? this method gives you access to the current index

//* ~~~~~~~~~~~~~ForEach~~~~~~~~~~
//? foreach is a higher order function with a callback function that performs on each iteration of the array
movements.forEach(function(movement, index, array) {
  movement > 0 ? console.log(`Movement ${index + 1} You deposited ${movement}`) : console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
});
//?NOTE In the callback function in a forEach method, the first paramenter must always be the current element, the second parameter is always the current index, and the third parameter is the entire array we are looping over
//?NOTE forEach will ALWAYS loop through the entire array, continue and break does NOT work