class Scooter {
  static serial = 1;
  static nextSerial(){
    this.serial++;
    return this.serial
  }
  constructor(station){
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial();
    this.battery = 10;
    this.isBroken = true;
  }
  rent(user){
    if (this.charge > 20 && this.isBroken === false){
      this.user = user;
      this.station = null
    } else if (this.charge > 20 && this.isBroken === false){
    throw new Error("This Scooter needs to be charged");
    } else if (this.isBroken === true){
      throw new Error("This Scooter needs to be repaired");
    }
    
  }
  dock(station){
    this.station = station;
    this.user = null;
  }
  charge(){
    this.battery = 100;
  }
  repair(){
    this.isBroken = false
  }

}

s1 = new Scooter('Leeds')
s1.repair()
console.log(s1)

module.exports = Scooter;
