// Practice ve Classes
class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    
    drive() {
      console.log(`The ${this.make} ${this.model} is driving.`);
    }
  }
  
  const myCar = new Car("Toyota", "Corolla");
  myCar.drive(); 
  