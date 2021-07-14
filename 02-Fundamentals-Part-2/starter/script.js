'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log("I can drive 🚗");

// const interface = 'Audio';

// const private = 543;

//! ~~~~~~~~FUNCTIONS~~~~~~~~~~~

// const logger = () => {
//   console.log('My name is Jonas');
// }

// logger()

// const fruitProcessor = (apples, oranges) => {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples & ${oranges} oranges`
//   return juice;
// }

// const appleJuice = fruitProcessor(87, 99);
// console.log(appleJuice)
// // OR
// console.log(fruitProcessor(42, 200017));


//! ~~~~~~~~~~~~~~FUNCTION DELCARATION VS. EXPRESSIONS ~~~~~~~~
//! function delcaration
//*can be used before it's declared
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1990);
// console.log(age1);

//! function expression
//* essentially a function value stored in a variable
// const calAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }

// const age2 = calAge2(1990);
// console.log(age1, age2);

//! ~~~~~~~~~~~ ARROW FUNCTIONS ~~~~~~~~~~~~~

// const calcAge3 = birthYear => 2021 - birthYear
// const age3 = calcAge3(1990)
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2021 - birthYear;
//   const retirement = 65 - age;
//   return `${retirement} years until retirement for ${firstName}`;
// }

// console.log(yearsUntilRetirement(1990, "stef"));

//! ~~~~~~~~~~~FUNCTIONS CALLING OTHER FUNCTIONS~~~~~~~~~~~~~

// function cutFruitPieces(fruit) {
//   return fruit * 4
// }

// const fruitProcessor = (apples, oranges) => {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apple & ${orangePieces} orange pieces`
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//! ~~~~~~~~~~~~REVIEWING FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return `${retirement} years until retirement for ${firstName}`;
//   } else {
//     return `${firstName} is retired`
//   }
// }

// console.log(yearsUntilRetirement(1990, 'Anal Annie'));
// console.log(yearsUntilRetirement(1940, 'Pegging Paul'));


//! ~~~~~~~~~~~~~~~~~CODING CHALLENGE 1~~~~~~~~~~~~~~~~~~~
// back to the two gynamistics teams, the Dolphins and the Koalas! There is a new gynmastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team)
// a team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
// 1) Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2) Use the function to calculate the average for both teams
// 3) Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' & 'avgKoalas'), and then logs the winner to the conole, together with the victory points, according to the rule above. 
// 4) Use the 'checkWinner' function to determine the winner for both DATA1 and DATA2.

// TESTDATA1: Dolphins score 44, 23, & 71. Koalas score 65, 54, & 49
// TESTDATA2: Dolphins score 85, 54, & 41. Koalas score 23, 34, & 27

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3
// }

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins > avgKoalas * 2) {
//     return 'Dolphins Win 🎆!'
//   } else if (avgKoalas > avgDolphins * 2) {
//     return 'Kooalas Win! 🎇'
//   } else {
//     return 'Both Teams Suck! 🎊'
//   }
// }

// const test1Dolphins = calcAverage(44, 23, 71);
// const test1Koalas = calcAverage(65, 54, 49);
// const test2Dolphins = calcAverage(85, 54, 41);
// const test2Koalas = calcAverage(23, 34, 27);

// console.log("Test Data for Game 1: ");
// console.log(`Dolphin's average score ${test1Dolphins}`);
// console.log(`Koala's average score ${test1Koalas}`);
// console.log(' ');
// console.log("Test Data for Game 2: ");
// console.log(`Dolphin's average score ${test2Dolphins}`);
// console.log(`Koala's average score ${test2Koalas}`);
// console.log(' ');
// console.log(`Game result 1: ${checkWinner(test1Dolphins, test1Koalas)}`);
// console.log(`Game result 2: ${checkWinner(test2Dolphins, test2Koalas)}`);

//! ~~~~~~~~~~~~~~~~~~~~ARRAYS~~~~~~~~~~~~~~~~~~~~~~~~

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// friends[2] = "Jay"
//? only primitive values are immutable (arrays are not primitive) 

// const yearsTest = new Array(1990, 1984, 2009, 2020)

// const backwardsFriends = [];
// friends.forEach(index => {
//   backwardsFriends.unshift(index)
// });

// console.log(backwardsFriends);
// console.log(friends[friends.length - 1]);

// const nick = ['Nick', 'Lindau', 2020 - 1990, 'bartender', friends];
// console.log(nick);

// const calcAge = function (birthYear) {
//   return 2020 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018]
// const calculatedAge = [];

// years.forEach(index => {
//   calculatedAge.push(calcAge(index))
// });
// console.log(`Birth Years: ${years}`);
// console.log(`Calculated Age: ${calculatedAge}`);

//! ~~~~~~~~~~~~~~~~~~~~~~~~Basic Array Operations (Methods)~~~~~~~~~~~~~~~~~~~

// const friends = ["Michael", "Steven", "Peter"];
// friends.push("Mr. PoopyButthole");
//? pushes data to the end of array
// console.log(friends);

// friends.unshift('Mr. Poopy Butthole');
//? adds data to the beginning of an array
// console.log(friends);

// friends.pop();
//? remove last item in an array
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
//? remove first item in an array
// console.log(friends);

// console.log(friends.indexOf('Steven'));
//? indexOf tells at what index the data is in the array
// 
// console.log(friends.includes('Steven'));
//? includes will check the array to see if it includes the passed in argument(returns boolean)

// if (friends.includes('Peter')) {
//   console.log('Peter is in the array');
// } else {
//   console.log('Peter is not in the array');
// }

//! ~~~~~~~~~~~~~~~~~CODING CHALLENEGE 2~~~~~~~~~~~~~~~~~~~~~~~
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%

// 1) Write a function 'calcTip' that takes anby bill value as an input and return the corresponding tip calculated based on the rules above ( you can check the code from the first tip calculator challenge if you need to). Use the function type you like most. Test the function using a bill value of 100.
// 2) And now let's use arrays! So create an array 'bills' containing the test data below.
// 3) Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4) BONUS: Create an array 'total' containing the total values, so the bill + tip.
// TEST DATA: 125, 555, & 44

// const calcTipPlusTotal = (billValue) => {
//   if (billValue > 50 && billValue < 300) {
//     return billValue + (billValue * 0.15)
//   } else {
//     return billValue + (billValue * 0.2)
//   }
// }

// const calcTip = (billValue) => {
//   if (billValue > 50 && billValue < 300) {
//     return billValue * 0.15
//   } else {
//     return billValue * 0.2
//   }
// }

// console.log(calcTipPlusTotal(100));

// const bills = [125, 555, 44];
// const tips = [];
// const total = [];

// console.log(bills);

// bills.forEach(index => {
//   tips.push(calcTip(index))
// });
// console.log(tips);

// bills.forEach(index => {
//   total.push(calcTipPlusTotal(index));
// });
// console.log(total);

//! ~~~~~~~~~~~~~~~~~~~~~~~INTRODUCTION TO OBJECTS~~~~~~~~~~~~~~~~~~~~~~
// const Nick = [
//   'Nick',
//   'Lindau',
//   2020 - 1990,
//   'bartender',
//   ['Michael', 'Wayne', 'Mr. PoopyButthole']
// ]

// const Nick = {
//   firstName: "Nick",
//   lastName: "Lindau",
//   age: 2020 - 1990,
//   job: "bartender",
//   friends: ["Michael", "Wayne", "Mr. PoopyButthole"]
// }
//? Keys in the Key-Value pairs are also called Properties

//! ~~~~~~~~~~~~~~~DOT VS. BRACKET NOTATION~~~~~~~~~~~~~~~~~~~

// const Nick = {
//   firstName: "Nick",
//   lastName: "Lindau",
//   age: 2020 - 1990,
//   job: "bartender",
//   friends: ["Michael", "Wayne", "Mr. PoopyButthole"]
// }
// Nick.location = "Vancouver, WA";
// Nick.weinerLength = "8ft";

// console.log(Nick);
// console.log(Nick.lastName);
// console.log(Nick["lastName"]);

// const nameKey = 'Name';
// console.log(Nick["first" + nameKey]);
// console.log(Nick["last" + nameKey]);

// const interestedIn = prompt('What do you want to know about Nick? Choost between First Name, Last Name, Age, Job, and Friends')

// if (Nick[interestedIn]) {
//   console.log(Nick[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

// var friend = Object.keys(Nick);

// Challenge 
// ~Nick~ has ~3~ ~friends~, and his best ~friend - s~ is called ~Micahel~
// console.log(`${Nick.firstName} has ${Nick.friends.length} ${friend[4]} and his best friend is called ${Nick.friends[0]}`);

// console.log(Object.keys(Nick));

//! ~~~~~~~~~~~~~~~~~~~~ 44) OBJECT METHODS ~~~~~~~~~~~~~~~~~~~~~~

// const Nick = {
//   firstName: "Nick",
//   lastName: "Lindau",
//   birthYear: 1990,
//   job: "bartender",
//   friends: ["Michael", "Wayne", "Mr. PoopyButthole"],
//   hasDriversLicense: true,
// calcAge: function () {
//   return 2020 - this.birthYear
// }
//? any function attached to an object is called a method( the example above is a function expression)
//   calcAge: function () {
//     this.age = 2020 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${Nick.hasDriversLicense ? "a" : "no"} driver's license`
//   }
// };

// console.log(Nick.calcAge());
// console.log(Nick["calcAge"](Nick.birthYear));
// console.log(Nick.age);

// Challenge
// "Nick is a 30-year old bartender. and he has a driver's license"
// console.log(Nick.getSummary());
//? An array is essentially an object that has specific built in methods through JavaScript (push, pop, etc)

//! ~~~~~~~~~~~~~~~ CODING CHALLENGE #3 ~~~~~~~~~~~~~~~~~~~

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return this.BMI = (this.mass / (this.height * 2)).toFixed(2);
//   }
// }

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return this.BMI = (this.mass / (this.height * 2)).toFixed(2);
//   }
// }

// const logHigherBMI = (mark, john) => {
//   if (mark.calcBMI() > john.calcBMI()) {
//     return `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`
//   } else {
//     return `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`
//   }
// }

// console.log(logHigherBMI(mark, john));

//! ~~~~~~~~~~~~~ 46) Iteration: the For Loop ~~~~~~~~~~~~

// console.log('Lifting weights repetition 1 🏋️‍♂️🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♂️🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♂️🏋️‍♀️');

// for (let rep = 1; rep <= 10; rep++) {
//   console.log('bench press rep x' + rep);
// }

//! ~~~~~~~~~~~~~~~~~ 47) Looping Arrays, Breaking, and Continuing ~~~~~~~~~~

// const Nick = [
//   'Nick',
//   'Lindau',
//   2020 - 1990,
//   'bartender',
//   ['Michael', 'Wayne', 'Mr. PoopyButthole']
// ]

// const Tiddies = [
//   8, 0, 0, 8, 5
// ]

// const lesson = [
//   "Some of", "these lessons", "are", "so", "fucking boring"
// ]

// const forLoopArrayItems = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

// forLoopArrayItems(Nick);
// forLoopArrayItems(Tiddies);
// forLoopArrayItems(lesson);

// const forEachLoopArrayItems = (array) => {
//   array.forEach(index => {
//     console.log(index);
//   })
// }

// forEachLoopArrayItems(Nick);
// forEachLoopArrayItems(Tiddies);
// forEachLoopArrayItems(lesson);

// * continue and break
// console.log('----ONLY STRINGS-----');
// for (let i = 0; i < Nick.length; i++) {
//   if (typeof Nick[i] !== 'string') continue;
//   console.log(Nick[i], typeof (Nick[i]));
// }


// console.log('----BREAK WITH NUMBER-----');
// for (let i = 0; i < Nick.length; i++) {
//   if (typeof Nick[i] === 'number') break;
//   console.log(Nick[i], typeof (Nick[i]));
// }

//! ~~~~~~~~~~~~~~~ 48) Looping Backwards and Loops in Loops ~~~~~~~~~~~

// const Nick = [
//   'Nick',
//   'Lindau',
//   2020 - 1990,
//   'Bartender',
//   ["Michael", "Stef", "Wayne"]
// ]

// const flipArrayForEach = (array) => {
//   let newArray = [];
//   array.forEach(element => {
//     newArray.unshift(element)
//   });
//   console.log(newArray);
// }

// flipArrayForEach(Nick);

//* OR

// const flipArrayFor = array => {
//   let newArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     newArray.push(array[i])
//   };
//   console.log(newArray);
// }

// flipArrayFor(Nick);

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`~~~~~~~~~ Starting excercise ${exercise}`);
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise}: Rep ${rep}`);
//   }
// }