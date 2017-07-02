window.onload = function () {
    "use strict";

    function createIterator(array) {
        let nextIndex = 0;

        return {
            next: function() {
                return nextIndex < array.length ?
                    {value: array[nextIndex++], done: false} :
                    {done: true};
            }
        };
    };

    let myArray = ["Leia", "Luke", "Han Solo", "Chewbacca", "Obi-Wan Kenobi"];

    let swCrew = createIterator(myArray);
    console.log(swCrew.next().value);
    console.log(swCrew.next().value);
    console.log(swCrew.next().value);
    console.log(swCrew.next().done);
    console.log(swCrew.next().value);
    console.log(swCrew.next().done);
};
