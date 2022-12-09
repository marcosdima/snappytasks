class Mensaje {

    #sender;
    #text;
    #date;

    constructor(sender, text, date) {

        this.setDate(date);
        this.setSender(sender);
        this.setText(text);

    }

    // Devuelve true si este mensaje es anterior al mensaje pasado por parámetro.
    isOlder(mensaje) {

        return this.#date < mensaje.getDate();

    }

    // Devuelve true si este mensaje es posterior al mensaje pasado por parámetro.
    isNewer(mensaje) {

        return this.#date > mensaje.getDate();

    }

    // Getters and Setters.

    getSender() {

        return this.#sender;

    }

    getText() {

        return this.#text;

    }

    getDate() {

        return this.#date;

    }

    setSender(sender) {

        this.#sender = sender;

    }

    setText(text) {

        this.#text = text;

    }

    setDate(date) {

        this.#date = new Date(date);

    }


}

module.exports = Mensaje;