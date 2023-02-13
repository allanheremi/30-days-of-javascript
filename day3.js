/* ----------------- Start of level one ----------------- */

// 1.

var firstName = "Allan"
var lastName = "Heremi"
var country = "Sweden"
var city = "Västerås"
var age = 26
var isMarried = false
var year = 2023 

console.log(typeof(year))

// 2.

let numberTen = "10"

console.log(numberTen === 10); // False

// 3.

let parseNinePointEight = parseInt(9.8);
console.log(parseNinePointEight === 10);

// 4.

let truthyValue1 = "True"
let truthyValue2 = true;
let truthyValue3 = 10 === 10;

console.log(Boolean(truthyValue1), truthyValue2, truthyValue3);

let falsyValue1 = "";
let falsyValue2 = 0;
let falsyValue3 = false;

console.log(Boolean(falsyValue1), Boolean(falsyValue2), falsyValue3)

// 5.

/*
4 > 3 // true
4 >= 3 // true
4 < 3 // true
4 <= 3 // true
4 == 4 // true
4 === 4 // true
4 != 4 // false
4 !== 4 // false
4 != '4' // false
4 == '4' // true
4 === '4' // false
Find the length of python and jargon and make a falsy comparison statement. // solution below this comment
*/ 

var python = "python"
var jargon = "jargon"

console.log(python.length) // 6
console.log(jargon.length) // 6

let falseBoolean = jargon.length + python.length == 7;
console.log(falseBoolean)

// 6.

/*
4 > 3 && 10 < 12 // true
4 > 3 && 10 > 12 // false
4 > 3 || 10 < 12 // true
4 > 3 || 10 > 12 // true
!(4 > 3) // false
!(4 < 3) // true
!(false) // true
!(4 > 3 && 10 < 12) // false
!(4 > 3 && 10 > 12) // faöse
!(4 === '4') // true
There is no 'on' in both dragon and python // false
*/

// 7.

var timeTracker = new Date();
console.log(timeTracker.getFullYear());
console.log(timeTracker.getMonth());
console.log(timeTracker.getDate());
console.log(timeTracker.getDay());
console.log(timeTracker.getHours());
console.log(timeTracker.getMinutes());
console.log(timeTracker.getTime());

/* ----------------- End of level one ----------------- */

/* ----------------- Start of level two ----------------- */

// 1.

function triangleCalculatorTimes(b, h) {

    return b * 0.5 * h;
}

console.log(triangleCalculatorTimes(20, 10))

// 2.

function triangleCalculatorAddition(a, b, c) {
    return a+b+c;
}

console.log(triangleCalculatorAddition(5, 4, 3));

// 3.

function rectangleCalculator(a, b) {
let area = a * b
let perimeter = 2 * (a + b);
console.log(perimeter + " This is the perimeter")
console.log(area + " This is the area")
return;
}

// 10.

function nameChecker(name) {
    if (name.length > 7) {
        return "Your name is long"
    } else {
        return "Your name is short"
    }
} 

console.log(nameChecker("Allan"))

// 11.

function nameComparer(firstName, lastName) {
    if(firstName.length > lastName.length) {
        return "Your first name, " + firstName + " is longer than your family name, " + lastName;
    } else {
        return "Your first name, " + firstName + " is shorter than your family name, " + lastName;
    }
}

console.log(nameComparer("Allan", "Heremi" ))

// 12.

let myAge = 250
let yourAge = 25

console.log("I am " + (myAge - yourAge) + " years older than you");