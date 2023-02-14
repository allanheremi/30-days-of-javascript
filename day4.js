/* ----------------- Start of level one ----------------- */

// 1. (cannot use prompt in VSC)

let userInput = 11;

function checkUserAge(userInput) {
    if(userInput >= 18) {
        return `You are old enough to drive because you are ${userInput} years old, which is equal to or more than 18 years old`;
    } else {
        return `You are not old enough to drive because you are ${userInput} years old, you will be allowed to drive in ` + (18-userInput) + " years";
    }
}

console.log(checkUserAge(userInput));

// 2. cannot use prompt in VSC

let inputtedAge = 26;

function whoIsOlder(inputtedAge) {
    if(inputtedAge > 26) {
        return `You are ${inputtedAge} years old, that is ` + (inputtedAge - 26) + " years older than me.";
    } else if(inputtedAge < 26) {
        return `You are ${inputtedAge} years old, that is ` + (26 - inputtedAge) + " years younger than me.";
    } else {
        return `We both are ${inputtedAge} years old.`
    }
}

console.log(whoIsOlder(inputtedAge))

// 3.

let a = 4
let b = 4

function whichIsLarger(a, b) {
    if(a > b) {
        return `${a} is greater than ${b}`
    } else if(b > a) {
        return `${b} is greater than ${a}`
    } else { return `${a} and ${b} are equal`
}
}

function whichIsLargerTernary(a, b) {
  return  a > b ? `${a} is greater than ${b}` : b > a ? `${b} is greater than ${a}` : `${b} and ${a} are equal.`
}

console.log(whichIsLarger(a, b))
console.log(whichIsLargerTernary(a, b))

// 4.

let numberToCheck = 3;

function checkIfEven(numberToCheck) {
    if(numberToCheck % 2 == 0) {
        return `${numberToCheck} is an even number`
    } else {
        return `${numberToCheck} is an odd number`
    }
}





console.log(checkIfEven(numberToCheck));

/* ----------------- End of level one ----------------- */

/* ----------------- Start of level two ----------------- */

// 1.

let scoreA = 80
let scoreB = 70
let scoreC = 60
let scoreD = 50
let scoreF = 49
let studentScore = 80;

function gradeStudent(studentScore) {
    if(studentScore >= 80) {
        return `You got ${studentScore} which is sufficient for the grade: A!`;
    } else if(studentScore >= 70) {
        return `You got ${studentScore} which is sufficient for the grade: B!`;
    } else if(studentScore >= 60) {
        return `You got ${studentScore} which is sufficient for the grade: C!`;
    } else if(studentScore >= 50) {
        return `You got ${studentScore} which is sufficient for the grade: D!`;
    } else {
        return `You got ${studentScore} which unfortunately yields an F on this test.`;
    }
}

console.log(gradeStudent(studentScore));

// 2. (cannot use prompt in VSC)

monthInput = //prompt("What month is it").toLocaleLowerCase() //cannot use prompt in vsc so I will provide the input in variable myMonth
myMonth = "february"

function returnMonth(myMonth) {
    if(myMonth == "september" || myMonth == "october" || myMonth == "november") {
        return "It is autumn szn"
    } else if(myMonth == "december" || myMonth == "january" || myMonth == "february") {
        return "It is winter szn"
    } else if(myMonth == "april" || myMonth == "may" || myMonth == "march") {
        return "It is spring szn"
    } else if(myMonth == "june" || myMonth == "july" ||  myMonth == "august") {
        return "It is summer szn"
    } else {
        return "please input a month, if you did and still got this message, please make sure that your spelling is correct."
    }
}

console.log(returnMonth(myMonth))

// 3.

let weekend1 = "Saturday".toLocaleLowerCase();
let weekend2 = "Sunday".toLowerCase();

let weekday1 = "Monday".toLocaleLowerCase();
let weekday2 = "Tuesday".toLocaleLowerCase();
let weekday3 = "Wednesday".toLocaleLowerCase();
let weekday4 = "Thursday".toLocaleLowerCase();
let weekday5 = "Friday".toLocaleLowerCase();

let dayInput = "thursday";

function weekdayOrWeekend(dayInput)  {
    if(dayInput.toLocaleLowerCase() == weekend1 || dayInput.toLocaleLowerCase() == weekend2) {
        return `${dayInput.toLocaleLowerCase()} is a weekend day`
    } else if (dayInput.toLocaleLowerCase() == weekday1 || dayInput.toLocaleLowerCase() == weekday2 || dayInput.toLocaleLowerCase() == weekday3
     || dayInput.toLocaleLowerCase() == weekday4 || dayInput.toLocaleLowerCase() == weekday5) {
        return `${dayInput.toLowerCase()} is a normal weekday`
     }
} 

console.log(weekdayOrWeekend(dayInput));

/* ----------------- End of level two ----------------- */

/* ----------------- Start of level three ----------------- */

let monthArray1 = ["january", "march", "may", "july", "august", "october", "december"];
let monthArray2 = ["april", "june", "september", "november"];
let monthArray3 = ["february"];

let leapYear = "29"
let noLeapYear = "28"
let inputMonth = "july".toLowerCase();

function findDaysInMonth(inputMonth) {
    if(monthArray1.includes(inputMonth)) {
        
        return `${inputMonth.charAt(0).toUpperCase() + inputMonth.slice(1)} has 31 days`
    } else if (monthArray2.includes(inputMonth)) {
        return `${inputMonth.charAt(0).toUpperCase() + inputMonth.slice(1)} has 30 days`
    } else if (monthArray3.includes(inputMonth)) {
        return `${inputMonth.charAt(0).toUpperCase() + inputMonth.slice(1)} has 28 days or ${leapYear} days depending on the year, this year it has ${noLeapYear} days`
    } else {
        return "Make sure you spelled the month correctly, otherwise the program won't function."
    }
} 

console.log(findDaysInMonth(inputMonth))

/* ----------------- End of level three ----------------- */