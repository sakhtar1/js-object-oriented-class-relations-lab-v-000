class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
  }
}


class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    if(driver){
      this.driverID = driver.id
    }
    if(passenger){
      this.passengerId = passenger.id
    }
  } 
  setDriver(driver){
    this.driverId = driver.id
  } 

  driver(){
    return trip.drivers.filter(driver => {
      return driver.tripId == this.id
    })
  }
}