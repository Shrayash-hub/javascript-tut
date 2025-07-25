// ========== Understanding `this` in Objects ==========

const user = {
    username: "shrey",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // `this` refers to the `user` object
        console.log(this); // Logs the entire `user` object (current context)
    }
}

// Calling the method
// user.welcomeMessage(); // Output: "shrey, welcome to website" + logs `user` object

// Changing the username
// user.username = "sam";
// user.welcomeMessage(); // Output: "sam, welcome to website"

// `this` in the global scope (Node.js environment)
console.log(this); // Output: `{}` (empty object in Node.js, `window` in browsers)


// ========== `this` in Regular Functions ==========

// Function declaration
// function chai() {
//     let username = "shrey";
//     console.log(this.username); // ❌ `this` in a function does NOT refer to the function itself
// }

// chai(); // Output: `undefined` (in strict mode) or `global object` (non-strict mode)


// Function expression
// const chai = function() {
//     let username = "shrey";
//     console.log(this.username); // ❌ `this` does not work as expected inside functions
// }


// ========== Arrow Functions and `this` ==========

const chai = () => {
    let username = "shrey";
    console.log(this.username); // ❌ `this` in arrow functions does NOT refer to the object
}

// chai(); // Output: `undefined` (because `this` does NOT refer to the function's scope)

// In arrow functions, `this` is lexically inherited, meaning it uses `this` from the outer scope.
// In global scope, `this` in an arrow function will refer to the global object (`window` in browsers, `{}` in Node.js).


// ========== Arrow Functions: Explicit vs. Implicit Return ==========

// ✅ Explicit return (requires `return` keyword)
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4)); // Output: 7


// ✅ Implicit return (removes `return` keyword and `{}`)
const addTwoImplicit = (num1, num2) => num1 + num2;
console.log(addTwoImplicit(3, 4)); // Output: 7


// ✅ Implicit return with parentheses (useful for returning objects)
const addTwoWithParens = (num1, num2) => (num1 + num2);
console.log(addTwoWithParens(3, 4)); // Output: 7


// ✅ Returning an object with an arrow function
const getUser = () => ({ username: "shrey" });
console.log(getUser()); // Output: { username: "shrey" }
