var nom_ok = true;
var letras = "abcdefghijklmnopqrstuvwxyz";
var letras_mayus = letras.toUpperCase();
var numeros = "0123456789";
var con_num = false;
var con_mayus = false;
var con_minus = false;
var con_simbolo = false;

var user = prompt("Escribe un nombre");
do {
	if (!nom_ok) {
		var user = prompt("Escribe el nombre correctamente");
		var nom_ok = true;
	}
	for (const caracter of user) {
		if (!letras.includes(caracter) && !numeros.includes(caracter)) {
			nom_ok = false;
		}
	}

} while (nom_ok == false)

var pass = prompt("Escribe una contraseña");
do {
	if (!con_num || !con_mayus || !con_minus || !con_simbolo) {
		var pass = prompt("Escribe la contraseña correctamente");
	}

	for (const caracter of pass) {
		if (letras.includes(caracter)) {
			con_minus = true;
		} else if (letras_mayus.includes(caracter)) {
			con_mayus = true;
		} else if (numeros.includes(caracter)) {
			con_num = true;
		} else {
			con_simbolo = true;
		}
	}
} while (!con_num || !con_mayus || !con_minus || !con_simbolo)
console.log("Datos almacenados correctamente");
