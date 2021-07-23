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

/////////////////////////////////////////////////

//! ~~~~~~~~~~ ARRAY METHODS ~~~~~~~~~~~~~~~~

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //* SLICE
// console.log(arr.slice(2))
// // returns ['c', 'd', 'e']
// console.log(arr.slice(2, 4));
// // returns ['c', 'd']
// console.log(arr.slice(-2));
// // return ['d', 'e'] // negatives start at the end
// console.log(arr.slice(1, -2));
// // returns ['b', 'c']
// console.log(arr.slice());
// // returns shallow copy of original array

// //* SPLICE
// // console.log(arr.splice(2));
// // //returns ['c', 'd', 'e']
// // // destructive, will alter original array
// arr.splice(-1)
// // returns ['a', 'b', 'c', 'd']
// arr.splice(1, 2);
// // returns ['a', 'd']
// console.log(arr);

// //* REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse());
// // reverse mutates the original arrays

// //* CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]); // does the same thing
// // concat doesn't mutate the original array

// //* JOIN
// console.log(letters.join('-'));

//! ~~~~~~~~~~~ Looping Arrays: forEach ~~~~~~~~~~~~~~

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// //* ~~~~~~~for of loop~~~~~~~~
// for (const movement of movements) {
//   if(movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// //* OR
// for (const [i, movement] of movements.entries()) {
//   if(movement > 0) {
//     console.log(`Movement ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }
// //? this method gives you access to the current index

// //* ~~~~~~~~~~~~~ForEach~~~~~~~~~~
// //? foreach is a higher order function with a callback function that performs on each iteration of the array
// movements.forEach(function(movement, index, array) {
//   movement > 0 ? console.log(`Movement ${index + 1} You deposited ${movement}`) : console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
// });
// //?NOTE In the callback function in a forEach method, the first paramenter must always be the current element, the second parameter is always the current index, and the third parameter is the entire array we are looping over
// //?NOTE forEach will ALWAYS loop through the entire array, continue and break does NOT work


//! ~~~~~~~~~~~ forEach with Maps and Sets ~~~~~~~~~~~

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, entireMap) {
//   console.log(`${key}: ${value}`);
// });

// //* Set
// //?NOTE sets only have unique information, so the repeat values will be cut
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, key, entireMap) {
//   console.log(`${key}: ${value}`);
//   //? Sets don't have keys or values so all the above parameters are the same
// });

//! ~~~~~~~~~~~~~ CODING CHALLENGE #1 ~~~~~~~~~~~~~~~~

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const juliaData1 = [3, 5, 2, 12, 7];
// const kateData1 = [4, 1, 15, 8, 3];
// const juliaData2 = [9, 16, 6, 8, 3];
// const kateData2 = [10, 5, 6, 1, 4];

// const checkDogs = (dogsJulia, dogsKate) => {
//   const juliaNew = dogsJulia.slice(1, -2);
//   juliaNew.concat(dogsKate).forEach(function(movement, index){
//     movement >= 3 ? console.log(`Dog number ${index + 1} is an adult, and is ${movement} years old`) : console.log(`Dog number ${index + 1} is still a puppy, and is ${movement} years old`)
//   })
// }

// console.log('~~~~~~Test Data 1 ~~~~~~');
// checkDogs(juliaData1, kateData1);
// console.log('~~~~~~Test Data 2 ~~~~~~');
// checkDogs(juliaData2, kateData2);

//! ~~~~~~~~~ The Map Method ~~~~~~~~~~~~~

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eruoToUsd = 1.1;

// // const movementsUSD = movements.map(function(mov) {
// //   return mov * eruoToUsd;
// // });

// //* w/ Arrow Function
// const movementsUSD = movements.map((mov) =>  mov * eruoToUsd
// );

// console.log('Movements: ', movements);
// console.log('MovementsUSD: ', movementsUSD);

// const movementsUSDfor= [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eruoToUsd);
// }
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i, arr) => {
//   return `Movement ${i + 1}: You ${mov > 0 ? 'deposited': 'withdrew'} ${Math.abs(mov)}`
// });

// movementsDescriptions.forEach((index)=> console.log(index));

//! ~~~~~~~~~~~~ The Filter Method ~~~~~~~~~~~~~~~~

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function(mov) {
//   return mov > 0;
//   // return a boolean
// });

// const withdrawals = movements.filter(function(mov) {
//   return mov < 0;
//   // return a boolean
// });

// console.log(movements);
// console.log(deposits);
// console.log(withdrawals);

//! ~~~~~~~~~~~~ The Reduce Method ~~~~~~~~~~~~~~~~~~~~

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);

// //? accumulator => essentially sort of a counter built into the method that increments by the value of the current index
// //?  2 + 4 + 5 + 1 = 12
// //? i1  i2  i3  i4 
// const balance = movements.reduce(function(Accumulator, currentElementOfArray, Index, Array){
//   console.log(`Iteration ${Index}: ${Accumulator}`);
//   return Accumulator + currentElementOfArray
// }, 0);
// //can pass in an argument after the callback function that starts the acumulator at that value

// //* Simplfied arrow funciton version
// // const balance = movements.reduce((acc, eValue) => acc + eValue)

// console.log(balance);
