class ShopifyOrders {

    #nombre;
    #store;
    #password;

    constructor(nombre, store, password) {

        this.setNombre(nombre);
        this.setPassword(password);
        this.setStore(store);

    }

    // Realiza la llamada a la API con la url pasada como parametro.
    #call(url) {
        
        let header = new Headers();

        // Cargo las credenciales.
        header.append("Authorization", 'Basic ' + btoa(this.#nombre + ':' + this.#password));

        /*
        - Utilizo la función fetch para realizar el pedido a la API de shopify.
        - Guardo la promise que devuelve para retornarla al final del método.
        */
        let promesa = fetch(url, {

                method: "GET",
                headers: header,
    
            })
                .then(response => response.json())

        return promesa;

    };

    // Retorna una promise que, en caso de completarse bien, contendrá la orden solicitada.
    getOrder(orderId) {

        // https://snappy-commerce.myshopify.com/admin/api/2022-10/orders/orderId.json
        const url = "https://" + 
                    this.#store + 
                    ".myshopify.com/admin/api/2022-10/orders/" +
                    orderId +
                    ".json";

        return this.#call(url);        

    };

    // Retorna una promise que, en caso de completarse bien, contendrá las orders.
    getOrders() {

        const url = "https://" +
                    this.#store + 
                    ".myshopify.com/admin/api/2022-10/orders.json";

        return this.#call(url);

    }

    // Getters and Setters

    setNombre(nombre) {

        this.#nombre = nombre;

    }

    setStore(store) {

        this.#store = store;

    }

    setPassword(password) {

        this.#password = password;

    }

    getNombre() {

        return this.#nombre;

    }

    getPassword() {

        return this.#password;

    }

    getStore() {

        return this.#store;

    }

}

module.exports = ShopifyOrders;
      
