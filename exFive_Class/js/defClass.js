document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    /*class Article {

    }

    const art = new Article();
    console.log(art);*/

    // never declarate class before using it

    const Article = class ArticleClass {

    }
    const art = new Article();

    console.log(art);
});
