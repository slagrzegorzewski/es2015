document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let m = new WeakMap();

    let object_one = {id: 1};
    let object_two = {id: 2};
    let object_three = {id: 3};

    m.set(object_one, "Angular");
    m.set(object_two, "React");
    m.set(object_three, "Aurelia");

    console.log(m.get(object_two));

    // this is wrong use
    /*for(let v of m){
        console.log(m);
    }*/
});
