// Comparison between two values using the greater-than operator
console.log(2 > 1);  // true, because 2 is greater than 1

// Comparison using the greater-than-or-equal operator
console.log(2 >= 1); // true, because 2 is greater than or equal to 1

// Comparing different datatypes can lead to type coercion (automatic conversion of data types)
console.log("2" > 1); // true, because JavaScript converts the string "2" to a number, so it becomes 2 > 1

console.log("02" > 1); // true, because JavaScript converts the string "02" to a number, so it becomes 2 > 1

// Comparing null and numbers
console.log(null > 0); // false, because null is treated as 0 when compared with numbers, but null is not greater than 0

console.log(null == 0); // false, because null is not equal to 0 when using loose equality (==), null is only equal to null or undefined

console.log(null >= 0); // true, because in comparisons with null, JavaScript converts null to 0, so the comparison is 0 >= 0, which is true

// Comparing undefined with numbers
console.log(undefined > 0); // false, because undefined is not a number, and cannot be compared directly to 0

console.log(undefined == 0); // false, because undefined is not equal to 0, even in loose equality (==) it is only equal to null

console.log(undefined < 0); // false, because undefined cannot be compared to numbers directly

// Strict equality check, which checks both the value and the type
console.log("2" === 2); // false, because "2" is a string and 2 is a number, and strict equality (===) checks both value and type

// Key Points about Comparison and Equality in JavaScript:
// - == (loose equality) allows type coercion, meaning it converts the values to a common type before comparison
// - === (strict equality) does not perform type coercion, it checks both value and type
// - null and undefined behave differently in comparisons: 
//   - null is treated as 0 in comparisons with numbers
//   - undefined cannot be compared directly with numbers
//   - null == undefined is true, but null !== undefined in strict equality
// - In JavaScript, comparing different datatypes (such as string and number) may lead to type coercion, which may not always be what we expect.
//   It's a good practice to use strict equality (===) to avoid unintended type conversions and comparisons.
