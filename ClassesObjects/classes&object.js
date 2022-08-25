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
