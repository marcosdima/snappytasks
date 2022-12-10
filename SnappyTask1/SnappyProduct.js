class SnappyProduct {

    #id;
    #nombre;
    #precio;
    #cantidad;

    constructor(id, nombre, precio, cantidad) {

        this.setId(id);
        this.setNombre(nombre);
        this.setPrecio(precio);
        this.setCantidad(cantidad);

    }

    // Retorna el precio multiplicado por la cantidad de unidades.
    getPrecioTotal() {

        return (this.getPrecio() * this.getCantidad());

    }

    // Setters and Getters.

    setId(id) {

        this.#id = id;

    }

    setNombre(nombre) {

        this.#nombre = nombre;

    }

    setPrecio(precio) {

        this.#precio = precio;

    }

    setCantidad(cantidad) {

        this.#cantidad = cantidad;

    }

    getPrecio() {

        return this.#precio;

    }

    getId(){

        return this.#id;

    }

    getCantidad() {

        return this.#cantidad;

    }

    getNombre() {

        return this.#nombre;

    }

}

module.exports = SnappyProduct;