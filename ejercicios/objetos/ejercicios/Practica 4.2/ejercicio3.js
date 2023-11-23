/*
* @author: Alvaro Cordero Miñambres
* @version: 1.0
* @since: 15/11/2023
* 
* ENUNCIADO
* --------------
*Crea un script que pida al usuario un mes y un año y muestre un calendario de ese mes.

*/


function generarCalendario() {
	// Recibo los valores que introduce el usuario
	let mes = parseInt(document.getElementById("mes").value) - 1;
	let año = parseInt(document.getElementById("año").value);

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

	// Obtengo el primer y último día del mes 
	let primerDia = new Date(año, mes, 1).getDay();
	const ultimoDia = new Date(año, mes + 1, 0).getDate();

	// Obtengo el elemento donde se mostrará el resultado
	let resultado = document.getElementById("resultado");

	// Construyo la tabla
	let tabla = "< h2>" + obtenerMes(mes) + " del " + año + "< /h2>" +
				"< table border='1' style='text-align: right'>" +
				"< tr>< th>Lun< /th>< th>Mar< /th>< th>Mié< /th>< th>Jue< /th>< th>Vie< /th>< th>Sáb< /th>< th>Dom< /th>< /tr>";

	// Ajusto para que la semana comience en lunes
	primerDia = (primerDia === 0) ? 6 : primerDia - 1;

	// Relleno los días del mes en la tabla
	let dias = 1;
	for (let i = 0; i < 6; i++) {
	  tabla += "< tr>";
	  for (let j = 0; j < 7; j++) {
		if (i === 0 && j < primerDia) {
		  // Celda vacía para los días anteriores al primer día del mes
		  tabla += "< td>< /td>";
		} else if (dias <= ultimoDia) {
		  // Celda con el día actual y formato ajustado
		  tabla += "< td>" + (dias < 10 ? " " + dias : dias) + "< /td>";
		  dias++;
		}
	  }
	  tabla += "< /tr>";
	  // Salgo del bucle cuando relleno todos los días del mes
	  if (dias > ultimoDia) {
		break;
	  }
	}

	// Cierro la etiqueta '< tabla>' 
	tabla += "< /table>";

	// Muestro la tabla que hemos creado en el elemento resultado
	resultado.innerHTML = tabla;
  }
