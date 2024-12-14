let promises = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Succes ho gya ree bhau');
    } else {
        reject('Succes nhi hua gya ree bhau');

    }
});

promises.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
}).finally(() => {
    console.log("Don't worry ho jayegha ");

})
// console.log(promises);
