const getPuzzle = (callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener("readystatechange", (e) => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText)
      callback(undefined, data.puzzle)
    } else if (request.readyState === 4) {
      callback("Error: Request", undefined)
    }
  })

  request.open("GET", "https://puzzle.mead.io/puzzle?wordCount=3")
  request.send()
}
