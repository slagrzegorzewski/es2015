document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    function getPerson(name, age) {
        return {
            // we dont need to use name: name, - in ES6
            name,
            age,
            checkAge() {
                if(this.age >= 18) {
                    console.log("Youre adult");
                }
                else{
                    console.log("Grow up!");
                }
            }
        };
    };

    let p = getPerson("Tomek", 44);
    console.log(p);
    console.log(p.checkAge());
});
