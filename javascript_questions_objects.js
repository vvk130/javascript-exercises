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

// function multiplyByTwo(obj){
//     for (key in obj){
//         if (Number(obj[key])) obj[key] = obj[key] * 2; 
//     }
// }

// Q: What is output of following code? 

const a = {};
const b = { key: "b" };
const c = { key: "c" }; 

a[b] = 123;
a[c] = 456;

consolelog(a[b]);

// A: 
// Code doesn't compile, because adding an object tries to add [Object object] 
// and that cannot be the key

// Q: What is JSON.strigify and JSON.parse?

// A: Makes JSON data to a string or makes content to JSON data

// Parse: Converts a JavaScript Object Notation (JSON) string into an object.
// Stringify: Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

// Q: How to set an item in localStorage? 

// A: 

const obj = JSON.stringify(user);
localStorage.setItem("objInLocalStorage", obj);
console.log(JSON.parse(localStorage.getItem("test")))

// Q: What does this print? 

console.log([..."Lydia"]);

// A: 
// [ 'L', 'y', 'd', 'i', 'a' ]

// Q: What does this print? 

const user = {name: "Lydia", age: 21};
const user = {admin: true, ...user};

console.log(admin);

// A:{admin: true, name: "Lydia", age: 21}

// Q; What is the output? 

const settings = {
    username: "Piyush",
    level: 19,
    health: 90,
}

const obj = JSON.stringify(settings, ["level", "health"]);
console.log(obj);

// A: output level and health keys and values

// Q: What's the output? 

const shape = {
    radius: 10,
    diameter() {
        retutn this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

// A: this in arrowfunction refers to the window object, 
// so the shape.perimeter will prin out NaN

// Q: What is destructuring in objects?

let user = {
    name: "Piysh",
    age: 24,
}

const name = "Roadside Coder"; 

const { name: myName } = user;

console.log(name); //Roadside Coder
console.log(myName); // Piysh

// Another example nested object


let user = {
    name: "Matti",
    age: 24,
    fullName : {
        first: "Matti",
        last: "Teppo",
    }
}

const {
    fullName: {first},
} = user; 

console.log(first);

// This line essentially means "extract the first property from 
// the fullName object inside the user object and store it in a variable named first".
// so the output is Matti
 
//Q: What will this print?

function getItems(fruitList, ...args, favFruit){
    return [...fruitList, ...args, favoriteFruit];
}

getItems(["banana", "apple"], "pear", "orange");

//A: rest operator needs to be last so it gives an error

//Q: What will this print? 

function getItems(fruitList, favFruit, ...args){
    return [...fruitList, ...args, favoriteFruit];
}

console.log(getItems(["banana", "apple"], "pear", "orange"));

// A: prints out the fruit

// Q: Object referencing

let c = { greeting: "Hey"};
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);

// A: output, assignment doesn't copy the properties, output is Hey

// Q: What is the output?

console.log({ a: 1} == { a : 1});
console.log({ a: 1} === { a : 1});

// A: Javascript compares objects by reference and not value
// so both are always false

// Q: Output?

let person = {name: "Lydia"};
const members = [person];
person = null; //person.name = null;

console.log(members);

// prints out the object, it did npt set to null 
// since it was not set as a value of a property

// Object.freeze and Object.seal?

// Event Bubbling

// Event Capturing

// Var vs let

// Arguments keyword

// Time optimization

// Currying

// Rest vs spread operator

// Can rest operator be first

// IIFE Functions

// Debouncing 

// Throttling

