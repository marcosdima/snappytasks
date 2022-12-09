class Conversacion {

    #arrayDeMensajes;
    #arrayDeUsuarios;

    constructor() {

        this.#setArrayDeMensajes();
        this.#setArrayDeUsuarios();

    }

    // Agrega un mensaje al array de mensajes.
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

    // Retorna el primer mensaje enviado.
    fistMessage() {

        let retorno = this.#arrayDeMensajes[0];
        let contenedor;
        
        for (let index in this.#arrayDeMensajes) {

            contenedor = this.#arrayDeMensajes[index];

            if (retorno.isNewer(contenedor)) {

                retorno = contenedor;

            }

        }

        return retorno;

    }

    // Retorna la duración de la conversación en milisegundos.
    duration() {

        let tiempo = this.lastMessage().getDate() - this.fistMessage().getDate();
        return tiempo;

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