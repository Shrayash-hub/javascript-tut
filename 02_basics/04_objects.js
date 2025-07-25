// =================== Creating Objects ===================

// ✅ Creating an empty object (Non-Singleton)
const tinderUser = {}; 

// Adding properties to the object dynamically
tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// ✅ Another way: Creating an object with nested objects
const regularUser = {
    email: "someemail@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shrey",
            lastname: "Awasthi"
        }
    }
};

// ✅ Using Optional Chaining (`?.`) to prevent errors
// This checks if `fullname` exists before accessing `userfullname.firstname`
console.log(regularUser.fullname?.userfullname.firstname); // Output: "shrey"

// ✅ Logging the `tinderUser` object
console.log(tinderUser);


// =================== Merging Objects ===================

// ✅ Creating multiple objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// ❌ Incorrect: This will create a nested object
// const obj3 = { obj1, obj2 };

// ✅ Correct way: Using `Object.assign()`
// const obj3 = Object.assign({}, obj1, obj2);

// ✅ Best way: Using the Spread Operator (`...`)
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
// Output: {1: "a", 2: "b", 3: "a", 4: "b"}


// =================== Array of Objects ===================

// ✅ Creating an array of user objects
const users = [
    { id: 1, email: "shrey123" },
    { id: 2, email: "shrey124" },
    { id: 3, email: "shrey125" }
];

// ✅ Accessing an object's property inside an array
console.log(users[1].email); // Output: "shrey124"


// =================== Object Methods ===================

// ✅ Get all keys of an object as an array
console.log(Object.keys(tinderUser)); 
// Output: ["id", "name", "isLoggedIn"]

// ✅ Get all values of an object as an array
console.log(Object.values(tinderUser)); 
// Output: ["123abc", "sam", false]

// ✅ Get key-value pairs as an array of arrays
console.log(Object.entries(tinderUser)); 
// Output: [["id", "123abc"], ["name", "sam"], ["isLoggedIn", false]]

// ✅ Check if an object has a specific property
console.log(tinderUser.hasOwnProperty('isLoggedIn')); 
// Output: true


// =================== Object Destructuring ===================

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shrey"
};

// ✅ Object destructuring with aliasing
const { courseInstructor: Instructor } = course;

// ❌ `courseInstructor` is not defined anymore because we used aliasing
// console.log(courseInstructor); // This will throw an error

// ✅ Correct way: Use the new alias name
console.log(Instructor); // Output: "shrey"


// =================== Destructuring in React (Example) ===================

// function Navbar({ company }) {
//     console.log(company);
// }

// ✅ Example function call in React
// Navbar({ company: "shrey" });


// =================== How API Responses Look Like ===================

// ✅ API response in the form of an object
// {
//     name: "hitesh",
//     coursename: "js in hindi",
//     price: "free"
// }

// ✅ API response in the form of an array of objects
[
    { name: "hitesh", coursename: "js in hindi", price: "free" },
    { name: "shrey", coursename: "react in hindi", price: "499" },
    { name: "john", coursename: "node.js", price: "799" }
];
