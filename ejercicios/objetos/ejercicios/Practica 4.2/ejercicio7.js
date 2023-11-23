/*
* @author: Alvaro Cordero Miñambres
* @version: 1.0
* @since: 15/11/2023
* 
* ENUNCIADO
* --------------
*Crea una aplicación web que sirva para validar NIFs indicando si es correcto o no:
*/

function validarNIF() {
	// Recibo los valores que introduce el usuario en el formulario
	let nifIntroducidoPorUsuario = document.getElementById("nif").value;

	// Inicializo 'resultado' al NIF que introduce el usuario
	let resultado = document.getElementById("resultado");

	// Expresión regular para validar el formato del NIF
	var regex = /^[XYZ\d]\d{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

	// Verificar si el NIF cumple con la expresión regular
	if (!regex.test(nifIntroducidoPorUsuario)) {
		return resultado.innerHTML = "< div class='error'>No cumple con el formato de NIF< /div>";
	}

	// Tabla de letras para el cálculo del NIF
	var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

	// Variable para comprobar si se introduce un NIE en vez de NIF
	var cadenaNIE = "";
	// Variable para calcular el indice a comprobar 
	var resto = "";

	// Verificamos si la primera posicion de la cadena es alguna de estas letras, y sustituimos el valor
	if (nifIntroducidoPorUsuario.charAt(0) == "X") {
	  cadenaNIE = 0 + nifIntroducidoPorUsuario.substring(1);
	}

	if (nifIntroducidoPorUsuario.charAt(0) == "Y") {
	  cadenaNIE = 1 + nifIntroducidoPorUsuario.substring(1);
	}

	if (nifIntroducidoPorUsuario.charAt(0) == "Z") {
	  cadenaNIE = 2 + nifIntroducidoPorUsuario.substring(1);
	}

	// Extraer la letra del NIF
	var letraNIF = nifIntroducidoPorUsuario.charAt(8);

	// Obtener el índice de la letra en la tabla
	var indiceLetra = letras.indexOf(letraNIF);

	if (cadenaNIE == "") {
	// Calcular el resto de la división de los números del NIF entre 23
	resto = parseInt(nifIntroducidoPorUsuario.substring(0, 8)) % 23;
	} else {
	// Calcular el resto de la división de los números del NIF entre 23
	resto = parseInt(cadenaNIE.substring(0, 8)) % 23;
	}
	// Verificar si la letra del NIF coincide con el resultado del cálculo
	if (indiceLetra !== resto) {
		return resultado.innerHTML = "< div class='error'>NIF no válido< /div>";
	}

	return resultado.innerHTML = "< div class='correcto'>NIF válido< /div>";
}