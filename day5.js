/* ----------------- Start of level one ----------------- */

// 1.

var emptyArray = [];

// 2.

var arrayWithFiveOrMoreElements = [1, 2, 3, 4, 5]

// 3.

console.log(arrayWithFiveOrMoreElements.length)

// 4.

var firstItem = arrayWithFiveOrMoreElements.shift()
console.log(firstItem)

var middleItemIndex = Math.floor(arrayWithFiveOrMoreElements.length / 2 + 1)
var middleItem = middleItemIndex
console.log(middleItem)

var lastItem = arrayWithFiveOrMoreElements.pop()
console.log(lastItem)

// 5.

var mixedDataTypes = [1, "hello", true, false, 9.8];
var mixedDataTypesLength = mixedDataTypes.length
console.log(mixedDataTypesLength)

// 6.

var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7.

console.log(itCompanies);

// 8.

console.log(itCompanies.length)

// 9.

console.log(itCompanies[0].toString() + " " + itCompanies[3].toString() + " " + itCompanies[6].toString());

// 10.
var splittedCompanies = itCompanies.join(", ")
console.log(splittedCompanies)

// 11. 

console.log(itCompanies.join(", ").toUpperCase());

// 12.

let sentence = itCompanies.join(", ") + "are big IT companies."

console.log(sentence)

// 13.

function checkIfCompanyExists(itCompanies) {
    if(itCompanies.includes("Facebook")) {
        return "Facebook"
    } else {
        return "Company is not found."
    }
}

console.log(checkIfCompanyExists(itCompanies))

// 14.

var filteredCompanies = []
itCompanies.forEach(function(Company) {
    if(Company.split("o").length <= 2) {
        filteredCompanies.push(Company)
    }
})

console.log(filteredCompanies)

// 15.

var sortMethod = itCompanies.sort()
console.log(sortMethod)

// 16.

console.log(sortMethod.reverse())

// 17.

var slicedCompanies = itCompanies.slice(0, 3)
console.log(slicedCompanies)

// 18.

var reallySlicedCompanies = itCompanies.slice(4, 8)
console.log(reallySlicedCompanies)

// 19.

var middleSliced = itCompanies.slice(3, 5)
console.log(middleSliced)

// 20.

var removedCompany = itCompanies.shift()
console.log(removedCompany)

// 21.

var middleSpliced = itCompanies.splice(3, 4)
console.log(middleSpliced)

// 22.

var lastRemoved = itCompanies.pop()
console.log(lastRemoved)

// 23.


var FakeitCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
FakeitCompanies.splice(0, 100)
console.log(FakeitCompanies)

/* ----------------- End of level one ----------------- */

/* ----------------- Start of level two ----------------- */

// 1.

const webTechs = require('./day5webtechs')
const countries = require('./day5countries')
console.log(countries)
console.log(webTechs)


// 2.


let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'


function missionTwo(text) {
    var newText = []
for (let i = 0; i < text.length; i++) {
    if(text[i] == "," || text[i] == ".") {
        newText += ""

    } else {
        newText += text[i]
    }
}
return newText.split(" ")
}

console.log(missionTwo(text))

// 3.

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")
shoppingCart.splice(4, 1)
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)

// 4.

console.log(countries.includes("Ethiopia"))
console.log(countries[4].toUpperCase())

// 5.

console.log(webTechs.includes("Sass"))
webTechs.push("Sass")
console.log(webTechs)

// 6.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

/* ----------------- End of level two ----------------- */

/* ----------------- Start of level three ----------------- */

// 1.

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())

const maxAge = Math.max(...ages)
const minAge = Math.min(...ages)
console.log(maxAge)
console.log(minAge)

console.log(Boolean(ages.length / 2 > 0))
console.log(ages.length)
console.log(ages[5])

const sum = ages.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(sum / 10) // 22.8 is average age
console.log(Math.max(...ages) - Math.min(...ages)) // 7
let average = 22.8

const diffMin = Math.abs(minAge - average)
const diffMax = Math.abs(maxAge - average)

console.log(diffMin)
console.log(diffMax)

// 2.
let tenCountries = countries.slice(0, 10)
console.log(countries.slice(0, 10))
var middleCountries = countries[5]
console.log(middleCountries)

const half = Math.ceil(countries.length / 2)
const firstHalf = countries.slice(0, half)
const secondHalf = countries.slice(half)

console.log(firstHalf)
console.log(secondHalf)