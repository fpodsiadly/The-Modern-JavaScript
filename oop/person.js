const Person = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const me = new Person('Filip', 'P', 33);
console.log(me);

const person2 = new Person('Clancey', 'Turner', 50)
console.log(person2);