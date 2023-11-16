var num1 = parseInt(prompt("Dime un numero: "));

if (!isNaN(num1) && num1 > 0 && num1 <= 100) {
	for (let index = 0; index <= 100; index++) {
		if (index % num1 === 0) {
			console.log(index)
		}
	}
} else {
	alert("No es un numero o has introducido uno mayor o menor que 100")
}

