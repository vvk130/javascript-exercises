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
  }, 1000); // putting zero hero, will it affect the output?
}

const message = importantAction("Roadside Coder");

console.log(message);

console.log("stop");

// A:
//start, undefined, stop
// putting 0 in set timeout doesn't affect the output

//Q: Callbacks

console.log("start");

function importantAction(username, cb) {
  setTimeout(() => {
    cb("Hello world");
  }, 1000);
}

const message = importantAction("Roadside Coder", function (message) {
  console.log(message);
});

console.log("stop");

//A: start, stop, Hello World

//Q: What is Callback hell?

//A: using multiple callback functions, without async await

//Promises in Javascript
//Promises
//Q: Give an example of promise

console.log("Star");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("Subscriber to Roadside Coder");
    else reject(new Error("Why not subscribed?"));
  }, 2000);
});

sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

// Q: Are there ways to chain multiple promises?

//A: yes:
// Promise.all([])
// Promise.race([])
// Promise.any([]) -- only first fulfilled promise
// Promise.allSettled([])

// Async / await
// Q: Output?

console.log("start");

const promise1 = new Promise((resolve, rejetc) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

//A:
//: start, 1, end, 2 (cause async runs last)

// Q: Output?

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

//A:
// start, 1, 3, end, 2
