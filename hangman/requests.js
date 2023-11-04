const getPuzzle = (wordCount) => {
  return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error(`Error: ${response.status}`)
      }
    })
    .then((data) => {
      return data.puzzle
    })
}

const getCountry = (countryCode) => {
  return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`, {})
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error(`Error: ${response.status}`)
      }
    })
    .then((data) => {
      const country = data.find((country) => country.cca2 === countryCode)
      return country.name.common
    })
}

// const getCountry = (countryCode) =>
//   new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener("readystatechange", (e) => {
//       if (countryRequest.readyState === 4 && countryRequest.status === 200) {
//         const data = JSON.parse(countryRequest.responseText)
//         const country = data.find((country) => country.cca2 === countryCode)
//         resolve(country)
//       } else if (countryRequest.readyState === 4) {
//         reject("Error: Request")
//       }
//     })

//     countryRequest.open(
//       "GET",
//       `https://restcountries.com/v3.1/alpha/${countryCode}`
//     )
//     countryRequest.send()
//   })
