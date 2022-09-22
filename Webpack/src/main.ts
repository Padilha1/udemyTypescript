import Book from "./model/livro";
import $ from 'jquery'

const book1 = new Book('Dom quixote', 108.80, 0.10)
// console.log(book1.priceDiscount())

$('body').append(`<h1>${book1.name}</h1>`)
$('body').append(`<h2>Price: R$ ${book1.priceDiscount} </h2>`)