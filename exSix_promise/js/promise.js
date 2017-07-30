document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    let x = 4;

    let knock = new Promise(function(resolve, reject){
        if(x == 1){
            resolve("I`ve got it");
        }
        else{
            reject(Error("Something goes wrong..."));
        }
    });
    console.log(knock);

    knock.then(function(result){
        console.log(result);
    }).catch(function(error){
        console.log(error);
    });
});
