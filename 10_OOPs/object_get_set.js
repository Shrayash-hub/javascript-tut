/* ==========================================================================
   CONCEPT: OBJECT-BASED INHERITANCE (Object.create)
   ========================================================================== 
*/

const User = {
    // 1. DATA PROPERTIES
    // These are standard properties on the object.
    _email: 'h@hc.com',
    _password: "abc",


    // 2. GETTER (The Interceptor)
    // Even in a plain object, you can use the 'get' keyword.
    // This creates a "virtual" property called 'email'.
    get email(){
        // 'this' refers to the object calling the property (tea).
        // Since 'tea' doesn't have _email, it looks up the chain to 'User' to find it.
        return this._email.toUpperCase()
    },

    // 3. SETTER
    set email(value){
        this._email = value
    }
}

/* ==========================================================================
   THE FACTORY METHOD: Object.create()
   ========================================================================== 
*/

// This creates a new, empty object called 'tea'.
// CRITICAL: It sets the 'User' object as the PROTOTYPE of 'tea'.
// tea.__proto__ === User
const tea = Object.create(User)

console.log(tea.email); 

/* EXECUTION FLOW:
   1. JavaScript tries to access 'tea.email'.
   2. It looks for property 'email' on 'tea'. It is not there.
   3. It looks at the prototype (User). It finds the Getter 'email'.
   4. It executes the Getter.
   5. Inside Getter: 'this._email' is accessed. 
      - JS looks for '_email' on 'tea'. Not found.
      - JS looks for '_email' on prototype (User). Found ('h@hc.com').
   6. It uppercases it and returns "H@HC.COM".
*/

/* SCENARIO: What if we set the email?
   tea.email = "tea@chai.com"
   
   1. The Setter fires. 'this' is 'tea'.
   2. 'this._email = value' runs.
   3. Since we are ASSIGNING, JavaScript creates a NEW property '_email' directly on 'tea'.
   4. 'tea' now has its own '_email', shadowing the one in 'User'.
*/