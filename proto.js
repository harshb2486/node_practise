function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.getdetails = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
}

let user1 = new User("Alice", 30);
let deatils = user1.getdetails();
console.log(deatils);
