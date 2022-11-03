const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstudiantesSchema = new Schema({
    id_estudiante:{type:String,  required: true, max:45},
    nombre:{type: String, required: true, max:60},
    apellido_p:{type: String, required: true, max:40},
    apellido_m:{type: String, required: false, max:40},
    telefono:{type: String, required: true, max:15},
    mail:{type: String, required: true, max:70},
    edad:{type: Number, required: true, max:150}
});

module.exports = mongoose.model("estudiantes", EstudiantesSchema); 