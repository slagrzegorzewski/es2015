document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    function *gen() {
        yield "One";
        yield "Two";
        yield "Three";
        yield "Four";
    }

    let x = gen();
    console.log(x.next().value);
    console.log(x.next().value);
    console.log(x.next().value);
    console.log(x);
    console.log(x.next().value);
    console.log(x.next().done);
    console.log(x);

    function *watches() {
        yield "Atlantic";
        yield "Casio";
        yield "Timex";
        yield "Daniel Wellington";
    }

    let myWatch = watches();

    for(let watch of myWatch) {
        console.log(watch);
    }
});
