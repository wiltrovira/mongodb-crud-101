var mongoose =  require("mongoose");

var personaSchema = new mongoose.Schema;
personaSchema.add({
	primerNombre : { type: String, required: true },
	segundoNombre : String,
	primerApellido : { type: String, required: true },
	segundoApellido : String,
	estadoCivil : String,
	generoSexo : { type: String, required: true },
	idiomaPreferido : {type: String, default: "Español"},
	fechaDeNacimiento : Date,
	permalink : {type: String, required: true},
	correoElectronico : { type: String, required: true },
	avatarURI: String,
	avatar : { data: Buffer, contentType: String},
	password : {type: String, required: true},
	passwordHash : { type: String, required: true },
	passwordSalt : { type: String, required: true },
	timeStamp : String,
	fechaDeCreacion : {type: Date, default: Date.now},
	fechaDeUltimaModificacion : {type: Date, default: Date.now},
	prefijo : String,
	sufijo : String,
});

module.exports = personaSchema;
