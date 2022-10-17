const express = require('express');

const app = express();


const mensaje = 'Hola Marelli';
app.get('/',(req,res)=>res.send(mensaje));
app.listen(3000);

console.log('Servidor escuchando en puerto: ',3000)

/* sss */
