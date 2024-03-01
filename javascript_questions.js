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

console.log();

// delete a property