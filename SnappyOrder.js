class SnappyOrder {

    #id;
    #estado;
    #arreglo;

    constructor(id, estado, arreglo) {

        this.setId(id);
        this.setEstado(estado);
        this.arreglo = arreglo;

    }

    getPrecioTotal() {

        let total = 0;

        for (let producto of this.arreglo) {

            total += (producto.getPrecio() * producto.getCantidad());

        }

        return total;

    }

// Getters and Setters

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