document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    class Dinosaur {
        constructor(id, name){
            this.id = id;
            this.name = name;
        }
        /*Remember Class can have only one constructor
        constructor(){}*/
    }
    const dino = new Dinosaur(111, "Velociraptor");
    console.log("Dino ID: " + dino.id + " " + "name: " + dino.name);
});
