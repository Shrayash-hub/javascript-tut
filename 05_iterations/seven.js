// Array containing different programming languages
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach loop to iterate over the 'coding' array
// The forEach method does not return values; it only executes the function for each element
// Uncommenting the below code will print each item but returning inside forEach does nothing
// coding.forEach((item) => {
//   console.log(item);
//   return item; // This return statement is ineffective as forEach does not return values
// });

console.log(values); // This will cause an error because 'values' is not defined

// If we want to filter values based on a condition using forEach,
// we need to manually push them into a new array
const newNums = [];

// Assuming 'myNums' is an array of numbers, we are filtering numbers greater than 4
// However, there is a typo in 'forEach' (it is written as 'forEacg')
myNums.forEach((num) => { 
    if (num > 4) {
        newNums.push(num); // Push numbers greater than 4 into the newNums array
    }
});
console.log(newNums); // Print the filtered numbers

// Array of book objects containing details such as title, genre, publish year, and edition
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering books that belong to the "History" genre
let userBooks = books.filter((bk) => bk.genre === 'History');

// Re-filtering books that are published in or after the year 2000 and belong to "History" genre
userBooks = books.filter((bk) => { 
    return bk.publish >= 2000 && bk.genre === "History";
});

// Printing the filtered books
console.log(userBooks);
