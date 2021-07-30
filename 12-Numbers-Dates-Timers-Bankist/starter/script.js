'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Nick Lindau',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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

// Function for creating usernames based off user's initials
const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(e => e[0])
    .join('');
  });
};

createUsernames(accounts);
// Function for displaying rows of deposits/withdrawls
const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements

  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov.toFixed(2)}€</div>
    </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
};


// Function for displaying account summary
const calcDisplaySummary = function(acc){
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes.toFixed(2)}€`

  const out = acc.movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc - mov, 0)
  labelSumOut.textContent = `${out.toFixed(2)}€`

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate/100)
    .filter((int, i, array) => int >= 1
    )
    .reduce((acc, int) => acc + int, 0)
  labelSumInterest.textContent = `${interest.toFixed(2)}€`
}

// Function for displaying total account balance
const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce(function(acc, mov) {
    return acc + mov
  }, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`
};

// Function for updating the UI
const updateUI = function(acc){
      //Display movements
      displayMovements(acc.movements)

      //Display balance
      calcDisplayBalance(acc)
  
      //Display summary
      calcDisplaySummary(acc)
}


//Event handler
let currentAccount;

btnLogin.addEventListener('click', function(event){
  event.preventDefault()
  //a button on a form will submit and reload the page by default
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  if (currentAccount?.pin === +(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}!`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur()

    //Update UI
    updateUI(currentAccount)
  }
});

btnTransfer.addEventListener('click', function(event){
  event.preventDefault();
  const amount = +(inputTransferAmount.value);
  const recieverAccount = accounts.find(acc => acc.username === inputTransferTo.value)
  inputTransferTo.value = inputTransferAmount.value = '';

  if(amount > 0 && 
    recieverAccount &&
    currentAccount.balance >= amount && 
    recieverAccount?.username !== currentAccount.username) {
      currentAccount.movements.push(-amount);
      recieverAccount.movements.push(amount);
      updateUI(currentAccount)
  }
});

btnLoan.addEventListener('click', function(event){
  event.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if(amount> 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function(event){
  event.preventDefault();
  inputCloseUsername.value = inputClosePin.value = '';

  if(inputCloseUsername.value === currentAccount.username && +(inputClosePin.value) === currentAccount.pin){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username)
    console.log(index);

    //Delete Account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
});

let sorted = false
btnSort.addEventListener('click', function(event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted
});

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function(row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'orangered'
    }
    if(i % 3 === 0) {
      row.style.backgroundColor = 'blue'
      row.style.color = 'white'
    }
  });
});


console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//! ~~~~~~~~~~~ Converting and Checking Numbers ~~~~~~~~~~~

// console.log(23 === 23.0);
// //?NOTE Base 10 is numbers 0-9 (what we use generally in the real-world)
// //?NOTE Base 2 is binary and uses number 0 & 1
// console.log(0.1 + 0.2);
// // Base 10  >>> 1/10 = 0.1  >>>> 3/10 = 3.33333333
// console.log(0.1 + 0.2 === 0.3) //will equate to false

// //* Conversion
// console.log((Number('23')));
// console.log(+ '23');

// //* Parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10)); // string must start with a number

// console.log(Number.parseFloat('2.5rem'));
// console.log(Number.parseInt('2.5rem'));

// //?NOTE parseInt and parseFloat are global function so they can be called without calling them on the Number object

// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));

// //* Checking if value is a number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20x'));
// console.log(Number.isFinite(23 / 0));

//! ~~~~~~~~~~~ Math & Rounding ~~~~~~~~~~~~~

// console.log(Math.sqrt(25));
// console.log(25 ** (1/2));
// console.log(8 ** (1/3));

// console.log(Math.max(5, 18, 23, 11, 2));

// console.log(Math.min(5, 18, 23, 11, 2));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1)

// //* Rounding Integers
// console.log(`Math.trunc(23.3) = ${Math.trunc(23.3)}`);
// console.log(`Math.trunc(23.7) = ${Math.trunc(23.7)}`);

// console.log(`Math.round(23.7) = ${Math.round(23.7)}`);
// console.log(`Math.round(23.3) = ${Math.round(23.3)}`);

// console.log(`Math.floor(23.3) = ${Math.floor(23.3)}`);
// console.log(`Math.floor(23.7) = ${Math.floor(23.7)}`);

// console.log(`Math.trunc(-23.3) = ${Math.trunc(-23.3)}`);
// console.log(`Math.floor(-23.3) = ${Math.floor(-23.3)}`);
// console.log(`Math.floor(-23.7) = ${Math.floor(-23.7)}`);

// //* Rounding Decimals
// console.log(`(2.7).toFixed(0) = ${(2.7).toFixed(0)}`);
// console.log(`(2.7).toFixed(3) = ${(2.7).toFixed(3)}`);
// console.log(`(2.345).toFixed(2) = ${(2.345).toFixed(2)}`);

//! ~~~~~~~~~~ The Remainder Operator ~~~~~~~~~~~~~~~~

// console.log(`5 % 2 = ${5 % 2} (2 * 2 + 1)`);
// console.log(`8 % 3 = ${8 % 3} (3 * 3 + 2)`);

// const isEven = n => n % 2 === 0;

// console.log(`8 is even - ${isEven(8)}`);
// console.log(`23 is even - ${isEven(23)}`);
// console.log(`514 is even - ${isEven(514)}`);

//! ~~~~~~~~~~~ Working with BigInt ~~~~~~~~~~~~~~~~~~
// //?NOTE every number is created using 64 bits (64 1s and 0s), but only 53 of them are used for creating the actual number while the rest are used for decimal placement, etc.

// console.log(2 ** 53 - 1); // this is the largest number that can be acurately represented using integerts
// console.log(Number.MAX_SAFE_INTEGER);
// //* example (adding 2 do the equation above to get the max safe int)
// console.log(2 ** 53 + 1); //! ONLY ADDS 1 INT INSTEAD OF 2!

// //?NOTE BigInt was introduced in ES2020 and allows us to create integers as large as we want

// console.log(7198263479126371628737891723897123n);//adding 'n' transforms regular int into a BigInt
// console.log(BigInt(7198263479126371628737891723897123));
// //? the BigInt constructor should only be instantiated with smaller numbers still (the above two examples will be different still)
// console.log(BigInt(719826347));

// //* Operations
// console.log(10000n + 10000n); //still the same
// console.log(128037891273981273981273981723123n * 1000000n);

// const huge = 18273981273981723987189237n
// const num = 23
// //console.log(huge * num); //! this will throw an error (cannot use BigInts and regular ints in the same expression)
// //?NOTE this is where the BigInt constructor somes in handy
// console.log(huge * BigInt(num));

// //Exceptions (logical operators)
// console.log(20n > 15); //true
// console.log(20n === 20); //false (=== will not do type coercion)
// console.log(typeof 20n); //bigint
// console.log(20n == 20); //true

// //Exceptions (string concatonations)
// console.log(huge + ' is REALLY big!!!');

// //Divisions
// console.log(10n / 3n); //returns closest bigint
// console.log(10 / 3);

//! ~~~~~~~~~~~~~~~~~~~ Creating Dates ~~~~~~~~~~~~~~~~~~~~~


// //* Creating Dates ( 3 methods)

// //*1) instantiate new date object
// const now = new Date();
// console.log(now);

// //*2) Pass in a date string (or number series)
// console.log(new Date('Jul 29 2021 19:38:32'));
// console.log(new Date('December 25, 2015'));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 10, 19, 15, 23, 5));
// //?NOTE MONTHS ARE 0 BASED (November = 10)
// console.log(new Date(2037, 10, 31)); // auto-corrects to dec 1 (nov 31 is not real)
// //?NOTE Beginning of Unix time is Jan 1, 1970
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

//*3) Working with Dates
const future = new Date(2037, 10, 15, 15, 23);
console.log(future);
console.log(future.getFullYear()); //! dont use getYear
console.log(future.getMonth()); //month is zero based (10)
console.log(future.getDate()); // day
console.log(future.getDay()); // day of week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // returns a string in simplified extended ISO format
console.log(future.getTime()); //number of time since Unix Epoch

console.log(Date.now()); //gives current timestamp

future.setFullYear(2040); //changes year for date
console.log(future);