function produceDrivingRange(distance) {
  return function(start, end) {

    let tripStart = parseInt(start);
    let tripEnd = parseInt(end);
    let trip = Math.abs(tripEnd-tripStart);
    let difference = distance - trip;
    if(difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare*percent;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
