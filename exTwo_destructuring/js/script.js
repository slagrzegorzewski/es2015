document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    var numbers = [1, 2, 3, 4, 5, 6],
        [a, b, c] = numbers;
    console.log(a);
    console.log(b);
    console.log(c);

    var idCard = {
        name: "Adam",
        age: 30,
        number: 4913
    }

    var {name, age, number} = idCard;
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Card number: " + number);
});
