/* ==========================================================================
   PART 1: MODERN ES6 SYNTAX (Syntactic Sugar)
   ========================================================================== 
   This is how we write code today. It looks cleaner and resembles languages 
   like Java or C++, but it is hiding the complexity of prototypes.
*/

// class User {
//     // The 'constructor' is a special keyword method. 
//     // It runs immediately when you use 'new User()'.
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     // Methods are written directly inside the class block.
//     // IMPORTANT: JavaScript automatically takes these and attaches them 
//     // to User.prototype behind the scenes!
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const shrey = new User("shrayash", "shrayash@gmail.com", "123")
// console.log(shrey.encryptPassword());
// console.log(shrey.changeUsername());


/* ==========================================================================
   PART 2: BEHIND THE SCENES (The "Real" JavaScript)
   ========================================================================== 
   This is how the browser actually interprets the Class above.
   Before 2015, this was the ONLY way to write object-oriented code in JS.
*/

function User(username, email, password){
    // This function acts exactly like the 'constructor' method in the class above.
    this.username = username
    this.email = email
    this.password = password
}

// In the Class syntax, you wrote methods inside the brackets.
// In reality, JS is doing this manually for you:
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


/* ==========================================================================
   COMPARISON & SUMMARY
   ========================================================================== 
*/

const hello = new User("kittu", "kittu@gmail.com","123")

console.log(hello.encryptPassword()) 
// Output: 123abc

console.log(hello.changeUsername()) 
// Output: KITTU


/* KEY TAKEAWAY:
   1. The 'class' keyword did NOT introduce a new inheritance model to JavaScript.
   2. JavaScript remains "Prototype-based", not "Class-based".
   3. The 'class' syntax is just a cosmetic improvement to make code easier to read and organize.
*/