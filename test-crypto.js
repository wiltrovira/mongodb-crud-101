import {CryptoPassword} from "./crypto-password.js";
let cryptoPassword = new CryptoPassword("MiPassword1", "8897d1105ca982f9cbd5ebea3aa28c1a"); //require("./crypto-password.js");

console.log("salt --> " + cryptoPassword.salt);
console.log("passwordHash --> " + cryptoPassword.passwordHash);
