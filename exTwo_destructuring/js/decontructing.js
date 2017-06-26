document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    function setCanvasOptions(options) {
        const area = options.area;
        const env = options.env;
        return [area, env];
    }
    let opt = setCanvasOptions({area: "500x500", env: "2d"});
    console.log(opt);

    /* Deconstructing under comment */

    function setOptions({area, env}) {
        return [area, env];
    }
    let optSet = setOptions({area: "600x600", env: "2d"});
    console.log(optSet);
})
