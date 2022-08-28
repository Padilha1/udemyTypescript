
class Data {
    // Standard Public
    public date: number
    month: number 
    year: number

    constructor(date: number =1, month:number=1,year:number=1970){
        this.date = date
        this.month = month
        this.year = year
    }
}

const birthday = new Data(3, 11, 1991)
birthday.date =4
console.log(birthday.date)
console.log(birthday)

// omiting '()'
const wedding = new Data
wedding.year = 2017
console.log(wedding)


// 

class InteliDate {
    // Standard Public
    constructor(public date: number =1,public month:number=1,public year:number=1970){
    }
}

const Intelibirthday = new InteliDate(3, 11, 1991)
Intelibirthday.date =4
console.log(Intelibirthday.date)
console.log(Intelibirthday)

// omiting '()'
const InteliWedding = new InteliDate
InteliWedding.year = 2017
console.log(InteliWedding)

// Challenge Product
// make a product class - atttibutes: name, price and discount
// Create constructor
// Obs1: discount opcional (standard 0)
// obs2: create 2 products: pass 2 and 3 params

class Product {
    constructor(public name: string, public price:number, public discount:number=0){

    }

    public sum(): string {
        return `${this.name} costs $${this.price} and the discounted price is $${this.priceDiscounted()}`
    }

    public priceDiscounted():number {
        return this.price * (1-this.discount)
    }
}

const prod1 = new Product("Product One", 23.4)
prod1.discount = 0.1
console.log(prod1)

const prod2 = new Product("Product Two", 100, 0.3)
console.log(prod2)

// Methods
// USING PRODUCTS ABOVE

console.log(prod1.sum())
console.log(prod2.sum())

// create method Price with Discount
// Change the sum to show discounted price


// Access modifiers
// Public and Private

class Car {
    private currentSpeed:number = 0

    constructor(public brand:string, public model:string, private maxSpeed: number = 250 ){

    }
    private changeSpeed(delta:number):number {
        const newSpeed = this.currentSpeed + delta
        const validSpeed = newSpeed >= 0 &&
            newSpeed <=this.maxSpeed
        if(validSpeed){
            this.currentSpeed = newSpeed
        }else{
            this.currentSpeed = delta > 0 ? this.maxSpeed : 0
        }
        return this.currentSpeed
    }

    public accelerate ():number {
        return this.changeSpeed(5)
    }

    public brake():number {
        return this.changeSpeed(-5)
    }
}


const car1 = new Car('Ford', 'Ka', 185)

Array(50).fill(0).forEach(()=> car1.accelerate())
console.log(car1.accelerate())

Array(20).fill(0).forEach(()=> car1.brake())
console.log('Braking')
console.log(car1.brake())
