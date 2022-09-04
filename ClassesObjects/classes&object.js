"use strict";
class Data {
    constructor(date = 1, month = 1, year = 1970) {
        this.date = date;
        this.month = month;
        this.year = year;
    }
}
const birthday = new Data(3, 11, 1991);
birthday.date = 4;
console.log(birthday.date);
console.log(birthday);
// omiting '()'
const wedding = new Data;
wedding.year = 2017;
console.log(wedding);
// 
class InteliDate {
    // Standard Public
    constructor(date = 1, month = 1, year = 1970) {
        this.date = date;
        this.month = month;
        this.year = year;
    }
}
const Intelibirthday = new InteliDate(3, 11, 1991);
Intelibirthday.date = 4;
console.log(Intelibirthday.date);
console.log(Intelibirthday);
// omiting '()'
const InteliWedding = new InteliDate;
InteliWedding.year = 2017;
console.log(InteliWedding);
// Challenge Product
// make a product class - atttibutes: name, price and discount
// Create constructor
// Obs1: discount opcional (standard 0)
// obs2: create 2 products: pass 2 and 3 params
class Product {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    sum() {
        return `${this.name} costs $${this.price} and the discounted price is $${this.priceDiscounted()}`;
    }
    priceDiscounted() {
        return this.price * (1 - this.discount);
    }
}
const prod1 = new Product("Product One", 23.4);
prod1.discount = 0.1;
console.log(prod1);
const prod2 = new Product("Product Two", 100, 0.3);
console.log(prod2);
// Methods
// USING PRODUCTS ABOVE
console.log(prod1.sum());
console.log(prod2.sum());
// create method Price with Discount
// Change the sum to show discounted price
// Access modifiers
// Public and Private
class Car {
    constructor(brand, model, maxSpeed = 250) {
        this.brand = brand;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = 0;
    }
    changeSpeed(delta) {
        const newSpeed = this.currentSpeed + delta;
        const validSpeed = newSpeed >= 0 &&
            newSpeed <= this.maxSpeed;
        if (validSpeed) {
            this.currentSpeed = newSpeed;
        }
        else {
            this.currentSpeed = delta > 0 ? this.maxSpeed : 0;
        }
        return this.currentSpeed;
    }
    accelerate() {
        return this.changeSpeed(5);
    }
    brake() {
        return this.changeSpeed(-5);
    }
}
const car1 = new Car('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => car1.accelerate());
console.log(car1.accelerate());
Array(20).fill(0).forEach(() => car1.brake());
console.log('Braking');
console.log(car1.brake());
// Heritage
class Ferrari extends Car {
    constructor(model, maxSpeed) {
        super('Ferrari', model, maxSpeed);
        //...
    }
    accelerate() {
        return this.changeSpeed(20);
    }
    brake() {
        return this.changeSpeed(-16);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.brand} ${f40.model}`);
console.log(f40.accelerate());
console.log(f40.accelerate());
console.log(f40.accelerate());
console.log(f40.brake());
console.log(f40.brake());
// Getter and Setter
class Person {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0 && value <= 120) {
            this._age = value;
        }
    }
}
const person1 = new Person;
person1.age = 10;
console.log(person1);
// Static Member
class Math2 {
    static areaCirc(raio) {
        return Math2.PI * raio * raio;
    }
}
Math2.PI = 3.1416;
// const m1 = new Math()
// console.log(m1.areaCirc(4))
console.log(Math2.areaCirc(4));
// Abstract Class =! ~Concrete~ 
class Calc {
    constructor() {
        this.result = 0;
    }
    getResult() {
        return this.result;
    }
}
class Sum extends Calc {
    execute(...numeros) {
        this.result = numeros.reduce((t, a) => t + a);
    }
}
class Multiply extends Calc {
    execute(...numeros) {
        this.result = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Sum();
c1.execute(2, 3, 4, 6);
console.log(c1.getResult());
c1 = new Multiply();
c1.execute(4, 3, 5, 5);
console.log(c1.getResult());
//Private Constructor  && Singleton
class Unique {
    constructor() { }
    static getInstance() {
        return Unique.instance;
    }
    now() {
        return new Date;
    }
}
Unique.instance = new Unique;
//const wrong = new Unique()
console.log(Unique.getInstance().now());
// Attribute only Read
class Plane {
    constructor(model, prefix) {
        this.prefix = prefix;
        this.model = model;
    }
}
const turboHelice = new Plane('Tu-113', 'PT-ABC');
// turboHelice.model = 'D321'
// turboHelice.prefix = 'PT-DEF'
