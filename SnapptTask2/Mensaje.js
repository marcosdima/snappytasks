class Mensaje {

    #sender;
    #text;
    #date;

    constructor(sender, text, date) {

        this.setDate(date);
        this.setSender(sender);
        this.setText(text);

    }

    isOlder(mensaje) {

        let older = this.#date < mensaje.getDate();
        return older;

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