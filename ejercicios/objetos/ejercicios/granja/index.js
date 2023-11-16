import { Animal } from './Animal.js';
import { Vaca } from './Vaca.js';
import { Gallina } from './Gallina.js';
import { Granja } from './Granja.js';


var codigo = prompt("Introduce el codigo de la granja a crear: ");
var miGranja = new Granja(codigo);
var opcion = prompt("1. Info. Granja\n 2. Comprar Vacas\n3. Comprar Gallinas\n4. Vender Vacas\n5. Vender Gallinas\n6. Dar de comer Vacas\n7. Dar de comer Gallinas\n8. Ordeñar\n 9. Ver animales enfermos\n 10. Curar")
var salir = false;

console.log("AQUI");
while (!salir) {
	switch (opcion) {
		case "1":
			miGranja.toString();
			break;
		case "2":
			miGranja.comprarVacas(parseInt(prompt("Introduce el numero de vacas a comprar: ")));
			break;
		case "3":
			miGranja.comprarGallinas(parseInt(prompt("Introduce el numero de gallinas a comprar: ")));
			break;
		case "4":
			miGranja.venderVacas(parseInt(prompt("Introduce el numero de vacas a vender: ")));
			break;
		case "5":
			miGranja.venderGallinas(parseInt(prompt("Introduce el numero de gallinas a vender: ")));
			break;
		case "6":
			miGranja.darComerVacas(parseInt(prompt("Introduce el numero los kilos de forraje para las vacas:  ")));
			break;
		case "7":
			miGranja.darComerGallinas(parseInt(prompt("Introduce el numero los kilos de forraje para las vacas:  ")));
			break;
		case "8":
			miGranja.ordeñarVacas();
			break;
		case "9":
			miGranja.mostrarEnfermos();
			break;
		case "10":
			let tipoAnimal = prompt("¿ Que tipo de animal deseas curar (vaca o gallina) ?")
			switch (tipoAnimal) {
				case "vaca":
					let vacaEncontrada = false;
					let vacaACurar = parseInt(prompt("¿ Que vaca quieres curar (codigo) ?"));
					for (const vaca of miGranja.vacas) {
						if (vacaACurar == vaca.numId()) {
							vaca.curar();
							vacaEncontrada = true;
						}
					}

					if (!vacaEncontrada) {
						alert(`ERROR!! -> La vaca con id ${vacaACurar} no existe en la granja`)
					}
					break;

				case "gallina":
					let gallinaEncontrada = false;
					let gallinaACurar = parseInt(prompt("¿ Que gallina quieres curar (codigo) ?"));
					for (const gallina of miGranja.gallinas) {
						if (gallinaACurar == gallina.numId()) {
							gallina.curar();
							gallinaEncontrada = true;
						}
					}

					if (!gallinaEncontrada) {
						alert(`ERROR!! -> La gallina con id ${gallinaACurar} no existe en la granja`)
					}
					break;

				default:
					alert(tipoAnimal + "No es un tipo de animal correcto.");
					break;
			}
			break;

		default:
			salir = true;
			break;

	}
	var opcion = prompt("1. Info. Granja\n 2. Comprar Vacas\n3. Comprar Gallinas\n4. Vender Vacas\n5. Vender Gallinas\n6. Dar de comer Vacas\n7. Dar de comer Gallinas\n8. Ordeñar\n 9. Ver animales enfermos\n 10. Curar")
}
