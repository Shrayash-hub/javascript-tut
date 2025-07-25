// Using `for...of` with Arrays
// The `for...of` loop iterates over iterable objects like arrays, strings, and maps.

const arr = [1, 2, 3, 4, 5];

for(const num of arr){
    console.log(num); // Prints each element of the array
}

/*
Output:
1
2
3
4
5
*/

// Using `for...of` with Strings
// This iterates through each character of the string

const greeting = "Hello world!";
for(const greet of greeting){
    console.log(`Each char is ${greet}`);
}

/*
Output:
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/

// Using `for...of` with `Map` (Key-Value Pairs)
// A Map is an ordered collection of key-value pairs where keys are unique.

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France"); // Corrected country code (was 'Fr')
map.set('IN', "India");  // Duplicate key, but Maps only store unique keys

console.log(map); // Prints entire Map object

// Iterating over a Map using `for...of`
for(const [key, value] of map){
    console.log(key, ':-', value); // Iterates over Map entries
}

/*
Output:
IN :- India
USA :- United States of America
FR :- France
*/

// Example of `for...of` with an object (Not directly iterable)
// Objects are not directly iterable using `for...of`, so this will cause an error

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
};

// The below loop will cause an error because objects are not iterable with `for...of`
// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
// }

// To iterate over an object, use `Object.entries()` with `for...of`
for(const [key, value] of Object.entries(myObject)){
    console.log(key, ':-', value);
}

/*
Output:
game1 :- NFS
game2 :- Spiderman
*/
