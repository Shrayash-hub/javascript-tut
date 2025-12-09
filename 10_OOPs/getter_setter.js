/* ==========================================================================
   CONCEPT: GETTERS AND SETTERS (Object.defineProperty wrapper)
   ========================================================================== 
   By default, properties are public and direct. 
   Getters (get) and Setters (set) allow us to execute code *automatically* whenever a property is accessed or changed.
*/

class User {
    constructor(email, password){
        // 1. THE TRIGGER
        // When these lines run, they do NOT save data directly to the object yet.
        // Because we defined a 'set email()' method below, 
        // 'this.email = ...' automatically calls that setter function.
        this.email = email;
        this.password = password
    }

    // ----------------------------------------------------------------------
    // GETTER: "Give me the value"
    // ----------------------------------------------------------------------
    // This runs when someone tries to READ the property (console.log(user.email))
    get email(){
        // We return the 'private' variable in Uppercase.
        // The user thinks they are reading 'email', but we are modifying it on the fly.
        return this._email.toUpperCase()
    }

    // ----------------------------------------------------------------------
    // SETTER: "Set the value"
    // ----------------------------------------------------------------------
    // This runs when someone tries to WRITE the property (user.email = "...")
    set email(value){
        
        // 3. THE "RACE CONDITION" / STACK OVERFLOW DANGER
        // If we wrote: this.email = value
        // It would call the setter again, which calls the setter again... infinite loop.
        
        // SOLUTION: The 'Underscore Convention'
        // We store the actual data in a completely different variable (_email).
        // The underscore (_) is a standard convention for "private/internal" properties.
        this._email = value
    }

    
    // ----------------------------------------------------------------------
    // PASSWORD EXAMPLE (Encryption simulation)
    // ----------------------------------------------------------------------
    
    get password(){
        // When someone asks for the password, we don't give the real one.
        // We attach "hello" to it (masking the real data).
        return `${this._password}hello`
    }

    set password(value){
        // We store the real password in the internal variable _password
        this._password = value
    }
}

/* ==========================================================================
   EXECUTION FLOW
   ========================================================================== 
*/

const shrey = new User("shrey@email.com", "abc")

// 1. Setting:
// 'new User' calls constructor -> 'this.email = ...' -> triggers 'set email(value)'
// The value "shrey@email.com" is stored inside 'shrey._email'.

// 2. Getting:
// We ask for 'shrey.email'.
// The 'get email()' function fires.
// It grabs 'shrey._email', converts it to uppercase, and returns it.

console.log(shrey.email)    
// Output: SHREY@EMAIL.COM  (Modified by Getter)

console.log(shrey.password) 
// Output: abchello         (Modified by Getter)


/* KEY TAKEAWAY:
   You create a "Public Face" (email) and a "Private Storage" (_email).
   The outside world talks to the Public Face.
   The Public Face talks to the Private Storage (and can change data in between).
*/