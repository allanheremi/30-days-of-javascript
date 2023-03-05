/* ----------------- Start of level one ----------------- */

// 1.

const firstParagraph = document.querySelector('p')

console.log(firstParagraph)

// 2.

const first = document.querySelector("#1")
const second = document.querySelector("#2")
const third = document.querySelector("#3")
const fourth = document.querySelector("#4")

// 3.

const allParagraphs = document.querySelectorAll('p')

// 4.

function loopThroughNodeList() {
    for (let i = 0; i < allParagraphs.length; i++) {
        console.log(allParagraphs[i])

    }
    return
}

loopThroughNodeList()

// 5.

allParagraphs[3].textContent = 'Fourth paragraph'

// 6.

allParagraphs.classList.add('test', 'testText')

setInterval(
allParagraphs.forEach((paragraph, i) => {
    if (i % 2 == 0) {
      paragraph.style.backgroundColor = "red"
    } else {
      paragraph.style.backgroundColor = "green"
    }
   }) )
   
   allParagraphs[0].textContent = "Hi"
   allParagraphs[1].textContent = "We am manipulated"
   allParagraphs[2].textContent = "by using"
   allParagraphs[3].textContent = "JS textContent"
   