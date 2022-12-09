const Conversacion = require('./Conversacion.js');
const Mensaje = require('./Mensaje.js');
const mensajes = require('./Mensajes.json');

let chat = new Conversacion();
let mensaje;

for (let msj of mensajes.Mensajes) {

    mensaje = new Mensaje(msj.sender, msj.text, msj.dateTime);
    chat.appendMensaje(mensaje);

}

console.log("");

console.log("Último mensaje: ");
console.log("De: " +  chat.lastMessage().getSender());
console.log("Contenido: " +  chat.lastMessage().getText());
console.log("Enviado: " + chat.lastMessage().getDate())

console.log("");

console.log("Duración de la conversación: ");
console.log("En milisegundos -> " + chat.duration() + "ms");
console.log("En segundos -> "  + (chat.duration() / 1000) + "s");
console.log("En minutos -> "  + ((chat.duration() / 1000) / 60) + "min");

console.log("");

console.log("Mensajes por usuario: ");
chat.getArrayDeUsuarios().forEach(element => {
   
    console.log(element.getNombre() + ': ' + element.getNumeroDeMensajes());

});

console.log("");
console.log("Terminó!");
