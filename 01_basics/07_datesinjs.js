// ------------------ Dates --------------------------

let myDate = new Date(); // Create a new Date object with the current date and time
console.log(myDate.toString()); // Output: Full date and time in human-readable format
console.log(myDate.toISOString()); // Output: Date in ISO format (e.g., "2025-03-22T12:34:56.789Z")
console.log(myDate.toLocaleDateString()); // Output: Date in local format (e.g., "3/22/2025")
console.log(myDate.toLocaleTimeString()); // Output: Time in local format (e.g., "12:34:56 PM")
console.log(myDate.toTimeString()); // Output: Time in human-readable format (e.g., "12:34:56 GMT+0000")
console.log(myDate.toLocaleString()); // Output: Date and time in local format (e.g., "3/22/2025, 12:34:56 PM")

// Fix: 'mydate' is undefined. The correct variable name is 'myDate'.
console.log(typeof myDate); // Output: "object" (because Date is an object)

// ------------------ Creating Custom Dates --------------------------

// Creating a specific date (YYYY, MM (0-based), DD)
let myCreatedDate = new Date(2023, 0, 23); // January 23, 2023
console.log(myCreatedDate.toLocaleString()); // Output: "1/23/2023, 12:00:00 AM"

// Creating a date with time (YYYY, MM (0-based), DD, HH, MM)
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3); // January 23, 2023, 5:03 AM
console.log(myCreatedDate1.toLocaleString()); // Output: "1/23/2023, 5:03:00 AM"

// Creating a date from a string (ISO format)
let myCreatedDate2 = new Date("2023-01-14"); // January 14, 2023
console.log(myCreatedDate2.toLocaleString()); // Output: "1/14/2023, 12:00:00 AM"

// Creating a date from a different string format (MM-DD-YYYY)
let myCreatedDate3 = new Date("01-02-2023"); // January 2, 2023
console.log(myCreatedDate3.toLocaleString()); // Output: "1/2/2023, 12:00:00 AM"

// ------------------ Timestamps --------------------------

// Get the current timestamp (milliseconds since January 1, 1970)
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: e.g., 1673794812345

// Get the timestamp of a specific date
console.log(myCreatedDate3.getTime()); // Output: Timestamp of "01-02-2023"

// Convert timestamp to seconds (rounded down)
console.log(Math.floor(Date.now() / 1000)); // Output: Current timestamp in seconds

// ------------------ Working with Date Methods --------------------------

let newDate = new Date();
console.log(newDate); // Output: Current date and time

// Get the current month (0-based, so adding 1 gives correct month)
console.log(newDate.getMonth() + 1); // Output: 3 (for March)

// Get the current day of the week (0 = Sunday, 6 = Saturday)
console.log(newDate.getDay()); // Output: e.g., 6 (for Saturday)

// ------------------ Formatting Date with toLocaleDateString --------------------------

// Fix: 'weekDay' should be 'weekday'
console.log(newDate.toLocaleDateString('default', {
    weekday: "long",
})); // Output: "Saturday" (or any current weekday)
