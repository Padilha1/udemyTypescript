console.log("==========Decorators==========")

function logarClasse(constructor: Constructor){
    console.log(constructor)
}

//Decorator Factory
function DecoratorEmpty(_: Constructor){}
function logarClasseSE(value:boolean){
    return value ? logarClasse : DecoratorEmpty
}
function decorator(obj: {a:string, b:number}){
    return function(_: Function):void {
        console.log(obj.a + ' ' + obj.b)
    }
}


// new Eletrodomestico()
// new Eletrodomestico()

type Constructor = { new (...args: any[]): {} }

function logarObjeto(construtor: Constructor){
    return class extends construtor {
        constructor(...args: any[]){
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}

interface Eletrodomestico {
    imprimir?(): void;
}

// @logarClasse
// @decorator({a:'Test', b: 123})
// @logarClasseSE(true)
// @logarObjeto
@imprimivel
class Eletrodomestico {
    constructor(){
        console.log("novo...")
    }
}

function imprimivel(construtor: Function){
    construtor.prototype.imprimir = function () {
        console.log(this)
    }
}

// (<any>new Eletrodomestico()).imprimir()
const Eletro = new Eletrodomestico()
Eletro.imprimir && Eletro.imprimir()










