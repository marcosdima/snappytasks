const SnappyProduct = require('./SnappyProduct.js');
const SnappyOrder = require('./SnappyOrder.js');
const ShopifyOrders = require('./ShopifyOrders.js');

const nombre = 'd28cda300f5517794e044ff353002339';
const store = 'snappy-commerce';
const password = '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';
const orderNumber = 1001;

let llamada = new ShopifyOrders(nombre, store, password);

llamada.getOrders()
.then(json => {

    let order = new SnappyOrder(orderNumber, null);
    let ordenSolicitada;

    // Recorro las orders del json para tomar la que se corresponda con el orderNumber.
    for (let objeto of json.orders) {

        if (objeto.order_number == orderNumber) {

            ordenSolicitada = objeto;
            order.setEstado(objeto.financial_status)

        }

    }

    // Recorro los items de la orden para cargar los SnappyProducts.
    for (let articulo of ordenSolicitada.line_items) {

        // Constructor: id, nombre, precio, cantidad.
        let producto = new SnappyProduct(
            articulo.id, 
            articulo.name, 
            articulo.price, 
            articulo.quantity);
        
        order.appendProduct(producto);
        
    }

   
    console.log();
    console.log(order.informe());
    console.log();
    console.log("Precio total de la orden: ", order.getPrecioTotal(), ordenSolicitada.currency);

})
.catch(error => console.log(error));
