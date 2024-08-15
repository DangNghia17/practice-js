// 1. Working with Numbers
let number1 = 13;
let number2 = 9.81;
let largeNumber = 2.998e8;
let remainder = 314 % 100;

console.log("Number 1:", number1); // 13
console.log("Number 2:", number2); // 9.81
console.log("Large Number:", largeNumber); // 299800000
console.log("Remainder of 314 / 100:", remainder); // 14

// 2. Basic Arithmetic Operations
let addition = 100 + 4 * 11;
let multiplication = (100 + 4) * 11;
let division = 144 / 12;
let subtraction = 100 - 50;

console.log("Addition:", addition); // 144
console.log("Multiplication:", multiplication); // 1144
console.log("Division:", division); // 12
console.log("Subtraction:", subtraction); // 50

// 3. Working with Strings
let greeting = "Hello";
let myName = "Nghĩa";
let welcomeMessage = greeting + ", " + myName + "!";
let multilineString = `This is line one
And this is line two`;

console.log("Welcome Message:", welcomeMessage); // Hello, Nghĩa!
console.log("Multiline String:", multilineString);

// 4. String Concatenation using template literals
let age = 25;
let aboutMe = `My name is ${myName}, and I am ${age} years old.`;

console.log(aboutMe); // My name is Nghĩa, and I am 25 years old.

// 5. Boolean Values and Comparisons
let isJavaScriptFun = true;
let isLearningEasy = false;
let comparison1 = 3 > 2;
let comparison2 = "Aardvark" < "Zoroaster";

console.log("Is JavaScript Fun?", isJavaScriptFun); // true
console.log("Is Learning Easy?", isLearningEasy); // false
console.log("Is 3 greater than 2?", comparison1); // true
console.log("Is 'Aardvark' less than 'Zoroaster'?", comparison2); // true

// 6. Logical Operators
let andOperator = isJavaScriptFun && isLearningEasy;
let orOperator = isJavaScriptFun || isLearningEasy;
let notOperator = !isLearningEasy;

console.log("AND Operator:", andOperator); // false
console.log("OR Operator:", orOperator); // true
console.log("NOT Operator:", notOperator); // true

// 7. Conditional (Ternary) Operator
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";

console.log(canVote); // Yes, you can vote.

// 8. Type Conversion and Comparisons
console.log(8 * null); // 0
console.log("5" - 1); // 4
console.log("5" + 1); // 51
console.log("five" * 2); // NaN
console.log(false == 0); // true
console.log(null == undefined); // true
console.log(null == 0); // false

// 9. Short-Circuiting of Logical Operators
let defaultName = null || "user";
let actualName = "Nghĩa" || "user";

console.log("Default Name:", defaultName); // user
console.log("Actual Name:", actualName); // Nghĩa
