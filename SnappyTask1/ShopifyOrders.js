class ShopifyOrders {

    #nombre;
    #store;
    #password;

    constructor(nombre, store, password) {

        this.setNombre(nombre);
        this.setPassword(password);
        this.setStore(store);

    }

    getOrders() {
        // https://snappy-commerce.myshopify.com/admin/api/2022-10/order.json
        const url = "https://" + this.#store + ".myshopify.com/admin/api/2022-10/orders.json";
        let header = new Headers();
        let ordenes;

        header.append("Authorization", 'Basic ' + btoa(this.#nombre + ':' + this.#password));

        /*
        let promise2 = fetch(url, {

            method: "GET",
            headers: header,

        })
        .then(response => response.json())
        .then(json => resolve(json))
        */

        let promesa = fetch(url, {

                method: "GET",
                headers: header,
    
            })
                .then(response => response.json())

        return promesa;
    };


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
      
