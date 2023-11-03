const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman("Car Parts", 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
})

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})

// const countryCode = "PL"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener("readystatechange", (e) => {
//   if (countryRequest.readyState === 4 && countryRequest.status === 200) {
//     const data = JSON.parse(countryRequest.responseText)
//     const country = data.find((country) => country.cca2 === countryCode)
//     console.log(country.name.common)
//   }
// })

// countryRequest.open("GET", `https://restcountries.com/v3.1/all`)
// countryRequest.send()