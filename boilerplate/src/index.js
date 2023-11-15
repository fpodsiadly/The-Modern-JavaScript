const printTeam = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`)
  console.log(`Coach: ${coach}`)
  console.log(`Players: ${players.join(', ')}`)
}

const team = {
  name: 'Liberty3',
  coach: 'Casey Penn',
  players: ['Marge', 'Aiden', 'Herbert', 'Sherry'],
}
printTeam(team.name, team.coach, ...team.players)

let cities = ['London', 'Paris', 'New York']
cities = ['Santiago', ...cities]

console.log(cities)

let house = {
  bedrooms: 2,
  bathrooms: 1,
  yearBuild: 2000,
}

let newHouse = {
  basement: true,
  ...house,
  bedrooms: 3,
}

newHouse.yearBuild = 2003

console.log(house)
console.log(newHouse)

const person = {
  name: 'Casey',
  age: 30,
}

const location = {
  city: 'New York',
  country: 'USA',
}

const oveview = {
  ...person,
  job: 'Software Engineer',
  ...location,
}

console.log(oveview)