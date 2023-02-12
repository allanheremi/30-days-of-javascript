/* ----------------- Start of level one ----------------- */
// 1.

var challange = "30 Days Of Javascript"

// 2.

console.log(challange);

// 3.

console.log(challange.length);


// 4. 

console.log(challange.toUpperCase());

// 5.

console.log(challange.toLowerCase());

// 6.

console.log(challange.substring(3, 7));

// 7.

console.log(challange.slice(3, 21));

// 8.

console.log(challange.includes("Script")); //False

// 9.

console.log(challange.split(""));

// 10.

console.log(challange.split(" "))

// 11.

var companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(","));


// 12.

console.log(challange.replace("Javascript", "Python"));

// 13.

console.log(challange.charAt(15)); // Answer = "s"

// 14.

console.log(challange.charCodeAt("J"));

// 15. 

console.log(challange.indexOf("a"));

// 16.

console.log(challange.lastIndexOf("a"));

// 17.

let myString = "'You cannot end a sentence with because because because is a conjunction'";
console.log(myString.indexOf("because"));

// 18. 

console.log(myString.lastIndexOf("because"));

// 19.

console.log(myString.search("because"));

// 20.

let whiteSpacedString = "   30 days of JS ";
console.log(whiteSpacedString.trim());

// 21. 

console.log(challange.startsWith("3"));

// 22. 

console.log(challange.endsWith("t"));

// 23. 
let regexFindLowerCaseA = /a/g;
console.log(challange.match(regexFindLowerCaseA))

// 24. 

let halfString = "30 Days of";
let secondHalfString = "Javascript"

console.log(halfString.concat(" " + secondHalfString))

// 25. 

console.log(challange.repeat(2)); 

/* ----------------- Level one complete! ----------------- */

/* ----------------- Start of level two ----------------- */

// 1. 

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2.

console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"")

// 3.

let numString = "10";
let numInt = 10;
console.log(parseInt(numString));

// 4.

let numFloat = "9.8";
let roundedNumFloat = Math.ceil(9.8);
console.log(roundedNumFloat === 10);

// 5.

console.log("python".includes("on"))
console.log("jargon".includes("on"))

// 6.

let sentence = "I hope this course is not full of jargon";
console.log(sentence.includes("on"));

// 7.

let min = 0;
let max = 100;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);


// 8.

let min2 = 50;
let max2 = 100;
let randomNum2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;

console.log(randomNum2);

// 9.

let min3 = 0;
let max3 = 255;
let randomNum3 = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;

console.log(randomNum3);


// 10. 
let js = "JavaScript"
let min4 = 0;
let max4 = 9;
let randomNum4 = Math.floor(Math.random() * (max4 - min4 + 1)) + min4;
let x = randomNum4;

console.log(js.charAt(x))

// 11.

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")


// 12. 

let stringAgain = "You cannot end a sentence with because because because is a conjunction"
console.log(stringAgain.substring(31, 54));

/* /* ----------------- Level two complete ----------------- */

// 1.

let countAbleLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi;
let matchPattern = countAbleLove.match(pattern);
let count = matchPattern ? matchPattern.length : 0;
console.log(count);

// 2.

let str = "You cannot end a sentence with because because because is a conjunction";
let pattern2 = /because/g;
let matches = str.match(pattern2);
let count2 = matches ? matches.length : 0;
console.log(count);


// 3.

// 4.

let monthly = 5000 * 12;
let AnnualBonus = 10000;
let onlineCourses = 15000;

console.log(monthly + AnnualBonus + onlineCourses);