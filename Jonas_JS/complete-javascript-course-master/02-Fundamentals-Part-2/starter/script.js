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
// 36

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
// 37

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = (birthyear, firstName) => {
//   const age = calcAge(birthyear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// ----------
// 38

// --- mine ---
// const average1Dolphins = (44 + 23 + 71) / 3;
// const average1Koalas = (65 + 54 + 49) / 3;

// const average2Dolphins = (85 + 54 + 41) / 3;
// const average2Koalas = (23 + 34 + 27) / 3;

// const calcAverage = (dolpins, koalas) => {
//   if (average1Dolphins > average1Koalas) {
//     console.log(`Koalas win (${koalas} vs ${dolpins})`);
//   } else if (average1Koalas > average1Dolphins) {
//     console.log(`Dolphins win (${dolpins} vs ${koalas})`);
//   } else if (average2Dolphins > average2Koalas) {
//     console.log(`Koalas win (${koalas} vs ${dolpins})`);
//   } else {
//     console.log(`Dolphins win (${dolpins} vs ${koalas})`);
//   }
// };

// calcAverage(average1Dolphins, average1Koalas);
// calcAverage(average2Dolphins, average2Koalas);

// const checkWinner = () => {
//   const dolphins = average1Dolphins + average2Dolphins;
//   const koalas = average1Koalas + average2Koalas;
//   if (dolphins > koalas) {
//     console.log("Dolphins win!");
//   } else {
//     console.log("Koalas win!");
//   }
// };
// checkWinner();

// --- Jonas' ---
const calcAverage = (a, b, c) => (a + b + c) / 3;

// test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win! (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win! (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// ----------
// 39
