document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const typedArr = new Uint8Array([1,2,3.123,4.666,5,30000]);

    // dany zakres dla Uint8Array nie objemuje licz zmienno przecinkowych ponieważ jest to zakres liczb całkowitych Uint8Array();
/*Uint8Array(); 8 bit liczby całkowite
Uint8ClampedArray();
Int16Array();
Uint16Array();
Int32Array();
Uint32Array();
Float32Array();
Float64Array();*/

    console.log(typedArr);
    console.log(typedArr.length);
    for(const s of typedArr){
        console.log(s);
    }
})
