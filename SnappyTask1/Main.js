let SnappyProduct = require('./SnappyProduct.js');
let SnappyOrder = require('./SnappyOrder.js');

console.log("Hola");

// Constructor: id, nombre, precio y cantidad.
let p1 = new SnappyProduct(1, 'a', 10, 4);
let p2 = new SnappyProduct(2, 'b', 100, 3);
let p3 = new SnappyProduct(3, 'c', 1000, 2);
let p4 = new SnappyProduct(4, 'd', 10000, 1);

const array = [p1, p2, p3, p4];

let test = new SnappyOrder(1, 'abierto', array);

console.log(test.getPrecioTotal());
