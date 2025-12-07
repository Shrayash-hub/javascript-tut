/* ==========================================================================
   CONCEPT: THE .call() METHOD AND CONTEXT PASSING
   ========================================================================== 
*/

function SetUsername(username){
    // inside here, 'this' depends on HOW the function is called.
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    
    // --- THE MAGIC LINE ---
    // If we just wrote: SetUsername(username)
    // The 'this' inside SetUsername would be the Global Object (Window) or undefined.
    // It would NOT affect the 'createUser' object we are building.

    // By using .call(this, ...), we are saying:
    // "Run the SetUsername function, but use MY 'this' (the new object) inside it."
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const hello = new createUser("Microsoft", "Shrey@Awasthi.in" , "123")
console.log(hello)

/* OUTPUT:
createUser {
  username: 'Microsoft',
  email: 'Shrey@Awasthi.in',
  password: '123'
}
*/

/*
Why do we need .call() here?
The Goal: You want createUser to handle the email and password, but you want to offload the task of setting the username to the SetUsername function.

The Problem: In JavaScript, functions have their own separate execution contexts. If you call SetUsername("Microsoft") normally inside createUser, SetUsername doesn't know about the new object you are creating. It will try to set username on the global window object.

The Solution (.call): The .call method explicitly passes the reference of the current object (this) to the other function.

A Mental Model (Analogy)
Imagine you (the createUser function) are filling out a form (the Object).

You have the pen (this).

You reach the "Username" section.

Instead of writing it yourself, you hand your pen (this) to your friend (SetUsername).

Your friend uses your pen to write the name on your form.

Your friend hands the pen back.

You continue filling out the Email and Password.

If you didn't use .call(), it would be like shouting the name to your friend, and they write it on the wall (Global Object) instead of your form.
*/