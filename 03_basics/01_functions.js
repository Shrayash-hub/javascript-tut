// =================== Function Basics ===================

// ✅ Function declaration
function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("Y");
}

// ✅ Function call
sayMyName(); // Output: S H R E Y (printed line by line)


// =================== Function with Parameters and Return ===================

// ❌ Incorrect: This function only logs the sum (doesn't return it)
// function addTwonumbers(number1, number2){
//     console.log(number1 + number2);
// }


// ✅ Correct: Function that takes two numbers and returns their sum
function addTwonumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;

    return number1 + number2; // Returning the sum
}

// ✅ Storing the function result in a variable
const result = addTwonumbers(3, 5);
console.log("result: ", result); // Output: result: 8


// =================== Default Parameters in Functions ===================

function loginUserMessage(username = "sam") { // Default value: "sam"
    if (username === undefined) { // Alternatively: if (!username)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// ✅ Calling the function with an argument
console.log(loginUserMessage("Shrey")); // Output: Shrey just logged in

// ✅ Calling the function without an argument (uses default value)
console.log(loginUserMessage()); // Output: sam just logged in


// =================== Rest Operator in Functions ===================

// ✅ Function to handle multiple arguments using Rest Operator
function calculateCartPrice(val1, val2, ...num1) { 
    // First two values are assigned to val1 & val2, rest go into num1 (array)
    return num1;
}

// ✅ Calling function with multiple arguments
console.log(calculateCartPrice(200, 400, 500, 600)); 
// Output: [500, 600] (as rest parameters get stored in an array)


// =================== Passing Objects as Parameters ===================

// ✅ Creating an object
const user = {
    username: "shrey",
    price: 199
};

// ✅ Function that takes an object as an argument
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// ✅ Passing an object to the function
// handleObject(user); // Output: Username is shrey and price is 199

// ✅ Passing an object directly
handleObject({
    username: "shrey",
    price: 399
});
// Output: Username is shrey and price is 399


// =================== Passing Arrays as Parameters ===================

// ✅ Creating an array
const myNewArray = [200, 400, 100, 600];

// ✅ Function that returns the second value from an array
function returnSecondValue(getArray) {
    return getArray[1]; // Accessing the second element
}

// ✅ Passing an array variable
console.log(returnSecondValue(myNewArray)); // Output: 400

// ✅ Passing an array directly
console.log(returnSecondValue([200, 400, 500, 1000])); // Output: 400
