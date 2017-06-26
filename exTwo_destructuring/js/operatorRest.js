document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    function putValues(...Args) {
        var values = Args.sort();
        return values;
    }

    console.log(putValues("JS", "React", "BlackBone", "Angular", "Ember", "Ionic", "Webpack"));
});
