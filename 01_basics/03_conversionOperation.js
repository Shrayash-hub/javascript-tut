// ==================== Type Conversion Examples ====================

let score = "shrey"
// In real applications, we often get values from user input or API responses
// For example, when getting data from a form or API:
// const {score} = req.body
// In such cases, we don't know the exact type of data we're receiving

console.log(typeof score);  // Outputs: "string"

// Converting to Number using Number() function
let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // Outputs: "number"
console.log(valueInNumber);         // Outputs: NaN (Not a Number)

// Number Conversion Rules:
// "33" => 33         (Valid number string converts to number)
// "33abc" => NaN     (Invalid number string converts to NaN)
// true => 1          (Boolean true converts to 1)
// false => 0         (Boolean false converts to 0)

// ==================== Boolean Conversion ====================

let isLoggedIn = "shrey"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  // Outputs: true

// Boolean Conversion Rules:
// "" (empty string) => false
// "shrey" (non-empty string) => true
// 0 => false
// 1 => true
// null => false
// undefined => false

// ==================== String Conversion ====================

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)  // Outputs: "string"

// String Conversion Rules:
// 33 => "33"
// true => "true"
// false => "false"
// null => "null"
// undefined => "undefined"

// ==================== Operations ====================

// Arithmetic Operations
let value = 3
let negValue = -value
console.log(negValue);  // Outputs: -3

console.log(2+2);   // Basic addition: 4
console.log(2**2);  // Exponentiation (2 to the power 2): 4

// String Concatenation
let str1 = "hello"
let str2 = "shrey"
let str3 = str1 + str2
console.log(str3);  // Outputs: "helloshrey"

// Type Coercion in Operations
console.log("1" + 2);     // Outputs: "12" (string concatenation)
console.log(1 + "2");     // Outputs: "12" (string concatenation)
console.log("1" + 2 + 2); // Outputs: "122" (string concatenation from left to right)
console.log(1 + 2 + "2"); // Outputs: "32" (arithmetic first, then string concatenation)

// Complex Operations
console.log((3 + 4) * 5 % 3);  // Outputs: 2
// 1. 3 + 4 = 7
// 2. 7 * 5 = 35
// 3. 35 % 3 = 2 (remainder after dividing by 3)

// Unary Plus Operations
console.log(+true);  // Outputs: 1 (converts boolean to number)
console.log(+"");    // Outputs: 0 (converts empty string to number)

// Multiple Assignment
let num1, num2, num3
num1 = num2 = num3 = 2 + 2
// All variables are assigned the value 4

// Increment Operations
let gameCounter = 100
++gameCounter;  // Pre-increment: increases value by 1
console.log(gameCounter)  // Outputs: 101

// Note on Increment Operators:
// ++gameCounter (pre-increment): increases value before using it
// gameCounter++ (post-increment): uses value first, then increases it