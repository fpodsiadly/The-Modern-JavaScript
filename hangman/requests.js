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
