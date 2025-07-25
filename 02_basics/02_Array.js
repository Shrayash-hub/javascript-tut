// =================== Combining Arrays: `concat()` vs Spread Operator (`...`) ===================

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// ❌ Incorrect way: Using `push()` (causes nesting)
// marvel_heros.push(dc_heros); // This adds the entire array as a single element inside `marvel_heros`
// console.log(marvel_heros); 
// Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// console.log(marvel_heros[3][1]); 
// Output: "flash" (because it's inside a nested array)

// ✅ Correct way: Using `concat()`
const all_heros = marvel_heros.concat(dc_heros); // Creates a new merged array
console.log(all_heros);
// Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// ✅ Best way: Using the Spread Operator (`...`)
const all_new_heros = [...marvel_heros, ...dc_heros]; // Spreads both arrays into a new array
console.log(all_new_heros);
// Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]


// =================== Flattening a Nested Array: `flat(Infinity)` ===================

const another_array = [1, 2, 3, [4,5,6], 7, [6, 7, [4,5]]];

// ✅ Using `flat()` to remove nested arrays
const real_another_array = another_array.flat(Infinity); // Flattens deeply nested arrays
console.log(real_another_array);
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// =================== Array Utility Methods ===================

// ✅ Checking if a value is an array
console.log(Array.isArray("shrey")); 
// Output: false (because "shrey" is a string, not an array)

// ✅ Converting a string into an array using `Array.from()`
console.log(Array.from("shrey")); 
// Output: ["s", "h", "r", "e", "y"] (converts a string into an array of characters)

// ❌ Important case: `Array.from()` with an object
console.log(Array.from({name: "shrey"})); 
// Output: [] (Empty array because `Array.from()` doesn't work on objects without keys being specified)


// =================== Creating an Array from Individual Values: `Array.of()` ===================

let score1 = 100;
let score2 = 200;
let score3 = 300;

// ✅ Using `Array.of()`
console.log(Array.of(score1, score2, score3)); 
// Output: [100, 200, 300] (Creates an array from individual elements)


// =================== Key Takeaways ===================
/*
1. `push()` → Adds elements to an existing array (nested arrays when pushing another array).
2. `concat()` → Merges two arrays into a new one (shallow merge).
3. Spread Operator (`...`) → Best way to merge arrays (clean & readable).
4. `flat(Infinity)` → Flattens deeply nested arrays into a single-level array.
5. `Array.isArray(value)` → Checks if a value is an array.
6. `Array.from(value)` → Converts an iterable (like a string) into an array.
7. `Array.of(value1, value2, ...)` → Creates an array from individual elements.
*/

