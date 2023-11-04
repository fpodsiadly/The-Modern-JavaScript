const getPuzzle = (wordCount) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", (e) => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        resolve(data.puzzle)
      } else if (request.readyState === 4) {
        reject("Error: Request")
      }
    })

    request.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
  })

const getCountry = (countryCode) =>
  new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener("readystatechange", (e) => {
      if (countryRequest.readyState === 4 && countryRequest.status === 200) {
        const data = JSON.parse(countryRequest.responseText)
        const country = data.find((country) => country.cca2 === countryCode)
        resolve(country)
      } else if (countryRequest.readyState === 4) {
        reject("Error: Request")
      }
    })

    countryRequest.open(
      "GET",
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    )
    countryRequest.send()
  })
