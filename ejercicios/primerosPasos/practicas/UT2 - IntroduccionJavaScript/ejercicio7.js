var num1 = parseInt(prompt("Dime un numero entero positivo: "));

if(!isNaN(num1) && num1 > 0) {
	const numeroCadena = num1.toString();
	const digitos = numeroCadena.length;
	alert("El numero "+num1+' tiene '+digitos+ ' digitos');
} else {
	alert("El numero que has introducio es menor que 0 o no es un numero")
}