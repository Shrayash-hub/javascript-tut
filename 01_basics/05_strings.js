// Declaring two variables
const name = "Shrey";  // A string variable
const repoCount = 50;  // A number variable

// Concatenating strings and numbers using the "+" operator
console.log(name + repoCount + " Value"); 
// This will output "Shrey50 Value" as it concatenates the values together

// Using template literals to insert variables directly into a string
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
// This will output "hello my name is Shrey and my repo count is 50" using `${}` to insert variables

// Creating a new String object (Wrapper object for a string)
const gameName = new String('shrey-awasthi-new');
console.log(gameName[0]); // "s", because strings are indexed and gameName[0] refers to the first character
console.log(gameName.__proto__); // Shows the prototype of the gameName string object. It shows methods and properties available to the string object

// .length gives the number of characters in the string
console.log(gameName.length);  // 18, the length of the string 'shrey-awasthi-new'

// Using the .toUpperCase() method to convert string to uppercase
console.log(gameName.toUpperCase());  // "SHREY-AWASTHI-NEW", converts all characters to uppercase

// Using the .charAt() method to get a character at a specific index
console.log(gameName.charAt(2)); // "r", the character at index 2 of the string "shrey-awasthi-new"

// Using .indexOf() to find the first occurrence of a substring
console.log(gameName.indexOf('t'));  // 9, the index of the first 't' character, returns -1 if not found

// Extracting a substring from the string using .substring(start, end)
const newString = gameName.substring(0, 4); // "shre", gets characters from index 0 to 3
console.log(newString);

// Using .slice() method to extract a part of the string (can also handle negative indices)
const anotherString = gameName.slice(-8, 4); 
console.log(anotherString);  // "thi-", it extracts a part of the string, negative indices count from the end

// String with extra spaces before and after
const newStringOne = "  shrey   ";
console.log(newStringOne);  // "  shrey   " including leading and trailing spaces

// Using .trim() method to remove whitespace from both ends of the string
console.log(newStringOne.trim());  // "shrey", removes the spaces from both ends

// URL with encoded space (%20) instead of a normal space
const url = "https://shrey.com/shrey%20awasthi"

// Using .replace() method to replace '%20' with '-'
console.log(url.replace('%20', '-'));  // "https://shrey.com/shrey-awasthi", replaces '%20' with '-'

// Using .includes() to check if a substring exists in a string
console.log(url.includes('hello'));  // false, checks if 'hello' exists in the URL string (it does not)

// Using .split() method to split a string by a specified delimiter
console.log(gameName.split('-'));  // ["shrey", "awasthi", "new"], splits the string at each '-'
