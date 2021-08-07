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