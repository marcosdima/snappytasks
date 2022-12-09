const Conversacion = require('./Conversacion.js');
const Mensaje = require('./Mensaje.js');
const mensajes = require('./Mensajes.json');

let chat = new Conversacion();
let mensaje;

for (let msj of mensajes.Mensajes) {

    mensaje = new Mensaje(msj.sender, msj.text, msj.dateTime);
    chat.appendMensaje(mensaje);

}

console.log("Último mensaje: " + chat.lastMessage().getSender());
console.log("Duración de la conversación: " + chat.duration());

console.log("Terminó!");
