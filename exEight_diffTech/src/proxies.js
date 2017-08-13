document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let test = () => {
        "use strict";
        return "test";
    };
    console.log(test());

    let x = {};
    let handler = {
        get: function(obj, key) {
//            return obj[key] * 2
            return `Preference key ${obj[key]}`
        }
    };
    let n = new Proxy(x, handler);

    n.id = 123;
    n.title = "hello world";

    console.log(n.title);
});
