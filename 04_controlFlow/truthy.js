// ✅ Correct way to declare a variable
const userEmail = "h@hitesh.ai";

// ❌ ERROR: `useremail` is not defined (case-sensitive issue)
// if(useremail){ 

// ✅ Corrected: `userEmail` (case-sensitive)
if (userEmail) {
    console.log("Got user email");  // ✅ This will run because userEmail is a **truthy** value.
} else {
    console.log("Don't have user email");
}

// ========== FALSY VALUES IN JAVASCRIPT ==========
/*
    In JavaScript, the following values are considered **Falsy**:
    - `false`
    - `0` (zero)
    - `-0`
    - `BigInt(0n)`
    - `""` (empty string)
    - `null`
    - `undefined`
    - `NaN` (Not a Number)
*/

// ========== TRUTHY VALUES IN JAVASCRIPT ==========
/*
    The following values are **Truthy** (evaluated as `true` in a condition):
    - `"0"` (string with zero)
    - `"false"` (string with "false")
    - `" "` (string with a space)
    - `[]` (empty array)
    - `{}` (empty object)
    - `function() {}` (empty function)
*/

// ✅ Checking if an array is empty
const emptyArray = [];
if (emptyArray.length === 0) {
    console.log("Array is empty");
}

// ❌ ERROR: `cosnt` is an incorrect keyword (should be `const`)
const emptyObj = {}; // ✅ Corrected

// ✅ Checking if an object is empty
if (Object.keys(emptyObj).length === 0) {  
    console.log("Object is empty"); // ✅ This will run because `emptyObj` has no properties.
}

// ========== COMMON MISTAKES & FIXES ==========

// ❌ Mistake: Using `cosnt` instead of `const` (Syntax Error)
// cosnt emptyObj = {}  ❌ Incorrect

// ❌ Mistake: `cosnole.log` instead of `console.log` (Typo)
// cosnole.log("Object is empty"); ❌ Incorrect

// ✅ Correct Fix:
// console.log("Object is empty"); ✅ Correct

// Always check for falsy values explicitly in some cases to avoid unintended behavior:

if (userEmail !== undefined && userEmail !== null && userEmail !== "") {
    console.log("Valid email provided");
}

if (!!userEmail) {  // Double negation forces a boolean conversion
    console.log("Valid email provided");
}

// The Nullish Coalescing Operator (`??`) is used to provide a default value 
// when dealing with `null` or `undefined`. 

let val1;

// ✅ Example 1: If the left-hand value is NOT `null` or `undefined`, it is used.
val1 = 5 ?? 10;  // 5 (since 5 is neither null nor undefined)
console.log(val1);  // Output: 5

// ✅ Example 2: If the left-hand value is `null`, the right-hand value is used.
val1 = null ?? 10;  // 10 (since null triggers fallback to 10)
console.log(val1);  // Output: 10

// ✅ Example 3: If the left-hand value is `undefined`, the right-hand value is used.
val1 = undefined ?? 20;  // 20 (undefined triggers fallback)
console.log(val1);  // Output: 20

// ✅ Example 4: If the left-hand value is **falsy** but NOT `null` or `undefined`, it remains.
val1 = 0 ?? 30;  // 0 (because 0 is falsy but not null/undefined)
console.log(val1);  // Output: 0

val1 = "" ?? "default";  // "" (empty string is falsy but not null/undefined)
console.log(val1);  // Output: "" (empty string)

// Terniary operator

// condition ? true:false

const iceTearPrice = 100
iceTearPrice >=80 ? console.log("Less than 80") : console.log("more than 80")




