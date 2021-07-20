'use strict';

// Scoping in practice

function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      // this block is going to grab the 'firstName' variable that is defined in it's own scope, not the one up the scope chain
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // var allows variables to used in the nearest scope
  }
  printAge();

  return age;
}

const firstName = 'Nick';
calcAge(1990);
