// Objects in Javascript

// Q: Does delete, delete a value?

const func = (function (a) {
    delete a;
    return a;
})(5);

// A:
// Delete doesn't delete the value, because it deletes object properties only

// Q: How to add a property?

const user = {
    name: "Roadside Coder",
    age: 24,
    "like this video": true,
} 

// Q: How to access the property?

console.log(user["like this video"]);

// Q: How to delete a property

delete user["like this video"];

// Q: How to add a property outside the object declaration?

const property = "firstName";

const user = {
    [property]: "Matti",
} 

console.log(user["firstName"]);

// Q: Looping through an object

const user = {
    name: "Roadside Coder",
    age: 24,
    "like this video": true,
}

for (key in user) {
    console.log(user[key]);
}

// Q: What will this print? 

const user = {
    name: "Roadside Coder",
    age: 24,
    name: "Ellie",
}

console.log(user);

// A: { name: 'Ellie', age: 24 }

// Q: Create a function multiplyByTwo(obj) that multiplies all numeric property values
// of nums by 2

let nums = {
    a: 100,
    b: 200,
    title: "My nums",
}

//A:

function multiplyByTwo(obj){
    for (key in obj){
        if (Number(obj[key])) obj[key] = obj[key] * 2; 
    }
}

multiplyByTwo(nums);
console.log(nums);

function multiplyByTwo(obj){
    for (key in user){
        if (Number(user[key])) user[key] = user[key] * 2; 
    }
}

// Q: 

// Event Bubbling

// Event Capturing

// Var vs let

// Arguments keyword

// Time optimization

// Currying

// Rest vs spread operator

// Can rest operator be first

// Lexical scope

// IIFE Functions

// Debouncing 

// Throttling

