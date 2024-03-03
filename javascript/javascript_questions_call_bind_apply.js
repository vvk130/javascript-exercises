// Q: What is a call?

var obj = { name: "Elli" };

function sayHello(age) {
  return "Hello " + this.name + " is " + age;
}

console.log(sayHello.call(obj, 24));

//Q: What is apply?

var obj = { name: "Elli" };

function sayHello(age, profession) {
  return "Hello " + this.name + " is " + age + " and " + profession;
}

console.log(sayHello.apply(obj, 24, "Software Developer")); // THIS GIVES AN ERROR

var obj = { name: "Elli" };

function sayHello(age, profession) {
  return "Hello " + this.name + " is " + age + " and " + profession;
}

console.log(sayHello.apply(obj, [24, "Software Developer"])); // THIS IS CORRECT

// Q: What is bind?

var obj = { name: "Elli" };

function sayHello(age, profession) {
  return "Hello " + this.name + " is " + age + " and " + profession;
}

const bindfunc = sayHello.bind(obj);
console.log(bindfunc(24, "Dental Hygienist"));

// Q: Call with function inside object
// What is output?

const age = 10;

var person = {
  name: "Piyush",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 24 };
person.getAge.call(person2);

// A: 24

//Q: How about apply?

// A: 24
person.getAge.apply(person2);


// Q: How about with bind?

// A: 24
person.getAge.bind(person2)();



//Q: 

var status = "😩"; 

setTimeout(() => {
    const status = "😍";

    const data = {
        status: "🎍";
        getStatus(){
            return this.status;
        }
    }
})

console.log(data.getStatus()); // 🎍 
console.log(data.getStatus.call(this)); // 😩

//A: this refers to the context not the function, so we get 🎍 and 😩

//Q: Call printAnimal such that it prints all animals in object? 

const animals = [
    {species: "Lion", name: "King"},
    {species: "Whale", name: "Queen" },
];

function printAnimals(i) {
    this.print = function (){
        console.log("#" + i + " " + this.species + ": " + this.name);
    };
    this.print();
}

for (let i = 0; i < animals.length; i++){
    printAnimals.call(animals[i], i);
}


// Q: Append an array to another array

const a = ["a", "b"];
const e = [0, 1, 2];


//A: 

const both = [...a, ...e];
b.push.call(a, ...e);
a.push.apply(a, e);


// Q: Using apply to enhance Built-in functions

// Fins min/max number in arrray

const numbers = [5, 6, 2, 3, 7];

//A:
console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));

// Q: Bound function

function f() {
    console.log(this);
}

let user = {
    g: f.bind(null),
}

user.g(); 

//A: this point to window object

//Q: Bind chaining

function f(){
    console.log(this.name);
}

f = f.bind({name: "John"}).bind({name: "Ann"});
f();

// A: the other bind is ignored, output John

function checkPassword(success, failed)