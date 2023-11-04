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

getPuzzle("2")
  .then((puzzle) => {
    console.log(puzzle)
  })
  .catch((err) => {
    console.log(`Error: ${err}`)
  })

getCountry("PL")
  .then((country) => {
    console.log(country)
  })
  .catch((err) => {
    console.log(`Error: ${err}`)
  })

// fetch("http://puzzle.mead.io/puzzle", {})
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error(`Error: ${response.status}`)
//     }
//   })
//   .then((data) => {
//     console.log(data.puzzle)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// fetch("https://restcountries.com/v3.1/alpha/PL", {})
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error(`Error: ${response.status}`)
//     }
//   })
//   .then((country) => {
//     console.log(country.name.common)
//   })
//   .catch((error) => {
//     console.log(error)
//   })