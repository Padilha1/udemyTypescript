"use strict";
//(let nome: string
//nome = 'Joao')
let nome = 'Joao';
console.log(nome);
let idade = 27;
idade = 27.5;
console.log(idade);
let booleano = false;
//boolean = 1
console.log(booleano);
//explicit Type
let minhaIdade;
minhaIdade = 20;
console.log(typeof minhaIdade);
minhaIdade = 'idade e 20';
console.log(typeof minhaIdade);
// Array
let hobbies = ["Cook", "Read", "Play"];
console.log(hobbies[1]);
hobbies = [100, 8943, 59459, 59495];
console.log(hobbies);
// Tuple
let endereco = ["String", 10];
console.log(endereco);
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Vermelho"] = 3] = "Vermelho";
})(Cor || (Cor = {}));
let MinhaCor = Cor.Verde;
console.log(MinhaCor);
console.log(Cor.Azul, Cor.Vermelho);
// functions
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 4));
//type function
let calculo;
// calculo = retornaNome
// calculo()
calculo = multiplicar;
console.log(calculo(5, 7.54));
// objeto
let usuario = {
    nome: "Joao",
    idade: 27
};
//usuario = {} // wrong
console.log(usuario);
usuario = {
    idade: 46,
    nome: "Adalberto"
};
console.log(usuario);
// CHALLENGE 
/* object employee
- string array w/ name of managers
- function "bater ponto" receive hour(number) and return string
--> normal "ponto" (<=8)
--> out of "ponto" (>8)
*/
console.log("Employee Challenge");
const employee = {
    managers: ["Managers: Jose", "Robert", "Luiz", "Pedro"],
    baterPonto(hour) {
        if (hour <= 8) {
            return "The time is okay";
        }
        else {
            return "The time is past 8 hours";
        }
    }
};
console.log(employee.managers);
console.log(employee.baterPonto(10));
console.log(employee.baterPonto(5));
console.log("Finish Challenge============");
// Union types
let nota = 10;
console.log(`minha nota e ${nota}! `);
//Checking types
let valor = true;
if (typeof valor == "number") {
    console.log("It's a number");
}
else {
    console.log(typeof valor);
}
// never 
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "sabao",
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco invalido!');
        }
    }
};
produto.validarProduto();
