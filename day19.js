/* ----------------- Start of level one ----------------- */

// 1.

function myTestFunctionOuter() {
    let count = 0;

    function myTestFunctionInner() {
        count += 10
        return count
    }

    return myTestFunctionInner

}

const startFunction = myTestFunctionOuter()

console.log(startFunction())
console.log(startFunction())
console.log(startFunction())

/* ----------------- End of level one ----------------- */
/* ----------------- Start of level two ----------------- */

function X() {
    let count = 0;

    function a() {
        count += 12
        console.log(count)
        return count
    }
    function b() {
        count -= 6
        console.log(count)
        return count
    }

    function c() {
        count += 3
        console.log(count)
        return count
    }

return a() + b() + c()

}

const Y = X()
console.log(Y)

/* ----------------- End of level two ----------------- */
