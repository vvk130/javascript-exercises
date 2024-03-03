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
