var mongoose =  require("mongoose");

var telefonoSchema = new mongoose.Schema;
telefonoSchema.add({
	CodigoDePais : String,
	codigoDeArea : String,
	pais : String,
	telefono : String,
	tipoDeTelefono : String
});

module.exports = telefonoSchema; //mongoose.model("Telefonos", telefonoSchema);
