const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const mensaje = 'Hola Marelli en puerto: '+port;
app.get('/',(req,res)=>res.send(mensaje));
app.listen(port);
console.log('Servidor escuchando en puerto: ',port)
