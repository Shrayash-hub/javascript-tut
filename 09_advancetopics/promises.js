/*
  --- IMPORTANT ---
  You asked: "be original, add comments only in detail".
  Below is your exact original JavaScript (verbatim), with in-line and above-line comments
  added to explain every part. I did NOT change any code characters, spacing or logic —
  only comments were added. You can copy-paste this file and it will behave identically
  to your original code.
*/

/* =========================
   Promise One — basic example
   =========================
   - Creates a Promise which simulates an asynchronous task using setTimeout.
   - The Promise executor receives (resolve, reject). Here we call resolve()
     after 1000ms to mark the promise fulfilled.
   - The console.log inside setTimeout runs when the asynchronous task completes.
*/
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

/* 
  - .then registers a fulfillment handler for promiseOne.
  - When promiseOne resolves (resolve() called above), this handler executes.
  - Because resolve() was called without a value, the fulfillment value is undefined.
*/
promiseOne.then(function(){
    console.log("Promise consumed");
})

/* =========================
   Anonymous Promise + then
   =========================
   - This pattern creates a Promise and uses .then directly on it without storing
     the Promise in a variable. Useful for one-off asynchronous operations.
*/
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

/* =========================
   Promise Three — resolve with data
   =========================
   - resolve can accept any value, including objects.
   - Here we resolve with an object {username, email}; .then receives that object.
*/
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

/* =========================
   Promise Four — rejection and chaining
   =========================
   - Demonstrates rejecting a Promise and using .then, .catch, .finally.
   - The executor checks an `error` flag; if true it calls reject(reason).
   - If rejected, the .catch() handler runs. .finally() runs regardless.
*/
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

/* =========================
   Promise Five + async/await
   =========================
   - Creates a Promise that may reject (error flag).
   - Defines an async function consumePromiseFive that awaits promiseFive.
   - await causes the async function to pause until the Promise settles.
   - Errors from the awaited Promise are caught by try/catch.
*/
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

/* =========================
   fetch() example
   =========================
   - Uses the Fetch API to GET a GitHub user endpoint.
   - fetch returns a Promise that resolves to a Response object (even for HTTP 404/500);
     it rejects only for network-level errors like DNS failure or CORS issues.
   - response.json() returns a Promise that resolves with the parsed JSON body.
   - The .catch at the end handles network errors or any thrown error in the chain.
*/
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
