// chapter4_practice.js

// 1. Array Methods

// Add and remove elements
let todoList = [];

function remember(task) {
    todoList.push(task);
}

function getTask() {
    return todoList.shift();
}

function rememberUrgently(task) {
    todoList.unshift(task);
}

// Test the functions
remember("groceries");
remember("cleaning");
console.log(todoList); // ["groceries", "cleaning"]
console.log(getTask()); // "groceries"
console.log(todoList); // ["cleaning"]
rememberUrgently("urgent task");
console.log(todoList); // ["urgent task", "cleaning"]

// Search for values
console.log([1, 2, 3, 2, 1].indexOf(2)); // → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // → 3

// Slice arrays
console.log([0, 1, 2, 3, 4].slice(2, 4)); // → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2)); // → [2, 3, 4]

// Concatenate arrays
function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2)); // → ["a", "b", "d", "e"]

// 2. String Methods

// Basic string methods
console.log("coconuts".slice(4, 7)); // → nut
console.log("coconut".indexOf("u")); // → 5
console.log(" okay \n ".trim()); // → okay
console.log(String(6).padStart(3, "0")); // → 006

// Split and join strings
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words); // → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". ")); // → Secretarybirds. specialize. in. stomping

// Repeat strings
console.log("LA".repeat(3)); // → LALALA

// Access characters
let string = "abc";
console.log(string.length); // → 3
console.log(string[1]); // → b

// 3. Rest Parameters and Spread Syntax

// Rest parameters
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2)); // → 9

// Spread syntax
let numbers = [5, 1, 7];
console.log(max(...numbers)); // → 7
console.log(["will", ...words, "understand"]); // → ["will", "Secretarybirds", "specialize", "in", "stomping", "understand"]

// 4. The Math Object

// Random number
console.log(Math.random()); // → Random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); // → Random integer between 0 and 9

// Other Math functions
console.log(Math.ceil(2.3)); // → 3
console.log(Math.round(2.7)); // → 3
console.log(Math.abs(-5)); // → 5
console.log(Math.sqrt(16)); // → 4
console.log(Math.PI); // → 3.141592653589793

// 5. Destructuring

// Array destructuring
function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
            (n01 + n11) * (n00 + n10));
}
console.log(phi([30, 10, 5, 15])); // Example result for the phi function

// Object destructuring
let {name, age} = {name: "Faraji", age: 23};
console.log(name); // → Faraji
console.log(age); // → 23

// 6. JSON

// JSON.stringify and JSON.parse
let jsonString = JSON.stringify({squirrel: false, events: ["work", "touched tree", "pizza", "running"]});
console.log(jsonString); // → {"squirrel":false,"events":["work","touched tree","pizza","running"]}

let parsedObject = JSON.parse(jsonString);
console.log(parsedObject.events); // → ["work", "touched tree", "pizza", "running"]
