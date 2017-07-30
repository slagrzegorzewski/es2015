document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let promiseOne = new Promise((resolve, reject) => {
        resolve("OK 1");
    });
    let promiseTwo = new Promise((resolve, reject) => {
//        resolve("OK 2");
        reject("Error promise 2")
    });
    let promiseThree = new Promise((resolve, reject) => {
        resolve("OK 3");
    });

    Promise.all([promiseOne, promiseTwo, promiseThree]).then(results => {
        console.log(results);
    }).catch(error => {
        console.log(error);
    })
});
