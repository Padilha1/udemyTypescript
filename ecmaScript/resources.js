"use strict";
// let & const =======================
let seraQue = '?';
console.log(seraQue);
//var seraQue = '?'  // hoisting
let estarFrio = true;
if (estarFrio) {
    var acao = 'Colocar Casaco';
    // Escopo de Bloco - limited to inside this bracket pair
    console.log(acao);
}
//console.log(acao) --> can't access variable
const cpf = '123.234.453-32';
//cpf = '123.346.123-54' --> can't change CONST 
console.log(cpf);
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
// console.log(segredo)
{
    {
        const def = 'def';
        console.log(def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
// Arrow Function ===================
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(5, 7);
const saudacao = () => console.log("Hello World");
saudacao();
const falarCom = (pessoa) => console.log('Hello ' + pessoa);
falarCom("Joao");
//this
function withThis() {
    // console.log(this)
}
const withThisSpecial = withThis.bind(2);
withThisSpecial();
//this ??
// const ArrowThis = () => console.log(this)
// ArrowThis()
// Standard Parameter
function contagemRegressiva(inicio = 2) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log("End");
}
console.log("========");
contagemRegressiva(10);
// Spread & Rest
const numbers = [1, 10, 99, -6, 2004, 23842384];
console.log(Math.max(...numbers));
const TurmaA = ['Joao', 'Maria', 'Araraur', 'Soliara'];
const TurmaB = ['Miguel', 'jorge', 'Sabrina', ...TurmaA];
console.log(TurmaB);
function returnArray(...args) {
    return args;
}
const numeross = returnArray(1, 2, 4, 5, 7, 458, 2384);
console.log(numeross);
// Tuple Spred & Rest
const tuple = [1, 'abc', false];
function tupleParam(a, b, c) {
    console.log(`1) ${a}${b}${c}`);
}
tupleParam(...tuple);
function tupleParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tupleParam2(...tuple);
