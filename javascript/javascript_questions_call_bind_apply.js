// Q: What is a call?

var obj = { name: "Elli" };

function sayHello(age) {
  return "Hello " + this.name + " is " + age;
}

console.log(sayHello.call(obj, 24));

//Q: What is apply?
