document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    class ArrayWithId extends Array {
        constructor(id) {
            super();
            this.id = id;
        }
        updateId(id) {
            this.id = id;
        }
    }
    let arr = new ArrayWithId(22);
    arr.push("A");
    arr.push("B");
    arr.push("C");
    arr.push("D");

    console.log(arr);
    console.log(arr.length);

    arr.updateId(23);
    console.log(arr);
})
