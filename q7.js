class Vehicle {
  wheels;
  static count = 0;
  constructor(wheels) {
    this.wheels = wheels;
    this.increaseCount();
  }

  increaseCount() {
    Vehicle.count = Vehicle.count + 1;
  }
}

let car = new Vehicle(4);
let scooty = new Vehicle(2);
console.log(Vehicle.count);