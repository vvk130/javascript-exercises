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

🎍😍
