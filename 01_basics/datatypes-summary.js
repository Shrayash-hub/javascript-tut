// 7 types of primitive data types:
const score = 100; // Number
const scoreValue = 100.2; // Number (can be integer or float)
const isLoggedIn = false; // Boolean
const outsidetemp = null; // Null (represents an empty value)
let userEmail; // Undefined (variable declared but no value assigned)

const id = Symbol('123'); // Symbol (unique identifier)
const anotherId = Symbol('123'); 

console.log(id === anotherId); // Output: false (Symbols are always unique)

const bigNumber = 3456788988899889n; // BigInt (for large numbers beyond Number type limits)
console.log(typeof bigNumber); // Output: "bigint"
