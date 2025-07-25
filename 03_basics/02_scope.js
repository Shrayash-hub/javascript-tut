// ========== Variable Scope and Hoisting ==========

// ✅ Global variable
let a = 300;
console.log("Global scope a: ", a); // Output: Global scope a:  300

// ✅ Block Scope Example
if (true) {
    let a = 10;  // Block scope variable (only accessible inside this block)
    const b = 20; // Block scope variable
    var c = 30;   // Function scope variable (accessible outside this block)
    console.log("Inner a: ", a); // Output: Inner a:  10
}

// console.log(a);  // ❌ Error: ReferenceError (if uncommented) - "a" inside block is not accessible
// console.log(b);  // ❌ Error: ReferenceError (if uncommented) - "b" is block-scoped
console.log(c);  // ✅ Output: 30 (since `var` is function-scoped, it is accessible outside the block)


// ========== Nested Functions and Scope Chain ==========

function one() {
    const username = "shrey"; // `username` is only accessible inside function `one`

    function two() {
        const website = "youtube"; // `website` is only accessible inside function `two`
        console.log(username);  // ✅ Accessible because `two()` is inside `one()`
    }
    // console.log(website); // ❌ Error: `website` is not accessible outside `two()`
    
    two(); // ✅ Function call to `two`
}

// one(); // Uncomment to run: Output: shrey


// ========== Scope with `if` Statements ==========

if (true) {
    const username = "shrey"; // Block-scoped variable
    if (username == "shrey") {
        const website = "youtube"; // Block-scoped variable
        console.log(username + website); // ✅ Output: shreyyoutube
    }
    // console.log(website); // ❌ Error: `website` is not accessible outside the inner block
}

// console.log(username); // ❌ Error: `username` is not accessible outside the if block


// ========== Hoisting and Function Expressions ==========

// ✅ Hoisting in Function Declaration
addone(5); // ✅ This works due to hoisting

function addone(num) {
    return num + 1;
}

// ✅ Function Declaration is hoisted to the top, so you can call it before defining


// ❌ Function Expression and Hoisting

// addTwo(5); // ❌ Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) { // Function Expression
    return num + 2;
};

// ✅ Function Expressions are NOT hoisted, meaning you cannot call `addTwo()` before its declaration
