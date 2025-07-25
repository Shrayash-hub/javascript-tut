// Declaring a constant variable `accountId` with the value 144553
// `const` means the value cannot be reassigned or changed later in the code
const accountId = 144553;

// Declaring a variable `accountEmail` using `let` with the initial value "Shreyofc@gmail.com"
// `let` allows reassignment of the variable but ensures block-level scoping
let accountEmail = "Shreyofc@gmail.com";

// Declaring a variable `accountPassword` using `var` with the initial value "12345"
// `var` is generally avoided in modern JavaScript due to issues with block scope and functional scope
// It is function-scoped, not block-scoped, which can lead to unexpected behavior
var accountPassword = "12345";

// Declaring a variable `accountCity` without using `let`, `var`, or `const`
// This is not recommended as it creates a global variable, which can lead to potential bugs
accountCity = "Jaipur";

// Declaring a variable `accountState` using `let` but not assigning any value
// This will result in `undefined` as its default value
let accountState;

// Trying to reassign `accountId` will throw an error because it is a constant
// Uncommenting the line below will cause an error:
// accountId = 2;

// Logging the value of `accountId` to the console
console.log(accountId);

// Reassigning the value of `accountEmail` to "Shrey@gmail.com"
// This is allowed because `let` allows reassignment
accountEmail = "Shrey@gmail.com";

// Reassigning the value of `accountPassword` to "00011"
// This is allowed because `var` allows reassignment
accountPassword = "00011";

// Reassigning the value of `accountCity` to "uttarpradesh"
// This is allowed because `accountCity` was declared without `let`, `var`, or `const`
accountCity = "uttarpradesh";

// Logging the value of `accountId` again to the console
console.log(accountId);

/*
  Multi-line comment block
  This is a comment that spans multiple lines.
  It is often used for detailed explanations or to temporarily disable code.
*/

// Using `console.table` to display the values of all variables in a tabular format
// This is useful for debugging or displaying multiple related values in a structured way
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);