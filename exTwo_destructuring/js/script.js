document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    var numbers = [1, 2, 3, 4, 5, 6],
        [a, b] = numbers;
    console.log(a);
    console.log(b);

    var idCard = {
        name: "Adam",
        age: 30,
        number: 4913
    }

    var {name, age, number} = idCard;
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Card number: " + number);

    function getNumbers(){
        return [4, 7, 22, 4];
    }
    var [a, , c] = getNumbers();
    console.log(a, c);

    function multiplyValues(x = 1, y = 1){
        return x * y;
    }
    console.log(multiplyValues(6));
});
