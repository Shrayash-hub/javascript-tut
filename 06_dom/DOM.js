/***********************
 🌐 DOM MANIPULATION NOTES
************************/

/* 
1️⃣ getElementById()
--------------------
- Used to select an HTML element by its unique ID.
- Returns a single element (not a list).
*/

const heading = document.getElementById("main-heading");
console.log(heading); // Logs the element with id="main-heading"


/* 
2️⃣ Attributes of an element
-----------------------------
Every HTML element can have attributes like id, class, src, href, etc.
We can access and modify them using .getAttribute() and .setAttribute().
*/

// Example HTML:
// <img id="logo" src="logo.png" alt="Website Logo">

const logo = document.getElementById("logo");

// ✅ getAttribute(attributeName)
console.log(logo.getAttribute("src")); // Output: "logo.png"

// ✅ setAttribute(attributeName, value)
logo.setAttribute("alt", "Main Company Logo");
console.log(logo.getAttribute("alt")); // Output: "Main Company Logo"


/* 
3️⃣ Style attribute after saving it in a variable
--------------------------------------------------
We can directly access and modify the inline styles of an element
using the .style property.
*/

const title = document.getElementById("main-heading");

// Save style in a variable and modify
let styleRef = title.style;
styleRef.color = "blue";
styleRef.fontSize = "24px";
styleRef.backgroundColor = "lightyellow";


/* 
4️⃣ innerHTML vs textContent vs innerText
------------------------------------------
| Property     | Description |
|---------------|--------------|
| innerHTML     | Returns/sets HTML content inside element (includes tags). |
| textContent   | Returns/sets *only text* (ignores hidden text, keeps spacing). |
| innerText     | Returns/sets *visible text* only (no hidden text). |

*/

const para = document.getElementById("description");
console.log(para.innerHTML);   // Prints full HTML inside
console.log(para.textContent); // Prints all text (even hidden)
console.log(para.innerText);   // Prints only visible text


/* 
5️⃣ querySelector()
---------------------
- Selects the first matching element (CSS selector style).
- Can select by ID (#id), class (.class), tag (div, p, etc.), or attribute ([name='value']).
*/

const firstButton = document.querySelector("button");
const logoById = document.querySelector("#logo");
const itemByClass = document.querySelector(".item");
const inputBox = document.querySelector("input[name='username']");


/* 
6️⃣ querySelectorAll()
-----------------------
- Selects *all* matching elements (returns a NodeList).
*/

const allButtons = document.querySelectorAll("button");
console.log(allButtons); // NodeList(3) [button, button, button]


/* 
7️⃣ NodeList
--------------
- NodeList is similar to an array, but not exactly an array.
- We can use forEach() on NodeList.
- We can access elements using indexing (like an array).
*/

allButtons[0].style.backgroundColor = "green"; // Access via index

allButtons.forEach((btn, i) => {
  btn.textContent = `Button ${i + 1}`; // Modify each button’s text
});


/* 
8️⃣ Difference between Map() and Array
--------------------------------------
Array → used to store ordered data values.
Map → used to store key-value pairs (like an object but ordered & iterable).
*/

const arr = [10, 20, 30];
const map = new Map();

map.set("name", "Shreyash");
map.set("age", 21);

console.log(arr[0]);           // 10
console.log(map.get("name"));  // "Shreyash"


/* 
9️⃣ Using attributes in NodeList via indexing and forEach
----------------------------------------------------------
Example: change 'src' attribute of multiple <img> tags.
*/

const images = document.querySelectorAll("img");

// Access by index
images[0].setAttribute("alt", "Logo Image");

// Loop with forEach
images.forEach((img, index) => {
  img.setAttribute("data-index", index); // Custom attribute
});


/* 
🔟 getElementsByClassName()
----------------------------
- Selects elements by class name.
- Returns an HTMLCollection (NOT NodeList).
*/

const items = document.getElementsByClassName("menu-item");
console.log(items); // HTMLCollection of elements


/* 
1️⃣1️⃣ HTMLCollection
-----------------------
- Looks like an array, but not a real one.
- Can access by index (items[0]).
- ❌ No forEach() directly (need conversion first).
*/

console.log(items[0]); // Access first element


/* 
1️⃣2️⃣ Convert HTMLCollection to Array
---------------------------------------
Use Array.from() or spread syntax ([...collection])
to convert HTMLCollection into an array so that
we can use map(), forEach(), filter(), etc.
*/

const itemsArray = Array.from(items);

// Now we can use forEach()
itemsArray.forEach(el => {
  el.style.color = "purple";
});


/******************************
✅ SUMMARY CHEAT SHEET
******************************

🔹 getElementById("id") → Single element
🔹 getElementsByClassName("class") → HTMLCollection
🔹 querySelector("selector") → First match
🔹 querySelectorAll("selector") → NodeList (can use forEach)
🔹 getAttribute() / setAttribute()
🔹 element.style.property
🔹 innerHTML / textContent / innerText differences
🔹 NodeList vs HTMLCollection
🔹 Array.from() → Convert HTMLCollection → Array
🔹 Map vs Array → Key-Value pairs vs Indexed items
******************************/
