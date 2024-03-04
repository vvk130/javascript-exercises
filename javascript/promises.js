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

//Q: Output?

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  console.log(3);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

// A:
// start, 1, 3, end (hops over console.log(res))

//Q: Output?

console.log("start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("middle");

fn().then((res) => {
  console.log(res);
});

console.log("end");

//A: start, middle, 1, end, success

// Q: output? (34:00)

function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("Success 4");
  });

//A:
// Error 1, Success 4

// Q: Output?

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data);
    return job(false);
  })
  .catch(function (error) {
    console.log(error);
    return "error caught";
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
  });

//A:
// success
// error
// Error caught

// Q: What's the output?

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
    return job(false);
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return new Error("test");
  })
  .then(function (data) {
    console.log(data);
  });

//A: success
// success
// Defeat
// error
// Error caught
// ERROR!
// Error: test

//Q: output?

const firstPromise = new Promise((resolve, reject) => {
  resolve("First!");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => {
    return res;
  })
  .then((res) => console.log(res));

//A:
// First!

//Q: Rewrite using async await:

//A:
