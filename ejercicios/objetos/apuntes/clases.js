//CLASES DE JAVASCRIPT

//CLASE PUBLICA 
//PROPIEDAD PRIVADA

class Animal {
	//PROPIEDAD PRIVADA
	//Solo se pueden modificar estas variables dentro de la clase
	#nombre = "Tobby";

	//PROPIEDAD COMPUTADA (GETTER Y SETTER)


	//Creacion de un constrcutor dentro de una clase
	constructor(n = "Lagu", t = "perro", patas = 4) {
		this.#nombre = n;
		this.nombre = n;
		this.tipo = t;
		this.patas = patas
	}

	
}


//Instanciar un nuevo animal
var perro = new Animal("Rex", "perro", 3);

//Acceder a las propiedades de una clase
console.log(perro.nombre);


//PROPIEDAD COMPUTADA (GETTER Y SETTER)
class AnimalComputado {
	patas;

	//Creacion de un constrcutor dentro de una clase
	constructor(n = "Lagu") {
		this.nombre = n;
	}

	//Propiedad Setter
	set tipo(t) {
		if (t == "perro" ? this.patas = 4 : this.patas = 2);
	}

	//Propiedad Getter
	get tipo() {
		if (this.patas == "perro") {
			return "Perro";
		} else {
			return "Pato";
		}

	}

	//Creacion de un metodo publico en una clase 
	hablar() {
		if(this.tipo == "Perro") {
			console.log("Wow!!");
		} else {
			console.log("Quak!!");
		}
 	}


	//Creacion de un metodo privado en una clase 
	#hablar() {
		if(this.tipo == "Perro") {
			console.log("Wow!!");
		} else {
			console.log("Quak!!");
		}
 	}

	//Creacion de un metodo static (estatico)
	static caracteristicas() {
		consolele.log("Los animales son seres vivos.")
	}


}

var pato = new AnimalComputado("Pepe")
pato.tipo = "Pato";

//Como acceder al metodo de la clase
pato.hablar();

//Como acceder a un metodo estatico
AnimalComputado.caracteristicas();




