let store = { drivers: [], passengers: [], trips: [] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;
class Driver {
  constructor(name){
    this.id = driverId++
    this.name = name
    store.drivers.push(this);
  }
}


class Passenger {
  constructor(name){
    this.id = passengerId++
    this.name = name
    store.passengers.push(this)
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = tripId++
    this.passengerId = passengerId
    this.driverId = driverId
    store.trips.push(this)
  }

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }

  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
  }
}
