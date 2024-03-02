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
