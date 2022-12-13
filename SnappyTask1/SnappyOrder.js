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

    informe(tab) {

        let espacio = " ";
        let contador = 1;
        let informe = "";
        
        espacio = espacio.repeat(tab);
        informe = espacio + "ID: " + this.#id + '\n' +
                    espacio + "Estado: " + this.#estado + '\n' +
                    espacio + "SnappyProducts: " + '\n' ;

        for (let producto of this.#arreglo) {

            informe += contador + "- " + '\n' +
                    producto.informe(4) + '\n';
                    
            contador++;

        }

        return informe;

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