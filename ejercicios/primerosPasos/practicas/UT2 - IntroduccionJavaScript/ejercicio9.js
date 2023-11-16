const primerNumero = parseInt(prompt("Introduce el primer número:"));
const segundoNumero = parseInt(prompt("Introduce el segundo número:"));

var pares = 0;
var impares = 0;

for (let i = primerNumero + 1; i <= segundoNumero - 1; i++) {
	if (i % 2 === 0) {
		pares = i + pares;
	} else {
		impares = i + impares;
	}
}

alert(`Pares: ${pares}\nImpares: ${impares}`);
