const express = require('express');

const app = express();
const port = process.env.PORT || 443;

const mensaje = 'Hola Marelli en puerto: '+port;
app.get('/',(req,res)=>res.send(mensaje));
app.listen(port);

console.log('443Servidor escuchando en puerto: ',port)
