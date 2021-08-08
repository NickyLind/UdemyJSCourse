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

//! ~~~~~~~~~~~~~~~~~~~~ Prototypes ~~~~~~~~~~~~~~~~~~~

// //?NOTE every function in JS has a property called 'Prototype'

// const Person  = function(firstName, birthYear) {
//   this.firstName = firstName,
//   this.birthYear = birthYear
// };

// const jonas = new Person('Jonas', 1991);
// console.log(Person.prototype);

// Person.prototype.calcAge = function() {
//   console.log(2021 - this.birthYear);
//   //? 'this' is set to the object calling the method
// };

// jonas.calcAge()
// //? every object has acceess to the methods and properties of its prototype

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); //true
// console.log(Person.prototype.isPrototypeOf(jonas)); //true

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species);
// console.log(jonas.hasOwnProperty('firstName')); //true
// console.log(jonas.hasOwnProperty('species')); //false
// //?NOTE species is not actually inside the jonas object, it simply has access to it because of it's a prototype property of Person

// //! ~~~~~~ Prototypal Inheritance on built in objects  ~~~~~~~

// console.log(jonas.__proto__); 
// console.log(jonas.__proto__.__proto__); 
// console.log(jonas.__proto__.__proto__.__proto__); 

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 3, 9]; // new Array === []
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function() {
//   return [...new Set(this)]
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// // console.dir(h1);
// console.dir(x => x + 1);

//! ~~~~~~~~~~~~~~~~ CODING CHALLENGE #1 ~~~~~~~~~~~~~~~~~~~

// /* 
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// const Car = function(make, speed) {
//   this.make = make,
//   this.speed = speed
// };

// Car.prototype.accelerate = function() {
//   this.speed += 10;
//   console.log(`The ${this.make} is going ${this.speed} km/h`); 
// };

// Car.prototype.brake = function() {
//   this.speed -= 5;
//   console.log(`The ${this.make} is going ${this.speed} km/h`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
// console.log('Car 1 : ', car1);
// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// car1.brake();
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
// console.log('Car 2 : ', car2);
// car2.accelerate();
// car2.accelerate();
// car2.brake();
// car2.brake();
// car2.brake();

//! ~~~~~~~~~~~~~~~~~~~~~ ES6 Classes ~~~~~~~~~~~~~~~~~~~~~~

// //* class expression
// // const PersonCl = class {

// // };
// //?NOTE behind the scenes classes are simply functions

// //* class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     //?NOTE must be called 'constructor'
//     this.firstName = firstName,
//     this.birthYear = birthYear
//   };
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   };
//   //?NOTE methods created outside the constructor will be added to the prototype of the object not the instance of the object itself
//   greet() {
//     console.log(` Hey ${this.firstName}`);
//   };
// };

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function() {
// //   console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();

// //* 1. Classes are NOT hoisted (we CANNOT use them before they are decalred in the code)
// //* 2. Classes are first-class citizens (we can pass them into functions and return them from functions)
// //* 3. Classes are executed in strict mode

//! ~~~~~~~~~~~~~~~~~ Setters & Getters ~~~~~~~~~~~~~~~~~~~~

// // //* ~~~~~~~~~~~~~~~~ From Mosh Video ~~~~~~~~~~~~~~
// // //?NOTE getters => access properties of an object
// // //?NOTE setters => change (mutate) properties of an object
// // const person = {
// //   firstName: "Mosh",
// //   lastName: "Hamedani",
// //   get fullName() {
// //     return `${person.firstName} ${person.lastName}`
// //     //?NOTE now we can access the fullname like a property vs a method (person.fullName VS person.fullName())
// //   },
// //   set fullName(value) {
// //     const parts = value.split(' ');
// //     this.firstName = parts[0];
// //     this.lastName = parts[1];
// //     //?NOTE now we can change this 'property' using the setter
// //   }
// // }

// // person.fullName = 'John Smith'
// // console.log(person);
// // //* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const account = {
//   owner: 'nick',
//   movements: [200, 530, 120, 300] ,

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   }

// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     //?NOTE must be called 'constructor'
//     this.fullName = fullName,
//     this.birthYear = birthYear
//   };
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   };

//   greet() {
//     console.log(` Hey ${this.firstName}`);
//   };

//   get age() {
//     return 2021 - this.birthYear
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) {
//       this._fullName = name
//     } else {
//       alert(`${name} is not a full name`)
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }
// };

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica.age); 
// console.log(jessica);

// const walter = new PersonCl('Walter White', 1965)
// console.log(walter);

//! ~~~~~~~~~~~~~~~~~ Static Methods ~~~~~~~~~~~~~~~~~~~~~~

// const Person = function(firstName, birthYear) {
//   this.firstName = firstName,
//   this.birthYear = birthYear
// } 

// const nick = new Person('Nick', 1990);
// console.log(nick);

// Person.hey = function() {
//   console.log('Hey There 🖖');
//   console.log(this);
// };

// Person.hey();
// //?NOTE this static method only works on the Person contructor itself just like how Number.parsefloat() works on the number constructor but not an actual number (can't to 14.parsefloat())

// class PersonCl {
//   constructor(fullName, birthYear) {
//     //?NOTE must be called 'constructor'
//     this.fullName = fullName,
//     this.birthYear = birthYear
//   };

//   //* Instance method
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   };

//   greet() {
//     console.log(` Hey ${this.firstName}`);
//   };

//   get age() {
//     return 2021 - this.birthYear
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) {
//       this._fullName = name
//     } else {
//       alert(`${name} is not a full name`)
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   //* static method
//   static hey() {
//     console.log('Hey There ✌');
//     // console.log(this);
//   }
// };

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica.age); 
// console.log(jessica);

// const walter = new PersonCl('Walter White', 1965)
// console.log(walter);

// PersonCl.hey();

//! ~~~~~~~~~~~~~~~~~~~ Object.create ~~~~~~~~~~~~~~~~~~~~

// //?NOTE Object.create manually set the prototype of an object to any other object we want

// const PersonProto = {
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

//! ~~~~~~~~~~~~~~~ CODING CHALLENGE #2 ~~~~~~~~~~~~~~~~

// /* 
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */


// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   };
//   accelerate() {
//     this.speed += 10;
//     console.log(`The ${this.make} is going ${this.speed} km/h`);
//   };
//   brake() {
//     this.speed -= 5;
//     console.log(`The ${this.make} is going ${this.speed} km/h`);
//   };
//   get speedUS() {
//     return console.log(`The ${this.make} is going ${this.speed / 1.6} mp/h`);
//   };
//   set speedUS(speed) {
//     this.speed = speed * 1.6
//   };
// }

// const car = new Car('Ford', 120)
// car.accelerate();
// car.brake();
// car.speedUS;
// car.accelerate();
// car.accelerate();
// car.speedUS;
// car.speedUS = 25;
// console.log(car);

//! ~~~ Inheritence Between 'Classes': Constructor Functions ~~

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// const Student = function(firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear)
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype)
// //?NOTE We set the prototype of the Student constructor function to a new object (Object.create) that is equal to the Person constructor function's prototype 
// //?(The constructor is simply the function we declare that will churn out new instances of that object) 
// //?(the prototype property is where all the methods attached to the contructor function object reside)
// // console.log(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2002, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

//! ~~~~~~~~~~~~~~~~ CODING CHALLENGE #3 ~~~~~~~~~~~~~~~~~~~

// /* 
// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀
// */

// const Car = function(make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function() {
//   this.speed += 10;
//   console.log(`The ${this.make} is going ${this.speed} km/h`)
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`The ${this.make} is going ${this.speed} km/h`)
// };

// const EV = function(make, speed, charge) {
//   Car.call(this, make, speed) 
//   this.charge = charge
// }; 

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo) {
//   this.charge = chargeTo;
//   console.log(`${this.charge}% battery`);
// };

// EV.prototype.accelerate = function() {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`${this.make} is going ${this.speed} km/h, with ${this.charge}% battery`);
// };

// const tesla = new EV ('Tesla', 120, 23);

// console.log(tesla);
// tesla.chargeBattery(50);
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();


//! ~~~~~~ Inheritance Between 'Classes': ES6 Classes ~~~~~~~~

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   };

//   calcAge() {
//     console.log(2021 - this.birthYear);
//   };

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   };

//   get age() {
//     return 2021 - this.birthYear
//   };

//   set fullName(name) {
//     if(name.includes(' ')) this._fullname = name;
//     else alert(`${name} is not a full name`)
//   };

//   get fullName() {
//     return this._fullname;
//   };

//   //* static method (on the PersonCl object itself not instances it creates)
//   static hey() {
//     console.log('Hey there 🤘');
//   };
// };

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     //?NOTE the 'super' function along with the extends keyword abstract away a lot of the code even though the same thing is still hapenning behind the scenes as using constructor functions
//     //?NOTE the 'super' function takes in the parameters that belong to the parent class and always needs to happen before anything else so it can connect the 'this' keyword in the child class
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(`I'm ${2021 - this.birthYear} years old, but as a student I feel more like ${2021 - this.birthYear + 10}`);
//   }
// };

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

//! ~~~~~~ Inheritance Between 'Classes': Object.create ~~~~~~~

const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear)
  this.course = course;
};

StudentProto.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto)
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();