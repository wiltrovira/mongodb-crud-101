var mongoose =  require("mongoose");

var personSchema = new mongoose.Schema;
personSchema.add({
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
});

module.exports = personSchema; //mongoose.model("Promotor", promotorSchema, "promotores");
