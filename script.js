'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 <= 1966) {
//       var millenial = true;
//       // Creating new varirable with same name
//       const firstName = 'Steven';

//       // Reassinging outer scope's variable
//       output = 'NEW OUTPUT';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Isaac';
// // calcAge(1993);

// // Hoisiting with variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Isaac';
// let job = 'Student';
// const year = '1993';

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addEpr = function (a, b) {
//   return a + b;
// };

// // var addArrow = (a, b) => a + b;

// // // Example

// // if (!numProducts) deleteShoppingCart();

// // var numProducts = 10;

// // function deleteShoppingCart() {
// //   console.log('All products deleted');
// // }

// // var x = 1;
// // let y = 2;
// // const z = 3;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1993);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1993);

// const isaac = {
//   year: 1993,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// isaac.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = isaac.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();
// var firstName = 'Matilda';

// const isaac = {
//   firstName: 'Isaac',
//   year: 1993,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//       // console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// isaac.greet();
// isaac.calcAge();

// // Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   a + b;
// };

// addArrow(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Isaac',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
