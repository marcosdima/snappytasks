class Usuario {

    #nombre;
    #mensajes;
    #numeroDeMensajes;

    constructor(nombre) {

        this.setNombre(nombre);
        this.#setMensajes();
        this.#numeroDeMensajes = 0;

    }

    // Carga un mensaje al usuario.
    loadMensaje(mensaje) {

        this.#mensajes.push(mensaje);
        this.#numeroDeMensajes += 1;

    }

    // Getters and Setters.

    setNombre(nombre) {

        this.#nombre = nombre;

    }

    #setMensajes() {

        this.#mensajes = [];

    }

    getNombre() {

        return this.#nombre;

    }

    getMensajes() {

        return this.#mensajes;

    }

    getNumeroDeMensajes() {

        return this.#numeroDeMensajes;

    }


}

module.exports = Usuario;