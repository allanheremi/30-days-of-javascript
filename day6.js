/* ----------------- Start of level one ----------------- */

const webTechs = require("./day5webtechs")

// 1.

function zeroToTen() {
    
    for (let i = 0; i <= 10; i++) {
    console.log(i)
    
    }

}
zeroToTen()

function whileZeroToTen() {
    let i = 0
    while (i < 11) {
console.log(i)
i += 1
    }
}

whileZeroToTen()

function doWhileZeroToTen() {
    let i = 0;

    do {
        console.log(i)
        i++
    } while (i < 11)
}

doWhileZeroToTen() 

// 2.


function forCountDown() {
    myNumFor = 11;

    for (let i = 0; i < 11; i++) {
        console.log(myNumFor - 1)
        myNumFor -= 1;
    }
}

forCountDown()

function whileCountDown() {
    let myNumWhile = 11;
    while (myNumWhile >= 1) {
        console.log(myNumWhile - 1)
        myNumWhile -= 1
    }
}

whileCountDown() 

function doWhileCountDown() {
    let myNumDoWhile = 11;
    do {
        console.log(myNumDoWhile - 1)
        myNumDoWhile -= 1
    } while (myNumDoWhile >= 1)
}

doWhileCountDown()

// 3.

var n = 55;

function fiftyFiveToZero(n) {
    let myZero = 0;
    for (let i = 0; i <= n; i++) 
    {
    
        console.log(i)
    }
}

fiftyFiveToZero(n)

// 4.

function hashTagMaker() {
    
    let replaceAbleInt = ""
    for (let i = 0; i < 8; i++) 
    {
        replaceAbleInt += "#"
        console.log(replaceAbleInt)
    }

}

hashTagMaker()

// 5.

function timesTimes() {
    let myNum = 0;
    for (let i = 0; i < 11; i++) {
        console.log(myNum * myNum)
        myNum += 1;
    }
    return 
}

timesTimes()

// 6.

function timesSquareCube() {
    console.log("i      i^2     i^3");
    for (let i = 0; i <= 10; i++) {
        const square = i * i
        const cube = i * i * i

        const padding1 = " ".repeat(3 - i.toString().length)
        const padding2 = " ".repeat(4 - i.toString().length)

        console.log(`${i}${padding1}${square}${padding2}${cube}`)
    }
}

timesSquareCube()

// 7.

function onlyEven() {
    for (let i = 0; i < 101; i + 2) {
        console.log(i)
        i += 2
    }
}

onlyEven()

// 8.

function onlyOdd() {
    for (let i = 1; i < 101; i + 2) {
        console.log(i)
        i += 2
    }
}

onlyOdd()

// 9.

var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
var joinedPrimeNumbers = primeNumbers.join(", ")


console.log(joinedPrimeNumbers)

function printPrimeNumbers() {
    for (let i = 0; i < 101; i++) {
        if (primeNumbers.includes(i)) {
            console.log(i)
        } else {
            
        }
    }
    return
}

printPrimeNumbers()

// 10.

function sumAllHundred() {
    let sum = 0;
    for(let i = 0; i <= 100; i++) {
    sum += i;
   
    }
    console.log("The sum of all numbers from 0 to 100 is " + sum + ".")
    return
}

sumAllHundred()

// 11.

function sumAllOddsAndEvens() {
    let evens = 0;
    let odds = 0;

    for(let i = 0; i <= 100; i++) {
        if(i % 2 == 0) {
            evens += i
        } else {
            odds += i
        }
    }
    console.log("The result of evens are = " + evens)
    console.log("The result of odds are = " + odds)
}

sumAllOddsAndEvens()

// 12.

function arraySumAllOddsAndEvens() {
    var arrayEvens = []
    var arrayOdds = []
    var myArray = []


    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            arrayEvens.push(i)
        } else {
            arrayOdds.push(i) 
        }
        
       
        var sumEvens = arrayEvens.reduce((acc, curr) => acc + curr, 0)
  var sumOdds = arrayOdds.reduce((acc, curr) => acc + curr, 0)

  console.log("Sum of even numbers: " + sumEvens)
  console.log("Sum of odd numbers: " + sumOdds)
    }
}

arraySumAllOddsAndEvens()

// 13.

function fiveRandom() {
    let randomArray = []
    for (let i = 0; i <= 5; i++) {
    randomArray.push(Math.floor(Math.random() * 100 + 1))
    }
    console.log(randomArray)
    return
}

fiveRandom()

// 14.

function fiveRandomUnique() {
    let myRandomArray = []
    for (let i = 0; i <= 5; i++) {
        myRandomArray.push(Math.floor(Math.random() * 1000000 + 1))
    }
    console.log(myRandomArray)
    return
}

fiveRandomUnique()

// 15.

function fiveRandomDigits() {
    let container = ""
    let characters = "abcdefghijklmnopqrstuvwzyxåäö" + "abcdefghijklmnopqrstuvwzyxåäö".toUpperCase() + "1234567890"
    
    for(let i = 0; i <= 5; i++) {
        container += characters.charAt(Math.floor(Math.random() * characters.length))

    }
    console.log(container)
}

fiveRandomDigits()

/* ----------------- End of level one ----------------- */

/* ----------------- Start of level two ----------------- */


// 1.

function manyRandomDigits() {
    let manyContainers = ""
    let manyCharacters = "abcdefghijklmnopqrstuvwzyxåäö" + "abcdefghijklmnopqrstuvwzyxåäö".toUpperCase() + "1234567890"
    
    for(let i = 0; i <= Math.floor(Math.random() * 5000); i++) {
        manyContainers += manyCharacters.charAt(Math.floor(Math.random() * manyCharacters.length))

    }
    console.log(manyContainers)
}

manyRandomDigits()

// 2.

function hexidecimalGenerator() {
    let firstIndex = "#"
    let randomRemainder = "abcdef0123456789"

    for (let i = 0; i <= 5; i++) {
        firstIndex += randomRemainder.charAt(Math.floor(Math.random()* randomRemainder.length))
    }
    if (firstIndex.length > 6) {
        
    }
    console.log(firstIndex)
}

hexidecimalGenerator()

// 3.

function rgbGenerator() {

    redColorRandomized = Math.floor(Math.random() * 255 + 1)
    greenColorRandomized = Math.floor(Math.random() * 255 + 1)
    blueColorRandomized = Math.floor(Math.random() * 255 + 1)
    console.log("rgb(" + `${redColorRandomized},${greenColorRandomized},${blueColorRandomized})`)

    
    return 


}

rgbGenerator()

// 4.

const countries = [
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
  ];
  
  const upperCaseCountries = [];
  for (let i = 0; i < countries.length; i++) {
    upperCaseCountries.push(countries[i].toUpperCase());
  }

  console.log(upperCaseCountries);


// 5.

const countryNameLengths = countries.map(countries => countries.length)
console.log(countryNameLengths);

// 6.

const countryArrayWithAbbreviationAndLength = countries.map(countries => [countries, countries.substring(0, 3).toUpperCase(), countries.length]);
console.log(countryArrayWithAbbreviationAndLength);

// 7. 

function findCountriesIncludingLand() {
    var emptyArray = [];
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].toLowerCase().includes("land")) {
            emptyArray.push(countries[i]);
        }
    }
    console.log(emptyArray)
    return emptyArray
    
}

findCountriesIncludingLand()

// 8.

const checkThese =  [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ]

  const iaCountries = checkThese.filter(country => country[0].endsWith('ia')).map(country => country[0]);

  if (iaCountries.length > 0) {
    console.log(iaCountries);
  } else {
    console.log('These are countries ends without ia');
  }
  

  /* copied solution, couldn't make it work myself on task 8 */

  // 9.

function findLongestCountry() {
    let findLongestCountry = checkThese[0][0];

    for (let i = 1; i < checkThese[i][0].length; i++) {
        if (checkThese[i][0].length > findLongestCountry.length) {
            findLongestCountry = checkThese[i][0]
        }
    }

    console.log(findLongestCountry)
    return(findLongestCountry)
}

findLongestCountry();

// 10.

function find5() {
    let containsFive = [];
    for (let i = 0; i < checkThese.length; i++) {
        if (checkThese[i][0].length == 5) {
            containsFive.push(checkThese[i][0])
        } 
        
    }
    console.log(containsFive)
    return containsFive
}

find5()

// 11.

function longestWebTech() {
    var longestWord = ""
    for (let i = 0; i < webTechs.length; i++) {
        if (webTechs[i].length > longestWord.length)
        longestWord = webTechs[i]
    }
    console.log(longestWord)
    return longestWord
}
longestWebTech()

// 12.

function webTechsArray() {
    var newArray = [[]]
    for (let i = 0; i < webTechs.length; i++) {
        newArray.push([webTechs[i], webTechs[i].length])

    }

    console.log(newArray);

}

webTechsArray();

// 13.

const mernStack = ["MongoDB", "Express", "React", "Node"]

function printMern() {
    let myMernString = ""
    
    for(let i = 0; i < mernStack.length; i++) {
        myMernString += mernStack[i][0]
       
    }

    console.log(myMernString)
    return myMernString
}

printMern()

// 14.

function printWebTechs() {
    for (let i = 0; i < webTechs.length; i++) {
        console.log(webTechs[i])
        webTechs[i + 1]
    }

    return
}

printWebTechs()

// 15.

const fruitArray =  ['banana', 'orange', 'mango', 'lemon']

function reverseFruits() {
    let reversedFruits = [];
    for (let i = fruitArray.length - 1; i >= 0; i--) {

        reversedFruits.push(fruitArray[i])

    }
    console.log(reversedFruits)
    return
}

reverseFruits()

// 16.

const fullStack = [  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

function fullStackPrint() {
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}
}
fullStackPrint()

/* ----------------- End of level two ----------------- */

