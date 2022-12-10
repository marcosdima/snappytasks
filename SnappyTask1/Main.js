let SnappyProduct = require('./SnappyProduct.js');
const SnappyOrder = require('./SnappyOrder.js');
const ShopifyOrders = require('./ShopifyOrders.js');

const nombre = 'd28cda300f5517794e044ff353002339';
const store = 'snappy-commerce';
const password = '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';
const orderId = 1001;

let llamada = new ShopifyOrders(nombre, store, password);

llamada.getOrders()
.then(json => {

    console.log(json);
    let order = new SnappyOrder(orderId, null);
    let currency;
    let ordenSolicitada;

    for (let objeto of json.orders) {

        if (objeto.order_number == orderId) {

            ordenSolicitada = objeto;
            order.setEstado(objeto.financial_status)
            currency = objeto.currency;

        }

    }

    for (let articulo of ordenSolicitada.line_items) {

        let producto = new SnappyProduct(
            articulo.id, 
            articulo.name, 
            articulo.price, 
            articulo.quantity);
        
        order.appendProduct(producto);
        
    }

    console.log("Precio total de la orden: ", order.getPrecioTotal(), currency);

});
