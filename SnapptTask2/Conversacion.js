const Usuario = require("./Usuario");

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
        this.#sort();
        this.#appendUser(mensaje);

    }

    // Retorna el último mensaje enviado.
    lastMessage() {

        return this.#arrayDeMensajes[this.#arrayDeMensajes.length - 1];

    }

    // Retorna el primer mensaje enviado.
    firstMessage() {

        return this.#arrayDeMensajes[0];

    }

    // Retorna la duración de la conversación en milisegundos.
    duration() {

        let tiempo = this.lastMessage().getDate() - this.firstMessage().getDate();
        return tiempo;

    }

    // Ordena el array de mensajes del más viejo al más nuevo.
    #sort() {

        this.#arrayDeMensajes.sort(
            function(x, y) {

                return x.getDate() - y.getDate();

            }
        );

    }

    #appendUser(mensaje) {

        let flag = false;

        this.#arrayDeUsuarios.forEach(element => {
            
            if (element.getNombre() == mensaje.getSender()) {

                flag = true;
                element.loadMensaje(mensaje);

            }

        });

        if (!flag) {

            let usuario = new Usuario(mensaje.getSender())
            this.#arrayDeUsuarios.push(usuario);
            usuario.loadMensaje(mensaje);

        }

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