// let & const =======================
let seraQue = '?'
console.log(seraQue)
//var seraQue = '?'  // hoisting

let estarFrio = true
if(estarFrio){
    var acao = 'Colocar Casaco'
    // Escopo de Bloco - limited to inside this bracket pair
    console.log(acao)
}
//console.log(acao) --> can't access variable

const cpf: string = '123.234.453-32'
//cpf = '123.346.123-54' --> can't change CONST 
console.log(cpf)

function revelar (){
    var segredo = 'interno'
    console.log(segredo)
}
revelar()
// console.log(segredo)

{
    {
        const def = 'def'
        console.log(def)
    }
}

for (var i=0; i<10; i++) {
    console.log(i)
}
// console.log(i)


// Arrow Function ===================

function somar(n1: number, n2:number): number {
    return n1 + n2
}
console.log(somar(2,2))

const subtrair = (n1: number, n2:number):number => n1 - n2
console.log(5,7)

const saudacao = () => console.log("Hello World")
saudacao()

const falarCom = (pessoa:string) => console.log('Hello ' + pessoa)
falarCom("Joao")

//this

function withThis(){
    // console.log(this)
}

const withThisSpecial = withThis.bind(2)

withThisSpecial()

//this ??

// const ArrowThis = () => console.log(this)
// ArrowThis()


// Standard Parameter
function contagemRegressiva(inicio: number = 2): void {
    console.log(inicio)
    while(inicio>0){
        inicio--
        console.log(inicio)
    }
    console.log("End")
}
console.log("========")
contagemRegressiva(10)

// Spread & Rest

const numbers = [1, 10, 99, -6, 2004, 23842384]
console.log(Math.max(...numbers))

const TurmaA: string[] = ['Joao', 'Maria', 'Araraur', 'Soliara']
const TurmaB: string[] = ['Miguel', 'jorge', 'Sabrina',...TurmaA]
console.log(TurmaB)

function returnArray(...args: number[]):number[]{
    return args
}

const numeross = returnArray(1, 2, 4, 5, 7, 458, 2384)
console.log(numeross)

// Tuple Spred & Rest
const tuple: [number, string, boolean]  = [1, 'abc', false]

function tupleParam(a:number, b:string, c:boolean): void {
    console.log(`1) ${a}${b}${c}`)
}
tupleParam(...tuple)

function tupleParam2(...params: [number, string, boolean]){
    console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tupleParam2(...tuple)

// Destructuring Array
const caracts = ['Motor Zetec 123', 2020]
// const motor = caracts[0]
// const ano = caracts[1]

const [motor, ano] = caracts
console.log(motor)
console.log(ano)

// Destructuring Object

const item = {
    nome: "SSD 324gb",
    preco: 213
}
// const nomeItem = item.nome
// const preco = item.preco
const {nome: n, preco: p} = item
console.log(n)
console.log(p)

// Template String
const userID:string = 'Suporte1'
const Notificacao:string = '2384'
// const boasVindas = 'Boas vindas' + userID +
//     'Notificacoes: ' + Notificacao
const boasVindas2 = `Boas vindas ${userID}, Notificacoes: ${parseInt(Notificacao) > 9 ? '9' : Notificacao}`
// console.log(boasVindas)
console.log(boasVindas2)

// challenges
//1
/**
 * 
 * @param valor 
 * @returns valor * 2
 */
const double = (valor:number) => valor * 2
console.log(double(10))

//2
const dizerOla = function (nome:string  = 'Pessoa'): void {  //Check
    console.log(`Hello ${nome}!`) // check
}
dizerOla()
dizerOla('Patricia')

//3
// the minimum value
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))  // Check

//4
const array =[ 55, 20, ...nums] // Check
// add nums to array 
console.log(array)

//5
const notas = [8.5, 6.3, 9,4]
// const notas1 = notas[0]
// const notas2 = notas [1]
// const notas3 = notas[2]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)


//6
const cientist = {
    primeiroNome: 'WilL Smith',
    experiencia: 22
}
// const primeiroNome = cientist.primeiroNome
// const experiencia = cientist.experiencia
const {primeiroNome: pN, experiencia: exp} = cientist
console.log(`Name: ${pN} with ${exp} years experience`)

// Callback 

function wait3sec (callback: (dado: string)=> void) {
    setTimeout(() => {
        callback('3 secs after...')
    }, 3000)
}
wait3sec(function(resultado: string){
    console.log(resultado)
})

// Promise
function wait3secPromise () {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3 secs after promise...')
        }, 3000)
    })
}
wait3secPromise()
    .then(dado => console.log(dado))

// Example

fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(perso => perso.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))