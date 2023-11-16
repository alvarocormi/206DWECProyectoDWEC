var saludo = "Hola mundo!";

//Muestra en pantalla el contenido de la variable saludo
document.write(saludo);


//Let tiene alcance de bloque, es decir solo funciona en el mismo bloque
{
	//Si funciona
	let saludo2 = "Hola mundo2";
	document.write(saludo2);
}
	//No muestra nada porque esta fuera del bloque
	document.write(saludo2);


//Definir una constante
const PI = 3.14;
