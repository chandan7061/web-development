// ASSIGNMENT-1

// 1. Create an empty array and add two user objects using push()

let users = [];

users.push({ id: 1, name: "Amit" });
users.push({ id: 2, name: "Rahul" });

console.log(users);

// 2. Create an array of users and print all users using console.log()

let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Priya" },
];

console.log(users);

// 3. Access and print the first user from an array using indexing

let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
];

console.log(users[0]);

// 4. Use find() to get a user with a specific id from an array

let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
];

let user = users.find((u) => u.id === 2);

console.log(user);

// 5. Create an array of users and update the name of a user using find()

let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
];

let user = users.find((u) => u.id === 1);

user.name = "Rohan";

console.log(users);

// 6. Write a program to change a user’s name from "Amit" to "Rahul"

let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Priya" },
];

let user = users.find((u) => u.name === "Amit");

user.name = "Rahul";

console.log(users);

// 7. Create an array of users and remove one user using filter()

let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Priya" },
];

let updatedUsers = users.filter((u) => u.id !== 2);

console.log(updatedUsers);

// 8. Delete a user with a specific id from an array using filter()

let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Priya" },
];

users = users.filter((u) => u.id !== 3);

console.log(users);

// 9. Create a program that:
// adds two users
// prints all users

let users = [];

users.push({ id: 1, name: "Amit" });
users.push({ id: 2, name: "Rahul" });

console.log(users);

// 10. Create a program that:
// adds users
// updates one user
// prints updated list

let users = [];

users.push({ id: 1, name: "Amit" });
users.push({ id: 2, name: "Rahul" });

let user = users.find((u) => u.id === 2);

user.name = "Rohan";

console.log(users);

// 11. Create a program that:
// adds users
// deletes one user
// prints remaining users

let users = [];

users.push({ id: 1, name: "Amit" });
users.push({ id: 2, name: "Rahul" });
users.push({ id: 3, name: "Priya" });

users = users.filter((u) => u.id !== 2);

console.log(users);

// 12. Create a complete CRUD program:
// Create users
// Read all users
// Update one user
// Delete one user

let users = [];

// CREATE
users.push({ id: 1, name: "Amit" });
users.push({ id: 2, name: "Rahul" });
users.push({ id: 3, name: "Priya" });

// READ
console.log("All Users:");
console.log(users);

// UPDATE
let user = users.find((u) => u.id === 2);

if (user) {
  user.name = "Rohan";
}

// DELETE
users = users.filter((u) => u.id !== 1);

// FINAL LIST
console.log("Updated Users:");
console.log(users);

//   ASSIGNMENT-2

// 1. Create an array and add one element at the end using push()

let arr = [1, 2, 3];

arr.push(4);

console.log(arr);

// 2. Add two elements at the end of an array using push()

let arr = [1, 2];

arr.push(3, 4);

console.log(arr);

// 3. Create an array and remove the last element using pop()

let arr = [10, 20, 30];

arr.pop();

console.log(arr);

// 4. Store the removed element from pop() in a variable and print it

let arr = [10, 20, 30];

let removed = arr.pop();

console.log("Removed Element:", removed);
console.log(arr);

// 5. Add an element at the beginning of an array using unshift()

let arr = [2, 3, 4];

arr.unshift(1);

console.log(arr);

// 6. Add two elements at the beginning using unshift()

let arr = [3, 4];

arr.unshift(1, 2);

console.log(arr);

// 7. Remove the first element from an array using shift()

let arr = [1, 2, 3];

arr.shift();

console.log(arr);

// 8. Store and print the removed element using shift()

let arr = [10, 20, 30];

let removed = arr.shift();

console.log("Removed Element:", removed);
console.log(arr);

// 9. Use splice() to remove elements from a specific position in an array

let arr = [1, 2, 3, 4, 5];

arr.splice(2, 2);

console.log(arr);

// 10. Use splice() to add elements at a specific index in an array

let arr = [1, 2, 5];

arr.splice(2, 0, 3, 4);

console.log(arr);

// 11. Use splice() to replace an element in an array

let arr = [1, 2, 3, 4];

arr.splice(2, 1, 10);

console.log(arr);

// 12. Write a program that:
// adds elements using push()
// removes one using pop()
// adds one using unshift()
// removes one using shift()

let arr = [2, 3];

// push()
arr.push(4);
console.log("After push:", arr);

// pop()
arr.pop();
console.log("After pop:", arr);

// unshift()
arr.unshift(1);
console.log("After unshift:", arr);

// shift()
arr.shift();
console.log("After shift:", arr);

//   ASSIGNMENT-3

// 1. Create an array and find the index of an element using indexOf()

let arr = [10, 20, 30, 40];

let index = arr.indexOf(30);

console.log(index);

// 2. Check whether a value exists in an array using includes()

let arr = [10, 20, 30, 40];

console.log(arr.includes(20));

// 3. Create an array and check a value that does not exist using indexOf()

let arr = [1, 2, 3, 4];

let index = arr.indexOf(10);

console.log(index);

// 4. Use includes() to check both present and absent values in an array

let arr = [5, 10, 15, 20];

console.log(arr.includes(10));
console.log(arr.includes(50));

// 5. Create an array of objects and find an item using find()

let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Priya" },
];

let user = users.find((u) => u.id === 2);

console.log(user);

// 6. Use find() to search for an element based on a condition

let numbers = [10, 25, 30, 45, 50];

let result = numbers.find((num) => num > 30);

console.log(result);

// 7. Create an array of numbers and use filter() to get values greater than a specific number

let numbers = [10, 20, 30, 40, 50];

let result = numbers.filter((num) => num > 25);

console.log(result);

// 8. Use filter() to return multiple matching elements from an array

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

// 9. Create an array of numbers and sort it using default sort()

let numbers = [40, 10, 30, 20];

numbers.sort();

console.log(numbers);

// 10. Sort an array in ascending order using sort((a, b) => a - b)

let numbers = [40, 10, 30, 20];

numbers.sort((a, b) => a - b);

console.log(numbers);

// 11. Sort an array in descending order using sort((a, b) => b - a)

let numbers = [40, 10, 30, 20];

numbers.sort((a, b) => b - a);

console.log(numbers);

// 12. Write a program that:
// checks value using includes()
// finds index using indexOf()
// filters values
// sorts the final array

let numbers = [50, 10, 40, 20, 30];

// includes()
console.log(numbers.includes(20));

// indexOf()
console.log(numbers.indexOf(40));

// filter()
let filtered = numbers.filter((num) => num > 20);

console.log(filtered);

// sort()
filtered.sort((a, b) => a - b);

console.log(filtered);
