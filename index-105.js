var mongoose =  require("mongoose");
var promotorSchema = require("./promotores.server.model.js");

//conecta la promesa
var Promise = require("bluebird");
Promise.promisifyAll(require("mongoose"));
mongoose.Promise = Promise;

//------------------------------//
//Abrir la conexión - es una promesa
var promiseAbrirConexion = new Promise (function(resolve, reject){
	var conn = mongoose.createConnection("localhost","senquiu",27017, function(err){
		if (err){
			conn.close();
			reject (err);
		}
		resolve (conn);
	});
}).then(function(conn){
	return promiseGuardarPromotor (conn);	
}).then(function(){
	return "Todo se completó con éxito";	
}).catch(function(err){
	console.log("Error en la conexión --> " + err.message);
});

//------------------------------//
//Guardar los datos del promotor - es una promesa
var promiseGuardarPromotor = function(conn){
	return new Promise (function(resolve, reject){
		// var promotorSchema = new mongoose.Schema({
		// 	primerNombre : String,
		// 	primerApellido : String,
		// 	permalink : String,
		// 	correoElectronico : String
		// });
		var Promotor = conn.model("Promotor", promotorSchema, "promotores");
		var promotor = new Promotor({
			//asigno los datos del promotor
			primerNombre : "Ligia",
			segundoNombre : "Cecilia",
			primerApellido : "Britton",
			segundoApellido : "Bryan",
			estadoCivil : "Soltera",
			generoSexo : "Mujer",
			idiomaPreferido : "Inglés",
			fechaDeNacimiento : "1952/11/28",
			permalink : "ligiabritton2",
			correoElectronico : "ligiabritton@hotmail.com",
			avatar : "avatar",
			passwordHash : "Password",
			passwordSalt : "Password",
			timeStamp : "2017/09/02",
			fechaDeCreacion : "2017/09/02",
			fechaDeUltimaModificacion : "2017/09/02",
			prefijo : "Sra.",
			sufijo : "",
			preguntas : [{
				esPrivada : false,
				idioma : "Español",
				tipoDePregunta : "Selección única",
				imagen : "url de la imagen o imagen embebida.",
				estaActiva : true,
				permalink : "preguntas4",
				textoDeLaPregunta : "Una neurona es una célula que seha especializado en una función",
				categorias : ["Biología", "Anatomía"],
				tags : ["Músculos", "Células" ],
				respuestas: [
					{"textoDeLaRespuesta" : "Muscular","esCorrecta" : false,"explicacion" : "No es correcta"},
					{"textoDeLaRespuesta" : "Sanguínea","esCorrecta" : false,"explicacion" : "No es correcta"},
					{"textoDeLaRespuesta" : "Epitelial","esCorrecta" : false,"explicacion" : "No es correcta"},
					{"textoDeLaRespuesta" : "Nerviosa","esCorrecta" : true,"explicacion" : "es la respuesta correcta"}
				]
			}]
		});
		console.log(promotor.primerNombre + " " + promotor.primerApellido);

		// Promotor.create(promotor, function(err, promotor){
		// 	if (err){
		// 		reject(err);
		// 	}else{
		// 		console.log("guardado! --> ", promotor);
		// 	}
		// });

		promotor.save(function(err){
			if (err){
				reject(err);
			}else{
				console.log("guardado! --> ", promotor);
				conn.close();
			}
		});

	});
};
promiseAbrirConexion;
