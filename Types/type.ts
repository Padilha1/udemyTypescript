
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
let calculo  : (numeroA: number, numeroB: number) => number
// calculo = retornaNome
// calculo()
calculo = multiplicar
console.log (calculo(5, 7.54))


