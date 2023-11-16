/**
 * @author Alvaro Cordero Miñambres
 * @version 1.0
 * @since 16-11-2023
 * @description Este documento contiene algunas funciones que pueden ser utiles a lo largo del curso,
 * podras importarla en tu proyecto para usarlas cuando quieras.
 * 
 */

/**
 * 
 * @param {*} fecha 
 * @returns
 * @author Alvaro Cordero Miñambres
 * Mediante esta funcion podremos formatear una fecha de una manera muy sencilla, simplemente,
 * le pasamos como parametro la funcion que queremos formatear y nos devolvera el resultado del mismo 
 */
function formatDate(fecha) {
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
	var fechaFormateada = "Hoy es " + parteFecha + " y son las " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos.";

	// Devolver el resultado
	return fechaFormateada;
}

/**
 * 
 * @param {*} fecha 
 * @returns
 * @author Alvaro Cordero Miñambres 
 * Mediante esta function podremos obtener un dia se la semana de una fecha especifica
 */
function getDayOfWeek(fecha) {
	//Creamos un array en el que almacenamos los dias de la semana
	const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

	//Cogemos el dia que nos devuelve la fecha (de 0 a 6)
	const dia = new Date(fecha).getDay();

	//Le pasamos el dia al array para que nos lo devuelva
	return diasSemana[dia];
  }


