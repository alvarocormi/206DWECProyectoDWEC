var num1 = parseInt(prompt("Dime el primer numero: "));
var num2 = parseInt(prompt("Dime el segundo numero: "));
var op = prompt("Dime una operacion a realizar: ");

var resultado = 0;

if (!isNaN(num1) && !isNaN(num2)) {
	switch (op) {
		case '+':
			resultado = num1 + num2;
			alert("El resultado de la suma es: " + resultado);
			break;
		case '-':
			resultado = num1 - num2;
			alert("El resultado de la resta es: " + resultado);
			break;
		case '*':
			resultado = num1 * num2;
			alert("El resultado de la multiplicacion es: " + resultado);
			break;
		case '/':
			resultado = num1 / num2;
			alert("El resultado de la division es: " + resultado);
			break;
		default:
			alert("Erro , elige una operacion!!")
			break;
	}
} else {
	alert("No es un numero!!");
}
