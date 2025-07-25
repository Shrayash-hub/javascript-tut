// ========== Immediately Invoked Function Expression (IIFE) ==========

// IIFE is used to immediately execute a function after its declaration.
// It helps prevent **global scope pollution** by keeping variables inside its scope.

// ======= Named IIFE =======
(function chai() {  // This is a named IIFE because the function has a name (`chai`).
    console.log(`DB CONNECTED`); 
})(); 
// Output: "DB CONNECTED"

// Explanation:
// - `(function chai() { ... })` defines an anonymous function and wraps it in parentheses.
// - `();` immediately executes the function.

// ======= Anonymous IIFE with Parameters =======
((name) => { // This is an anonymous IIFE because it has no name.
    console.log(`DB CONNECTED TWO ${name}`);
})("shrey"); 
// Output: "DB CONNECTED TWO shrey"

// Explanation:
// - This is an **arrow function** inside an IIFE.
// - The function takes `name` as a parameter and executes immediately with `"shrey"` as the argument.

