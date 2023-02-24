/* ----------------- Start of level one ----------------- */

const countries = require("./day5countries")

// 1.

/* forEach iterates through an arrays elements and does something for each element in the array

map switches out elements in an array for another element that we can declare

filter is used to filter element indexes of an array and only return the filtered elements in a new array */

// 2.

const numbers = [1, 2, 3, 4]

function double(number) {
    return number * 2
}

const doubledNumbers = numbers.map(double)
console.log(doubledNumbers)

// 3.

const countris = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

countris.forEach((country => console.log(country)))

// 4.

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

names.forEach(name => console.log(name))


// 5.

numbers2.forEach(num => console.log(num))

// 6.

countries.forEach(country => console.log(country.toUpperCase())) // All uppercase
countries.forEach(country => console.log(country.charAt(0).toUpperCase() + country.slice(1))) // First character only is uppercase

// 7.

countries.forEach(country => console.log(country + " the length of the countries name is: " + country.length))

// 8.

numbers2.forEach(num => console.log(Math.sqrt(num)))

// 9.

names.forEach(name => console.log(name.toUpperCase()))

// 10.

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  const productPrices = products.map((product) => {
    return `${product.product}, ${product.price}`;
  });
  
  console.log(productPrices);

  // 11.

const countriesContainingLand = countries.filter((country) => country.includes("land"))
console.log(countriesContainingLand)

// 12.

const countriesWithSixCharacters = countries.filter((country) => {
return (country.length == 6) 
})

console.log(countriesWithSixCharacters)

// 13.

const countriesWithSixCharactersOrMore = countries.filter((country) => {
    return (country.length >= 6)
})

console.log(countriesWithSixCharactersOrMore)

// 14.

const countryStartingWithE = countries.filter((country) => {
    if (country.charAt(0) == "E")
    return country
})

console.log(countryStartingWithE)

// 15.

const productWithPrices = products.filter((product) => {
    return typeof product.price === "number" && !isNaN(product.price);
});

console.log(productWithPrices)

// 16.

var myArray = ["make", 3, "all", 5, "strings"]

function stringifyArray() {
    for (let i = 0; i < myArray.length; i++) {
        myArray[i] = myArray[i].toString()
    }
    console.log(myArray)
}
stringifyArray()

// 17.

var myArray2 = ["make", 3, "all", 5, "strings"]

const sum = myArray2.reduce((accumulator, currentValue) => {
    if (typeof currentValue == "number") {
        return accumulator + currentValue
    } else {
        return accumulator
    }
}, 0)

console.log(sum)