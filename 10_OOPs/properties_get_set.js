/* ==========================================================================
   CONCEPT: OLD SCHOOL GETTERS/SETTERS (Object.defineProperty)
   ========================================================================== 
   This is the "under the hood" engine. Even when you use modern classes, 
   JavaScript is essentially doing this logic behind the scenes.
*/

function User(email, password){
    
    // 1. PRIVATE STORAGE ("Backing Fields")
    // Just like in the Class example, we need variables to hold the actual data.
    // We use the underscore (_) convention to indicate these are "internal".
    this._email = email;
    this._password = password


    // 2. DEFINING THE 'email' PROPERTY MANUALY
    // Syntax: Object.defineProperty(context, 'property_name', { configuration })
    Object.defineProperty(this, 'email', {
        
        // GETTER: Fires when code reads: console.log(chai.email)
        get: function(){
            // Intercepts the request and modifies the data before returning it.
            return this._email.toUpperCase()
        },

        // SETTER: Fires when code writes: chai.email = "..."
        set: function(value){
            // Takes the input and saves it to our internal storage variable.
            this._email = value
        }
    })


    // 3. DEFINING THE 'password' PROPERTY
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}


/* ==========================================================================
   EXECUTION
   ========================================================================== 
*/

const chai = new User("chai@chai.com", "chai")

// READING 'email':
// 1. JS looks for the property 'email'.
// 2. It sees it was created via defineProperty with a 'get' function.
// 3. It runs the function -> returns "CHAI@CHAI.COM".
console.log(chai.email); 


/* KEY DIFFERENCE FROM CLASSES:
   - In Classes: You just write `get email() { ... }`.
   - In Functions: You must use `Object.defineProperty(this, 'email', { ... })`.
   - The result is identical, but this syntax is much more verbose.
*/