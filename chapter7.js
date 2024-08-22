// chapter7_objects.js

// 1. Encapsulation example
function createPerson(name, age) {
    let person = {};
    person.getName = function() {
        return name;
    };
    person.getAge = function() {
        return age;
    };
    return person;
}

let person1 = createPerson("Alice", 30);
console.log("Encapsulation example:");
console.log("Name:", person1.getName()); 
console.log("Age:", person1.getAge());  

// 2. Methods example
let car = {
    make: "Toyota",
    model: "Camry",
    drive() {
        return `${this.make} ${this.model} is driving.`;
    }
};

console.log("\nMethods example:");
console.log(car.drive());

// 3. Prototypes example
function Animal(name) {
    this.name = name;
}

Animal.prototype.sayHello = function() {
    return `Hello, I am ${this.name}.`;
};

let animal = new Animal("Elephant");
console.log("\nPrototypes example:");
console.log(animal.sayHello()); 

// 4. Classes example
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

let person2 = new Person("Bob", 25);
console.log("\nClasses example:");
console.log(person2.greet()); 