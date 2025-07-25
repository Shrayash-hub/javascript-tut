const myArr = [0,1,2,3,4,5,6,true,"shrey"]

const myHeros = ["shaktiman", "nagraj"]

const myArr1 = new Array(1,2,3,4)

console.log(myArr[1]);

// Array methods

// myArr.push(7)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) // insert an element at the start
myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr); //String


console.log(myArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) // slice is not going to manipulate the original array
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // Splice is going to manipulate the original array
console.log(myn2);

console.log("C", myArr);




