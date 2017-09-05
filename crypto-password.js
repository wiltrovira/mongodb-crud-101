import crypto from "crypto";
export class CryptoPassword {
	constructor(pwd, optionalSalt){
		this._passwordDeUsuario = pwd;
		if (typeof optionalSalt === "undefined") { 
			this._salt = this.generarSalt(32); 
		} else {
			this._salt = optionalSalt;
		}
		this._passwordHash = this.generarPasswordHash();
	}
	
	get salt(){
		return this._salt;
	}
	set salt(s){
		if (s){
			this._salt = s;
			this._passwordHash = this.generarPasswordHash();
		}
	}
	get passwordHash(){
		return this._passwordHash;
	}

	// genera una cadena de caracteres al azar. Se utilizará como salt
	generarSalt (length){
		return crypto.randomBytes(Math.ceil(length/2))
			.toString("hex") /** convierte a formato hexadecimal */
			.slice(0,length);   /** devuelve el número de caracteres solicitados */
	}

	//hash password with crearHashSalt.
	generarPasswordHash (){
		return crypto.createHmac("sha512", this._salt).update(this._passwordDeUsuario).digest("hex");
	}

	//Valida el password de usuario, haciendo uso del salt guardado en la BD
	// validarPassword(nuevoPasswordUsuario, this.cryptoPassword, this.salt){
	// 	return this.generarPasswordHash(nuevoPasswordUsuario, salt) === cryptoPassword;
	// }

	generarSaltPasswordHash (){
		this._salt = this.generarSalt(32); /** Genera un salt de 32 caracteres*/
		this._passwordHash = this.generarPasswordHash(this._passwordUsuario, this._salt);
		return;
	}
}
