const {Schema,model} = require('mongoose');

const newEstudiantes = new Schema({
    nombre:String,
    apellido:String,
    id:String
})

module.exports = model("estudiante", newEstudiantes);

