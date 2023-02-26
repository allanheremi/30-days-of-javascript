/* ----------------- Start of level one ----------------- */

// 1.

const newSet = new Set()
console.log(newSet)

// 2.

const houseHold = ["Allan", "Petra", "Elsa"]
setOfHouseHold = new Set()
for (const members of houseHold) {
    setOfHouseHold.add(members)
}

console.log(houseHold)

// 3.

console.log(setOfHouseHold.delete("Allan"))
console.log(setOfHouseHold.size)
console.log(setOfHouseHold)

// 4.

setOfHouseHold.clear()
console.log(setOfHouseHold)

// 5.

const myFiveElementArray = ["Salam", "Shlaw", "Hej", "Hello", "Guten Tag"]
const myFiveElementSet = new Set()
myFiveElementSet.add(myFiveElementArray)
console.log(myFiveElementSet)

// 6.


const myCountries = ["Iran", "Kurdistan", "Sweden", "England", "Germany"]
const countryCharMap = new Map();

for (let country of myCountries) {
    countryCharMap.set(country, country.length)
}

console.log(countryCharMap)