/* ==========================================================================
   CONCEPT 1: FUNCTIONS ARE OBJECTS & GLOBAL PROTOTYPE INJECTION
   ========================================================================== 
   In JavaScript, the inheritance mechanism is based on Prototypes, not classes.
   Every object is linked to a prototype object, from which it can inherit methods and properties.
*/

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        // 'this' refers to the 'heroPower' object instance
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


// --- INJECTION 1: Object.prototype ---
// Since ALL things in JS (objects, arrays, functions, strings) ultimately inherit from Object.prototype,
// placing a method here makes it GLOBALLY AVAILABLE.
Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

// --- INJECTION 2: Array.prototype ---
// Placing a method here makes it ONLY available to Arrays and objects that inherit from Array.
// Plain objects like 'heroPower' will NOT have this method.
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello from Array`);
}


// Testing the chain look-up:
// heroPower (an Object) can access hitesh() via Object.prototype
// heroPower.hitesh() 

// myHeros (an Array) can access hitesh() (via Object.prototype) and heyHitesh() (via Array.prototype)
// myHeros.hitesh()
// myHeros.heyHitesh()

// heroPower (an Object) CANNOT access heyHitesh() because Array.prototype is not in its chain.
// heroPower.heyHitesh() // <-- This will throw an error


/* ==========================================================================
   CONCEPT 2: PROTOTYPAL INHERITANCE (OBJECT LINKING)
   ========================================================================== 
   When you look for a property on an object, JS checks the object itself, 
   then its prototype, then its prototype's prototype, and so on up the chain.
*/

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // OLD/LEGACY WAY: This manually sets the prototype of TASupport to TeachingSupport.
    // TASupport can now access properties of TeachingSupport.
    __proto__: TeachingSupport 
}

// Manually setting Teacher's prototype to User.
// Teacher can now access properties of User (like 'name').
Teacher.__proto__ = User 


// --- MODERN SYNTAX ---
// Object.setPrototypeOf is the modern, preferred way to link two objects.
// It achieves the same result as __proto__, setting the prototype of the first object (TeachingSupport)
// to the second object (Teacher).
Object.setPrototypeOf(TeachingSupport, Teacher) 

/*
   The Chain established is: 
   TASupport -> TeachingSupport -> Teacher -> User -> Object.prototype
   
   E.g., TASupport.makeVideo would be found on the TeachingSupport object's prototype (Teacher).
*/



/* ==========================================================================
   CONCEPT 3: REAL-WORLD PROTOTYPE UTILITY
   ========================================================================== 
   Using String.prototype to create a custom method available on all strings.
*/

let anotherUsername = "Shrey     "

// We create a custom method 'trueLength' and attach it to the String prototype.
// Now, ALL string literals and variables can use it.
String.prototype.trueLength = function(){
    // IMPORTANT: 'this' inside a prototype method refers to the actual string instance 
    // it was called on (e.g., "Shrey     ").
    console.log(`${this}`);
    
    // .trim() removes leading/trailing whitespace before calculating length.
    console.log(`True length is: ${this.trim().length}`);
}

// The custom method is now available on instances:
anotherUsername.trueLength() // Output: True length is: 12
"Shrey".trueLength()       // Output: True length is: 6
"iceTea".trueLength()       // Output: True length is: 6