"use strict";
let chanel = "Gaveta";
let subs = 23523;
// chanel = subs
console.log(chanel);
// noEmitOnError // TSconfig
// let nome = 'Pedro'
// sourceMap ==> mapeamento entre arquivo que esta sendo executado e o arquivo web que foi pego, minificado
//NoImplicityAny
function soma(a, b) {
    return a + b;
}
let anything;
anything = 12;
anything = "bac";
// strictNullCheck, noUnusedParameters, noUnusedLocals
function saudar(isManha, hour) {
    let a = 231;
    let saudacao;
    if (isManha) {
        saudacao = "Good morning!";
    }
    else {
        saudacao = "Good life!";
    }
    return saudacao;
}
/* "outFile": "./",      Specify a file that bundles all outputs into one JavaScript file.
If 'declaration' is true, also designates a file that bundles all .d.ts output. */
//https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
//https://www.typescriptlang.org/docs/handbook/compiler-options.html
