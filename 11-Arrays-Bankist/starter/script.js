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

// //* Maximum value of movements array
// //? NOTE reduce method "boils down(reduces)" an array into one value. This doesn't have to be by summing everything together

// const maximumValue = movements.reduce(function(acc, eValue) {
//   if(eValue < acc) {
//     return acc 
//   } else {
//     return eValue
//   }
// }, movements[0]);

// //* DRY'd up version
// // const maximumValue = movements.reduce((acc, mov) => {
// //   if ( acc > mov) return acc
// //   else return mov}, movements[0])

// console.log(maximumValue);

//! ~~~~~~~~~~~~ CODING CHALLENGE #2 ~~~~~~~~~~~~~~~
// /* 
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// // const calcAverageHumanAge = (ages) => {
// //   const humanAge = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4)
// //   const adults = humanAge.filter((mov) => mov >= 18)
// //   const average = adults.reduce((acc, value, i, arr) => 
// //     (acc + value / arr.length), 0) 
// //     console.log('human age: ', humanAge);
// //     console.log('adults: ', adults);
// //     console.log('average: ', average);
// //     return average
// //   }

// //* different methods of calculating averages
// // 2, 3  (2+3)/2 = 2.5 === (2/2)+(3/2) = 2.5
// //* CHAINING TOGETHER

// const calcAverageHumanAge = (ages) => {
// const humanAgeAverage = ages
// .map(age => age <= 2 ? age * 2 : 16 + age * 4)
// .filter((mov) => mov >= 18)
// .reduce((acc, value, i, arr) => 
//     (acc + value / arr.length), 0)
//   return humanAgeAverage
// }
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))


//! ~~~~~~~~~~~ Chaining Methods ~~~~~~~~~~~~~~~
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// //* PIPELINE
// const totalDepositsUSD = movements
// .filter(mov => mov > 0)
// //* can log the array parameter in the callback function to help debug
// // .map((mov, i, array) => {
// //   console.log(array);
// //   return mov * eurToUsd
// // })
// .map(mov => mov * eurToUsd)
// .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

//! ~~~~~~~~~~~~~~ CODE CHALLENGE #3 ~~~~~~~~~~~~~~~~~
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = ages => {
// return ages
// .map(age => age <= 2 ? age * 2 : 16 + age * 4)
// .filter((mov) => mov >= 18)
// .reduce((acc, value, i, arr) => 
//     (acc + value / arr.length), 0)
// }
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))

//! ~~~~~~~~~~~~~~~~~~ The Find Method ~~~~~~~~~~~~~~~~~
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawl = movements.find(function(mov){
//   return mov < 0;
//   //the find method returns a boolean
//   //the find method finds the first element in the array where the operation in the call back function returns true
// });
// console.log(movements);
// console.log(firstWithdrawl);
// //*NOTE ~~~~Differences between Find and Filter~~~~
// //* Filter returns a whole new array that matches the conditions of the callback function
// //* Find only returns the first element that matches the conditions of the callback function
// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(account);

//! ~~~~~~~~~~~~~~~~~ Some & Every ~~~~~~~~~~~~~~~~~
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //* ~~~~~~ SOME ~~~~~~
// console.log(movements);

// //*EQUALITY (one)
// console.log(movements.includes(-130));

// //*CONDITION (any)
// const anyDeposits = movements.some( mov => mov > 0)
// console.log(anyDeposits);

// //* ~~~~~~~ EVERY ~~~~~~
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// //* Seperate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//! ~~~~~~~~~~~~~~~~ Flat & flatMap Methods ~~~~~~~~~~~~~~~~~

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
//?NOTE remove nested arrays and 'flattens' the array values into a single array

const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];

//* ~~~ Flat ~~~~~

//console.log(arrDeep.flat()); 
//* flat only flattens one level by defaukt so we will still have values that are arrays, this can be fixed by adding a depth value to the method
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map( acc => acc.movements)
// console.log(accountMovements);
// const allMovements = accountMovements.flat()
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//* ~~~~~~ flatMap ~~~~~~~
//?NOTE flatMap only goes one level deep, so map and flat seperately must be used to go deeper
const overallBalance2 = accounts
  .flatMap( acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);