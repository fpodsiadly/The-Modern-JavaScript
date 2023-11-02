const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman("Car Parts", 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
})

const request = new XMLHttpRequest()

request.addEventListener("readystatechange", (e) => {
  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText)
    console.log(data)
  }
})

request.open("GET", "https://puzzle.mead.io/puzzle")
request.send()
