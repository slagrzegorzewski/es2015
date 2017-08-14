document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const string = "let let let let",
          pattern = /let/g,
          stringOne = "hit hit hit hit",
          patternOne = /hit/y;
    // everytime we use exec on pattern we get only first shot
    // in this example we can use flag for pattern const: g - global
    console.log(pattern.exec(string));
    console.log(pattern.lastIndex);
    console.log(pattern.exec(string));
    console.log(pattern.lastIndex);
    console.log(pattern.exec(string));
    console.log(pattern.lastIndex);
    // we use in this example sticky flag: y - sticky.
    // but this flag find only first hit and going back to begining
    console.log(patternOne.exec(stringOne));
    console.log(patternOne.lastIndex);
    console.log(patternOne.exec(stringOne));
    console.log(patternOne.lastIndex);
    console.log(patternOne.exec(stringOne));
    console.log(patternOne.lastIndex);
})
