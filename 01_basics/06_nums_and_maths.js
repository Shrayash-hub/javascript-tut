// Declare a constant variable 'score' and assign it the value 400
const score = 400;  
console.log(score); // Output: 400

// Creating a Number object with the value 100
const balance = new Number(100);
console.log(balance); // Output: [Number: 100]

// Converting 'balance' to a string and checking its length
console.log(balance.toString().length); // Output: 3 (because "100" has 3 characters)

// Converting 'balance' to a fixed decimal representation (1 decimal place)
console.log(balance.toFixed(1)); // Output: "100.0" (1 decimal precision)

// Declaring a floating-point number
const otherNumber = 123.8966;

// Fix: Corrected the variable name (from `ohterNumber` to `otherNumber`)
console.log(otherNumber.toPrecision(4)); // Output: "123.9" (Rounds to 4 significant figures)

// Declaring a large number
const hundreds = 100000;

// Formatting the number with locale-specific separators (Indian numbering system)
console.log(hundreds.toLocaleString('en-IN')); // Output: "1,00,000" (Indian format with lakh separator)

// ------------------ Math Operations --------------------------

console.log(Math); // Output: Math object (contains various mathematical functions)

// Returns the absolute (positive) value
console.log(Math.abs(-4)); // Output: 4

// Rounds the number to the nearest integer
console.log(Math.round(4.6)); // Output: 5 (rounds up)
console.log(Math.round(4.4)); // Output: 4 (rounds down)

// Rounds up to the next largest integer
console.log(Math.ceil(4.2)); // Output: 5

// Rounds down to the next smallest integer
console.log(Math.floor(4.9)); // Output: 4

// Returns the smallest number from the given set
console.log(Math.min(4, 3, 6, 8)); // Output: 3

// Returns the largest number from the given set
console.log(Math.max(4, 3, 6, 8)); // Output: 8

// Generates a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: A random number between 0 and 1

// Generates a random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); 
// Explanation:
// - Math.random() generates a value between 0 and 1
// - Multiplying by 10 gives a range between 0 and 9.999
// - Math.floor() rounds it down to an integer between 0 and 9
// - Adding 1 shifts the range to 1-10

// ------------------ Random number between 10 and 20 --------------------------

// Declaring min and max values
const min = 10;
const max = 20;

// Generates a random integer between min (10) and max (20)
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// Explanation:
// - (max - min + 1) ensures the range includes both min and max
// - Math.random() generates a value between 0 and 1
// - Multiplying by (max - min + 1) shifts the range to desired values
// - Math.floor() rounds the result to an integer
// - Adding 'min' shifts the range from 0-based to min-based













