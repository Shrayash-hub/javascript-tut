// ==================== JavaScript Basics ====================

"use strict"; // Enables strict mode in JavaScript
// Strict mode helps catch common coding mistakes and prevents use of certain error-prone features
// It makes debugging easier and prevents accidental global variables

//alert(3+3) // This line is commented out because we're running in Node.js environment
// alert() is a browser-specific function and won't work in Node.js

// console.log() is used to output/print values to the console
// It's available in both browser and Node.js environments
console.log(3+3);  // Performs arithmetic addition and prints 6
console.log("shrey"); // Prints the string "shrey"

// ==================== Variable Declaration ====================

// 'let' is used to declare variables that can be reassigned
// Modern JavaScript prefers 'let' over 'var' for better block scoping
let name = "hitesh"    // Declaring a string variable
let age = 18          // Declaring a number variable
let isLoggerdIn = false // Declaring a boolean variable

// ==================== JavaScript Data Types ====================

// JavaScript has 8 basic data types:

// 1. Number: 
//    - Used for both integer and floating-point numbers
//    - Range: -(2^53 - 1) to (2^53 - 1)
//    - Special values: Infinity, -Infinity, NaN

// 2. BigInt:
//    - Used for integers of arbitrary length
//    - Created by adding 'n' at the end of an integer

// 3. String:
//    - Used for text data
//    - Can be enclosed in single quotes (''), double quotes (""), or backticks (``)

// 4. Boolean:
//    - Has only two values: true and false
//    - Used for logical operations

// 5. Null:
//    - Represents "nothing" or "empty"
//    - Standalone value
//    - typeof null returns 'object' (this is a known JavaScript quirk/bug)

// 6. Undefined:
//    - Represents a variable that has been declared but not assigned a value
//    - typeof undefined returns 'undefined'

// 7. Symbol:
//    - Used to create unique identifiers for objects
//    - Created using Symbol()

// 8. Object:
//    - Used to store collections of data and more complex entities
//    - More complex data structure

// ==================== Type Checking ====================

// typeof operator returns the type of a value
console.log(typeof "shrey");    // Returns "string"
console.log(typeof null);       // Returns "object" (a known JavaScript quirk)
console.log(typeof undefined);  // Returns "undefined"

// Note: The typeof operator always returns a string
// Common typeof return values:
// - "number" for numbers
// - "string" for strings
// - "boolean" for true/false
// - "object" for objects, arrays, and null
// - "undefined" for undefined
// - "function" for functions
// - "symbol" for Symbols