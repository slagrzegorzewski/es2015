document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let color = {
        name: "blue",
        hex: "#0000FF"
    }

//    Reflect.deleteProperty(color, "hex");

//    let prop = Object.defineProperty(color, "class", {value: "basic"});
    // up return obj
    let prop = Reflect.defineProperty(color, "class", {value: "basic"});
    // up alternate for object but return boolean true or false
    console.log(color);
    console.log(prop);
})
