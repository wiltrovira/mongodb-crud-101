var fs = require ("fs");

//leer archivo de datos
fs.readFile("dataset.json", {encoding: "utf-8"}, function(err, data) {
	if (err){
		return console.error(err);
	} else {
		console.log("Dataset en LeerDataset -->" + data);
		//return JSON.parse(data);
		return (data);
	}
});
