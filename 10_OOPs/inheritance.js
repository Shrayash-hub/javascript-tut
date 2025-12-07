/* ==========================================================================
   CONCEPT: INHERITANCE (EXTENDS & SUPER)
   ========================================================================== 
*/

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// 1. The 'extends' Keyword
// This tells JS: "Teacher is a specialized version of User."
// Teacher will inherit functionality (like logMe) from User.
class Teacher extends User {
    
    constructor(username, email, password){
        
        // 2. The 'super' Keyword (CRITICAL)
        // Before we can use 'this' in a child class constructor, we MUST call super().
        // super(username) calls the Parent's constructor (User).
        // It passes 'username' up to User, which sets 'this.username'.
        super(username) 
        
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


/* ==========================================================================
   EXECUTION & PROTOTYPE CHAIN CHECK
   ========================================================================== 
*/

// Creating a Teacher (Child Class)
const shrey = new Teacher("shrey", "shrey@teacher.com", "123")

// Accessing methods
shrey.addCourse() // Found directly in Teacher class.
shrey.logMe()     // NOT in Teacher. JS looks up the chain to User and finds it there.


// Creating a User (Parent Class)
const paratha = new User("paratha")
paratha.logMe() 
// paratha.addCourse() // ERROR: Parents cannot access Child methods.


/* ==========================================================================
   CONCEPT: instanceof (The DNA Check)
   ========================================================================== 
*/

// 'shrey' was created using Teacher.
console.log(shrey instanceof Teacher); // true

// 'shrey' is ALSO an instance of User, because Teacher extends User.
console.log(shrey instanceof User);    // true

// 'paratha' is a User, but NOT a Teacher.
console.log(paratha instanceof Teacher); // false