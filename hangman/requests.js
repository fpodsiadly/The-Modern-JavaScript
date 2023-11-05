const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  )
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error(`Error: ${response.status}`)
  }
}

const getPuzzleOld = (wordCount) => {
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

const getLocation = () => {
  return fetch(`https://ipinfo.io/json?token=7ae661c31c092d`, {}).then(
    (response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error(`Error: ${response.status}`)
      }
    }
  )
}
