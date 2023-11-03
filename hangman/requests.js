const getPuzzle = (wordCount, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener("readystatechange", (e) => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText)
      callback(undefined, data.puzzle)
    } else if (request.readyState === 4) {
      callback("Error: Request", undefined)
    }
  })

  request.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()
}

const getCountry = (countryCode, callback) => {
  const countryRequest = new XMLHttpRequest()

  countryRequest.addEventListener("readystatechange", (e) => {
    if (countryRequest.readyState === 4 && countryRequest.status === 200) {
      const data = JSON.parse(countryRequest.responseText)
      const country = data.find((country) => country.cca2 === countryCode)
      callback(undefined, country)
    } else if (countryRequest.readyState === 4) {
      callback("Error: Request", undefined)
    }
  })

  countryRequest.open(
    "GET",
    `https://restcountries.com/v3.1/alpha/${countryCode}`
  )
  countryRequest.send()
}
