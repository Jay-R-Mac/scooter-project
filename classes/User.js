class User {
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.isLoggedIn = false;
  }
  login(password){
    if (this.password === password){
      this.isLoggedIn = true
    }
  }
  logout(){
    this.isLoggedIn = false
  }
}

u1 = new User('Test','Pass',32)
console.log(u1)
u1.login('Pass')
console.log(u1)
u1.logout()
console.log(u1)

module.exports = User;
