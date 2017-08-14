document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const m = 2.9823,
          s = 16;

    console.log(Math.trunc(m));
    console.log(Math.sign(m));
    // if sign is -1 variable is negative
    // if sign is 1 variable i positive
    // if viariable is string we get Nan
    console.log(Math.log2(s));
})
