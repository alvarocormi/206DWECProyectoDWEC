/*
* @author: Alvaro Cordero Miñambres
* @version: 1.0
* @since: 15/11/2023
* 
* ENUNCIADO
* --------------
* Crea un script que pida al usuario su fecha de nacimiento y le diga el día de la semana en que nació y el
* día de la semana de todos sus cumpleaños hasta este año.
*/

/**
 * Cogemos el año actual mediante el objeto Date y el metodo getFullYear()
 */
const oFechaActual = new Date();

/**
 * Pedimos al usuario su fecha de Nacimiento, creando un objeto Date
 */
const oFechaNac = new Date(prompt("Dime tu fecha de nacimiento (año-mes-dia)"));

/**
 * Cogemos el dia de la semana mediante la funcion getDay()
 * getDay() devuelve numeros del 0 a 6 siendo Lunes->0, Domingo-> 6
 * */
let diaSemana = oFechaNac.getDay();


/**
 * Creamos un objeto que almacene los dias de la semana asociandole como clave valores del 0 al 6 y como valores los dias de la semana
 */
const DIAS_SEMANA = {
 0: 'Domingo',
 1: 'Lunes',
 2: 'Martes',
 3: 'Miercoles',
 4: 'Jueves',
 5: 'Viernes',
 6: 'Sabado'
};

//Le pasamos al objeto el numero del dia de la semana que queremos que nos guarde como texto
const dia = DIAS_SEMANA[diaSemana];

//Mostramos por pantalla el dia en el que ha nacido el usuario
console.log("Naciste un: "+dia);

/**
 * Mientras el año de la fecha de nacimiento del usuario sea menor que el año de la fecha actual
 */
while (oFechaNac.getFullYear() <= oFechaActual.getFullYear()) {
	/**
	 * Mostramos el año de la fecha de nacimiento
	 * Calculamos el dia de la semana llamando al objeto DIAS_SEMANA y pasandole el dia de la fechaNac
	 */
	console.log(`Cumpliste años en el ${oFechaNac.getFullYear()} un ${DIAS_SEMANA[oFechaNac.getDay()]}`);

	/**
	 * La fechaNac se incrementa de un año en un año hasta que llegue al año actual
	 */
	oFechaNac.setFullYear(oFechaNac.getFullYear()+1);
}




