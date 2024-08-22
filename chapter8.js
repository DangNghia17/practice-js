// bugs_and_errors.js

// 1. Debugging example
function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        n /= base;
    } while (n > 0);
    return sign + result;
}

console.log("Debugging example:");
console.log(numberToString(13, 10));  // Expected output: 13

// 2. Strict mode example
function strictModeExample() {
    "use strict";
    try {
        // Missing 'let' will cause an error
        counter = 0;
        console.log("Counter value:", counter);
    } catch (error) {
        console.log("Error in strict mode:", error.message);
    }
}

console.log("\nStrict mode example:");
strictModeExample();

// 3. Type checking with comments
// Function that adds two numbers
// (number, number) → number
function add(a, b) {
    return a + b;
}

console.log("\nType checking example:");
console.log(add(5, 3));  // Expected output: 8

// 4. Exception handling example
class InputError extends Error {}

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() === "left") return "L";
    if (result.toLowerCase() === "right") return "R";
    throw new InputError("Invalid direction: " + result);
}

function look() {
    try {
        let direction = promptDirection("Which way?");
        return direction === "L" ? "a house" : "two angry bears";
    } catch (error) {
        if (error instanceof InputError) {
            console.log("Error:", error.message);
        } else {
            console.log("Unexpected error:", error);
        }
    }
}

console.log("\nException handling example:");
console.log("You see", look());

// 5. Error propagation and cleanup
const accounts = {
    a: 100,
    b: 0,
    c: 20
};

function getAccount() {
    let accountName = prompt("Enter an account name");
    if (!accounts.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}

function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if (progress === 1) {
            accounts[from] += amount;
        }
    }
}

console.log("\nError propagation and cleanup example:");
try {
    transfer("a", 50);
    console.log("Transfer successful:", accounts);
} catch (error) {
    console.log("Transfer failed:", error);
}
