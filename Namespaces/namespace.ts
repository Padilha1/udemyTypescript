console.log("=========NameSpaces=========")

// namaspace == export function

namespace Areas {
    const PI = 3.14

    export function areaCirc(raio:number):number{
        return PI*Math.pow(raio,2)
    }


    export function areaRet(base:number, altura:number):number{
        return base * altura
    }

}

// reference to namespace
console.log(Areas.areaCirc(10))
console.log(Areas.areaRet(10, 15))
