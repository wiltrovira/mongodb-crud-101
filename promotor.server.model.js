var mongoose =  require("mongoose");
var direcciones = require("./direccion.server.model.js");
var telefonos = require("./telefono.server.model.js");
var preguntas = require("./pregunta.server.model.js");

var promotorSchema = new mongoose.Schema;
promotorSchema.add({
	primerNombre : String,
	segundoNombre : String,
	primerApellido : String,
	segundoApellido : String,
	estadoCivil : String,
	generoSexo : String,
	idiomaPreferido : {type: String, default: "Español"},
	fechaDeNacimiento : Date,
	permalink : {type: String, default: this.primerNombre+this.primerApellido},
	correoElectronico : String,
	avatar : String,
	passwordHash : String,
	passwordSalt : String,
	timeStamp : String,
	fechaDeCreacion : {type: Date, default: Date.now},
	fechaDeUltimaModificacion : {type: Date, default: Date.now},
	prefijo : String,
	sufijo : String,
	direccion: [direcciones],
	telefonos: [telefonos],
	preguntas: [preguntas]
});

module.exports = promotorSchema; //mongoose.model("Promotor", promotorSchema, "promotores");
