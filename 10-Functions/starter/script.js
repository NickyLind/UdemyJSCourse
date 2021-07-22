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

const oneWord = function (str) {
  return str.replace(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ')
  return [first.toUpperCase(), ...others].join(' ')
};

// Higher-Order Function
//? This function operates at a higher order of abstraction (it abstracts away the minor details to lower level functions)
const transformer = function(str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by the ${fn.name} function`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function() {
  console.log("✋");
}
document.body.addEventListener('click', high5);

["Nick", "Martha", "Adam"].forEach(high5)