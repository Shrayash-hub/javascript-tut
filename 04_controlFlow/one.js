// ========== IF-ELSE STATEMENTS ==========

const isUserLoggedIn = true;
const temperature = 41;

// Using `if` to check a condition
if (temperature === 41) { // Strict equality check (both value & type)
    console.log("Temperature is 41 degrees.");
}

console.log("This message runs regardless of the if condition.");

// ========== COMPARISON OPERATORS ==========
// < , > , <= , >= , == , != , === , !==

const score = 200;

// Checking if score is greater than 100
if (score > 100) {
    // var power = "fly"  // ❌ Don't use `var` due to function scoping issues.
    let power = "fly";     // ✅ Use `let` instead.
    console.log(`User power: ${power}`);
}

// ❌ This will throw an error because `power` is block-scoped due to `let`.
// console.log(`User power: ${power}`);

// ========== SINGLE LINE `if` STATEMENT ==========
const balance = 1000;

// If balance is greater than 500, execute multiple statements in one line
if (balance > 500) console.log("Balance is greater than 500"), console.log("Proceeding...");

// ========== NESTED IF-ELSE ==========
if (balance > 500) {
    console.log("Balance is greater than 500.");
} else if (balance < 750) {
    console.log("Balance is less than 750.");
} else if (balance < 900) {
    console.log("Balance is less than 900.");
} else {
    console.log("Balance is less than 1200.");
}

// ========== LOGICAL OPERATORS ==========
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// AND (`&&`) operator - All conditions must be true
if (userLoggedIn && debitCard && 2 == 2) {  
    console.log("User can buy the course.");
}

// OR (`||`) operator - At least one condition must be true
if (loggedInFromGoogle || loggedInFromEmail || guestUser) {  
    console.log("User logged in successfully.");
}

// ❌ ERROR: `guestUser` is not defined. Always ensure variables exist before using them.

