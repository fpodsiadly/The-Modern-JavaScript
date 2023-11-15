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
