document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const obg = {
        name: "Eddy",
        age: 30
    }

    const objClone = Object.assign(obg, {id: 332});

    console.log(objClone);
})
