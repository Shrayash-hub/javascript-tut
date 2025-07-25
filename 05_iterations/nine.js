// Array containing numbers
const myNums = [1, 2, 3]; 

// Using reduce() to calculate the sum of numbers in the array
const myTotal = myNums.reduce(function (acc, currval) { 
    // Logging the current values of accumulator and current value
    console.log(`acc: ${acc} and currval: ${currval}`); 
    return acc + currval; // Adding the current value to the accumulator
}, 0); // Initial value of accumulator is set to 0

// Printing the total sum of numbers
console.log(myTotal); // Output: 6

// Using arrow function with reduce() for a shorter syntax
const myTotalArrow = myNums.reduce((acc, curr) => acc + curr, 0);

// Printing the total sum using arrow function
console.log(myTotalArrow); // Output: 6

// Defining a shopping cart array containing objects with item names and their prices
const shoppingCart = [
    {
        itemName: "JS Course", // Name of the first item
        price: 2999           // Price of the first item
    },
    {
        itemName: "Data Science Course", // Name of the second item
        price: 5999                      // Price of the second item
    },
    {
        itemName: "Advanced Data Science Course", // Name of the third item
        price: 12999                              // Price of the third item
    },
];

// Using reduce() to calculate the total price of items in the shopping cart
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

/* 
How reduce() works in shoppingCart:

1st iteration: acc = 0, item.price = 2999 → acc + item.price = 2999  
2nd iteration: acc = 2999, item.price = 5999 → acc + item.price = 8998  
3rd iteration: acc = 8998, item.price = 12999 → acc + item.price = 21997  
Final Output: 21997  
*/

// Printing the total price of all items in the shopping cart
console.log(priceToPay); // Output: 21997
