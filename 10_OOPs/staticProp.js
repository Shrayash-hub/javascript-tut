/* ==========================================================================
   CONCEPT: STATIC METHODS & PROPERTIES
   ========================================================================== 
*/

class User {
    constructor(username){
        this.username = username
    }

    // REGULAR METHOD
    // Available on every instance (object) created.
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // STATIC METHOD
    // 1. Prevents access by instances (objects like 'shrey').
    // 2. Can ONLY be called by the Class name (User.createId).
    static createId(){
        return `123`
    }
}

const shrey = new User("shrey")

// SUCCESS: Regular methods work fine.
shrey.logMe() 

// ERROR: Instances cannot see static methods.
// console.log(shrey.createId()) 
// Output: TypeError: shrey.createId is not a function


/* ==========================================================================
   CONCEPT: STATIC INHERITANCE
   ========================================================================== 
*/

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

// --- THE CRITICAL ANALYSIS ---

// 1. Does the 'Teacher' CLASS inherit the static method? 
// YES. You can call Teacher.createId()
console.log(Teacher.createId()); // Output: 123


// 2. Does the 'iphone' INSTANCE inherit the static method?
// NO. Just like the parent instance, the child instance cannot access static methods.

// The line below (from your snippet) will throw an ERROR:
// console.log(iphone.createId()); 
// Output: TypeError: iphone.createId is not a function