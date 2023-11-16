var n = prompt("Introduce un número:");

if (!isNaN(n) && Number.isInteger(parseFloat(n))) {
	var primo = true;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i == 0) {
			primo = false;
		}
	}

	if (n % 2 == 0) {
		alert("Es un numero par");
	} else {
		alert("Es un numero impar");
	}

	if (primo) {
		alert("Es un numero primo");
	} else {
		alert("No es un numero primo");
	}

} else {
	alert("No es un numero");
}