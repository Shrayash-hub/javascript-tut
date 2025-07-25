// Creating an array of programming languages
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using `forEach` to iterate over the array
// `forEach` takes a callback function that executes for each item in the array

coding.forEach(function (item) {
    console.log(item); // Prints each element in the array
});

/*
Output:
js
ruby
java
python
cpp
*/

// Using an arrow function inside `forEach`
// `forEach` passes three arguments: item, index, and the full array

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

/*
Output:
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

// Using a separate function with `forEach`
function printMe(item) {
    console.log(item);
}

// Passing the function reference into `forEach`
coding.forEach(printMe);

/*
Output:
js
ruby
java
python
cpp
*/

// Creating an array of objects representing different programming languages
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "Jv"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
];

// Iterating over an array of objects using `forEach`
myCoding.forEach((item) => {
    console.log(item.languageName);
});

/*
Output:
Javascript
Java
Python
*/
