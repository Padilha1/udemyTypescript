console.log("=======MODULE=======")
// import { areaRectangule } from "./rectangle";
// import { areaCircuference } from "./circuference";
import { areaCircuference as circ } from "./circuference";
import retangulo from "./rectangle";

console.log(circ(10))
console.log(retangulo(5,10))

const { sayHi } = require('./novo')
console.log(sayHi('Ana'))


/* NAMESPACE
    organized with objects
    separated in multiple files
    don't need Loaders
    (dependecies management) Complicated to bigger application
*/

/* MODULES
    organized with real modules
    APP can have multiple modules
    Needs a Loader
    Explicit declaration of Dependecies
*/