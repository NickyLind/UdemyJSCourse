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

//! ~~~~~Regular Functions VS. Arrow Functions~~~~~~~~~

// var firstName = 'Matilda';

// const nick = {
//   firstName: 'Nick',
//   year: 1990,
//   calcAge: function () {
//     console.log(this);
//     console.log(2020 - this.year);
//   },
// greet: () => console.log(`Hey ${this.firstName}`),
//? arrow function doesn't get a 'this' keyword so it uses the parent's 'this' keyword (which is the window Object). Window.greet isn't a method so it returns 'undefined'
// };
// nick.greet();

//!NOTE Why you should never use an Arrow Function as a method:
//!NOTE if we add 'var firstName = 'Matilda';' up above, remember that 'var' creates a variable INSIDE the window Object, so our arrow function will therefore have a firstName property and the greet method will return the firstName 'Matilda' for the 'Nick' Object because the arrow function will return the 'this' of the parent Object (window). THIS IS BAD

// var firstName = 'Matilda';
//* PRE ES6 SOLUTION TO CALLING FUNCTIONS IN METHODS
// const nick = {
//   firstName: 'Nick',
//   year: 1990,
//   calcAge: function () {
//     console.log(this);
//     console.log(2020 - this.year);
//     const self = this;
//     const isMillenial = function () {
//console.log(self); //typically called 'self' or 'that'
// console.log(this.year >= 1981 && this.year <= 1996);
//? this returns undefined because the 'this' keyword in a regular function returns undefined, therefore we must create a 'self' variable and set it equal to 'this' outside of the scope of the function so we can then use 'self' in place of 'this' to reference the object
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     isMillenial();
//   },
// };
// nick.calcAge();

//* POST ES6 VERSION OF CALLING FUNCTIONS IN METHODS (ARROW FUNCTION)

// const nick = {
//   firstName: 'Nick',
//   year: 1990,
//   calcAge: function () {
//     const isMillenial = () => {
//? simply changing the function from a declarative function to an arrow function works because arrow functions don't have 'this' so they would 'inherit' the 'this' from it's parent's scope
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
// };
// nick.calcAge();

//* INFO ABOUT THE ARGUMENTS KEYWORD FOR FUNCTIONS

// const addExpression = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpression(2, 5);
// addExpression(2, 5, 8, 12);
//? These extra arguments can be accessed via the arguments keyword in a function expression (above) or Declarative Function

// var arrowExpression = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
//? An arrow function DOES NOT have access to the arguments keyword

//! ~~~~~~ PRIMITIVES VS OBJECTS (Primitives vs. Reference Types) ~~~~~~~~~~~~~~

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Nick',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me: ', me);
