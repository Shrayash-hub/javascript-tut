// =================== Singleton Objects ===================
/*
 * Singleton → An object is called a singleton if it has only one instance.
 * Objects created using object literals `{}` are NOT singletons.
 * Objects created using the `Object.create()` method ARE singletons.
 */

// Creating an object using object literals (NOT a singleton)
const JsUser = {
    name: "shrey",   // Key-Value pair
    "full name": "shrey Awasthi", // Property with space (must be accessed using bracket notation)
    age: 18,
    location: "UP",
    email: "ShreyNotfound@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// =================== Using a Symbol in an Object ===================

// Symbols are unique identifiers in JavaScript
const mySum = Symbol("Key1"); 

// Adding a Symbol as a key in an object (correct syntax)
JsUser[mySum] = "mysum1"; 

// =================== Accessing Object Properties ===================

console.log(JsUser.email);  // ✅ Dot notation
console.log(JsUser["email"]); // ✅ Bracket notation (useful for properties with spaces)

// ❌ This will cause an error because "full name" has a space
// console.log(JsUser."full name");

// ✅ Correct way to access "full name" property
console.log(JsUser["full name"]);

// ✅ Correct way to access the Symbol key value
console.log(JsUser[mySum]); 

// =================== Modifying Object Properties ===================

JsUser.email = "Shreyof@gmail.com"; // Modifying an existing property
console.log(JsUser.email); // Output: "Shreyof@gmail.com"

// ❌ Freezing the object to prevent modification (uncomment to test)
// Object.freeze(JsUser);

// =================== Adding Methods to an Object ===================

// Adding a method to the object
JsUser.greeting = function() {
    console.log("Hello JS user");
};

// Adding a method that uses `this` to refer to object properties
JsUser.greetingtwo = function() {
    console.log(`Hello JS user, ${this.name}`); // `this.name` refers to `JsUser.name`
};

// =================== Calling Object Methods ===================

JsUser.greeting(); // Output: "Hello JS user"
JsUser.greetingtwo(); // Output: "Hello JS user, shrey"
