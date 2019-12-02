'use strict'
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

const app = express();

// conexion con Mongo
mongoose.connect('mongodb://localhost:27017/eventosPoli')
    .then(db => console.log('DB conectada'))
    .catch(err => console.log(err));
// importar rutas
const indexRoutes = require('./rutas/index');


// configuracion

app.set('port', process.env.PORT || 3000); //que tome un puerto por defecto o sino que tome el puerto 3000
app.set('views', path.join(__dirname,'views')); //darle la ubicacion al servidor de la carpeta vistas
app.set('view engine','ejs'); 

// middlewares : funciones que se ejecutan antes de que lleguen a las  rutas
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); // para recibir los datos en formato json

// rutas
app.use('/',indexRoutes);


// correr el servidor
app.listen(app.get('port'), () => {

console.log(`Server on port ${app.get('port')}`);
})




