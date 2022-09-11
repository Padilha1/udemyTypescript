console.log("==========Generics==========")

// function echo(objeto: any){
//     return objeto
// }
// console.log(echo('Joao').length)
// console.log(echo(235))
// console.log(echo({nome:'Joao', idade:213}))

//Using Generic
function echo<T>(objeto: T): T{    
    return objeto
}

console.log(echo('Joao').length)
console.log(echo<number>(235)/*.length*/)
console.log(echo({nome:'Joao', idade:213}))

//Generics with Array 

const aval:Array<number> = [10, 9.2, 7.7, 6.8]
aval.push(8.5)
// aval.push('2,3')
console.log(aval)

function print<T>(args: T[]) {
    args.forEach( elemento => console.log(elemento))
}
 
print([1,2,4,6,87])
print(['asd','123','1dfgd','test'])

type Aluno = {nome: string, idade:number}
print<Aluno> ([
    {nome: 'Joaozin', idade:12},
    {nome: 'Robert D Niro', idade:76},
    {nome: 'Angelina Jolie', idade:50}
])


// Type Generic
type Echo2 = <T>(data:T) => T
const callEcho:Echo2 = echo
console.log(callEcho<string>('Something...'))

// Class with Generic
abstract class OperacaoBinaria <T, R> {
    constructor(public operando1: T, 
        public operando2: T) {}

       abstract exec(): R
}

// console.log(new OperacaoBinaria('Bom ', 'Dia').exec())
// console.log(new OperacaoBinaria(3, 7).exec())
// console.log(new OperacaoBinaria(3, 'Sextos').exec())
// console.log(new OperacaoBinaria({}, {}).exec())

class SomaBinaria extends OperacaoBinaria<number,number>{
    exec(): number {
        return this.operando1 + this.operando2
    }
}
console.log(new SomaBinaria(3,5).exec())

class DiferenceDate extends OperacaoBinaria<Data,string>{
    getTime(data: Data): number{
        let { date, month, year } = data
        return new Date(`${month}/${date}/${year}`).getTime()
    }

    exec(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const difference = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(difference/dia)} dia(s)`
    }
}

const d1 = new Data(1, 2,2020)
const d2 = new Data(5, 3,2022)
console.log(new DiferenceDate(d1,d2).exec())

// Challenge Fila - Line
// Attribute fila array
// Metodos entrar(push), proximo(splice), imprimir(print)
class Fila<T extends number | string> {
    private fila: Array<T>

    constructor(...args: T[]){
        this.fila = args
    }

    entrar(element: T){
        this.fila.push(element)
    }
    proximo(): T|null{
        if(this.fila.length >=0 && this.fila[0]){
            const first = this.fila[0]
            this.fila.splice(0,1)
            return first
        }else {
            return null
        }
    }
    imprimir(){
        console.log(this.fila)
    }

}

const f1 = new Fila<string>("Gui", 'Pedro', "Ana", 'Lu')
f1.imprimir()
f1.entrar('Rafael')
f1.imprimir()
console.log(f1.proximo())
console.log(f1.proximo())
console.log(f1.proximo()) 
f1.imprimir()

// Constraints example above
const newFila = new Fila<number>(1,2,3,4)
newFila.imprimir()

// const WrongFila = new Fila<boolean>(true, false)

// CHALLENGE MODULE
/* Map
Object array (key, value) -> itens
methods: obter(key), put({C,V})
limpar(), imprimir()
*/
console.log("Module Challenge")
type pair<C,V> = {key: C, value: V}
class Map2 <C,V> {
    itens: Array<pair<C,V>> = new Array<pair<C,V>>()

    obter(key:C):pair<C,V>|null{
        const result = this.itens
            .filter(i => i.key === key)
        return result ? result[0] : null
    }

    colocar(pair:pair<C,V>){
        const find = this.obter(pair.key)
        if(find) {
            find.value = pair.value
        }else{
            this.itens.push(pair)
        }
    }

    limpar(){
        this.itens = new Array<pair<C,V>>()
    }
    imprimir(){
        console.log(this.itens)
    }
}

const mapa = new Map2<number, string>()
mapa.colocar({ key: 1, value: 'Pedro' })
mapa.colocar({ key: 2, value: 'Rebeca' })
mapa.colocar({ key: 3, value: 'Maria' })
mapa.colocar({ key: 1, value: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()

