document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var table = ["Raptor", "T-rex", "Triceratops", "Compsognatus", "Apatosaurus"];

    // wyoprowadzenie kluczy oraz ich wartości do konsoli
    /*for (let key in table) {
        console.log(key + " " + table[key]);
    }*/
    for (let value of table) {
        console.log(value);
    }

    const myName = "Slawomir";
    for (const char of myName){
        console.log(char);
    }
});
