/* ==========================================================================
   CONCEPT 1: FUNCTIONS ARE OBJECTS
   In JavaScript, a function is technically a special type of Object.
   You can treat it like a variable, pass it around, and even give it properties.
   ========================================================================== */

function multipleBy5(num){
    return num * 5
}

// 1. We are assigning a property 'power' to the function itself.
// This proves that functions are objects. It's stored in memory just like a key-value pair.
multipleBy5.power = 2 

console.log(multipleBy5(5)); // Output: 25 (The function executes normally)
console.log(multipleBy5.power); // Output: 2 (We access the property we attached)


// 2. The 'prototype' property.
// Every function in JS automatically gets a property called 'prototype'.
// By default, it's an empty object {} waiting for us to store methods in it.
// This is the "this" context or "context reference" for future objects created by this function.
console.log(multipleBy5.prototype); 


/* ==========================================================================
   CONCEPT 2: PROTOTYPE INJECTION & THE 'NEW' KEYWORD
   ========================================================================== */

function createUser(username, score){
    // This is the Constructor Function.
    // Its job is to set the unique data for each object.
    this.username = username
    this.score = score
}

// 3. Injecting methods into the Prototype.
// Instead of writing the function INSIDE createUser (which copies it 1000 times for 1000 users),
// we attach it to the prototype. Now, all users share ONE copy of this function.
createUser.prototype.increment = function(){
    // 'this' refers to whichever user called the function (chai or tea)
    this.score++ 
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}


/* ==========================================================================
   CONCEPT 3: EXECUTION & THE 'NEW' MAGIC
   ========================================================================== */

// SCENARIO A: Using 'new' (Correct Way)
const chai = new createUser("chai", 25)
// 1. 'new' creates a fresh object.
// 2. It links the object to 'createUser.prototype'.
// 3. It runs the function.
// 4. 'chai' now has access to .printMe() because of the link.

chai.printMe() // Output: "price is 25"


// SCENARIO B: Missing 'new' (Common Mistake)
const tea = createUser("tea", 250)

// PROBLEM:
// Without 'new', 'createUser' is just a regular function.
// It returns nothing (undefined), so 'tea' is undefined.
// Also, 'this' inside the function tried to set window.username or global.username.

// console.log(tea); // Output: undefined
// tea.printMe(); // ERROR: Cannot read properties of undefined


/* ==========================================================================
   BEHIND THE SCENES: THE 4 STEPS OF 'new'
   ========================================================================== 
   
   1. Creation: A new empty object `{}` is created in heap memory.
   
   2. Linking: The new object's internal prototype `[[Prototype]]` is linked 
      to `createUser.prototype`. This allows the object to "borrow" the 
      functions we defined earlier (increment, printMe).
   
   3. Binding: The constructor is called. The keyword `this` is pointed to 
      the new object. The code `this.username = username` runs, filling the 
      object with data.
   
   4. Returning: The object is returned automatically to the variable (`chai`).
*/