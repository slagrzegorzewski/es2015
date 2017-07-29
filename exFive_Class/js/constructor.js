document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    class Dinosaur {
        constructor(id, name){
            this.id = id;
            this.name = name;
        }
        getName() {
            return this.name;
        }
        // up! this metod we are using on the object
        /*Remember Class can have only one constructor
        constructor(){}*/

        static compareName(a, b){
            const nameA = a.name;
            const nameB = b.name;
            if(nameA == nameB){
                return "You have two dinos with different id number: " + a.id + " and " + b.id;
            }
            else {
                return "You have two different dinos: " + nameA + " and " + nameB;
            }
        }
        //up! this metod we are using on the class
    }
    const dinoA = new Dinosaur(111, "Velociraptor");
    const dinoB = new Dinosaur(123, "T-rex");
    console.log("Dino ID: " + dinoA.id + " " + "name: " + dinoA.getName());
    console.log(Dinosaur.compareName(dinoA, dinoB));
});
