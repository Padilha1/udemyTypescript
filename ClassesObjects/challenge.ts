// Module Challenge
console.log("========Challenge Module Class========")

// Exercício 1 - Classe
class Moto {
    public speed:number = 0
    constructor(public name:string ){
        this.name = nome
    }
    
    public buzinar () {
        console.log('Tooooooooot!')
    }
    public acelerar(delta:number) {
        this.speed = this.speed + delta
    }
 
}
 
const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.speed)
moto.acelerar(30)
console.log(moto.speed)
 
// Exercício 2 - Herança


abstract class objeto2D{
    constructor (public altura:number=0, public base:number=0){

    }
    abstract area(): number
    
}
 
class retangulo  extends objeto2D {
    
    area(){
        return this.altura * this.base
    }
}
const retangulo1 = new retangulo (7,5)
console.log(retangulo1.area())
 
// Exercício 3 - Getters & Setters
class Estagiario {
    private _primeiroNome:string =''

    get primeiroNome(){
        return this._primeiroNome
    }
    set primeiroNome(value){
        if (value.length >= 3){
            this._primeiroNome = value
        } else {
            this._primeiroNome = ''
        }
    }
    

}
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
const estagiario = new Estagiario
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)