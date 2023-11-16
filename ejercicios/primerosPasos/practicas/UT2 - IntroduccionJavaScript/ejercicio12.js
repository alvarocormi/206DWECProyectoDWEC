var totaln = 0;
var noNumerico = [];

do {
	var n = prompt("Introduce un número: ");
	if (n != null) {
		var aux = parseFloat(n);

		if (!isNaN(aux)) {
			totaln += aux;
		} else {
			noNumerico.push(n);
		}
	}
} while (n != null);

alert("Total Números: " + totaln);
alert("Total Caracteres: " + noNumerico.join(','));