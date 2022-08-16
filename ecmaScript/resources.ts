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
    console.log(this)
}

const withThisSpecial = withThis.bind(2)

withThisSpecial()

//this ??

const ArrowThis = () => console.log(this)
ArrowThis()
