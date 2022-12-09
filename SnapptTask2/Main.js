let Conversacion = require('./Conversacion.js');
let Mensaje = require('./Mensaje.js');

let chat = new Conversacion();
let msj = new Mensaje("Carlos", "Hola", "2022-03-26");
let msj2 = new Mensaje("Carlos", "Aaa", "2022-03-25");

chat.appendMensaje(msj);
chat.appendMensaje(msj2);

console.log(chat.lastMessage().getText());