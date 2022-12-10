class SnappyOrder {

    #id;
    #estado;
    #arreglo;

    constructor(id, estado) {

        this.setId(id);
        this.setEstado(estado);
        this.#arreglo = [];

    }

    // Obtiene el precio total de la orden.
    getPrecioTotal() {

        let total = 0;

        for (let producto of this.#arreglo) {

            total += producto.getPrecioTotal();

        }

        return total;

    }

    // Agrega un producto a la orden.
    appendProduct(producto) {

        this.#arreglo.push(producto);

    }

// Getters and Setters.

    setId(id) {

        this.#id = id;

    }

    setEstado(estado) {

        this.#estado = estado;

    }

    getId() {

        return this.#id;

    }

    getEstado() {

        return this.#estado;

    }

}

module.exports = SnappyOrder;