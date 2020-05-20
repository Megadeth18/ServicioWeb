const express =require('express');
const app=express();
const port=4000;

const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.set('index',path.join(__dirname,'..routes/index'));

app.listen(port, ()=> {
    console.log("Servidor escuchando por el puerto:",port);
}).on("error", err => {
    console.log("Error al inicar el servidor", err);
});
