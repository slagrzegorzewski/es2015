document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const n = 4.2222,
          g = 112,
          s = 2 * "LOL",
          a = 23;
    console.log(Number.isInteger(n));
    console.log(Number.isInteger(g));
    console.log(s);
    console.log(Number.isNaN(s));
    console.log("Checkinf a is safe integer: " + a + " " + Number.isSafeInteger(a));
})
