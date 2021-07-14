// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// javascriptIsFun = "YES!~"
// console.log(typeof javascriptIsFun);

// let age = 30;
// age = 31;

// const birthYear = 1991;

// const job;

// var job = "programmer";
// job = "teacher";
// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schmedmann";
// const space = " ";
// console.log(firstName + space + lastName);

// // assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// // comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018)

// let x, y;
// subtraction has a higher operator precedence and goes left-to-right
// then assignment operator is done right-to-left
// x = y = 25 - 10 - 5;
// console.log(x, y);
// division operator takes precedence over addition so we need
// to use grouping which has the highest precedence to ensure
// the calculation to find the average age is correct
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah);
// LECTURE: Values and Variables
// console.log(myFirstJob);
// let country = "USA";
// let continent = "North America";
// let population = 300000000;
// console.log(country);
// console.log(continent);
// console.log(population);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;
// const jonas = `"I'm ${firstName}, a ${year - birthYear} year old ${job}"`;
// console.log(jonas);
// console.log(`just a regular string`);
// console.log('string with \n\ multiple \n\ lines')
// console.log(`string with
// multiple
// lines`);

// const age = 15;
// if/else control structure
// if (age >= 18) {
//   console.log('Sarah can start driving lessons🙌')
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. wait another ${yearsLeft} years.👩‍⚖️`)
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// type Conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type Coercion
// console.log("I am " + 23 + " years old.") // The addition coerces this whole phrase to a string
// console.log("23" - "10" - 3); // minus coerces this into numbers
// console.log("23" * "2") // * || / coerces this into a number
// console.log("23" > " 18"); // coerces this to a number

// let n = "1" + 1; // concats these into string 11
// n = n - 1; // coerces the 11 string into a number
// console.log(n); //10

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should suck some dick for $🍆")
// }

// let height;
// if (height) {
//   console.log("YAY, height is defined");
// } else {
//   console.log("Height is undefined");
// }

// const age = "18";
// if (age === 18) {
//   console.log("wow you can be in porn");
// }

// if (age == 18) {
//   console.log("wow you can be in porn (loose)");
// }

// const favorite = Number(prompt("What's your favorite number?"));

// if (favorite === 23) {
//   console.log("that number is fucking stupid");
// } else if (favorite === 7) {
//   console.log(`${favorite} is fucking dumb`)
// } else if (favorite === NaN) {
//   console.log(` lmao he said ${favorite}`);
// } else {
//   console.log("that number is hella stupid also")
// }
// console.log(favorite)

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("user can drive");
// } else {
//   console.log("someone else needs to drive");
// }

// const isTired = false;

// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("User can drive");
// } else {
//   console.log("user cant drive");
// }

// const day = "tuesday";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend");
//     break;
//   default:
//     console.log("not a valid day");
// }

// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("enjoy the weekend");
// } else {
//   console.log("not a valid day");
// }

const age = 17;
age >= 18 ? console.log("I like to drink wine 🍗") :
  console.log("I like to drink wwater 🍗")

const drink = age >= 18 ? "wine" : "water"
console.log(drink)

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// LECTURE: Data Types
// const isIsland = false;
// let language;
// console.log(isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// LECTURE: let, const, and var
// language = "English";

// LECTURE: Basic Operators
// const halfPopulation = population / 2;
// const populationFinland = 6000000;
// const populationAverage = 33000000;
// const description = country + " is in " + continent + ", and it's " + population + 
// " people speak " + language;
// console.log(population + 1);
// console.log(population > populationFinland);
// console.log(population < populationAverage);
// console.log(description);

// Coding Challenge #1
// BMI = mass / height ** 2 = mass / (height * height) ( mass in kg and height in meters)
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// markBMI = massMark / heightMark ** 2;
// johnBMI = massJohn / heightJohn ** 2;
// const markHigherBMI = markBMI > johnBMI;


// LECTURE: Strings and Template Literals
// const description = `${country} is in ${continent}, and it's ${population} people speak ${language}.`

// Coding Challenge #2
// if (markBMI >= johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`)
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`)
// }

// LECTURE: Type Conversion and Cohersion
// "9" - "5"; = 4
// "19" - "13" + "17"= 617
// "19" - "13" + 17 = 23
// "123" < 57 = false
// 5 + 6 + "4" + 9 - 4 - 2 = 117

// LECTURE: Equality Operators: == vs. ===
// let numNeighbors = Number(prompt("How many neighbor countries does your country have?"));
// if (numNeighbors === 1) {
//   console.log("only 1 border??");
// } else if (numNeighbors > 1) {
//   console.log("how so many neighbors bruh");
// } else {
//   console.log("no borders?");
// }

// LECTURE: Logical Operators:
// if ((language === "English") && (population < 50000000) && (isIsland === false)) {
//   console.log(`${country} fits Sarah's criteria`)
// } else {
//   console.log(`${country} does not fit Sarah's criteria`)
// }

// // Coding Challenge #3
// // const averageScoreDolphins = ((96 + 108 + 89) / 3);
// // const averageScoreDolphins = ((97 + 112 + 101) / 3);
// const averageScoreDolphins = ((97 + 112 + 101) / 3);
// // const averageScoreKoalas = ((88 + 91 + 110) / 3);
// // const averageScoreKoalas = ((109 + 95 + 123) / 3);
// const averageScoreKoalas = ((109 + 95 + 106) / 3);
// const minimumScore = 100;
// if ((averageScoreDolphins >= minimumScore) && averageScoreDolphins > averageScoreKoalas) {
//   console.log("The Dolphins Win!");
// } else if ((averageScoreKoalas >= minimumScore) && averageScoreKoalas > averageScoreDolphins) {
//   console.log("The Koalas Win!");
// } else if ((averageScoreKoalas >= minimumScore) && (averageScoreDolphins >= minimumScore) && (averageScoreDolphins === averageScoreKoalas)) {
//   console.log("The Dolphins and Koalas Tied!")
// } else {
//   console.log("There is no winner!")
// }

// LECTURE: The Switch Statement
// const language = "chinese"
// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too 🍆")
// }

// LECTURE: The Conditional (Ternary) Operator