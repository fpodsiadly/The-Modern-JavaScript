const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error(`Error: ${response.status}`)
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  const country = await getCountry(location.country)
  return country
}

const getCountry = async (countryCode) => {
  const response = await fetch(`//restcountries.com/v3.1/alpha/${countryCode}`)
  if (response.status === 200) {
    const data = await response.json()
    const country = data.find((country) => country.cca2 === countryCode)
    return country.name.common
  } else {
    throw new Error(`Error: ${response.status}`)
  }
}

const getLocation = async () => {
  const response = await fetch(`//ipinfo.io/json?token=7ae661c31c092d`)
  if (response.status === 200) {
    return await response.json()
  } else {
    throw new Error(`Error: ${response.status}`)
  }
}
