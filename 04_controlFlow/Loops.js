// Basic for Loop
for(let index = 0; index < 10; index++){
    const element = index;  // Assigns index value to element
    if(element == 5){
        console.log("5 is the best number"); // Prints message when index is 5
    }
    console.log(element); // Prints index value for each iteration
}

// Nested for Loop (Multiplication Table Example)
for(let i = 0; i <= 10; i++){
    console.log(`Outer loop value ${i}`); // Prints the outer loop value
    for(let j = 0; j <= 10; j++){
        console.log(i + '*' + j + ' = ' + i * j); // Prints multiplication table
    }
}

// Looping Over an Array
let myArray = ["flash", "batman", "superman"];

for(let index = 0; index < myArray.length; index++){
    const element = myArray[index]; // Assigns each array value to element
    console.log(element); // Prints each superhero name
}

// Using break and continue
for(let index = 0; index <= 20; index++){
    if(index == 5){
        console.log('Detected 5'); // Prints message when index is 5
        break; // Stops the loop when index is 5
        // continue; // Uncomment this to skip only this iteration and continue looping
    }
    console.log(`Value of i is ${index}`); // Prints index value
}
