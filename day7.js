/* ----------------- Start of level one ----------------- */

// 1.

function fullName () {
    let firstName = "Allan"
    let space = " "
    let lastName = "Heremi"
    let myFullName = firstName + space + lastName;
    console.log(myFullName)
}

fullName ()

// 2.

var firstName = "Allan"
var lastName = "Heremi"

function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName)
    return firstName + " " + lastName
}
fullName(firstName, lastName)

// 3.

var x = 5
var y = 7

function addNumbers(x, y) {
    console.log(x + y)
    return x + y;
}

addNumbers(x, y)

// 4.

function areaOfRectangle(length, width) {
    console.log(length *= width)
    return length *= width;

}

areaOfRectangle(12, 28)

// 5.

function perimeterOfRectangle(num1, num2) {
  let result = (num1+num2) * 2
  console.log(result)
  return result
    
}
perimeterOfRectangle(5,25)

// 6.

function volumeOfRectPrism(prismLength, prismWidth, prismHeight) {
let result = prismLength * prismWidth * prismHeight
console.log(result)
return result

}

volumeOfRectPrism(3, 3, 3)

// 7.
var PI = Math.PI
function areaOfCircle(r) {
    let result = PI * r * r 
    console.log(result) 
    return result;
}

areaOfCircle(3)

// 8.

function circumOfCircle(PI, radius) {
    let result = 2*(PI*radius)
    console.log(result)
    return result
}

circumOfCircle(PI, 5)

// 9.

function calculateDensity(mass, volume) {

    density = mass/volume
    console.log(density)
    return density

}

calculateDensity(100, 50)

// 10.

function calculateSpeed(distance, time) {
    let speed = distance / time
    console.log(speed)
    return speed
}

calculateSpeed(1000, 56)

// 11.

function calculateWeight(mass, gravity) {
    let weight = mass * gravity
    console.log(weight)
    return weight
}

calculateWeight(10, 57)

// 12.

function convertCelsiusToFahrenheit(fahrenHeit) {
    let celsius = fahrenHeit * 9/5 + 32
    console.log(celsius)
    return celsius
}

convertCelsiusToFahrenheit(55)

// 13.

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
  
    let bmiStatus;
  
    if (bmi < 18.5) {
      bmiStatus = 'underweight';
    } else if (bmi < 25) {
      bmiStatus = 'normal';
    } else if (bmi < 30) {
      bmiStatus = 'overweight';
    } else {
      bmiStatus = 'obese';
    }
  
    return bmiStatus;
  }
  
  // 14.

  function checkSeason(monthInIntegerForm) {
    let Jan = 0;
    let Feb = 1; 
    let March = 2;
    let April = 3;
    let May = 4;
    let June = 5;
    let July = 6;
    let August = 7;
    let September = 8;
    let October = 9;
    let November = 10;
    let December = 11;

    let season;
    if (monthInIntegerForm == Feb || monthInIntegerForm == December || monthInIntegerForm ==  Jan) {
        season = "Winter"
        console.log(season)
        return season
       
    } else if (monthInIntegerForm == March || monthInIntegerForm ==  April || monthInIntegerForm ==  May) {
        season = "Spring"
        console.log(season)
        return season
      
    } else if (monthInIntegerForm == June || monthInIntegerForm ==  July || monthInIntegerForm ==  August) {
        season = "Summer"
        console.log(season)
        return season
        
    } else if (monthInIntegerForm == September || monthInIntegerForm ==  October || monthInIntegerForm == November) {
        season = "Autumn"
        console.log(season)
        return season
     

    }
    return season

  }

  checkSeason(2)

  // 15.

  function findMax(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        console.log(number1 + " is the largest.")
        return number1
    } else if (number2 > number1 && number2 > number3) {
        console.log(number2 + " is the largest.")
        return number2
    } else if (number3 > number1 && number3 > number2) {
        console.log(number3 + " is the largest.")
        return number3
    } else {
        console.log("Two or more numbers are equal, please change the input, the function will only return a valid result if the 3 numbers are differentiating. ")
        return
    }
  }

  findMax(155, 14, -11111)

  /* ----------------- End of level one ----------------- */

  /* ----------------- Start of level two ----------------- */

  // 1.

 
  // 2. 

  // 3.
var arr = ["Hello", "Monica"]
var notArr = ["Testing", "Testing very much"]
  function printArray(arr) {
    console.log(...arr)
    return arr
  }

  console.log(printArray(notArr))

  // 4.

  function showDateTime() {
    let date = new Date
    console.log(date.toLocaleDateString() + "   " + date.getUTCHours() + ":" + date.getUTCMinutes())

    return date.toLocaleDateString() + "   " + date.getUTCHours() + ":" + date.getUTCMinutes()

  }

  showDateTime()

  // 5.

  function swapValues(x, y) {
    let temp = x
    x = y
    y = temp
    console.log(`After swapping: x = ${x}, y = ${y}`);
  }

  swapValues("woop", "koop")

  // 6.


  function reverseArray(reverseArr) {
    let emptyArr = [];
    
    for (let i = reverseArr.length - 1; i >= 0; i--) {
emptyArr.push(reverseArr[i])
console.log(emptyArr)
    }
    
console.log(emptyArr)
return emptyArr

  }

  reverseArray(["My", "test", "array"])

  // 7.

  function capitalizeArray(arr) {
    let capitalizedArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      let capitalizedElement = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      capitalizedArr.push(capitalizedElement); 
    }
  console.log(capitalizedArr)
    return capitalizedArr; 
  }
  
  capitalizeArray(["Testing", "if", "this", "works"])

  // 8.

  function addItem(item) {
    console.log([item])
return [item]
  }

  addItem(["Hello", "Yo"])

  // 9.

  function removeItem(arr, index) {
    const updatedArray = [...arr.slice(0, index), ...arr.slice(index + 1)]

    console.log(updatedArray)
    return updatedArray
  }

  removeItem(["Hi", "Im", "only", "testing"], 2)

  // 10.

  function sumOfNumbers(num) {
  
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    console.log(sum)
    return sum;
  }

  sumOfNumbers(33)

  // 11.

  function sumOfOdds(numberParameter) {
    let sum = 0

    for (let i = 0; i < numberParameter; i++) {
      if (i % 2 != 0) {
        sum += i
      }
      
    }
console.log(sum)
return sum
  
  }
  sumOfOdds(57)

  // 12.

  function sumOfEven(numberParameter) {
    let sum = 0;

    for (let i = 0; i < numberParameter; i++) {
      if (i % 2 == 0) {
        sum += i
      }
    }
    console.log(sum)
    return sum
  }

  sumOfEven(1155)

  // 13.

  function evensAndOdds(numberParameter) {
    let evens = 0;
    let odds = 0;

    for (let i = 0; i < numberParameter; i++) {
      if(i % 2 == 0) {
        evens += 1
      } else {
        odds += 1
      }
    }
    console.log(`There are ${evens} evens.`)
    console.log(`There are ${odds} odds.`)
    return evens && odds
  }

evensAndOdds(337)

// 14.

function returnSum(numberParameter) {
let sum = 0;

for (let i = 0; i < arguments.length; i++) {
  sum += arguments[i]
}
console.log(sum)
return sum
}

returnSum(5, 3, 9)

// 15.

function randomUserIp() {
  let ip = ""

  let firstThreeDigits = Math.floor(Math.random() * 255)
  let dot = "."
  let secondThreeDigits = Math.floor(Math.random() * 255)
  let singleNum = Math.floor(Math.random() * 9)
  let twoDigitNum = Math.floor(Math.random() * 99)

  console.log("Your IP: " + firstThreeDigits + dot + secondThreeDigits + dot + singleNum + dot + twoDigitNum)
  return firstThreeDigits + dot + secondThreeDigits + dot + singleNum + dot + twoDigitNum
}
randomUserIp()

// 16.

// 00:11:22:33:44:55

function randomMacAdress() {
  let hexidecimal = "0123456789ABCDEF"

  let oneDigit = hexidecimal.charAt(Math.floor(Math.random() * 15))
  let colon = ":"
  let twoDigitsOne =  hexidecimal.charAt(Math.floor(Math.random() * 15)) +  hexidecimal.charAt(Math.floor(Math.random() * 15))
  let twoDigitsTwo = hexidecimal.charAt(Math.floor(Math.random() * 15)) +  hexidecimal.charAt(Math.floor(Math.random() * 15))
  let twoDigitsThree = hexidecimal.charAt(Math.floor(Math.random() * 15)) +  hexidecimal.charAt(Math.floor(Math.random() * 15))
  let twoDigitsFour = hexidecimal.charAt(Math.floor(Math.random() * 15)) +  hexidecimal.charAt(Math.floor(Math.random() * 15))
  let twoDigitsFive = hexidecimal.charAt(Math.floor(Math.random() * 15)) +  hexidecimal.charAt(Math.floor(Math.random() * 15))
  let twoDigitsSix = hexidecimal.charAt(Math.floor(Math.random() * 15)) +  hexidecimal.charAt(Math.floor(Math.random() * 15))
  
console.log(twoDigitsOne + ":" + twoDigitsTwo + ":" + twoDigitsThree + ":" + twoDigitsFour + ":" + twoDigitsFive + ":" + twoDigitsSix)
return twoDigitsOne + ":" + twoDigitsTwo + ":" + twoDigitsThree + ":" + twoDigitsFour + ":" + twoDigitsFive + ":" + twoDigitsSix
}

randomMacAdress()

// 17.

function randomHexaNumberGenerator() {
  let hexidecimal = "0123456789ABCDEF"
  let hashtag = "#"
  let randomOne = hexidecimal.charAt(Math.floor(Math.random() * 15))
  let randomTwo = hexidecimal.charAt(Math.floor(Math.random() * 15))
  let randomThree = hexidecimal.charAt(Math.floor(Math.random() * 15))
  let randomFour = hexidecimal.charAt(Math.floor(Math.random() * 15))
  let randomFive = hexidecimal.charAt(Math.floor(Math.random() * 15))
  let randomSix = hexidecimal.charAt(Math.floor(Math.random() * 15))

  let allHexa = hashtag + randomOne + randomTwo + randomThree + randomFour + randomFive + randomSix
  console.log(allHexa)
  return allHexa

}

randomHexaNumberGenerator()

// 18.

function userIdGenerator() {
  let characters = "abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ1234567890"
  let randomOne = characters.charAt(Math.floor(Math.random() * 68))
  let randomTwo = characters.charAt(Math.floor(Math.random() * 68))
  let randomThree = characters.charAt(Math.floor(Math.random() * 68))
  let randomFour = characters.charAt(Math.floor(Math.random() * 68))
  let randomFive = characters.charAt(Math.floor(Math.random() * 68))
  let randomSix = characters.charAt(Math.floor(Math.random() * 68))
  let randomSeven = characters.charAt(Math.floor(Math.random() * 68))

  let allRandom = randomOne + randomTwo + randomThree + randomFour + randomFive + randomSix + randomSeven

  console.log(allRandom)
  return allRandom
}

userIdGenerator()

  /* ----------------- End of level two ----------------- */

  /* ----------------- Start of level three ----------------- */

  // 1.

  // 2.

  function rgbColorGenerator() {
  
    let red = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255) 

    console.log("rgb(" + red + "," + blue + "," + green + ")")
    return "rgb(" + red + "," + blue + "," + green + ")"
  }
  rgbColorGenerator()

  // 3.


  // 4.

  function rgbColorGenerator() {
  let result = []
    let red = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255) 

    result.push(red, blue, green)

    console.log(result)
    return result
  }
  rgbColorGenerator()