document.addEventListener("DOMContentLoaded", function () {
    let array = [10, 20, 30, 50, 60];
    /*metoda reduce dodaje poszczególne elementy w tablicy
    let sum = array.reduce(function(a, b){
        return a + b;
    })*/
    let sum = array.reduce((a, b) => a + b);

    console.log(sum);

    /*function Counter() {
        this.count = 0;
        setTimeout(function(){
            this.count++;
            console.log(this.count);
        }.bind(this), 1)
    };
    var c = new Counter();*/

    //wymagane użycie metody bind by użyć składni odniesienia się - this

    function Counter() {
        this.count = 0;
        setTimeout(() => {
            this.count++;
            console.log(this.count);
        }, 1)
    };

    var c = new Counter();

//    Traps

  /*  let product = {
        id: 1165,
        showId: function() {
            return this.id;
        }
    }*/

    //wrong
    let product = {
        id: 1165,
        showId: () => this.id
        }

    console.log(product.showId());

    /* nie używamy arrow jako konstruktora, nie używamy przejścia do nowej linii w przypadku arrow
    let item = () => {};
    let newItem = new item();*/

    let item = () => 1;
    console.log(item());

    //let allItems = () => { id: 1234 }; undefined
    let allItems = () => ({ id: 1234, type: "fuel" });
    console.log(allItems());
});
