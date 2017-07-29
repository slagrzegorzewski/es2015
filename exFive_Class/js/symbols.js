document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let s = Symbol();
    console.log(s);
    // remember symbol is not constructor so you cant using this: new Symbol()
    // Symbol() object is unique

    let person = {
        name: "Andrzej",
        age: 35,
        city: "Prabuty"
    }

    person[s] = "22098";

    for(let i in person){
        console.log(i);
        // symbol is not iterable
    }

    console.log(Object.getOwnPropertySymbols(person));
});
