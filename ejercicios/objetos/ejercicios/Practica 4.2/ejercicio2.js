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
function crearFecha(dia, mes, anyo, hora, minutos, segundos) {
	//Creamos unavariable para almacenar la fecha formateda
	var fechaFormateada;

	//Si el tamaño e los argumentos recbidos en la funcion es igual a 0
	if (arguments.length == 0) {
		/**
		 * Este método devuelve el objeto date como una cadena utilizando las convenciones locales.
		 */
		fechaFormateada = new Date().toLocaleDateString();

		//Devuelve la fecha actual formateada
		return alert(fechaFormateada);
	}else {
		//Si no es igual a 0 , nos devuelve la fecha formateada
		/**
		 * Este método devuelve el objeto date como una cadena utilizando las convenciones locales.
		 */
		fechaFormateada = new Date(dia,mes,anyo,hora,minutos,segundos).tolocalDateString();

		//Devuelve la fecha actual formateada
		return alert(fechaFormateada);

	}

}

//Llamamos a la funcion
crearFecha();

