"use strict";
console.log("=========NameSpaces=========");
// namaspace == export function
var Areas;
(function (Areas) {
    const PI = 3.14;
    function areaCirc(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.areaCirc = areaCirc;
    function areaRet(base, altura) {
        return base * altura;
    }
    Areas.areaRet = areaRet;
})(Areas || (Areas = {}));
// reference to namespace
console.log(Areas.areaCirc(10));
console.log(Areas.areaRet(10, 15));
