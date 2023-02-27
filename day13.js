/* ----------------- Start of level one ----------------- */


// 1.


const countries = require("./day5countries");

console.table(countries)

// 2.

const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]

  console.table(users)

  // 3.

  console.group(users)

  /* ----------------- End of level one ----------------- */

  /* ----------------- Start of level two ----------------- */

  // 1.

  console.assert(10 > 10 * 2)

  // 2.

  console.warn("watch out") 

  // 3.

  console.error("this is an error")

  /* ----------------- End of level two ----------------- */

  /* ----------------- Start of level three ----------------- */

  console.time("regular for loop") 
    let num = 1
    for (let i = 0; i < 20; i++) {
        console.log(num)
        num += 1
    }
  
  console.timeEnd("regular for loop")




  console.time("while loop") 
  let num2 = 1 
  while (num < 20) {
    console.log(num)
    num += 1
  }

  console.timeEnd("while loop")



  const testArr = new Array(20).fill(0);

console.time("for of")
for (const value of testArr) {

}
console.timeEnd("for of")


console.time("forEach")
testArr.forEach(value =>  {
    console.log(testArr[0])
})

console.timeEnd("forEach")