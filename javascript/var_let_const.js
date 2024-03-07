// what is illegal shadowing?

// when a let variable is declared as var within a inner scope

function test() {
  var b = "B";
  if (true) {
    var b = "something"; // Error, illegal shadowing
  }
}

//Q: multiple declarations are they possible?
//A: yes with var, but not with let

//Q: Declaring value without initilization?
//A: okay with var and let, not with const

//Hoisting

// hoisting makes var undefined
// hoisting in temporary deadzone (in scope but not declared), const / let,
// raises an error

// Q: output?

var x = 21;
let foo = function () {
  console.log(x);
  let x = 20;
};
foo();

//A:
// undefined (hoisting)

// Q: output?

let x = 21;
let foo = function () {
  console.log(x);
  var x = 20;
};
foo();

//A:
// undefined (hoisting)

// Q: output?

const x = 21;
let foo = function () {
  console.log(x);
  var x = 20;
};
foo();

//A:
// undefined (hoisting)

// Q: output?

let x = 21;
let foo = function () {
  console.log(x);
  const x = 20;
};
foo();

//A: code does not compile

// Q: output?

var x = 21;
let foo = function () {
  console.log(x);
  const x = 20;
};
foo();

//A: code does not compile
