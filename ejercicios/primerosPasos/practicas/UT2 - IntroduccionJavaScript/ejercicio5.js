let maximo = null;
let minimo = null;
let suma = 0;
let cantidadNumeros = 0;

while (true) {
	let entrada = prompt("Introduce un número entero (0 para salir):");

	let numero = parseInt(entrada);

	if (numero === 0 || isNaN(numero)) {
		break;
	}
	if (maximo === null || numero > maximo) {
		maximo = numero;
	}
	if (minimo === null || numero < minimo) {
		minimo = numero;
	}

	suma += numero;
	cantidadNumeros++;
}

if (cantidadNumeros > 0) {
	let media = suma / cantidadNumeros;
	alert(`Numero máximo: ${maximo}\nNumero mínimo: ${minimo}\nMedia: ${media}`);
} else {
	alert("No se ingresaron números.");
}
