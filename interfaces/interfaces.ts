console.log("========Interfaces========")

interface Human {
    nome: string    // always
    idade?: number // optional 
    [prop: string]:any
    saudar(sobrenome:string): void
}

function saudarComOla(pessoa:Human){
    console.log('Ola ' + pessoa.nome + ', ' + pessoa.idade + ' anos')
}

function mudarNome(pessoa:Human){
    pessoa.nome = 'Joana'
}

const pessoa: Human = {
    nome: "Joao",
    idade: 26,
    saudar(sobrenome: string){
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({nome:'Jonas', idade: 23, altura: 1.75})
pessoa.saudar('Skywalker')

// using Class ===========================================
class Cliente implements Human {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string){
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

const myClient = new Cliente()
myClient.nome = 'Han'
saudarComOla(myClient)
myClient.saudar('Solo')

// using Functions =======================================

interface FuncaoCalc {
    (a:number, b:number): number
}

let potencia: FuncaoCalc
potencia = function(base:number, exp:number):number{
    // Math.pow(2,8)
    // 2 ** 8
    return Array(exp).fill(base).reduce((t,a)=> t*a)
}
console.log(potencia(2,8))
console.log(potencia(12,8))

// Heritage

interface A {
    a():void
}

interface B {
    b():void
}

interface ABC extends A,B {
    c(): void
}

class RealA implements A {
    a():void {}
}

class RealAB implements A,B{
    a():void {}
    b():void {}
}

class RealABC implements ABC {
    a():void {}
    b():void {}
    c():void {}
}
