/**
 * @author Alvaro Cordero Miñambres, Carlos Garcia Cachon
 * @version 1.0
 * @since 20-11-2023
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
 * 
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


/**
 * 
 * @param {*} fecha
 * @returns 
 * @author Alvaro Cordero Miñambres, Carlos Garcia Cachon
 * 
 * Mediante esta funcion podremos obtener un mes de una fecha especifica
 */
function getMonthOfYear(fecha) {
	//Creamos un objeto con los meses del año
	const aMes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

	//Cogemos el dia que nos devuelve la fecha (de 0 a 6)
	const mes = new Date(fecha).getMonth();

	//Devolvemos el mes pasandole como clave el nombre del mes
	return aMes[mes];
}


/**
 * 
 * @param {*} codigoPostal 
 * @returns
 * @author Alvaro Cordero Miñambres 
 * 
 * Mediante esta funcion puedes validar si el codigo postal que hemos introducido como parametro es correcto
 */
function validateCP(codigoPostal) {
	// Expresión regular para verificar que el código postal tiene 5 dígitos
	var regex = /^[0-9]{5}$/;
  
	// Verificar si el código postal cumple con la expresión regular y está en el rango específico
	if (regex.test(codigoPostal) && parseInt(codigoPostal) >= 0 && parseInt(codigoPostal) <= 52999) {
	  return true; // El código postal es válido
	} else {
	  return false; // El código postal no es válido
	}
}


/**
 * 
 * @param {*} dni 
 * @returns 
 * @author Alvaro Cordero Miñambres, Carlos Garcia Cachion
 * 
 * Mediante esta funcion puedes validar si el nif que hemos introducido como parametro es correcto
 */
function validateNIF(dni) {
	// Expresión regular para verificar el formato del DNI
	var regex = /^[0-9]{8}[A-Za-z]$/;
  
	// Verificar si el DNI cumple con la expresión regular
	if (!regex.test(dni)) {
	  return false; // El formato del DNI no es válido
	}
  
	// Extraer el número y la letra del DNI
	var numeroDNI = dni.slice(0, 8);
	var letraDNI = dni.slice(8).toUpperCase();
  
	// Calcular la letra esperada para el número dado
	var letrasPosibles = 'TRWAGMYFPDXBNJZSQVHLCKE';
	var letraEsperada = letrasPosibles[numeroDNI % 23];
  
	// Verificar si la letra proporcionada coincide con la esperada
	if (letraDNI === letraEsperada) {
	  return true; // El DNI es válido
	} else {
	  return false; // La letra del DNI no es válida
	}
  }


