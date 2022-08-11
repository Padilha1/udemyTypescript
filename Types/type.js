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
