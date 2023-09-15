// Primitive value: string, number, boolean, null, undefined

// Object : myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFun --> Function.prototype --> Object.prototype --> null

const team = ['Luke', 'Maddison']
console.log(team.hasOwnProperty('length'))

const other = new String('Phone')
console.log(other)