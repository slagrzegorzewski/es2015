document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let m = new Map();

    m.set(1, "Angular");
    m.set(2, "Babel");
    m.set(3, "Ember");
    m.set(4, "React");

    console.log(m);

    for (const v of m){
        console.log(v);
    }

    console.log(m.size);
    console.log(typeof m);

    m.delete(1); // usuwanie pojedynczego wpisu;

    const a = m.get(2);
    console.log(a);

    m.clear(); // czyszczenie całego obiektu;
    console.log(m.size);
});
