class Conversacion {

    #arrayDeMensajes;
    #arrayDeUsuarios;

    constructor() {

        this.#setArrayDeMensajes();
        this.#setArrayDeUsuarios();

    }

    appendMensaje(mensaje) {

        this.#arrayDeMensajes.push(mensaje);

    }

    // Retorna el último mensaje enviado.
    lastMessage() {

        let retorno = this.#arrayDeMensajes[0];
        let contenedor;
        
        for (let index in this.#arrayDeMensajes) {

            contenedor = this.#arrayDeMensajes[index];

            if (retorno.isOlder(contenedor)) {

                retorno = contenedor;

            }

        }

        return retorno;

    }

    // Getters and Setters.

    getArrayDeMensajes() {

        return this.#arrayDeMensajes;

    }

    getArrayDeUsuarios() {

        return this.#arrayDeUsuarios;

    }

    #setArrayDeMensajes() {

        this.#arrayDeMensajes = [];

    }

    #setArrayDeUsuarios() {

        this.#arrayDeUsuarios = [];

    }

}

module.exports = Conversacion;