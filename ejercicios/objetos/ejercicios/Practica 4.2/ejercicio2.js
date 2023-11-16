/*
* @author: Alvaro Cordero Miñambres
* @version: 1.0
* @since: 15/11/2023
* 
* ENUNCIADO
* --------------
* Crea una función que reciba como parámetros: día, mes, año, hora, minutos y segundos y cree una fecha
con esos datos. Si la función no recibe ningún parámetro creará la fecha actual. La función mostrará un
alert con la información en el siguiente formato:

*/

/**
 * 
 * @param {*} dia 
 * @param {*} mes 
 * @param {*} anyo 
 * @param {*} hora 
 * @param {*} minutos 
 * @param {*} segundos 
 * @returns 
 * 
 */


function obtenerMensajeFecha(fecha) {
	// Verificar si se proporcionó una fecha, de lo contrario, usar la fecha actual
	if (!fecha) {
		fecha = new Date();
	}
	// Configurar las opciones de formato para toLocaleDateString()
	var opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	// Obtener la parte de la fecha formateada
	var parteFecha = fecha.toLocaleDateString(undefined, opcionesFecha);

	// Obtener la parte de la hora
	var horas = fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();

	// Construir la cadena completa
	var resultado = "Hoy es " + parteFecha + " y son las " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos.";

	// Devolver el resultado
	return resultado;
}

function crearFecha(dia, mes, anyo, hora, minutos, segundos) {
	var fechaNueva;
	//Si el tamaño e los argumentos recbidos en la funcion es igual a 0
	if (arguments.length == 0) {
		fechaNueva = new Date();

		//Devuelve la fecha actual formateada
		return alert(fechaFormateada);
	} else {
		fechaNueva = new Date(dia, mes, anyo, hora, minutos, segundos);
		var fechaFormateada = obtenerMensajeFecha(fechaNueva)

		//Devuelve la fecha actual formateada
		return alert(fechaFormateada);
	}

}


//Llamamos a la funcion
crearFecha(1, 1, 1, 1, 1, 1);

