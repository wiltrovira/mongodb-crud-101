var mongoose =  require("mongoose");
var promotorSchema = require("./person.server.model.js");
var fs = require ("fs");
var dataset = "./dataset.json";

//conecta la promesa
var Promise = require("bluebird");
Promise.promisifyAll(require("mongoose"));
mongoose.Promise = Promise;

//leer archivo de datos
var promiseLeerDataset = function(archivo){
	return new Promise (function(resolve, reject){
		fs.readFile(archivo, function(err, data) {
			if (err){
				reject(err);
			}else{
				console.log("Dataset en LeerDataset -->" + data);
				resolve (data);
			}
		});
	});
};

//------------------------------//
//Abrir la conexión - es una promesa
var promiseAbrirConexion = function(host, db, puerto, data){
	return new Promise (function(resolve, reject){
		var conn = mongoose.createConnection(host, db, puerto, function(err){
			if (err){
				reject (err);
			}else {
				console.log("Conn en AbrirConexion --> " + conn.readyState);
				console.log("Data en AbrirConexion --> " + data);
				resolve ([conn, data]);
			}
		});
	});
};

//------------------------------//
//Guardar los datos del promotor - es una promesa
var promiseGuardarPromotor = function(conn, data){
	return new Promise (function(resolve, reject){
		
		var Promotor = conn.model("Promotor", promotorSchema, "promotores");
		console.log("Data para guardar-->" + data);
		var dataJSON = JSON.parse(data);
		console.log(dataJSON);
	
		var promotor = new Promotor({
			primerNombre : dataJSON.primerNombre,
			segundoNombre : dataJSON.segundoNombre,
			primerApellido : dataJSON.primerApellido,
			segundoApellido : dataJSON.segundoApellido,
			estadoCivil : dataJSON.estadoCivil,
			generoSexo : dataJSON.generoSexo,
			idiomaPreferido : dataJSON.idiomaPreferido,
			fechaDeNacimiento : dataJSON.fechaDeNacimiento,
			permalink : dataJSON.permalink,
			correoElectronico : dataJSON.correoElectronico,
			avatar : dataJSON.avatar,
			passwordHash : dataJSON.passwordHash,
			passwordSalt : dataJSON.passwordSalt,
			timeStamp : dataJSON.timeStamp,
			fechaDeCreacion : dataJSON.fechaDeCreacion,
			fechaDeUltimaModificacion : dataJSON.fechaDeUltimaModificacion,
			prefijo : dataJSON.prefijo,
			sufijo : dataJSON.prefijo
		});
		
		promotor.save(function(err){
			if (err){
				reject(err);
			}else{
				conn.close();
				resolve("Operación exitosa!");
			}
		});

	});
};

promiseLeerDataset(dataset)
	.then (function(data){
		console.log("promise 1 --> " + data);
		return promiseAbrirConexion("localhost", "senquiu", 27017, data);
	}).spread (function(conn, data){
		console.log("promise 2 --> Estado de la conexión: " + conn.readyState);
		console.log("promise 2 --> Data --> : " + data);
		return promiseGuardarPromotor(conn, data);
	}).then (function(fromResolve){
		console.log(fromResolve);
	}).catch(function(err){
		console.error("Error! --> " + err);
	});

console.log("Ejecutado al final");
