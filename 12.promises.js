var promise = new Promise((resolve, reject) => {
    // do a thing, possibly async, then…

    if (/* everything turned out fine */ true) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
});

promise.then(result => console.log(result)) // "It worked!"
    .catch(err => console.log(err));        // Error: "It broke"
