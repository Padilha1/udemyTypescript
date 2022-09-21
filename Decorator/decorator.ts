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
@logarObjeto
// @imprimivel
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
// const Eletro = new Eletrodomestico()
// Eletro.imprimir && Eletro.imprimir()


// Challenge Decorator admProfile
const userLogged = {
    name:'Guilherme Son',
    email: 'guigui@gmail.com',
    admin: true

}

function admProfile<T extends Constructor>(construtor: T){
    return class extends construtor{
        constructor(...args: any[]){
            super(...args)
            if(!userLogged || !userLogged.admin ){
                throw new Error('No permission')
            }
        }
    }
}
@admProfile
class AdmChange {
    critico (){
        console.log('Something critic was changed')
    }
}
new AdmChange().critico()
// End challeng

class ContaCorrente {
    @naoNegativo
    private saldo: number
    
    constructor(saldo: number) {
        this.saldo = saldo
    }

    @freeze
    sacar(@paramInfo valor: number){
        // if(valor <= this.saldo){
            this.saldo -= valor
            return true
        // }else {
            // return false
        // }
    }
    @freeze
    getSaldo(){
        return this.saldo
    }
}

const cc = new ContaCorrente(12000.00)
cc.sacar(5000)
console.log(cc.getSaldo())
cc.sacar(7000)
cc.sacar(6000)

// cc.getSaldo = function(){
//     return this['saldo'] + 60065
// }
console.log(cc.getSaldo())

//Object Freeze()
function freeze(target: any, nameProps: string,
                descritor: PropertyDescriptor) {
        console.log(target)
        console.log(nameProps)
        descritor.writable = false
}

function naoNegativo (target: any, nameProps: string){
    delete target[nameProps]
    Object.defineProperty(target, nameProps, {
        get: function(): any{
            return target["_" + nameProps]
        },
        set: function(value: any): void {
            if(value<0){
                throw new Error("Invalid Value")
            }else{
                target["_" + nameProps] = value
            }
        }
    })
}

function paramInfo(target: any, nameMethod: string, 
    indexParam: number){
        console.log(`Target: ${target}`)
        console.log(`Method: ${nameMethod}`)
        console.log(`Index Param: ${indexParam}`)
}