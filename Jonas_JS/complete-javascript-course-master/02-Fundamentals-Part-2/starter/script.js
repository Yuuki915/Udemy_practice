"use strict";

// let hasDriversLicense = false;
// let passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// Can't use those valiables
// const interface = "Audio";
// const private = 534;

// ----------

// function logger() {
//   console.log("My name is Jonas");
// }

// // caalling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   //   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// ----------

// // Function declaration
// function calcAge1(birthyear) {
//     return 2037 - birthyear;
// }
// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthyear) {
//     return 2037 - birthyear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// ----------

// const calcAge2 = function (birthyear) {
//   return 2037 - birthyear;
// };

// // Arrow function
// const calcAge3 = (birthyear) => 2037 - birthyear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstname) => {
//   const age = 2037 - birthyear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstname} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// ----------

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// ----------

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = calcAge(birthyear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
