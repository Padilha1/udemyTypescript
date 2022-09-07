"use strict";
console.log("========Interfaces========");
function saudarComOla(pessoa) {
    console.log('Ola ' + pessoa.nome + ', ' + pessoa.idade + ' anos');
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: "Joao",
    idade: 26,
    saudar(sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome:'Jonas', idade: 23, altura: 1.75})
pessoa.saudar('Skywalker');
// using Class ===========================================
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const myClient = new Cliente();
myClient.nome = 'Han';
saudarComOla(myClient);
myClient.saudar('Solo');
let potencia;
potencia = function (base, exp) {
    // Math.pow(2,8)
    // 2 ** 8
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(2, 8));
console.log(potencia(12, 8));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
