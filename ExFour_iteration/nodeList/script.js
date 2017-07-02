window.onload = function () {
    "use strict";

    const paragraphs = document.querySelectorAll("p");

    console.log(paragraphs);

    for (const p of paragraphs) {
        p.className = "skyBlue";
    }
};
