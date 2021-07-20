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

//! ~~~~~~~~~The 'this' Keyword in practice~~~~~~~~~

// console.log(this);
//? will reference the window object in the browser

// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };
// calcAge(1990);
//? in strict mode we will return unndefined otherwise it would also return the window object

// const calcAge = birthYear => {
//   console.log(2021 - birthyear);
//   console.log(this);
// };
// calcAge(1990);
//? this will return the window because the object that holds the arrow function (lexical this) is the window object

// const nick = {
//   year: 1990,
//   calcAge: function () {
//     console.log(this);
//     console.log(2020 - this.year);
//   },
// };
// nick.calcAge();
//? this will return the Object that is calling the method (nick.calcAge() => nick is 'this')

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = nick.calcAge;
//? if we type matilda into the console we will see that calcAge will also be a property of matilda's this is called NOTE: 'Method Borrowing'
// matilda.calcAge();
//? we now see that this method will point to the Object (matilda)

// const f = nick.calcAge;
//? we can save the function in a variable like so
// f();
//? the 'this' keyword is now undefined because there is no object calling it
