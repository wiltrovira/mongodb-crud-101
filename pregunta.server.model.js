var mongoose =  require("mongoose");
var respuestas = require("./respuestas.server.model.js");

var preguntaSchema = new mongoose.Schema;
preguntaSchema.add({
	esPrivada : {type: Boolean, default: false},
	timeout: {type: Number, default: 0},
	idioma : {type: String, default: "Español"},
	tipoDePregunta : {type: String, default: "Selección única"},
	imagenDeLaPreguntaURI: String,
	imagenDeLaPregunta: { data: Buffer, contentType: String},
	estaActiva : {type: Boolean, default: true},
	fechaDeUltimaModificacion : {type: Date, default: Date.now},
	fechaDeCreacion : {type: Date, default: Date.now},
	permalink : String,
	tags: String,
	nivelDeDificultad: {type: Number, default: 0},
	likes: {type: Number, default: 0},
	categorias: String,
	textoDeLaPregunta : String,
	respuestas: [respuestas]
});

module.exports = preguntaSchema; //mongoose.model("Preguntas", preguntaSchema);


