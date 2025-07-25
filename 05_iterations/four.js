// Creating an object with key-value pairs
const myObject = {
    js: 'javascript',   // Key: 'js', Value: 'javascript'
    cpp: 'C++',        // Key: 'cpp', Value: 'C++'
    rb: "ruby",        // Key: 'rb', Value: 'ruby'
    swift: "swift by apple"  // Key: 'swift', Value: 'swift by apple'
}

// Looping through an object using 'for...in' loop
for (const key in myObject) {
    // 'key' holds the property name, 'myObject[key]' gets the value
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

/* 
Expected Output:
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple

- 'for...in' loops over object properties (keys).
- 'key' gets each property name, and 'myObject[key]' retrieves the corresponding value.
*/

// Creating an array of programming languages
const programming = ["js", "rb", "py", "java", "cpp"];

// Using 'for...in' loop to iterate over an array (not the best approach)
for (const key in programming) {
    // 'key' represents the index (0, 1, 2, ...) rather than the value
    console.log(programming[key]); // Accessing the array value using the index
}

/* 
Expected Output:
js
rb
py
java
cpp

- 'for...in' loops over array indexes, not values.
- The best practice is to use 'for...of' or 'forEach()' for arrays.
*/

// Creating a Map object to store key-value pairs
const map = new Map();
map.set('IN', "India");   // Key: 'IN', Value: 'India'
map.set('USA', "United States of America"); // Key: 'USA', Value: 'United States of America'
map.set('Fr', "France"); // Key: 'Fr', Value: 'France'
map.set('IN', "India"); // Duplicate key ('IN') replaces the previous value

// Attempting to loop through a Map using 'for...in' (This won't work)
for (const key in map) {
    console.log(key); // This won't print anything
}

/* 
Why does 'for...in' not work on a Map?
- A JavaScript 'Map' is not enumerable like a regular object.
- 'for...in' works only for objects and their properties, not Map objects.

To correctly iterate over a Map, use 'for...of':
*/

console.log("\nIterating over Map using 'for...of':");
for (const [key, value] of map) {
    console.log(`${key} -> ${value}`);
}

/* 
Expected Output:
IN -> India
USA -> United States of America
Fr -> France

- 'for...of' loops through iterable objects like Maps, Arrays, and Sets.
- '[key, value]' destructures the Map entry into variables.
*/

