// Q: This keyword inside an object and arrowfunction

//A: this point to the windowobject (unless it has an parent function).
//  Problem doesn't exist in nested functions

//Q: Create a class?

//A:

class user {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log(this.name);
  }
}

const User = new user("Pertti");

User.getName();

// Q: Output?

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();
console.log(user.ref.name);

//A: user.ref refers to window object that doesnt have a property called name, ouput: undefined

//Q: How to fix the problem in last case?

//A:

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user = makeUser();
console.log(user.ref.name);

//Q: Output?

const user = {
  name: "Ninni",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(user.logMessage, 1000);

//A: Undefined, because inside setTimeout, doesnt have access to the name property
// It accesses the window object

setTimeout(function () {
  user.logMessage;
}, 1000);

// A: How to make it work

//Q: output?

const user = {
  name: "Ninni",
  greet() {
    return `Hello ${this.name}!`;
  },
  bye: () => {
    return this.name;
  },
};

console.log(user.greet());

console.log(user.bye());

//A: First prints Hello Ninni, second undefined

//Q: Create on object calculator

let calculator = 