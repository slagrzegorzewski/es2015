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
    const radioactive = "\u2622";
    const heart = "\u2764\u262F";
    console.log(radioactive, heart);
    console.log(heart.length);

    for (const s of heart){
        console.log(s);
    }
})
