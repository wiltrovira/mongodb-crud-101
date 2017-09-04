var mongoose =  require("mongoose");

var respuestaSchema = new mongoose.Schema;
respuestaSchema.add({
	textoDeLaRespuesta : String,
	esCorrecta : Boolean,
	explicacion : String
});
module.exports = respuestaSchema; //mongoose.model("Respuestas", respuestaSchema);
