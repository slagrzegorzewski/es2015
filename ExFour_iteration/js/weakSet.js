document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let s = new WeakSet();
    let object_one = {name: "Ed"};
    let object_two = {name: "Edd"};
    let object_three = {name: "Eddy"};
    s.add(object_one);
    s.add(object_two);
    s.add(object_three);

    console.log(s)

    console.log(s.delete(object_two));
    console.log(s.has(object_two));
})
