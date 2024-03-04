// Promises
//Q: Output?

// Async code
console.log("start");
setTimeout(() => {
  console.log("Hello world");
}, 1000);

console.log("Finish");

//A:
// Javascript singlethreaded language
// Js executes synchronous code first and then asynchronous
// Output, start, Finish, Hello

//Q: Output?

console.log("start");

function importantAction(username) {
  setTimeout(() => {
    console.log("Hello world");
  }, 1000);
}

const message = importantAction("Roadside Coder");

console.log(message);

console.log("stop");

// A:
//start, undefined, stop

//Q: Callbacks
