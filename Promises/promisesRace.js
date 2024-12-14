let promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "First promise"));
let promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Second promise"));

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result); // "First promise" (because it resolves first)
  })
  .catch((error) => {
    console.error(error);
  });


// Promise.race() returns the result of the first promise that resolves(or rejects) in the array.