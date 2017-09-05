var mongoose =  require("mongoose");

var direccionSchema = new mongoose.Schema;
direccionSchema.add({
	tipoDeDireccion : String,
	direccionLinea1 : String,
	direccionLinea2 : String,
	barrio : String,
	ciudad : String,
	estadoProvincia : String,
	pais : String,
	codigoPostal : String,
	fechaDeUltimaModificacion : Date
});
module.exports = direccionSchema; //mongoose.model("Direcciones", direccionSchema);
