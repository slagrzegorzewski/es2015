document.addEventListener("DOMContentLoaded", function () {
//    window.console.log("test");
    "use strict";
    let giftCard = {
        sku: "sk001",
        name: "Karta podarunkowa",
        price: 50,
        class: "gift"
    }

    function createMarkup(product) {
        return `
            <div class="product ${product.class}">
                <h2>${product.name}</h2>
                <span class="sku">s/n: ${product.sku}</span>
                <span class="price">cena: ${product.price}</span>
            </div>
        `
    }
    var content = document.querySelector(".content");
    content.innerHTML = createMarkup(giftCard);
});
