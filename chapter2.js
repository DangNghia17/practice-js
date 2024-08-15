// Exercise 1: Looping a Triangle
// Write a loop that makes seven calls to console.log to output a triangle:

console.log("Exercise 1: Looping a Triangle");

let triangle = "";
for (let i = 0; i < 7; i++) {
  triangle += "#";
  console.log(triangle);
}

// Exercise 2: FizzBuzz
// Write a program that prints all numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number.
// For numbers divisible by 5 (and not 3), print "Buzz" instead.
// For numbers divisible by both 3 and 5, print "FizzBuzz".

console.log("\nExercise 2: FizzBuzz");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Exercise 3: Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid, there is either a space or a # character.
// The characters should form a chessboard pattern.

console.log("\nExercise 3: Chessboard");

let size = 8;
let chessboard = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) {
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  chessboard += "\n";
}

console.log(chessboard);
