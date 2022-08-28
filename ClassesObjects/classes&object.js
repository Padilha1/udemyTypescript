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
