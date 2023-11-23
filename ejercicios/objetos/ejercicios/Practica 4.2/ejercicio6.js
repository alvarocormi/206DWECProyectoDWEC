/*
* @author: Alvaro Cordero Miñambres
* @version: 1.0
* @since: 15/11/2023
* 
* ENUNCIADO
* --------------
*Crea un script que valide un código postal (formado por 5 números del 00000 al 52999):

*/

function validarCodigoPostal() {
	// Recibo los valores que introduce el usuario en el formulario
	let codigoPostalIntroducidoPorUsuario = document.getElementById("codigoPostal").value;

	// Inicializo 'resultado' al cp que introduce el usuario
	let resultado = document.getElementById("resultado");

	// Expresión regular para validar que el código postal tenga 5 dígitos
	var regex = /^\d{5}$/;

	// Verificar si el código postal cumple con la expresión regular
	if (!regex.test(codigoPostalIntroducidoPorUsuario)) {
	  return resultado.innerHTML = "< div class='error'>No cumple con el formato de 5 dígitos< /div>";
	}

	// Convertir el código postal a un número para comparar con el rango
	var codigoPostalNumero = parseInt(codigoPostalIntroducidoPorUsuario, 10);

	// Verificar si el código postal está en el rango permitido
	if (codigoPostalNumero < 0 || codigoPostalNumero > 52999) {
	  return resultado.innerHTML = "< div class='error'>No está en el rango permitido 00000-52999< /div>";
	}

	return resultado.innerHTML = "< div class='correcto'>Código postal válido< /div>";
  }
