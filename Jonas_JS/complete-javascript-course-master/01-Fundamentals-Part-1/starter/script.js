/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Corder";
let myCurrentJob = "Teature";

let job1 = "programmer";
let job2 = "teature";

console.log(myFirstJob);

true;
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var job = "programmer";
// job = "teature";

// lastName = "Schmedtmann";
// console.log(lastName);

// //Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 2018);

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// ----------

// cording challenge #2

// test 2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// test 1
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// ----------

// const firstName = "Jonas";
// const job = "teature";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log("String with \n\
// multipule \n\
// lines");

// console.log(`String
// multipule
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// ----------

// cording challenge #2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// ----------

// // type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1;   // '11'
// n = n - 1;
// console.log(n);

// ----------

//  falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// ----------

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// const favorite = Number(prompt("What's yout favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   // '23' == 23
//   console.log("Cool! 23 is an amazig number!");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number");
// } else if (favorite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favorite !== 23) console.log("Why not 23?");

// ----------

// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = false; // C
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (shouldDrive && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// ----------

// cording challenge
// const dolphins = (96 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) / 3;

// const dolphins1 = (97 + 112 + 101) / 3;
// const koalas1 = (109 + 95 + 123) / 3;

// const dolphins2 = (97 + 112 + 101) / 3;
// const koalas2 = (109 + 95 + 106) / 3;

// console.log("1: " + dolphins, koalas);
// console.log("2: " + dolphins1, koalas1);
// console.log("3: " + dolphins2, koalas2);

// if ((dolphins > koalas && dolphins > 100) || koalas > 100) {
//   console.log("Dolphins team won!");
// } else if ((dolphins < koalas && dolphins > 100) || koalas > 100) {
//   console.log("Koalas team won!");
// } else {
//   console.log("Both are faild");
// }

// if ((dolphins1 > koalas1 && dolphins1 > 100) || koalas1 > 100) {
//   console.log("Dolphins team won!");
// } else if ((dolphins1 < koalas1 && dolphins1 > 100) || koalas1 > 100) {
//   console.log("Koalas team won!");
// } else {
//   console.log("Both are faild");
// }

// if ((dolphins2 === koalas2 && dolphins1 > 100) || koalas1 > 100) {
//   console.log("Even!");
// } else if ((dolphins2 > koalas2 && dolphins2 > 100) || koalas2 > 100) {
//   console.log("Dolphins team won!");
// } else if ((dolphins2 < koalas2 && dolphins2 > 100) || koalas2 > 100) {
//   console.log("Koalas team won!");
// } else {
//   console.log("Both are faild");
// }

// ----------

// const day = "wednesday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a vaild day!");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === friday) {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a vaild day!");
// }

// ----------

// if (23 > 10) {
//   const str = "23 is bigger";
// }

// const me = "Jonas";
// console.log(`I'm ${2037 - 1991} years old ${me}`);

// ----------

// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

//     // ↑↓ same thing ↑↓

// if (age > 18) {
//   console.log("I like to drink wine");
// } else {
//   console.log("I like to drink water");
// }

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// ----------

let bill1 = 275;
let bill2 = 40;
let bill3 = 430;
let tip;
/* const tip = bill1 <= 300 && bill1 >= 50 ? bill1 * 0.15 : bill1 * 0.2;
    これでもよき！*/

if (bill1 >= 50 && bill1 <= 300) {
  tip = bill1 * 0.15;
} else {
  tip = bill1 * 0.2;
}

// if (bill2 >= 50 && bill2 <= 300) {
//   tip = bill2 * 0.15;
// } else {
//   tip = bill2 * 0.2;
// }

// if (bill3 >= 50 && bill3 <= 300) {
//   tip = bill3 * 0.15;
// } else {
//   tip = bill3 * 0.2;
// }

console.log(
  `The bill was ${bill1}, the tip was ${tip} and total value is ${bill1 + tip}`
);
// console.log(
//   `The bill was ${bill2}, the tip was ${tip} and total value is ${bill2 + tip}`
// );
// console.log(
//   `The bill was ${bill3}, the tip was ${tip} and total value is ${bill3 + tip}`
// );

// ----------
