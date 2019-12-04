const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModeloEvento = new Schema({   //Modelo de la base de datos

    nombre: String,
    categoria: String,
    lugar: String,
    fecha: Date,
    asistentes: Number,
    facultad: String,
    descripcion: String

})

module.exports = mongoose.model('eventos',ModeloEvento);