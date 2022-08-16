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

