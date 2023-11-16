
var pass = prompt("Introduce una contraseña ");
var pass2 = prompt("Repite la contraseña ");

while (pass!=pass2) {
	var pass2 = prompt("La contraseña no coincide");
}


for (let index = 0; index <=2; index++) {
	var pass3 = prompt("Introduce tu contraseña tienes 3 intentos:  ");

	if(pass3 !== pass) {
		alert("Contraseña erronea")
	} else {
		break;
	}
}

if (pass3 === pass ) {
	alert("Enorabuena!!");
}
