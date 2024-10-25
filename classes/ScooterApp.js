const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      Leeds: [],
      Manchester: [],
      Birmingham: []
    }
    this.registeredUsers = {}
  }
  
  registerUser(username, password, age){
    if (this.registeredUsers[username]) {
      throw new Error("User is already registered.");
    }
    
    if (age < 18) {
      throw new Error("User is too young to register.");
    }
    let newUser = new User(username, password, age)

    this.registeredUsers[username] = newUser
    return newUser

  }
}
let SA = new ScooterApp;
SA.registerUser('Test','Test',18)
console.log(SA.registeredUsers)
module.exports = ScooterApp;
