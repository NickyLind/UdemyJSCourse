'use strict';

//!~~~~~~~~~~~~~~~ Default Parameters ~~~~~~~~~~~~~~~~

//* Pre-ES6 Method
// const bookings = [];

// const createBooking = function (flightNumber, numberOfPassengers, price) {
//   numberOfPassengers = numberOfPassengers || 1;
//? since undefined is a falsey value, if we enter nothing for this parameter, then it will default to 1
//   price = price || 199;
//   const booking = {
//     flightNumber,
//     numberOfPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');

//* Post-ES6 Method
// const bookings = [];

// const createBooking = function (
//   flightNumber,
//   numberOfPassengers = 1,
//   price = 199 * numberOfPassengers
//? You can use other parameters as long as they are defined before (can use numberOfPassangers in price because it comes before)
// ) {
//   const booking = {
//     flightNumber,
//     numberOfPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);
//? specifying undefined allows us to skip a default parameter we want to keep as it's default

//! ~~~~~~~~~~~~How Passing Agruments Works: Value Vs Referenece ~~~~~~~~~~~~~~~~~~~~~~~

// const flight = 'LH234';
// const nick = {
//   name: 'Nick Lindau',
//   passport: 16285367,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 16285367) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passpord!');
//   }
// };

// checkIn(flight, nick);
// console.log(flight);
// console.log(nick);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000) + 1;
// };

// newPassport(nick);
// checkIn(flight, nick);

//! ~~~~~~~~ Functions Accepting Callback Functions ~~~~~~~~~~

// const oneWord = function (str) {
//   return str.replace(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ')
//   return [first.toUpperCase(), ...others].join(' ')
// };

// Higher-Order Function
//? This function operates at a higher order of abstraction (it abstracts away the minor details to lower level functions)
// const transformer = function(str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by the ${fn.name} function`);
// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function() {
//   console.log("✋");
// }
// document.body.addEventListener('click', high5);

// ["Nick", "Martha", "Adam"].forEach(high5)

//! ~~~~~~~~~ Functions returning Functions ~~~~~~~~

//* Declarative Function Version
// const greet = function(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   }
// };

//* Arrow Function Version
// const greet = greeting => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   }
// };
//* OR
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHello = greet('Hello');
// greeterHello('Nick');
// greeterHello('Stef')

// greet('Yo')('Nick')

//! ~~~~~~~~~~ The Call and Apply Methods ~~~~~~~~~~~~~

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, name}) 
//   },
// };

// lufthansa.book(239, 'Nick Lindau');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

//* Call Method
//! does not work
// book(23, 'Sarah Williams'); 

// book.call(eurowings, 23, 'Sarah Williams');
//? The call method gives the 'this' keyword something to reference in it's first parameter
// console.log(eurowings);
// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: []
// }

// book.call(swiss, 583, 'Mary Cooper');

//* Apply Method - takes an array of the arguments instead of directly passing arguments

// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData)
//? this is the more modern way to handle this

//! ~~~~~~~~~~~~~~ The Bind Method ~~~~~~~~~~~~~~~~~~

// book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

//* With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//   console.log(this);

//   this.planes++
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//? using an event listeners points the 'this' keyword to the event target ('.buy'), so we have to bind it to the object we want to use

//* Partial Application

// const addTax = (rate, value) => {
//   return value + value * rate
// }

// console.log(addTax(.10, 200));

// const addVAT = addTax.bind(null, 0.23);
//? if we set the value of the 'this' keyword to null we can create a function that binds specific arguments to function parameters

// console.log(addVAT(100));
// console.log(addVAT(23));


//? Example doing the same thing with returning functions
// const addTaxRate = rate => {
//   return (value) => {
//     return value + value * rate
//   }
// }
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

//! ~~~~~~~~ CODING CHALLENGE #1 ~~~~~~~~~~~~~

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     //Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write Option Number)`
//         )
//     );
//         console.log(answer);
//     //Register answer
//     typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if(type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       //Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   }
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers: [5, 2, 3]}, 'string');
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');

// // BONUS TEST DATA 1: [5, 2, 3]
// // BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

//! ~~~~~~ Immediately Invoked Function Expressions (IVFE) ~~~~~~~~

// //* This can be used multiple times
// const runOnce = function() {
//   console.log('This will never run again');
// };
// runOnce();

// //* This will run immediately and can't really be called again 
// (function() {
//   console.log('This will never run again');
//   const isPrivate = 23;
//   //? This data is encapsulated or private so it cannot be accessed outside this function
// })();

// //* Arrow Function version
// (() => console.log('This will ALSO never run again'))();

// //* Using a block (more common today to hide/scope data)
// {
//   const isPrivate = 23;
//   //? This also can't be accessed outside this block because let and const are scoped to this block
// }

//! ~~~~~~~~~~~~~~~~~ Closures ~~~~~~~~~~~~~~~~~~~~~~
//?NOTE Any function always has access to the variable environment of the execution context in which the function was created

const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++
    console.log(`${passengerCount} passengers`);
    //? closures work because this inner return function stores the variable information, even though the secureBooking() EC(execution context) isn't on the call stack anymore
  }
};

const booker = secureBooking();

booker();
booker();
booker();
//?NOTE even if there was a global passengerCount variable, the function still checks the closure first before the global variable

console.dir(booker);
//?NOTE The method console.dir() displays an interactive list of the properties of the specified JavaScript object.
//? Here we can see the closure in the console