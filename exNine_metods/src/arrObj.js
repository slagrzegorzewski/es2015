document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const arr = "Header",
          arrNum = [1, 2, 4, 5],
          arrOf = Array.of(10, 20 ,30 ,40);

    console.log(Array.from(arr));
    console.log(Array.from(arrNum, x => x * 4));
    console.log(arrOf);
    console.log(arrOf.find(x => x > 19));
    console.log(arrOf.find(x => x < 30));
})
