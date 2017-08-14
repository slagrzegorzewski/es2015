document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const a = 2,
          b = 4;

    console.log(a ** b);
    // ES2016 -> this is the power operation, for example:

    console.log(Math.pow(a, b));

    // ES2017

    let string = "FireStarter";

    // the same length for every string
    console.log(string);
    console.log(string.padStart(20, "X"));
    console.log(string.padEnd(20, "X"));

    let sumValues = (a,b) =>{
        return a + b;
    }

    console.log(sumValues(3, 11));

    const carObj = {
        nameCar: "Golf",
        ver: "3",
        year: 1997
    }
    // creating list of values
    console.log(Object.values(carObj));

    // take a all of values and keys
    console.log(Object.entries(carObj));

    // Asynch functions

    async function wait3seconds(string) {
        return new Promise(resolve => {
            setTimeout( () => {
                resolve(string);
            }, 3000);
        });
    };
    async function run() {
        let result = await wait3seconds("Hello Friend...");
        return result;
    }
    run().then(res => {
        console.log(res);
    })
})
