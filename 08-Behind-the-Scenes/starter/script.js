'use strict';

//! ~~~~~~~~~~~~~Scoping in practice~~~~~~~~~~~~~

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       // this block is going to grab the 'firstName' variable that is defined in it's own scope, not the one up the scope chain
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     // var allows variables to used in the nearest scope
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Nick';
// calcAge(1990);

//! ~~~~~~~~~~Hoisting &  TDZ in practice~~~~~~~~~~~~~~~
//* ~~~variables~~~
// console.log(me);
//? variables declared with var are hoisted to the value of 'undefined'
// console.log(job);
//? error telling us that job cannot be accessed before initialization (job is in a TDZ at this point)
// console.log(year);
//? this error is the same as the 'job' variable

// var me = 'Nick';
// let job = 'Student';
// const year = 1990;

//* ~~~functions~~~

// console.log(addDeclaration(2, 3));
//? the function declaration can be called before it is defined in the code
// console.log(addExpression(2, 3));
//? this function is declared with a const so it is hoisted the same way a const variable is (cannot be accessed before initialzation)
// console.log(addArrow(2, 3));
//? this arrow function is the same scenario as above
// console.log(subtractArrow(2, 3));
//? since var variables are hoisted as undefined, when we try to call a function that is declared with var it tries to call something that is undefined and will return an error saying it isn't a function

// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;
// var subtractArrow = (a, b) => a - b;

//* Example of Hoisting Pitfall
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();
//? here because numProducts is not defined yet, which is a falsey value, this branching statement will execute.
//? this is a good example of why we should stay away from var

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;
//? if you type 'window' into the chrome dev tools it will display the browser window object. Declaring variables with var will show those variables inside the window object.

// console.log(x === window.x);
//? true
// console.log(y === window.y);
//? false
// console.log(z === window.z);
//? false
