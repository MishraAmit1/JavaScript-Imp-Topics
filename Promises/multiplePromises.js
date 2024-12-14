let promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "First promise"));
let promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Second promise"));
let promise3 = new Promise((resolve) => setTimeout(resolve, 3000, "Third promise"));

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // ["First promise", "Second promise", "Third promise"]
    })
    .catch((error) => {
        console.error(error);
    });
