'use strict';

//! ~~~~~~~~~ What is Object-Orientated Programming ~~~~~~~~

//?NOTE ABSTRACTION: ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation

//?NOTE ENCAPSULATION: Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API)

//?NOTE INHERITANCE: Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to resuse common logic and to model real-world relationships

//?NOTE POLYMORPHISM: A child class can overwrite a method it inherited from a parent class [it's more complex than that, but enough for our purposes]

//! ~~~~~~~~~~~~~~~ OOP In JavaScript ~~~~~~~~~~~~~~~~~~~~

//NOTE 3 WAYS OF IMPLMENTING PROTOTYPAL INHERITANCE IN JS

// Constructor FUnctions
//? Technique to create objects from a function;
//? This is ho wbuilt-in objects like Arrays, Maps, or Sets are actually implemented

// ES6 Classes
//? Modern alternative to constructor function syntax;
//? "Syntactic sugar", behind the scenes, ES6 classes work exactly like contructor functions;
//? ES6 classes do NOT behave like classes in "classical oop"

//Object.create()
//? The easiest and most straightforward way of linking an object to a prototype object

//! ~~~~~~ Constructor Functions and the new Operator ~~~~~

// //?NOTE arrow functions do not work as function declarations because it has no this keyword
// const Person  = function(firstName, birthYear) {
//   //* Instance Properties
//   this.firstName = firstName,
//   this.birthYear = birthYear,

//   //! never create methods in constructor functions (below)
//   this.calcAge = function() {
//     console.log(2021- this.birthYear);
//   }
// };

// const jonas = new Person('Jonas', 1991);

// //* 1. New {} is created
// //* 2. function is called. 'this' = {}
// //* 3. {} linked to prototype
// //* 4. function automatically return {} 
// //? 1. a New empty object is created 
// //? 2. the function is called, and the 'this' keyword is assigned to the empty object ({})
// //? 3. the parameters passed into the function are set to properties inside the empty object  using 'this'
// //? 4. the function will then, automatically return the object

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(jonas, matilda, jack);

// const jay = 'Jay';

// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

