/*
* @author: Alvaro Cordero Miñambres
* @version: 1.0
* @since: 15/11/2023
* 
* ENUNCIADO
* --------------
*Crea un script que pida al usuario un mes y devuelva todas las personas que cumplan años en ese mes:

*/

// Pedir al usuario el mes y el año mediante un cuadro de alerta

function comprobarCumpleaños() {
	// Recibo los valores que introduce el usuario en el formulario
	let mesIntroducidoPorUsuario = parseInt(document.getElementById("mes").value);
	// Valido la entrada con la ejecución del código o mostrando un mensaje de error por consola
	if (mesIntroducidoPorUsuario < 13 && mesIntroducidoPorUsuario > 0) {
	  // Esta función sirve para generar una fecha aleatoria
	  function fechaNacimientoAleatorio() {

		// Defino el rango de años (1980 - 2023)
		const añoMinimo = 1980;
		const añoMaximo = 2023;

		// Genero un año aleatorio en el rango
		let año = Math.floor(Math.random() * (añoMaximo - añoMinimo + 1)) + añoMinimo;

		// Genero un mes aleatorio (1 - 12)
		let mes = Math.floor(Math.random() * 12) + 1;

		// Obtengo el último día del mes generado
		let ultimoDiaDelMes = new Date(año, mes, 0).getDate();

		// Genero un día aleatorio (1 - último día del mes)
		let dia = Math.floor(Math.random() * ultimoDiaDelMes) + 1;

		return `${año}/${mes}/${dia}`;
	  }

	  // Declaro el mapa donde voy a almacenar las fechas de nacimiento
	  mapaFechaNacimiento = new Map();

	  // En el bucle cargamos los valores aleatorios 
	  for (let clave = 1; clave < 101; clave++) {
		mapaFechaNacimiento.set(clave, fechaNacimientoAleatorio());
	  }

	  // Declaro un array para los nombre de los meses
	  function obtenerMes(mes) {
		const aMes = [
		  "Enero",
		  "Febrero",
		  "Marzo",
		  "Abril",
		  "Mayo",
		  "Junio",
		  "Julio",
		  "Agosto",
		  "Septiembre",
		  "Octubre",
		  "Noviembre",
		  "Diciembre",
		];
		return aMes[mes];
	  }
	  // Construyo la tabla
	  let tabla = "< h2>Cumpleaños en el siguiente mes: < /h2>" +
		"< table border='1' style='text-align: center'>" +
		"< tr>< th colspan='2'>" + obtenerMes(mesIntroducidoPorUsuario - 1) + "< /th>< /tr>";

	  for (let [clave, valor] of mapaFechaNacimiento.entries()) {
		// Me quedo con el mes de la fecha de nacimiento y le sumo 1 para estar en el rango de 1-12
		let mesNacimiento = new Date(valor).toLocaleDateString('es-ES', { month: 'numeric' });
		if (mesNacimiento == mesIntroducidoPorUsuario) {
		  tabla += "< tr>< td>" + clave + "< /td>";
		  tabla += "< td>" + valor + "< /td>< /tr>";
		}
	  }

	  // Cierro la etiqueta '< tabla>' 
	  tabla += "< /table>";

	  // Muestro la tabla que hemos creado en el elemento resultado
	  resultado.innerHTML = tabla;
	} else {
	  console.log("ERROR: Número de mes incorrecto, introduce un número entre 1 y 12.");
	}
}