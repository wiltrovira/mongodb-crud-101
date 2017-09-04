var mongoose =  require("mongoose");

// // //conecta la promesa
var Promise = require("bluebird");
Promise.promisifyAll(require("mongoose"));
mongoose.Promise = Promise;

//------------------------------//
//Abrir la conexión - es una promesa
var promiseAbrirConexion = new Promise (function(resolve, reject){
	var conn = mongoose.createConnection("localhost1","senquiu",27017, function(err){
		if (err){
			reject (err);
		}
		resolve (conn);
	});
}).then(function(conn){
	var promotorSchema = new mongoose.Schema({
		primerNombre : String,
		primerApellido : String
	});
	var Promotor = conn.model("Promotor", promotorSchema);
	var promotor = new Promotor({
		//asigno los datos del promotor
		primerNombre : "Jane",
		primerApellido : "Doe"
	});
	console.log(promotor.primerNombre + " " + promotor.primerApellido);
	Promotor.create(promotor, function(err, promotor){
		if (err){
			return err;
		}else{
			console.log("guardado! --> ", promotor);
		}
	});
	
}).catch(function(err){
	console.log("Error en la conexión --> " + err.message);
});

promiseAbrirConexion;
