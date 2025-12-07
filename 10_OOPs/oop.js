/* ==========================================================================
   JAVASCRIPT CONCEPTS: OBJECT LITERALS, 'THIS', AND CONSTRUCTOR FUNCTIONS
   ==========================================================================
*/

// --------------------------------------------------------------------------
// 1. OBJECT LITERALS
// --------------------------------------------------------------------------
// An Object Literal is a comma-separated list of key-value pairs wrapped in curly braces.
// It is used when you need to create a specific, single object.

const user = {
    // Properties: Variables attached to the object
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    // Method: A function attached to the object
    getUserDetails: function(){
        // CONCEPT: 'this' inside an object method
        // When used inside an object method, 'this' refers to the object itself (the 'user' object).
        // Without 'this', JS wouldn't know if 'username' is a global variable or the property of this object.
        
        // console.log(`Username: ${this.username}`); // Correct way to access the property
        console.log(this); // Prints the entire 'user' object structure
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


// --------------------------------------------------------------------------
// 2. THE GLOBAL 'THIS' CONTEXT
// --------------------------------------------------------------------------
// The value of 'this' changes depending on where you use it.

// console.log(this);

/* - In a Browser (e.g., Chrome Console): 'this' refers to the 'Window' object (the global scope).
   - In Node.js (Standalone file): 'this' refers to an empty object {}, because Node treats files as modules.
*/


// --------------------------------------------------------------------------
// 3. CONSTRUCTOR FUNCTIONS
// --------------------------------------------------------------------------
// Problem: If we need 1,000 users, copying the 'user' object literal 1,000 times is messy.
// Solution: A Constructor Function acts as a "Blueprint" to create multiple instances.

function User(username, loginCount, isLoggedIn){
    // 'this' refers to the NEW empty object that will be created when we use 'new'.
    
    // Left side (this.username): The property key in the new object.
    // Right side (username): The value passed into the function argument.
    this.username = username; 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // NOTE: When using the 'new' keyword, 'return this' is IMPLICIT (automatic).
    // It is written here explicitly for clarity, but the code works without it.
    return this; 
}


// --------------------------------------------------------------------------
// 4. THE 'new' KEYWORD (Crucial Concept)
// --------------------------------------------------------------------------
// The 'new' keyword triggers a specific 4-step algorithm:

// Step 1: A new, empty object is created in memory.
// Step 2: The 'this' context is bound to that new object.
// Step 3: The function executes, adding the properties (username, loginCount) to the object.
// Step 4: The function automatically returns the object.

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// CONCEPT: Instances are Independent
// 'userOne' and 'userTwo' are completely separate boxes in memory.
// Changing 'userOne' will NEVER affect 'userTwo'.
// Without 'new', userTwo would overwrite userOne in the global context.


// --------------------------------------------------------------------------
// 5. THE CONSTRUCTOR PROPERTY
// --------------------------------------------------------------------------

console.log(userOne.constructor);

/* Output: [Function: User]
   
   Every object created with 'new' keeps a reference to the function that created it.
   This property is literally saying: "I was built using the User() blueprint."
*/