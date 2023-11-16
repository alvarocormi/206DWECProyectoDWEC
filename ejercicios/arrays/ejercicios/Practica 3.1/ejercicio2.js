var frase = prompt("Escribe una frase:");
var clave = prompt("Dime una clave");
var i = 0;

for (let posLetra in frase) {
	var cifra = frase.charCodeAt(posLetra)+Number(clave.charAt(i));
	document.write(String.fromCharCode(cifra));
	i++
	if(i===clave.length) i=0;
}




