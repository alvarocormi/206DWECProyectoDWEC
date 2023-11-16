/*CARACTERISTICAS DE LA POO*/

// Abstraccion -> No hace falta saber como esta echo un objeto para poder utilizarlo.
// Encapsulamiento -->  Mecanismo para reunir datos y métodos dentro de una estructura ocultando la implementación del objeto.
// Polimorfismo --> Objetos que pueden tener metodos con el mismo nombre pero que funcionen de distinta manera.
// Herencia --> El objeto hereda ciertas caracteristicas de otro objeto padre


//PROTOTIPOS
var a = [1, 2, 3, 4, 5];
var b = ["pepasd","ejemplo2"];


Array.prototype.sumaTotal = function sumaTotal() { //Mediante Array.prototype le puedes añadir un metodo a la clase que tu quieras para poder usarlo
	var suma = 0;
	//This se usará para representar o llamar al objeto que dicha función está modificando.
	for (const i of this) { 
		suma += i;
	}
}

Array.prototype.definicion="Esto es la creacion de una propiedad que vas a poder usar";

console.log(a.sumaTotal()); //Uso del array a
console.log(b.sumaTotal()); //Uso del array b
console.log(a.definicion); //Mostrara por consola el mensaje escrito en la propiedad

