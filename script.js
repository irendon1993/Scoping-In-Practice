'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 <= 1966) {
      var millenial = true;
      // Creating new varirable with same name
      const firstName = 'Steven';

      // Reassinging outer scope's variable
      output = 'NEW OUTPUT';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Isaac';
calcAge(1993);
