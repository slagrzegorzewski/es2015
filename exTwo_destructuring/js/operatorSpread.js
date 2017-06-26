document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    function sumValues(a, b, c) {
        return a + b + c;
    }
    var values = [3, 2, 7],
        numbers = [1, 4, 6, 9],
        sum = sumValues.apply(null, values),
        arrayOne = [15, 2, 3],
        arrayTwo = ["one", "two", "three"];
    console.log(sum);

    function sumOfNumbers(w, x, y, z) {
        return w + x + y + z;
    }

    console.log(sumOfNumbers(...numbers));

    arrayOne.push(...arrayTwo);
    console.log(arrayOne);
});
