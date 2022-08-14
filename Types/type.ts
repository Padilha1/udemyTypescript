
//(let nome: string
//nome = 'Joao')
let nome:string = 'Joao'
console.log(nome)

let idade: number = 27
idade = 27.5
console.log(idade)

let booleano: boolean = false
//boolean = 1
console.log(booleano)

//explicit Type
let minhaIdade: any
minhaIdade = 20
console.log(typeof minhaIdade)
minhaIdade = 'idade e 20'
console.log(typeof minhaIdade)


// Array
let hobbies: any[] = ["Cook","Read","Play"]
console.log(hobbies[1])

hobbies = [100, 8943, 59459, 59495]
console.log(hobbies)

// Tuple
let endereco: [string, number] = ["String", 10]
console.log(endereco)
// Enums
enum Cor {
    Cinza, //0
    Verde = 100, // 1
    Azul = 2,   // 2
    Vermelho
}

let MinhaCor: Cor = Cor.Verde
console.log(MinhaCor)
console.log(Cor.Azul, Cor.Vermelho)


// functions

function retornaNome():string {
    return nome
}
console.log(retornaNome())


function multiplicar(numA:number , numB:number ): number {
    return numA * numB
}
console.log(multiplicar(2,4))


//type function
let calculo: (numeroA: number, numeroB: number) => number
// calculo = retornaNome
// calculo()
calculo = multiplicar
console.log (calculo(5, 7.54))


// objeto
let usuario: {nome:string, idade: number} = {
    nome: "Joao",
    idade: 27
}
//usuario = {} // wrong

console.log (usuario)

usuario = {
    idade: 46,
    nome: "Adalberto"
}
console.log (usuario)

// CHALLENGE 
/* object employee 
- string array w/ name of managers
- function "bater ponto" receive hour(number) and return string
--> normal "ponto" (<=8)
--> out of "ponto" (>8)
*/
console.log("Employee Challenge")
const employee: {
    managers: string[],
    baterPonto: (hours: number) => string
} = {
    managers: ["Managers: Jose", "Robert", "Luiz", "Pedro"],
    baterPonto(hour: number): string {
        if(hour <=8){
            return "The time is okay"
        }else{
            return "The time is past 8 hours"
        }
    }
}

console.log (employee.managers)
console.log(employee.baterPonto(10))
console.log(employee.baterPonto(5))

// TYPE - Alias

type Employee2 = {
    managers: string[    ],
    baterPonto: (hours: number) => string
}

// Union types